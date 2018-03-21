import React from "react";
import PropTypes from "prop-types";

import { ComicItem } from "./ComicItem";
import { Preloader } from "../partials/Preloader";

export const ComicContainer = ({ loading, comic }) => {
  const renderComic = () => {
    if (loading) return <Preloader />;
    else return <ComicItem {...comic} />;
  };

  return <div>{renderComic()}</div>;
};

ComicContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  comic: PropTypes.object.isRequired
};
