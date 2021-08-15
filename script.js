const menu = document.getElementById('navbar-menu')
const toggleMenu = document.getElementById('toggle-menu')
const closeMenu = document.getElementById('close')

toggleMenu.addEventListener('click', toggleMenu)
closeMenu.addEventListener('click', closeMenu)

window.addEventListener('click', outsideClick)
outsideClick = (e) => {
    if(e.target === menu & e.target === document.body){
        closeMenu()
    }
}

function toggleMenu(){
    menu.style.display = 'block'
}

function closeMenu() {
    menu.style.display = 'none'
}