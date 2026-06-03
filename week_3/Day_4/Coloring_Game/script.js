/*
Coloring Squares Engine Logic
Key Events Handled: 
- Click selection of palette targets.
- Global tracking via isDrawing state variable on mousedown/mouseup.
- Drawing interaction across canvas blocks on mouseover.
*/

// 1. Color Library Data Array
const colors = [
    "#FF0000", "#FF7F00", "#FFFF00", 
    "#00FF00", "#0000FF", "#4B0082", 
    "#9400D3", "#FF00FF", "#00FFFF", 
    "#000000", "#8B4513", "#7F7F7F"
];

// 2. State Management Flag Variables
let selectedColor = colors[0]; // Defaults to first color selection (Red)
let isDrawing = false;         // Switches to true when user holds down mouse click button

// 3. Document DOM Reference Targeting Hooks
const paletteGrid = document.getElementById("palette-grid");
const canvasGrid = document.getElementById("canvas-grid");
const clearBtn = document.getElementById("clear-btn");

// 4. Generate Palette Colors View System
colors.forEach((color, index) => {
    let swatch = document.createElement("div");
    swatch.classList.add("color-swatch");
    swatch.style.backgroundColor = color;
    
    // Auto active selection style on the first swatch initialization
    if (index === 0) swatch.classList.add("active");

    // Click handler to swap selected drawing target color
    swatch.addEventListener("click", function() {
        // Clear active borders out from previous color swatch selection items
        document.querySelectorAll(".color-swatch").forEach(paletteSwatch => paletteSwatch.classList.remove("active"));
        
        selectedColor = color;
        swatch.classList.add("active");
    });

    paletteGrid.appendChild(swatch);
});

// 5. Generate Canvas Drawing Grid Matrix Squares (60 columns * 40 rows = 2400 blocks)
const totalSquares = 2400;
for (let i = 0; i < totalSquares; i++) {
    let square = document.createElement("div");
    square.classList.add("canvas-square");

    // Start painting directly when first clicking inside a block
    square.addEventListener("mousedown", function(event) {
        event.preventDefault();
        square.style.backgroundColor = selectedColor;
    });

    // Color code adjacent boxes continuously on tracking path intersections
    square.addEventListener("mouseover", function() {
        if (isDrawing) {
            square.style.backgroundColor = selectedColor;
        }
    });

    canvasGrid.appendChild(square);
}

// 6. Global Tracking Listeners: Turn off drawing state no matter where mouse is released
document.body.addEventListener("mouseup", function() {
    isDrawing = false;
});

// 7. Clear Button Canvas Workspace Cleaning Action Reset
clearBtn.addEventListener("click", function() {
    let squares = document.querySelectorAll(".canvas-square");
    squares.forEach(square => {
        square.style.backgroundColor = "#ffffff";
    });
});
// Final line for test