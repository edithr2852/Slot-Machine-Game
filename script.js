/*----- constants -----*/
//the status of the game set to null, results set to null, winning choices (you win the lottery game is over or you bet and bet until you lose all of your money), start button, the initial betting amount, different images (these will be the different outcomes that the slot machine will randomize.), the different section of the slot machine. 

const slotSymbols = {
    firstSlot: 'img/Bell.jpeg',
    secondSlot: 'img/Bomb.jpeg',
    thirdSlot: 'img/Cherry.jpeg',
    fourthSlot: 'img/Clover.jpeg',
    fifthSlot: 'img/Diamond.jpeg',
    sixthSlot: 'img/Dragon.jpeg',
    seventhSlot: 'img/Heart.jpeg',
    eighthSlot: 'img/Horseshoe.jpeg',
    ninthSlot: 'img/Jackpot.jpeg',
    tenthSlot: 'img/Moneybag.jpeg',
    eleventhSlot: 'img/Seven.jpeg',
    twelthSlot: 'img/Strawberry.jpeg', 
}



// const spinner = '';



const winAudio = new Audio('https://soundcloud.com/professional-sound-effects-group/winning-slot-machine');
const spinAudio = new Audio( 'https://soundcloud.com/lavs-test/slot-machine-reel-spin-test' );
const backgroundAudio = new Audio ('https://soundcloud.com/search?q=retro%20casino%20slot%20machine');

/*----- app's state (variables) -----*/
//the results, the betting amount as you lose money

let spinResult, lotteryWinner;

/*----- cached element references -----*/
//html elements that will be manipulated - the different images that will get randomized.

const gameResults = document.querySelector('h2');
const firstDiv = document.getElementById('#first')
const secondDiv = document.getElementById('#second')
const thirdDiv = document.getElementById('#third')

// const winningCombo = [ 
//     [firstDiv = 'img/Jackpot.jpeg'],
//     [secondDiv = 'img/Jackpot.jpeg'],
//     [thirdDiv = 'img/Jackpot.jpeg'],
// ];

// console.log(winningCombo);

/*----- event listeners -----*/
// will add event listener to the "button" to spin the slot machine

// document.querySelector('div button').addEventListener('click', spin) => {
//     console.log('clicked'); };

document.querySelector('div button').addEventListener("click", spin() => {
        console.log("You knocked?");
      });

/*----- functions -----*/
//function that will create random slot outcomes
//initialize function to start game (which will then prompt you to place a bet then spin then win or lose). 
//function to place bet that will deduct from the "money" you have- if you lose and function that will give you money if you win.
//function so you can spin-
//Winner function (did player win the lottery yes or no? if no keep going until you win or lose all your money.)
//render function for any changes I may implement in my slot game (for ex: the balance of the player)
//function that will provide the spin when to start or how long to delay. 


function initialize() {
    //start message // 
    spinResult = {
    firstDiv: 'img/Bell.jpeg',
    secondDiv: 'img/Bomb.jpeg',
    thirdDiv: 'img/Cherry.jpeg',
    }
    lotteryWinner = null 
    render();
}

function getRandomSymbols() {
    return Math.floor(Math.random() * 12);
}

function spin() {
    spinAudio.play();
    spinner = slotSymbols[getRandomSymbols()];
    winner = getWinner(); 
    // render()
}

function getWinner () {
    if(firstDiv === 'img/Jackpot.jpeg' && secondDiv === 'img/Jackpot.jpeg' && thirdDiv === 'img/Jackpot.jpeg') {
        return gameResults; 
    } else {
        return gameResults;
    }
    spin()
}


function render() {
    //add an event listener that will 
    firstDiv.innerHTML = 'getRandomSymbols';
    secondDiv.innerHTML = 'getRandomSymbols';
    thirdDiv.innerHTML = 'getRandomSymbols';
}

initialize();