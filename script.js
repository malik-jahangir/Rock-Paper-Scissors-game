"use strict";
const body = document.querySelector("body");
const rulesbtn = document.querySelector(".rules-btn");
const rulescontainer = document.querySelector(".rules-container");
const rulesclose = document.querySelector(".close");
const rulesbox = document.querySelector(".rules-box");
const paper = document.querySelector(".paper-btn");
const scissors = document.querySelector(".scissor-btn");
const rock = document.querySelector(".rock-btn");
const buttonContainer = document.querySelector(".button-container");
const resultContainer = document.querySelector(".result-container");
const pImg = document.querySelector(".pick-img-p");
const cImg = document.querySelector(".pick-img-c");
const pickContainerP = document.querySelector(".pick-img-container-p");
const pickContainerC = document.querySelector(".pick-img-container-c");
const resultText = document.querySelector(".result-text");
const result = document.querySelector("#result");
const playAgain = document.querySelector("#play-again");
const scoreNum = document.querySelector(".score-num");

// rules show/hide
rulesbtn.addEventListener("click", () => {
  rulescontainer.classList.toggle("display-none");

  document.addEventListener("click", () => {
    if (event.target.contains(rulescontainer)) {
      rulescontainer.classList.add("display-none");
    }
  });

  rulesclose.addEventListener("click", () => {
    rulescontainer.classList.add("display-none");
  });
});
///////////////
let score = 0;
let computer;
let player;
const choices = ["rock", "paper", "scissors"];
const rand = function () {
  computer = Math.floor(Math.random() * 3) + 1;
};


const phase1 = function () {
  pickContainerC.classList.add("img-hidden");
  resultText.classList.add("display-none");
};
const phase2 = function () {
  pickContainerC.classList.remove("img-hidden");
  resultText.classList.remove("display-none");
};
const userUpdateImg = function () {
  const z = choices[player - 1];
  pImg.src = `images/icon-${z}.svg`;
  pickContainerP.classList.add(`pick-img-container-${z}`);
};

const compare = function (computer, player) {
  if ((computer - player + 5) % 3 === 0) {
    result.innerHTML = "You Lose";
    score--;
  } else if ((computer - player + 5) % 3 === 1) {
    result.innerHTML = "You Win";
    score++;
  } else {
    result.innerHTML = "Draw";
  }
};

const init = function () {
  rand();
  if (this == rock) {
    player = 1;
  } else if (this == paper) {
    player = 2;
  } else if (this == scissors) {
    player = 3;
  }


  buttonContainer.classList.add("display-none");
  resultContainer.classList.remove("display-none");
  userUpdateImg();
  phase1();
  setTimeout(phase2, 500);

  cImg.src = `images/icon-${choices[computer - 1]}.svg`;
  pickContainerC.classList.add(`pick-img-container-${choices[computer - 1]}`);
  compare(computer, player);
  scoreNum.innerHTML = score;
};
const again = function () {
  buttonContainer.classList.remove("display-none");
  resultContainer.classList.add("display-none");
  choices.forEach((element) =>
    pickContainerP.classList.remove(`pick-img-container-${element}`)
  );
  choices.forEach((element) =>
    pickContainerC.classList.remove(`pick-img-container-${element}`)
  );
};
[rock,paper,scissors].forEach((element)=>(element.addEventListener("click", init)));
playAgain.addEventListener("click", again);