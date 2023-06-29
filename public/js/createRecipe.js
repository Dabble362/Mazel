const commonClassList = [
  "bg-white",
  "text-dark-slate-gray",
  "my-2",
]

const buttonArgs = {
  ingredients: {
    button: "#add-ingredient-btn",
    input: "input",
    name: "ingredients[]",
    placeholderPrefix: "Ingredient",
    classList: ["input", "input-bordered", "w-full", "max-w-xs"],
    parent: "#recipe-form",
    counter: 2,
  },
  steps: {
    button: "#add-steps-btn",
    input: "textarea",
    name: "directions[]",
    placeholderPrefix: "Step",
    classList: ["textarea", "textarea-bordered", "h-22"],
    parent: "#directions-form",
    counter: 2,
  },
}

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(buttonArgs).forEach((key) => {
    const button = document.querySelector(buttonArgs[key].button);

    button.addEventListener("click", () => {
      const element = document.createElement(buttonArgs[key].input);
      element.type = "text";
      element.name = buttonArgs[key].name;
      element.placeholder = `${buttonArgs[key].placeholderPrefix} ${buttonArgs[key].counter}`;
      commonClassList.forEach((className) => element.classList.add(className));
      element.classList.add(...buttonArgs[key].classList);
      document.querySelector(buttonArgs[key].parent).insertBefore(element, button);
      buttonArgs[key].counter += 1;
    });
  });
});
