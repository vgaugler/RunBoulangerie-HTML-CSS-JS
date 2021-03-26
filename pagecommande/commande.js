// scroll menu

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
  var panier = document.querySelector(".panier");
  panier.classList.toggle("sticky", window.scrollY > 0);
});

// toggle menu

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}
const boxPanier = document.querySelector(".panier");
const panier = document.querySelector(".panier_item");
const price = document.querySelector(".panier_price");
const btn1 = document.getElementById("button1+");
const btn2 = document.getElementById("button1-");
const okCard1 = document.getElementById("ok1");
const btn1Card2 = document.getElementById("button2+");
const btn2Card2 = document.getElementById("button2-");
const okCard2 = document.getElementById("ok2");
const result1 = document.getElementById("result1");
const resutt2 = document.getElementById("result2");
let result = 0;
let resultCard2 = 0;
let priceCroissant = 0;

//if (result >= 0) {

btn1.addEventListener("click", function () {
  result += 1;
  result1.innerHTML = result;
  result1.classList.toggle("translate");
  /* panier.innerHTML = `<i class="far fa-arrow-alt-circle-right"></i> ${result} croissant`; 
    priceCroissant = parseInt(price); 
    console.log(result);
    price.innerHTML = `Total : ${result*1.50} euros`;*/
});

btn2.addEventListener("click", function () {
  result -= 1;
  result1.innerHTML = result;
  /*panier.innerHTML = ` ${result}, croissant`;
    console.log(result);
    priceCroissant = parseInt(price); 
    console.log(priceCroissant); 
    panier.innerHTML = `<i class="far fa-arrow-alt-circle-right"></i> ${result-1} croissant`;
    price.innerHTML = `Total : ${(result-1)*1.50} euros`;*/
});

okCard1.addEventListener("click", function () {
  let addResultCard1 = document.createElement("p");
  addResultCard1.innerHTML = `<i class="far fa-arrow-alt-circle-right"></i> ${result} croissants`;
  panier.appendChild(addResultCard1);
  boxPanier.style.height = "250px";
  price.innerHTML = `Total : ${result * 1.5 + resultCard2 * 1.75} euros`;
});

btn1Card2.addEventListener("click", function () {
  resultCard2 += 1;
  result2.innerHTML = resultCard2;
  result2.classList.toggle("translate");
  /* panier.innerHTML = `<i class="far fa-arrow-alt-circle-right"></i> ${result} croissant`; 
    priceCroissant = parseInt(price); 
    console.log(result);
    price.innerHTML = `Total : ${result*1.50} euros`;*/
});

btn2Card2.addEventListener("click", function () {
  resultCard2 -= 1;
  result2.innerHTML = resultCard2;
  /*panier.innerHTML = ` ${result}, croissant`;
    console.log(result);
    priceCroissant = parseInt(price); 
    console.log(priceCroissant); 
    panier.innerHTML = `<i class="far fa-arrow-alt-circle-right"></i> ${result-1} croissant`;
    price.innerHTML = `Total : ${(result-1)*1.50} euros`;*/
});

okCard2.addEventListener("click", function () {
  let addResultCard2 = document.createElement("p");
  addResultCard2.innerHTML = `<i class="far fa-arrow-alt-circle-right"></i> ${resultCard2} pains aux raisins`;
  panier.appendChild(addResultCard2);
  boxPanier.style.height = "250px";
  price.innerHTML = `Total : ${result * 1.5 + resultCard2 * 1.75} euros`;
});

//};

/*console.log(typeof(result)); */
