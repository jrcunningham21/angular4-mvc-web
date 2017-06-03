///<reference path="./../typings/globals/core-js/index.d.ts"/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './not-found.component';
import { AuthFormComponent } from './auth.component';
import { SpotifyComponent } from './spotify.component';

@NgModule({
    imports: [
        BrowserModule,
        UserModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        AuthFormComponent,
        SpotifyComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }