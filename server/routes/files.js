const express = require('express');
const router = express.Router();

const uploader = require('../config/cloudinary');

router.post('/upload', uploader.single("imagecover"), (req, res, next) => {

    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }

    res.json({ secure_url: req.file.secure_url });
})

module.exports = router;

// http://localhost:3000/api/files/upload  -> Not found