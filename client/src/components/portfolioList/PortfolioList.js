import React, { Component } from "react";

import Portfolioservices from "../../services/portfolioservices";
import PortfolioCard from "./PortfolioCard";
import AddPortfolio from "./AddPortfolio";
import "./PortfolioList.css";

class PortfolioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolios: [],
      userId: this.props.userData._id
    };
    this.services = new Portfolioservices();
  }

  componentDidMount = () => {
    this.getPortfoliosFromUser();
  };

  getPortfoliosFromUser = () => {
    this.services
      .getPortfoliosFromUser(this.state.userId)
      .then(allPortfolios => {
        return this.setState({
          portfolios: allPortfolios
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <h1>Portfolios</h1>

        {this.state.portfolios.length ? (
          this.state.portfolios.map(portfolio => (
            <PortfolioCard
              key={portfolio._id}
              alias={portfolio.alias}
              title={portfolio.title}
              subtitle={portfolio.subtitle}
              imagecover={portfolio.imagecover}
            />
          ))
        ) : (
          <p>CARGANDO...</p>
        )}
      </div>
    );
  }
}

export default PortfolioList;
