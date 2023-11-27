export default function loadPage(){
    const content = document.getElementById("content")

    const header = document.createElement("header")
    header.innerHTML = "Indian Heaven"

    const img = document.createElement("img")
    img.setAttribute("src" , "../src/curry.jpg")
    img.setAttribute("alt", "curry")
    
    const paragraph = document.createElement("p")
    paragraph.textContent = "Great indian food with species"

    content.appendChild(header)
    content.appendChild(img)
    content.appendChild(paragraph)
}

