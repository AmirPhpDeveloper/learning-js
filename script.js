// Fetch and  show titles in HTML
const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (datas) {
    datas.forEach((data) => {
      const el = `<li>${data.title}</li>`;
      document.querySelector("#ul").insertAdjacentHTML("beforeend", el);
    });
  })
  .catch((error) => {
    console.log(error);
  });
