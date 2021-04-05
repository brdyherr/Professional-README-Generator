// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
                    }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a project description',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter a brief summary!');
                return false;
                    }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter instructions on how to install your project',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please provide instructions!');
                return false;
                    }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide information and examples for use',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please provide usage information or enter "N/A"');
                return false;
                    }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please include details on how one can contribute if interested',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please provide contribution guidelines!');
                return false;
                    }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter intructions!');
                return false;
                    }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
                    }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
                    }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return
        }
        console.log('Complete!');
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((data) =>{
        writeToFile('README.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
