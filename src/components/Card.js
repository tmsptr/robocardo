import React from "react";
import './Card.css';

const Card = ({name, email, id}) => {
    //const {name, email, id} = props; 
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <div>
                <img alt='robot' src={`https://robohash.org/test${id}?200x200`} />
                <h2>{name}</h2>
                <h2 className="f5 lh-copy">{email}</h2>
            </div>
        </div>
    );
}

export default Card;