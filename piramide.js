function piramide(){
        var limite = 5;
    
        for (var i = 0; i < limite; ++i) {
    
            for (var k = i; k < limite; ++k) {
    
                document.write("&nbsp");
    
            }
    
            for (var j = 0; j < i * 2 - 1; ++j) {
    
                document.write("o");
    
            }
    
            document.write("<br/>")
    
        }
    }

