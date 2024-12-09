

let login = document.querySelector('.login-form');

document.querySelector('#login').onclick = () => {
    login.classList.toggle('active');
    cart.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

var swiper = new Swiper(".home-slider", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    login.classList.remove('active');
}

window.onscroll = () => {
    cart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".budget_plan-slider", {
    grabCursor: true,
    loop: true,
    autoHeight: true,
    centeredSlides: true,
    spaceBetwwen: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

let previewContainer = document.querySelector('.budget_plan-preview-container');
let previewBox = previewContainer.querySelectorAll('.budget_plan-preview');

document.querySelectorAll('.budget_plan .box').forEach(budget_plan => {
    budget_plan.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = budget_plan.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});


previewContainer.querySelector('#close').onclick = () => {
    previewContainer.style.display = 'none';
    previewBox.forEach(close => {
        close.classList.remove('active');
    });
};


