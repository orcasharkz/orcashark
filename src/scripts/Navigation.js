const burger = document.querySelector("#burger");
burger.addEventListener("click", () => {
  document.querySelector("#header_nav").classList.toggle("js_open_nav");
  burger.classList.toggle("js_nav_active");
});
