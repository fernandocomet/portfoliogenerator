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
//This is ok at http://localhost:4000/portfolios/5e5eaff9bf3878627bb29321

/* Get portfolio works */
router.get('/:id/works', (req, res, next) => {
    Portfolio.findById(req.params.id)
      .then(portfolio => {
        res.json(portfolio.works);
      })
      .catch(err => next())
  });
//This is ok at http://localhost:4000/portfolios/5e5eaff9bf3878627bb29321

/* Get Portfolios from one user */
router.get("/userportfolios", (req, res, next) => {
  User.findById(req.user._id)
    .populate("portfolios")
    .then(userPortfolios => {
      res.json(userPortfolios.portfolios);
    });
});
//This is ok at http://localhost:4000/portfolios/userportfolios

/* Create new Portfolio */
router.get('/new', (req, res, next) => {
    res.json('new');
})
//This is ok at http://localhost:4000/portfolios/new

/* Post to create new Portfolio */

router.post('/new', (req, res, next) => {
  const {alias, title, subtitle, works} = req.body
  const newPortfolio = {alias, title, subtitle, works}
  
    Portfolio.create(newPortfolio)
      .then(portfolioCreated => {
        console.log(portfolioCreated);
        User.findByIdAndUpdate(req.user._id, {
            $push: {
              portfolios: portfolioCreated._id
            }
          })
          .then(res.json(`/portfolios/${portfolioCreated._id}`))
          //.then(res.redirect(`/portfolios/${portfolioCreated._id}`))
          .catch(err => console.log(err))
      })
  })



/*  
  //POST To create a new race
  router.post('/new', ensureLogin.ensureLoggedIn(), uploadCloud.single("imgUrl"), (req, res, next) => {
  const {
      name,
      description,
      area,
      difficulty,
      length,
    } = req.body
  const imgUrl = req.file ? req.file.url : "";
  
  console.log(routeCoords)
    const newRace = {
      name,
      description,
      area,
      difficulty,
      length,
      imgUrl,
      startPoint: {
        type: "Point",
        coordinates: [req.body.lat, req.body.lng]
      },
      route: routeCoords
    }
  
    Race.create(newRace)
      .then(raceCreated => {
        console.log(raceCreated);
  
        User.findByIdAndUpdate(req.user._id, {
            $push: {
              races: raceCreated._id
            }
          })
          .then(res.redirect(`/races/${raceCreated._id}`))
          //acceder al id de la race creada, y push al array. traer al array del req.user
          .catch(err => console.log(err))
  
        // .then(userUpdated => res.json(userUpdated))
  
      })
  
  })

//Create new Portfolio / works -> Get
//Post to create new Portfolio / works
//Update Portfolio / works
//Delete Portfolio / works


/* Show races from one user 
  router.get('/myraces', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    User
      .findById(req.user._id)
      .populate('races')
      .then(userRaces => {
        //res.json(userRaces);
        res.render('races/myraces', userRaces)
      })
  })
  
  
  /*
  //route for races view - card view
  router.get('/', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    Race.find()
      .then(allRaces => {
        res.render('races/allraces-view', {
          allRaces
        })
      })
      .catch(err => console.log(err))
  });
  
  


let oneRace
//Show the Race details
router.get('/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  oneRace = req.params.id
  // console.log(oneRace);
  Race.findById(oneRace)
    .then(race => {
      res.render('races/race-detail', race)
    })
    .catch(err => next())
});


router.get('/api/one/:id', (req, res, next) => {
  Race.findById(req.params.id)
    .then(race => {
      console.log("race", race)
      res.json(race)
      // let {
      //   raceData
      // } = req.body
      // console.log(raceData);
    })
    .catch(err => console.log(err))
});


router.get('/edit/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Race.findById(req.params.id)
    //.then(race => res.json("races/edit-race"))
    .lean()
    .then(race => {
      race.lat = race.startPoint.coordinates[0]
      race.lng = race.startPoint.coordinates[1]
      // res.json(race)
      res.render('races/edit-race', race)
    })

    .catch(err => console.log(err))
});

router.post('/edit/:id', ensureLogin.ensureLoggedIn(), uploadCloud.single("imgUrl"), (req, res, next) => {
  console.log(req.body)
  const {
    name,
    description,
    area,
    difficulty,
    length,
  } = req.body;
  const imgUrl = req.file ? req.file.url : req.body.previousImgUrl;
  console.log(req.body.latitudeEditArr)
const latEditArr = req.body.latitudeEditArr;
const lngEditArr = req.body.longitudeEditArr;
let routeEditCoords = [{
  type: "Point",
  coordinates: [req.body.lat, req.body.lng]
}]

latEditArr.forEach((lat, i) => {
  routeEditCoords.push({
    type: "Point",
    coordinates: [lat, lngEditArr[i]]
  })
})

  let raceToUpdate = {
    name,
    description,
    area,
    difficulty,
    length,
    imgUrl,
    startPoint: {
      type: "Point",
      coordinates: [req.body.lat, req.body.lng]
    },
    route: routeEditCoords
  }
  Race.findByIdAndUpdate(req.params.id, raceToUpdate)
    .then(() => console.log(req.params.id))
    .then(() => res.redirect(`/races/${req.params.id}`))
    .catch(err => console.log(err))
})

router.post('/delete/:id', ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Race.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/races/myraces'))
    .catch(err => console.log(err))
})

*/

module.exports = router;


