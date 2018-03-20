import React, { Component } from "react";

import { comicService } from "../../services/ComicService";

import { ComicItem } from "./ComicItem";
import { ComicButtonRandom } from "./buttons/ComicButtonRandom";
import { ComicButtonFirst } from "./buttons/ComicButtonFirst";
import { ComicButtonNext } from "./buttons/ComicButtonNext";
import { ComicButtonLast } from "./buttons/ComicButtonLast";
import { ComicButtonPrevious } from "./buttons/ComicButtonPrevious";
import { Preloader } from "../partials/Preloader";

export class ComicChooser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comic: {},
      error: {},
      loading: false
    };
  }

  loadInitialComic(fetchType = comicService.fetchComic) {
    fetchType()
      .then(comic => this.setState({ comic }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    this.loadInitialComic(comicService.fetchRandomComic);
  };

  handleLoadingChange = loading => this.setState({ loading });

  handleComicChange = comic => this.setState({ comic });

  handleErrorChange = error => this.setState({ error });

  render() {
    const renderComic = () => {
      if (this.state.loading) return <Preloader />;
      else return <ComicItem {...this.state.comic} />;
    };

    return (
      <div>
        <ComicButtonFirst
          text="First"
          handleComicChange={this.handleComicChange}
          handleErrorChange={this.handleErrorChange}
          handleLoadingChange={this.handleLoadingChange}
          state={this.state.setState}
        />
        <ComicButtonPrevious
          text="Previous"
          handleComicChange={this.handleComicChange}
          handleErrorChange={this.handleErrorChange}
          handleLoadingChange={this.handleLoadingChange}
          state={this.state.setState}
        />
        <ComicButtonRandom
          text="Random"
          handleComicChange={this.handleComicChange}
          handleErrorChange={this.handleErrorChange}
          handleLoadingChange={this.handleLoadingChange}
          state={this.state.setState}
        />
        <ComicButtonNext
          text="Next"
          handleComicChange={this.handleComicChange}
          handleErrorChange={this.handleErrorChange}
          handleLoadingChange={this.handleLoadingChange}
          state={this.state.setState}
        />
        <ComicButtonLast
          text="Last"
          handleComicChange={this.handleComicChange}
          handleErrorChange={this.handleErrorChange}
          handleLoadingChange={this.handleLoadingChange}
          state={this.state.setState}
        />
        {renderComic()}
      </div>
    );
  }
}
