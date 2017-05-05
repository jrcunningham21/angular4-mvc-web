///<reference path="./../typings/globals/core-js/index.d.ts"/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataListModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';

import { AppComponent } from './app';
import { UserFormComponent } from './user-form';

import { AppRoutingModule } from './app-routing';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        DataListModule,
        DataTableModule],
    declarations: [
        AppComponent,
        UserFormComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }