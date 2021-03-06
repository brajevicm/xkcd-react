import {
  MINIMUM_XKCD_INDEX,
  MAXIMUM_XKCD_INDEX,
  NAME,
  TITLE
} from "./constants";

export const getRandomNumberBetween = (
  from = MINIMUM_XKCD_INDEX,
  to = MAXIMUM_XKCD_INDEX
) => Math.floor(Math.random() * to) + from;

export const getPreviousNumber = (number, minNumber = MINIMUM_XKCD_INDEX) =>
  number === minNumber ? number : number - 1;

export const getNextNumber = (number, maxNumber = MAXIMUM_XKCD_INDEX) =>
  number === maxNumber ? number : number + 1;

export const firstLetterToUpperCase = string =>
  string[0].toUpperCase() + string.substr(1);

export const setDocumentTitle = (title = TITLE) =>
  (document.title = `${NAME}: ${title}`);
