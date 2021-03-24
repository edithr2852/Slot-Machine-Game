/*----- constants -----*/
//the status of the game set to null, results set to null, winning choices (you win the lottery game is over or you bet and bet until you lose all of your money), start button, the initial betting amount, different images (these will be the different outcomes that the slot machine will randomize.), the different section of the slot machine. 

let slotSymbols = {
   imgOne: 'img/Bell.jpeg', 
   imgTwo: 'img/Bomb.jpeg', 
   imgThree: 'img/Cherry.jpeg', 
   imgFour: 'img/Clover.jpeg', 
   imgFive: 'img/Diamond.jpeg', 
   imgSix: 'img/Dragon.jpeg', 
   imgSeven: 'img/Heart.jpeg', 
   imgEight: 'img/Horseshoe.jpeg', 
   imgNine: 'img/Jackpot.jpeg', 
   imgTen: 'img/Jackpot.jpeg', 
   imgEleven: 'img/Seven.jpeg', 
   imgTwelve: 'img/Strawberry.jpeg'
}



// const spinner = '';



const winAudio = new Audio('file:///Users/edithrodriguez/Music/Music/Media.localized/Unknown%20Artist/Unknown%20Album/slot-machine-sound-effect.mp3');
const spinAudio = new Audio('file:///Users/edithrodriguez/Music/Music/Media.localized/SFX%20Producer/Unknown%20Album/Casino%20Slot%20Machine%2017.mp3');


/*----- app's state (variables) -----*/
//the results, the betting amount as you lose money

let spinResult, lotteryWinner;

/*----- cached element references -----*/
//html elements that will be manipulated - the different images that will get randomized.

const gameResults = document.querySelector('h2');
const firstDiv = document.getElementById('#first');
const secondDiv = document.getElementById('#second');
const thirdDiv = document.getElementById('#third');

let slotOne = getRandomSymbols(Object.values(slotSymbols));
console.log(slotOne)
let slotTwo = getRandomSymbols(Object.values(slotSymbols));
console.log(slotTwo)
let slotThree = getRandomSymbols(Object.values(slotSymbols));
console.log(slotThree)


/*----- event listeners -----*/
// will add event listener to the "button" to spin the slot machine

document.querySelector('div button').addEventListener("click", spin);

/*----- functions -----*/

function initialize() {
    //start message // 
    spinResult = {
    firstDiv: '',
    secondDiv: '',
    thirdDiv: '',
    }
    lotteryWinner = null 
    spin();
    
}

function getRandomSymbols() {
    return Math.floor(Math.random() * 12)
}

function spin() {
    spinAudio.play();
    slotOne = getRandomSymbols(Object.values(slotSymbols));
console.log(slotOne)
    slotTwo = getRandomSymbols(Object.values(slotSymbols));
console.log(slotTwo)
    slotThree = getRandomSymbols(Object.values(slotSymbols));
console.log(slotThree)
    render()
}



function getWinner () {
    if(firstDiv === 'img/Jackpot.jpeg' && secondDiv === 'img/Jackpot.jpeg' && thirdDiv === 'img/Jackpot.jpeg') {
        winAudio.play();
        return gameResults; 
    } else {
        return spinResult;
    }
    spin()
}


function render(getRandomSymbols) {
firstDiv.style.backgroundImage = `url(${slotSymbols[slotOne].imgOne})`;
SecondDiv.style.backgroundImage = `url(${slotSymbols[imgTwo].imgTwo})`;
ThirdDiv.style.backgroundImage = `url(${slotSymbols[imgThree].imgThree})`;

gameResults.innerText = 'You won the lottery!'

}


//    firstDiv.addEventListener('animationend', () => {
//    });
//    secondtDiv.addEventListener('animationend', () => {
//     });
//    thirdDiv.addEventListener('animationend', () => {
//     }); 

initialize();