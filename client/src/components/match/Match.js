//import React, { Component } from './node_modules/react';
import React, { Component } from 'react';

import Portfolioservices from "../../services/portfolioservices"
import PortfolioCard from "../portfolioList/PortfolioCard"
import WorkCard from "../workList/WorkCard"

class Match extends Component {

  constructor(props){
    super(props)
    this.state = {
      portfolios: [],
      works: []
    }
    this.services = new Portfolioservices();
  }

  componentDidMount = () => {
      this.getPortfoliosFromUser();
      this.getWorksFromUser();
  }

  getPortfoliosFromUser = () => {
    this.services.getPortfoliosFromUser()
        .then(allPortfolios => this.setState({ portfolios : allPortfolios}))
        .catch(err => console.log(err))
        //console.log(portfolios)  => Not defined????
  }

  getWorksFromUser = () => {
    this.services.getWorksFromUser()
        .then(allWorks => this.setState({ works : allWorks}))
        .catch(err => console.log(err))
        //console.log(works)  => Not defined????
  }


  render() {
    return (
        <div className="container">
            <h1>Match Portfolios with works</h1>
            <h2>Portfolios List</h2>
            {/* See https://getbootstrap.com/docs/4.4/components/list-group/ JavaScript behavior */}
                {/* {this.props.loggedInUser && <AddPortfolio></AddPortfolio>}  */}
                {this.state.portfolios.length ? (
                    <div>
                        <ul className="list-group">
                            <li className="list-group-item active list-group-item-dark">Cras justo odio</li>
                            <li className="list-group-item list-group-item-dark">Dapibus ac facilisis in</li>
                            <li className="list-group-item list-group-item-dark">Morbi leo risus</li>
                            <li className="list-group-item list-group-item-dark">Porta ac consectetur ac</li>
                            <li className="list-group-item list-group-item-dark">Vestibulum at eros</li>
                        </ul>
                    </div>
                )
                    :
                    <p>CARGANDO...</p>

                }
            <h2>Woks List</h2>    
                {/* {this.props.loggedInUser && <AddWork></AddWork>}  */}
                {this.state.works.length ? (
                    <div>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-dark active">Cras justo odio</li>
                            <li className="list-group-item list-group-item-dark">Dapibus ac facilisis in</li>
                            <li className="list-group-item list-group-item-dark">Morbi leo risus</li>
                            <li className="list-group-item list-group-item-dark">Porta ac consectetur ac</li>
                            <li className="list-group-item list-group-item-dark">Vestibulum at eros</li>
                        </ul>
                    </div>
                )
                    :
                    <p>CARGANDO...</p>

                }
                <h2>Urls List</h2>    
                {/* {this.props.loggedInUser && <AddWork></AddWork>}  */}
                {this.state.works.length ? (
                    <div>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-dark active">Cras justo odio</li>
                            <li className="list-group-item list-group-item-dark">Dapibus ac facilisis in</li>
                            <li className="list-group-item list-group-item-dark">Morbi leo risus</li>
                            <li className="list-group-item list-group-item-dark">Porta ac consectetur ac</li>
                            <li className="list-group-item list-group-item-dark">Vestibulum at eros</li>
                        </ul>
                    </div>
                )
                    :
                    <p>CARGANDO...</p>

                }
        </div>
        );
    
  }
}

export default Match;
