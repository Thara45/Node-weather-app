/*console.log('Client side javascript file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:1000/weather?address=hannover').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})*/

const weatherForm = document.querySelector('form')
const searchField = document.querySelector('input')
const msgOne = document.querySelector('#msgOne')
const msgTwo = document.querySelector('#msgTwo')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchVal = searchField.value
    msgTwo.textContent = 'Loading....'
    fetch('/weather?address=' + searchVal).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                msgOne.textContent = data.error
                msgTwo.textContent = ""
            } else {
                msgTwo.textContent = ''
                msgOne.textContent = "The temperature is " + data.forecast.temperature + " and today will be like " + data.forecast.summary + " and the daily status is " + data.forecast.dailyStatus
            }
        })
    })
})