/*
<!-- for cross -->
    <!-- <div class="cross">
        <div class="one"></div>
        <div class="two"></div>
    </div> -->
    <!-- for circle -->
    <!-- <div class="circle">
        <div class="outer">
            <div class="inner">

            </div>
        </div>
    </div> -->
*/

/*
let movewatcher = 1
let divbox = document.querySelectorAll('.input');
divbox.forEach(val => {
    val.addEventListener('click', () => {
        // alert('you just clicked a box')
        let dataValue = val.dataset.id;
        movewatcher++;
        console.log(movewatcher);
        let targetdiv = document.querySelector(`#js-input-${dataValue}`)
        let output = ((movewatcher % 2 == 0) ? 'cross' : 'circle')
        console.log(output)
        renderMove(targetdiv, output)
        checkWin()
    })
})
function renderMove(targetdiv, output,) {
    if ((targetdiv.innerHTML === null || targetdiv.innerHTML === undefined || targetdiv.innerHTML === '')) {
        if (output === 'cross') {
            targetdiv.innerHTML = `
            <div class="cross">
            <div class="one"></div>
            <div class="two"></div>
        </div>
            `

        } else if (output === 'circle') {
            targetdiv.innerHTML = `
            <div class="circle">
            <div class="outer">
                <div class="inner">
    
                </div>
            </div>
        </div>
            `
        } else {
            alert('error');
        }
    } else {
        alert('cant fill another time');
    }
}
let winarray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let winnerFound = false;
function checkWin() {
    let newarray = [];
    divbox.forEach(val => {
        newarray.push(val.innerHTML);
    });


    outerloop: winarray.forEach(e => {
        if (newarray[e[0]] === newarray[e[1]] && newarray[e[1]] === newarray[e[2]] && newarray[e[0]] !== '') {
            console.log("Player wins!");
            winnerFound = true;
            // Break the outer loop when a winner is found
        }
    });

    if (!winnerFound) {
        console.log('No one wins.');
    }
}
*/
const TicTacToe = {
    movewatcher: 1,
    divbox: document.querySelectorAll('.input'),
    winnerFound: false,
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
        this.divbox.forEach(val => {
            val.addEventListener('click', () => {
                this.handleMove(val);
            });
        });
    },

    handleMove: function (val) {
        let dataValue = val.dataset.id;
        this.movewatcher++;
        console.log(this.movewatcher);
        let targetdiv = document.querySelector(`#js-input-${dataValue}`);
        let output = (this.movewatcher % 2 === 0) ? 'cross' : 'circle';
        console.log(output);
        this.renderMove(targetdiv, output);
        // let result = this.checkWin();
        if (this.winnerFound) {
            alert(`${output} wins`);
        } else {
            console.log('no one wins');
        }
    },

    renderMove: function (targetdiv, output) {
        if (!targetdiv.innerHTML.trim()) {
            if (output === 'cross') {
                targetdiv.innerHTML = `
                    <div class="cross">
                        <div class="one"></div>
                        <div class="two"></div>
                    </div>
                `;
            } else if (output === 'circle') {
                targetdiv.innerHTML = `
                    <div class="circle">
                        <div class="outer">
                            <div class="inner"></div>
                        </div>
                    </div>
                `;
            } else {
                console.error('Invalid output type');
            }
        } else {
            alert('Cannot fill another time');
        }
    },

    checkWin: function () {
        let newarray = [];
        this.divbox.forEach(val => {
            newarray.push(val.innerHTML);
        });

        outerloop: this.winarray.forEach(e => {
            if (newarray[e[0]] === newarray[e[1]] && newarray[e[1]] === newarray[e[2]] && newarray[e[0]] !== '') {
                console.log("Player wins!");
                this.winnerFound = true;
                // Break the outer loop when a winner is found
                return winnerFound;
            }
        });

        if (!this.winnerFound) {
            console.log('No one wins.');
        }
        return this.winnerFound;
    }
    // return this.winnerFound;
};


// Initialize the Tic Tac Toe game
TicTacToe.init();

