const inputField = document.getElementById("input_field");
const btn = document.getElementById("btn");
const loading = document.getElementById("loading");
const errText = document.getElementById("err_text");
const cardResultWrapper = document.getElementById("card_wrapper");

const searchRecipe = async () => {
  if (inputField.value === "") {
    alert("Search box cannot be empty");
    return;
  }
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputField.value}`;
  let result;

  loading.style.display = "block";

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      result = data.meals;
      console.log(result, "How");
    })
    .catch((err) => {
      errText.innerHTML = err.message;
    })
    .finally(() => {
      loading.style.display = "none";
      inputField.value = "";
    });

  const mappedResult = result.map((res) => {
    return `<div class="card">
          <div class="card_header">
            <img src=${res.strMealThumb} alt="" class="img" />
          </div>
          <div class="card_body">
            <h3>${res.strMeal}</h3>
            <p>Ingredients</p>
            <ul>
             <li>${res.strIngredient1}</li>
             <li>${res.strIngredient2}</li>
             <li>${res.strIngredient3}</li>
             <li>${res.strIngredient4}</li>
             <li>${res.strIngredient5}</li>
            </ul>
          </div>
          <div class="card_footer">
            <a
            href=${res.strSource}
            target="_blank"
            rel="noopener noreferrer"
        > <button class="recipe_btn">View Recipe</button></a
        >
          </div>
        </div>`;
  });
  cardResultWrapper.innerHTML = mappedResult;
};

btn.addEventListener("click", () => {
  searchRecipe();
});
