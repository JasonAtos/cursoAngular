import { IncrementadorComponent } from './incrementador.component';
xdescribe('Incrementador Component Unit', () => {

    let com: IncrementadorComponent;
    beforeEach(()=> com = new IncrementadorComponent())   

    it('No pasar de 100', () => {

        com.progreso = 50;
        com.cambiarValor(5);

        expect(com.progreso).toBe(55);
    });
});
//Una forma de separa las pruebas unitarias y las de integracion