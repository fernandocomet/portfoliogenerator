import React, { Component } from "react";
import "./PortfolioCard.css";
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';


const PortfolioCard = ({ _id, alias, title, subtitle, imagecover}) => {
    
  return (
       
       <div className="card text-white bg-dark mb-3 border border-white">
                <img src={imagecover} width="240px" className="card-img-top" alt="whatever"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{subtitle}</p>
                    <p className="card-text">id = {_id}</p>
                    <Button className="btn btn-light">
                        <Link to={`/portfolio/${_id}`}>See more</Link>
                    </Button>               
                </div> 
        </div> 
   
  );
};

export default PortfolioCard;


/*
<button className="btn btn-light">See more</button>

<Button as="div" variant="dark" size="sm">
            <Link to={`/detalles/${_id}`}>See more</Link>
</Button>
Coming from my father:

            key={portfolio._id} 
            alias={portfolio.alias}  
            title={portfolio.title}
            subtitle={portfolio.subtitle}
            imagecover={portfolio.imagecover}

De Portfolio necesito:
"alias": "fc_uxdesigner",
"title": "UX Designer",
"subtitle": "Several freelance projects in the area of UX Design",
"imagecover": "maximo.jpg",
*/
