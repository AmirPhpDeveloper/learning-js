export const validation = (element, className, timer = 2000) => {
  element.classList.add(`${className}`);
  setTimeout(() => {
    element.classList.remove(`${className}`);
  }, timer);
};

export const handleText = (text) => {
  const wordes = text.split(" ");
  const hashtag = wordes.find((word) => /^#\S+/.test(word));
  const company = hashtag.substring(1);
  const badgeLetter = company.substring(0, 1);
  return {
    wordes: wordes,
    hashtag: hashtag,
    company: company,
    badgeLetter: badgeLetter,
  };
};
export const getFeedbakcs = (url, listEl) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const data = response.feedbacks;
      listEl.innerHTML = "";
      data.forEach((feedback) => {
        const feedItem = `
    <li class="feedback">
            <button class="upvote">
                <i class="fa-solid fa-caret-up upvote__icon"></i>
                <span class="upvote__count">${feedback.upvoteCount}</span>
            </button>
            <section class="feedback__badge">
                <p class="feedback__letter">${feedback.badgeLetter}</p>
            </section>
            <div class="feedback__content">
                <p class="feedback__company">${feedback.company}</p>
                <p class="feedback__text">${feedback.text}</p>
            </div>
            <p class="feedback__date">${
              feedback.daysAgo === 0 ? "NEW" : feedback.daysAgo
            }</p>
        </li>
    `;
        listEl.insertAdjacentHTML("beforeend", feedItem);
      });
    });
};
