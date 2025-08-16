// Impports
import { validation } from "./helpers.js";

// Elements
const textareaEl = document.querySelector(".form__textarea");
const counterEl = document.querySelector(".counter");
const formEl = document.querySelector(".form");

// Variables
const maxChar = 150;

// Functions
const inputHandler = () => {
  const charTyped = textareaEl.value.length;
  const charLeft = maxChar - charTyped;
  counterEl.textContent = charLeft;
};

const submitHandler = (event) => {
  event.preventDefault();
  const text = textareaEl.value;

  if (text.includes("#") && text.length >= 5) {
    validation(formEl, "form--valid");
  } else {
    validation(formEl, "form--invalid");
  }
};

// Listeners
textareaEl.addEventListener("input", inputHandler);
formEl.addEventListener("submit", submitHandler);
