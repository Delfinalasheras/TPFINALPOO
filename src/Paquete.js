function Paquete(){
    this.tiempo=0;

    this.aumentarTiempo=function(){
        this.tiempo++;
    }

    this.getPaquete=function(){
        return "Paquete";
    }
}
module.exports=Paquete;
