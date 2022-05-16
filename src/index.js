import './styles.css'
import './pizza-background.jpg'
import { home, menu } from './components'

const menuButton = document.querySelector('#menu')
const homeButton = document.querySelector('#home')

function renderMenu() {
    app.innerHTML = ""
    console.log("Rendering menu...")
    app.appendChild(menu())
    console.log("Menu rendered")
}

function renderHome() {
    app.innerHTML = ""
    console.log("Rendering home...")
    app.appendChild(home())
    console.log("Home rendered")
}

const app = document.getElementById('app')
app.appendChild(home())
menuButton.addEventListener('click', renderMenu)
homeButton.addEventListener('click', renderHome)