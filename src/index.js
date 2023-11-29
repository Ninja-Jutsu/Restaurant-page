import showName from "./main-dishes.js"
import menuDOM from "./menu"
import contact from "./contact.js"
import cart from './icons/cart.svg'
import AddToCart from "./add-to-cart"
import "./style.css"

const shopCart = new Image()
shopCart.src = cart

let div = document.createElement('div')
div.classList.add('content')
div.innerHTML = contact()

let cartSpan = document.createElement('span')
cartSpan.classList.add('cart-span')
let bar = document.createElement("div")
bar.classList.add('bar')
let homeBtn = document.createElement('button')
homeBtn.innerText = 'Home'
let menuBtn = document.createElement('button')
menuBtn.innerText = 'Menu'
let contactBtn = document.createElement('button')
contactBtn.innerText = 'Contact'

let cartContainer = document.createElement('div')
cartContainer.appendChild(shopCart)
cartContainer.appendChild(cartSpan)
bar.appendChild(homeBtn)
bar.appendChild(menuBtn)
bar.appendChild(contactBtn)
bar.appendChild(cartContainer)

const body = window.document.body
body.appendChild(bar)
body.appendChild(div)

homeBtn.addEventListener('click', () => {
    div.innerHTML = showName()
    AddToCart()
})

menuBtn.addEventListener('click', () => {
    div.innerHTML = menuDOM()
    AddToCart()
})

contactBtn.addEventListener('click', () => {
    div.innerHTML = contact()
})
