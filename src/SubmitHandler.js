import * as Elements from "./Elements.js";
import jobItemRenderer from "./JobItem.js";
// -- Search Component --
const submitHandler = (event) => {
  event.preventDefault();
  Elements.jobListSearchEl.innerHTML = "";
  Elements.searchInputEl.blur();
  const searchText = Elements.searchInputEl.value;
  const forbiddenPattern = /[1-9]/;
  const patternMatch = forbiddenPattern.test(searchText);
  if (patternMatch) {
    Elements.errorTextEl.textContent = "you cant search number!!!";
    Elements.errorEl.classList.add("error--visible");
    setTimeout(() => {
      Elements.errorEl.classList.remove("error--visible");
    }, 3000);
    return;
  }
  Elements.spinnerSearchEl.classList.add("spinner--visible");
  fetch(`https://bytegrad.com/course-assets/js/2/api/jobs?search=${searchText}`)
    .then((res) => {
      if (!res.ok) {
        Elements.errorTextEl.textContent = "something went wrong!!!";
        Elements.errorEl.classList.add("error--visible");
        setTimeout(() => {
          Elements.errorEl.classList.remove("error--visible");
        }, 3000);
      }
      return res.json();
    })
    .then((data) => {
      const { jobItems } = data;

      Elements.spinnerSearchEl.classList.remove("spinner--visible");

      jobItems.slice(0, 7).forEach((job) => {
        const jobItem = jobItemRenderer(job);
        Elements.jobListSearchEl.insertAdjacentHTML("beforeend", jobItem);
      });
    })
    .catch((err) => console.log(err));
};
export default submitHandler;
