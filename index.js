// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description, installation, usage, contribution, test, license, github, email}) =>
`# ${title}

### Licenses
${license}

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

* ${github}
* ${email}`;

inquirer
    .prompt ([
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
        choices: [
            {
                name: 'MIT',
                value: {
                    name: 'MIT',
                    link: 'MIT',
                    url: 'https://opensource.org/licenses/MIT',
                    color: 'yellow',
                },
            },
            {
                name: 'Apache 2.0 License',
                value: {
                    name: 'Apache 2.0 License',
                    link: 'Apache%202.0',
                    url: 'https://opensource.org/licenses/Apache-2.0',
                    color: 'lime-green',
                },
            }
        ]
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
.then((answers) => {
    const readMeContent = generateReadMe (answers);

    fs.writeFile('generatedREADME.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
});

