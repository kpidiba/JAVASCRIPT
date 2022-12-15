/**
 *
 * @param {SubmitEvent} e
 */
function form(e) {
  e.preventDefault();
  // const form = e.currentTarget;
  const data = new FormData(e.currentTarget);
  console.log(data.get("name"));
}

/**
 *
 * @param {Event} e
 */
function inputChange(e) {
  console.log(e);
}

/**
 *
 * @param {InputEvent} e
 */
function inputInput(e) {
  const val = e.currentTarget.value;
  console.log(val);
  if (val.length == 4) {
    console.log(4);
  }
}

// document.querySelector("form").addEventListener("submit", (e) => form(e));

// document
//   .querySelector("input")
//   .addEventListener("change", (e) => inputChange(e));

// document.querySelector("input").addEventListener("input", (e) => inputInput(e));

//NOTE:keydown pour connaitre quel touche a ete utiliser et reagir en fonction
document
  .querySelector("input")
  .addEventListener("keydown", (e) => console.log(e.key));

//NOTE: quand un element a le focus
document
  .querySelector("input")
  .addEventListener("focus", (e) => console.log(e));

//NOTE: quand un element a le focus et qu' on le quitte
document.querySelector("input").addEventListener("blur", (e) => console.log(e));

document
  .querySelector("input[type=checkbox]")
  .addEventListener("change", (e) => console.log(e.currentTarget.checked));

document
  .querySelector("select")
  .addEventListener("change", (e) =>
    console.log(
      Array.from(e.currentTarget.selectedOptions).map((option) => option.value)
    )
  );

//NOTE: spoiler example
/**
 *
 * @param {PointerEvent} e
 */
function reveler(e) {
  console.log(e);
}
document
  .querySelectorAll(".spoiler")
  .forEach((e) => e.addEventListener("click", (e) => reveler(e.currentTarget.classList.remove('spoiler'))));
