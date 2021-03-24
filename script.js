/*----- constants -----*/
//the status of the game set to null, results set to null, winning choices (you win the lottery game is over or you bet and bet until you lose all of your money), start button, the initial betting amount, different images (these will be the different outcomes that the slot machine will randomize.), the different section of the slot machine. 

let slotSymbols = {
    imgOne: {
        img: 'img/Bell.jpeg', 
    }, 
    imgTwo: {
        img: 'img/Bomb.jpeg', 
    }, 
    imgThree: {
        img: 'img/Cherry.jpeg', 
    },
    imgFour: {
        img: 'img/Clover.jpeg', 
    },
    imgFive: {
        img: 'img/Diamond.jpeg', 
    },
    imgSix: {
        img: 'img/Dragon.jpeg', 
    },
    imgSeven: {
        img: 'img/Heart.jpeg', 
    },
    imgEight: {
        img: 'img/Horseshoe.jpeg', 
    }, 
    imgNine: {
        img: 'img/Jackpot.jpeg', 
    },
    imgTen: {
        img: 'img/Jackpot.jpeg', 
    },
    imgEleven: {
        img: 'img/Seven.jpeg', 
    },
    imgTwelve: {
        img: 'img/Strawberry.jpeg'
    },
 };
 
 
 
 // const spinner = '';
 
 
 
 const winAudio = new Audio('file:///Users/edithrodriguez/Music/Music/Media.localized/Unknown%20Artist/Unknown%20Album/slot-machine-sound-effect.mp3');
 const spinAudio = new Audio('file:///Users/edithrodriguez/Music/Music/Media.localized/SFX%20Producer/Unknown%20Album/Casino%20Slot%20Machine%2017.mp3');
 
 
 /*----- app's state (variables) -----*/
 //the results, the betting amount as you lose money
 
 let results, lotteryWinner;
 
 /*----- cached element references -----*/
 //html elements that will be manipulated - the different images that will get randomized.
 
 const winResults = document.querySelector('#winner');
 const gameResults = document.querySelector('#spinAgain');
 const firstDiv = document.querySelector('#first img');
 const secondDiv = document.querySelector('#second img');
 const thirdDiv = document.querySelector('#third img');
 
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
     results = {

     };
     lotteryWinner = null;
     render();
     
 }
 
 function getRandomSymbols() {
     return Math.floor(Math.random() * 12)
 }
 
 function spin() {
     spinAudio.play();
//      slotOne = getRandomSymbols(Object.values(slotSymbols));
// //  console.log(slotOne)
//      slotTwo = getRandomSymbols(Object.values(slotSymbols));
// //  console.log(slotTwo)
//      slotThree = getRandomSymbols(Object.values(slotSymbols));
// //  console.log(slotThree)
     render()
 }
 
 
 
 function getWinner () {
     if(firstDiv === 'img/Jackpot.jpeg' && secondDiv === 'img/Jackpot.jpeg' && thirdDiv === 'img/Jackpot.jpeg') {
         winAudio.play();
         return winResults; 
     } else {
         return gameResults;
         spin()
     }
     
 }
 
 
 function render(getRandomSymbols) {
    winResults.innerText = 'You won the lottery!'
    gameResults.innerText = 'You lost, spin Again!'

    firstDiv.src = (firstDiv.src === slotSymbols.imgOne.img) 



//  SecondDiv.style.backgroundImage = `url(${slotSymbols.img})`;
//  ThirdDiv.style.backgroundImage = `url(${slotSymbols.img})`;
 
 
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