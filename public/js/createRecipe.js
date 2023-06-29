const commonClassList = [
  "bg-white",
  "text-dark-slate-gray",
  "my-2",
]

const args = {
  ingredients: {
    button: "#add-ingredient-btn",
    input: "input",
    type: "text",
    name: "ingredients[]",
    placeholderPrefix: "Ingredient",
    classList: ["input", "input-bordered", "w-full", "max-w-xs"],
    parent: "#recipe-form",
    counter: 2,
  },
  steps: {
    button: "#add-steps-btn",
    input: "textarea",
    type: "text",
    name: "directions[]",
    placeholderPrefix: "Step",
    classList: ["textarea", "textarea-bordered", "h-22"],
    parent: "#directions-form",
    counter: 2,
  },
}

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(args).forEach((key) => {
    const button = document.querySelector(args[key].button);

    button.addEventListener("click", () => {
      const element = document.createElement(args[key].input);
      element.type = args[key].type;
      element.name = args[key].name;
      element.placeholder = `${args[key].placeholderPrefix} ${args[key].counter}`;
      commonClassList.forEach((className) => element.classList.add(className));
      element.classList.add(...args[key].classList);
      document.querySelector(args[key].parent).insertBefore(element, button);
      args[key].counter += 1;
    });
  });
});
