const express = require('express');
const router = express.Router();
const cloudinary = require('cloudinary').v2;

const upload = require('../config/db/multer');

// we will upload image on cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'image-uploader',
      width: 160,
    });
    res.status(200).json({
      name: req.file.originalname,
      url: result.secure_url,

      width: result.width,
      height: result.height,
      size: req.file.size,
      created_at: result.created_at,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
