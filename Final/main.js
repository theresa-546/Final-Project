const textX = document.getElementById('x-pos');
const textY = document.getElementById('y-pos');

const text = document.getElementById('text');

function getPosition(event) {
  let xPos = event.clientX;
  let yPos = event.clientY;

  textX.textContent = xPos;
  textY.textContent = yPos;
}

window.addEventListener('wheel', function(event)
{
 if (event.deltaY > 0)
 {
  console.log('scrolling down');
  // document.getElementById('text').textContent= 'scrolling down';
  text.innerHTML = "<span class='englishTitle'>In the Mood for Love</span>";
 }
 else if (event.deltaY < 0)
 {
  console.log('scrolling up');
  // document.getElementById('text').textContent= "花樣年華";
  // text.innerHTML = "花樣年華";

  text.innerHTML =
  '<a href="first.html"><p id="title-1">花</p></a>\
  <a href="second.html"><p id="title-2">樣</p></a>\
  <a href="third.html"><p id="title-3">年</p></a>\
  <a href="fourth.html"><p id="title-4">華</p></a>';
 }
});
