const navbarEl = document.querySelector(".navbar");
//console.log(navbarEl);

const bottomContainerEl = document.querySelector(".bottom-container");
//console.log(bottomContainerEl.offsetTop);
//console.log(navbarEl.offsetHeight);

const logoEl = document.querySelector(".logo-black");

window.addEventListener("scroll", () => {
  //console.log(window.scrollY);
  if (window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight) {
    navbarEl.classList.add("active");
    logoEl.setAttribute("src", "logoWhite.svg");
  } else {
    navbarEl.classList.remove("active");
    logoEl.setAttribute("src", "logoBlack.svg");
  }
});
