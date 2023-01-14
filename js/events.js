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

if(document.body.clientWidth < 900){
    boxSection.style.height = ((ingresso.offsetHeight*2+27) + "px");
}
else {
    boxSection.style.height = ((ingresso.offsetHeight+20) + "px");
}
