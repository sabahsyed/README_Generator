var inquirer = require("inquirer");
var fs = require("fs");
var questions  = require("./utils/prompts");

function start(){
    inquirer.prompt(questions)
    .then(function(answers){
        console.log(answers);
    });
    
    // fs.writeFile('README.md',inquirer.prompt(questions), function (err) {
    //      if (err) return console.log(err);
    //     console.log(inquirer.prompt(questions));
//});
}

start();


