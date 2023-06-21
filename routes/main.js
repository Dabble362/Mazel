const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const recipesController = require("../controllers/recipes");
const favoritesController = require('../controllers/favorites');
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, recipesController.getProfile);
router.get("/favorites", ensureAuth, favoritesController.getFavorites);
router.get("/searchResults", ensureAuth, recipesController.searchRecipe);

//feed route
router.get("/feed", ensureAuth, recipesController.getFeed);

//routes for user login/signup
router.get("/login", authController.getLogin);
router.get("/signup", authController.getSignup);

//routes for user logout
router.get("/logout", authController.logout);

//post routes
router.post("/login", authController.postLogin);
router.post("/signup", authController.postSignup);

module.exports = router;
