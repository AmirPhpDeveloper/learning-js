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
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const data = response.feedbacks;
      listEl.innerHTML = "";
      data.forEach((feedback) => {
        const feedItem = createFeedEL(feedback);
        listEl.insertAdjacentHTML("beforeend", feedItem);
      });
    })
    .catch((error) => {
      console.log(`error in fecthing data from API : ${error} `);
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
