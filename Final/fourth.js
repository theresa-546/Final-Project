const grid = document.querySelector("#container");
const squares = document.querySelectorAll('.leftPics');

function changeOpacity(event) {
  if (event.target.className == 'leftPics') {
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.opacity = '0.6';
    }
    event.target.style.opacity = '1.0';
    event.target.addEventListener('mouseout', resetOpacity, false);
  }
  event.stopPropagation();
}

function resetOpacity() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.opacity = '1.0';
  }
}

grid.addEventListener('mouseover', changeOpacity, false);

let xBrowserRatio;
let yBrowserRatio;

function scaleRatio() {
  let browserWidth = window.innerWidth;
  let browserHeight = window.innerHeight;

  xBrowserRatio = browserWidth / 100;
  yBrowserRatio = browserHeight / 100;
}

function coordinates(event) {
  let xPos = event.clientX;
  let yPos = event.clientY;

  updateRotation(xPos, yPos);
  //yPosChange(yPos);
}

function updateRotation(xPos, yPos) {
  // map horizontal rotation to X position relative to browser width
  let xRotation = 50 - Math.ceil(yPos / yBrowserRatio);
  console.log('X rotation: ' + xRotation);

  // map vertical rotation to Y position relative to browser height
  let yRotation = -50 + Math.ceil(xPos / xBrowserRatio);
  console.log('Y rotation: ' + yRotation);


  for (let i = 0; i < squares.length; i++) {
    squares[i].style.transform = 'rotateX(' + xRotation + 'deg)' + ' ' + 'rotateY(' + yRotation + 'deg)';
  }
  if (event.target.className == 'leftPics') {
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.transform = 'rotateX(' + xRotation + 'deg)' + ' ' + 'rotateY(' + yRotation + 'deg)';
    }
    event.target.style.transform = 'rotate(0deg)';
    event.target.addEventListener('mouseout', resetOpacity, false);
  }
  event.stopPropagation();

}

grid.addEventListener('mouseover', updateRotation, false);

function yPosChange(yPos){
  if (yPos > 0){
    //change to ___ img
  } else {
    //change to __img
  }
}

window.addEventListener('load', scaleRatio);

window.addEventListener('resize', scaleRatio);

window.addEventListener('mousemove', coordinates);
