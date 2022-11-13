const Local = require("../src/Local");
const Tablero= require('../src/tablero');
const Paquete= require('../src/Paquete');


test("tablero vacio",()=>{
    const tablero=new Tablero();
    expect(tablero.estado).toBe("vacio");

})
test("insertar paquete en local",()=>{
    const local=new Local("A");
    local.insertarPaquete(3);
    expect(local.paquetesLocal[0].getPaquete()).toBe("Paquete");
    expect(local.paquetesLocal[1].getPaquete()).toBe("Paquete");
    expect(local.paquetesLocal[2].getPaquete()).toBe("Paquete");


})
test("Mover Paquetes",()=>{
    const tablero=new Tablero();
    const local=new Local("A");
    local.insertarPaquete(3);
    tablero.moverPaquetes(3);
    expect(tablero[2]).toBe(3);
    
    


})

