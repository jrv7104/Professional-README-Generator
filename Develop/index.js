// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { fstat } = require('fs');

// TODO: Create an array of questions for user input
const questions = ( 
    [
        {
            type: 'input',
            message="What is the title of your project?",
            name: 'title',
        }
        {
            type:'input',
            message:'how do you install your app?',
            name:'installation',
        }
        {
            type:'input',
            message:'?',
            name:'installation',
        }

]
)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
