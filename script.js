//copyright text
document.querySelector(".copyright-txt").innerHTML = `© ${new Date().getFullYear()} Chaman Bravo`;

// custom cursor
const cursor = document.querySelector('.cursor');
window.onmousemove = (e) => {
    cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
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
  cursor.classList.toggle("overlayCursor");
  if(tl.reversed()){
    tl.play();
  }else{
    tl.reverse();
  }
}

var links = document.querySelector(".links");

links.addEventListener('click', () => {
    tl.reverse();
    navbtn.classList.toggle("navclicked");
    body.classList.toggle("overflow");
    console.log("Whaaat");
});

//skew scroll
const content = document.querySelector(".scroll-wrapper");
const maxSkew = 2;
const maxRotate = 1;

let currentPosition = window.pageYOffset;

function skewEffect() {
  const newPosition = window.pageYOffset;
  const dif = newPosition - currentPosition;

  let skew = dif * 0.8;
  let rotate = dif * 0.2;
  if (skew > maxSkew || skew < -maxSkew) {
    if (skew > 0) {
      skew = maxSkew;
    } else if (skew < 0) {
      skew = -maxSkew;
    }
  }
  if (rotate > maxRotate || rotate < -maxRotate) {
    if (rotate > 0) {
      rotate = maxRotate;
    } else if (skew < 0) {
      rotate = -maxRotate;
    }
  }

  content.style.transform = `skewY(${skew}deg) rotateY(${rotate}deg)`;
  currentPosition = newPosition;
  requestAnimationFrame(skewEffect);
}

skewEffect();
