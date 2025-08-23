export const validation = (element, className, timer = 2000) => {
  element.classList.add(`${className}`);
  setTimeout(() => {
    element.classList.remove(`${className}`);
  }, timer);
};
export const createFeedEL = (props) => {
  const feedItem = `
      <li class="feedback">
              <button class="upvote">
                  <i class="fa-solid fa-caret-up upvote__icon"></i>
                  <span class="upvote__count">${props.upvoteCount}</span>
              </button>
              <section class="feedback__badge">
                  <p class="feedback__letter">${props.badgeLetter}</p>
              </section>
              <div class="feedback__content">
                  <p class="feedback__company">${props.company}</p>
                  <p class="feedback__text">${props.text}</p> 
              </div>
              <p class="feedback__date">${
                props.daysAgo === 0 ? "NEW" : `${props.daysAgo}d`
              }</p>
          </li>
      `;
  return feedItem;
};

export const handleText = (text) => {
  const wordes = text.split(" ");
  const hashtag = wordes.find((word) => /^#\S+/.test(word));
  const company = hashtag.substring(1);
  const badgeLetter = company.substring(0, 1);
  const upvoteCount = 0;
  const dayAgo = 0;
  return {
    hashtag: hashtag,
    company: company,
    badgeLetter: badgeLetter,
    upvoteCount: upvoteCount,
    daysAgo: dayAgo,
    text: text,
  };
};
export const getFeedbacks = (url, listEl) => {
  getData(url).then((data) => {
    listEl.innerHTML = "";
    data.forEach((feedback) => {
      const feedItem = createFeedEL(feedback);
      listEl.insertAdjacentHTML("beforeend", feedItem);
    });
  });
};

export const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => json.feedbacks)
    .catch((error) => {
      console.log(`error in fetching data from API : ${error}`);
      return [];
    });
};

export const createFeedBack = (text, elements, URL) => {
  const props = handleText(text);

  const feedItem = createFeedEL(props);

  elements.feedBacksEl.insertAdjacentHTML("beforeend", feedItem);
  elements.textareaEl.value = "";
  elements.submitBtnEl.blur();
  fetch(URL, {
    method: "POST",
    body: JSON.stringify(props),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        console.log("Something went wrong in submit");
        return;
      }
      console.log("Successfuly submitted");
    })
    .catch((error) => {
      console.log("Something went wrong in submit" + error);
    });
};

export const clickHandler = (event) => {
  const clickedEl = event.target;
  const upvoteEl = clickedEl.className.includes("upvote");
  if (upvoteEl) {
    const upvoteBtnEl = clickedEl.closest(".upvote");
    let upvoteCount = upvoteBtnEl.querySelector(".upvote__count");
    upvoteCount.textContent++;
    upvoteBtnEl.disabled = true;
    return;
  }
  clickedEl.closest(".feedback").classList.toggle("feedback--expand");
};
