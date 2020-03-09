import React, { Component } from "react";
import "./PortfolioCard.css";

//import { Link } from './node_modules/react-router-dom'

const PortfolioCard = ({ alias, title, subtitle, imagecover}) => {
  return (
    <div>
      
       <div className="card text-white bg-dark mb-3 border border-white">
                <img src={imagecover} width="240px" className="card-img-top" alt="whatever"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{subtitle}</p>
                    <button className="btn btn-light">See more</button>
                </div> 
            </div> 
    </div>
  );
};

export default PortfolioCard;
/*{alias}
      {title}
      {subtitle}
      {imagecover}

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
