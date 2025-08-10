// Elements
const counterVlueEl = document.querySelector(".counter_value");
const counterButtonDecEl = document.querySelector(".counter_button--decrease");
const counterButtonIncEl = document.querySelector(".counter_button--increase");
const counterTitleEl = document.querySelector(".counter_title");
const counterReseetBtnEl = document.querySelector(".counter_reset-button");

// functions
function ValueInc() {
  counterVlueEl.innerHTML = parseInt(counterVlueEl.innerHTML) + 1;
}
function ValueDec() {
  if (counterVlueEl.innerHTML != 0) {
    counterVlueEl.innerHTML = parseInt(counterVlueEl.innerHTML) - 1;
  } else {
    alert("We cannot count negative numbers.");
  }
}
function resetValue() {
  counterVlueEl.innerHTML = 0;
}

// Listeners
counterButtonIncEl.addEventListener("click", ValueInc);
counterButtonDecEl.addEventListener("click", ValueDec);
counterReseetBtnEl.addEventListener("click", resetValue);
