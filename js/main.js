/*========== Mobile Menu==========*/
const navBtn = document.getElementById('menu-btn')
const navMenu = document.getElementById('menu')

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('open')
    navMenu.classList.toggle('flex')
    navMenu.classList.toggle('hidden')
})