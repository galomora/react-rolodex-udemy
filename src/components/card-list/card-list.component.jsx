import React from 'react';
import { Card } from '../card/card.component';
import './card-list.style.css';

export const CardList = props => {
    return <div className="card-list"> 
        {
            props.characters.map (character => {
                return <Card id={character.id} monster={character} />
            })
        }
    </div>    
}