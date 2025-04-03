/**
 * Zeichnet ein ähnliches Bild wie das image.png auf das Canvas.
 * 
 * Tipps: https://www.w3schools.com/html/html5_canvas.asp
*/


this.canvas = document.getElementById('myCanvas');

if (!this.canvas) throw new Error("Canvas not found");

const ctx = this.canvas.getContext('2d');
ctx.moveTo(0, 0);
ctx.lineTo(400, 200);
ctx.stroke();

drawSun(200, 50, '#FFDF22', 40);
drawSun(500, 300, '#FFDF22', 60);

function drawSun(positionX, positionY, color, size) {
    ctx.beginPath();
ctx.arc(positionX, positionY, size, 0, 2 * Math.PI);
ctx.fillStyle = color;
ctx.fill();

ctx.beginPath();
ctx.rect(0, 400, 800, 800);
ctx.fillStyle = '#40531B';
ctx.fillRect(0, 400, 800, 800);
}