// Rock, paper, scissors script
window.addEventListener("load", startGame);

let player_points = 0;
let ai_points = 0;
let round_nr = 0;

let player_choice;
let ai_choice;

function startGame() {
  console.log("Game has started");
  document.querySelectorAll("#buttons button").forEach((elem) => {
    elem.addEventListener("click", figureClicked);
  });
  // Initiates the whole thing
  // Add eventlisteners to figures
  // Player can click either rock, paper or scissors
}

function figureClicked() {
  console.log("Figure clicked");
  let figure = this;
  console.log(this);
  // AI's choise is randomly generated
  // Player and AI's choises are compared - points are awarded if there is a win and newRound() is initiated
  // Result of round is shown (You win/loose this round! It's a draw!)
  // If player or AI has 2 points, initiate gameEnd()
}

function newRound() {
  console.log("New round begun");
  // Eventlisteners are reset
  // Info on status conveyed to player
  // Initiate startGame (right??)
  //
}

function endGame() {
  console.log("Game has ended!");
  // If player has 2 points - YOU WIN!
  // If AI has 2 points - YOU LOSE!
}
