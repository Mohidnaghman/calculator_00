#! usr/bin/env node
import inquirer from "inquirer";
let again = false;
function welcomeMsg(msg) {
    console.log(msg + "/n");
}
async function getInputFromUser() {
    const answers = await inquirer.prompt([
        {
            name: "firstNumber",
            message: "Enter your 1 number",
            type: "input",
            validate: function (input) {
                if (isNaN(input) ||
                    input === "") {
                    return "not a valid number";
                }
                else {
                    return true;
                }
            }
        }, {
            name: "operation",
            message: "chosse an operation",
            type: 'list',
            choices: ["+", "-", "*", "÷"]
        },
        {
            name: "secondNumber",
            message: "Enter your 2 number",
            type: "input",
            validate: function (input) {
                if (isNaN(input) ||
                    input === "") {
                    return "not a valid number";
                }
                else {
                    return true;
                }
            }
        },
    ]);
    const firstNumber = Number(answers.firstNumber);
    const secondNumber = Number(answers.secondNumber);
    switch (answers.operation) {
        case "+":
            console.log(`Result :${firstNumber + secondNumber}`);
            break;
        case "-":
            console.log(`Result :${firstNumber - secondNumber}`);
            break;
        case "*":
            console.log(`Result :${firstNumber * secondNumber}`);
            break;
        case "÷":
            console.log(`Result :${firstNumber / secondNumber}`);
            break;
        default:
            break;
    }
    const { confirm } = await inquirer.prompt([
        {
            name: "confirm",
            message: "Do you want to do another calculation",
            type: "confirm",
        }
    ]);
    again = confirm;
    console.log("/n/n");
}
welcomeMsg("welcome to my calculator");
do {
    getInputFromUser();
} while (again);
