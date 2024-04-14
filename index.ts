#! /usr/bin/env node

// Atm Machine

import inquirer from "inquirer";

let condition = true;
// Package name.
console.log(' \t"ATM MACHINE"');
// store a balance & pin code in variables.
let myBalance = 100000;
let myPin = 11223;

while (condition) {
  // taking a pin code from user
  let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin code.",
    type: "number",
  });
  if (pinAnswer.pin === 11223) {
    console.log("Corret pin code!");

    let atmAction = await inquirer.prompt([
      {
        name: "operation",
        message: "Please select option.",
        type: "list",
        choices: [
          "cash withdraw",
          "fast cash withdraw",
          "check balance",
          "Exit",
        ],
      },
    ]);
    //  create function for withdraw amount.
    if (atmAction.operation === "cash withdraw") {
      let amountAns = await inquirer.prompt({
        name: "amount",
        message: "enter your amount.",
        type: "number",
      });
      if (amountAns.amount > myBalance) {
        console.log("Insufficient balance!");
      } else if ((myBalance -= amountAns.amount)) {
        console.log(`You have Successfully withdraw ${amountAns.amount}. `),
          console.log(`Your remaining balance is ${myBalance}.`);
      }

      // create a function for fast cash withdraw.
    } else if (atmAction.operation === "fast cash withdraw") {
      let fastamounts = await inquirer.prompt([
        {
          name: "fastamount",
          message: "select withdraw amount.",
          type: "list",
          choices: ["10000", "25000", "50000", "75000"],
        },
      ]);
      if (fastamounts.fastamount === "10000") {
        myBalance -= fastamounts.fastamount;
        console.log("You have Successfully withdraw 10000 . ");
        console.log(`Your remaining balance is ${myBalance}.`);
      } else if (fastamounts.fastamount === "25000") {
        myBalance -= fastamounts.fastamount;
        console.log("You have Successfully withdraw 25000 . ");
        console.log(`Your remaining balance is ${myBalance}.`);
      } else if (fastamounts.fastamount === "50000") {
        myBalance -= fastamounts.fastamount;
        console.log("You have Successfully withdraw 50000 . ");
        console.log(`Your remaining balance is ${myBalance}.`);
      } else if (fastamounts.fastamount === "75000") {
        myBalance -= fastamounts.fastamount;
        console.log("You have Successfully withdraw 75000 . ");
        console.log(`Your remaining balance is ${myBalance}.`);
      }

      // create a function for check balance.
    } else if (atmAction.operation === "check balance") {
      console.log(`Your current balance is ${myBalance}.`);
    } else if (atmAction.operation === "Exit") {
      condition = false;
    }
  
  } else {
    console.log("invalid pin code!");
  }
}
