const Local = require("../src/Local");
const Tablero= require('../src/tablero');
const Paquete= require('../src/Paquete');

test("insertar paquete en local",()=>{
    const tablero=new Tablero();
    tablero.crearTablero("A",3);
    expect(tablero.estado[0][0].getPaquete()).toBe("Paquete");
    expect(tablero.estado[0][1].getPaquete()).toBe("Paquete");
    expect(tablero.estado[0][2].getPaquete()).toBe("Paquete");


})
test("Armar Tablero",()=>{
    const tablero=new Tablero();
    tablero.crearTablero("A",3);
    tablero[1][0]=new Paquete;
    expect(tablero[1][0].getPaquete()).toBe("Paquete");
    
})
test("Mover Paquetes",()=>{
    const tablero=new Tablero();
    tablero.crearTablero("A",3);
    
    
    


})

