let bigContainer = document.querySelector(".big-container")
let openingPage = document.querySelector("#opening-page")
let openingPageMouseOver = document.querySelector("#opening-page-btn")
let homeNavBar = document.querySelector(".home-page-nav-bar")
let browseNavBar = document.querySelector(".browse-page-nav-bar")
let myBooksNavBar = document.querySelector(".my-books-page-nav-bar")
let browseBar = document.querySelector(".browse-options")
let browseResult = document.querySelector("#browse-result")
let harryPotterFetch = fetch('https://legacy--api.herokuapp.com/api/v1/books')
// let myBooksList1 = document.querySelector(".my-books-list-1")
let myBooksContainer = document.querySelector("#my-books-container")
// let browseToHomeBtn = document.querySelector("#browse-to-home")
let booksToBrowseBtn = document.querySelector("#books-to-browse")
let browseToMyBooks = document.querySelector("#browse-to-my-books")

document.addEventListener('DOMContentLoaded', () => {

openingPageMouseOver.addEventListener('mouseover', unhideHome)

browseToMyBooks.addEventListener('click', unhideMyBooks)
booksToBrowseBtn.addEventListener('click', goBackToBrowse)
})

function unhideHome(e){
    e.preventDefault()
    openingPage.classList.add("hidden")
    browseResult.classList.remove("hidden")
    bigContainer.classList.add("hidden")

    harryPotterFetch.then((response) => response.json()).then((data) => {
        console.log("this is HPfetch", data)
        let HPArray = data
        HPArray.forEach(makeBook)
    }).catch((error) => { alert("whoops, try again");
    document.querySelector('body').append(error.message);
    })
}

function goBackToBrowse(e){
    e.preventDefault()
    browseResult.classList.remove("hidden")
    // bigContainer.classList.remove("hidden")
}

function unhideMyBooks(e){
    e.preventDefault()
    browseResult.classList.add("hidden")
    myBooksContainer.classList.remove("hidden")
    
    // openingPage.classList.add("hidden")
    // myBooksContainer.textContent += "Looks like you should add some books"
    // bigContainer.classList.add("hidden")
}

function makeBook(obj){
    // console.log("this is the makeBook cb", obj)
    let book = {
        cover: obj.image_url,
        title: obj.title,
        author: obj.artists[0].author.name
    }

    let bookCard = document.createElement('div')
    bookCard.setAttribute('class', 'book-card')
    let h2 = document.createElement('h2')
    let coverDiv = document.createElement('div')
    coverDiv.setAttribute('class', 'book-covers-div')
    let img = document.createElement('img')
    img.setAttribute('class','book-covers')
    let h4 = document.createElement('h4')
    let bookId = obj.id
    let btn = document.createElement('button')
    btn.setAttribute('class', 'like-btn')
    btn.setAttribute('id', `${bookId}`)
    btn.addEventListener('click', addToMyBooks)

    h2.innerHTML = `Title: ${book.title}`
    h4.innerHTML = `Author: ${book.author}`
    btn.innerHTML = `Add ${book.title} to My Books`
    img.src = book.cover
    

    coverDiv.append(img)
    bookCard.append(h2, h4, coverDiv, btn)
    browseResult.append(bookCard)
}

function addToMyBooks(e){
    // console.log("this is the event", e)
    let likedBookCard = e.path[1]
    likedBtn= likedBookCard.childNodes[3]
    likedBtn.classList.add("hidden")
    myBooksContainer.append(likedBookCard)
}


// browseBar.addEventListener('change', (e) => {
//     e.preventDefault();
//     // console.log("this is the event", e)

//     bigContainer.classList.add("hidden")
//     homePage.classList.add("hidden")
//     browseResult.classList.remove("hidden")

//     harryPotterFetch.then((response) => response.json()).then((data) => {
//         console.log("this is HPfetch", data)
//         let HPArray = data
//         HPArray.forEach(makeBook)
//     }).catch((error) => { alert("whoops, try again");
//     document.querySelector('body').append(error.message);
//     })
    
// }) end of browseBar event listener

// myBooksList1.addEventListener('click', unhideMyBooks)

// browseToHomeBtn.addEventListener('click', goBackHome)

// let hidebtn = document.querySelector(".hide")
// let unhidebtn = document.querySelector(".unhide")
// hidebtn.addEventListener('click', hide)
// function hide(){
//     findABookForm.classList.add("hidden")
// }

// manipulate form input to add + for everyspace and then fetch data based 
// findABookForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     fetch()
// })

// let fetchTLOTR = fetch('http://openlibrary.org/search.json?title=the+lord+of+the+rings')

// let fetchStarWars = fetch('http://openlibrary.org/search/authors.json?q=star+wars').then((response) => response.json().then((data) => console.log("this is star wars", data)))
//let browseTLOTR = document.querySelector("#TLOTR")
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
