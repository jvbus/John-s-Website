//==EXPLANATIONS ==//
//==Stars move slowly left → feels like depth

//==Mountains drawn in 3 layers → creates parallax illusion==//

//==requestAnimationFrame → makes everything smoothly animate==//

//==You can add more layers for extra depth==//

//=====JS BEGINS=====//

// ===== STARS =====
const starCanvas = document.getElementById("stars");
const starCtx = starCanvas.getContext("2d");

let sw = window.innerWidth;
let sh = window.innerHeight;
starCanvas.width = sw;
starCanvas.height = sh;

const stars = Array.from({length: 200}, () => ({
  x: Math.random()*sw,
  y: Math.random()*sh,
  size: Math.random()*2 + 1,
  speed: Math.random()*0.5 + 0.2
}));

function drawStars() {
  starCtx.clearRect(0,0,sw,sh);
  stars.forEach(star => {
    star.x -= star.speed;
    if(star.x < 0) star.x = sw;
    starCtx.fillStyle = "white";
    starCtx.beginPath();
    starCtx.arc(star.x, star.y, star.size, 0, Math.PI*2);
    starCtx.fill();
  });
  requestAnimationFrame(drawStars);
}
drawStars();

window.addEventListener('resize', () => {
  sw = starCanvas.width = window.innerWidth;
  sh = starCanvas.height = window.innerHeight;
});

// ===== MOUNTAINS =====
const worldCanvas = document.getElementById("world");
const worldCtx = worldCanvas.getContext("2d");
worldCanvas.width = sw;
worldCanvas.height = sh;

function drawMountains() {
  worldCtx.clearRect(0, 0, sw, sh);

  const layers = [
    {color: "#1a1a2e", peaks: 6, offset: sh*0.6},
    {color: "#162447", peaks: 5, offset: sh*0.65},
    {color: "#1f4068", peaks: 4, offset: sh*0.7}
  ];

  layers.forEach(layer => {
    worldCtx.beginPath();
    let step = sw / (layer.peaks*2);
    worldCtx.moveTo(0, sh);

    for(let i=0;i<=layer.peaks*2;i++){
      const x = i*step;
      const peak = Math.random() * sh*0.1 + (layer.offset - sh*0.1);
      const y = (i%2===0) ? peak : layer.offset;
      worldCtx.lineTo(x,y);
    }

    worldCtx.lineTo(sw, sh);
    worldCtx.closePath();
    worldCtx.fillStyle = layer.color;
    worldCtx.fill();
  });

  requestAnimationFrame(drawMountains);
}
drawMountains();