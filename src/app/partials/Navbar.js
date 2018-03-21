import React from "react";
import PropTypes from "prop-types";

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
        <ul className="left hide-on-med-and-down">
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
        <ul className="right hide-on-med-and-down">
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
        <ul>
          <li className="brand-logo center">
            <ComicButtonRandom
              text="Random"
              handleComicChange={handleComicChange}
              handleErrorChange={handleErrorChange}
              handleLoadingChange={handleLoadingChange}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  handleComicChange: PropTypes.func.isRequired,
  handleErrorChange: PropTypes.func.isRequired,
  handleLoadingChange: PropTypes.func.isRequired
};
