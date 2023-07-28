const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes').Shape;
const Circle = require('./lib/shapes').Circle;
const Triangle = require('./lib/shapes').Triangle;
const Square = require('./lib/shapes').Square;

const questions = [
    {
        type: 'input',
        message: 'Enter up to 3 characters for the logo: ',
        name: 'text'
    },
    {
        choices: ['circle', 'triangle', 'square'],
        type: 'list',
        message: 'What is the logo shape?',
        name: 'shape'
    },
    {
        type: 'input',
        message: 'What is the color of the shape?',
        name: 'shapeColor'
    },
    {
        type: 'input',
        message: 'What is the color of the text?',
        name: 'textColor'
    }
];

function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Commit logged!'))
};

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        const newCircle = new Circle(response.shapeColor, response.textColor, response.text);
        const newTriangle = new Triangle(response.shapeColor, response.textColor, response.text);
        const newSquare = new Square(response.shapeColor, response.textColor, response.text);
        // if statements here
        if (response.shape == 'circle'){
            writeToFile(`${response.shape}.svg`, newCircle.render())
        }
        else if (response.shape  == 'triangle'){
            writeToFile(`${response.shape}.svg`, newTriangle.render())

        }
        else if (response.shape == 'square'){
            writeToFile(`${response.shape}.svg`, newSquare.render())
        }
       
    });
};

init();

/*response = {
    shape: "circle",
    shapeColor: "blue",
    textColor: "white",
    text: "SVG"
}*/


