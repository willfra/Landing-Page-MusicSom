$ = document.querySelector.bind(document); 
$$ = document.querySelectorAll.bind(document); 
print = console.log.bind(console)

const ingresso = document.querySelector(".ingresso");

let ingressoLargura = (ingresso).clientWidth
let ingressoAltura = (ingresso).clientHeight

print(ingressoLargura, ingressoAltura)

let boxSection = document.getElementById("box-section");
boxSection.style.height = ingressoAltura;

