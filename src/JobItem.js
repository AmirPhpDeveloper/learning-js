const jobItemRenderer = (job) => {
  return `
            <li class="job-item">
                        <a class="job-item__link" href="${job.id}">
                            <div class="job-item__badge">${
                              job.badgeLetters
                            }</div>
                            <div class="job-item__middle">
                                <h3 class="third-heading">${job.title}</h3>
                                <p class="job-item__company">${job.company}</p>
                                <div class="job-item__extras">
                                    <p class="job-item__extra"><i class="fa-solid fa-clock job-item__extra-icon"></i> ${
                                      job.duration
                                    }</p>
                                    <p class="job-item__extra"><i class="fa-solid fa-money-bill job-item__extra-icon"></i> ${
                                      job.salary
                                    }</p>
                                    <p class="job-item__extra"><i class="fa-solid fa-location-dot job-item__extra-icon"></i> ${
                                      job.location
                                    }</p>
                                </div>
                            </div>
                            <div class="job-item__right">
                                <i class="fa-solid fa-bookmark job-item__bookmark-icon"></i>
                                <time class="job-item__time">${
                                  job.daysAgo === 0 ? "NEW" : job.daysAgo
                                }d</time>
                            </div>
                        </a>
                    </li>
            `;
};
export default jobItemRenderer;
