import React, { Component } from "react";

import Portfolioservices from "../../services/portfolioservices";
import PortfolioCard from "./PortfolioCard";
import AddPortfolio from "./AddPortfolio";
import "./PortfolioList.css";

import Modal from "react-bootstrap/Modal";

class PortfolioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolios: [],
      userId: this.props.userData._id,
      showmodal: false
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

  deletePortfolio = portfolio_id => {
    let portfolioId = portfolio_id._id;
    this.services
      .deletePortfolio(portfolioId)
      .then(() => this.updatePortfolio())
      .catch(err => console.log(err));
  };

  updatePortfolio = () => {
    this.services
      .getPortfoliosFromUser(this.state.userId)
      .then(portfolios => this.setState({ portfolios: portfolios }))
      .catch(err => console.log(err));
  };

  closeModal = () => this.setState({ showmodal: false });
  openModal = () => this.setState({ showmodal: true });

  render() {
    console.log(this.state.portfolios);
    return (
      <div>
        <h1>Portfolios</h1>
        <AddPortfolio></AddPortfolio>
        <div className="container">
          {this.state.portfolios.length ? (
            this.state.portfolios.map(portfolio => (
              <PortfolioCard
                _id={portfolio._id}
                key={portfolio._id}
                alias={portfolio.alias}
                title={portfolio.title}
                subtitle={portfolio.subtitle}
                imagecover={portfolio.imagecover}
                deletePortfolio={portfolio_id =>
                  this.deletePortfolio(portfolio_id)
                }
              />
            ))
          ) : (
            <p>CARGANDO...</p>
          )}
          <Modal show={this.state.showmodal} onHide={this.closeModal}>
            <Modal.Body>
              <h3>New Portfolio</h3>
              <hr></hr>
              {/* <CoasterForm closeModal={this.closeModal} refreshList={this.getAllCoasters} /> */}
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

export default PortfolioList;
