const express = require('express');
const router  = express.Router();
const ensureLogin = require("connect-ensure-login");  //This

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


module.exports = router;
