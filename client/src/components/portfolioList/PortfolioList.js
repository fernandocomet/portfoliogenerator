//import React, { Component } from './node_modules/react';
import React, { Component } from "react";

import Portfolioservices from "../../services/portfolioservices";
import PortfolioCard from "./PortfolioCard";
import AddPortfolio from "./AddPortfolio";

class PortfolioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolios: [],
      userId: this.props.userData._id
    };
    this.services = new Portfolioservices();
    console.log("userID = " + this.state.userId);
  }

  componentDidMount = () => {
    this.getPortfoliosFromUser();
    console.log(this.state.portfolios)
  };

  getPortfoliosFromUser = () => {
    this.services.getPortfoliosFromUser(this.state.userId)
        .then(allPortfolios => this.setState({ portfolios : allPortfolios}))
        .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <h1>Portfolios</h1>
        {/* AddPortfolio no sale */}
        {this.props.userData && <AddPortfolio></AddPortfolio>}
        {this.state.portfolios.length ? (
          <div>
            <PortfolioCard></PortfolioCard>
            {/* { {this.state.portfolios.map(portfolio => <PortfolioCard key={portfolio._id} {...portfolio} />)} } */}
          </div>
        ) : (
          <p>CARGANDO...</p>
        )}
      </div>
    );
  }
}

export default PortfolioList;
