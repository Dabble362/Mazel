const Favorite = require('../models/Favorite');

module.exports = {

  getFavorites: async (req, res) => {
    const currentPage = "favorites";
    const skip =
      parseInt(req.query.skip || "0", 10) <= 0
        ? 0
        : parseInt(req.query.skip, 10);
    const limit = req.query.limit || 4;
    console.log(currentPage);
    try {
      const totalFavorites = await Favorite.find({ user: req.user.id })
        .countDocuments();
      const recipes = await Favorite.find({ user: req.user.id })
        .populate("recipe")
        .skip(skip)
        .limit(limit);

      //Sending post data from mongodb and user data to ejs template
      res.render("favorites.ejs", {
        recipes: recipes,
        totalFavorites: totalFavorites,
        skip: skip,
        limit: limit,
        user: req.user,
        currentPage: currentPage,
      });
    } catch (err) {
      console.log(err);
    }
  }
}