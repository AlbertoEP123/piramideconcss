'use strict';
//nos ayuda a no dejar pasar ningun error

var cuadro = parseInt(prompt("Diga en que cuadro quiere saludar", ""));

var selector = "c" + cuadro;

var estecuadro = " ";
switch (cuadro) {
    case 1:
        estecuadro = document.getElementById("c1");
        break;

    case 2:
        estecuadro = document.getElementById("c2");
        break;
    case 3:

        estecuadro = document.getElementById("c3");
        break;

    case 4:
        estecuadro = document.getElementById("c4");
        break;

    case 5:
        estecuadro = document.getElementById("c5");
        break;

    default:
        alert("Has ingresado un mal numero");

}
if (estecuadro != "") {
    estecuadro.innerHTML = "hola";
    estecuadro.style.color="red";
}
