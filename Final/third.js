const shape = document.getElementById("shape");
let movement = [
  { transform: "translate3d(0px, 370px, 10px) skew(20deg)" },
  { transform: "translate3d(2000px, 25px, 20px) skew(15deg)" }
];

let timing = { duration: 5900, iterations: Infinity, easing: "steps(50, end)" };

let passBy = shape.animate(movement, timing);

//audio
var audio = document.getElementById("music");
audio.volume = 0.2;

//color change

const shapeColor = document.getElementById("shape");

let randomColor;

randomColor = () => {
  let randomNumber = Math.floor(Math.random() * 360);
  shapeColor.style.backgroundColor = "hsl(" + randomNumber + ", 100%, 50%)";
};

window.addEventListener("load", randomColor);


let hueBrowserRatio;
let lightnessBrowserRatio;

function colorScale() {
  let browserWidth = window.innerWidth;
  let browserHeight = window.innerHeight;

  hueBrowserRatio = browserWidth / 360;
  lightnessBrowserRatio = browserHeight / 100;
}

function getPosition(event) {
  let xPos = event.clientX;
  let yPos = event.clientY;
  updateColor(xPos, yPos);
}

function updateColor(xPos, yPos) {
  let hue = Math.ceil(xPos / hueBrowserRatio);
  console.log("Hue: " + hue);

  let lightness = 100 - Math.ceil(yPos / lightnessBrowserRatio);
  console.log("Lightness: " + lightness);

  shapeColor.style.backgroundColor =
    "hsl(" + hue + ", 100%, " + lightness + "%)";
}

window.addEventListener("load", colorScale);

window.addEventListener("resize", colorScale);

window.addEventListener("mousemove", getPosition);
