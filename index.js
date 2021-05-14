// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

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
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
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
  // {
  //   type: "input",
  //   message: "Enter the command to install necessary dependencies: ",
  //   name: "installation",
  // },
  // {
  //   type: "input",
  //   message: "Enter your usage information: ",
  //   name: "usage",
  // },
  {
    type: "input",
    message: "Enter your contribution guidelines: ",
    name: "contribution",
  },
  // {
  //   type: "input",
  //   message: "Enter the test commands: ",
  //   name: "test",
  // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data); //cwd-current working directory
}

// TODO: Create a function to initialize app
function init() {
  //user wil see the first question
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown({ ...data }));
  });
}

// Function call to initialize app
init();

//take in input from the command line and generate a readme file based on users answers
//tech: inquirer, fs, JS, NodeJS

//what qs do I need to ask? Project name, description, github, linked in

//build out questions with inquirer and console log response

//once Ive received responses build out functionality to create a readme file, how do I format this in a presentable way?
