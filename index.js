const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const employees = [];


// team manager’s name, employee ID, email address, and office number
const promptUser = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                messsage: "What is the team Members Name?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team Members's Name!");
                    }
                },
            },

            {
                type: "list",
                name: "role",
                messsage: "Select the team member's role?",
                choices: [
                    "Engineer",
                    "Intern",
                    "Manager:"
                ],

                when: ({ confirmRole }) => {
                    if (confirmRole) {
                        return true;
                    } else {
                        console.log("Please choice your team member's role!");
                    }
                },
            },

            {
                type: "input",
                name: "id",
                messsage: "What is the team members ID number?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team members ID number!");
                    }
                },
            },

            {
                type: "input",
                name: "email",
                messsage: "What is the team Members Email Addrss?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team Manager's Name!");
                    }
                },
            },
        ])

        .then(function ({ name, role, id, email }) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office phone number";
            }
            inquirer.prompt([{
                message: `Enter team member's ${roleInfo}`,
                name: "roleInfo"
            },
            {
                type: "list",
                message: "Would you like to add more team members?",
                choices: [
                    "yes",
                    "no"
                ],
                name: "moreMembers"
            }])


        })

        .then(function ({ roleInfo, moreMembers }) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
                .then(function () {
                    if (moreMembers === "yes") {
                        addMember();
                    } else {
                        finishHtml();
                    }
                });

        });
};

function writeToFile(data) {
    fs.writeFile("index.html", data, (err) => {
        if (err) throw err;
    })
}
// TODO: Create a function to initialize app
function init() {
    promptUser();
}
// Function call to initialize app
init();