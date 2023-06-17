import inquirer from "inquirer";
const fs = require('fs');

const questions = [
  {
    type: 'input',
    message: 'Please input logo text (up to three characters).',
    name: 'logoText',
  },
]
