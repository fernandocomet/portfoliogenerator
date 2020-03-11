import React, { Component } from 'react';

import Portfolioservices from "../../services/portfolioservices"
import Workservices from "../../services/workservices"
import "./Match.css";

class Match extends Component {
  constructor(props){
    super(props)
    this.state = {
      portfolios: [],
      works: [],
      userId: this.props.userData._id
    }
    this.services = new Portfolioservices();
    this.workservices = new Workservices();
  }



  componentDidMount = () => {
      this.getPortfoliosFromUser();
      this.getWorksFromUser();
  }

  getPortfoliosFromUser = () => {
    this.services
        .getPortfoliosFromUser(this.state.userId)
        .then(allPortfolios => {
            return this.setState({
              portfolios: allPortfolios
            });
          })
          .catch(err => console.log(err));
  }

  getWorksFromUser = () => {
    this.workservices
        .getWorksFromUser(this.state.userId)
        .then(allWorks => {
            return this.setState({
              works: allWorks
            });
          })
          .catch(err => console.log(err));
  }


  render() {
    return (
        <div className="container">
            
            <div className="portfolios">
                <h2>Portfolios</h2>
                {
                    this.state.portfolios.map(portfolio => (
                       <ul className="list-group">
                            <li className="list-group-item list-group-item-dark">{portfolio.title}</li>
                        </ul>
                    ))
                }
            </div>  
            <div className="works">
                <h2>Works</h2>
                {
                    this.state.works.map(work => (
                       <ul className="list-group">
                            <li className="list-group-item list-group-item-dark">{work.title}</li>
                        </ul>
                    ))
                }
            </div>           
        </div>
        );
    
  }
}

export default Match;
