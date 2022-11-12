
const Tablero= require('../src/tablero');
test("tablero vacio",()=>{
    const tablero=new Tablero()
    expect(tablero.estado).toBe("vacio");

})