const ulf = document.querySelector("ul li:first-child");
const ul = document.querySelector("ul");
const ne = document.createElement("div");
ne.innerHTML ="2000";
ul.insertAdjacentElement('beforebegin',ne);
console.log(
    ul.querySelector('li')
);