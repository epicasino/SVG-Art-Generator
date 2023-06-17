// import inquirer from "inquirer";
const fs = require("fs");
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
  },
];
