let cotentPreview = document.querySelector('.content__img');
let imgPreview = document.querySelector('.text__img_preview');
let cotentMy = document.querySelector('.content__img_my');
let imgMy = document.querySelector('.text__img_my');
imgPreview.addEventListener('click', (e) => {
    cotentPreview.classList.toggle('active');
    cotentMy.classList.toggle('active');
});

imgMy.addEventListener('click', (e) => {
    cotentPreview.classList.toggle('active');
    cotentMy.classList.toggle('active');
});

// burger

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
    link.classList.toggle('open');

    e.stopPropagation();
});
link.addEventListener('click', (e) => {
    burgermenu.classList.toggle('open');
    burgerline1.classList.toggle('open');
    burgerline2.classList.toggle('open');
    burgerline3.classList.toggle('open');
    headermenu.classList.toggle('open');
    headerlist.classList.toggle('open');
    link.classList.toggle('open');

    e.stopPropagation();
});