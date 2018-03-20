import React from "react";

import { ComicButtonRandom } from "../comics/buttons/ComicButtonRandom";
import { ComicButtonFirst } from "../comics/buttons/ComicButtonFirst";
import { ComicButtonNext } from "../comics/buttons/ComicButtonNext";
import { ComicButtonLast } from "../comics/buttons/ComicButtonLast";
import { ComicButtonPrevious } from "../comics/buttons/ComicButtonPrevious";

export const Navbar = ({
  handleComicChange,
  handleErrorChange,
  handleLoadingChange
}) => {
  return (
    <nav>
      <div className="nav-wrapper bg-color">
        <ComicButtonFirst
          text="First"
          handleComicChange={handleComicChange}
          handleErrorChange={handleErrorChange}
          handleLoadingChange={handleLoadingChange}
        />
        <ComicButtonPrevious
          text="Previous"
          handleComicChange={handleComicChange}
          handleErrorChange={handleErrorChange}
          handleLoadingChange={handleLoadingChange}
        />
        <ComicButtonRandom
          text="Random"
          handleComicChange={handleComicChange}
          handleErrorChange={handleErrorChange}
          handleLoadingChange={handleLoadingChange}
        />
        <ComicButtonNext
          text="Next"
          handleComicChange={handleComicChange}
          handleErrorChange={handleErrorChange}
          handleLoadingChange={handleLoadingChange}
        />
        <ComicButtonLast
          text="Last"
          handleComicChange={handleComicChange}
          handleErrorChange={handleErrorChange}
          handleLoadingChange={handleLoadingChange}
        />
        <a className="brand-logo center font">xkcd</a>
      </div>
    </nav>
  );
};
