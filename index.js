let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let image = document.createElement('img')
image.setAttribute('class', 'dog-image')
image.setAttribute('src', './assets/rizzo.jpg')

// outmost div
let containerOne = document.createElement('div')
containerOne.setAttribute('class', 'dog-content')
containerOne.append(image)
content.append(containerOne)

// 1st header
let header2 = document.createElement('h3')
header2.textContent = 'Description: '

// inner div
let containerTwo = document.createElement('div')
containerTwo.setAttribute('class', 'dog-details')
containerTwo.append(header2)
containerOne.append(containerTwo)

// paragraph
let paragraph = document.createElement('p')
paragraph.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals'
containerTwo.append(paragraph)

// unordered list
let feedHeader = document.createElement('h3')
feedHeader.textContent = 'Feeding Times: '
containerTwo.append(feedHeader)

let feedtimeMorn = document.createElement('li')
feedtimeMorn.textContent = '9:00 am'
let feedtimeDay = document.createElement('li')
feedtimeDay.textContent = '12:00 pm'
let feedtimeNight = document.createElement('li')
feedtimeNight.textContent = '5:00 pm'

containerTwo.append(feedtimeMorn)
containerTwo.append(feedtimeDay)
containerTwo.append(feedtimeNight)