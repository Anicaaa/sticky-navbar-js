const navbarEl = document.querySelector(".navbar");
//console.log(navbarEl);

const bottomContainerEl = document.querySelector(".bottom-container");
//console.log(bottomContainerEl.offsetTop);
//console.log(navbarEl.offsetHeight);

window.addEventListener("scroll", () => {
  //console.log(window.scrollY);
  if (window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});
