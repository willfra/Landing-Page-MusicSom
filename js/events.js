$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);
print = console.log.bind(console)


/* Procurar o height da div.ingresso e ajustar a div#box-section com base neste valor. Transformando o resultado em pixels*/

var boxSection = document.getElementById("box-section");
var ingresso = document.getElementById("ingresso-1");

if (document.body.clientWidth < 900) {  /* ajusta o valor da var ingresso ao carregar a página */
    boxSection.style.height = ((ingresso.offsetHeight * 2 + 27) + "px");
}
else {
    boxSection.style.height = ((ingresso.offsetHeight + 20) + "px");
}

document.body.onresize = function () { /* ajusta o valor da var ingresso ao redimensionar a página */
    if (document.body.clientWidth < 900) {
        boxSection.style.height = ((ingresso.offsetHeight * 2 + 27) + "px");
    }
    else {
        boxSection.style.height = ((ingresso.offsetHeight + 20) + "px");
    }
};


if (document.body.clientWidth < 900) { /* Procurar o height da div.ingresso em valor, sem transformar em pixels com base no tamanho da tela*/
    var tamanhoIngresso = (ingresso.offsetHeight * 2 + 25);
}
else {
    var tamanhoIngresso = (ingresso.offsetHeight + 15);
}


var button = document.getElementById("wrapper2"); /* botão "Ver mais / Ver menos" */

var height = (tamanhoIngresso); // valor inicial da altura
var expanded = false; // flag para verificar se o botão está expandido ou não

button.addEventListener("click", function () {
    if (expanded) {
        height = (tamanhoIngresso); // volta para o valor inicial
        expanded = false;
        button.innerText = "Ver mais"
    } else {
        height = (tamanhoIngresso * 2); // aumenta a altura
        expanded = true;
        button.innerText = "Ver menos"

    }
    boxSection.style.height = height + "px";
});

print(teste)