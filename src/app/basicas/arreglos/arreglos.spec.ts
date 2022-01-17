import { getRobots } from './arrreglos';
xdescribe('Prueba de arreglos', () => {
    
    it('Debe tener 3 robots', () => {
        const r = getRobots();
        expect(r.length).toBeGreaterThanOrEqual(3)
    })


    it('Existe Robot 2 y Robot 3', () => {
        const r = getRobots();
        expect(r).toContain('Robot2');
        expect(r).toContain('Robot3');
    })

});