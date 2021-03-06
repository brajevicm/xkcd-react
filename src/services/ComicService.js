import { Comic } from "../entities/Comic";

import {
  BASE_URL,
  END_URL,
  PROXY_URL,
  MAXIMUM_XKCD_INDEX,
  MINIMUM_XKCD_INDEX
} from "../helpers/constants";
import {
  getRandomNumberBetween,
  getNextNumber,
  getPreviousNumber
} from "../helpers/utils";

class ComicService {
  constructor(startUrl, endUrl = "", proxyUrl = "") {
    this.startUrl = startUrl;
    this.endUrl = endUrl;
    this.proxyUrl = proxyUrl;
    this.currentId = MAXIMUM_XKCD_INDEX;
  }

  getFullUrl = id => {
    return `${this.proxyUrl}${this.startUrl}${id}${this.endUrl}`;
  };

  fetchComic = id => {
    const fullUrl = this.getFullUrl(id);

    return fetch(fullUrl)
      .then(res => {
        if (res.status >= 400) Promise.reject(new Error("Comic not found."));
        return res.json();
      })
      .then(comic => {
        this.currentId = comic.num;

        return new Comic(comic);
      })
      .catch(error => error.message);
  };

  fetchNextComic = () => {
    const nextId = getNextNumber(this.currentId);

    return this.fetchComic(nextId);
  };

  fetchPreviousComic = () => {
    const previousId = getPreviousNumber(this.currentId);

    return this.fetchComic(previousId);
  };

  fetchRandomComic = () => {
    const randomNumber = getRandomNumberBetween();

    return this.fetchComic(randomNumber);
  };

  fetchFirstComic = () => {
    return this.fetchComic(MINIMUM_XKCD_INDEX);
  };

  fetchLastComic = () => {
    return this.fetchComic(MAXIMUM_XKCD_INDEX);
  };
}

export const comicService = new ComicService(BASE_URL, END_URL, PROXY_URL);
