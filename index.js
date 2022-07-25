// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Generates the Content of the README.md 
const generateReadMe = ({ title, description, installation, usage, contribution, test, license, github, email }) =>
    `# ${title}

### Licenses
${renderBadge(license)}

## Table of Contents
* [Description](#description)

* [Installation](#installation-instructions)

* [Usage-Information](#usage-information)

* [Contribution](#contribution-guidelines)

* [Test-Instructions](#test-instructions)

* [Questions](#questions)

## Description
${description}

## Installation Instructions
${installation}

## Usage Information
${usage}

## Contribution Guidelines
${contribution}

## Test Instructions
${test}

## Questions 

[![](https://github.com/${github}.png?size=50)](https://github.com/${github})

[Github](https://github.com/${github})
* ${email}`;

// Array of Prompts
inquirer
    .prompt([
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
            name: 'installation',
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
            choices: ['Mit','Apache', 'Mozilla']
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
    ])

    // Generates a README with the answers from the prompts
    .then((answers) => {
        const readMeContent = generateReadMe(answers);

        fs.writeFile('generatedREADME.md', readMeContent, (err) =>
            // if the README.md was generated, users get a success message. If not, an error msg.
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });

// Licenses 
function renderBadge(license) {

    if (license == 'Mit') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)'
    } else if (license == 'Apache') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license == 'Mozilla') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    } else {
        return ''
    }
}