const modal = document.querySelector('.modal')
const openModal = document.querySelector('.login-btn')
const closeModal = document.querySelector('.close-modal')
const showMenu = document.querySelector('.toggle-nav', displayMenu).addEventListener('click', displayMenu)
const closeBtn = document.querySelector('.bx-x')

closeBtn.addEventListener('click', closeMenu)
openModal.addEventListener('click', openLogIn)
closeModal.addEventListener('click', closeLogIn)

// Colcade 
const colc = new Colcade( '.grid', {
    columns: '.grid-col',
    items: '.grid-item'
  });

window.addEventListener('click', outsideClick)
window.addEventListener('load', () => {
    // getData()
    closeLogin()  
})

function outsideClick(e) {
    if(e.target === menu && e.target === modal){
        closeMenu()
    }
}

function displayMenu(){
    document.querySelector('.navbar-menu').classList.toggle('show')
}

function closeMenu(){
    document.querySelector('.navbar-menu').classList.remove('show')
    

}

function openLogIn(){
    modal.style.display = 'block'
}

function closeLogIn(){
    modal.style.display = 'none'
}


