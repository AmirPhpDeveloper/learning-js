// Fetch and log the first 5 posts from the API
const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    for (let i = 0; i < 5; i++) {
      console.log(data[i].title);
    }
  })
  .catch((error) => {
    console.log(error);
  });
