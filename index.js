// import inquirer from "inquirer";
const fs = require("fs");
const Validate = require('./lib/validate')
const Shape = require("./lib/shapes");
const Triangle = require("./lib/shapes");
const Circle = require("./lib/shapes");
const Square = require("./lib/shapes");
const inquirer = require('inquirer');

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
    console.log(answers);
  })
  