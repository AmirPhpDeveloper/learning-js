// Elements
const textareaEl = document.querySelector(".textarea");
const wordsNumberEl = document.querySelector(".stat__number--words");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");

// Functions
const countCharacters = () => {
  let numberOfCharacters = textareaEl.value.length;
  let numberOfWords = textareaEl.value.split(" ").length;
  let numberOfTwitterLeft = 280 - textareaEl.value.length;
  let numberOfacebookLeft = 2200 - textareaEl.value.length;

  if (textareaEl.value.includes("<script>")) {
    alert("you can'nt write script in input");
    console.log(textareaEl.value.replace("<script>", " "));
    textareaEl.value = textareaEl.value.replace("<script>", " ");
  }

  if (textareaEl.value.length === 0) {
    numberOfWords = 0;
  }

  if (numberOfTwitterLeft < 0) {
    twitterNumberEl.classList.add("stat__number_limit");
  } else {
    {
      twitterNumberEl.classList.remove("stat__number_limit");
    }
  }

  if (numberOfacebookLeft < 0) {
    facebookNumberEl.classList.add("stat__number_limit");
  } else {
    {
      facebookNumberEl.classList.remove("stat__number_limit");
    }
  }

  charactersNumberEl.textContent = numberOfCharacters;
  wordsNumberEl.textContent = numberOfWords;
  twitterNumberEl.textContent = numberOfTwitterLeft;
  facebookNumberEl.textContent = numberOfacebookLeft;
};

// Listeners
textareaEl.addEventListener("input", countCharacters);
