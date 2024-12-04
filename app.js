let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const useScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw , Play Again"
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        useScorePara.innerText = userScore;
    }else{
        msg.innerText = `You Lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = genComputerChoice();

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            // computer => scissors or paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // computer => rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }else {
            // computer => rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});