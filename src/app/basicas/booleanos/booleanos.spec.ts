import { usuarioIngresado } from './booleanos';
xdescribe('Pruebas de booleanos', () => {

    it('Debe ser true', () => {
        expect(usuarioIngresado()).toBeTrue();
    });
    
});