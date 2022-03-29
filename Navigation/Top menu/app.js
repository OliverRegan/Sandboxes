// Definitions
let btn = document.getElementById('show_menu');
let nav = document.getElementById('nav-menu');

let menuShowing = false;

// Logic
function toggleMenu() {
    if (!menuShowing) {

        nav.classList.remove('hidden');

        menuShowing = true;

    } else {

        nav.classList.add('hidden');

        menuShowing = false;

    }
}


// Add event Listener
btn.addEventListener('click', toggleMenu);