const Local = require("./Local");
const Destino = require("./Destino");
const Facturacion = require("./centros/Facturacion");
const Calidad = require("./centros/Calidad");
const Distribucion = require("./centros/Distribucion");
const Paquete = require("./Paquete");
function Linea(nombreLocal,cantidad,nombreDestino){
    this.estado=[];
    this.local=new Local(nombreLocal);
    this.cantidad=cantidad;
    this.destino=new Destino(nombreDestino);
    this.local.insertarPaquete(cantidad);
    this.estado[0]= this.local.paquetesLocal;
    this.estado[1]= Array(new Facturacion().maximoPaquetes);
    this.estado[2]= Array(new Calidad().maximoPaquetes);
    this.estado[3]= Array(new Distribucion().maximoPaquetes);

        
    this.moverPaquete=function(){
        var col;
        for(col=0;col<3;col++){
            this.cambiarPosiciones(this.estado[col],this.estado[col+1]);
            console.log("FINNNNNN");

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

    // this.cambiarPosiciones=function(arreglo1,arreglo2){
    //     var paquete=new Paquete();
    //     const maximo=arreglo2.length;
    //     //const cantPaquetes=this.cantidadAnterior(arreglo1);
    //     for(var i=0;i<maximo;i++){
    //         if(arreglo1[i]!=undefined){
    //             paquete=arreglo1[i];
                
    //             arreglo2[i]=paquete;
    //             paquete.aumentarTiempo();
    //             console.log("paquete %d %d",i,paquete.tiempo);
    //         }
            
    //     }
    // }
    this.cambiarPosiciones=function(arreglo1,arreglo2){
        var paquete=new Paquete();
        const maximo=arreglo2.length;

        //const cantPaquetes=this.cantidadAnterior(arreglo1);
        for(var i=maximo-1;i>=0;i--){
            if(arreglo1[i]!=undefined){
                arreglo1[i].aumentarTiempo();

                arreglo2.push(arreglo1[i]);
                arreglo1.pop();
                //console.log("paquete %d %d",i,paquete.tiempo);
            }
            
        }
        }
    


    
    }
module.exports=Linea;