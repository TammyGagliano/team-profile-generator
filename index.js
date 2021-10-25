// Dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
//const jest = require("jest");

// Constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern.js");
const render = require("./dist/generateHtml.js");
const css = require("./dist/generateCSS.js");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const outputPathCSS = path.join(OUTPUT_DIR, "style.css");

// Create empty arrays for teams as place holders
const employees = [];
const team = [];

function init() {

  function addManager() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the Manager's name?",
          name: "managerName",
        },
        {
          type: "input",
          message: "What is the Manager's id?",
          name: "managerId",
        },
        {
          type: "input",
          message: "What is the Manager's e-mail address?",
          name: "managerEmail",
        },
        {
          type: "input",
          message: "What is the Manager's office number?",
          name: "managerOfficeNumber",
        },
      ])
      .then((res) => {
        const manager = new Manager(
          res.managerName,
          res.managerId,
          res.managerEmail,
          res.OfficeNumber
        );
        employees.push(manager);
        team.push(res.managerId);
        addTeam();
      });
  }

  function addTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberChoice",
          message: "What would you like to add next?",
          choices: ["Engineer", "Intern", "End application"]
        },
      ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            buildTeam();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the engineer's name?",
          name: "engineerName",
        },
        {
          type: "input",
          message: "What is the engineer's id?",
          name: "engineerId",
        },
        {
          type: "input",
          message: "What is the engineer's e-mail address?",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "What is the engineer's github username?",
          name: "engineerGithub",
        },
      ])
      .then((res) => {
        const engineer = new Engineer(
          res.engineerName,
          res.engineerId,
          res.engineerEmail,
          res.engineerGithub
        );
        employees.push(engineer);
        team.push(res.engineerId);
        addTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the intern's name?",
          name: "internName",
        },
        {
          type: "input",
          message: "What the intern's id?",
          name: "internId",
        },
        {
          type: "input",
          message: "What is the intern's e-mail address?",
          name: "internEmail",
        },
        {
          type: "input",
          message: "What school did the intern attend?",
          name: "internSchool",
        },
      ])
      .then((res) => {
        const intern = new Intern(
          res.internName,
          res.internId,
          res.internEmail,
          res.internSchool
        );
        employees.push(intern);
        team.push(res.internId);
        addTeam();
      });
  }

  function buildTeam() {
    //Create the output directory if the output path doesn't exist

    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(employees), "utf-8");
  }fs.writeFileSync(outputPathCSS, css(employees), "utf-8");

  addManager();
}

init();