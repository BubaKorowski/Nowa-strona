//  BURGER MENU
const burger = document.querySelector(".burger");
const icoBurger = document.querySelector(".fa-bars");
const icoX = document.querySelector(".fa-times");
const aside = document.querySelector("aside");

burger.addEventListener("click", () => {
  icoBurger.classList.toggle("show");
  aside.classList.toggle("show");
  icoX.classList.toggle("show");

  burger.classList.toggle("active");
});

//  GO TO TOP BUTTON
const heightFromTop = document.querySelector(".about").offsetTop;
window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop >= heightFromTop ||
    document.documentElement.scrollTop >= heightFromTop
  ) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function goTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const offMenu = document.querySelector("ul");
offMenu.addEventListener("click", () => {
  console.log("ul");
});
