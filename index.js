const fs = require("fs");
const util = require("util");
const inq = require("inquirer")


// array of questions for user
const questions = [ {
    type: "input",
    message: "What is your github username?",
    name: "github",
},
{
    type: "input",
    message: "Project Title?",
    name: "title",
},
{
    type: "input",
    message: "List any contributors",
    name: "contributors",
},
{
     
    type: "input",
    message: "Describe your project",
    name: "desc",
},
{
    
    type: "input", 
    message: "Installation:",
    name: "install",
},
{ 
    type: "list", 
    message: "Which license would you like to use?",
    choices: [
        "CC0 - Creative Commons ",
        "GNU - GNU GPLv3",
        "MIT - MIT License",
        
    ],
    name: "license",
  },
{
      
    type: "input", 
    message: "Contributing:",
    name: "contribute",
},
{
    type: "input",
    message: "Test command for this project?",
    name: "test",
},
{
    type: "input", 
    message: "Usage Instructions:",
    name: "usage",
},
{
    type: "input", 
    message: "Path for your project screenshot?",
    name: "screen",
},
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
