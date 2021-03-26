// scroll menu

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// toggle menu

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}

// slide photo

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// * scroll */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL banner*/
sr.reveal(".banner__title", {});

/*scroll*/
sr.reveal("h2", {});
sr.reveal(".subtitle", {});
sr.reveal("h3", { delay: 200 });
sr.reveal("p", { delay: 400 });

// candy mode

const subtitle = document.querySelector("h3.subtitle");
const nav = document.querySelector("li.anav");
const menu = document.getElementById("head");
const btncandy = document.querySelector(".btnmode1");
const btntacos = document.querySelector(".btnmode2");
const banner = document.getElementById("banner");
const acceuilBox = document.querySelector(".acceuilBox_box1");
const info = document.querySelector(".defil");
let slide = document.querySelector(".imgslide");
let slide2 = document.querySelector(".imgslide2");
const comm1 = document.querySelector(".commclient");
const comm2 = document.querySelector(".commclient2");

btncandy.addEventListener("click", function () {
  btncandy.classList.toggle("active");
  banner.classList.toggle("candy-mode");
  acceuilBox.classList.toggle("candy-mode");
  nav.classList.toggle("candy-mode");
  menu.classList.toggle("candy-mode");
});

btntacos.addEventListener("click", function () {
  btntacos.classList.toggle("active");
  banner.classList.toggle("tacos-mode");
  acceuilBox.classList.toggle("tacos-mode");
  menu.classList.toggle("tacos-mode");
  subtitle.classList.toggle("tacos-mode");
  if (subtitle.className === "subtitle") {
    subtitle.innerHTML = "Patisserie Boulangerie";
  } else {
    subtitle.innerHTML = " Tacosserie";
  }
  info.classList.toggle("tacos-mode");
  if (info.className === "defil") {
    info.innerHTML =
      "Adressse , numéro de télèphone, ouvert 7/7 même après le couvre feu";
  } else {
    info.innerHTML =
      " 'Livraison de tacos moisi et pas moisi , ça dépend quel jour 24/24'";
  }
  slide.classList.toggle("tacos-mode");
  if (slide.className === "imgslide") {
    slide.src = "images/slide1.jpg";
  } else {
    slide.src = "images/tac1.jpg";
  }
  slide2.classList.toggle("tacos-mode");
  if (slide2.className === "imgslide2") {
    slide2.src = "images/slide2.jpg";
  } else {
    slide2.src = "images/tac2.jpg";
  }
  comm1.classList.toggle("tacos-mode");
  if (comm1.className === "commclient") {
    comm1.innerHTML = "C'était super bon,</br> merci pour tout, j'adore !";
  } else {
    comm1.innerHTML = "J'adore les tacos </br> surtout quand ils sont moisis !";
  }
  comm2.classList.toggle("tacos-mode");
  if (comm2.className === "commclient2") {
    comm2.innerHTML =
      "C'était succulent ,</br> quelles saveurs, on en redemande !";
  } else {
    comm2.innerHTML =
      "J'adore le PHP </br> surtout avec de la sauce Samourai !";
  }
});

// badge redirection
