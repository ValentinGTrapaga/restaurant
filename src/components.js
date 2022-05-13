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

export function home() {
    const mainDiv = document.createElement('div')
    mainDiv.id = "mainDiv"
    const titleDiv = document.createElement('h1')
    titleDiv.innerText = "Le Cepage"
    titleDiv.className = "title"
    mainDiv.appendChild(titleDiv)
    const div1 = infoDiv("Sobre nosotros","simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum")
    mainDiv.appendChild(div1)
    const div2 = infoDiv("Horarios","Lunes a Viernes, de 08:00 a 12:00")
    mainDiv.appendChild(div2)
    const div3 = infoDiv("Direccion","Avenida Siempre Viva 123")
    mainDiv.appendChild(div3)
    return mainDiv
}

