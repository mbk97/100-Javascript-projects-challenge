const searchInput = document.getElementById("search_input");
const resultWrapper = document.getElementById("text-wrapper");
const titleText = document.getElementById("title_text");
const meaningText = document.getElementById("meaning_text");
const audioElement = document.getElementById("audio");
const errorText = document.getElementById("error_text");

async function fetchApi(word) {
  try {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url);
    const data = await result.json();
    if (!data.title) {
      titleText.innerText = `Word title: ${data[0].word}`;
      meaningText.innerText = `Meaning: ${data[0].meanings[0].definitions[0].definition}`;
      audioElement.style.display = "block";
      audioElement.src = data[0].phonetics[0].audio;
      errorText.style.display = "none";
    } else {
      errorText.style.display = "block";
      errorText.innerText = data.message;
    }
  } catch (error) {
    errorText.style.display = "block";
    errorText.innerText = "An error occured";
  }
}

searchInput.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchApi(e.target.value);
  }
});
