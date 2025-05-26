import inquirer from "inquirer";
import chalk from "chalk";
do {
    let bird = await inquirer.prompt([{
            name: "fly",
            message: chalk.green("how many birds are flew"),
            type: "list",
            choices: [1, 2, 3,]
        }]);
    switch (bird.fly) {
        case 1:
            console.log(chalk.blue('There are 🐦🐦 left on the🌲 : '));
            break;
        case 2:
            console.log(chalk.magenta('There is 🐦  on the :🌲 '));
            break;
        case 3:
            console.log(chalk.yellow('Threr is no bird on the🌲 : '));
        default:
            console.log(chalk.red('catch the bird: '));
            break;
    }
} while (true);
