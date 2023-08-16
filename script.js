const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.container-1 ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});