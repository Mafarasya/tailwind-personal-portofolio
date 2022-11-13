// Navbar Fixed
window.onscroll = function( ) {
    const header = document.querySelector('header')
    // fetch header position, distance from header position to the top
    const fixedNav = header.offsetTop

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// HAMBURGER
const hamburger = document.querySelector('#btn-hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')

})
