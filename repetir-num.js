function repnum(){
    var primer = parseInt(prompt("Escribe el primer numero"));
    var segun = parseInt(prompt("Escribe el segundo numero"));
    var cont = 0;
    while (cont != segun) {
        cont++;
        document.write(primer);
        if (cont % 8 == 0) {
            document.write('<br>');
        }
    }
}