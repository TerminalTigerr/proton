/*========== Mobile Menu==========*/
const navBtn = document.getElementById('menu-btn')
const navMenu = document.getElementById('menu')
const navLink = document.querySelectorAll('nav-link')

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('open')
    navMenu.classList.toggle('flex')
    navMenu.classList.toggle('hidden')
})

/*========== NavLink ==========*/
const linkAction = () => {
    navMenu.classList.toggle('hidden')
}
navLink.forEach(link, () => {
    link.addEventListener('click', linkAction)
})
