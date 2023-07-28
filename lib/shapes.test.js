const Shape = require('./shapes').Shape;
const Circle = require('./shapes').Circle;
const Triangle = require('./shapes').Triangle;
const Square = require('./shapes').Square;

// A testing suite for Arithmetic is created.
describe('Shape', () => {
  // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
  describe('Circle', () => {
    it('should render the svg for a circle', () => {
        const circleSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>`;
        const newCircle = new Circle;
        expect(newCircle.render()).toEqual(circleSVG);
    });
  });

  describe('Triangle', () => {
    it('should render the svg for a triangle', () => {
        const triangleSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
        </svg>`;
        const newTriangle = new Triangle;
        expect(newTriangle.render()).toEqual(triangleSVG);
    });
  });

  describe('Square', () => {
    it('should render the svg for a square', () => {
        const squareSVG =  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <rect width="200" height="200" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
        </svg>`;
        const newSquare = new Square;
        expect(newSquare.render()).toEqual(squareSVG);
    });
  });
});

