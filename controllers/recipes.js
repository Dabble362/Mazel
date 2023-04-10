const cloudinary = require("../middleware/cloudinary");
const Recipe = require("../models/Recipe");
const Favorite = require("../models/Favorite");
const Comment = require("../models/Comments");

module.exports = {
  getProfile: async (req, res) => {
    const currentPage = "profile";
    console.log(currentPage);
    console.log("getProfile was invoked");
    try {
      //since we have a session each request contains the logged in user's
      //info: req.user
      //console.log(req.user) to see everything
      //Grabbing just the Recipes of the logged in user
      const recipes = await Recipe.find({ user: req.user.id });
      //Sending post data from mongodb and user data to ejs template
      res.render("profile.ejs", {
        recipes: recipes,
        user: req.user,
        currentPage: currentPage,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    const currentPage = "feed";
    console.log(currentPage);
    try {
      const recipes = await Recipe.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", {
        recipes: recipes,
        user: req.user,
        currentPage: currentPage,
      });
    } catch (err) {
      console.log(err);
    }
  },
  getRecipe: async (req, res) => {
    const currentPage = "recipe";
    console.log(currentPage);
    try {
      console.log("getRecipe was invoked");
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
  getFavorites: async (req, res) => {
    const currentPage = "favorites";
    console.log(currentPage);
    try {
      const recipes = await Favorite.find({ user: req.user.id }).populate(
        "recipe"
      );

      //Sending post data from mongodb and user data to ejs template
      res.render("favorites.ejs", {
        recipes: recipes,
        user: req.user,
        currentPage: currentPage,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createRecipe: async (req, res) => {
    try {
      console.log(`attempting to submit recipe!`);
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(req.body);
      await Recipe.create({
        name: req.body.name,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        description: req.body.description,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        likes: 0,
        user: req.user.id,
      });
      console.log("Recipe has been added!");

      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  favoriteRecipe: async (req, res) => {
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
    try {
      console.log("Likes +1");
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
    console.log("🔎 The search button is working.");
    try {
      const userEnteredSearchTerm = "test"; // Hardcoded for now
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
          $limit: 5,
        },
        {
          $project: {
            name: 1,
            image: 1,
            user: 1,
          },
        },
      ];
      const searchResults = await Recipe.aggregate(searchParams);
      console.log(
        "✅ You have successfully performed a search (i.e. calling Recipe.aggregate did not blow up)."
      );
      console.log("📜 Your search parameters were:");
      console.log(JSON.stringify(searchParams, null, 2)); // From https://stackoverflow.com/a/10729391
      console.log("🎁 ...and your search results are:");
      console.log(searchResults);
    } catch (err) {
      console.log("Error encountered while searching for recipes");
      console.log(err);
      res.redirect("/login");
    }
  },
  deleteRecipe: async (req, res) => {
    try {
      // Find post by id
      let recipe = await Recipe.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(Recipe.cloudinaryId);
      // Delete post from db
      await Recipe.remove({ _id: req.params.id });
      console.log("Deleted Recipe");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
