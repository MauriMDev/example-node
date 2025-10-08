const hash = require('./testindex');

test("verificar hash sha256", () => {
    const mensaje = "Hola, este es un mensaje de prueba.";
    const hashTest = hash(mensaje);
    expect(hashTest).toBe("2cc5170cf82fc5e805680ae861f02ddb40c2052668f4223212c9644341dfccd1");
});