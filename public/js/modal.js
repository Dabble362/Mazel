const commonClassList = [
  "bg-white",
  "text-dark-slate-gray",
  "my-2",
]

document.addEventListener("DOMContentLoaded", () => {
  const addIngredientButton = document.querySelector("#add-ingredient-btn");
  let ingredientCount = 2;

  addIngredientButton.addEventListener("click", () => {
    console.log("The add ingredient button has been clicked!");

    const input = document.createElement("input");
    input.type = "text";
    input.name = `ingredients[]`;
    input.placeholder = `ingredient ${ingredientCount}`;
    commonClassList.forEach((className) => input.classList.add(className));
    input.classList.add(
      "input",
      "input-bordered",
      "w-full",
      "max-w-xs",
    );

    const ingredientForm = document.querySelector("#recipe-form");
    ingredientForm.insertBefore(input, addIngredientButton);
    ingredientCount++;
  });

  const addStepButton = document.querySelector("#add-steps-btn");
  let stepsCount = 2;

  addStepButton.addEventListener("click", () => {
    console.log("The add step button has been clicked!");

    const textArea = document.createElement("textarea");
    textArea.type = "text";
    textArea.name = `directions[]`;
    textArea.placeholder = `step # ${stepsCount}`;
    commonClassList.forEach((className) => textArea.classList.add(className));
    textArea.classList.add(
      "textarea",
      "textarea-bordered",
      "h-22",
    );

    const directionsForm = document.querySelector("#directions-form");
    directionsForm.insertBefore(textArea, addStepButton);
    stepsCount++;
  });
});
