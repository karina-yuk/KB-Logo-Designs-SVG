
const inquirer = require('inquirer');
const fs = require('fs');

const {SVG, Square, Circle, Triangle, Text} = require('./lib/shapes');


inquirer.prompt([
    {
        type: "input",
        message: "Please enter a 3 text character for your logo.",
        name: "text",
    },
    {
        type: "input",
        message: "Please enter a color for your logo text.",
        name: "textColor",
    },
    {
        type: "list",
        message: "Please select a shape for your logo.",
        name: "shape",
        choices: ["square", "circle", "triangle"],
    },
    {
        type: "input",
        message: "Please enter a background color for your logo.",
        name: "shapeColor",
    }
])
.then(answers => {
    let newShape;
      if (answers.shape == "square") {
        newShape = new Square (answers.shapeColor)
    } else if (answers.shape == "circle") {
        newShape = new Circle (answers.shapeColor)
    } else if (answers.shape == "triangle") {
        newShape = new Triangle (answers.shapeColor)
    } 
    const newText = new Text(answers.textColor, answers.text) 
    const svg = new SVG(newShape, newText)
    const code = svg.render()
    console.log(code)
    fs.writeFile("./examples/logo.svg", code, function() {
        console.log("Sucessfully created logo.svg! You can find it in the examples folder.")
    })
})