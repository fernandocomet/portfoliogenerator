const express = require('express');
const router  = express.Router();

const User = require("../models/User");


/* Get all users */
router.get("/", (req, res, next) => {
  User.find()
    .then(allUsers => {
      res.json(allUsers);
    })
    .catch(err => console.log(err));
});
//This is ok at http://localhost:4000/users/

/* Get user by id */
router.get('/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => next())
});
//This is ok at http://localhost:4000/users/5e5eaff9bf3878627bb29380


 module.exports = router;
