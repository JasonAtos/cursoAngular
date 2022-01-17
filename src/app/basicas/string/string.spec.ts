import { mensaje } from './string';
// describe('Prueba a strings');
// it('Debe de');

xdescribe('Pruebas de String', () => {

    it('Debe regresar un string', () => {
        const x = mensaje('Jason');
        expect(typeof(x)).toBe('string')
    });

    it('contiene el nombre enviado', () => {
        const nombre = 'Jason';
        const x = mensaje(nombre);
        expect(x).toContain(nombre)
    });





});