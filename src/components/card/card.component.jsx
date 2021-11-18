import React from 'react';
import './card.style.css';

export const Card = props => {
    return  <div className="card-container">
                <img alt="picture" src={`https://robohash.org/${props.monster.id}`} />          
                <h2 key={props.monster.id}>{props.monster.name}</h2>
                <p>{props.monster.email}</p>
            </div>
}