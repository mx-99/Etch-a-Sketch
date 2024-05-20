let container = document.querySelector('.container');
  function createGrids(grids) {
    const size = 800 / grids;
    for (let i = 0; i < grids; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        container.appendChild(row);
        for (let j = 0; j < grids; j++) {
            const cell = document.createElement("div");
            cell.style.border = "1px solid black";
            cell.style.height = `${size}px`;
            cell.style.width = `${size}px`;
            cell.style.backgroundColor = "white";
            cell.addEventListener("mouseleave", () => highlight(cell));
            row.appendChild(cell);
        }
    }
}
  
 createGrids(16)

function highlight(elem) {
    let colors = ['blue', 'red', 'green'];
    let randomColor = Math.floor(Math.random()*colors.length);
    const bgColor = colors[randomColor];
    elem.style.backgroundColor = bgColor;

    let event = new CustomEvent('highlight', {
        detail: {
            backgroundColor: bgColor
        }
    });
    elem.dispatchEvent(event);
}
 
function setGrids() {
    let input;
    do {
        input = prompt("Enter the number of grids (between 1 and 100):");
        if (input === null) {
            return null;
        }
        input = parseInt(input);
        if (isNaN(input) || input < 1 || input > 100) {
            alert("The number of grids must be between 2 and 100.");
        }
    } while (isNaN(input) || input < 1 || input > 100);
    removeGrids()
    return createGrids(input);
}

function removeGrids(grids){
    while(container.firstChild){
    container.removeChild(container.firstChild);
}
}

function reset(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createGrids(16);
}