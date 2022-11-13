const Local = require("./Local");

const Facturacion = require("../src/Facturacion");
const Calidad = require("../src/Calidad");
const Distribucion = require("../src/Distribucion");
function Tablero(){
    this.estado=[];
    this.facturacion=new Facturacion();
    this.calidad=new Calidad();
    this.Distribucion=new Distribucion():
    this.crearTablero=function(nombreLocal,cantidad){
        const local=new Local(nombreLocal);
        local.insertarPaquete(cantidad);
        this.estado[0]=local.paquetesLocal;
        this.estado[1]=Array(facturacion.maximoPaquetes);
        this.estado[3]=Array(Calidad.maximoPaquetes);
        this.estado[4]=Array(Distribucion.maximoPaquetes);

    }
    this.moverPaquete=function(){


    }



    
}
module.exports=Tablero;