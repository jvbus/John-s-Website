// Grab HTML elements
const starsCanvas = document.getElementById("starsCanvas");
const ctx = starsCanvas.getContext("2d");

const homeBtn = document.getElementById("homeBtn");

// Resize canvas
function resize() {
  starsCanvas.width = window.innerWidth;
  starsCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

// Simple animation
function draw() {
  ctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(200, 200, 2, 0, Math.PI * 2);
  ctx.fill();

  requestAnimationFrame(draw);
}
draw();

// Button interaction
homeBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

