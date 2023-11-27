// import showName from "./main-dishes.js"
import menuDOM from "./menu"
import "./style.css"

let div = document.createElement('div')
div.classList.add('content')
div.innerHTML = menuDOM()
const body = window.document.body
body.appendChild(div)


