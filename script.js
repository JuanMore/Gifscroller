const menu = document.getElementById('navbar-menu')
const toggleMenu = document.getElementById('toggle-menu')
const closeButton = document.getElementById('close')

toggleMenu.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)

window.addEventListener('click', outsideClick)
window.addEventListener('load',  () => {
    closeMenu()
    getData()
    
})

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

const loadGif = document.getElementById('gif-load')
const gifItem = [];
// getData()

async function getData(){
    try {
    const res = await fetch('https://api.thecatapi.com/images//search?mime_types=gif', { params: { limit:1, size:"full" , mime_types: this.image_type } } , {
        method: 'GET',
        headers: {
            'X-API-KEY': '96653eb4-01f5-4a20-bb73-bf422ce50d1e'
        },
        body: JSON.stringify(getData)
    })
    .then(res => console.log(res))
    // result.forEach(res => {
    //     const gif = document.createElement('img')
    //     gifItem.push(gif)

    //     gif.innerHTML = ` 
    //     `
    //     console.log(res)

    // });
} 
catch(err){
    console.log(err)
}
}
