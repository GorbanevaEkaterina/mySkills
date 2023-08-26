// // burger

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

// slider

// Получаем видимую часть слайда
let viewport = document.getElementById("slider__viewport").offsetWidth;
// Получаем кнопку вперёд
let btnNext = document.getElementById("slider__control-next");
// Получаем кнопку назад
let btnPrev = document.getElementById("slider__control-prev");
// Получаем элемент со всеми слайдами
let slider = document.querySelector("div.slider");
// Получаем элементы показа слайда
let viewSliders = document.querySelectorAll(".viewSlide");
// Объявляем переменную номера слайда
let viewSlide = 0;

// Назначаем цвет индикатор слайда зелёный
viewSliders[0].style.backgroundColor = "#BB945F";


// Обработка клика на кнопку вперёд
btnNext.addEventListener("click", function () {
    // Делаем индикатор слайда красный

    viewSliders[viewSlide].style.backgroundColor = "rgb(236, 226, 167)";
    // Условие, если номер слайда меньше четырёх
    if (viewSlide < 4) { // Если верно то
        // Увеличиваем номер слайда на один
        viewSlide++;
    } else { // Иначе
        // Номер слайда равен нулю
        viewSlide = 0;
    }
    // Закрашиваем индикатор слайда в зелёный
    viewSliders[viewSlide].style.backgroundColor = "#BB945F";

    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});

// Обработка клика на кнопку назад
btnPrev.addEventListener("click", function () {
    // Делаем индикатор слайда красный
    viewSliders[viewSlide].style.backgroundColor = "rgb(236, 226, 167)";
    // Условие, если номер слайда больше нуля
    if (viewSlide > 0) { // Если верно то
        // Уменьшаем номер слайда
        viewSlide--;
    } else { // Иначе
        // Номер слайда равен четырём
        viewSlide = 4;
    }
    // Закрашиваем индикатор слайда в зелёный
    viewSliders[viewSlide].style.backgroundColor = "#BB945F";

    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});



