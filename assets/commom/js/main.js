window.onscroll = function () { navSticky() };
let hero = document.getElementById("hero");
let offsetBottom = hero.offsetTop + hero.offsetHeight;
let customNav = document.getElementById("customNav");


function navSticky() {
    if (window.pageYOffset >= offsetBottom) {
        customNav.classList.add("position-fixed");
        customNav.classList.add("animate__animated");
        customNav.classList.add("animate__slideInDown");
        customNav.classList.add("bg-light");
        customNav.classList.add("navbar-light");
        customNav.classList.remove("navbar-dark");
        customNav.classList.add("navbarCustomLight");
        customNav.classList.remove("navbarCustomDark");
    }
    else {
        customNav.classList.remove("position-fixed");
        customNav.classList.remove("animate__animated");
        customNav.classList.remove("animate__slideInDown");
        customNav.classList.remove("bg-light");
        customNav.classList.add("navbar-dark");
        customNav.classList.add("navbarCustomDark");
        customNav.classList.remove("navbarCustomLight");
    }
}