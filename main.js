let hamburger = document.querySelector('.fa-bars');
let links = document.querySelector('.click')
hamburger.addEventListener('click', mostrar)

function mostrar() {
    links.classList.toggle('click')
}