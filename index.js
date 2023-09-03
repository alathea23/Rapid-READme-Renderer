// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
   {
    type: 'input',
    message: 'What is your project title?',
    name: 'title'
   } , 
   {
    type: 'input',
    message: 'Give a brief project description',
    name: 'description'
   } ,
   {
    type: 'input',
    message: 'Describe any specific installation instructions/Requirements?',
    name: 'instructions'
   } ,
   {
    type: 'input',
    message: 'What is your project used for?',
    name: 'usage'
   } ,
   {
    type: 'dropdown',
    message: 'What license are you using?',
    name: 'license'
   } ,
   {
    type: 'input',
    message: 'List any contributors or code sources',
    name: 'contributors'
   } ,
   {
    type: 'input',
    message: 'Specify any code tests',
    name: 'tests'
   } ,
   {
    type: 'input',
    message: 'GitHub username?',
    name: 'github'
   } ,
   {
    type: 'input',
    message: 'Email address?',
    name: 'email'
   } ,
,]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const port = process.env.PORT || 3001