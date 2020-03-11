import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:4000/api/portfolios",
      withCredentials: true
    });
  }

  //User
  getAllUsers = () =>
    this.service.get("/allusers").then(response => response.data);
  getUserDetail = () =>
    this.service.get("/user/:id").then(response => response.data);

  getPortfoliosFromUser = user_id =>
    this.service
      .get("/userportfolios", user_id)
      .then(response => response.data);

  //Portfolio
  //postCoaster = coaster => this.service.post(`/new`, coaster).then(response => response.data)
  createPortfolioPost = portfolio =>
    this.service
      .post("/newportfolio", portfolio)
      .then(response => response.data);

  getAllPortfolios = () =>
    this.service.get("/allportfolios").then(response => response.data);

  // getPortfolioDetail = id =>
  //   this.service.get("/portfolio/:id").then(response => response.data);

  getPortfolioDetail = id =>
    this.service.get(`/portfolio/${id}`).then(response => response.data);

  getPortfolioWorks = id =>
    this.service.get(`/portfolio/${id}/works`).then(response => response.data);

  // getPortfolioWorks = () =>
  //   this.service.get("/portfolio/:id/works").then(response => response.data);

  deletePortfolio = id =>
    this.service
      .delete(`/portfolio/delete/${id}`)
      .then(response => response.data);

  createPortfolioGet = () =>
    this.service.get("/newportfolio").then(response => response.data);

  //createPortfolioPost = () =>
  //this.service.post("/newportfolio").then(response => response.data);
  editPortfolioToGet = () =>
    this.service.get("/portfolio/:id").then(response => response.data);

  editPortfolioToPost = id =>
    this.service.get(`/editportfolio/${id}`).then(response => response.data);

  // editPortfolioToPost = () =>
  //   this.service.post("/editportfolio/:id").then(response => response.data);

  editPortfolioCover = () =>
    this.service
      .post("/editportfoliocover/:id")
      .then(response => response.data);
}

/*
Route changed adding "/portfolios"
So what I had as http://localhost:4000/portfolios/userportfolios
is now http://localhost:4000/api/portfolios/userportfolios
*/
