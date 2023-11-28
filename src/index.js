import showName from "./main-dishes.js"
import menuDOM from "./menu"
import cart from './icons/cart.svg'
import "./style.css"

const shopCart = new Image()
shopCart.src = cart

let div = document.createElement('div')
div.classList.add('content')
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

window.addEventListener('load', () => {
    div.innerHTML = menuDOM()
})

homeBtn.addEventListener('click', () => {
    div.innerHTML = showName()
})

menuBtn.addEventListener('click', () => {
    div.innerHTML = menuDOM()
})


function AddToCart(){
    document.querySelector('.add-to-cart1').addEventListener('click', () => {

    })
}