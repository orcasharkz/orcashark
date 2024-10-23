// バーガーメニュー開閉
const burger = document.querySelector("#burger");
if (burger.style.display !== "none") {
	burger.addEventListener("click", () => {
		document.querySelector("#header-nav").classList.toggle("js-nav-open");
		burger.classList.toggle("js-nav-active");
	});
}
