'use strict';
let content = document.getElementById('content')
let home = document.getElementById('home');
let about = document.getElementById('about');
let contact = document.getElementById('contact');

function fetchHTML(filename) {
    fetch(`./${filename}.txt`)
        .then((response) => {
            return response.text()
        })
        .then((html) => {
            content.innerHTML = html;
        })
}

window.onload = fetchHTML('home');

window.addEventListener('popstate', (event) => {
    switch (event.state.page) {
        case 1:
            fetchHTML('home');
            break;
        case 2:
            fetchHTML('about');
            break;
        case 3:
            fetchHTML('contact');
            break;
        default:
            fetchHTML('home');
    }
})

home.addEventListener('click', (e) => {
    e.preventDefault;
    history.pushState({page: 1}, 'home', 'home.html');
    fetchHTML('home');
})

about.addEventListener('click', (e) => {
    e.preventDefault;
    history.pushState({page: 2}, 'about', 'about.html');
    fetchHTML('about');
})

contact.addEventListener('click', (e) => {
    e.preventDefault;
    history.pushState({page: 3}, 'contact', 'contact.html');
    fetchHTML('contact');
})
