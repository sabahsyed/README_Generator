const prompt = [
    
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
            'MIT',
            'APACHE',
            'GPL 3.0',
            'BSD 3',
            'None',
          ]
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
    
]

module.exports = prompt;