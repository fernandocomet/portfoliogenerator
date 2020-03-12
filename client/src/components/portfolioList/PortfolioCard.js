import React, { Component } from "react";
import "./PortfolioCard.css";
import Button from 'react-bootstrap/Button'

import { Link } from "react-router-dom";

const PortfolioCard = ({
  _id,
  title,
  subtitle,
  imagecover,
  deletePortfolio
}) => {
  const _handleDelete = event => {
    event.preventDefault();
    {
      deletePortfolio({ _id });
    }
  };

  return (
    <div className="card2 text-white bg-dark mb-3 border border-white">
      <img
        src={imagecover}
        width="240px"
        className="card-img-top"
        alt="whatever"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text2">{subtitle}</p>
        {/* <button className="btn btn-light text-dark"> */}
        <button className="btn btn-link">
          <Link to={{ pathname: `/portfolio/${_id}` }}>See more</Link>
        </button>
        <button 
          className="btn btn-link"
          onClick={event => _handleDelete(event)}
        >
          Delete
          </button>
      </div>
    </div>
  );
};

export default PortfolioCard;

/*
Coming from my father:
            key={portfolio._id} 
            alias={portfolio.alias}  
            title={portfolio.title}
            subtitle={portfolio.subtitle}
            imagecover={portfolio.imagecover}
*/
