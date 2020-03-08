
import React, { Component } from 'react';
import './PortfolioCard.css'

//import { Link } from './node_modules/react-router-dom'

const PortfolioCard = ({ title, imageUrl, _id }) => {
    return (
        <div>
            <div className="card text-white bg-dark mb-3 border border-white">
                <img src="https://source.unsplash.com/collection/1976082/400x225" width="240px" className="card-img-top" alt="whatever"/>
                <div className="card-body">
                    <h5 className="card-title">Photographer</h5>
                    <p className="card-text">Some shootings taken while my travel to London.</p>
                    <button className="btn btn-light">See more</button>
                </div> 
            </div>
        </div>

    )
}

export default PortfolioCard
// style="width: 18rem"