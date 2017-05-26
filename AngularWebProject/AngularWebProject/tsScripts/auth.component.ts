import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise.js';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './auth.service';
import { AuthHttp } from './auth-http.service';

@Component({
    selector: 'auth-form',
    templateUrl: 'templates/auth-form.html'
})
export class AuthFormComponent {

    email: string;
    password: string;

    constructor(
        private authService: AuthenticationService,
        private authHttp: AuthHttp
    ) {

    }

    ngOnInit() {

    }

    onSubmitAuth() {
        this.authService.login(this.email, this.password);
    }
}