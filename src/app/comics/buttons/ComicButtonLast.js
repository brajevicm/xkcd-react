import React from "react";

import { comicService } from "../../../services/ComicService";

export const ComicButtonLast = ({
  handleErrorChange,
  handleComicChange,
  handleLoadingChange,
  text
}) => {
  const handleButtonClick = () => {
    handleLoadingChange(true);

    comicService
      .fetchLastComic()
      .then(comic => handleComicChange(comic))
      .catch(error => handleErrorChange(error))
      .finally(() => handleLoadingChange(false));
  };

  return (
    <button
      className="waves-effect waves-light btn"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};
