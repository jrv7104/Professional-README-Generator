// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { fstat } = require('fs');

// TODO: Create an array of questions for user input
const questions = ( 
    [
        {
            type: 'input',
            message: "What is the title of your project?",
            name: 'title',
        },
        {
            type:'input',
            message:'how do you install your app?',
            name:'installation',
        },
        {
            type:'input',
            message:'What are your instructions for using the app?',
            name:'instructions',
        },
        {
            type:'input',
            message:'Who is credited for the function and creativity of the app?',
            name:'credits',
        },
        {
            type:'list',
            message:'What license did you use?',
            name:'license',
            choices:['MIT', 'GPL', 'Apache', 'GNU', 'Other', 'N/A'],
        },
        {
            type:'input',
            message:'What is your GitHub username?',
            name:'githubname',
        },
        {
            type:'input',
            message:'Please enter your e-mail address.',
            name:'e-mail',
        }
]
).then(({
    title,
    installation,
    instructions,
    credits,
    license,
    githubname,
    email,

}) =>{
const data = `# ${title}`
* [Installation]
* [Instructions]
* [Credits]
* [License]

# Contact
* GitHub: ${git}
* LinkedIn: ${linkedin}
* E-mail: ${email}
// TODO: Create a function to write README file
function writeToFile(fileName, data); 
}
);

//creating writeToFile function
function writeToFile(`${fileName.toLowerCase().split(' ').join('')}.md`.data.(err) =>){
    if(err) {
        console.log(error)
    }
    console.log('Your README has been created!');
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
