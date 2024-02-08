const data = [
    {
        id: 1,
        image: '../img/01.jpg'
    },
    {
        id: 2,
        image: '../img/02.jpg'
    },
    {
        id: 3,
        image: '../img/03.jpg'
    },
    {
        id: 4,
        image: '../img/04.jpg'
    },
    {
        id: 5,
        image: '../img/05.jpg'
    },
    {
        id: 6,
        image: '../img/06.jpg'
    },
    {
        id: 7,
        image: '../img/07.jpg'
    },
    {
        id: 8,
        image: '../img/08.jpg'
    },
    {
        id: 9,
        image: '../img/09.jpg'
    },
    {
        id: 10,
        image: '../img/10.jpg'
    },
    {
        id: 11,
        image: '../img/11.jpg'
    },
    {
        id: 12,
        image: '../img/12.jpg'
    },
    {
        id: 13,
        image: '../img/13.jpg'
    },
]
function countToStart() {
    let tempArray = [];
    let dataArray = [];
    let cloneArray = [];
    document.querySelector(".first-row").innerHTML =""
    document.querySelector(".second-row").innerHTML =""
    while (tempArray.length < 8) {
        let key = Math.floor(Math.random() * 13)
        if (!tempArray.includes(key)) {
            tempArray.push(key)
        }
    }
    console.log(tempArray);
    for (let i = 0; i < tempArray.length; i++) {
        dataArray.push(data[tempArray[i]].image);
    }
    console.log(dataArray);
    tempArray = [];
    while (tempArray.length < 8) {
        let key = Math.floor(Math.random() * 8)
        if (!tempArray.includes(key)) {
            tempArray.push(key)
        }
    }
    console.log(tempArray);
    for (let i = 0; i < tempArray.length; i++) {
        cloneArray.push(dataArray[tempArray[i]]);
    }
    console.log(cloneArray);
    renderResult(dataArray, cloneArray);
}
function renderResult(dataArray, cloneArray) {
    for (let i = 0; i < dataArray.length; i++) {
        document.querySelector(".first-row").innerHTML += `
        <div class="card " data-id="${i}">
            <div class="box-fliped js-box-flip"  id="js-game-${i}">
                <div class="front">
                    <p class="flip">click to flip</p>
                </div>
                <div class="back">
                    <img src="${dataArray[i]}" alt="">
                </div>
            </div>
        </div>
        `;
        document.querySelector(".second-row").innerHTML += `
        <div class="card " data-id="${i+8}">
            <div class="box-fliped js-box-flip"  id="js-game-${i+8}">
                <div class="front">
                    <p class="flip">click to flip</p>
                </div>
                <div class="back">
                    <img src="${cloneArray[i]}" alt="">
                </div>
            </div>
        </div>
        `;
    }
    let time = document.querySelector(".time-input").value
    setTimeout(() => {
        unFlipAll();
        attachEventListener();
    }, time*1000);
}
function attachEventListener() {
    document.querySelectorAll(".js-box-flip").forEach(element =>{
        element.addEventListener("click",()=>{
            element.classList.replace("box","box-fliped");
            flipGame.init(element.innerHTML);
        })
    })
}
function flipAll() {
    document.querySelectorAll(".js-box-flip").forEach(element => {
        element.classList.replace("box","box-fliped")
    });
}
function unFlipAll() {
    document.querySelectorAll(".js-box-flip").forEach(element => {
        element.classList.replace("box-fliped","box");
    });
}
function unFlip(targetDiv) {
    targetDiv.classList.replace("box-fliped","box");
}
const flipGame={
    winArray:[],
    init:function (element) {
        this.winArray.push(element)
        if (this.winArray.length===2) {
            if (this.winArray[0]===this.winArray[1]) {
                alert('correct');
            }else{
                unFlip()
            }
        }
    }
}
