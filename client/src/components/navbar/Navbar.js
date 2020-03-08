import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import logo from "../../logo.svg";
import "./Navbar.css"



class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
          <a className="navbar-brand" href="#">PortfolioGenerator</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Match</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Portfolios</a>
                </li>
              </ul>
              <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                          <a className="nav-link" href="#">{this.state.loggedInUser.username}</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link"><a onClick={this.handleLogout}>Logout</a></a>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>
        
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;