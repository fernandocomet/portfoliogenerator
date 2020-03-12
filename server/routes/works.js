const express = require('express');
const router  = express.Router();

//const User = require("../models/User");
const Work = require("../models/Work");
const User = require("../models/User");
const Portfolio = require("../models/Portfolio");

/* Get all works */
router.get("/allworks", (req, res, next) => {
    Work.find()
      .then(allWorks => {
        res.json(allWorks);
      })
      .catch(err => console.log(err));
  });
//This is ok at http://localhost:4000/works/allworks

/* Get work by id */
router.get('/work/:id', (req, res, next) => {
    Work.findById(req.params.id)
      .then(work => {
        res.json(work);
      })
      .catch(err => next())
  });
//This is ok at http://localhost:4000/works/work/5e623324140d067d79d4db02

/* Get Works from one user */
router.get("/userworks", (req, res, next) => {
    User.findById(req.user._id)
      .populate("works")
      .then(userWorks => {
        res.json(userWorks.works);
      });
  });
//This is ok at http://localhost:4000/works/userworks

/* Route to Delete Work */
router.delete("/work/delete/:id", (req, res, next) => {
  Work.findByIdAndDelete(req.params.id)
    .then(work => {
      res.json(work);
    })
    .catch(err => console.log(err));
});


// router.delete('/work/delete/:idWork/:idPortfolio', (req, res, next) => {
//   Work.findByIdAndDelete(req.params.id)
//     .then(work => {
//       Portfolio.findByIdAndUpdate(req.params.portfolioId, { $pull: { works: req.params.id}}, {new: true})
//       .then(work => res.json(work))
//     })
//     .catch(err => console.log(err))
// })

// router.delete("/:id/:patientId", (req, res, next) => {
//   const { id, patientId } = req.params;
//   Registry.findByIdAndDelete(id)
//     .then(() =>
//       Patient.findByIdAndUpdate(
//         patientId,
//         {
//           $pull: { registries: id }
//         },
//         { new: true }
//       ).then(patient => res.status(200).json(patient))
//     )
//     .cath(error =>
//       res.status(500).json({ message: "Error deleting Registry" })
//     );
// });
//This is working at http://localhost:4000/works/work/delete/5e623324140d067d79d4db02


/* Create new Work */
router.get('/newwork', (req, res, next) => {
    res.json('new');
})
//This is ok at http://localhost:4000/works/newwork


/* Route To create a new Work */
router.post('/newwork', (req, res, next) => {

  const { title, subtitle, description, image } = req.body
  const newWork = { title, subtitle, description, image }

  Work.create(newWork)
    .then(workCreated => {
      console.log(workCreated);
      User.findByIdAndUpdate('req.user._id', {
          $push: {
            works: workCreated._id
          }
        })
        .then(res.json(`/works/${workCreated._id}`))
        //.then(res.redirect(`/works/${workCreated._id}`))
        .catch(err => console.log(err))
    })

})
// http://localhost:4000/works/newwork  


/* Edit Work */
router.get('/editwork/:id', (req, res, next) => {
  Work.findById(req.params.id)
    .lean()
    .then(work => {
      res.json(work)
      //res.render('works/edit-work', work)
    })
    .catch(err => console.log(err))
});
// http://localhost:4000/works/editwork/5e623324140d067d79d4db05

router.post('/editwork/:id', (req, res, next) => {
  console.log(req.body)
  const { title, subtitle, description, image } = req.body;

  let workToUpdate = { title, subtitle, description, image }
  Work.findByIdAndUpdate(req.params.id, workToUpdate)
    .then(() => console.log(req.params.id))
    .then(() => res.json(`/works/${req.params.id}`))
    //.then(() => res.redirect(`/works/${req.params.id}`))
    .catch(err => console.log(err))
})
// http://localhost:4000/works/editwork/5e623324140d067d79d4db05


/* Delete image from work */
router.post('/deleteImageWork/:id', (req, res, next) => {
  console.log(req.body)
  const {image } = req.body;

  let workToUpdate = {image }
  Work.findByIdAndUpdate(req.params.id, workToUpdate)
    .then(() => console.log(req.params.id))
    .then(() => res.json(`/works/${req.params.id}`))
    //.then(() => res.redirect(`/works/${req.params.id}`))
    .catch(err => console.log(err))
})
// http://localhost:4000/works/deleteImageWork/5e623324140d067d79d4db05

/* Upload image to work */
router.post('/uploadImageWork/:id', (req, res, next) => {
  console.log(req.body)
  const {image } = req.body;

  let workToUpdate = {image }
  Work.findByIdAndUpdate(req.params.id, workToUpdate)
    .then(() => console.log(req.params.id))
    .then(() => res.json(`/works/${req.params.id}`))
    //.then(() => res.redirect(`/works/${req.params.id}`))
    .catch(err => console.log(err))
})
// http://localhost:4000/works/uploadImageWork/5e623324140d067d79d4db05



module.exports = router;
