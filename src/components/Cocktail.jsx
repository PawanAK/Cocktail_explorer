import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, info, glass, instructions }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div>
        <div className="cocktail-footer">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
          <Link to={`/cocktail/${id}`}>
            <button className="btn btn-primary btn-details ">Details</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Cocktail;
