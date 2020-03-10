require("dotenv").config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
//const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
//const logger = require("morgan");
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');

const User = require("./models/User");
const Portfolio = require("./models/Portfolio");
const passport = require("passport");

// Heroku -> MONGODB_URL   -> .connect(`${process.env.MONGODB_URL}`,
// Local -> MONGODB_LOCAL  -> .connect(`${process.env.MONGODB_LOCAL}`,

//Aquí 
const { MONGODB_URL } = process.env;
mongoose.Promise = Promise;
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log(`Connected to Mongo on ${MONGODB_URL}`);
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
var whitelist = [
  "http://localhost:3000", 
  "https://pgenerator.herokuapp.com"
];

var corsOptions = {
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));


// Middleware Setup
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(cookieParser());

app.use(
  session({
    secret: "angular auth passport secret shh",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 2419200000
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
require("./passport")(app);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
//app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Portfolio Generator - Create your portfolio in minutes";

//This is for the routes
const authRouter = require("./routes/auth");
app.use("/api/auth", authRouter);

const index = require("./routes/index");
app.use("/", index);

const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes);

const portfolioRoutes = require("./routes/portfolios");
app.use("/api/portfolios", portfolioRoutes);

const workRoutes = require("./routes/works");
app.use("/works", workRoutes);

const fileRoutes = require("./routes/files");
app.use('/files', fileRoutes);

module.exports = app;
