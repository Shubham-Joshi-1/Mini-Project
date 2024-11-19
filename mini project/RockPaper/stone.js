let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genComChoice = () => {
    const options=["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    
};



const drawGame = () => {
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText =  `You lose!. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) => {
    //console.log("user choice=", userChoice);
    //-------Generate computer choice->modular--------
    const compChoice = genComChoice();
   // console.log("comp choice=", compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "scissors"){
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        } else {
            userWin = compChoice === "scissors" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});