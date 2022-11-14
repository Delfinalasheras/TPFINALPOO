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
    tablero.estado[1][1]=new Paquete();
    expect(tablero.estado[1][1].getPaquete()).toBe("Paquete");
    
})
test("Mover a Facturacion Paquetes",()=>{
    const tablero=new Tablero();
    tablero.crearTablero("A",3);
    tablero.moverPaquete();
    expect(tablero.estado[1][0].getPaquete()).toBe("Paquete");

})
test("Mover a Calidad Paquetes",()=>{// se movio 1 solo paquete, por lo que los otros dos quedaron en la cola del local
    const tablero=new Tablero();
    tablero.crearTablero("A",3);
    tablero.moverPaquete();
    tablero.moverPaquete();
    tablero.moverPaquete();
    expect(tablero.estado[2][0].getPaquete()).toBe("Paquete");
    expect(tablero.estado[1][1].getPaquete()).toBe("Paquete");
    expect(tablero.estado[1][2].getPaquete()).toBe("Paquete");


})
test("Mover a Distribucion Paquetes",()=>{// se movio 1 solo paquete, por lo que los otros dos quedaron en la cola del local
    const tablero=new Tablero();
    tablero.crearTablero("A",3);
    tablero.moverPaquete();
    tablero.moverPaquete();
    tablero.moverPaquete();
    tablero.moverPaquete();
    expect(tablero.estado[1][2].getPaquete()).toBe("Paquete");
    expect(tablero.estado[2][0].getPaquete()).toBe("Paquete");
    expect(tablero.estado[3][0].getPaquete()).toBe("Paquete");


})


