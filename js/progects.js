const burgermenu = document.querySelector('button.burger');
const burgerline1 = document.querySelector('.burger__line1');
const burgerline2 = document.querySelector('.burger__line2');
const burgerline3 = document.querySelector('.burger__line3');
const headermenu = document.querySelector('.header__nav');
const headerlist = document.querySelector('.nav__list');
const link = document.querySelector('.nav__item_link');
const bodyclose = document.querySelector('.body__wrapper');
burgermenu.addEventListener('click', (e) => {
    burgermenu.classList.toggle('open');
    burgerline1.classList.toggle('open');
    burgerline2.classList.toggle('open');
    burgerline3.classList.toggle('open');
    headermenu.classList.toggle('open');
    headerlist.classList.toggle('open');

    e.stopPropagation();
});