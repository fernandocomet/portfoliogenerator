import React, { Component } from "react";
import "./WorkCard.css";
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';


const AddWork = () => {
    
  return (
       
       <div className="card2 text-white bg-dark mb-3 border border-white">
                <img src="https://source.unsplash.com/collection/429524/800x450" width="240px" className="card-img-top" alt="whatever"/>
                <div className="card-body">
                    <h5 className="card-title">Create a new Work</h5>
                    <p className="card-text"></p>
                    {/* <p className="card-text">id = {_id}</p> */}
                    <button className="btn btn-link">
                        <Link to={{pathname: `/newwork`}}>Create now</Link>
                    </button>               
                </div> 
        </div> 
  );
};

export default AddWork;

