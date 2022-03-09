import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { ROOT_REDUCERS } from '../store/app.state';
import { StoreModule } from '@ngrx/store';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        AngularFireModule.initializeApp(environment.firebaseConfig),
        StoreModule.forRoot(ROOT_REDUCERS)
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
