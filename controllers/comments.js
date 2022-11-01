const Comments = require("../models/Comments");

module.exports = {
  // const post = await Post.findById(req.params.id);
  createComment: async (req, res) => {
    try {
      await Comments.create({
        comment: req.body.comment,
        postId: req.params.id,
      });
      console.log("Comment has been added!");
      res.redirect("/recipe/" + req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
};
