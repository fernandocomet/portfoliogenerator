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
      portfolioworks:[], 
      userId: this.props.userData._id
    }
    this.services = new Portfolioservices();
    this.workservices = new Workservices();
  }

  /* era
  userId: this.props.userData._id,
  portfolioId: this.props.userData._id */

  componentDidMount = () => {
      this.getPortfoliosFromUser();
      this.getWorksFromUser();
      this.setState({
        portfolio : this.props.portfolioData
      })
  }

  getPortfoliosFromUser = () => {
    //console.log("userId = " + this.state.userId) 
    this.services
        .getPortfoliosFromUser()
        .then(allPortfolios => {
            return this.setState({
              portfolios: allPortfolios
              //userId : _id  //No reconoce el _id
            });
          })
          .catch(err => console.log(err));
  }

  getWorksFromUser = () => {
    this.workservices
        .getWorksFromUser()
        .then(allWorks => {
            return this.setState({
              works: allWorks
            });
          })
          .catch(err => console.log(err));
  }

  getPortfolioWorks = (e, portfolioId) => {
    e.preventDefault();
      this.services
        .getPortfolioWorks(portfolioId)
        .then(allportfolioworks => {
          console.log(allportfolioworks)
            return this.setState({
              portfolioworks: allportfolioworks
            });
          })
        .catch(err => console.log(err));
  }
 
  getWorkDetail = portfolioworks => {
      //Meter los ids
  }
    

 

  render() {
    return (
        <div className="container">      
            <div className="portfolios">
                <h2>Portfolios</h2>
                {
                    this.state.portfolios.map(portfolio => (
                       <ul className="list-group">
                            <button type="button" className="list-group-item list-group-item-action"  onClick={(e) => this.getPortfolioWorks(e, portfolio._id)}> {portfolio.title} {portfolio._id} </button>
                            {/*<li className="list-group-item list-group-item-dark">{portfolio.title}</li>  onClick={event => this.getPortfolioWorks(portfolio._id)}
                             <li className="list-group-item list-group-item-dark" onClick={event => this.getPortfolioWorks(this.state.portfolioId)}>{portfolio.title}</li> 
                             
                              onClick={event => _handleClick(event)}
                             */}
                        </ul>
                    ))
                }
            </div>  
            <div className="works">
                <h2>Works</h2>
                {
                    this.state.works.map(work => (
                       <ul className="list-group">
                            <li type="button" className="list-group-item list-group-item-action "> {work.title} {work._id} </li>
                            {/* <li className="list-group-item list-group-item-dark">{work.title}</li> */}
                        </ul>
                    ))
                }
            </div>   
            <div className="PortfolioWorks">
                <h2>Portfolio Works</h2>
                {
                    this.state.portfolioworks.map(portfoliowork => (
                       <ul className="list-group">
                            <li type="button" className="list-group-item list-group-item-action "> {portfoliowork} </li>
                            {/* <li className="list-group-item list-group-item-dark">{work.title}</li> */}
                        </ul>
                    ))
                }
            </div>           
        </div>
        );
    
  }
}

export default Match;
/*
<div className="row">
  <div className="col-4">
    <div className="list-group" id="list-tab" role="tablist">
      <a className="list-group-item list-group-item-action" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">{portfolio.title} </a>
    </div>
  </div>
  <div className="col-8">
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>
      <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>
    </div>
  </div>
</div>
*/