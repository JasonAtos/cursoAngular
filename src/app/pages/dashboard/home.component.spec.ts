import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './home.component';
import { ROOT_REDUCERS } from '../../store/app.state';
import { StoreModule } from '@ngrx/store';

describe('HomeComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports:[StoreModule.forRoot(ROOT_REDUCERS)]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
