const ticTakToe = {
    turnCheck: 'X',
    toBecontinued: true,
    winner:'',
    score: {
        winX: 0,
        winO: 0,
        wintie: 0
    },
    divbox: document.querySelectorAll('.input'),
    winarray: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],
    init: function () {
        this.divbox.forEach(value => {
            value.addEventListener('click', () => {
                if (!this.toBecontinued) {
                    return;
                }
                let dataValue = value.dataset.id;
                let targetdiv = document.querySelector(`#js-input-${dataValue}`);
                this.renderMove(targetdiv);

            });

        })
    },
    renderMove: function (targetdiv) {
        if (targetdiv.innerHTML === '') {
            targetdiv.innerHTML = this.turnCheck;
            let value = (this.turnCheck === 'X') ? 'O' : 'X';
            this.turnCheck = value;
            this.checkWinner()
            this.showWinner()
        } else {
            alert('this block is already filled')
        }
    },
    checkWinner: function () {
        let yourmove = [];
        this.divbox.forEach(val => {
            yourmove.push(val.innerHTML)
        })
        this.winarray.forEach(arr => {
            if (yourmove[arr[0]] === yourmove[arr[1]] && yourmove[arr[1]] === yourmove[arr[2]] && yourmove[arr[0]] !== "") {
                this.toBecontinued = false
            }
        })
    },
    showWinner: function () {
        if (!this.toBecontinued) {
            // this.winner = (this.turnCheck === 'O') ? 'X' : 'O';
            if (this.turnCheck==='O') {
                this.winner='X';
            }else if(this.turnCheck==='X'){
                this.winner='O';
            }else{
                this.winner = 'tie'
            }
            this.score[`win${this.winner}`] ++;
            document.querySelector('.winner').innerHTML = (`${this.winner} wins`);
            this.renderScore();
            this.winner = ''
        }
        
    },
    renderScore:function () {
        document.querySelector('.result-X').innerHTML= this.score.winX;
        document.querySelector('.result-O').innerHTML= this.score.winO;
        document.querySelector('.result-tie').innerHTML= this.score.wintie;
        
    },
    resetScore: function () {
        this.score.winX = 0;
        this.score.wintie = 0;
        this.score.winO = 0;
        this.divbox.forEach(val=>{
            val.innerHTML ='';
        })
        this.toBecontinued = true;
        this.turnCheck = 'X'
        this.winner='';
        document.querySelector('.winner').innerHTML=''
        this.renderScore()
    },
    playAgain:function () {
        this.divbox.forEach(val=>{
            val.innerHTML ='';
        })
        this.toBecontinued = true;
        this.turnCheck = 'X'
        this.winner='';
    }
}

ticTakToe.init();