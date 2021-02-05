// Rock, paper, scissors script
window.addEventListener("load", startGame);

let player_points = 0;
let ai_points = 0;
let round_nr = 0;

let player_choice;
let ai_choice;

function startGame() {
  document.querySelectorAll(".result").forEach((res) => {
    res.classList.add("hidden");
  });
  // Victory conditions
  if (player_points == 2) {
    document.querySelector("#victory").classList.remove("hidden");
  }
  if (ai_points == 2) {
    document.querySelector("#defeat").classList.remove("hidden");
  }
  // Remove figure classes from hands so they don't pile up!
  document.querySelector("#player1").classList.remove(player_choice);
  document.querySelector("#player2").classList.remove(ai_choice);
  document.querySelector("#gamefield").removeEventListener("click", startGame);
  round_nr++;
  console.log("Round " + round_nr + " has started!");
  // Add click events to all the buttons
  document.querySelectorAll("#buttons button").forEach((elem) => {
    elem.addEventListener("click", figureClicked);
  });
}

function figureClicked() {
  // console.log("Figure clicked");
  // this gets the element that was clicked
  let figure = this;
  // console.log(this);
  // Set player_choice variable to be equal to class name of buton clicked
  player_choice = this.getAttribute("class");
  console.log("You chose " + player_choice);
  // Add shake animation
  document.querySelectorAll(".player").forEach((elem) => {
    elem.classList.add("shake");
  });
  document.querySelector("#player1").addEventListener("animationend", checkResult);
}

function checkResult() {
  // console.log("The results are in!");
  document.querySelectorAll(".player").forEach((elem) => {
    elem.classList.remove("shake");
  });
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
    ai_choice = "scissors";
  }
  console.log("AI chose " + ai_choice);
  // Remove shake animationend event and the click events on the buttons
  document.querySelector("#player1").removeEventListener("animationend", checkResult);
  document.querySelectorAll("#buttons button").forEach((elem) => {
    elem.removeEventListener("click", figureClicked);
  });
  document.querySelector("#player1").classList.add(player_choice);
  document.querySelector("#player2").classList.add(ai_choice);
  // Find the winner
  if (player_choice == "rock" && ai_choice == "paper" || player_choice == "paper" && ai_choice == "scissors" || player_choice == "scissors" && ai_choice == "rock") {
    document.querySelector("#lose").classList.remove("hidden");
    ai_points++
  } else if (player_choice == ai_choice) {
    document.querySelector("#draw").classList.remove("hidden");
  } else {
    document.querySelector("#win").classList.remove("hidden");
    player_points++
  }
  console.log("Score is " + player_points + " vs " + ai_points + "!");
  setTimeout(startGame, 3000);
  document.querySelector("#gamefield").addEventListener("click", startGame);
}
