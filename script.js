let containerGrid =  document.querySelector(".grid");
let buttonSize = document.querySelector(".buttonSize");
let buttonRainbow = document.querySelector(".buttonRainbow");
let buttonReset = document.querySelector(".buttonReset");
let spielFeldGröße = 16;
let farbeGrid = "red";
let SPIEL_MODUS = 0; // 0 == Normal-Mode, 1 == Rainbow-Mode

//Erst initialisierung.
reSizeGrid(spielFeldGröße);

//Spiellogik
buttonSize.addEventListener("click", (e) => {
    spielFeldGröße = prompt("Welche größe soll das Spielfeld haben? (max 100)");
    if(spielFeldGröße > 0 && spielFeldGröße <= 100) {
        reSizeGrid(spielFeldGröße);
    } 
});

buttonReset.addEventListener("click", (e) => reSizeGrid(spielFeldGröße));


buttonRainbow.addEventListener("click", (e) => {
    SPIEL_MODUS = 1;
    reSizeGrid(spielFeldGröße);
});


//Hover für die Gridbuttons
function hoverGridFields(event) {
    let hoveredButton = event.target;
    if(SPIEL_MODUS === 1) {
        hoveredButton.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    } else {
        hoveredButton.style.backgroundColor = farbeGrid;
    }
}

//Grid buttons erstellen, und einfügen
function reSizeGrid(n) {
    while(containerGrid.firstChild) {
        containerGrid.removeChild(containerGrid.firstChild);
    }

    for(let i = 0; i < n*n; i++) {
        let gridFields = document.createElement("div");
        gridFields.classList.toggle("gridfields");
        let sizeFields = (1000 / n) + "px";
        gridFields.style.height = sizeFields;
        gridFields.style.width = sizeFields;
        gridFields.addEventListener("mouseout", hoverGridFields);
        containerGrid.appendChild(gridFields);
    }
}