document.body.onload = generateElements

function generateElements(){
    const newDiv = document.createElement("div")
    const newContent = document.createTextNode("new name")
    newDiv.appendChild(newContent)
    const currentDiv = document.getElementsByClassName("parentDiv")
    document.body.insertBefore(newDiv, currentDiv)
}