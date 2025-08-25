const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = "uploads/products"; // default for images/videos

    if (file.fieldname === "product_file") {
      uploadPath = "files/products"; // for .zip file
    }

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    if (file.fieldname === "product_file") {
      // keep original name for zip
      return cb(null, file.originalname);
    }
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + "-" + file.fieldname + ext);
  },
});

const upload = multer({ storage });

module.exports = { upload };
