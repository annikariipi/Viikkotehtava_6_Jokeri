const button = document.querySelector('#uusi_rivi')
const table = document.querySelector('#jokeripoyta')
const rowCountElement = document.querySelector('#rivimaara')
button.addEventListener('click', lisaa_rivi)

let rowIndex = 0
function arvo_rivi() {
    let numbers = []
    for (let i = 0; i < 7; i++) {
        let randomNumber = Math.floor(Math.random() * 10)
        numbers.push(randomNumber)} 
    return numbers
}

function lisaa_rivi() {
    const numbers = arvo_rivi()
    const row = table.insertRow()
    numbers.forEach(num => {
        const cell = row.insertCell()
        cell.textContent = num})
    rowIndex++
    rowCountElement.textContent = `Valmiita rivejä ${rowIndex}`
}