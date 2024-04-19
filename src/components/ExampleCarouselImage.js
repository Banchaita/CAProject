import React from "react";

const ExampleCarouselImage = ({ src, text, subtext,herobtn,spantext }) => {
  return (
    <div className="carousel-image-container">
      <img className="carousel-image" src={src} alt={text} />
      <div className="overlay"></div>
      <div className="carousel-text">
        {text}
        <p className="subtext">{subtext}</p>
        <span className="bottomtext">{spantext}</span>
        <br />
        <button className="btn">{herobtn}</button>
      </div>
    </div>
  );
};

export default ExampleCarouselImage;
