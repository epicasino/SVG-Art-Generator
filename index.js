// inquirer.js;
const inquirer = require('inquirer');
// filesystem library
const fs = require("fs");

// validate and shapes classes
const Validate = require('./lib/validate')
const Shape = require("./lib/shapes");
const Triangle = require("./lib/shapes");
const Circle = require("./lib/shapes");
const Square = require("./lib/shapes");

// array of questions for inquirer
const questions = [
  {
    type: "input",
    message: "Please input logo text (up to three characters).",
    name: "logoText",
    // validate function that will create Validate class instance to execute .validateText method- if false, throw error
    validate: (input) => {
      const validate = new Validate(input);
      if (validate.validateText()) {
        return true;
      } else throw "Incorrect input, must be <= 3 characters.";
    },
  },
  {
    type: "input",
    message:
      "What color would you like your text to be? (Color keywords and hexacode supported)",
    name: "logoTextColor",
    // validate function that will create Validate class instance to execute .validateTextColor method- if false, throw error
    validate: (input) => {
      const validate = new Validate("", input);
      if (validate.validateTextColor()) {
        return true;
      } else throw "Incorrect color choice, must be hexacode or color keyword.";
    },
  },
  {
    type: "list",
    message: "Choose logo shape",
    name: "logoShape",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    message:
      "What color would you like your shape to be? (Color keywords and hexacode supported)",
    name: "logoShapeColor",
    // validate function that will create Validate class instance to execute .validateShapeColor method- if false, throw error
    validate: (input) => {
      const validate = new Validate("", "", input);
      if (validate.validateShapeColor()) {
        return true;
      } else throw "Incorrect color choice, must be hexacode or color keyword.";
    },
  },
];

inquirer.prompt(questions)
  .then((answers) => {
    // deconstructed objects from answers
    const {logoText, logoTextColor, logoShape, logoShapeColor } = answers

    // switch statement- checks value of logoShape
    // <shape>SVG variable will have string value- string value is for shape tag in SVG file & inserted of <shape> variable's class arguments
    // <shape> variable will create new instance of the shape with validated user inserted inside of class instance arguments,
    switch(logoShape) {
      case "Triangle":
        const triangleSVG = 'polygon points="150, 18 244, 182 56, 182"';
        const triangle = new Triangle(logoText, logoTextColor, logoShapeColor, triangleSVG);
        return triangle;
        break;
      case "Circle":
        const circleSVG = 'circle cx="150" cy="100" r="80"';
        const circle = new Circle(logoText, logoTextColor, logoShapeColor, circleSVG);
        return circle;
        break;
      case "Square":
        const squareSVG = 'rect width="100%" height="100%"';
        const square = new Square(logoText, logoTextColor, logoShapeColor, squareSVG);
        return square;
        break;
    }

  })
  .then((result) => {
    // takes returned value(s) of truthy switch case and will do .renderShape() & .renderText() methods in defined variables
    // set variable to have SVG render as a template literal, along with returned values of .renderShape .renderText methods inside.
    const shapeRender = result.renderShape();
    const shapeTextRender = result.renderText();
    const fullSVGRender = `
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  ${shapeRender}

  ${shapeTextRender}

</svg>
`;
    // write file to be name of logo and content to be fullSVGRender variable- success message will be in console, otherwise error will be logged.
    fs.writeFile(`./examples/${result.text}.svg`, fullSVGRender, (err) =>
      err
        ? console.log(err)
        : console.log(`Success! Generated ${result.text}.svg`)
    );
  });
  