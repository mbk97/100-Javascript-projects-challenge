const imagesContainer = document.getElementById("flex-img-wrapper");
const inputField = document.getElementById("input");
const btn = document.getElementById("btn");
const errorMessage = document.getElementById("errorMessage");

async function fetchImages() {
  const inputValue = inputField.value;

  if (inputValue > 10 || inputValue < 1) {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Number should be between 0 and 10";

    return;
  }

  try {
    btn.innerText = "Loading...";
    btn.style.cursor = "not-allowed";
    const response = await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 1000,
      )}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc`,
    );

    const result = await response.json();
    const data = result;

    if (data) {
      const mappedResult = data.map((d) => {
        return `<div class="img-wrapper">
            <img src=${d.urls.small} alt="image" />
            </div>`;
      });
      imagesContainer.innerHTML = mappedResult;
      btn.innerText = "Search Photos";
    }
  } catch (error) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "An error happened, try again later";
  }
}

btn.addEventListener("click", fetchImages);
