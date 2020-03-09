

import React, { Component } from 'react';
import './WorkCard.css'

//import { Link } from './node_modules/react-router-dom'

const WorkCard = ({ title, imageUrl, _id }) => {
    return (
        <div>
        <div className="card text-white bg-dark mb-3 border border-white">
            <img src="https://source.unsplash.com/collection/1976082/400x225" width="240px" className="card-img-top" alt="whatever"/>
            <div className="card-body">
                <h5 className="card-title">Whatever</h5>
                <p className="card-text">Some shootings taken while my travel to London.</p>
                <button className="btn btn-light">See more</button>
            </div> 
        </div>
    </div>
    )
}

export default WorkCard

/* 
De Card necesito:
"_id": "5e63f198151fc60e5800786a",
"title": "fc_uxdesigner1",
"subtitle": "Seed round focus user experience handshake first mover advantage product management success churn rate freemium release gen-z. Beta entrepreneur social media bootstrapping buyer responsive web design monetization business-to-business. Deployment freemium creative A/B testing niche market social media venture marketing early adopters conversion iPad burn rate. Handshake market facebook virality success stealth marketing android. Equity venture scrum project innovator. Burn rate influencer gamification non-disclosure agreement learning curve agile development business-to-consumer deployment hackathon metrics. Focus technology client mass market creative influencer angel investor venture pivot scrum project. Leverage agile development stealth A/B testing user experience. Accelerator client backing vesting period long tail seed money iPad series A financing iteration gen-z A/B testing network effects sales agile development. Market network effects partnership buyer seed money business-to-consumer leverage research & development.",
"image": ruta
*/