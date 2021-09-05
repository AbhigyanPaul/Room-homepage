window.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.hamburger').addEventListener('click', toggle_navbar);

    let carousel_index = 0;
    const carousel_items = document.querySelectorAll('.carousel-item');
    document.querySelector('.prev').addEventListener('click', () => {
        carousel_index += -1;
        if (carousel_index < 0) {
            carousel_index = carousel_items.length - 1;
        }
        toggle_carousel(carousel_index, carousel_items);
    });
    document.querySelector('.next').addEventListener('click', () => {
        carousel_index += 1;
        if (carousel_index >= carousel_items.length) {
            carousel_index = 0;
        }
        toggle_carousel(carousel_index, carousel_items);
    });
});

function toggle_navbar() {
    const nav = document.querySelector('.nav');
    const hamburger_image = document.querySelector('.hamburger-img');

    if (nav.classList.contains('nav-active') == true) {
        nav.classList.remove('nav-active');
        hamburger_image.src = "../images/icon-hamburger.svg";
        document.querySelector('.overlay').style.display = "none";
    } else {
        nav.classList.add('nav-active');
        hamburger_image.src = "../images/icon-close.svg";
        document.querySelector('.overlay').style.display = "block";
    }
}

function toggle_carousel(index, carousel_items) {
    for (let i = 0; i < carousel_items.length; i++) {
        if (carousel_items[i].classList.contains('active') == true) {
            carousel_items[i].classList.remove('active');
        }
    }

    console.log(`index:${index}, carousel-item:${carousel_items[index]}`);
    carousel_items[index].classList.add('active');
}