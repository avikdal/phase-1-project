// let hidebtn = document.querySelector(".hide")
// let unhidebtn = document.querySelector(".unhide")
// hidebtn.addEventListener('click', hide)
// function hide(){
//     findABookForm.classList.add("hidden")
// }
let bigContainer = document.querySelector(".big-container")
let findABookForm = document.querySelector(".find-a-book-form")
let openingPageButton = document.querySelector("#opening-page-button")
let homePage = document.querySelector("#home-page")
let openingPage = document.querySelector("#opening-page")
let browseBar = document.querySelector("#browse-options")
let browseTLOTR = document.querySelector("#TLOTR")
let browseResult = document.querySelector("#browse-result")

// let fetchTLOTR = fetch('http://openlibrary.org/search.json?title=the+lord+of+the+rings')

// let fetchStarWars = fetch('http://openlibrary.org/search/authors.json?q=star+wars').then((response) => response.json().then((data) => console.log("this is star wars", data)))

// let tolkienFetch= fetch('http://openlibrary.org/search/authors.json?q=j+r+r+tolkien').then((response) => response.json().then((data) => { 
//     console.log("this is a tolkien fetch", data)
//     let tolkienDataArray = data.docs
//     tolkienDataArray.forEach(tolkienObj => {
//         let tolkienObjs = tolkienObj
//         let author = tolkienObjs.name
//         console.log("this is author", author)

//     })
//     console.log("this is tolkienDataArray", tolkienDataArray)
// }))

let harryPotterFetch = fetch('https://legacy--api.herokuapp.com/api/v1/books')
// let harryPotterFetch = fetch('https://legacy--api.herokuapp.com/api/v1/books').then((response) => response.json().then((data) => {
//     console.log("this is HPfetch", data)
//     let HPArray = data
//     HPArray.forEach(makeBook)
// }))

function makeBook(obj){
    console.log("this is the makeBook cb", obj)
    let book = {
        cover: obj.image_url,
        title: obj.title,
        author: obj.artists[0].author.name
    }

    let bookCard = document.createElement('div')
    let h2 = document.createElement('h2')
    let img = document.createElement('img')
    let h4 = document.createElement('h4')

    h2.innerHTML = book.title
    img.src = book.cover
    img.setAttribute('class','book-covers')
    h4.innerHTML = book.author

    // console.log(obj)
    // let title = obj.title
    // console.log("title", title)
    // let cover = obj.image_url
    // console.log("cover", cover)
    // let author = obj.artists[0].author.name
    // console.log("author", author)

    bookCard.append(h2, img, h4)
    browseResult.append(bookCard)
}

openingPageButton.addEventListener('click', unhide)


function unhide(e){
    e.preventDefault()
    homePage.classList.remove("hidden")
    openingPage.classList.add("hidden")
}

browseBar.addEventListener('change', (e) => {
    e.preventDefault();
    console.log("this is the event", e)

    bigContainer.classList.add("hidden")
    homePage.classList.add("hidden")
    browseResult.classList.remove("hidden")
    browseResult.textContent = `You picked ${e.target.value}`

    harryPotterFetch.then((response) => response.json().then((data) => {
        console.log("this is HPfetch", data)
        let HPArray = data
        HPArray.forEach(makeBook)
    }))
    
})


// manipulate form input to add + for everyspace and then fetch data based 
// findABookForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     fetch()

// })

