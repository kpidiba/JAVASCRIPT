// /**
//  *
//  * @param {PointerEvent} e
//  */
// function text(e){
//     const text = button.innerText;
//     if(text === "123"){
//         button.innerText = '1234';
//     }else{
//         button.innerText = '123';
//     }
//     console.log(e.currentTarget)
// }

// const btn = document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', text(e))
// })

//NOTE:phase 2
const btn = document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("button click"), e.preventDefault(), e.stopPropagation();
  });
});

const div = document
  .querySelector("div")
  .addEventListener("click", (e) => console.log("click div"));
