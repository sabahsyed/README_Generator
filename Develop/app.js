const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
 const axios = require("axios");
// axios
//     .get("https://api.github.com/users/sabahsyed")
//     .then(function(res) {
//       console.log(res.data.url);
//       console.log(res.data.avatar_url);
      
//     });


const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    
    return inquirer.prompt([
    
        {
            type:"input",
            message : "What is your GitHub username?",
            name : "gitHubUserName"
        },
        {
            type:"input",
            message : "What is your email?",
            name : "userEmail"
        },
        {
            type:"input",
            message : "What is the URL to the project",
            name : "projectURL"
        },
        {
            type:"input",
            message:"What is the project title?",
            name : "projectTitle"
        },
        {
            type:"input",
            message : "Project Description:",
            name : "projectDescription"
        },
        {
            type:"input",
            message:"What is the project title?",
            name : "projectTitle"
        },
        {
            type:"checkbox",
            message : "What kind of license should your project have ? ",
            name : "license",
            choices: [
                {value : 'https://img.shields.io/apm/l/vim-mode' ,name :'MIT'},
                {value : 'https://img.shields.io/aur/license/android-studio' ,name :'APACHE'},
                {value : 'https://img.shields.io/cpan/l/Config-Augeas' , name : 'CPAN'},
                {value  :'https://img.shields.io/pypi/l/Django' , name : 'PyPi'},
              ],
            default : {value : 'https://img.shields.io/apm/l/vim-mode' ,name :'MIT'},
        },
        {
            type:"input",
            message:"What command should be run to install dependencies?",
            name : "installCommand",
            default : "npm i ",
        },
        {
            type:"input",
            message:"What command should be run to run tests?",
            name : "testCommmand",
            default  : "npm test",
        },
        {
            type:"input",
            message:"What does the user need to know about using the repo ?",
            name : "useRepo"
        },
        {
            type:"input",
            message:"What does the user need to know about contributing to the repo ?",
            name : "contributeRepo"
        },
        
    ]);
}


function generateREADME(answers) {
   
    return `
    # README Generator
    ## License
    ![GitHub license] (${answers.license})
    ${answers.license.value}
    
     ## GitHub UserName
      ${answers.gitHubUserName} 
    
     ### User Email
     ${answers.userEmail}
    
    ## Project Title
    ${answers.projectTitle}
    ### Project Description
    ${answers.projectDescription}
    ### Project URL
    ${answers.projectURL}
    
    ## Table of contents
     
     ## Installation
    
     To install necessary dependencies, run the following command:
    ${answers.installCommand}
    
    ​
    ## Usage
    ​${answers.useRepo}
    ​
    ## License
    ​This project is licensed under the ${answers.license} license.
      
    ## Contributing
    ​${answers.contributeRepo}
    ​
    ## Tests
    ​To run tests, run the following command:
    ${answers.testCommmand}
    ​
    ## Questions
    ​
    If you have any questions about the repo, open an issue or contact directly at [Sabah Syed GitHub URL] "https://github.com/sabahsyed"
    [Sabah Syed Github Avatar] "https://avatars0.githubusercontent.com/u/58546604?v=4"
    `;
  }
  
  async function init() {
    console.log("Create a markdown file");
    console.log("------------------------");

    try{
    const answers = await promptUser();
    const md = generateREADME(answers);
    await writeFileAsync("README.md", md);
    console.log(".............................");
    console.log("Successfully wrote to README.md");
    console.log(".............................");
    } catch(err) {
    console.log(err);
    }

  }
  function api(){
    axios
    .get("https://api.github.com/users/sabahsyed")
    .then(function(res) {
      console.log(res.data.html_url); // this works
      console.log(res.data.avatar_url);
      console.log(res.data.email);
    });
  }
  api();
  init();
  