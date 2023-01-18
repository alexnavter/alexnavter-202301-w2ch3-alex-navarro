

let turns = 0;
let line = false;

let playerList = [
    { player: 'Will Smith',        points: 270 },
    { player: 'Ed Sheeran',        points: 330 },
    { player: 'Donald Trump',      points: 140 },
    { player: 'Elon Musk',         points: 390 },
]

let newPlayer = { player: '',                 points: 0 };

let maxPoints = 1000;

const startBingo = () => {
    var userName = prompt(
      ` Welcome to ISDI BINGO!\n
        Please, enter your name: `
    );
    if (userName === '' || userName === ' ') {
        alert(`Please enter your name or press CANCEL to exit.`);
        startBingo();
    } else if (userName === null) {
        alert(`Bye! See you soon!`);
        return;
    } else {
        alert(`Hello there: ${userName}.\nPress OK to start check the rules.`);
        alert(
        `   You get ${maxPoints} points at the start.\n
            Each round will substract -10 from your points.\n
            There are 70 numbers in the game.\n 
            You will make it to the raking if you complete the BINGO.\n
            Press OK to start. Enjoy! `
        );
        newPlayer.player = userName;
        newPlayer.points = maxPoints;
        getCard();
    }
}

let userCard = [];
const getCard = () => {
    for (var i = 0; userCard.length < 15; i++) {
        
        const randomNum = getRandomNum();
        if (!userCard.includes(randomNum)){
            userCard.push(randomNum);
        }
    }
    sortCardNums();
    logCardConsole();
    
    let userCardisOK = confirm(`
        Is this card OK for you? \n
        Press Accept to continue. \n
        Press Cancel to generate a new card.`);

    if (userCardisOK){
        spinBall();
    } else {
        userCard = [];
        getCard();
    }
}


let ballNumbersAcc = [];
const spinBall = () => {

    let ballNumber = getRandomBallNumber();
    
    let getNumber = confirm(`Get a number?`);
    
    if (getNumber != true){
        alert(`See you next time!`);
        return;
    } else {    
        
        console.log(`The ball number is : ${ballNumber}`);
        console.log(`The balls out are: ${ballNumbersAcc}`);
        
        checkNumberInCard(ballNumber);
        checkLine();
        checkBingo();
    } 
}

let matchingBalls = 0;
const checkNumberInCard = (ballNumber) => {
    
    if (userCard.includes(ballNumber)){
        console.log('Congrats! You got this number!');
        for (let i = 0; i < userCard.length; i++) {          
            if (ballNumber === userCard[i]) {
                userCard[i] = '▅';
                matchingBalls += 1;
            }
        }
    } else {
        console.log('Sorry! This number is not in your card... Keep trying!');
    }
    logCardConsole();
}

const checkBingo = () => {
    let matchingBalls = 0;
    for (i = 0; i < userCard.length; i++){
        if (userCard[i] === '▅') {
            matchingBalls ++;
        }
    }
    
    if ((matchingBalls === 15)) {
        score();
        console.log (`
                ¡¡¡ BINGO !!! \n
                ¡Congratulations!.\n
            You made it in: ${turns} rounds.\n
            Your final score is: ${newPlayer.points}.`
        );
        console.log(`This is the RANKING:`)
        ranking();
        playAgain();
    } else {
        turns++;
        spinBall();
    }
}

const playAgain = () => {
    
    let askPlayAgain = prompt(`Another BINGO game? (y/n)`);
    
    switch (askPlayAgain){
        case "y":     
            userCard = [];
            ballNumbersAcc = [];
            turns = 0;
            line = false;
            newPlayer.points = 1000;
            startBingo();
        break;
        
        case "n":
            alert(`BYE BYE. See you next time!`);
        break;
        default:
            alert(`Please, type 'y' or 'n' to continue.`);
            playAgain();
    } 
}

const checkLine = () => {
    if (!line){
    
        for(let i = 0; i < userCard.length; i++){
            
            if(userCard[0] === '▅' && userCard[1] === '▅' && userCard[2] === '▅' && userCard[3] === '▅' && userCard[4] === '▅'){
                console.log(`You got LINE! in the 1st row.`);
                line = true;
                break;
            }
            if(userCard[5] === '▅' && userCard[6] === '▅' && userCard[7] === '▅' && userCard[8] === '▅' && userCard[9] === '▅'){
                console.log(`You got LINE! in the 2nd row.`);
                line = true;
                break;
            }
            if(userCard[10] === '▅' && userCard[11] === '▅' && userCard[12] === '▅' && userCard[13] === '▅' && userCard[14] === '▅'){
                console.log(`You got LINE! in the 3rd row.`);
                line = true;
                break;
            }
        }
    }
}

const getRandomNum = () => {
    return Math.floor(Math.random() * 69) + 1;
}

const getRandomBallNumber = () => {
    let randomNum = Math.floor(Math.random() * 69) + 1;
    randomNum = Number(randomNum);
    
    if (!ballNumbersAcc.includes(randomNum)){
        ballNumbersAcc.push(randomNum)
        return randomNum;
    } else {
        return getRandomBallNumber();
    }
}

const sortCardNums = () => {
    userCard.sort((a,b) => a - b);
}

const logCardConsole = () => {
    
    let sortedCard = userCard.sort((a,b) => a - b);

    let line1 = sortedCard.slice(0,5)
    let line2 = sortedCard.slice(5,10)
    let line3 = sortedCard.slice(10,15)
    
    console.log(`${line1}\n${line2}\n${line3}`);
}

const score = () => {
    newPlayer.points = (maxPoints - (turns * 10));
    return newPlayer.points;
}

const ranking = () => {
    playerList.push({
        player: newPlayer.player,
        points: newPlayer.points,
    })
    playerList.sort((a,b) => (a.points < b.points) ? 1 : -1)
    for (i = 0; i < playerList.length; i++){
        console.log(playerList[i]);
    }
}

startBingo();




