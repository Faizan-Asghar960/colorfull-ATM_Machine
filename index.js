#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Initialize user balance and pin code
let myBalance = 10000;
let myPin = 3456;
// Print welcome message
console.log(chalk.blueBright("\n \tWelcome to Code with Mr. Fazee - ATM Machine\n"));
(async () => {
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            type: "number",
            message: chalk.yellow("Enter your pin code:")
        }
    ]);
    if (pinAnswer.pin === myPin) {
        console.log(chalk.green("\n Pin is correct, login successfully\n"));
        let operationAns = await inquirer.prompt([
            {
                name: "operation", // Corrected spelling
                type: "list",
                message: "Select an operation: ",
                choices: ["Withdraw Amount", "Check Balance"] // Corrected spelling
            }
        ]);
        if (operationAns.operation === "Withdraw Amount") { // Changed variable name
            let withdrawAns = await inquirer.prompt([
                {
                    name: "withdrawMethod",
                    type: "list",
                    message: "Select a withdrawal method:", // Corrected spelling
                    choices: ["Fast Cash", "Enter Amount"]
                }
            ]);
            if (withdrawAns.withdrawMethod === "Fast Cash") { // Corrected spelling
                let fastCashAns = await inquirer.prompt([
                    {
                        name: "fastCash",
                        type: "list",
                        message: "Select amount:",
                        choices: [1000, 2000, 5000, 10000, 20000, 50000]
                    }
                ]);
                if (fastCashAns.fastCash > myBalance) {
                    console.log(chalk.red("\n Insufficient Balance\n"));
                }
                else {
                    myBalance -= fastCashAns.fastCash;
                    console.log(`${fastCashAns.fastCash} withdrawn Successfully`); // Corrected spelling
                    console.log(`Your Remaining Balance is: ${myBalance}`); // Corrected spelling
                }
            }
            else if (withdrawAns.withdrawMethod === "Enter Amount") { // Corrected spelling
                let amountAns = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to withdraw:"
                    }
                ]);
                if (amountAns.amount > myBalance) {
                    console.log(chalk.red("Insufficient Balance"));
                }
                else {
                    myBalance -= amountAns.amount;
                    console.log(`${amountAns.amount} withdrawn successfully`); // Corrected spelling
                    console.log(`Your Remaining Balance is: ${myBalance}`); // Corrected spelling
                }
            }
        }
        else if (operationAns.operation === "Check Balance") { // Corrected spelling
            console.log(`Your Account Balance is: ${myBalance}`); // Corrected spelling
        }
    }
    else {
        console.log(chalk.red("\nPin is incorrect, try again!\n"));
    }
})();
