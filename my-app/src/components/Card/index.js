import React from "react";

const Card = (props) => (
    <div className="card">
        <img className="card-img-top" src={props.image} alt="Thumbnail" />
        <div className="caption text-center">
        <h3>{props.name}</h3>
            <p>{props.description}</p>
          <p>
            <a href={props.app} className="btn btn-primary thumbnail-button" role="button">View Details</a>   
          </p>
        </div>
        </div>
);

export default Card;