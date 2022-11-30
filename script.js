console.log("hello world")

const humanNames = require('human-names');

document.body.onload = generateElements

function generateElements(){
    let amount = Math.floor(Math.random() * 100)   
    for(let i = 0; i < amount; i++){
        addElements()
    } 
}


function addElements(){
    if(Math.random() < 0.3){
        const newDiv = document.createElement("b") //about 30% chance of bold
        var str = "e"
        const newContent = document.createTextNode(str)
        newDiv.appendChild(newContent)
        document.body.appendChild(newDiv)
        document.body.appendChild(document.createElement("br"))
        document.body.appendChild(document.createElement("br"))
    }
    else{
        const newDiv = document.createElement("p")
        var str = "e"
        const newContent = document.createTextNode(str)
        newDiv.appendChild(newContent)
        document.body.appendChild(newDiv)
    }
    
}