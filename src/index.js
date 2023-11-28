import showName from "./main-dishes.js"
import menuDOM from "./menu"
import "./style.css"

let div = document.createElement('div')
div.classList.add('content')
div.innerHTML = menuDOM()

let bar = document.createElement("div")
bar.classList.add('bar')
let homeBtn = document.createElement('button')
homeBtn.innerText = 'Home'
let menuBtn = document.createElement('button')
menuBtn.innerText = 'Menu'
let contactBtn = document.createElement('button')
contactBtn.innerText = 'Contact'

bar.appendChild(homeBtn)
bar.appendChild(menuBtn)
bar.appendChild(contactBtn)

const body = window.document.body
body.appendChild(bar)
body.appendChild(div)




