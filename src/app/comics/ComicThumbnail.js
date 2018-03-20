import React from "react";

export const ComicThumbnail = ({ handleOpenComic, title, img, alt, id }) => {
  const handleClick = () => handleOpenComic(id);

  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card">
          <div className="card-image">
            <img src={img} alt={alt} />
            <span className="card-title">{title}</span>
          </div>
          <div className="card-action center">
            <button
              className="waves-effect waves-light btn btn-color"
              onClick={handleClick}
            >
              Open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
