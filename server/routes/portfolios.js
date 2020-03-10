const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Portfolio = require("../models/Portfolio");

/* Get all portfolios */
router.get("/allportfolios", (req, res, next) => {
  Portfolio.find()
    .then(allPortfolios => {
      res.json(allPortfolios);
    })
    .catch(err => console.log(err));
});
//This is ok at http://localhost:4000/portfolios/allportfolios

/* Get portfolio by id */
router.get("/portfolio/:id", (req, res, next) => {
  Portfolio.findById(req.params.id)
    .then(portfolio => {
      res.json(portfolio);
    })
    .catch(err => next());
});
//This is ok at http://localhost:4000/portfolios/portfolio/5e623324140d067d79d4daf3

/* Get portfolio works */
router.get("/portfolio/:id/works", (req, res, next) => {
  Portfolio.findById(req.params.id)
    .then(portfolio => {
      res.json(portfolio.works);
    })
    .catch(err => next());
});
//This is ok at http://localhost:4000/portfolios/portfolio/5e623324140d067d79d4daf3/works

/* Get Portfolios from one user */
router.get("/userportfolios", (req, res, next) => {
  User.findById(req.user._id)
    .populate("portfolios")
    .then(userPortfolios => {
      // console.log(userPortfolios.portfolios)
      res.json(userPortfolios.portfolios);
    });
});
//This is ok at http://localhost:4000/portfolios/userportfolios //Must be logged in

/* Route to Delete Portfolio */
router.delete("/portfolio/delete/:id", (req, res, next) => {
  console.log(req.params.id);
  Portfolio.findByIdAndDelete(req.params.id)
    .then(portfolio => {
      res.json(portfolio);
    })
    .catch(err => console.log(err));
});
//This is working at http://localhost:4000/portfolios/portfolio/delete/5e623324140d067d79d4daf2

/* Create new Portfolio */
router.get("/newportfolio", (req, res, next) => {
  res.json("new");
});
//This is ok at http://localhost:4000/portfolios/newportfolio

//let idtrial = "5e61330c28771756e15d7a76"

/* POST To create a new Portfolio */
router.post("/newportfolio", (req, res, next) => {
  const { alias, title, subtitle, imagecover, works } = req.body;
  const newPortfolio = { alias, title, subtitle, imagecover, works };

  Portfolio.create(newPortfolio).then(portfolioCreated => {
    User.findByIdAndUpdate("req.user._id", {
      $push: {
        portfolios: portfolioCreated._id
      }
    })
      .then(res.json(`/portfolios/${portfolioCreated._id}`))
      //.then(res.redirect(`/portfolios/${portfolioCreated._id}`))
      .catch(err => console.log(err));
  });
});
// http://localhost:4000/portfolios/newportfolio

/* Edit Portfoliio */

/* => Same as getPortfoliobyID => /portfolio/:id
http://localhost:4000/portfolios/portfolio/5e623324140d067d79d4dafe  */

router.post("/editportfolio/:id", (req, res, next) => {
  console.log(req.body);
  const { alias, title, subtitle, imagecover, works } = req.body;

  let portfolioToUpdate = { alias, title, subtitle, imagecover, works };
  Portfolio.findByIdAndUpdate(req.params.id, portfolioToUpdate)
    .then(() => console.log(req.params.id))
    .then(() => res.json(`/portfolios/${req.params.id}`))
    .then(() => res.redirect(`/portfolios/${req.params.id}`))
    .catch(err => console.log(err));
});
// http://localhost:4000/portfolios/editportfolio/5e623324140d067d79d4daff

/* Update portfolio image */
router.post("/editportfoliocover/:id", (req, res, next) => {
  console.log(req.body);
  const { imagecover } = req.body;

  let portfolioToUpdate = { imagecover };
  Portfolio.findByIdAndUpdate(req.params.id, portfolioToUpdate)
    .then(() => console.log(req.params.id))
    .then(() => res.json(`/portfolios/${req.params.id}`))
    .then(() => res.redirect(`/portfolios/${req.params.id}`))
    .catch(err => console.log(err));
});
// http://localhost:4000/portfolios/editportfoliocover/5e63f198151fc60e5800780f

module.exports = router;
