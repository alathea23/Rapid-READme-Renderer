//Setting up packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const markdown = require('./utils/generateMarkdown')

//Creating an array of questions for user input
const questions = inquirer
.prompt([
    {
        type: 'list',
        message: 'What license are you using?',
        choices: ["MIT", "Apache", "Eclipse", "GPLv3", "GPL", "Mozilla", "Perl", "N/A"],
        name: 'license'
    },
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
    }])
    .then((data) => (
    answers = data,
    console.log(answers)));


//function to write output to README file
function writeFile(fileName, answers) {
    fileName = answers.title + 'README.md'
    //console to test code
    console.log(fileName)

    fs.writeFile(fileName, answers, (err) =>
        err ? console.error(err) : console.log('Professional README created!')
    )
};


//function to initialize app
//source for async function fix for command line: https://stackoverflow.com/questions/62860243/inquirer-prompt-exiting-without-an-answer
async function init() {
    const port = process.env.PORT || 3001
    await questions
    writeFile()
}

// Function call to initialize app
init();
