const header = document.querySelector('header');
const scrollThreshold = 10;

function onScroll() {
	if (window.scrollY > scrollThreshold) {
		header.classList.add('inner-shadow');
	} else {
		header.classList.remove('inner-shadow');
	}
}

window.addEventListener('scroll', onScroll);