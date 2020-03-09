import React, { Component } from "react";
//import "./PortfolioCard.css";
import Button from 'react-bootstrap/Button';

//import { Link } from './node_modules/react-router-dom'


const PortfolioDetails= ({ _id, title, subtitle, imagecover}) => {

    /*
     state ={

     }
    
    componentDidMount() {
            //const {handle} = this.props.match.params,
            const {_id} = this.props._id.state,
            const {title} = this.props.title.state,
            const {subtitle} = this.props.subtitle.state,
            const {imagecover} = this.props.imagecover.state,


            this.setState 
    }*/

  return (
       
    <div className="card text-white bg-dark mb-3 border border-white">
        <img src={imagecover} className="card-img-top" alt="whatever"/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{subtitle}</p>
            <p className="card-text">id = {_id}</p>
            <Button className="btn btn-light">
                {/* <Link to={`/portfolio/${_id}`}>See more</Link> */}Edit
            </Button>
            <Button className="btn btn-light">
                {/* <Link to={`/portfolio/${_id}`}>See more</Link> */}Delete
            </Button>                 
        </div> 
    </div> 
   
  );
};

export default PortfolioDetails;