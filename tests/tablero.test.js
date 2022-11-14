const Local = require("../src/Local");
const Paquete= require('../src/Paquete');
const Linea = require("../src/Linea");

test("insertar paquete en local",()=>{
    const linea=new Linea();
    linea.crearLinea("A",3);
    expect(linea.estado[0][0].getPaquete()).toBe("Paquete");
    expect(linea.estado[0][1].getPaquete()).toBe("Paquete");
    expect(linea.estado[0][2].getPaquete()).toBe("Paquete");


})
test("Armar linea",()=>{
    const linea=new Linea();
    linea.crearlinea("A",3);
    linea.estado[1][1]=new Paquete();
    expect(linea.estado[1][1].getPaquete()).toBe("Paquete");
    
})
test("Mover a Facturacion Paquetes",()=>{
    const linea=new Linea();
    linea.crearlinea("A",3);
    linea.moverPaquete();
    expect(linea.estado[1][0].getPaquete()).toBe("Paquete");
    expect(linea.estado[1][1].getPaquete()).toBe("Paquete");
    expect(linea.estado[1][2].getPaquete()).toBe("Paquete");



})
test("Mover a Calidad Paquetes",()=>{// se movio 1 solo paquete, por lo que los otros dos quedaron en la cola del local
    const linea=new Linea();
    linea.crearlinea("A",3);
    linea.moverPaquete();
    linea.moverPaquete();
    linea.moverPaquete();
    expect(linea.estado[2][0].tiempo).toBe(9);
    expect(linea.estado[1][1].tiempo).toBe(3);
    expect(linea.estado[1][2].tiempo).toBe(3);


})
test("Mover a Distribucion Paquetes",()=>{// se movio 1 solo paquete, por lo que los otros dos quedaron en la cola del local
    const linea=new Linea();
    linea.crearlinea("A",3);
    linea.moverPaquete();
    linea.moverPaquete();
    linea.moverPaquete();
    linea.moverPaquete();
    expect(linea.estado[1][2].getPaquete()).toBe("Paquete");
    expect(linea.estado[2][0].getPaquete()).toBe("Paquete");
    expect(linea.estado[3][0].getPaquete()).toBe("Paquete");


})


