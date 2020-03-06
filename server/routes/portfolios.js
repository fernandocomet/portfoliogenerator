const express = require('express');
const router  = express.Router();

const User = require("../models/User");
const Portfolio = require("../models/Portfolio")

/* Get all portfolios */
router.get("/", (req, res, next) => {
    Portfolio.find()
      .then(allPortfolios => {
        res.json(allPortfolios);
      })
      .catch(err => console.log(err));
  });
//This is ok at http://localhost:4000/portfolios/

/* Get portfolio by id */
router.get('/:id', (req, res, next) => {
    Portfolio.findById(req.params.id)
      .then(portfolio => {
        res.json(portfolio);
      })
      .catch(err => next())
  });
//This is ok at http://localhost:4000/portfolios/5e61330b28771756e15d7a16

/* Get portfolio works */
router.get('/:id/works', (req, res, next) => {
    Portfolio.findById(req.params.id)
      .then(portfolio => {
        res.json(portfolio.works);
      })
      .catch(err => next())
  });
//This is ok at http://localhost:4000/portfolios/5e61330b28771756e15d7a16/works

/* Get Portfolios from one user */
router.get("/userportfolios", (req, res, next) => {
  User.findById(req.user._id)
    .populate("portfolios")
    .then(userPortfolios => {
      res.json(userPortfolios.portfolios);
    });
});
//This is ok at http://localhost:4000/portfolios/userportfolios //Must be logged in


/* Route to Delete Portfolio */
router.delete('/delete/:id', (req, res, next) => {
  Portfolio.findByIdAndDelete(req.params.id)
    .then(portfolio => {
      res.json(portfolio);
    })
    .catch(err => console.log(err))
})
//This is working at http://localhost:4000/portfolios/delete/5e61330b28771756e15d7a16 


/* Create new Portfolio */
router.get('/new', (req, res, next) => {
    res.json('new');
})
//This is ok at http://localhost:4000/portfolios/new


let idtrial = "5e61330c28771756e15d7a76"

/* POST To create a new Portfolio */
router.post('/new', (req, res, next) => {

  const { alias, title, subtitle, works } = req.body
  const newPortfolio = { alias, title, subtitle, works }

  Portfolio.create(newPortfolio)
    .then(portfolioCreated => {
      User.findByIdAndUpdate('req.user._id', {
          $push: {
            portfolios: portfolioCreated._id
          }
        })
        .then(res.json(`/portfolios/${portfolioCreated._id}`))
        //.then(res.redirect(`/portfolios/${portfolioCreated._id}`))
        .catch(err => console.log(err))
    })

})
// Not working yet


/* Edit Portfoliio */
router.get('/edit/:id', (req, res, next) => {
  Portolio.findById(req.params.id)
    //.then(portfolio => res.json("portfolios/edit-portfolio"))
    .lean()
    .then(portfolio => {
      res.json(portfolio)
      //res.render('portfolios/edit-portfolio', portfolio)
    })
    .catch(err => console.log(err))
});

router.post('/edit/:id', (req, res, next) => {
  console.log(req.body)
  const { alias, title, subtitle, works } = req.body;

  let portfolioToUpdate = { alias, title, subtitle, works  }
  Portfolio.findByIdAndUpdate(req.params.id, portfolioToUpdate)
    .then(() => console.log(req.params.id))
    .then(() => res.json(`/portfolios/${req.params.id}`))
    .then(() => res.redirect(`/portfolios/${req.params.id}`))
    .catch(err => console.log(err))
})


module.exports = router;


