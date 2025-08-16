export const validation = (element, className, timer = 2000) => {
  element.classList.add(`${className}`);
  setTimeout(() => {
    element.classList.remove(`${className}`);
  }, timer);
};
