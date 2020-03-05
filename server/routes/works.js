const express = require('express');
const router  = express.Router();

//const User = require("../models/User");
const Work = require("../models/Work");
const User = require("../models/User");
const Portfolio = require("../models/Portfolio");

/* Get all works */
router.get("/", (req, res, next) => {
    Work.find()
      .then(allWorks => {
        res.json(allWorks);
      })
      .catch(err => console.log(err));
  });
//This is ok at http://localhost:4000/works/

/* Get work by id */
router.get('/:id', (req, res, next) => {
    Work.findById(req.params.id)
      .then(work => {
        res.json(work);
      })
      .catch(err => next())
  });
//This is ok at http://localhost:4000/works/5e5eaff9bf3878627bb29331

/* Get Works from one user */
router.get("/userworks", (req, res, next) => {
    User.findById(req.user._id)
      .populate("works")
      .then(userWorks => {
        res.json(userWorks.works);
      });
  });
//This is ok at http://localhost:4000/works/userworks

/* Get Works from one portfolio */ 
//???????
router.get("/portfolioworks", (req, res, next) => {
    Portfolio.findById(req.portfolio._id)
      .populate("works")
      .then(portfolioWorks => {
        res.json(portfolioWorks.works);
      });
  });
//This is ok at http://localhost:4000/works/portfolioworks

/* Create new Work */
router.get('/new', (req, res, next) => {
    res.json('new');
})
//This is ok at http://localhost:4000/works/new

module.exports = router;
