import React, { Component } from "react";

import { comicService } from "../services/ComicService";

import { setDocumentTitle } from "../helpers/utils";

import { ComicContainer } from "./comics/ComicContainer";
import { ComicList } from "./comics/ComicList";

import { Footer } from "./partials/Footer";
import { Navbar } from "./partials/Navbar";
import { Comic } from "../entities/Comic";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: [],
      comic: {},
      error: {},
      loading: false
    };
  }

  loadInitialComic() {
    comicService
      .fetchRandomComic()
      .then(comic => this.setState({ comic }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    this.loadInitialComic();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      const { comic, comics } = this.state;
      setDocumentTitle(comic.title);

      if (comic instanceof Comic)
        this.addNewComicToList(this.isComicInList, comic, comics);
    }
  }

  addNewComicToList = (test, comic, comics) => {
    if (!test(comic, comics)) {
      const updatedComics = [...comics, comic];
      this.setState({ comics: updatedComics });
    }
  };

  isComicInList = (comic, comics) => {
    for (const _comic of comics) if (_comic.num === comic.num) return true;
    return false;
  };

  handleLoadingChange = loading => this.setState({ loading });

  handleComicChange = comic => this.setState({ comic });

  handleErrorChange = error => this.setState({ error });

  render() {
    const { loading, comic, comics } = this.state;

    return (
      <div>
        <Navbar
          handleLoadingChange={this.handleLoadingChange}
          handleComicChange={this.handleComicChange}
          handleErrorChange={this.handleErrorChange}
        />
        <div className="row">
          <div className="col s3">
            <ComicList
              handleComicChange={this.handleComicChange}
              comics={comics}
            />
          </div>
          <div className="col s9">
            <ComicContainer loading={loading} comic={comic} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
