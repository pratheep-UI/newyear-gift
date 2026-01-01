const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.onresize = resize;

// White floating particles
let particles = Array.from({ length: 140 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  dy: Math.random() * 0.6 + 0.3
}));

// Fireworks
let fireworks = [];

function launchFirework(x = Math.random()*canvas.width, y = Math.random()*canvas.height*0.4) {
  for (let i = 0; i < 90; i++) {
    fireworks.push({
      x, y,
      a: Math.random()*Math.PI*2,
      s: Math.random()*6+2,
      l: 80,
      c: `hsl(${Math.random()*360},100%,65%)`
    });
  }
}
setInterval(launchFirework, 1600);

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // particles
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fill();
    p.y += p.dy;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });

  // fireworks
  fireworks.forEach((f,i) => {
    f.x += Math.cos(f.a)*f.s;
    f.y += Math.sin(f.a)*f.s;
    f.l--;
    ctx.fillStyle = f.c;
    ctx.fillRect(f.x,f.y,3,3);
    if (f.l <= 0) fireworks.splice(i,1);
  });

  requestAnimationFrame(animate);
}
animate();
