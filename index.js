// Include packages needed for this application
const inquirer = require('inquirer');
const markdownMaker = require('./utils/generateMarkdown');
const fs = require('fs');

// XX - GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// XX - THEN a high-quality, professional README.md is generated with the title of my project and 
// XX - sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// - THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled 
// License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// # <Your-Project-Title> - also file name

// ## Description
// Provide a short description explaining the what, why, and how of your project

// ## Table of contents
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// ## Installation
// What are the steps required to install your project? 

// ## Usage
// Provide instructions and examples for use. 

// ## License
// choices
// add badge near the top of the page, as well as description

// ## Contribution
// List your collaborators, if any, with links to their GitHub profiles.
// ## Tests
// ## Questions - with instructions on how to reach me with additional questions

// Github username -added to Questions
// email address - added to questions
// 


// Create an array of questions for user input
const questions = ["What's your project title?", 
"Provide a short description explaining the what, why, and how of your project",
"What are the steps required to install your project?", 
"Provide instructions and examples for use. ",
"Choose your License. If you need help, refer to (https://choosealicense.com/).",
"List your collaborators, if any, with links to their GitHub profiles.",
"Write tests for your application. Then provide examples on how to run them here.",
"What's your Github username?",
"What is your email address?",
];

// Create a function to write README file
function writeToFile(fileName, data) {

    let readmeContent = markdownMaker.generateMarkdown(data);

    fs.writeFile(fileName, readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

// Create a function to initialize app
const init = (questions) => {
    inquirer
        .prompt([
      {
        type: 'input',
        name: 'name',
        message: questions[0],
      },
      {
        type: 'input',
        message: questions[1],
        name: 'description',
      },
      {
        type: 'input',
        message: questions[2],
        name: 'installation',
      },
      {
        type: 'input',
        message: questions[3],
        name: 'usage',
      },
      {
        type: 'list',
        message: questions[4],
        name: 'license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0',
    'Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense'],
      },
      {
        type: 'input',
        message: questions[5],
        name: 'collab',
      },
      {
        type: 'input',
        message: questions[6],
        name: 'test',
      },
      {
        type: 'input',
        message: questions[7],
        name: 'github',
      },
      {
        type: 'input',
        message: questions[8],
        name: 'email',
      },
    ])
    .then((data) => {
      const fileName = `${data.name.toUpperCase().split(' ').join('')}.md`;
  
        // console.log(filename);
      writeToFile (fileName, data);
    });
  
};

// Function call to initialize app
init(questions);
