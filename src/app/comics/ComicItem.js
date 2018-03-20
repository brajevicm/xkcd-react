import React from "react";

export const ComicItem = ({ title, transcript, img, alt }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img className="materialboxed" src={img} alt={alt} />
      {/* <div>{img ? <img src={img} alt={alt} /> : <p>{transcript}</p>}</div> */}
    </div>
  );
};
