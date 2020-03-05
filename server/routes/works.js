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

/* Route to Delete Work */
router.delete('/delete/:id', (req, res, next) => {
  Work.findByIdAndDelete(req.params.id)
    .then(work => {
      res.json(work);
    })
    .catch(err => console.log(err))
})
//This is working at http://localhost:4000/works/delete/id 


/* Create new Work */
router.get('/new', (req, res, next) => {
    res.json('new');
})
//This is ok at http://localhost:4000/works/new


/* Route To create a new Work */
router.post('/new', (req, res, next) => {

  const { title, subtitle, description, images } = req.body
  const newWork = { title, subtitle, description, images }

  Work.create(newWork)
    .then(workCreated => {
      console.log(workCreated);
      User.findByIdAndUpdate(req.user._id, {
          $push: {
            works: workCreated._id
          }
        })
        .then(res.json(`/works/${workCreated._id}`))
        //.then(res.redirect(`/works/${workCreated._id}`))
        .catch(err => console.log(err))
    })

})
// Not working yet


/* Edit Work */
router.get('/edit/:id', (req, res, next) => {
  Work.findById(req.params.id)
    .lean()
    .then(work => {
      res.json(work)
      //res.render('works/edit-work', work)
    })
    .catch(err => console.log(err))
});

router.post('/edit/:id', (req, res, next) => {
  console.log(req.body)
  const { title, subtitle, description, images } = req.body;

  let workToUpdate = { title, subtitle, description, images }
  Work.findByIdAndUpdate(req.params.id, workToUpdate)
    .then(() => console.log(req.params.id))
    .then(() => res.json(`/works/${req.params.id}`))
    //.then(() => res.redirect(`/works/${req.params.id}`))
    .catch(err => console.log(err))
})

module.exports = router;
