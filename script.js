
const rotatingImage = document.querySelector('.imgBx img');
const container = document.querySelector('.container');


let rotationAngle = 0;
let backgroundColor = 0;


function animate() {

  rotationAngle += 4;
  rotatingImage.style.transform = `rotate(${rotationAngle}deg)`;


  backgroundColor += 3;
  container.style.backgroundColor = `rgb(${backgroundColor}, ${backgroundColor}, ${backgroundColor})`;

  requestAnimationFrame(animate);
}


animate();
