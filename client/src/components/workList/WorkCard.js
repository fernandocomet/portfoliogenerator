import React, { Component } from 'react';
import './WorkCard.css'

//import { Link } from './node_modules/react-router-dom'

const WorkCard = ({ title, subtitle, description, image }) => {
    return (
        <div>
        <div className="card2 text-white bg-dark mb-3 border border-white">
            <img src={image} width="240px" className="card-img-top" alt="whatever"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text2">{subtitle}</p>
                <button className="btn btn-light">See more</button>
            </div> 
        </div>
    </div>
    )
}

export default WorkCard

/* 
              key={work._id}
              title={work.title}
              subtitle={work.subtitle}
              description={work.description}
              image={work.image}
*/
