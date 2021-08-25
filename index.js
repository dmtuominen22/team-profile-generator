const inquirer = require("inquirer");
const fs = require("fs");
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
                name: "managerName",
                messsage: "What is the team Manager's Name?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team Manager's Name!");
                    }
                },
            },

            {
                type: "input",
                name: "IDNumber",
                messsage: "What is the team Manager's Name?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team Manager's Name!");
                    }
                },
            },

            {
                type: "input",
                name: "email",
                messsage: "What is the team Manager's Name?",
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team Manager's Name!");
                    }
                },
            },

        ])
}

