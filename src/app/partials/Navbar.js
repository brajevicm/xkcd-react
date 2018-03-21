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
        <ul class="left hide-on-med-and-down">
          <li>
            <ComicButtonFirst
              text="First"
              handleComicChange={handleComicChange}
              handleErrorChange={handleErrorChange}
              handleLoadingChange={handleLoadingChange}
            />
          </li>
          <li>
            <ComicButtonPrevious
              text="Previous"
              handleComicChange={handleComicChange}
              handleErrorChange={handleErrorChange}
              handleLoadingChange={handleLoadingChange}
            />
          </li>
        </ul>
        <ul class="right hide-on-med-and-down">
          <li>
            <ComicButtonNext
              text="Next"
              handleComicChange={handleComicChange}
              handleErrorChange={handleErrorChange}
              handleLoadingChange={handleLoadingChange}
            />
          </li>
          <li>
            <ComicButtonLast
              text="Last"
              handleComicChange={handleComicChange}
              handleErrorChange={handleErrorChange}
              handleLoadingChange={handleLoadingChange}
            />
          </li>
        </ul>
        {/* <a className="brand-logo center font">xkcd</a> */}
        <ul>
          <li>
            <a className="brand-logo center">
              <ComicButtonRandom
                text="Random"
                handleComicChange={handleComicChange}
                handleErrorChange={handleErrorChange}
                handleLoadingChange={handleLoadingChange}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
