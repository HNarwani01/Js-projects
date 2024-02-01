const ticTakToe = {
    turnCheck:'X' ,
    toBecontinued:true,
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
    init:function () {
        this.divbox.forEach(value=>{
            value.addEventListener('click', ()=>{
                    if (!this.toBecontinued) {
                        return;
                    }  
                    let dataValue =  value.dataset.id;
                    let targetdiv = document.querySelector(`#js-input-${dataValue}`);
                    this.renderMove(targetdiv);
                    
                });
                
            })
    },
    renderMove:function (targetdiv) {
        if (targetdiv.innerHTML==='') {
            targetdiv.innerHTML = this.turnCheck;
            let value = (this.turnCheck==='X')?'O':'X';
            this.turnCheck = value;
            this.checkWinner()
            this.showWinner()
        } else {
            alert('this block is already filled')
        }    
    },
    checkWinner:function () {
        let yourmove = [];
        this.divbox.forEach(val=>{
            yourmove.push(val.innerHTML)
        })
        this.winarray.forEach(arr=>{
            if (yourmove[arr[0]]===yourmove[arr[1]]&&yourmove[arr[1]]===yourmove[arr[2]]&&yourmove[arr[0]]!=="") {
                this.toBecontinued = false
            }
        })
    },
    showWinner:function () {
        if (!this.toBecontinued) {
            document.querySelector('.result').innerHTML = (`${(this.turnCheck==='O')?'X':'O'} wins`)
        }
    }
}

ticTakToe.init();