import { usuarioIngresado } from './booleanos';
describe('Pruebas de booleanos', () => {

    it('Debe ser true', () => {
        expect(usuarioIngresado()).toBeTrue();
    });
    
});