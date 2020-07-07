const fs = require("fs");
const inq = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


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
    fs.writeFile(fileName, generateMarkdown(data), (error) => error)
}

// function to initialize program
async function init() {
    try {
        let userInput = await inq.prompt(questions);

        console.log(`Creating ${userInput.title}-README.md...`);
        
        writeToFile(`${userInput.title}-README.md`, userInput);

        console.log("Readme successfully created")
    } catch (error) {
        throw error;
    }   

}

// function call to initialize program
init();
