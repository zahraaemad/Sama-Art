import React from "react";
import "./ArtPiece.css";

const ArtPiece = ({ art }) => {
  return (
    <div className="art-piece">
      <img src={art.image} alt={art.title} onClick={art.onClick} />
      <h2>{art.title}</h2>
    </div>
  );
};

export default ArtPiece;
