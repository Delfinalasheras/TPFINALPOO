const Local = require("./Local");

const Facturacion = require("./centros/Facturacion");
const Calidad = require("./centros/Calidad");
const Distribucion = require("./centros/Distribucion");
const Paquete = require("./Paquete");
function Tablero(){
    this.estado=[];

    ///creo tablero por cada columna tiene su proprio arrray
    this.crearTablero=function(nombreLocal,cantidad){
        const local=new Local(nombreLocal);
        local.insertarPaquete(cantidad);
        this.estado[0]= local.paquetesLocal;
        this.estado[1]= Array(Facturacion.maximoPaquetes);
        this.estado[3]= Array(Calidad.maximoPaquetes);
        this.estado[4]= Array(Distribucion.maximoPaquetes);
        //this.estado[4][0]=new Paquete();

    }
    this.moverPaquete=function(){
        var col ,centro;
        for(col=1;col<4;col++){
            for(centro=0;centro<this.estado[col].tamanio;col++){
                this.cambiarPosiciones(this.estado[col-1],this.estado[col]);
                
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
        var paquete=new Paquete();
        const maximo=arreglo2.lenght;
        for(var i=0;i<maximo;i++){
            paquete=arreglo1[i];
            arreglo1.pop();
            arreglo2.push(paquete);

        }


    }


    
}
module.exports=Tablero;