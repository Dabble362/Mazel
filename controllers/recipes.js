const cloudinary = require("../middleware/cloudinary");
const mongoose = require("mongoose");
const Recipe = require("../models/Recipe");
const Favorite = require("../models/Favorite");
const Comment = require("../models/Comments");

const MaxNumOfDisplayedRecipes = 6;
const NextSkipValue = (currentSkipValue) => {
  return Math.max(0, parseInt(currentSkipValue || "0", 10));
}

module.exports = {
  getProfile: async (req, res) => {
    console.log("getProfile was invoked");
    const currentPage = "profile";
    console.log(currentPage);
    try {
      //since we have a session each request contains the logged in user's
      //info: req.user
      //console.log(req.user) to see everything
      //Grabbing just the Recipes of the logged in user
      console.log(req.user.id);

      const dataPipeline = [
        { $match: { user: mongoose.Types.ObjectId(req.user.id) } },
        { $skip: NextSkipValue(req.query.skip) },
        { $limit: MaxNumOfDisplayedRecipes },
      ];

      const recipes = await Recipe.aggregate(dataPipeline);
      console.log(`Here is RecipesData ${recipes}`);

      // Sending post data from mongodb and user data to ejs template

      const userRecipeCount = await Recipe.countDocuments({
        user: req.user.id,
      });
      console.log(
        `User ${req.user.id} has ${userRecipeCount} recipes in the collection.`
      );

      res.render("profile.ejs", {
        recipes: recipes,
        user: req.user,
        skip: NextSkipValue(req.query.skip),
        userRecipeCount,
        currentPage: currentPage,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    console.log("getFeed was invoked");
    const currentPage = "feed";
    console.log(currentPage);
    try {
      const totalRecipes = await Recipe.countDocuments();
      const recipes = await Recipe.find()
        .sort({ createdAt: "desc" })
        .skip(NextSkipValue(req.query.skip))
        .limit(MaxNumOfDisplayedRecipes)
        .lean();
      res.render("feed.ejs", {
        recipes: recipes,
        user: req.user,
        skip: NextSkipValue(req.query.skip),
        limit: MaxNumOfDisplayedRecipes,
        totalRecipes: totalRecipes,
        currentPage: currentPage,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getRecipe: async (req, res) => {
    console.log("getRecipe was invoked");
    const currentPage = "recipe";
    try {
      console.log(req.params);
      const comment = await Comment.find({ postId: req.params.id });
      console.log("comment: ", comment);
      const recipe = await Recipe.findById(req.params.id);
      res.render("recipe.ejs", {
        recipe: recipe,
        user: req.user,
        comment: comment,
        currentPage: currentPage,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createRecipe: async (req, res) => {
    console.log("createRecipe was invoked");
    try {
      console.log(`attempting to submit recipe!`);
      // Upload image to cloudinary
      const result = await cloudinary.uploader
        .upload(req.file.path, { width: 600, height: 600, crop: "fill" })
        .then((response) => {
          console.log("Cloudinary response: ", response);
          return response;
        });
      console.log("Description: ", req.body.description);
      console.log("Ingredients: ", req.body.ingredients);
      console.log("Directions: ", req.body.directions);
      await Recipe.create({
        name: req.body.recipeName,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        description: req.body.description,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        likes: 0,
        user: req.user.id,
        userName: req.user.userName,
      });
      console.log("Recipe has been added!");

      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  favoriteRecipe: async (req, res) => {
    console.log("favoriteRecipe was invoked");
    try {
      await Favorite.create({
        user: req.user.id,
        recipe: req.params.id,
      });
      console.log("Favorite recipe has saved!");
      res.redirect(`/recipe/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  likeRecipe: async (req, res) => {
    console.log("likeRecipe was invoked");
    try {
      await Recipe.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      res.redirect(`/recipe/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  searchRecipe: async (req, res) => {
    console.log("searchRecipe was invoked");
    console.log("Query params:", req.query);
    const currentPage = "searchResults";
    try {
      const userEnteredSearchTerm = req.body.searchQuery
        ? req.body.searchQuery.trim()
        : req.query.userEnteredSearchTerm;
      if (!userEnteredSearchTerm) {
        console.log(`Empty search query.`);
        res.redirect("/");
        return;
      }
      const searchParams = [
        {
          $search: {
            index: "recipes",
            text: {
              query: userEnteredSearchTerm,
              path: ["name", "directions", "ingredients"],
            },
          },
        },
        {
          $project: {
            name: 1,
            image: 1,
            user: 1,
            description: 1,
          },
        },
      ];

      const searchResults = await Recipe.aggregate(searchParams)
        .sort({ createdAt: "desc" })
        .skip(NextSkipValue(req.query.skip))
        .limit(MaxNumOfDisplayedRecipes);

      const totalRecipes = searchResults.length;
      console.log(`Total # of queried recipes = ${totalRecipes}`)

      console.log(
        "✅ You have successfully performed a search (i.e. calling Recipe.aggregate did not blow up)."
      );
      console.log("📜 Your search parameters were:");
      console.log(JSON.stringify(searchParams, null, 2)); // From https://stackoverflow.com/a/10729391
      console.log("🎁 ...and your search results are:");
      console.log(searchResults);
      res.render("searchResults.ejs", {
        user: req.user,
        userEnteredSearchTerm: userEnteredSearchTerm,
        recipes: searchResults,
        skip: NextSkipValue(req.query.skip),
        limit: MaxNumOfDisplayedRecipes,
        currentPage: currentPage,
      })
    } catch (err) {
      console.log("Error encountered while searching for recipes");
      console.log(err);
      res.redirect("/login");
    }
  },
  deleteRecipe: async (req, res) => {
    console.log('deleteRecipe was invoked');
    try {
      const recipeDbId = req.params.id;
      console.log("   Finding recipe id: ", recipeDbId);
      const favoritedRecipes = await Favorite.find({ recipe: recipeDbId });
      console.log("   Checking if favorited:", favoritedRecipes);
      if (favoritedRecipes.length === 0) {
        // The recipe does not exist in the favorites collection
        console.log("   Recipe is not favorited");
      } else {
        // The recipe exists in the favorites collection
        console.log("   Recipe is favorited", `   Here are the Favorite Documents: ${favoritedRecipes}`);
        for (const favorite of favoritedRecipes) {
          console.log(`  Attempting to remove favorite document ${favorite._id}`);
          await Favorite.deleteOne({ _id: favorite._id });
        }
      }
      const recipe = await Recipe.findById({ _id: recipeDbId });
      const recipeCloudinaryId = recipe.cloudinaryId;
      console.log("   Found CloudinaryID on recipe: ", recipeCloudinaryId);
      await cloudinary.uploader.destroy(recipeCloudinaryId);
      console.log("   Deleted CloudinaryID image: ", recipeCloudinaryId);
      await recipe.remove({ _id: recipeDbId });
      console.log("   Deleted recipe ID from db: ", recipeDbId);
      console.log("   ✅ deleteRecipe has completed successfully");
      res.redirect("/profile");
    } catch (err) {
      console.log("   An error has occurred while attempting to delete a recipe.");
      console.log(err);
      res.redirect("/profile");
    }
  },
};
