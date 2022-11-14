const Local = require("./Local");

const facturacion = require("./centros/Facturacion.js");
const Calidad = require("./centros/Calidad");
const Distribucion = require("./centros/Distribucion");
const Paquete = require("./Paquete");
function Tablero(){
    this.estado=[];
    this.facturacion=new Facturacion();
    this.calidad=new Calidad();
    this.distribucion=new Distribucion();
    this.crearTablero=function(nombreLocal,cantidad){
        const local=new Local(nombreLocal);
        local.insertarPaquete(cantidad);
        this.estado[0]=local.paquetesLocal;
        this.estado[1]=Array(facturacion.maximoPaquetes);
        this.estado[3]=Array(calidad.maximoPaquetes);
        this.estado[4]=Array(distribucion.maximoPaquetes);

    }
    this.moverPaquete=function(){
        var col ,centro;
        for(col=1;col<4;col++){
            for(centro=0;centro<this.estado[col].lenght;col++){
                if(this.cantidadAnterior(this.estado[col-1])<this.estado[col].lenght){


                }
                
            }
        }
    }
    this.cantidadAnterior=function(arregloant){
        var cont=0;
        for(var i=0;i<arregloant.lenght;i++){
            if(arregloant[i]!=null){
                cont++;
            }
        }
    }
    this.cambiarPosiciones=function(arreglo1,arreglo2){
        var Paquete;
        const maximo=arreglo2.lenght;
        for(var i=0;i<maximo;i++){
            for(var j=0;j<maximo;j++){
                arreglo1[i].push
                arreglo1[i]
            }
        }


    }


    
}
module.exports=Tablero;