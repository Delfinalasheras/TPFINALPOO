const Local = require("../src/Local");
const Tablero= require('../src/tablero');
test("tablero vacio",()=>{
    const tablero=new Tablero();
    expect(tablero.estado).toBe("vacio");

})
test("insertar paquete",()=>{
    const local=new Local("A");
    local.insertarPaquete(5);
    expect(local.paquetesLocal[0]).toBe(paquete);
    expect(local.paquetesLocal[1]).toBe(paquete);
    expect(local.paquetesLocal[2]).toBe(paquete);


})
test("insertar otro Paquete",()=>{
    


})

