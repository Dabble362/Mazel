module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      console.log("👑 You are authenticated.");
      return next();
    } else {
      console.log("👢 You have been redirected because you are NOT authenticated where you should be.");
      res.redirect("/");
    }
  },
  ensureGuest: function (req, res, next) {
    if (!req.isAuthenticated()) {
      console.log("💁‍♀️ You are a guest (you are not authenticated).");
      return next();
    } else {
      console.log("👢 You have been redirected because you ARE authenticated when you should NOT be.");
      res.redirect("/dashboard");
    }
  },
};
