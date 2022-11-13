
const Tablero= require('../src/tablero');
test("tablero vacio",()=>{
    const tablero=new Tablero();
    expect(tablero.estado).toBe("vacio");

})
test("insertar paquete",()=>{
    const tablero=new Tablero();
    tablero.insertarPaquete();
    expect(tablero.linea[0]).toBe(1);
})
test("insertar otro Paquete",()=>{
    const tablero=new Tablero();
    tablero.insertarPaquete();
    tablero.insertarPaquete();
    expect(tablero.linea[0]).toBe(2);
    expect(tablero.linea[1]).toBe(1);


})

