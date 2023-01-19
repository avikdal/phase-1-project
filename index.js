let bigContainer = document.querySelector(".big-container")
let openingPage = document.querySelector("#opening-page")
let openingPageMouseOver = document.querySelector("#opening-page-btn")
const browseResult = document.querySelector("#browse-result")
const myBooksContainer = document.querySelector("#my-books-container")
const booksToBrowseBtn = document.querySelector("#books-to-browse")
const browseToMyBooks = document.querySelector("#browse-to-my-books")
const harryPotterFetch = fetch('https://legacy--api.herokuapp.com/api/v1/books')

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
    myBooksContainer.classList.add("hidden")
}

function unhideMyBooks(e){
    e.preventDefault()
    browseResult.classList.add("hidden")
    myBooksContainer.classList.remove("hidden")
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
    let likedBookCard = e.srcElement.parentElement
    likedBtn= likedBookCard.childNodes[3]
    likedBtn.classList.add("hidden")
    myBooksContainer.append(likedBookCard)
}
