import React from "react";
import PropTypes from "prop-types";

import { ComicThumbnail } from "./ComicThumbnail";

export const ComicList = ({ comics, handleComicChange }) => {
  const handleOpenComic = index => {
    const comic = comics[index];

    return handleComicChange(comic);
  };

  return (
    <div className="comic-list">
      {comics &&
        comics.map((comic, id) => (
          <ComicThumbnail
            key={id}
            {...comic}
            id={id}
            handleOpenComic={handleOpenComic}
          />
        ))}
    </div>
  );
};

ComicList.propTypes = {
  comics: PropTypes.array.isRequired,
  handleComicChange: PropTypes.func.isRequired
};
