
const Tablero= require('../src/tablero');
test("tablero vacio",()=>{
    const tablero=new Tablero();
    expect(tablero.estado).toBe("vacio");

})
test("insertar paquete",()=>{
    const tablero=new Tablero();
    tablero.insertarPaquete();
    expect(tablero[0]).toBe(1);
})


