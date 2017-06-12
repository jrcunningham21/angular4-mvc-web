import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { SpotifyService } from './spotify.service';


@Component({
    selector: 'my-app',
    template: `    
        <h2>My favorite skill is: {{myskills}}</h2>
        <p>Skill:</p>
        <ul>
          <li *ngFor="let skl of skills">
            {{ skl }}
          </li>        
        </ul>    
        <a routerLink="/auth" routerLinkActive="active">Authorize</a>
        <a routerLink="/users" routerLinkActive="active">Users</a>
        <a routerLink="/spotify" routerLinkActive="active">Spotify</a>

        <router-outlet></router-outlet>
        <!-- Routed views go here -->

  `
})
export class AppComponent {
    title = 'ASP.NET MVC 5 with Angular 2';
    skills = ['MVC 5', 'Angular 2', 'TypeScript', 'Visual Studio 2017', 'Identity', 'OAuth'];
    myskills = this.skills[1];

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {       
    }

    ngOnInit() {
        
    }   
}