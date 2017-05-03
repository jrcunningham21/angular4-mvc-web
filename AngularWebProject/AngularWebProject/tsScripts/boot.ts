///<reference path="./../typings/globals/core-js/index.d.ts"/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app';
import { HttpModule } from '@angular/http';

import { UserFormComponent } from './user-form';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule],
    declarations: [
        AppComponent,
        UserFormComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }