import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


xdescribe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe mostrar leyenda', () => {
        component.leyenda = 'Nueva leyenda!!!';
        fixture.detectChanges();
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain('Nueva leyenda!!!');
        
    });

    it('Llamar funcion y mostrar 55', (done) => {
        component.cambiarValor(5);
        fixture.detectChanges();

        fixture.whenStable() //Se usa asi, porque se evaluaba antes de que se el detect changes terminara
        .then(() => {
            const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
            // console.log(input);
            expect(input.valueAsNumber).toBe(55);
            done(); //Se debe de usar por la version del angular CLI
        });
    });

    it('Simular click en botonoes inc/dec', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        // console.log(botones);
        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    });

    it('Click en boton decrementar y mostrar 45', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);
        fixture.detectChanges();
        const h3: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(h3.innerText).toContain('45');

    });

});