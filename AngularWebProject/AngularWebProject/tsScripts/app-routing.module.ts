import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
import { UserFormComponent } from './user.component';
import { AuthFormComponent } from './auth.component';
import { SpotifyComponent } from './spotify.component';

const appRoutes: Routes = [
    { path: 'auth', component: AuthFormComponent },
    { path: 'users', component: UserFormComponent },
    { path: 'spotify', component: SpotifyComponent },
    //{ path: 'access_token/:id', component: UserFormComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }