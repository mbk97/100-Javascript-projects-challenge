const access_key = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
const btn = document.getElementById("search_btn");
const inputField = document.getElementById("input_field");
const cardResultWrapper = document.getElementById("card-result-wrapper");
const errorText = document.getElementById("err_text");
const loader = document.getElementById("loading");

const searchImages = async () => {
  const searchQuery = inputField.value;
  let page = 1;
  let result;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchQuery}&client_id=${access_key}`;

  loader.style.display = "block";

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      result = data.results;
      console.log(result);
    })
    .catch((err) => (errorText.innerHTML = err.message))
    .finally(() => {
      loader.style.display = "none";
    });

  if (loader.style.display === "none") {
    const mappedResult = result.map((res) => {
      return ` 
    <div class="search-result">
        <img
          src=${res.urls.small}
          alt="image"
          class="img"
        />
        <div class='text_link_wrapper'>
        <a
        href="https://unsplash.com/photos/g-7X6T7vAI4"
        target="_blank"
        rel="noopener noreferrer"
        >${res.alt_description}</a
        >
        </div>
        </div>
        `;
    });
    cardResultWrapper.innerHTML = mappedResult;
  }
};

btn.addEventListener("click", () => {
  const searchQuery = inputField.value;
  if (!searchQuery) {
    alert("Query field cannot be empty");
    return;
  }
  searchImages();
});
