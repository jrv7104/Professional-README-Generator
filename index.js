// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require("fs")
const generateMarkdown = require("./generateMarkdown")

// TODO: Create an array of questions for user input
inquirer.prompt( 
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
).then((answers) =>{
// const data = `# ${title}`
// * [Installation]
// * [Instructions]
// * [Credits]
// * [License]

// * Contact
// * GitHub ${git}
// * LinkedIn: ${linkedin}
// * E-mail: ${email}
// // TODO: Create a function to write README file
// writeToFile(fileName, data); 
console.log(answers)
writeToFile("README.md", answers)
}
);

//creating writeToFile function
function writeToFile(filename, data){
    let string = generateMarkdown(data)
    fs.writeFileSync(filename, string, err => {
        if(err) throw err;
    })
};

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
