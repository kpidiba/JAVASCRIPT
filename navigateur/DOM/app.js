//document
console.log(window.document);

//querySelector
const ul = document.querySelector("ul");
const ulf = document.querySelector("ul li:first-child");
console.log(ul.innerHTML);
console.log(ul.innerText);
console.log(ulf.getAttribute("class"));
console.log(document.querySelector('#hello').innerHTML);

// querySelectorAll
const lis = document.querySelectorAll("li");
ul.style.color = "yellow";

ulf.classList.remove("blue");
console.log(lis.forEach((v) => console.log(v)));

//STYLE
console.log(ul.style);

//Modification du style
ul.style.fontWeight = 40;
console.log(getComputedStyle(ul).color);

//create and add element
const newLi = document.createElement("li");
newLi.innerHTML = "bonjour tout le monde";
document.querySelector("ul").appendChild(newLi);
