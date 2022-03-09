import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterComponent } from './waiter.component';
import { ROOT_REDUCERS } from '../../store/app.state';
import { StoreModule } from '@ngrx/store';

describe('WaiterComponent', () => {
  let component: WaiterComponent;
  let fixture: ComponentFixture<WaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaiterComponent ],
      imports:[StoreModule.forRoot(ROOT_REDUCERS)]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
