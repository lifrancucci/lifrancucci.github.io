let colorFg = "#111111";
let colorBg = "#f1f1f1";
let colorTxt = "#d90921"

let imgBkg; // Background image
let imgFont; // For typography
let pgTxt;

let maxDistance;
let tilesX;
let tilesY;
let tileSize
// -----------------------------------------------

function preload() {
  imgBkg = loadImage("./img/sea_sq.jpg");
  imgFont = loadFont("./fonts/CocogoosePro-trial.ttf")
}

function setup() {
  frameRate(30);
  let myCanvas = createCanvas(600, 600);
  myCanvas.parent('sketchContainer');
  background(colorBg);
  tilesX = 80;
  tilesY = 1;
  tileSize = width/tilesX;
  pgTxt = createGraphics(600, 600);
  pgWaves = createGraphics(200, 200);
  imgBkg.resize(600, 600);
  maxDistance = dist(0, 0, width, height);
}

function draw() {
  background(colorBg);

  // Background image:
  fill(colorFg);
  noStroke();

  for(let y = 0; y < imgBkg.height; y += tileSize) {
    for(let x = 0; x < imgBkg.width; x += tileSize) {
      let pixelColor = imgBkg.get(x, y);
      let b = map(brightness(pixelColor), 0, 255, 1, 0);

      let mouseSize = dist(mouseX, mouseY, x, y);
      mouseSize = mouseSize/maxDistance  * -200;

      // Push the tile to the matrix
      push();
      translate(x + tileSize/2, y + tileSize/2);
      ellipse(0, 0, b * tileSize, (b * tileSize) + mouseSize/1.8);
      pop(); // Pop it at the end
    }
  }

  // Text:
  pgTxt.fill(colorTxt);
  pgTxt.textFont(imgFont);
  pgTxt.push();
  pgTxt.translate(20, height/2-110);
  pgTxt.textAlign(LEFT, BOTTOM);
  pgTxt.textSize(120);
  pgTxt.text("LI",0, 0);
  pgTxt.text("FRAN",0, 100);
  pgTxt.text("CU",0, 200);
  pgTxt.text("CCI",0, 300);
  pgTxt.textSize(40);
  pgTxt.text("DESARROLLO CREATIVO", 6, 310);
  pgTxt.pop();
  image(pgTxt,0,0); // Show the text

  print(frameCount);
}
