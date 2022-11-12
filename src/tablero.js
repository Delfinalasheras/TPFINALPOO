function Tablero(){
    this.estado="vacio";
    this.linea=new Array(4);
    this.insertarPaquete(){
        var i;
        for(i=0;i<4;i++){
            if(this.linea[i]==null){
                this.linea[i]=1;
                break;

            }
        }
    }
}
module.exports=Tablero;