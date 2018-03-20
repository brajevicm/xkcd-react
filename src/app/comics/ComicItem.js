import React from "react";

export const ComicItem = ({ title, img, alt }) => {
  return (
    <div className="center">
      <h1>{title}</h1>
      <img className="materialboxed comic-img center" src={img} alt={alt} />
    </div>
  );
};
