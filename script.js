//copyright text
document.querySelector(".copyright-txt").innerHTML = `© ${new Date().getFullYear()} Chaman Bravo`;

//nav btn
var navbtn = document.querySelector(".navbtn");
var body = document.querySelector("body");
var menuItems = document.querySelector(".menu-items");

navbtn.addEventListener("click", openMenu);

//gsap
const tl = gsap.timeline({paused:true, reversed: true});
tl.to('.box', {height: '100vh', duration: .5, transformOrigin: 'bottom', stagger: .3})
tl.to('.menu-items', {opacity: '1', visibility: 'visible', duration: .5, stagger: .3})

function openMenu() {
  navbtn.classList.toggle("navclicked");
  body.classList.toggle("overflow");
  if(tl.reversed()){
    tl.play();
  }else{
    tl.reverse();
  }
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
