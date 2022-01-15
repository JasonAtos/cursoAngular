import { Jugador } from './clase';
xdescribe('Prueba de clase', () => {
    let jugador = new Jugador();

    beforeAll(() => {
        // console.log('befo ALl');
        // jugador.hp = 100;
        
    });
    beforeEach(() => {
        // console.log('befo eac');
        // jugador.hp = 100;
        // jugador = new Jugador();
        
    });
    afterAll(() => {
        // console.log('after all');
        // jugador.hp = 100;
        
    });
    afterEach(() => {
        // console.log('after each');
        // jugador.hp = 100;
        
    });

    it('20 de daño', () => {        
        const r = jugador.recibeDanio(20);        
        expect(r).toBe(80);
    });

    it('50 de daño', () => {
        const r = jugador.recibeDanio(50);
        // console.log(r);
        expect(r).toBe(30);
    });

    it('Mas de 100 de daño', () => {
        const r = jugador.recibeDanio(150);
        expect(r).toBe(0);
    });




});