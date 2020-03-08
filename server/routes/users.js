const express = require('express');
const router  = express.Router();

const User = require("../models/User");


/* Get all users */
router.get("/allusers", (req, res, next) => {
  User.find()
    .then(allUsers => {
      res.json(allUsers);
    })
    .catch(err => console.log(err));
});
//This is ok at http://localhost:4000/users/allusers

/* Get user by id */
router.get('/user/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => next())
});
//This is ok at http://localhost:4000/users/user/5e623325140d067d79d4db62



 module.exports = router;
