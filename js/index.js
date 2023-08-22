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