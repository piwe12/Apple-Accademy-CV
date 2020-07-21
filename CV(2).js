// ini buat links

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const barNav = document.getElementsByClassName('bar-nav')[0]

toggleButton.addEventListener('click', () => {
    barNav.classList.toggle('active');
});
