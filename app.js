let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const resetBtn = document.querySelector("#reset-button");

const userScorePara = document.querySelector("#player-score");
const compScorePara = document.querySelector("#computer-score");

const getCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return options[randIndx];
};

const gameDraw = () => {
    msg.innerText = "Game was Draw. Play Again!"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Wins! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = getCompChoice();

    if(userChoice === compChoice) {
        gameDraw();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice)
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    msg.innerText = "Game Reset!"
    msg.style.backgroundColor = "#081b31";
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    setTimeout(() =>{
        msg.innerText = "Choose your option!";
        msg.style.backgroundColor = "#A1C181";
    }, 1000);
}

resetBtn.addEventListener("click", resetGame);




