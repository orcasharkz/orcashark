const burger = document.querySelector("#burger");
if (burger.style.display !== "none") {
  burger.addEventListener("click", () => {
    document.querySelector("#header_nav").classList.toggle("js_open");
    burger.classList.toggle("js_active");
  });
}
