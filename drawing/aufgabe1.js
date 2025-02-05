/**
 * Zeichnet ein ähnliches Bild wie das image.png auf das Canvas.
 */

this.canvas = document.getElementById('myCanvas');

if (!this.canvas) throw new Error("Canvas not found");

const ctx = this.canvas.getContext('2d');

function drawField() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);
}

function drawHouse() {
    drawHouseBase();
    drawRoof();
    drawDoor();
    drawWindows();
}

function drawHouseBase() {
    ctx.fillStyle = 'tan';
    ctx.fillRect(300, 250, 200, 150);
}

function drawRoof() {
    ctx.fillStyle = 'brown';
    ctx.beginPath();
    ctx.moveTo(300, 250);
    ctx.lineTo(400, 170);
    ctx.lineTo(500, 250);
    ctx.closePath();
    ctx.fill();
}

function drawDoor() {
    ctx.fillStyle = 'darkred';
    ctx.fillRect(370, 320, 60, 80);
}

function drawWindows() {
    ctx.fillStyle = 'white';
    ctx.fillRect(320, 270, 50, 50);
    ctx.fillRect(430, 270, 50, 50);
}

function drawSun() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(700, 100, 50, 0, Math.PI * 2);
    ctx.fill();
}

function drawCloud() {
    ctx.fillStyle = 'grey';
    drawCloudPart(150, 80);
    drawCloudPart(180, 70);
    drawCloudPart(210, 80);
    drawCloudPart(180, 100);
}

function drawCloudPart(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fill();
}

function drawSky() {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawScene() {
    drawSky();
    drawField();
    drawSun();
    drawCloud();
    drawHouse();
}

drawScene();

function clearCanvas() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

