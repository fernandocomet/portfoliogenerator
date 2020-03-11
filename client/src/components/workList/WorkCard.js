import React, { Component } from "react";
import "./WorkCard.css";

import { Link } from "react-router-dom";

const WorkCard = ({ 
    _id,
    title, 
    subtitle, 
    description, 
    image, 
    deleteWork 
}) => {
    const _handleDelete = event => {
        event.preventDefault();
        {
          deleteWork({ _id });
        }
      };
  return (
    <div>
      <div className="card2 text-white bg-dark mb-3 border border-white">
        <img
          src={image}
          width="240px"
          className="card-img-top"
          alt="whatever"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text2">{subtitle}</p>
          <button className="btn btn-light">
          <Link to={{ pathname: `/work/${_id}` }}>See more</Link>
        </button>
        <button
          className="btn btn-light"
          onClick={event => _handleDelete(event)}
        >
          Delete
        </button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

/* 
              key={work._id}
              title={work.title}
              subtitle={work.subtitle}
              description={work.description}
              image={work.image}
*/
