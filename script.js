document.body.onload = generateElements

function generateElements(){
    let amount = Math.floor(Math.random() * 100)   
    for(let i = 0; i < amount; i++){
        addElements()
    } 
}


function addElements(){
    const newDiv = document.createElement("div")
    var str = new String("new name")
    const newContent = document.createTextNode(str)
    newDiv.appendChild(newContent)
    const currentDiv = document.getElementById("parentDiv")
    document.body.insertBefore(newDiv, currentDiv)
}