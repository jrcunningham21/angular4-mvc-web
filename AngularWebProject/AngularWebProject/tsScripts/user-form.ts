import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise.js';
import 'rxjs/add/operator/map';

import { User } from './user';


@Component({
    selector: 'user-form',
    templateUrl: '/templates/user-form.html'
})
export class UserFormComponent {
    model = new User('jrcunningham21', 'jrc@123.com', 'password');

    submitted = false;

    constructor(
        private http: Http
    ) { }
    
    onSubmit() {
        this.submitted = true;        
        this.http.get('Identity/CreateUser')
            .subscribe(
            next => console.log(next),
            error => console.log(error)
            );
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}