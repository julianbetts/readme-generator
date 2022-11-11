// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = []
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of your repo?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'What is the description?',
                name: 'description',
            },
            {
                type: 'input',
                message: 'what is the usage?',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'What is the license?',
                name: 'license',
            },
            {
                type: 'input',
                message: 'Who are the contributers?',
                name: 'contributors',
            },
            {
                type: 'input',
                message: 'what are the tests?',
                name: 'tests',
            },
            {
                type: 'inputs',
                message: 'what are the questions?',
                name: 'questions',
            },

        ])
        .then((response) => {
            console.log(response)
            let readme = `
# ${response.title}
## Description
${response.description}
## Table of Contents
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#test)
* [Questions](#questions)
## Usage
${response.usage}
## License
${response.license}
## Contributors
${response.contributors}
## Tests
${response.tests}
## Questions
${response.questions}
`
            console.log(readme)

            fs.writeFile('README.md', readme, (err) =>

                err ? console.error(err) : console.log('Commit logged!')
            );

        });
}

// Function call to initialize app
init();


