//search button//
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm .classList.remove('active');
    navbar.classList.remove('active');
}

//shopping cart button//
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm .classList.remove('active');
    navbar.classList.remove('active');
}

//login button//
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm .classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

//navbar//
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm .classList.remove('active');
}


window.onscroll = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm .classList.remove('active');
    navbar.classList.remove('active');
}

//slider effect//
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false
    },
   
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: { // Use 1024 instead of 1020 for consistency
            slidesPerView: 3,
        },
    },
});


//review slider//
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false
    },
   
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: { // Use 1024 instead of 1020 for consistency
            slidesPerView: 3,
        },
    },
});