import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenDoneOrdersComponent } from './kitchen-done-orders.component';

describe('KitchenDoneOrdersComponent', () => {
  let component: KitchenDoneOrdersComponent;
  let fixture: ComponentFixture<KitchenDoneOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenDoneOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenDoneOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
