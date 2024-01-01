// let ctitle = document.getElementById("firstcard")
// ctitle.style.color = "blue"


// Query selector All

let ctitle = document.querySelectorAll(".card-title")
ctitle[0].style.color = "blue"
ctitle[1].style.color = "yellow"
ctitle[2].style.color = "green"
console.log(ctitle)

document.querySelector(".this").style.color = "black"
document.querySelector(".this").style.background = "green"

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))