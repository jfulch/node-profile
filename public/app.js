const canvas = document.getElementById('drawing-canvas');
const context = canvas.getContext('2d');

let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  lastX = event.offsetX;
  lastY = event.offsetY;
});

canvas.addEventListener('mousemove', (event) => {
  if (isDrawing) {
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    lastX = event.offsetX;
    lastY = event.offsetY;
  }
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});