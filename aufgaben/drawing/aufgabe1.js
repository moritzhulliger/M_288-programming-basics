/**
 * Zeichnet ein ähnliches Bild wie das image.png auf das Canvas.
 * 
 * Tipps: https://www.w3schools.com/html/html5_canvas.asp
*/


this.canvas = document.getElementById('myCanvas');

if (!this.canvas) throw new Error("Canvas not found");

const ctx = this.canvas.getContext('2d');
