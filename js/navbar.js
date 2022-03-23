function showNavItems() {
    var ul = document.getElementById('navbar-ul');

    if (ul.className === '') {
        ul.className += 'responsive';
    } else{
        ul.className = '';
    }
}

var hamburger = document.getElementById('icon');
    hamburger.addEventListener('click', showNavItems);

