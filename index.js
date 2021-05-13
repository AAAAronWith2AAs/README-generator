// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Project Title:",
    name: "title",
  },
  {
    type: "input",
    message: "Description:",
    name: "description",
  },
  {
    type: "list",
    message: "License type:",
    choices: ["MIT", "ISC", "GPL"],
    name: "license",
  },
  {
    type: "input",
    message: "Github username:",
    name: "github",
  },
  {
    type: "input",
    message: "Email address:",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  //user wil see the first question
  inquirer.prompt(questions).then((data) => {
    writeToFile("READ.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();

//take in input from the command line and generate a readme file based on users answers
//tech: inquirer, fs, JS, NodeJS

//what qs do I need to ask? Project name, description, github, linked in

//build out questions with inquirer and console log response

//once Ive received responses build out functionality to create a readme file, how do I format this in a presentable way?
