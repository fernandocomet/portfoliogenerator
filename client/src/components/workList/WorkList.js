import React, { Component } from 'react';
//import React, { Component } from './node_modules/react';

import Portfolioservices from "../../services/portfolioservices"
import WorkCard from "../workList/WorkCard"
import AddWork from "../workList/AddWork"

class WorkList extends Component {

  constructor(props){
    super(props)
    this.state = {
      works: []
    }
    this.services = new Portfolioservices();
  }

  /*componentDidMount = () => this.getWorksFromUser();

  getWorksFromUser = () => {
    this.services.getWorksFromUser()
        .then(allWorks => this.setState({ works : allWorks}))
        .catch(err => console.log(err))
        //console.log(works)  => Not defined????
  }*/


  render() {
    return (
        <div className="container">
            <h1>Works</h1>
            {/* {this.props.loggedInUser && <AddWork></AddWork>}
                {this.state.works.length ? (
                    <div>
                        <WorkCard></WorkCard>
                         {this.state.works.map(work => <WorkCard key={work._id} {...work} />)} 
                    </div>
                )
                    :
                    <p>CARGANDO...</p>

                } */}
        </div>
        );
    
  }
}

export default WorkList;
