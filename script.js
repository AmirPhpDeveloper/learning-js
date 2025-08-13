// imports
import { limit, blockJs } from "./helpers.js";

// Elements
const textareaEl = document.querySelector(".textarea");
const wordsNumberEl = document.querySelector(".stat__number--words");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");

// Functions

const countCharacters = () => {
  // variables
  const value = textareaEl.value.trim();
  const numberofCharacters = value.length;
  let numberofWords = value === "" ? 0 : value.split(/\s+/).length;
  let numberofTwitterLeft = 280 - value.length;
  let numberofacebookLeft = 2200 - value.length;
  // block the js code in input
  blockJs(textareaEl);
  // limit number for social
  limit(numberofTwitterLeft, twitterNumberEl);

  limit(numberofacebookLeft, facebookNumberEl);

  // update Dom
  charactersNumberEl.textContent = numberofCharacters;
  wordsNumberEl.textContent = numberofWords;
  twitterNumberEl.textContent = numberofTwitterLeft;
  facebookNumberEl.textContent = numberofacebookLeft;
};

// Listeners
textareaEl.addEventListener("input", countCharacters);
