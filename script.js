console.log("Hi, Jack!");
// get Images and save them into variables
let rock = document.getElementById("image1");
let paper = document.getElementById("image2");
let scissors = document.getElementById("image3");
//Set score variables to 0
let score = 0


//Create a function to run the entire game when you hit the Rock Paper Scissors button
let paperWins = 0;
let scissorsWins = 0;
let rockWins = 0;
function runForrestRun(){
    console.log("Running Game...");
    let listy = [
        rock,
        paper,
        scissors
        ];
    let decision1 = Math.floor(Math.random() * 3);
    let decision2 = 0
    let one = "no"
    let two = "no"
    let three = "no"
    let four = "no"
    let five = "no"
    let six = "no"
    let winner = "";
    do {
    decision2 = Math.floor(Math.random() * 3);
    }
    while (decision1 == decision2);
    if (decision1 == 1) {
        let player1 = listy[0]
        one = "yes";
    } else if (decision1 == 2) {
        let player1 = listy[1];
        two = "yes";
    } else {
        let player1 = listy[2]
        three = "yes";
    }
    if (decision2 == 1) {
        let player2 = listy[0]
        four = "yes";
    } else if (decision2 == 2) {
        let player2 = listy[1]
        five = "yes";
    } else {
        let player2 = listy[2]
        six = "yes";
    }
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    if ((one == "yes" && five == "yes") || (four == "yes" && two == "yes")) {
        rock.style.display = "initial";
        paper.style.display = "initial";
        winner = "Paper"
        let winnerText = document.getElementById('winnerTag');
        winnerText.innerHTML = "The Winner Is... Paper";
        
    } else if ((one == "yes" && six == "yes") || (four == "yes" && three == "yes")) {
        rock.style.display = "initial";
        scissors.style.display = "initial";
        winner = "Rock";
        let winnerText = document.getElementById('winnerTag');
        winnerText.innerHTML = "The Winner Is... Rock";
    } else {
        paper.style.display = "initial";
        scissors.style.display = "initial"
        winner = "Scissors";
        let winnerText = document.getElementById('winnerTag');
        winnerText.innerHTML = "The Winner Is... Scissors";
    }
    
    if (winner == "Paper"){
        paperWins = paperWins + 1;
        document.getElementById('paperScore').innerHTML = paperWins;
    } else if (winner == "Scissors"){
        scissorsWins = scissorsWins + 1;
        document.getElementById('scissorsScore').innerHTML = scissorsWins;
    } else {
        rockWins = rockWins + 1;
        document.getElementById('rockScore').innerHTML = rockWins;
    }
    
    
    
}   