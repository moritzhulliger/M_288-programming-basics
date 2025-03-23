/**
 * Zeichnet ein ähnliches Bild wie das image.png auf das Canvas.
 * 
 * Tipps: https://www.w3schools.com/html/html5_canvas.asp
*/


this.canvas = document.getElementById('myCanvas');

if (!this.canvas) throw new Error("Canvas not found");

const ctx = this.canvas.getContext('2d');




drawGras(0, 300, 'green');
drawSky(0, 0, 'blue');
drawHouse(200, 200, 'gray');
drawSun(650, 150, 'yellow', 60);
drawSun(650, 150, 'orange', 40);




//Sonne
function drawSun(positionX, positionY, color, size) {
    ctx.beginPath();
    ctx.arc(positionX, positionY, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}


//Hintergrund
function drawSky(positionX, positionY, color) {
    ctx.beginPath();
    ctx.rect(positionX, positionY, 800, 500);
    ctx.fillStyle = color;
    ctx.fill();
}

//Boden
function drawGras(positionX, positionY, color) {
    ctx.beginPath();
    ctx.rect(positionX, positionY, 800, 500);
    ctx.fillStyle = color;
    ctx.fill();
}

//Haus
function drawHouse(positionX, positionY, color) {
    ctx.beginPath();
    ctx.rect(positionX, positionY, 300, 300);
    ctx.fillStyle = color;
    ctx.fill();

//hier alle funktionen für das haus
drawWindow(500, 200, 'white');
drawWindow(200, 200, 'white');
}


//Fenster 
function drawWindow(positionX, positionY, color) {
    ctx.beginPath();
    ctx.rect(positionX, positionY, 100, 100);
    ctx.fillStyle = color;
    ctx.fill();
}




