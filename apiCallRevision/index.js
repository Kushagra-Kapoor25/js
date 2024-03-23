const url = "https://v2.jokeapi.dev/joke/Any";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
