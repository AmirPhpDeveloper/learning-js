// Elements
const counterVlueEl = document.querySelector(".counter_value");
const counterButtonDecEl = document.querySelector(".counter_button--decrease");
const counterButtonIncEl = document.querySelector(".counter_button--increase");
const counterReseetBtnEl = document.querySelector(".counter_reset-button");

// Get the counter value from localStorage or default to 0 if not found
let counterValue = parseInt(localStorage.getItem("counterValue")) || 0;
counterVlueEl.innerHTML = counterValue;

// functions
function updateValue(newValue) {
  counterValue = newValue;
  counterVlueEl.innerHTML = counterValue;
  localStorage.setItem("counterValue", counterValue);
}

function ValueInc() {
  updateValue(counterValue + 1);
}
function ValueDec() {
  if (counterValue != 0) {
    updateValue(counterValue - 1);
  } else {
    alert("We cannot count negative numbers.");
  }
}
function resetValue() {
  updateValue(0);
}

// Listeners
counterButtonIncEl.addEventListener("click", ValueInc);
counterButtonDecEl.addEventListener("click", ValueDec);
counterReseetBtnEl.addEventListener("click", resetValue);
