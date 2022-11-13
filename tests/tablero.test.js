const Local = require("../src/Local");
const Tablero= require('../src/tablero');
const Paquete= require('../src/Paquete');


test("tablero vacio",()=>{
    const tablero=new Tablero();
    expect(tablero.estado).toBe("vacio");

})
test("insertar paquete",()=>{
    const local=new Local("A");
    local.insertarPaquete(3);
    expect(local.paquetesLocal[0].getPaquete()).toBe("Paquete");
    expect(local.paquetesLocal[1].getPaquete()).toBe("Paquete");
    expect(local.paquetesLocal[2].getPaquete()).toBe("Paquete");


})
test("insertar otro Paquete",()=>{
    


})

