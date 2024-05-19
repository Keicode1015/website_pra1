var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;
//onsole.log("rotateValue", rotateValue);

var rotateSum;

upBtn.onclick = function () {
  /*時計回りに90度回転*/
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

downBtn.onclick = function () {
  /*反時計回りに90度回転*/
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
