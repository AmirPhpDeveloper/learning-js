import {
    jobListSearchEl,
    jobDetailsContentEl,
    spinnerJobDetailsEl,
    BASE_API_URL
} from '../common.js';
import renderSpinner from './Spinner.js';
import renderJobDetailsHtml from './JobDetails.js';

const renderjobList = jobItems => {
    jobItems.slice(0, 7).forEach(jobItem => {
        const jobItemHtml = `
            <li class="job-item">
                        <a class="job-item__link" href="${jobItem.id}">
                            <div class="job-item__badge">${jobItem.badgeLetters}</div>
                            <div class="job-item__middle">
                                <h3 class="third-heading">${jobItem.title}</h3>
                                <p class="job-item__company">${jobItem.company}</p>
                                <div class="job-item__extras">
                                    <p class="job-item__extra"><i class="fa-solid fa-clock job-item__extra-icon"></i>${jobItem.duration}</p>
                                    <p class="job-item__extra"><i class="fa-solid fa-money-bill job-item__extra-icon"></i>${jobItem.salary}</p>
                                    <p class="job-item__extra"><i class="fa-solid fa-location-dot job-item__extra-icon"></i>${jobItem.location}</p>
                                </div>
                            </div>
                            <div class="job-item__right">
                                <i class="fa-solid fa-bookmark job-item__bookmark-icon"></i>
                                <time class="job-item__time">${jobItem.daysAgo}d</time>
                            </div>
                        </a>
                    </li>
            `;
        jobListSearchEl.insertAdjacentHTML('beforeend', jobItemHtml);
    });
}

const clickHandler = event => {
    event.preventDefault();
    const jobItemEL = event.target.closest('.job-item');

    document.querySelector('.job-item--active')?.classList.remove('job-item--active');
    jobItemEL.classList.add('job-item--active');

    jobDetailsContentEl.innerHTML = '';
    spinnerJobDetailsEl.classList.add('spinner--visible');

    const jobId = jobItemEL.children[0].getAttribute('href');
    console.log(jobId);
    fetch(`${BASE_API_URL}/jobs/${jobId}`)
        .then(response => {
            if (!response.ok) {
                console.log('wrong');
                return;
            }
            return response.json();
        })
        .then(data => {
            const { jobItem } = data;

            renderSpinner('joblist');
            console.log(jobItem);
            renderJobDetailsHtml(jobItem);


        })
        .catch(err => console.log(err));
};
jobListSearchEl.addEventListener('click', clickHandler);

export default renderjobList;