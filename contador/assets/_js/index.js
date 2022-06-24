console.log('hello!');
var checkbox = document.getElementById('check');
var timeA = document.getElementById('timeA');
console.log(timeA.innerHTML);
function aumentar() {
  let value = parseInt(timeA.innerHTML);
  timeA.innerHTML = value + 1;
}

function diminuir() {
  let value = parseInt(timeA.innerHTML);
  if (value === 0) {
    alert('Não é possível Diminuir mais');
  } else {
    timeA.innerHTML = value - 1;
  }
}