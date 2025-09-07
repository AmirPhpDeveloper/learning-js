import * as Elements from "./Elements.js";
import JobDetailRenderer from "./JobDetail.js";
const ClickHandler = (event) => {
  event.preventDefault();
  const jobItemEl = event.target.closest(".job-item");
  document
    .querySelector(".job-item--active")
    ?.classList.remove("job-item--active");
  jobItemEl.classList.add("job-item--active");
  const jobId = jobItemEl.children[0].getAttribute("href");
  Elements.jobDetailsContentEl.innerHTML = "";
  Elements.spinnerJobDetailsEl.classList.add("spinner--visible");
  fetch(`https://bytegrad.com/course-assets/js/2/api/jobs/${jobId}`)
    .then((response) => {
      if (!response.ok) {
        console.error("something went wrong");
        return;
      }
      return response.json();
    })
    .then((data) => {
      Elements.spinnerJobDetailsEl.classList.remove("spinner--visible");
      const { jobItem } = data;
      console.info(jobItem.companyURL);
      const detail = JobDetailRenderer(jobItem);

      Elements.jobDetailsContentEl.innerHTML = detail;
    })
    .catch((err) => console.error(err));
};

export default ClickHandler;
