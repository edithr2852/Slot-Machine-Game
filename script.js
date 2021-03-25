/*----- constants -----*/

let slotSymbols = [
  { img: "img/Bell.jpeg" },
  { img: "img/Bomb.jpeg" },
  { img: "img/Cherry.jpeg" },
  { img: "img/Clover.jpeg" },
  { img: "img/Diamond.jpeg" },
  { img: "img/Dragon.jpeg" },
  { img: "img/Heart.jpeg" },
  { img: "img/HorseShoe.jpeg" },
  { img: "img/Jackpot.jpeg" },
  { img: "img/Moneybag.jpeg" },
  { img: "img/Seven.jpeg" },
  { img: "img/Strawberry.jpeg" },
];

const winAudio = new Audio(
  "audio/win.mp3"
);
const spinAudio = new Audio(
  "audio/Spin.mp3"
);

/*----- app's state (variables) -----*/
//the results, the betting amount as you lose money

let win;

/*----- cached element references -----*/
//html elements that will be manipulated - the different images that will get randomized.

const winResults = document.querySelector("#winner");
const gameResults = document.querySelector("#spinAgain");
const firstDiv = document.querySelector("#first img");
const secondDiv = document.querySelector("#second img");
const thirdDiv = document.querySelector("#third img");

/*----- event listeners -----*/
// will add event listener to the "button" to spin the slot machine

document.querySelector("div button").addEventListener("click", spin);

/*----- functions -----*/

function initialize() {
  win = null;
  render();
}

function getRandomSymbols() {
  let randomIdx = Math.floor(Math.random() * slotSymbols.length);
  let randomSymbol = slotSymbols[randomIdx];
  // console.log(randomSymbol)
  return randomSymbol;
}

function spin() {
  spinAudio.play();
  render();
  win = checkWin();
}

function checkWin() {
  console.log(firstDiv.src);
  if (firstDiv.src === secondDiv.src && secondDiv.src === thirdDiv.src) {
    winAudio.play();
    return (gameResults.innerText = "You won the lottery!");
  } else {
    return (gameResults.innerText = "You lost, spin Again!");
  }
}

function render() {
  firstDiv.src = getRandomSymbols().img;
  secondDiv.src = getRandomSymbols().img;
  thirdDiv.src = getRandomSymbols().img;
}

//    firstDiv.addEventListener('animationend', () => {
//    });
//    secondtDiv.addEventListener('animationend', () => {
//     });
//    thirdDiv.addEventListener('animationend', () => {
//     });

initialize();

//icebox - make machine look like an actual slot machine
//icebox - give images animation
