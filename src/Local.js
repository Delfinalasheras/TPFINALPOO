
const Paquete= require('./Paquete');
function Local(nombre){
    this.capacidad=5;
    this.paquetesLocal=Array(5);
    this.nombre=nombre;
    this.insertarPaquete=function(cantidad){
        if (cantidad<5){
            for(var i=0;i<cantidad;i++){
                this.paquete=new Paquete()
                this.paquetesLocal[i].push(this.paquete);
            }
        }
        else{
            throw new Error("Cada local puede producir un máximo de 5 paquete por unidad de tiempo");
        }

    }
}
module.exports=Local;