// import inquirer from "inquirer";
const fs = require('fs');
const Shape = require('./lib/shapes')

const questions = [
  {
    type: 'input',
    message: 'Please input logo text (up to three characters).',
    name: 'logoText',
  },
]


const shape = new Shape("", "", "#00bfff");
shape.shapeColor;
