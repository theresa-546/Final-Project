const shape= document.getElementById('shape');
let movement = [
  {transform: 'translate(0%, 10%)'},
  {transform: 'translate(1000%, 25%)'}

];

let openTiming = {duration: 4500, iterations: Infinity, easing: 'steps(50, end)'};

// with delay
// let openTiming = {delay: (200), duration: 4500, iterations: Infinity, easing: 'steps(50, end)'};

let openWindow = shape.animate(
  movement,
  openTiming

)
