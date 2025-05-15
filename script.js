const number = document.querySelector(".number");
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const scoreSpan = document.querySelector(".score");
const highScoreSpan = document.querySelector(".highscore");
const body = document.querySelector("body");

let score = 20;
let highscore = 0;
const randomNumber = Math.ceil(Math.random() * 20);

const displayMessage = (msg) => {
  const message = document.querySelector(".message");
  message.innerHTML = msg;
};

const checkGuess = () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === randomNumber) {
    displayMessage("🎉 Correct number!");
    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    number.innerHTML = randomNumber;

    if (score > highscore) {
      highscore = score;
      highScoreSpan.innerHTML = highscore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? "Too high!" : "Too low!");
      score--;
      scoreSpan.innerHTML = score;
    } else {
      displayMessage("💔 You lost the game!");
      scoreSpan.innerHTML = 0;
      body.style.backgroundColor = "#8b0000";
    }
  }
};

const restartGame = () => {
  score = 20;
  const randomNumber = Math.ceil(Math.random() * 20);
  displayMessage("Start guessing...");
  scoreSpan.innerHTML = score;
  number.innerHTML = "?";
  document.querySelector(".guess").value = "";

  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
};

btnCheck.addEventListener("click", checkGuess);
btnAgain.addEventListener("click", restartGame);
