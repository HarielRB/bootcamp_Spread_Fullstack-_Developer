// se horas, minutos e segundos forem iguais a 0 tudo para
// senão
// se horas for maior que zero e minutos e segundos forem 0
// horas diminui em 1 e minutos recebe 60
// se minutos for maior que 0 e segundos for igual a 0
// minutos diminui em 1 e segundos recebe 60
// se segundos for maior que 0
// segundos diminui em 1

var horas;
var minutos;
var segundos;

function getTime() {
    horas = document.getElementById("inp-hours").value;
    minutos = document.getElementById("inp-minutes").value;
    segundos = document.getElementById("inp-seconds").value

    if (horas === '' || minutos === '' || segundos === '') {
        alert("Insira Valores válidos!")
    } else {
        horas = parseInt(horas);
        minutos = parseInt(minutos);
        segundos = parseInt(segundos)
        console.log(`${horas} : ${minutos} : ${segundos}`)
        return horas, minutos, segundos;
    }

}

var horasText = document.getElementById("hours")
var minutosText = document.getElementById("minutes")
var segundosText = document.getElementById("seconds")

function iniciar() {
    var tempo = setInterval(function() {
        if (horas === 0 && minutos === 0 && segundos === 0) {
            alert("Acabou o tempo!");
            clearInterval(tempo)
        } else {
            if (horas > 0 && minutos === 0 && segundos === 0) {
                horas -= 1;
                minutos = 60;
            }
            if (minutos > 0 && segundos === 0) {
                minutos -= 1;
                segundos = 60;
            }
            segundos -= 1;
            horasText.innerHTML = horas;
            minutosText.innerHTML = minutos;
            segundosText.innerHTML = segundos;
        }
    }, 1000)
}