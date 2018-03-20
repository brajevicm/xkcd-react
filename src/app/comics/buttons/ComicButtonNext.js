import React from "react";

import { comicService } from "../../../services/ComicService";

export const ComicButtonNext = ({
  handleErrorChange,
  handleComicChange,
  handleLoadingChange,
  text
}) => {
  const handleButtonClick = () => {
    handleLoadingChange(true);

    comicService
      .fetchNextComic()
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
