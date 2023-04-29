import chalk from "chalk";
import PromptSync from "prompt-sync";
//const prompt = require(prompt-sync)

const prompt = PromptSync()
const print = console.log

const salario = Number(prompt("Qual o salário? "))
const ajuste = Number(prompt("Qual o reajuste? "))

const novoSalario = salario +(salario*(ajuste/100))  //  Assim ele concatena as strings se não converetr pra number
    //const = novoSalario = salario * (1 + (ajuste/100))  --> Assim ele não concatena se não converter para Number

    print(chalk.bgBlue(`O novo salário é ${novoSalario}`)) 
    print(chalk.bgBlue.bold.italic(`O novo salário é ${novoSalario}`)) 