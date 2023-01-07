let hidebtn = document.querySelector(".hide")
let unhidebtn = document.querySelector(".unhide")
let findABookForm = document.querySelector(".find-a-book-form")

hidebtn.addEventListener('click', hide)

unhidebtn.addEventListener('click', unhide)

function hide(){
    findABookForm.classList.add("hidden")
}

function unhide(){
    findABookForm.classList.remove("hidden")
}