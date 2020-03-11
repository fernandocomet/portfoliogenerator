import React, { Component } from "react";
//import "./PortfolioDetails.css";

import Workservices from "../../services/workservices";

import { Link } from "react-router-dom";

class WorkDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: null
    };
    this.services = new Workservices();
  }

  componentDidMount = () => {
    this.getWorkDetail();
  };

  getWorkDetail = () => {
    this.services
      .getWorkDetail(this.props.match.params.id)
      .then(thework => this.setState({ work: thework }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="cardDetail">
        {this.state.work ? (
         
         
          <div className="carding text-white bg-dark mb-3 border border-white">
            <img
              src={this.state.work.image}
              className="card-img-top"
              alt="whatever"
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.work.title}</h5>
              <p className="card-text">{this.state.work.subtitle}</p>
              <button className="btn btn-light">
                <Link
                  to={{
                     pathname: `/editwork/${this.state.work._id}`
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
          console.log(this.state.work)
        )}
      </div>
    );
  }
}

export default WorkDetails;

