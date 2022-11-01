window.onscroll = () => {
	const header__top__wrap = document.querySelector('.header__top__wrap')
	const Y = window.scrollY

	if(Y > 700) {
		header__top__wrap.classList.add('header__top__scroll')
	}
	if(Y < 700) {
		header__top__wrap.classList.remove('header__top__scroll')
	}
}