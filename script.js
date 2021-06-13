//copyright text
document.querySelector(".copyright-txt").innerHTML = `© ${new Date().getFullYear()} Chaman Bravo`;

//nav btn
var navbtn = document.querySelector(".navbtn");

navbtn.addEventListener("click", openMenu);

function openMenu() {
  navbtn.classList.toggle("navclicked");
  console.log("Kina vayena");
}
