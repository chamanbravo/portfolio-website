//copyright text
document.querySelector(".copyright-txt").innerHTML = `© ${new Date().getFullYear()} Chaman Bravo`;

//nav btn
var navbtn = document.querySelector(".navbtn");
var overlay = document.querySelector(".overlay");
var body = document.querySelector("body");
var menuItems = document.querySelector(".menu-items");

navbtn.addEventListener("click", openMenu);

function openMenu() {
  navbtn.classList.toggle("navclicked");
  overlay.classList.toggle("overlayclose");
  body.classList.toggle("overflow");
  menuItems.classList.toggle("menuopen");
}


// custom cursor
const cursor = document.querySelector('.cursor');
window.onmousemove = (e) => {
    cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px; z-index: 2;`);
}

window.addEventListener('mousedown', mouseDownHandler);
window.addEventListener('mouseup', mouseUpHandler);

function mouseUpHandler(e) {
  cursor.style.transform = "scale(1)";

  if (e.target.classList.contains('link')) {
    cursor.style.transform = 'scale(5)';
    cursor.style.opacity = 0;
  }
}

function mouseDownHandler() {
  cursor.style.transform = "scale(1.5)";
}


//skew scroll
