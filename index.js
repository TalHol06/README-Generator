// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// const { error } = require('console');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description about your project.'
  },
  {
    type: 'input',
    name: 'installing',
    message: 'Enter the installation steps for your project, if any.'
  }, 
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for the use of your project.'
  }, 
  {
    type: 'list',
    name: 'license',
    message: 'Select one of the following licenses.',
    choices: ["MIT", "Apache 2.0", "MPL 2.0", "ISC", "BSD", "Boost", "None"]
  }, 
  {
    type: 'input',
    name: 'contrbutors',
    message: 'Enter all who contributed to this project.'
  }, 
  {
    type: 'input',
    name: 'tests',
    message: 'Enter any test that you did for your application.'
  }, 
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username.'
  }, 
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address.'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Prompt the User to input title, description, contributors, etc.
  fs.writeFile(fileName, data, (err) =>{
    if (err){
      console.log('Error occured while creating README file', err);
    }else{
      console.log('README file created successfully!');
    }
    
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(answers =>{
    console.log('Generating your README file...');
    writeToFile("professionalREADME.md", generateMarkdown(answers));
  }).catch(error => {
    console.log('Error:', error);
  })

}

// Function call to initialize app
init();
