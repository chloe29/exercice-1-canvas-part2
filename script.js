var glace = document.getElementById('canvas');
var ctx = glace.getContext('2d');
  // cornet
ctx.fillStyle = "peru";
ctx.beginPath();
ctx.moveTo(60,130);
ctx.lineTo(85,50);
ctx.lineTo(35,50);
ctx.closePath();
ctx.fill();
  // boule de glace
ctx.fillStyle = "brown";
ctx.strokeStyle = "brown";
ctx.beginPath();
ctx.moveTo(35,50);
// dessiner une courbe
// .quadraticCurveTo est utilisé pour faire une courbe. En bougeant le point de contrôle, on change l'axe de la courbe
ctx.quadraticCurveTo(65,-10,85,50);
ctx.fill();
ctx.stroke();
