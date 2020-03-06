const express = require('express');
const router  = express.Router();
const ensureLogin = require("connect-ensure-login");  
const uploadCloud = require('../config/cloudinary.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/*
//actual write to cloudinary via the middleware specified in ../config/cloudinary.js
router.post('/api/users/first-user/pictures', uploadCloud.single('photo'), (req, res, next) => {
  const imgName = req.file.originalname;
  const newPhoto = new Photo({imgName})
  console.log(req.file.url);

  //actual write in mongo using mongoose
  newPhoto.save()
  .then(photo => {
    res.json({url: req.file, photo: photo});
  })
  .catch(error => {
    console.log(error);
  })
});

*/

module.exports = router;