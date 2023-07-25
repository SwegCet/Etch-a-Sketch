const container = document.getElementById('container');

//Generates a default 16x16 Grid
function defaultGrid() {
    createGrid(16)
}

function createGrid(size){
    //Remove child elements
    while (container.firstChild) {
    container.removeChild(container.firstChild);
}
        //creates a new grid with specified size
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        //generates cells for the grid
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++){
                const cell = document.createElement("div");
                cell.classList.add("grid-item");
                container.appendChild(cell);
                cell.addEventListener("mouseover", () => {
                    cell.style.backgroundColor = "black";
                });
        }
    }   
}

//loads up a default 16x16 grid when the page loads.
defaultGrid();

//changes grid size
function changeGridSize(){
    const gridSize = prompt("Enter the size of the new grid with a max being 100"); 
    if (gridSize !== null && !isNaN(gridSize)) {
        const parsedSize = parseInt(gridSize, 10);
        if (parsedSize > 0) {
            createGrid(parsedSize);
        }
    }
    else {
        prompt("Please enter a positive number greater than zero");
    }
}
