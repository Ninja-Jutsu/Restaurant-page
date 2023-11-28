

export default function showName(){
     const div = document.createElement('div')

     const main = document.createElement('div')
     main.classList.add("main")

     const title = document.createElement('h1')
     title.classList.add('title')
     title.innerText = "Dean's Moroccan Delight"

     const intro = document.createElement('div')
     title.classList.add('intro-div')
     const introPara = document.createElement('p')
     introPara.classList.add('para')
     introPara.innerText = `Moroccan cuisine is the cuisine of Morocco,
     fueled by interactions and exchanges with many cultures and nations over the centuries.
     Moroccan cuisine is usually a mix of Berber, Andalusi, Mediterranean, and Arab cuisines, with
     minimal European (French and Spanish) and sub-Saharan influences. Like the rest of the Maghrebi cuisine,
     Moroccan cuisine has more in common with Middle Eastern cuisine than with the rest of Africa.`


     const hours = document.createElement('div')
     hours.classList.add('hours-div')
     const hoursH1 = document.createElement('h1')
     hoursH1.innerText = 'Hours'
     const hoursPara = document.createElement('div')
     hoursPara.innerHTML = `
     <p>Sunday: 8am - 8pm</p><br>
     <p>Monday: 6am - 6pm</p><br>
     <p>Tuesday: 6am - 6pm</p><br>
     <p>Wednesday: 6am - 6pm</p><br>
     <p>Thursday: 6am - 10pm</p><br>
     <p>Friday: 6am - 10pm</p><br>
     <p>Saturday: 8am - 10pm</p>
     `

     const location = document.createElement('div')
     location.classList.add('location-div')
     const locationH1 = document.createElement('h1')
     locationH1.innerText = 'Location'
     const locationPara = document.createElement('p')
     locationPara.innerText = " Jelapang Road 670538, Singapore"

     location.appendChild(locationH1)
     location.appendChild(locationPara)

     hours.appendChild(hoursH1)
     hours.appendChild(hoursPara)

     intro.appendChild(introPara)

     main.appendChild(intro)
     main.appendChild(hours)
     main.appendChild(location)

     div.appendChild(main)
     return div.innerHTML
}
