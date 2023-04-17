// Include packages needed for this application
const inquirer = require('inquirer');
const markdownMaker = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your project title?",
  },
  {
    type: 'input',
    message: "Provide a short description explaining the what, why, and how of your project",
    name: 'description',
  },
  {
    type: 'input',
    message: "What are the steps required to install your project?",
    name: 'installation',
  },
  {
    type: 'input',
    message: "Provide instructions and examples for use. ",
    name: 'usage',
  },
  {
    type: 'list',
    message: "Choose your License. If you need help, refer to (https://choosealicense.com/).",
    name: 'license',
    choices: ['The Unlicense',
      'Mozilla Public License 2.0',
      'Apache License 2.0',
      'MIT License',
      'N/A'],
  },
  {
    type: 'input',
    message: "List your collaborators, if any, with links to their GitHub profiles.",
    name: 'collab',
  },
  {
    type: 'input',
    message: "Write tests for your application. Then provide examples on how to run them here.",
    name: 'test',
  },
  {
    type: 'input',
    message: "What's your Github username?",
    name: 'github',
  },
  {
    type: 'input',
    message: "What is your email address?",
    name: 'email',
  },
]

// Create a function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, markdownMaker.generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Successfully created your new README!')
  );
}

// Create a function to initialize app
const init = (questions) => {
  inquirer.prompt(questions)
    .then((data) => {
      const fileName = `${data.name.toUpperCase().split(' ').join('')}.md`;

      // console.log(filename);
      writeToFile(fileName, data);
    });

};

// Function call to initialize app
init(questions);
