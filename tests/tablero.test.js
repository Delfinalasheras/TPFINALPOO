const Local = require("../src/Local");
const Tablero= require('../src/tablero');
const Paquete= require('../src/Paquete');

test("insertar paquete en local",()=>{
    const tablero=new Tablero();
    tablero.insertarPaquetes(3);
    expect(tablero.estado[0][0].getPaquete()).toBe("Paquete");
    expect(tablero.estado[0][1].getPaquete()).toBe("Paquete");
    expect(tablero.estado[0][2].getPaquete()).toBe("Paquete");


})
test("Mover Paquetes",()=>{
    const tablero=new Tablero();
    
    
    


})

