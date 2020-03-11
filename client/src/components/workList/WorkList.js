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

  deleteWork = work_id => {
    let workId = work_id._id;
    this.services
      .deleteWork(workId)
      .then(() => this.updateWork())
      .catch(err => console.log(err));
  };

  updateWork = () => {
    this.services
      .getWorksFromUser(this.state.userId)
      .then(works => this.setState({ works: works }))
      .catch(err => console.log(err));
  };


  render() {
    // console.log(this.state.works);
    return (
      <div id="content">
        <h1>Works</h1>

        <div className="containerList">
        {this.state.works.length ? (
          this.state.works.map(work => (
            <WorkCard
              _id={work._id}
              key={work._id}
              title={work.title}
              subtitle={work.subtitle}
              description={work.description}       
              image={work.image}
              deleteWork={work_id =>
                  this.deleteWork(work_id)
              }
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
