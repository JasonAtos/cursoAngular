import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, from, Observable, Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter {
  navigate(params: any){}
}

class FakeActivatedRoute {
  // params: Observable<any> = EMPTY;
  private subject = new Subject();
  
  push(valor:any){
    this.subject.next(valor);
  }

  get params() {
    return this.subject.asObservable();
  }

}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers: [
        { provide: Router, useClass: FakeRouter},
        { provide: ActivatedRoute, 
          //useClass: FakeActivatedRoute,
        useValue: {
          params: from([{id:'nuevo'}])
        } }, 
        //Se imoprtan por la inyeccion
        //pero se sustituyen de esa manera para simular
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a medico cuando se guarda',() => {
    // const ro = TestBed.get(Router); //antes se usaba get y ahora es inject
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();
    //No es necesario saber que se redireccione pues eso ya lo hizo angular

    expect(spy).toHaveBeenCalledOnceWith(['medico', '123']);
  })


  it('Debe de colocar el id = nuevo', () => {
    component = fixture.componentInstance;
    // const activatedRoute: FakeActivatedRoute = TestBed.inject(ActivatedRoute);
    // activatedRoute.push({id: 'nuevo'});

    expect(component.id).toBe('nuevo')
  })

});
