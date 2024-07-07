#! /usr/bin/env node

import inquirer from "inquirer";
const answer:{
    sentences:string
} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"enter your sentence to count the words:"
    }
])

const words =answer.sentences.trim()
console.log(`your sentence words count is${words.length}`);


         //THIS IS SAIMA WAHEED PROJECT 05 SIR ZIA repo