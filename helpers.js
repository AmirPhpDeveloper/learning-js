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
