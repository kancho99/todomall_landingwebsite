const toggleButton = document.querySelector('.navbar_toggleButton');
const menu = document.querySelector('.navbar_menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
})