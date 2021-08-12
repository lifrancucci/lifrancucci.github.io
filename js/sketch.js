let colorFg = "#111111";
let colorBg = "#f1f1f1";
let colorTxt = "#ffbc12"

let imgBkg; // Background image
let imgFont; // For typography
let pg;

function preload() {
  imgBkg = loadImage("./img/sea_sq.jpg");
  imgFont = loadFont("./fonts/CocogoosePro-trial.ttf")
}

function setup() {
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent('sketchContainer');
  background(colorBg);
  pg = createGraphics(600, 600);
  imgBkg.resize(600, 600);
}

function draw() {
  background(colorBg);

  // Background image:
  fill(colorFg);
  noStroke();

  let tilesX = 120;
  let tilesY = tilesX;
  let tileSize = width/tilesX;
  for(let y = 0; y < imgBkg.height; y += tileSize) {
    for(let x = 0; x < imgBkg.width; x += tileSize) {
      let pixelColor = imgBkg.get(x, y);
      let b = map(brightness(pixelColor), 0, 255, 1, 0);

      // Push the tile to the matrix
      push();
      translate(x + tileSize/2, y + tileSize/2);
      ellipse(0, 0, b * tileSize, b * tileSize);
      pop(); // Pop it at the end
    }
  }

  // Text:
  // pg.background(0, 0);
  pg.fill(colorTxt);
  pg.textFont(imgFont);
  pg.textSize(120);
  pg.push();
  pg.translate(20, height/2-110);
  pg.textAlign(LEFT, LEFT);
  pg.text("LI",0, 0);
  pg.text("FRAN",0, 100);
  pg.text("CU",0, 200);
  pg.text("CCI",0, 300);
  pg.pop();
  image(pg,0,0);

}
