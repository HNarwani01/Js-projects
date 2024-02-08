const data=[
    {
        id: 1,
        image:'../img/01.jpg'
    },
    {
        id: 2,
        image:'../img/02.jpg'
    },
    {
        id: 3,
        image:'../img/03.jpg'
    },
    {
        id: 4,
        image:'../img/04.jpg'
    },
    {
        id: 5,
        image:'../img/05.jpg'
    },
    {
        id: 6,
        image:'../img/06.jpg'
    },
    {
        id: 7,
        image:'../img/07.jpg'
    },
    {
        id: 8,
        image:'../img/08.jpg'
    },
    {
        id: 9,
        image:'../img/09.jpg'
    },
    {
        id:10,
        image:'../img/10.jpg'
    },
    {
        id:11,
        image:'../img/11.jpg'
    },
    {
        id:12,
        image:'../img/12.jpg'
    },
    {
        id:13,
        image:'../img/13.jpg'
    },
]
const createImages={
    a:0,
    temparray:[],
    dataArray:[],
    cloneArray:[],
    generate:function () {
        while(this.a<8){
            let randomNumber = Math.floor(Math.random()*13);
            if(!this.temparray.includes(randomNumber)){
                this.temparray.push(randomNumber);
                this.a++
            }
        }
        this.a=0;
        for(let i=0;i<8;i++){
            this.dataArray.push(data[this.temparray[i]].image)
        }
        while(this.a<8){
            let key = Math.floor(Math.random()*9)
            if(!this.cloneArray.includes(key)){
                this.cloneArray.push(key);
                this.a++;
            }
        }
        console.log("generate done");
    },
    attachEventListeners: function() {
        const cards = document.querySelectorAll(".js-box-flip");
        cards.forEach(element => {
            element.addEventListener("click", () => {
                let datavalue = element.dataset.id;
                let flipDiv = document.querySelector(`#js-game-${datavalue}`);
                flipGame.flip(flipDiv);
                flipGame.winCheck(flipDiv);
            });
        });
        console.log("Event listeners attached");
    },
    rendercards:function (nth) {
        for (let i = 0; i < nth; i++) {
            document.querySelector(".first-row").innerHTML +=`
            <div class="card js-box-flip" data-id="${i}">
                <div class="box "  id="js-game-${i}">
                    <div class="front">
                        <p class="flip">click to flip</p>
                    </div>
                    <div class="back">
                        <img src="${this.dataArray[i]}" alt="">
                    </div>
                </div>
            </div>
            `   
            console.log(`${this.dataArray[i]}`);
        }
        console.log("rendercareds-done");
        this.attachEventListeners();
    },
    renderCards:function (nth) {//for printing second line
        for (let i = 0; i < nth; i++) {
            document.querySelector(".second-row").innerHTML +=`
            <div class="card js-box-flip" data-id="${i+8}">
                <div class="box "  id="js-game-${i+8}">
                    <div class="front">
                        <p class="flip">click to flip</p>
                    </div>
                    <div class="back">
                        <img src="${this.dataArray[this.cloneArray[i]]}" alt="">
                    </div>
                </div>
            </div>
            `  
            console.log(`${this.dataArray[this.cloneArray[i]]}`) ;
        }
        console.log("rednderCards done");
        this.attachEventListeners();
    }
    
}


function countToStart() {
    let time = document.querySelector('.time-input').value;
    createImages.generate();
    createImages.rendercards(8);
    createImages.renderCards(8);
    createImages.attachEventListeners();
    

    alert("game starting now");
    setTimeout(() => {
        // alert(`Game starts now`);
        document.querySelector('.time-input').value="";
        flipGame.unFlipAll();
        flipGame.init();
      }, time*1000);
    setTimeout(() => {
        flipGame.flipAll();

    }, 500);
      
}
function countToStartNext() {
    
}

const flipGame = {
    targetDiv:document.querySelectorAll(".js-box-flip"),
    tempArray:[],//for storing temp values in array
    init:function () {
        this.targetDiv.forEach(element=>{
            element.addEventListener("click",()=>{
                let datavalue = element.dataset.id;
                let flipDiv = document.querySelector(`#js-game-${datavalue}`);
                this.flip(flipDiv);
                this.winCheck(flipDiv);
                
            })
        })
    },
    flip:function (flipDiv) {
        // flipDiv.classList.remove("");
        // flipDiv.classList.add("");
        if(flipDiv.classList.contains("box")){
            flipDiv.classList.replace("box","box-fliped")
        }
    },
    winCheck: function (flipDiv) {
        this.tempArray.push(flipDiv.innerHTML);
        console.log(this.tempArray);
        if (this.tempArray.length===2) {
            if (this.tempArray[0]===this.tempArray[1]) {
                console.log("you win");
            } else {
                console.log("you lose");
                this.tempArray=[];
            }
        }
    },
    flipAll:function () {
        this.targetDiv.forEach(element=>{
            let datavalue = element.dataset.id;
                let flipDiv = document.querySelector(`#js-game-${datavalue}`);
                this.flip(flipDiv);
        })
        console.log("cards flipping now");
    },
    unFlip:function name(flipDiv) {
        if(flipDiv.classList.contains("box-fliped")){
            flipDiv.classList.replace("box-fliped","box")
        }
    },
    unFlipAll:function () {
        this.targetDiv.forEach(element=>{
            let datavalue = element.dataset.id;
                let flipDiv = document.querySelector(`#js-game-${datavalue}`);
                this.unFlip(flipDiv);
        })
    }
}
// radom element function data => 8 values
//up =8 element shuffle new array 8 element


