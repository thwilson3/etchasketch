let sizeSelection = 16;
let container = document.querySelector('.grid-container')
let artBoard = document.querySelectorAll('div.grid')

function grid() {
    let layout = (sizeSelection * sizeSelection);
    for (i=1; i<=layout; i++) {
        let square=document.createElement('div')
        square.classList.add('grid');
        square.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = "black";
        })
        container.appendChild(square)
    }
}

grid();
