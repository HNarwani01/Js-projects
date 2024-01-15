let score ={
    win : 0,
    lose:0,
    tie:0,
}
function playGame(move) {
    let playermove = move;
    console.log(`your move has been recorded and it is ${playermove}`)
    let computermove = getmove();
    console.log(`computer move has been recorded and it is ${computermove}`)
    
    let result = getresult(playermove,computermove)
    document.querySelector('.results').innerHTML = result
    renderResult(playermove,computermove)
}
function getmove() {
    let randomnumber = Math.random()
    console.log(`the random number is ${randomnumber}`)
    if (randomnumber <=1/3) {
        return 'Rock';
    }else if (randomnumber>1/3 && randomnumber<= 2/3){
        return 'Paper';
    }else{
        return 'Scissors';
    }
}
function getresult(human,bot) {
    if (human ==='Rock' && bot ==='Paper'|| human==='Paper'&& bot === 'Scissors' || human === 'Scissors' && bot ==='Rock') {
        score.lose ++;
        return 'you lose'
    } else if (human== bot){
        score.tie++
        return "It's a tie "
    }else{
        score.win ++
        return 'You win';
    }
}
function renderResult(human, bot) {
    let resultTemplate = `You <img src="./${human}-emoji.png" alt=""> <img src="./${bot}-emoji.png" alt=""> computer`;
    document.querySelector('.display-result').innerHTML = resultTemplate;
    let scoreTemplate = `Wins : ${score.win} , Loses : ${score.lose} , Ties : ${score.tie} `
    document.querySelector('.showTotalScore').innerHTML = scoreTemplate;
}
function resetscore() {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    document.querySelector('.display-result').innerHTML = '';
    document.querySelector('.showTotalScore').innerHTML ='';
    document.querySelector('.results').innerHTML= ''
}
let isplaying = false;
let myInterval;
function autoplay() {
    if (!isplaying) {
        setTimeout(() => {
            document.querySelector('.auto-play').innerHTML= 'playing...'
        }, 1000);
        myInterval = setInterval(() => {
            playermove = getmove();
            playGame(playermove);
        }, 1000);
        isplaying = true;
    }else{
        isplaying= false
        setTimeout(() => {
            clearInterval(myInterval)
        }, 1000);
        document.querySelector('.auto-play').innerHTML= 'auto play'
    }
}