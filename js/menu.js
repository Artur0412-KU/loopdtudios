const menuBtn = document.querySelector(".header-container__top-nav-mobile__active__close");
const menu = document.querySelector('.header-container__top-nav-mobile');

menuBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Додайте цей рядок
    menu.classList.toggle('header-container__top-nav-mobile__active');
});

menuBtn.addEventListener('click', () => {
    menu.classList.remove('header-container__top-nav-mobile__active');
})
