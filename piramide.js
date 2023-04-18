function piramide(){
    var filas,columnas,espacios;
    filas=3;
    columnas=5;
    espacios=0;
    var output=0;
    for(let i=0;i<columnas;i++){
        espacios++;
        for(let j=0;j<columnas;j++){
            for(let k=25;k>0;k--){
                document.write('&nbsp');
            }
        }
        for(let k=0;k<2*i-1;k++){
            document.write('o');
        }
        document.write('<br>');
    }
    document.write(output);
}
