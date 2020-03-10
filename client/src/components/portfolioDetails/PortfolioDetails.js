import React, { Component } from "react";
import "./PortfolioDetails.css";
import Button from "react-bootstrap/Button";
import Portfolioservices from "../../services/portfolioservices";

import { Link } from "react-router-dom";

class PortfolioDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: null
    };
    this.services = new Portfolioservices();
  }

  componentDidMount = () => {
    this.getPortfolioDetail();
  };

  getPortfolioDetail = () => {
    this.services
      .getPortfolioDetail(this.props.match.params.id)
      .then(theportfolio => this.setState({ portfolio: theportfolio }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="cardDetail">
        {this.state.portfolio ? (
          //console.log(this.state.portfolio)
          <div className="carding text-white bg-dark mb-3 border border-white">
            <img
              src={this.state.portfolio.imagecover}
              className="card-img-top"
              alt="whatever"
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.portfolio.title}</h5>
              <p className="card-text">{this.state.portfolio.subtitle}</p>
              <button className="btn btn-light">
                <Link
                  to={{
                    pathname: `/editportfolio/${this.state.portfolio._id}`
                  }}
                >
                  Edit
                </Link>
              </button>
              {/* <button className="btn btn-light" onClick={() => this.deletePortfolio(this.state.portfolio._id)}>Delete</button> */}
              {/* <Button className="btn btn-light">Delete</Button>*/}
            </div>
          </div>
        ) : (
          console.log(this.state.portfolio)
        )}
      </div>
    );
  }
}

export default PortfolioDetails;

/*
<button className="btn btn-light">
    <Link to={{pathname: `/editportfolio/${_id}`}}>Edit</Link>
</button>     

/editportfolio/:id

this.state.portfolio._id
*/
