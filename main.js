#! /usr/bin/env node 
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Oppopnent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name"
    }
]);
let oppopnent = await inquirer.prompt([{
        name: "Select",
        type: "list",
        message: "Select your opponent",
        choices: ["Alien", "Zombie", "Skeleton"]
    }]);
let p1 = new Player(player.name);
let o1 = new Oppopnent(oppopnent.Select);
do {
    //Skeleton
    if (oppopnent.Select == "Skeleton") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Run for your life", "Attack", "Drink portion"]
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose! , Better of luck next time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win Congratulations!");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`Your Drink Health potion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life") {
            console.log("You loose! , Better of luck next time!");
            process.exit();
        }
    }
    //Alien
    if (oppopnent.Select == "Alien") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Run for your life", "Attack", "Drink portion"]
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose! , Better of luck next time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win Congratulations!");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`Your Drink Health potion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life") {
            console.log("You loose! , Better of luck next time!");
            process.exit();
        }
    }
    //Zombie
    if (oppopnent.Select == "Zombie") {
        let ask = await inquirer.prompt([{
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Run for your life", "Attack", "Drink portion"]
            }]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose! , Better of luck next time!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log("You Win Congratulations!");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelIncrease();
            console.log(`Your Drink Health potion your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run for your life") {
            console.log("You loose! , Better of luck next time!");
            process.exit();
        }
    }
} while (true);
