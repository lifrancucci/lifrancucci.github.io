let colorFg = "#111111";
let colorBg = "#f1f1f1";

let imgBkg;

function preload() {
  imgBkg = loadImage("./img/sea_sq.jpg");
}

function setup() {
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent('sketchContainer');
  background(colorBg);
  imgBkg.resize(600, 600);
}

function draw() {
  background(colorBg);
  fill(colorFg);
  noStroke();

  let tilesX = 120;
  let tilesY = tilesX;
  let tileSize = width/tilesX;

  for(let y = 0; y < imgBkg.height; y += tileSize) {
    for(let x = 0; x < imgBkg.width; x += tileSize) {
      let pixelColor = imgBkg.get(x, y);
      let b = map(brightness(pixelColor), 0, 255, 1, 0);
      push();
      translate(x + tileSize/2, y + tileSize/2);
      ellipse(0, 0, b * tileSize, b * tileSize);
      pop();
    }
  }
}
