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

const questions = [
  {
    type: "input",
    message: "Please input logo text (up to three characters).",
    name: "logoText",
    validate: (input) => {
      const validate = new Validate(input);
      if (validate.validateText()) {
        return true;
      } else throw "incorrect input";
    },
  },
  {
    type: "input",
    message:
      "What color would you like your text to be? (Color keywords and hexacode supported)",
    name: "logoTextColor",
    validate: (input) => {
      const validate = new Validate("", input);
      if (validate.validateTextColor()) {
        return true;
      } else throw "incorrect color choice";
    },
  },
  {
    type: "list",
    message: "Choose logo shape",
    name: "logoShape",
    choices: ["triangle", "circle", "square"],
  },
  {
    type: "input",
    message:
      "What color would you like your shape to be? (Color keywords and hexacode supported)",
    name: "logoShapeColor",
    validate: (input) => {
      const validate = new Validate("", "", input);
      if (validate.validateShapeColor()) {
        return true;
      } else throw "incorrect color choice";
    },
  },
];

inquirer.prompt(questions)
  .then((answers) => {
    const {logoText, logoTextColor, logoShape, logoShapeColor } = answers

    switch(answers.logoShape) {
      case "triangle":
        const triangleSVG = 'polygon points="150, 18 244, 182 56, 182"';
        const triangle = new Triangle(logoText, logoTextColor, logoShapeColor, triangleSVG);
        return triangle;
        break;
      case "circle":
        const circleSVG = 'circle cx="150" cy="100" r="80"';
        const circle = new Circle(logoText, logoTextColor, logoShapeColor, circleSVG);
        return circle;
        break;
      case "square":
        const squareSVG = 'rect width="100%" height="100%"';
        const square = new Square(logoText, logoTextColor, logoShapeColor, squareSVG);
        return square;
        break;
    }

  })
  .then((result) => {
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
    fs.writeFile(`./examples/${result.text}.svg`, fullSVGRender, (err) =>
      err
        ? console.log(err)
        : console.log(`Success! Generated ${result.text}.svg`)
    );
  })
  