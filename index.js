const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require('./lib/Employee');
const { resolve } = require("path");
const { title } = require("process");



var employees = [];

// team member name, employee ID, email address, role
const promptUser = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the team Members Name?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team Members Name!");
                    }
                },
            },

            {
                type: "input",
                name: "id",
                message: "What is the team members ID number?",
                validate: (idInput) => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the team members ID number!");
                    }
                },
            },

            {
                type: "input",
                name: "email",
                message: "What is the team Members Email Address?",
                validate: (emailInput) => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the team Member email address!");
                    }
                },
            },

            {
                type: "list",
                name: "role",
                message: "Select the team member's title?",
                choices: [
                    "Employee",
                    "Engineer",
                    "Intern",
                    "Manager"
                ],
            },
        ])

        .then((answers) => {
            switch (answers.role) {
                case "Employee":
                    employees.push(new Employee(answers.name, answers.id, answers.email, answers.role)); 
                        console.log(employees);
                        newEmployee()   
                    break;
                case "Engineer":
                    inquirer 
                    .prompt([{
                        type:"input",
                        name: "github",
                       message: "please enter your GitHub User Name",
                    }])

                    .then((extraAnswers) => {
                        employees.push(new Engineer(answers.name, answers.id, answers.email, extraAnswers.github, answers.role)); 
                        console.log(employees);
                        newEmployee()   
                    });   
                    break;
                case "Intern":
                    inquirer 
                    .prompt([{
                        type:"input",
                        name: "school",
                       message: "please enter your School",
                    }])

                    .then((extraAnswers) => {
                        employees.push(new Intern(answers.name, answers.id, answers.email, extraAnswers.school, answers.role)); 
                        console.log(employees);
                        newEmployee()   
                    });  
                     break; 
                case "Manager":
                    inquirer 
                    .prompt([{
                        type:"input",
                        name: "officeNumber",
                       message: "please enter your Office Number",
                    }])

                    .then((extraAnswers) => {
                        employees.push(new Manager(answers.name, answers.id, answers.email, extraAnswers.officeNumber, answers.role)); 
                        console.log(employees);
                        newEmployee()   
                    });  
                    break;
            }


        });
};

function newEmployee() {
    inquirer.prompt([{
        name: "newMember",
        type: "confirm",
        message: "Would you like to add more team members?",
    },
    ])
        .then((answers) => {
            if (answers.newMember) {
                promptUser()

            } else {
                writeToFile();
            }
        })

}

// TODO: Create a function to write html file
function writeToFile() {
    fs.writeFile("index.html", data, (err) => {
        if (err) throw err;

        console.log("Employee finished!");
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser();
}
// Function call to initialize app
init();

