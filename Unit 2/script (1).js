window.onload = () => {
	let menu = [...document.getElementsByClassName("menu-trigger")][0];
	menu.addEventListener("click", function() {
		menu.classList.toggle("active");
		let nav = document.querySelector('.header-area .nav');
		if (nav.style.display === "block") {
			nav.style.display = "none";
		} else {
			nav.style.display = "block";
		}
	});
}