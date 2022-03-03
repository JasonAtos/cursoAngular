import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, Subject, switchMap, take } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spotiApp';

  constructor(
    private readonly router: Router,
    private readonly auth: AuthService,
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart),
      map((event) => event instanceof NavigationStart ? event : null),
      take(1),
    ).subscribe({
      next: (routeStart) => {
        if (routeStart) {
          this.auth.checkIfLoggedIn(routeStart);
        }
      }
    });
  }

}
