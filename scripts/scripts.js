// Selecting the toggle button and the navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Adding an event listener for 'click' events on the toggle button
navToggle.addEventListener('click', function() {
    // Toggling the 'nav-menu_visible' class to show/hide the navigation menu
    navMenu.classList.toggle('nav-menu_visible');
});
