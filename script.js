
const modal = document.querySelector('.modal')
const openModal = document.querySelector('.login-btn')
const closeModal = document.querySelector('.close-modal')
const showMenu = document.querySelector('.toggle-nav', displayMenu).addEventListener('click', displayMenu)
const closeBtn = document.querySelector('.bx-x')

closeBtn.addEventListener('click', closeMenu)
openModal.addEventListener('click', openLogIn)
closeModal.addEventListener('click', closeLogIn)

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
    document.querySelector('.navbar-menu').classList.toggle.remove('show')
    

}

function openLogIn(){
    modal.style.display = 'block'
}

function closeLogIn(){
    modal.style.display = 'none'
}

// const loadGif = document.getElementById('gif-load')
// const gifItem = [];
// // getData()

// async function getData(){
//     try {
//     const res = await fetch('https://api.thecatapi.com/images//search?mime_types=gif', { params: { limit:1, size:"full" , mime_types: this.image_type } } , {
//         method: 'GET',
//         headers: {
//             'X-API-KEY': '96653eb4-01f5-4a20-bb73-bf422ce50d1e'
//         },
//         body: JSON.stringify(getData)
//     })
//     .then(res => console.log(res))
//     // result.forEach(res => {
//     //     const gif = document.createElement('img')
//     //     gifItem.push(gif)

//     //     gif.innerHTML = ` 
//     //     `
//     //     console.log(res)

//     // });
// } 
// catch(err){
//     console.log(err)
// }
// }


