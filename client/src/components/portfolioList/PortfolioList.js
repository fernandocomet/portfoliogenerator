import React, { Component } from "react";

import Portfolioservices from "../../services/portfolioservices";
import PortfolioCard from "./PortfolioCard";
import AddPortfolio from "./AddPortfolio";
import "./PortfolioList.css";
import PortfolioForm from "../portfolioForm/PortfolioForm";

import Modal from 'react-bootstrap/Modal'

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

  closeModal = () => this.setState({ showmodal: false })
  openModal = () => this.setState({ showmodal: true })

  render() {
    return (
      <div>
        <h1>Portfolios</h1>
        <div className="container">
        {this.state.portfolios.length ? (
          this.state.portfolios.map(portfolio => (
            <PortfolioCard
              _id={portfolio._id}
              alias={portfolio.alias}
              title={portfolio.title}
              subtitle={portfolio.subtitle}
              imagecover={portfolio.imagecover}
            />
          ))
        ) : (
          <p>CARGANDO...</p>
        )}
        <Modal show={this.state.showmodal} onHide={this.closeModal}>
                    <Modal.Body>
                        <h3>Add New Portfolio</h3>
                        <hr></hr>
                        <PortfolioForm closeModal={this.closeModal} refreshList={this.getPortfoliosFromUser} />
                    </Modal.Body>
        </Modal>
        </div>
      </div>
    );
  }
}

export default PortfolioList;
