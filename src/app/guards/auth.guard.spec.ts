import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { ROOT_REDUCERS } from '../store/app.state';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot(ROOT_REDUCERS),
        RouterTestingModule,
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
