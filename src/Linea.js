const Local = require("./Local");
const Destino = require("./Destino");
const Facturacion = require("./centros/Facturacion");
const Calidad = require("./centros/Calidad");
const Distribucion = require("./centros/Distribucion");
const Paquete = require("./Paquete");
function Linea(){
    this.estado=[];
    this.local=new Local(nombreLocal);
    this.cantidad;
    this.destino=new Destino(nombreDestino);
    local.insertarPaquete(cantidad);
    this.estado[0]= local.paquetesLocal;
    this.estado[1]= Array(new Facturacion().maximoPaquetes);
    this.estado[2]= Array(new Calidad().maximoPaquetes);
    this.estado[3]= Array(new Distribucion().maximoPaquetes);

        
    this.moverPaquete=function(){
        var col;
        for(col=0;col<3;col++){
            this.cambiarPosiciones(this.estado[col],this.estado[col+1]);

        }
        this.llegaDestino(this.estado[3]);
        
        
        
    }
    this.llegaDestino=function(arrDistri){
        var i=arrDistri.length-1;
        for(i;i>=0;i--){
            if(arrDistri[i]!=undefined){
                this.destino.recibePaquete(arrDistri[i]);
                arrDistri.pop();
            }
        }
    }
    // this.cantidadAnterior=function(arregloant){
    //     var cont=0;
    //     for(var i=0;i<arregloant.length;i++){
            
    //         if(arregloant[i]!=undefined){
    //             cont++;
    //         }
    //     }
    //     return cont;
        
    // }
    this.cambiarPosiciones=function(arreglo1,arreglo2){
        var paquete=new Paquete();
        const maximo=arreglo2.length;
        //const cantPaquetes=this.cantidadAnterior(arreglo1);
        for(var i=0;i<maximo;i++){
            if(arreglo1[i]!=undefined){
                paquete=arreglo1[i];
                arreglo2[i]=paquete;
                paquete.aumentarTiempo();
            }
            
            
            
        }


    }


    
}
module.exports=Linea;