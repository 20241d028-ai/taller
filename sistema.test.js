const { validarTexto } = require('./sistema');

test('validar que detecte contenido', () => {
    const resultado = validarTexto("hola");
    expect(resultado).toBe("con-texto");
});