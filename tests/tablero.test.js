const Local = require("../src/Local");
const Tablero= require('../src/tablero');
test("tablero vacio",()=>{
    const tablero=new Tablero();
    expect(tablero.estado).toBe("vacio");

})
test("insertar paquete",()=>{
    const local=new Local("A");
    local.insertarPaquete(3);
    expect(local.paquetesLocal[0]).toBe(0);
    expect(local.paquetesLocal[1]).toBe(1);
    expect(local.paquetesLocal[2]).toBe(2);


})
test("insertar otro Paquete",()=>{
    


})

