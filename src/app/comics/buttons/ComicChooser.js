import React, { Component } from "react";

import { comicService } from "../../services/ComicService";
import { ComicItem } from "./ComicItem";
import { ComicController } from "./ComicController";

export class ComicChooser extends Component {
  constructor() {
    super();
    this.state = {
      comic: {},
      error: {},
      loading: false
      // controllers: [
      //   { name: "Previous", action: comicService.fetchPreviousComic },
      //   { name: "Random", action: comicService.fetchRandomComic },
      //   { name: "Next", action: comicService.fetchNextComic }
      // ]
    };
  }

  loadComic(fetchType = comicService.fetchComic) {
    fetchType()
      .then(comic => this.setState({ comic }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  componentDidMount = () => {
    this.setState({ loading: true });
    this.loadComic(comicService.fetchRandomComic);
  };

  // onClickChangeComic = key => {
  //   const { controllers } = this.state;
  //   const action = controllers[key].action;

  //   this.loadComic(action);
  // };

  handleStateChange = state => {
    this.setState({ comic: state });
  };

  render() {
    return (
      <div className="chooser">
        <ComicController
          text="Random"
          handleStateChange={this.handleStateChange}
        />
        {/* {this.state.controllers.map((controller, index) => (
          <ComicController
            key={index}
            text={controller.name}
            onClick={this.onClickChangeComic.bind(this, index)}
          />
        ))} */}
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <ComicItem {...this.state.comic} />
        )}
      </div>
    );
  }
}
