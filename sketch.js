let jellyfish = [];
let num = 12;
let angle = 0;

let colors = [
  [147, 199, 211],
  [180, 174, 205],
  [200, 158, 174],
  [125, 165, 190]
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();

  for (let i = 0; i < num; i++) {
    jellyfish.push({
      x: random(width),
      y: random(height),
      xDir: random(-1, 1),
      yDir: random(-1, 1),
      d: random(40, 100),
      color: floor(random(4)),
      offset: random(360)
    });
  }
}

function draw() {
  background(7, 12, 24);

  for (let i = 0; i < jellyfish.length; i++) {
    update(jellyfish[i]);
    keepInCanvas(jellyfish[i]);
    display(jellyfish[i]);
  }

  angle += 1;
}

function update(j) {
  j.x += j.xDir;
  j.y += j.yDir;
}

function keepInCanvas(j) {
  if (j.x > width || j.x < 0) {
    j.xDir = -j.xDir;
  }

  if (j.y > height || j.y < 0) {
    j.yDir = -j.yDir;
  }
}

function mapSin(a, val1, val2) {
  let sinMap = map(sin(a), -1, 1, val1, val2);
  return sinMap;
}

function display(j) {
  let d = j.d * mapSin(angle + j.offset, 0.8, 1.3);

  let r = colors[j.color][0];
  let g = colors[j.color][1];
  let b = colors[j.color][2];

  noStroke();

  for (let i = 5; i > 0; i--) {
    fill(r, g, b, 6);
    circle(j.x, j.y, d + i * 10);
  }

  for (let i = 4; i > 0; i--) {
    fill(r, g, b, 12);
    circle(j.x, j.y, d * i / 4);
  }

  noFill();
  stroke(r, g, b, 80);
  strokeWeight(1);

  circle(j.x, j.y, d);
  circle(j.x, j.y, d * 0.7);

  noStroke();
  fill(220, 225, 235, 120);
  circle(j.x, j.y, d * 0.15);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}