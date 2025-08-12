// Elements
const textareaEl = document.querySelector(".textarea");
const wordsNumberEl = document.querySelector(".stat__number--words");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");

// Functions
const countCharacters = () => {
  const numberOfCharacters = textareaEl.value.length;
  charactersNumberEl.textContent = numberOfCharacters;
};

// Listeners
textareaEl.addEventListener("input", countCharacters);
