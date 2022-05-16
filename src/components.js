export function infoDiv(title, info) {
    const infoDiv = document.createElement('div')
    infoDiv.className = "infoDiv"
    const infoTitle = document.createElement('h2')
    infoTitle.className = "infoTitle"
    infoTitle.innerText = title
    const infoParagraph = document.createElement('p')
    infoParagraph.className = "infoText"
    infoParagraph.innerText = info
    infoDiv.appendChild(infoTitle)
    infoDiv.appendChild(infoParagraph)
    return infoDiv
} //Primer componente para mi pagina, para el Home

export function menuItem(title, price, description) {
    const menuDiv = document.createElement('div')
    menuDiv.className = "infoText"
    const menuTitle = document.createElement('h3')
    menuTitle.className = "menuTitle"
    menuTitle.innerText = title
    const itemPrice = document.createElement('h4')
    itemPrice.className = 'itemPrice'
    itemPrice.innerText = `$ ${price}`
    menuDiv.appendChild(menuTitle)
    menuDiv.appendChild(itemPrice)
    if (description != undefined) {
        const itemDesc = document.createElement('p')
        itemDesc.className = 'descriptionItem'
        itemDesc.innerText = `Contiene: ${description}`
        menuDiv.appendChild(itemDesc)
    }
    return menuDiv
}

let menuEntradas = [
    {
        title: "Olivas Marinadas",
        price: 390
    },
    {
        title: "Girgolas fritas, crema de caju y limon",
        price: 810
    },
    {
        title: "Uvas, stracciatella y pistacho",
        price: 990
    },
    {
        title: "Faina",
        price: 210
    },
]

let menuPrincipales = [
    {
        title: "Marinara",
        price: 750,
        description: "Salsa de tomate, ajo y albahaca.",
    },
    {
        title: "Margherita",
        price: 890,
        description: "Salsa de tomate, mozzarella fior di latte, albahaca y parmesano.",
    },
    {
        title: "Girgolas",
        price: 1300,
        description: "Crema de ajo asado, fiordi latte, girgolas y portobellos.",
    },
    {
        title: "Anchoas",
        price: 810,
        description: "Salsa de tomate con anchoas, oregano, ajo, migas de pan y olivas negras.",
    },
    {
        title: "Atte",
        price: 1300,
        description: "Salsa de tomate, mozzarella fior de latte, gorgonzola, oregano, parmigiano y provolone.",
    },
]

export function home() {
    const mainDiv = document.createElement('div')
    mainDiv.className = "mainDiv"
    const div1 = infoDiv("Sobre nosotros", "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")
    mainDiv.appendChild(div1)
    const div2 = infoDiv("Horarios", "Viernes a Domingo — 12.30 - 16.30 & 20:00 - 00:00")
    mainDiv.appendChild(div2)
    mainDiv.appendChild(infoDiv("Direccion", "Avenida Siempre Viva 123"))
    mainDiv.appendChild(infoDiv("Contacto", "011-12345678"))
    return mainDiv
}

export function menu() {
    const mainDiv = document.createElement('div')
    mainDiv.className = "mainDiv"
    const entradas = document.createElement('div')
    entradas.className = "entradas infoDiv"
    let titleEntradas = document.createElement('h2')
    titleEntradas.className = "tituloMenu"
    titleEntradas.innerText = "Entradas"
    entradas.appendChild(titleEntradas)
    menuEntradas.map(item => {
        entradas.appendChild(menuItem(item.title, item.price))
    })
    mainDiv.appendChild(entradas)
    const pizzas = document.createElement('div')
    pizzas.className = "pizzas infoDiv"
    let titlePizzas = document.createElement('h2')
    titlePizzas.className = "tituloMenu"
    titlePizzas.innerText = "Pizzas"
    pizzas.appendChild(titlePizzas)
    menuPrincipales.map(item => {
        pizzas.appendChild(menuItem(item.title, item.price, item.description))
    })
    mainDiv.appendChild(pizzas)
    return mainDiv
}

