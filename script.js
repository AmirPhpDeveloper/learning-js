// Elements
const counterValueEl = document.querySelector(".counter_value");
const counterButtonDecEl = document.querySelector(".counter_button--decrease");
const counterButtonIncEl = document.querySelector(".counter_button--increase");
const counterResetBtnEl = document.querySelector(".counter_reset-button");
const counterTitleEl = document.querySelector(".counter_title");
const counterEl = document.querySelector(".counter");

// Constants
const MIN_VALUE = 0;
const MAX_VALUE = 5;

// State
let counterValue = +localStorage.getItem("counterValue") || 0;
counterValueEl.textContent = counterValue;

// Helpers
function updateValue(newValue) {
  counterValue = newValue;
  counterValueEl.textContent = counterValue;
  localStorage.setItem("counterValue", counterValue);
}

function setNormalMode() {
  counterEl.classList.remove("counter_limit");
  counterTitleEl.textContent = "Mahmoodi Counter";
}

function setLimitMode(message) {
  counterEl.classList.add("counter_limit");
  counterTitleEl.textContent = message;
}

// Event Handlers
function valueInc() {
  if (counterValue < MAX_VALUE) {
    updateValue(counterValue + 1);
    setNormalMode();
  } else {
    setLimitMode(`Buy Pro! Count > ${MAX_VALUE}`);
  }
}

function valueDec() {
  if (counterValue > MIN_VALUE) {
    updateValue(counterValue - 1);
    setNormalMode();
  } else {
    setLimitMode(`Buy Pro! Count < ${MIN_VALUE}`);
  }
}

function resetValue() {
  setNormalMode();
  updateValue(0);
}

// Event Listeners
counterButtonIncEl.addEventListener("click", valueInc);
counterButtonDecEl.addEventListener("click", valueDec);
counterResetBtnEl.addEventListener("click", resetValue);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" || e.key === "+") valueInc();
  if (e.key === "ArrowDown" || e.key === "-") valueDec();
  if (e.key.toLowerCase() === "r") resetValue();
});
