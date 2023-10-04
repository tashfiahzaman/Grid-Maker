let numRows = 0;
let numCols = 0;
let colorSelected;

function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

function addR() {
    let grid = document.getElementById("grid");
    let newRow = grid.insertRow(-1);
    for(let i=0; i<numCols; i++) {
        let newCell = newRow.insertCell(i);
        newCell.onclick = function() { alert('Clicked a table cell'); };
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
        newCell.onclick = function() { alert('Clicked a table cell'); };
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
