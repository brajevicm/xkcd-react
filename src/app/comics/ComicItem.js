import React from "react";
import PropTypes from "prop-types";

export const ComicItem = ({ title, img, alt }) => {
  return (
    <div className="center">
      <h1>{title}</h1>
      <img className="materialboxed comic-img center" src={img} alt={alt} />
    </div>
  );
};

ComicItem.defaultProps = {
  title: "",
  img: "",
  alt: ""
};

ComicItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
