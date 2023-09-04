// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const markdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a brief project description',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Describe any specific installation instructions/Requirements?',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'What is your project used for?',
        name: 'usage'
    },
    {
        type: 'dropdown',
        message: 'What license are you using?',
        choices: ["MIT", "Apache", "Eclipse", "GPLv3", "GPL", "Mozilla", "Perl", "N/A"],
        name: 'license'
    },
    {
        type: 'input',
        message: 'List any contributors or code sources',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'Specify any code tests',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Email address?',
        name: 'email'
    },
    ,]);

fileName = title + README.md

// TODO: Create a function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Professional README created!')
    )
};


// TODO: Create a function to initialize app
function init() {
    const port = process.env.PORT || 3001
    questions
    writeFile()
}

// Function call to initialize app
init();
