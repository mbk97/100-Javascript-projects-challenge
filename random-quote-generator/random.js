const quoteText = document.getElementById("quote-text");
const quoteWrapper = document.getElementById("quote-wrapper");
const authorName = document.getElementById("author-name");
const btn = document.getElementById("btn");
const errText = document.getElementById("err_text");

const apiURL = "https://api.quotable.io/random";

const fetchRandomQuotes = async () => {
  try {
    btn.innerText = "Loading...";
    btn.disabled = true;
    const response = await fetch(apiURL);
    const data = await response.json();
    if (data) {
      const result = `
      <div>
        <div class="quote-text-wrapper">
          <i class="fa-solid fa-quote-left"></i>
          <h3 id="quote-text">${data.content}</h3>
          <i class="fa-solid fa-quote-right"></i>
        </div>
        <h5 id="author-name">${data.author}</h5>
      </div>
      `;
      quoteWrapper.innerHTML = result;
    }
    btn.innerText = "Generate Quote";
    btn.disabled = false;
  } catch (error) {
    errText.innerHTML = error.message;
  }
};

btn.addEventListener("click", () => {
  fetchRandomQuotes();
});
