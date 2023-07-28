const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes');

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
        if (questions.shape == 'circle'){
            writeToFile(`${response.shape}.svg`, newCircle.render())
        }
        else if (questions.shape == 'triangle'){
            writeToFile(`${response.shape}.svg`, newTriangle.render())

        }
        else if (questions.shape == 'square'){
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


