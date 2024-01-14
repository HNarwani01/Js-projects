// Get the input element
var inputElement = document.getElementById("myInput");
    
// Add a keydown event listener
inputElement.addEventListener("keydown", function(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.keyCode === 13) {
        intodo()
    }
});
function moveTask(index) {
    let input = donetask.splice(index, 1);
    toDoTask.push(input[0]);  // Since splice returns an array, use [0] to get the first (and only) element
    renderdonelist();
}
let toDoTask = [];
let donetask =[];
const renderlist =()=>{
    let content_html =''
    for (let i = 0; i < toDoTask.length; i++) {
        content_html += `<br>
        <p class="insideElement">
            <button class="arrow" onclick="let input = toDoTask.splice(${i},1);intododone(input)"><i class="fa-solid fa-circle-right"></i></button>
            <label for="">${toDoTask[i]}</label>
        </p>`      
    }
    document.querySelector('.task-to-do').innerHTML =content_html
    
}
const intodo=()=>{
    task = document.querySelector('#myInput').value
    
    if(task==''){
        alert('please enter a task first')
    }else{
        toDoTask.push(task)
        document.querySelector('#myInput').value=''
        renderlist()
    }
}


const renderdonelist =()=>{
    let content_html =''
    for (let i = 0; i < donetask.length; i++) {
        content_html += `<br>
        <p class="insideElement">
            <button class="arrow" onclick="moveTask(${i})"><i class="fa-solid fa-circle-left"></i></button>
            <label for="">${donetask[i]}</label>
        </p>`      
    }
    document.querySelector('.task-done').innerHTML =content_html
    renderlist()
    
}
const intododone=(input)=>{
    task = input
    
    if(task==''){
        alert('please enter a task first')
    }else{
        donetask.push(task)
        renderdonelist()   
    }
}