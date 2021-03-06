import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

// import ProjectList from './components/projects/ProjectList';
import Navbar from "./components/navbar/Navbar";
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Contents from "./components/contents/Contents";
import PortfolioList from "./components/portfolioList/PortfolioList";
import WorkList from "./components/workList/WorkList";
import Footer from "./components/footer/Footer";
import Match from "./components/match/Match";
import FinalPortfolios from "./components/FinalPortfolios/FinalPortfolios";
import PortfolioDetails from "./components/portfolioDetails/PortfolioDetails";
import WorkDetails from "./components/workDetails/WorkDetails";
import CreatePortfolio from "./components/portfolioForm/CreatePortfolio";
import EditPortfolio from "./components/portfolioForm/EditPortfolio";
import CreateWork from "./components/workForm/CreateWork";
import EditWork from "./components/workForm/EditWork";
import Portfolioservices from "./services/portfolioservices";
import 'reset-css';
import PhotographerStatic from "./components/FinalPortfolios/PhotographerStatic";
import PhotographerGsap from "./components/FinalPortfolios/PhotographerGsap";



//App es la aplicación base, que se sirve del servicio AuthService para conectar con la bbdd
class App extends Component {
  //en el tiempo de construcción de la aplicación, creamos una instancia del authservice
  constructor(props) {
    super(props);
    //arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
    this.state = { 
      loggedInUser: null,
      portfolios:null
    }
    this.service = new AuthService()
    this.services = new Portfolioservices()
   

    //this.fetchUser()
  }

  componentDidUpdate = (prevProps, prevState) => console.log("App Updated:", this.state)
  componentDidMount = () => this.fetchUser()

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj,
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  //este método vuelca la información del usuario y lo guarda en el state de app que siempre puedes revisitar
  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response,
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false,
        });
      });
  }

  updatePortfolio = (event) => {
    event.preventDefault()
    this.services
      .getPortfoliosFromUser(this.state.loggedInUser._id)
      .then(portfolios => this.setState({ portfolios: portfolios }))
      .catch(err => console.log(err));
  };

  render() {
    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <Redirect to="/home" />

          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
              <Switch>  
                <Route path="/portfolio/:id" render={props => <PortfolioDetails {...props} />} />
                <Route path="/newportfolio" render={props => <CreatePortfolio {...props} />} />
                <Route path="/editportfolio/:id" render={props => <EditPortfolio {...props} />} />

                <Route path="/work/:id" render={props => <WorkDetails {...props} />} />
                <Route path="/newwork" render={props => <CreateWork {...props} />} />
                <Route path="/editwork/:id" render={props => <EditWork {...props} />} />

                {/* <Route exact path="/home" component={App} />*/}
                <Route exact path="/match" render={props => <Match userData={this.state.loggedInUser} portfolioData={this.state.portfolios} />} />
                <Route exact path="/portfolios" component={FinalPortfolios} />  
                <Route exact path="/portfolios/photographer_static" component={PhotographerStatic} />  
                <Route exact path="/portfolios/photographer_gsap" component={PhotographerGsap} />  
                <Route path="/home" render={props => 
                  <>
                    <PortfolioList userData={this.state.loggedInUser} updatePortfolio={(event) => this.updatePortfolio(event)} />
                    <WorkList userData={this.state.loggedInUser} /> 
                  </>
                }
                  />
              </Switch>
              <Contents /> 
              

              <Footer />
              
            </header>
          </div>
        </React.Fragment>
      );
    } else {
      //si no estás logeado, mostrar opcionalmente o login o signup
      return (
        <React.Fragment>
          <Redirect to="/login" />

          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
              <Switch>
                <div className="tolog">
                   <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
                   <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
                </div>
              </Switch>
            </header>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;

 