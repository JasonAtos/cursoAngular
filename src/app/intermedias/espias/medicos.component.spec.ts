import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


xdescribe('MedicosComponent', () => {
    const httpClient = new HttpClient(new HttpXhrBackend({ 
        build: () => new XMLHttpRequest() 
    }));

    let componente: MedicosComponent;
    const servicio = new MedicosService(httpClient);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init debe de cargar medicos', () => {
        const medicos = ['medico 1', 'medico2', 'medico3'];
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return of([medicos])
        })


        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Debe llamar agregarMedico()', () =>{
        const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => {
            return of([])
        })
        
        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();
    })

    it('Debe de añadir un medico nuevi', () => {
        const med = {id: 1, nombre: 'Alguno'}

        spyOn(servicio, 'agregarMedico').and.returnValue(of([med]))

        componente.agregarMedico();
        expect(componente.medicos.length).toBe(1);
        // expect(componente.medicos.indexOf(med)).toBeGreaterThanOrEqual(0);

    });

    xit('error al añadir medico', ()=> {
        const miErr = 'no se puedo agregar el medico';
        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miErr));

        componente.agregarMedico();

        expect(componente.mensajeError)
    })


    it('Debe borrar un medico', () => {

        spyOn(window, 'confirm').and.returnValue(true);//para no hacer clic manulmente


        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(of());

        componente.borrarMedico('1');

        expect(espia).toHaveBeenCalledWith('1');
    })

    
    it('NO debe borrar un medico', () => {

        spyOn(window, 'confirm').and.returnValue(false);


        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(of());

        componente.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledWith('1');
    })

});
