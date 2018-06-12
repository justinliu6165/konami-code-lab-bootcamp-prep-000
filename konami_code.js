const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init(e) {
  var key = e.keyCode;
  if(key === codes[index]){
    index++;
  } if (index === codes.length){
    alert('Hurray!');
    index = 0;
  } else {
    index = 0;
  }
}

window.addEventListener("keydown", init)

