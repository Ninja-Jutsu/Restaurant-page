import showName from "./main-dishes.js"
import "./style.css"

let div = document.createElement('div')
div.classList.add('content')
div.innerHTML = showName()
const body = window.document.body
body.appendChild(div)


