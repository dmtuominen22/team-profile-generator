const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require('./lib/Employee');



const employees = [];

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
                // validate: ({confirmRole}) => {
                //     if (confirmRole) {
                //         return true;
                //     } else {
                //         console.log("Please choice your team member's role!");
                //         return false;
                //     }
                // },

            },
        ])




        .then((answers) => {
            console.log(answers);
            // generateMarkdown(answers);
            // let content = generateMarkdown(answers);
            // writeToFile(content);

        newEmployee () 
          
        });
};

function newEmployee() {
    inquirer .prompt([{
        name: "newMember",
        type: "confirm",
        message: "Would you like to add more team members?",
    },
])
    .then((answers) => {
        if (answers.newMember){
            promptUser()
        
        }else {
            writeToFile();
        }
    })

}

// TODO: Create a function to write README file
function writeToFile(data) {
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