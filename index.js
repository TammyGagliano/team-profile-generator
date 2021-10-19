const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern.js");
const generateHtml = require("./dist/generateHtml.js");
const generateCss = require("./dist/generateCss.js");
const employees = [];

function writeToFile(fileName, data) {
    const htmlContent = generateHtml(data);

    fs.writeFile(path.join(process.cwd(),fileName), htmlContent, (err) =>
    err ? console.log(err) : console.log("Successfully created HTML file!")
    );

    const cssContent = generateCss();

    fs.writeFile(path.join(process.cwd(), "styles.css"), cssContent, (err) => 
    err ? console.log(err) : console.log("Succesfully created CSS file!")
    );
}

function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your e-mail address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your office number?",
                name: "officenumber"
            },
            {
                type: "rawlist",
                message: "Would you like add another team member?",
                choices: ["Engineer", "Intern", "Quit"],
                name: "choices"
            }
        ])
        .then((res) => {
            const { name, id, email, officenumber } = res;

            const manager = new Manager(name, id, email, officenumber);

            employees.push(manager);

            switch (res.choices) {
                case 'Engineer':
                    return engineerCard();
                case 'Intern':
                    return internCard();
                case 'Quit':
                    return writeToFile("index.html", employees);
            }
        });
}

function engineerCard() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your e-mail address?",
                name: "email"
            },
            {
                type: "input",
                message: "What is your github username?",
                name: "github"
            },
            {
                type: "rawlist",
                message: "Would you like add another team member?",
                choices: ["Engineer", "Intern", "Quit"],
                name: "choices"
            }
        ])
        .then((res) => {
            const engineer = new Engineer(res);

            employees.push(engineer);

            switch (res.choices) {
                case 'Engineer':
                    return engineerCard();
                case 'Intern':
                    return internCard();
                case 'Quit':
                    return writeToFile("index.html", employees);
            }
        });
}


function internCard() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your id?",
                name: "id"
            },
            {
                type: "input",
                message: "What is your e-mail address?",
                name: "email"
            },
            {
                type: "input",
                message: "What school do you attend?",
                name: "school"
            },
            {
                type: "rawlist",
                message: "Would you like add another team member?",
                choices: ["Engineer", "Intern", "Quit"],
                name: "choices"
            }
        ])
        .then((res) => {
            const intern = new Intern(res);
            
            employees.push(intern);

            switch (res.choices) {
                case 'Engineer':
                    return engineerCard();
                case 'Intern':
                    return internCard();
                case 'Quit':
                    return writeToFile("index.html", employees);
            }
        });
}

init();



