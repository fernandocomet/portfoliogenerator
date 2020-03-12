import axios from "axios";

export default class Services {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:4000/works",
      withCredentials: true
    });
  }

  //Work
  getWorksFromUser = user_id =>
    this.service
      .get("/userworks", user_id)
      .then(response => response.data);

  getAllWorks = () =>
    this.service.get("/allworks").then(response => response.data);
   

  getWorkDetail = id =>
    this.service.get(`/work/${id}`).then(response => response.data);

  deleteWork = id => {
    this.service
      .delete(`/work/delete/${id}`)
      .then(response => response.data);  
  }
  // deleteWork = () =>
  //   this.service.delete("/work/delete/:id").then(response => response.data);

  createWorkGet = () =>
    this.service.get("/newwork").then(response => response.data);

  createPortfolioPost = portfolio =>
    this.service
      .post("/newportfolio", portfolio)
      .then(response => response.data);

  createWorkPost = work =>
    this.service
    .post("/newwork", work)
    .then(response => response.data);

  editWorkToGet = () =>
    this.service.get("/editwork/:id").then(response => response.data);
  editWorkToPost = () =>
    this.service.post("/editwork/:id").then(response => response.data);

  //Image
  deleteWorkImage = () =>
    this.service.delete("/deleteImageWork/:id").then(response => response.data);
  createImageWork = () =>
    this.service.post("/uploadImageWork/:id").then(response => response.data);
}
