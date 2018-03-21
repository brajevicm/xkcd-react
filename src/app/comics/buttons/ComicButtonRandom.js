import React from "react";
import PropTypes from "prop-types";

import { comicService } from "../../../services/ComicService";

export const ComicButtonRandom = ({
  handleErrorChange,
  handleComicChange,
  handleLoadingChange,
  text
}) => {
  const handleButtonClick = () => {
    handleLoadingChange(true);

    comicService
      .fetchRandomComic()
      .then(comic => handleComicChange(comic))
      .catch(error => handleErrorChange(error))
      .finally(() => handleLoadingChange(false));
  };

  return (
    <a className="link-nav" onClick={handleButtonClick}>
      {text}
    </a>
  );
};

ComicButtonRandom.propTypes = {
  handleErrorChange: PropTypes.func.isRequired,
  handleComicChange: PropTypes.func.isRequired,
  handleLoadingChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};
