import { incrementar } from './numeros';
xdescribe('Pruebas de Numeros', () => {

    it('Debe retornar 100', () => {
        const r = incrementar(300);
        expect(r).toBe(100)
    })


    it('Debe retornar el numero enviado +1', () => {
        const r = incrementar(50);
        expect(r).toBe(51)
    })
    
});