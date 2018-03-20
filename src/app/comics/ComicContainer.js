import React from "react";

import { ComicItem } from "./ComicItem";
import { Preloader } from "../partials/Preloader";

export const ComicContainer = ({ loading, comic }) => {
  const renderComic = () => {
    if (loading) return <Preloader />;
    else return <ComicItem {...comic} />;
  };

  return renderComic();
};
