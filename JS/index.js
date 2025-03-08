document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const Spinner = document.querySelector('#spinner');
        Spinner.classList.add('spinner');
    }, 10)
})

// Navbar
function Navbar() {
    const NavbarList = document.querySelector('.nav-list');
    const NavBars = document.querySelector('.nav-bars');

    NavBars.addEventListener('click', () => {
        NavbarList.classList.toggle('nav-listres')
    });

    window.onscroll = function () {
        const NavbarContainer = document.querySelector('.navbar-container')
        if(window.scrollY > 5) {
            NavbarContainer.style.position = 'fixed';
            NavbarContainer.style.padding = '15px'
        } else {
            NavbarContainer.style.position = 'relative';
            NavbarContainer.style.padding = '10px'
        }
    }
}

Navbar();

// AOS
AOS.init();

// Owl Carousel

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,           
        margin: 10,           
        nav: false,           
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            0: { items: 1 },  
            550: { items: 2 }
        }
    });
});

// Tiny
var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false
});

// Vision

function Vision() {
    const VisionCard = document.querySelectorAll('.vision-chapter.click').forEach(vision => {
        vision.style.maxHeight = '60px'
        vision.addEventListener('click', () => {
            if(vision.style.maxHeight == '60px') {
                vision.style.maxHeight = '300px'
            } else {
                vision.style.maxHeight = '60px'
            }
        })
    })
}

Vision()

// Footer

function Footer() {
    const FooterCard = document.querySelectorAll('.footer-card.res').forEach(footer => {
        footer.style.maxHeight = '30px'
        footer.addEventListener('click', () => {
            if(footer.style.maxHeight == '30px') {
                footer.style.maxHeight = '300px'
            } else {
                footer.style.maxHeight = '30px'
            }
        })
    })
}

Footer()