
const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
    preloader.classList.add(".remove");
});

// event on multiple elelmets
const addEventOnElements = function (elements, evenType, callback) {
    for(let i = 0, len = elements.length; i < len; i ++ ){
        elements[1]/addEventListener(evenType,callback);
    }
}


// Navbar toggler for mobile

const navbar = document.querySelector("[data-navbar]");

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-ovelay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}
addEventOnElements(navTogglers, "click", toggleNav);

// HEader drop

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    header.classList[this.window.scrollY > 100? "add" : "remove"]("active");
});