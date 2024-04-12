import inquirer from "inquirer";

async function startGame() {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 to 6",
    }]);
    if (answer.userGuessedNumber === randomNumber) {
        console.log("Congratulations, you guessed the right number.");
    } else {
        console.log("You guessed the wrong answer. The correct number was:", randomNumber);
    }
}

startGame();
