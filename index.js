"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    {
        name: "sentence",
        type: "input",
        message: "enter your sentence to count the words:"
    }
]);
var words = answer.sentences.trim();
console.log("your sentence words count is".concat(words.length));
