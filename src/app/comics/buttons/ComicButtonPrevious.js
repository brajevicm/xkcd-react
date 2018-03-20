import React from "react";

import { comicService } from "../../../services/ComicService";

export const ComicButtonPrevious = ({
  handleErrorChange,
  handleComicChange,
  handleLoadingChange,
  text
}) => {
  const handleButtonClick = () => {
    handleLoadingChange(true);

    comicService
      .fetchPreviousComic()
      .then(comic => handleComicChange(comic))
      .catch(error => handleErrorChange(error))
      .finally(() => handleLoadingChange(false));
  };

  return (
    <button
      className="waves-effect waves-light btn btn-color"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};
