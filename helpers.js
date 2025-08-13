export const blockJs = (textareaElement) => {
  if (/<\s*\/?\s*script\s*>/i.test(textareaElement.value)) {
    alert("You can't write script tags in the input.");
    textareaElement.value = textareaElement.value.replace(
      /<\s*\/?\s*script\s*>/gi,
      " "
    );
  }
};

export const limit = (number, element) => {
  if (number < 0) element.classList.add("stat__number_limit");
  else element.classList.remove("stat__number_limit");
};
