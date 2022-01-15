import { FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formulario';
describe('Formularios', () => {
    let componente: FormularioRegister;

    beforeEach(() => {
        componente = new FormularioRegister(new FormBuilder())
    });


    it('Crear formulario con 2 campos', () => {

        expect(componente.form.contains('email')).toBeTrue();
        expect(componente.form.contains('password')).toBeTrue();
    });

    it('email debe ser obligatorio', () => {
        const control = componente.form.get('email');
        control?.setValue('');
        expect(control?.valid).toBeFalse();
    });

    it('email debe ser valido', () => {
        const control = componente.form.get('email');
        control?.setValue('hola@hola');
        expect(control?.valid).toBeTrue();
    });

});
