#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const init = () => {
    console.log(
        chalk.green(
            figlet.textSync("Node f*cking JS", {
                font: "Ghost",
                horizontalLayout: "default",
                verticalLayout: "default"
            })
        )
    );
}

const askQuestions = () => {
    const questions = [{
            name: "FILENAME",
            type: "input",
            message: "What is the name of the file without extension?"
        },
        {
            type: "list",
            name: "EXTENSION",
            message: "What is the file extension?",
            choices: [".rb", ".js", ".go", ".css"],
            filter: function(val) {
                return val.split(".")[1];
            }
        }
    ];
    return inquirer.prompt(questions);
};


const run = async() => {
    // show script introduction
    init();

    // ask questions
    const answers = await askQuestions();
    const { FIILENAME, EXTENSION } = answers;

    // create the file
    // show success message
};

run();