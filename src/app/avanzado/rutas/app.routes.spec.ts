import { rutas } from './app.routes';
import { MedicoComponent } from '../../intermedio-2/medico/medico.component';
xdescribe('Rutas principales', () => {

    it('Debe de existir la ruta medico/:id', () => {

        expect(rutas).toContain(
            {path: 'medico/:id', component: MedicoComponent}
        );
    });
});
