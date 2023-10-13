let won1 = 0;
let won2 = 0;

const scorePrompter = document.querySelector("p");

const playerOne = document.getElementById("player-one");
const scorePlayerOne = scorePrompter.children[0];
scorePlayerOne.innerText = `${won1}`;
const count1 = () => {
    won1 += 1;
    scorePlayerOne.innerText = `${won1}`;
    if (won1 + won2 === 5) {
        playerOne.removeEventListener("click", count1);
        playerTwo.removeEventListener("click", count2);
        scorePlayerOne.style.fontWeight = "bold";
        scorePlayerTwo.style.fontWeight = "bold";
        if (won1>won2){
            scorePlayerOne.style.color = "green";
            scorePlayerTwo.style.color = "red";
        }
        else if (won1<won2){
            scorePlayerOne.style.color = "red";
            scorePlayerTwo.style.color = "green";
        }
    }
};
playerOne.addEventListener("click", count1);




const playerTwo = document.getElementById("player-two");
const scorePlayerTwo = scorePrompter.children[1];
scorePlayerTwo.innerText = `${won2}`;
const count2 = () => {
    won2 += 1;
    scorePlayerTwo.innerText = `${won2}`;
    if (won1 + won2 === 5) {
        playerOne.removeEventListener("click", count1);
        playerTwo.removeEventListener("click", count2);
        scorePlayerOne.style.fontWeight = "bold";
        scorePlayerTwo.style.fontWeight = "bold";
        if (won1>won2){
            scorePlayerOne.style.color = "green";
            scorePlayerTwo.style.color = "red";
        }
        else if (won1<won2){
            scorePlayerOne.style.color = "red";
            scorePlayerTwo.style.color = "green";
        }
    }
};
playerTwo.addEventListener("click", count2);






const reset = document.getElementById("reset");
reset.addEventListener("click", () => { 
    playerOne.removeEventListener("click", count1);
    playerTwo.removeEventListener("click", count2);
    won1 = 0;
    won2 = 0;
    scorePlayerOne.style.fontWeight = "normal";
    scorePlayerTwo.style.fontWeight = "normal";
    scorePlayerOne.style.color = "black";
    scorePlayerTwo.style.color = "black";
    scorePlayerOne.innerText = `${won1}`;
    scorePlayerTwo.innerText = `${won2}`;
    playerOne.addEventListener("click", count1);
    playerTwo.addEventListener("click", count2);
  });


