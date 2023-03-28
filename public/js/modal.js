document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector("#add-ingredient-btn");
  const form = document.querySelector("#recipe-form");
  let ingredientCount = 2;

  addButton.addEventListener("click", () => {
    console.log("The add ingredient button has been clicked!");
    const input = document.createElement("input");
    input.type = "text";
    input.name = `ingredient ${ingredientCount}`;
    input.placeholder = `ingredient ${ingredientCount}`;
    input.classList.add(
      "input",
      "input-bordered",
      "w-full",
      "max-w-xs",
      "bg-white",
      "text-dark-slate-gray"
    );
    form.insertBefore(input, addButton);
    ingredientCount++;
  });
});
