let numRows = 0;
let numCols = 0;
let colorSelected;

function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    gridTable = document.getElementById("grid"); //gets the table
    gridTable.addEventListener("click", function(event) { //check if there is a click on the table
        if (event.target.tagName === "TD" && colorSelected != "SELECT"){  //check to see if there is a click on any of the table cells and make sure there is a selected color
            event.target.style.backgroundColor = colorSelected; //if there is a selected color, change the color of the cell to that color
        }
    }
    );
}

function addR() {
    let grid = document.getElementById("grid");
    let newRow = grid.insertRow(-1);
    for(let i=0; i<numCols; i++) {
        let newCell = newRow.insertCell(i);
    }
    numRows++;
}

function addC() {
    let grid = document.getElementById("grid");
    if(numRows === 0) {
        addR();
    }
    for(let i=0; i<numRows; i++) {
        let newCell = grid.rows[i].insertCell(numCols);
    }
    numCols++;
}

function removeR() {
    let grid = document.getElementById("grid");
    if(numRows > 0) {
        grid.deleteRow(-1);
        numRows--;
    }
}

function removeC() {
    let grid = document.getElementById("grid");
    if(numCols > 0) {
        for(let i=0; i<numRows; i++) {
            grid.rows[i].deleteCell(numCols-1);
        }
        numCols--;
    }
}

function fillU(){
    alert("Clicked Fill All Uncolored"); 
}

function fillAll(){
    alert("Clicked Fill All"); 
}

function clearAll(){
    alert("Clicked Clear All"); 
}
