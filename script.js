// Rock, paper, scissors script
window.addEventListener("load", startGame);

let player_points = 0;
let ai_points = 0;
let round_nr = 0;

let player_choice;
let ai_choice;

function startGame() {
  console.log("Game has started");
  // Add click events to all the buttons
  document.querySelectorAll("#buttons button").forEach((elem) => {
    elem.addEventListener("click", figureClicked);
  });
}

function figureClicked() {
  console.log("Figure clicked");
  // this gets the element that was clicked
  let figure = this;
  console.log(this);
  // Set player_choice variable to be equal to class name
  player_choice = this.getAttribute("class");
  console.log("You chose " + player_choice);
  // Generate random number
  ai_random = Math.floor(Math.random() * 3) + 1;
  //console.log("AI chose " + ai_random);
  // Assign string to random number and set ai_choice variable to that string
  if (ai_random == 1) {
    ai_choice = "rock";
  }
  if (ai_random == 2) {
    ai_choice = "paper";
  }
  if (ai_random == 3) {
    ai_choice = "scissor";
  }
  console.log("AI chose " + ai_choice);

  document.querySelectorAll(".player").forEach((elem) => {
    elem.classList.add("shake");
  });
  document
    .querySelector("#player1")
    .addEventListener("animationend", checkResult);
  // AI's choise is randomly generated
  // Player and AI's choises are compared - points are awarded if there is a win and newRound() is initiated
  // Result of round is shown (You win/loose this round! It's a draw!)
  // If player or AI has 2 points, initiate gameEnd()
}

function checkResult() {
  console.log("The results are in!");
  document.querySelectorAll(".player").forEach((elem) => {
    elem.classList.remove("shake");
  });
  document
    .querySelector("#player1")
    .removeEventListener("animationend", checkResult);

  document.querySelector("#player1").classList.add(player_choice);
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
