const menu = document.getElementById('navbar-menu')
const toggleMenu = document.getElementById('toggle-menu')
const closeButton = document.getElementById('close')

toggleMenu.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)

window.addEventListener('click', outsideClick)

function outsideClick(e) {
    if(e.target === menu & e.target === document.body){
        closeMenu()
    }
}

function openMenu(){
    menu.style.display = 'block'
}

function closeMenu() {
    menu.style.display = 'none'
}
