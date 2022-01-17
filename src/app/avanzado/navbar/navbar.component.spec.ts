import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';


xdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Debe de existir un link a la pagina de medicos', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));//Necesitaba RouterTestingModule
    // const debugElements = fixture.debugElement.queryAll(By.css('a'))
    // console.log(debugElements);
    let existe: boolean = false;
    debugElements.forEach(a => {
      if(a.attributes['routerLink'] === '/medicos' )
        existe = true;
    })    
    expect(existe).toBeTrue();
  });
});
