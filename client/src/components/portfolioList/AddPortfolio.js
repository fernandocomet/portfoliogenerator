import React, { Component } from "react";
import "./PortfolioCard.css";
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';


const AddPortfolio = () => {
    
  return (
       
       <div className="card2 text-white bg-dark mb-3 border border-white">
                <img src="https://source.unsplash.com/collection/429524/800x450" width="240px" className="card-img-top" alt="whatever"/>
                <div className="card-body">
                    <h5 className="card-title">Create a new Portfolio</h5>
                    <p className="card-text"></p>
                    {/* <p className="card-text">id = {_id}</p> */}
                    <button className="btn btn-link">
                        <Link to={{pathname: `/newportfolio`}}>Create now</Link>
                    </button>               
                </div> 
        </div> 
  );
};

export default AddPortfolio;

