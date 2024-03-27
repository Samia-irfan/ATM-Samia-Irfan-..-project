import inquirer from "inquirer";
let Mybalance = 10000;
let myPin = 7755;
let pinAns = await inquirer.prompt([{
        name: "Pin",
        message: "Enter your pin:",
        type: "number"
    }]);
if (pinAns.Pin === myPin) {
    console.log("you've entered the correct Pin!!");
}
else {
    console.log("The pin you've entered is wrong please try again.");
}
let operation = await inquirer.prompt([{
        name: "pinn",
        message: "select the options below!!",
        type: "list",
        choices: ["checkbalance", "withdraw", "fastcash"]
    }]);
if (operation.pinn === "withdraw") {
    let amount = await inquirer.prompt([{
            name: "cash",
            message: "Enter the amount of cash you want to withdraw:",
            type: "number"
        }]);
    if (amount.cash > Mybalance) {
        console.log("The value you've eneterd is insufficient to your account.");
    }
    else if (Mybalance -= amount.cash) {
        console.log(`you have successfully withdrawn your amount your current balance is ${Mybalance}`);
    }
}
if (operation.pinn === "fastcash") {
    let valuee = await inquirer.prompt([{
            name: "code",
            message: "select the Amount you would like to withdraw:",
            type: "list",
            choices: [1000, 5000, 10000, 25000]
        }]);
    if (valuee.code === 1000) {
        Mybalance -= 1000;
        console.log(`you got ${Mybalance}`);
    }
    else if (valuee.code === 5000) {
        Mybalance -= 5000;
        console.log(`successfully withdrawn your current balance is ${Mybalance}`);
    }
    else if (valuee.code === 10000) {
        Mybalance -= 10000;
        console.log(`successfully withdrawn your current balance is ${Mybalance}`);
    }
    else if (valuee.code === 3000) {
        Mybalance -= 3000;
        console.log(`successfully withdrawn your current balance is ${Mybalance}`);
    }
}
if (operation.pinn === "checkbalance") {
    console.log(`your current balance is ${Mybalance}`);
}
