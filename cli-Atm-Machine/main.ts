#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
let mybalance = 10000;  // ruppees
let mypin = 9987;

let pinAnswer = await inquirer.prompt([{
    name : "pin",
    message : chalk.blue("Enter your pin !"),
    type : "number",
}]);
// --------------pin--------------//
if(pinAnswer.pin === mypin){
    console.log (chalk.yellowBright('Correct pin code.'));

    let actionAns = await inquirer.prompt([{
        name :'action',
        message : chalk.green('Please select option.'),
        type : 'list',
        choices : ['withdraw','check balance','fast cash'],
    }]);
    console.log(actionAns);
    // -----------withdraw---------------//
    if(actionAns.action === 'withdraw'){

        let amountAns = await inquirer.prompt([{
            name : 'amount',
            message : chalk.yellow('Enter your amount'),
            type : 'number',

        }]);
        mybalance -= amountAns.amount;
        console.log(`your remaining balance is ${mybalance}`);
    }
    //    ---------check balance---------------//
    else if(actionAns.action === 'check balance'){
        console.log( chalk.hex("#00ff99")(`your balance is ${mybalance}`));
    }
// -----------------fast cash--------------//

else if(actionAns.action === 'fast cash'){
    let myfastCash = await inquirer.prompt([{
        name : 'fast_cash',
        message : chalk.hex("#ffA500")('How much money do you withdraw ?'),
        type : 'list',
        choices : ['5000','7000','9000'],

    }]);
    if(myfastCash.fast_cash === '5000'){
        mybalance -= myfastCash.fast_cash;
        console.log(`your remaining balance is . ${mybalance}`);
    }
    if(myfastCash.fast_cash === '7000'){
       mybalance -= myfastCash.fast_cash;
       console.log(`your remaining balance is . ${mybalance}`);
    }
    if(myfastCash.fast_cash === '9000'){
        mybalance -= myfastCash.fast_cash;
        console.log(`your remaining balance is. ${mybalance}`);
    }
} 
} else{
    console.log(chalk.red('Incorrect pin code !'));
}
    
    

  
       

    




        
    
    