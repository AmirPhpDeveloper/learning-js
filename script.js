// Impports
import { handleText, validation } from "./helpers.js";

// Elements
const textareaEl = document.querySelector(".form__textarea");
const counterEl = document.querySelector(".counter");
const formEl = document.querySelector(".form");
const feedBacksEl = document.querySelector(".feedbacks");

// Variables
const maxChar = 150;
const hashtagRegex = /#\w+/;

// Functions
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
  const props = handleText(text);
  const upvoteCount = 0;
  const dayAgo = 0;
  const feedItem = `
    <li class="feedback">
            <button class="upvote">
                <i class="fa-solid fa-caret-up upvote__icon"></i>
                <span class="upvote__count">${upvoteCount}</span>
            </button>
            <section class="feedback__badge">
                <p class="feedback__letter">${props.badgeLetter}</p>
            </section>
            <div class="feedback__content">
                <p class="feedback__company">${props.company}</p>
                <p class="feedback__text">${text}</p>
            </div>
            <p class="feedback__date">${dayAgo}</p>
        </li>
    `;
  feedBacksEl.insertAdjacentHTML("beforeend", feedItem);
  textareaEl.value = "";
  inputHandler();
};

// Listeners
textareaEl.addEventListener("input", inputHandler);
formEl.addEventListener("submit", submitHandler);
