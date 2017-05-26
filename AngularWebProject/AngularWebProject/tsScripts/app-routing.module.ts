import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
import { UserFormComponent } from './user.component';
import { AuthFormComponent } from './auth.component';

const appRoutes: Routes = [
    { path: 'auth', component: AuthFormComponent },
    { path: 'users', component: UserFormComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }