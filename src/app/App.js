import React from "react";

import { ComicChooser } from "./comics/ComicChooser";
import { ComicList } from "./comics/ComicList";

import { Navbar } from "./partials/Navbar";
import { Footer } from "./partials/Footer";

export const App = () => (
  <div className="">
    <Navbar title="xkcd" />
    <div className="row">
      <div className="col s3">
        <ComicList />
      </div>
      <div className="col s9">
        <ComicChooser />
      </div>
    </div>
    <Footer />
  </div>
);
