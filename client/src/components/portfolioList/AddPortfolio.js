
import React, { Component } from 'react';

import Portfolioservices from "../../services/portfolioservices"

class AddPortfolio extends Component {

    constructor(props){
      super(props)
      this.state = {
       //Do Ï really need State here?
      }
      this.services = new Portfolioservices();
    }


  
    render() {
      return (
          <div>
              <h1>Add Portfolio Button</h1>
          </div>
          );
      
    }
  }
  
  export default AddPortfolio;
  