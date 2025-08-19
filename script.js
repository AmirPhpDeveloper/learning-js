// Impports
import { createFeedBack, getFeedbacks, validation } from "./helpers.js";

// Elements
const textareaEl = document.querySelector(".form__textarea");
const counterEl = document.querySelector(".counter");
const formEl = document.querySelector(".form");
const feedBacksEl = document.querySelector(".feedbacks");
const submitBtnEl = document.querySelector(".submit-btn");

// Variables
export const URL = "https://bytegrad.com/course-assets/js/1/api/feedbacks";
const maxChar = 150;
const hashtagRegex = /#\w+/;

// Functions
getFeedbacks(URL, feedBacksEl);

const inputHandler = () => {
  const charTyped = textareaEl.value.length;
  const charLeft = maxChar - charTyped;
  counterEl.textContent = charLeft;
};

const submitHandler = (event) => {
  event.preventDefault();
  const text = textareaEl.value;
  if (!hashtagRegex.test(text) || text.length < 5) {
    validation(formEl, "form--invalid");
    textareaEl.focus();
    return;
  }
  validation(formEl, "form--valid");

  const feedBacksElements = {
    feedBacksEl: feedBacksEl,
    textareaEl: textareaEl,
    submitBtnEl: submitBtnEl,
  };

  createFeedBack(text, feedBacksElements, URL);
};
inputHandler();
// Listeners
textareaEl.addEventListener("input", inputHandler);
formEl.addEventListener("submit", submitHandler);
