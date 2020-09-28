$(document).ready(function() {
    $('.header__slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        draggable: true,
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        swipe: true
    });
});

var togglerMenu = document.querySelector('.header__toggler-menu'),
    firstItem = document.querySelector('.header__first-item');
    secondItem = document.querySelector('.header__second-item');
    thirdItem = document.querySelector('.header__third-item'),
    mainManu = document.querySelector('.header__nav-menu');

togglerMenu.addEventListener('click', function() {
    firstItem.classList.toggle('header__first-item--active');
    secondItem.classList.toggle('header__second-item--active');
    thirdItem.classList.toggle('header__third-item--active');
    mainManu.classList.toggle('header__nav-menu--active');
});

window.addEventListener('resize', function() {
    if (document.documentElement.clientWidth > 1026) {
        firstItem.classList.remove('header__first-item--active');
        secondItem.classList.remove('header__second-item--active');
        thirdItem.classList.remove('header__third-item--active');
        mainManu.classList.remove('header__nav-menu--active');
    }
});