import Icon1 from './img/couscous.jpeg';
import Icon2 from './img/Tajine-Chermoula.jpg';
import Icon3 from './img/hrira.jpeg';
import Icon4 from './img/lham.webp';
import Icon5 from './img/tagine.jpg';

export default function menuDOM (){
    const couscous = new Image();
    couscous.src = Icon1;
    const tagineBeef = new Image();
    tagineBeef.src = Icon2;
    const hrira = new Image();
    hrira.src = Icon3;
    const lham = new Image();
    lham.src = Icon4;
    const tagine = new Image();
    tagine.src = Icon5;

    
    const div = document.createElement('div')
    const menuHeader = document.createElement('h1')
    menuHeader.innerText ='Menu'
    
    const mainDishesContainer = document.createElement('div')
    mainDishesContainer.classList.add('main-dishes')
    const menuSubTitle = document.createElement('h2')
    menuSubTitle.innerText = 'Main Dishes'
    mainDishesContainer.appendChild(menuSubTitle)

    const firstDish = document.createElement('div')
    firstDish.classList.add('first-dish')
    const firstDishTitle = document.createElement('h3')
    firstDishTitle.innerText = 'Couscous'
    const description1 = document.createElement('p')
    description1.innerText = 'A flavorful, hearty Moroccan Couscous dish that’s packed with roasted vegetables, chickpeas and almonds. It’s perfect for summer and sure to be a hit! Enjoy for a healthy lunch or as a side with fish or chicken for a filling, exciting dinner.'
    const price1 = document.createElement('h4')
    price1.innerText = '30$'
    firstDish.appendChild(firstDishTitle)
    firstDish.appendChild(description1)
    firstDish.appendChild(price1)
    firstDish.appendChild(couscous)

    const secondDish = document.createElement('div')
    secondDish.classList.add('second-dish')
    const secondDishTitle = document.createElement('h3')
    secondDishTitle.innerText =  'Tagine Beef'
    const description2 = document.createElement('p')
    description2.innerText = 'Beef Tagine is a popular stew from Morocco with amazing flavors thanks to the earthy and exotic spices. So good!' 
    const price2 = document.createElement('h4')
    price2.innerText = '33$'
    secondDish.appendChild(secondDishTitle)
    secondDish.appendChild(description2)
    secondDish.appendChild(price2)
    secondDish.appendChild(tagineBeef)


    const thirdDish = document.createElement('div')
    thirdDish.classList.add('third-dish')
    const thirdDishTitle = document.createElement('h3')
    thirdDishTitle.innerText =  'Harira Soup'
    const description3 = document.createElement('p')
    description3.innerText = 'Chicken tagine is a traditional Moroccan dish of chicken braised with spices, garlic, onion, olives, and preserved lemons.'
    const price3 = document.createElement('h4')
    price3.innerText = '18$'
    thirdDish.appendChild(thirdDishTitle)
    thirdDish.appendChild(description3)
    thirdDish.appendChild(price3)
    thirdDish.appendChild(hrira)

    const fourthDish = document.createElement('div')
    fourthDish.classList.add('fourth-dish')
    const fourthDishTitle = document.createElement('h3')
    fourthDishTitle.innerText =  'Beef With Prunes'
    const description4 = document.createElement('p')
    description4.innerText = 'Beef (or lamb) tajine with prunes is a dish often made for special occasions in Morocco but can be a great for a special weeknight meal as well.'
    const price4 = document.createElement('h4')
    price4.innerText = '26$'
    fourthDish.appendChild(fourthDishTitle)
    fourthDish.appendChild(description4)
    fourthDish.appendChild(price4)
    fourthDish.appendChild(lham)

    const fifthDish = document.createElement('div')
    fifthDish.classList.add('fifth-dish')
    const fifthDishTitle = document.createElement('h3')
    fifthDishTitle.innerText =  'Chicken With Lemon'
    const description5 = document.createElement('p')
    description5.innerText = 'A traditional Moroccan dish of chicken pieces braised with spices, garlic, onion, olives, and preserved lemon. Cooked in a tagine.'
    const price5 = document.createElement('h4')
    price5.innerText = '22$'
    fifthDish.appendChild(fifthDishTitle)
    fifthDish.appendChild(description5)
    fifthDish.appendChild(price5)
    fifthDish.appendChild(tagine)



    div.appendChild(menuHeader)
    mainDishesContainer.appendChild(firstDish)
    mainDishesContainer.appendChild(secondDish)
    mainDishesContainer.appendChild(thirdDish)
    mainDishesContainer.appendChild(fourthDish)
    mainDishesContainer.appendChild(fifthDish)

    div.appendChild(mainDishesContainer)

    return div.innerHTML
}