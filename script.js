// Elements
const textareaEl = document.querySelector(".form__textarea");
const counterEl = document.querySelector(".counter");

// Variables
const maxChar = 150;

// Functions
const inputHandler = () => {
  const charTyped = textareaEl.value.length;
  const charLeft = maxChar - charTyped;
  counterEl.textContent = charLeft;
};

// Listeners
textareaEl.addEventListener("input", inputHandler);
