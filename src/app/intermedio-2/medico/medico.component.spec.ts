import { MedicoComponent } from './medico.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicoService } from '../medico.service';
import {HttpClientModule} from '@angular/common/http';

//Creado manualmente
xdescribe('Medico Component', () => {

    let com: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(()=> {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService,],
            //Aqui se ponen las inyecciones de dependencias
            imports: [HttpClientModule,]
        })
        fixture = TestBed.createComponent(MedicoComponent);
        com = fixture.componentInstance;
    })


    it('Debe de crearse el componente', () => {
        expect( com ).toBeTruthy();
    });


    it('Debe de retornar un saludo', () => {
        const n = 'Jason';
        const res = com.saludos(n);
        expect( res ).toContain(n);
    });
});
