import { Jugador2 } from './jugador';
describe('Jugador2 emmit', () => {
    let judador: Jugador2;

    beforeEach(() => judador = new Jugador2())



    it('Debe emitir un evento', () => {
        let nuevoHp = 0;

        judador.hpCambia.subscribe(hp => {
            nuevoHp = hp;
        });

        judador.recibeDanio(1000);

        expect(nuevoHp).toBe(0);        
    });

    
    it('Debe emitir un evento y tener 50 de vida', () => {
        let nuevoHp = 0;

        judador.hpCambia.subscribe(hp => nuevoHp = hp);

        judador.recibeDanio(50);

        expect(nuevoHp).toBe(50);        
    });


});
