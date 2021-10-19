
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern.js");
const inquirer = require("inquirer");
const fs = require("fs");
// const generateHTML
// generateCSS


function (fileName, data) {
    fs.writeFileSync(fileName), data);
    err ? console.log(err) : console.log("Successfully created HTML file!")
  }
  
  function engineerCard {
  inquirer prompt ([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your id?",
      name: "ID",
    },
    {
      type: "input",
      message: "What school do you attend?",
      name: "school",
    },
    {
      type: "...",
      message: "Would you like add another team member?",
      choices: ["Engineer", "Intern", "Quit"],
      name: "member"
    },
  ])
}
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <header>
        <div class="col-12 text-center">
            <h2>My Team</h2>
        </div>
    </header>

    <div class="container-fluid">
    <div class="row">

        <div class="col-sm-6 col-md-4">
            <div class="card border-white">
                <div class="card-header">Heading 1</div>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build 
                           on the card 
                        title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        

        <div class="col-sm-6 col-md-4">
            <div class="card border-white">
                <div class="card-header">Heading 2</div>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build 
                          on the card 
                        title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
    

        <div class="col-sm-6 col-md-4">
            <div class="card border-white">
                <div class="card-header">Heading 3</div>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build 
                         on the card 
                        title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        


    
</body>
</html>







