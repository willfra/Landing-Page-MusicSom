$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
print = console.log.bind(console)

/* const ingresso = document.querySelector(".ingresso");

let ingressoLargura = (ingresso).clientWidth
let ingressoAltura = (ingresso).clientHeight */

/* print(ingressoLargura, ingressoAltura) */

/* let boxSection = document.getElementById("box-section");
boxSection.style.height = ingressoAltura; */

var boxSection = document.getElementById("box-section");
var ingresso = document.getElementById("ingresso-1");

document.body.onresize = function () {
    if (document.body.clientWidth < 900) {
        boxSection.style.height = ((ingresso.offsetHeight * 2 + 27) + "px");
    }
    else {
        boxSection.style.height = ((ingresso.offsetHeight + 20) + "px");
    }
};
if (document.body.clientWidth < 900) {
    boxSection.style.height = ((ingresso.offsetHeight * 2 + 27) + "px");
}
else {
    boxSection.style.height = ((ingresso.offsetHeight + 20) + "px");
}

if (document.body.clientWidth < 900) {
    var teste = (ingresso.offsetHeight * 2 + 27);
}
else {
    var teste = (ingresso.offsetHeight + 30);
}

var button = document.getElementById("wrapper2");

var height = (teste + 10); // valor inicial da altura
var expanded = false; // flag para verificar se o botão está expandido ou não

button.addEventListener("click", function () {
    if (expanded) {
        height = (teste); // volta para o valor inicial
        expanded = false;
        button.innerText = "Ver mais"
    } else {
        height = (teste * 2); // aumenta a altura
        expanded = true;
        button.innerText = "Ver menos"

    }
    boxSection.style.height = height + "px";
});

print(teste)