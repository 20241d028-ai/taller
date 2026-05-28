const {validarTexto}=require('./sistema');
test('validar que detecte contenido',() =>{
    const resultar=validarTexto("hola");
    expect(resultado).toBe("con-texto");

});

