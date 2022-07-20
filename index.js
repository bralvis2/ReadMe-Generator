// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
		name: 'title',
		message: 'What is the title of your project?',
    },
    {
        type: 'input',
		name: 'description',
		message: 'Describe your project.',
    },
    {
        type: 'input',
		name: 'instillation',
		message: 'Describe the instillation process.',
    },
    {
        type: 'input',
		name: 'usage',
		message: 'Describe instructions for usage.',
    },
    {
        type: 'input',
		name: 'contribution',
		message: 'Describe how others can contribute to your project.',
    },
    {
        type: 'input',
		name: 'test',
		message: 'Describe the test instructions',
    },
    {
        type: 'checkbox',
		name: 'license',
		message: 'Select the licences you would like to include.',
        choices: [MIT, ]
    },
    {
        type: 'input',
		name: 'github',
		message: 'Enter your github user name',
    },
    {
        type: 'input',
		name: 'email',
		message: 'Enter your email.',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
