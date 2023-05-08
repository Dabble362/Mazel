document.addEventListener("DOMContentLoaded", () => {
  const addIngredientButton = document.querySelector("#add-ingredient-btn");
  const ingredientForm = document.querySelector("#recipe-form");
  let ingredientCount = 2;

  addIngredientButton.addEventListener("click", () => {
    console.log("The add ingredient button has been clicked!");
    const input = document.createElement("input");
    input.type = "text";
    input.name = `ingredients[]`;
    input.placeholder = `ingredient ${ingredientCount}`;
    input.classList.add(
      "input",
      "input-bordered",
      "w-full",
      "max-w-xs",
      "bg-white",
      "text-dark-slate-gray",
      "my-2"
    );
    ingredientForm.insertBefore(input, addIngredientButton);
    ingredientCount++;
  });

  const addStepButton = document.querySelector("#add-steps-btn");
  const directionsForm = document.querySelector("#directions-form");
  let stepsCount = 2;

  addStepButton.addEventListener("click", () => {
    console.log("The add step button has been clicked!");
    const textArea = document.createElement("textarea");
    textArea.type = "text";
    textArea.name = `directions[]`;
    textArea.placeholder = `step # ${stepsCount}`;
    textArea.classList.add(
      "textarea",
      "textarea-bordered",
      "h-22",
      "bg-white",
      "text-dark-slate-gray",
      "my-2"
    );
    directionsForm.insertBefore(textArea, addStepButton);
    stepsCount++;
  });
});
