const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu'); 
const menuItems = [...document.querySelectorAll('.menu__item')]
const logo = document.querySelector('.logo'); 

function toggleMenu() {
    burger.classList.toggle('open');
    menu.classList.toggle('open'); 

    if (menu.classList.contains('open')) {
        logo.style.display = 'none';
    } else {
        logo.style.display = 'block';
    }

};

burger.addEventListener('click', toggleMenu);

const transitionNewPage = document.querySelector('.transition-new-page')

function newPage() {
    window.location.href = "../pets/index.html"
}

transitionNewPage.addEventListener('click', newPage)

 