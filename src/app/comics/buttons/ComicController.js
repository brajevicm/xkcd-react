import React from "react";

import { comicService } from "../../services/ComicService";

export const ComicController = ({ handleStateChange, text }) => {
  const handleButtonClick = () =>
    comicService
      .fetchRandomComic()
      .then(comic => handleStateChange(comic))
      .catch(error => handleStateChange(error));
  // .finally(() => ({ ...state, loading }));;

  return (
    <div>
      <button onClick={handleButtonClick}>{text}</button>
    </div>
  );
};
