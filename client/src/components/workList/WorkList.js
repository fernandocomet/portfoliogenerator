import React, { Component } from "react";

import Workservices from "../../services/workservices";
import WorkCard from "./WorkCard";
import AddWork from "./WorkCard";
import "./WorkList.css";

class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
      userId: this.props.userData._id
    };
    this.services = new Workservices();
    console.log(this.props.userData);
  }

  componentDidMount = () => {
    this.getWorksFromUser();
  };

  getWorksFromUser = () => {
    this.services
      .getWorksFromUser(this.state.userId)
      .then(allWorks => {
        return this.setState({
          works: allWorks
        });
      })
      .catch(err => console.log(err));
  };


  render() {

    return (
      <div>
        <h1>Works</h1>
        <div className="container">
        {this.state.works.length ? (
          this.state.works.map(work => (
            <WorkCard
              key={work._id}
              title={work.title}
              subtitle={work.subtitle}
              description={work.description}       
              image={work.image}
            />
          ))
        ) : (
          <p>CARGANDO...</p>
        )}
        </div>
      </div>
    );
  }
}



export default WorkList;
