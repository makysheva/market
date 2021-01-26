import "../../../index";

const burgerMenuBtn = document.querySelector('.header__burger')
const menuListUl = document.querySelector('.menu__list--mobile')

const handleBurgerClick = () => {
    menuListUl.classList.toggle('active')
    burgerMenuBtn.classList.toggle('active-color')
}

burgerMenuBtn.addEventListener('click', handleBurgerClick)