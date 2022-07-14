let resetButton = document.getElementById('reset')
let button16 = document.getElementById('16')
let button32 = document.getElementById('32')
let button64 = document.getElementById('64')
let container = document.querySelector('.grid-container')
let artBoard = container.querySelectorAll(':scope > .grid')

let buttonval = button16.value

console.log(buttonval)

//assign size selection to whichever button is pressed

button16.addEventListener('click', function(){
    clearGrid();
    let sizeSelection = button16.value;
    container.setAttribute('style', `grid-template-columns: repeat(${sizeSelection}, 2fr); grid-template-rows: repeat(${sizeSelection}, 2fr)`)
    for (i=1; i<=sizeSelection * sizeSelection; i++) {
        let square=document.createElement('div')
        square.classList.add('grid'); 
        square.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = "black";
        })
        container.appendChild(square)
   }
})

button32.addEventListener('click', function(){
    clearGrid();
    let sizeSelection = button32.value;
    container.setAttribute('style', `grid-template-columns: repeat(${sizeSelection}, 2fr); grid-template-rows: repeat(${sizeSelection}, 2fr)`)
    for (i=1; i<=sizeSelection * sizeSelection; i++) {
         let square=document.createElement('div')
         square.classList.add('grid'); 
         square.addEventListener('mouseover', function(event) {
             event.target.style.backgroundColor = "black";
         })
         container.appendChild(square)
    }
 })

 button64.addEventListener('click', function(){
    clearGrid();
    let sizeSelection = button64.value;
    container.setAttribute('style', `grid-template-columns: repeat(${sizeSelection}, 2fr); grid-template-rows: repeat(${sizeSelection}, 2fr)`)
    for (i=1; i<=sizeSelection * sizeSelection; i++) {
         let square=document.createElement('div')
         square.classList.add('grid'); 
         square.addEventListener('mouseover', function(event) {
             event.target.style.backgroundColor = "black";
         })
         container.appendChild(square)
    }
 })


    
resetButton.onclick = () => {
    clearGrid();
    defaultGrid();
}

function clearGrid() {
    container.style.gridTemplateColumns = ""
    container.style.gridTemplateRows = ""
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

//function changeSize() {
//    let val 
// }
//change the grid template rows and columns to selection

function defaultGrid() {
    let layout = 16;
    //container.setAttribute('style', `grid-template-columns: repeat(${layout}, 2fr)`, `grid-template-rows: repeat(${layout}, 2fr)`)
    container.style.cssText = `
        grid-template-columns: repeat(${layout}, 2fr)
        grid-template-rows: repeat(${layout}, 2fr)`
    for (i=1; i<=layout * layout; i++) {
        let square=document.createElement('div')
        square.classList.add('grid');
        square.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = "black";
        })
        container.appendChild(square)
    }
}

defaultGrid();
