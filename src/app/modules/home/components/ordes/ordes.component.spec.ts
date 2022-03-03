import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdesComponent } from './ordes.component';

describe('OrdesComponent', () => {
  let component: OrdesComponent;
  let fixture: ComponentFixture<OrdesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
