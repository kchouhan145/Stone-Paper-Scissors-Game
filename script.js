let userScore=0;
let compScore=0;
let choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
let compS = document.querySelector("#comp-score");
let userS = document.querySelector("#user-score");
const genCompChoice = () => {
    const options= ["stone","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    console.log("game was drew.");
    msg.innerText = "It was a draw";
    msg.style.backgroundColor = "#218A97";
};
const showWinner = (userWin) => {
    if(userWin)
    {
        console.log("you win");
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
        userScore++;
        userS.innerText = userScore;
    }
    else
    {
        console.log("you lose");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
        compScore++; 
        compS.innerText = compScore;       
    }
}
const playgame = (userChoice) => {
    console.log("user choice "+ userChoice);
    
    const compChoice = genCompChoice();
    console.log("Computer choice " + compChoice);
    
    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock")
        {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false : true;
        }
        else
        {
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin);
    }
};
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        console.log("Clicked " + userChoice);
        playgame(userChoice);
    });
});