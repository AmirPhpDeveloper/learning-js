// Impports
import {
  clickHandler,
  createFeedBack,
  getData,
  getFeedbacks,
  validation,
  createFeedEL,
} from "./helpers.js";

// Elements
const textareaEl = document.querySelector(".form__textarea");
const counterEl = document.querySelector(".counter");
const formEl = document.querySelector(".form");
const feedBacksEl = document.querySelector(".feedbacks");
const submitBtnEl = document.querySelector(".submit-btn");
const hashtagsEl = document.querySelector(".hashtags");

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
  // reset counter
  inputHandler();
};
const hashtagClickHandler = (event) => {
  feedBacksEl.innerHTML = "";
  feedBacksEl.insertAdjacentHTML("beforeend", '<div class="spinner"></div>');

  const clickedEl = event.target;
  if (clickedEl.className === "hashtags") return;

  getData(URL).then((feedBacks) => {
    const componyFromHashtag = clickedEl.textContent
      .substring(1)
      .toLowerCase()
      .trim();

    let hasResults = false; // 👈 این اضافه شد

    feedBacks.forEach((feedBack) => {
      const companyFromFeedback = feedBack.company.toLowerCase().trim();
      if (companyFromFeedback === componyFromHashtag) {
        const feedBackItem = createFeedEL(feedBack);
        feedBacksEl.insertAdjacentHTML("beforeend", feedBackItem);
        hasResults = true; // 👈 چیزی پیدا شد
      }
    });

    // spinner رو فقط آخر پاک کن
    const spinner = feedBacksEl.querySelector(".spinner");
    if (spinner) spinner.remove();

    // 👇 اگه هیچ آیتمی نبود
    if (!hasResults) {
      feedBacksEl.insertAdjacentHTML(
        "beforeend",
        `<div class="not-found">
  <img src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-animation-gif-download-3299952.gif" alt="Not Found" />
  <p>No feedbacks found for "${componyFromHashtag}"</p>
</div>`
      );
    }
  });
};

// Listeners
textareaEl.addEventListener("input", inputHandler);
formEl.addEventListener("submit", submitHandler);
feedBacksEl.addEventListener("click", clickHandler);
hashtagsEl.addEventListener("click", hashtagClickHandler);
