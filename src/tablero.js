const Local = require("./Local");
function Tablero(){
    this.estado=[];
    this.insertarPaquetes=function(nombreLocal,cantidad){
        const local=new Local(nombreLocal);
        local.insertarPaquete(cantidad);
        this.estado[0]=local.paquetesLocal;

    }



    
}
module.exports=Tablero;