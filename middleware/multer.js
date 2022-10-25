const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(
        new Error(
          "File type is not supported. Supported types are jpg, jpeg, and png."
        ),
        false
      );
      return;
    }
    cb(null, true);
  },
});
