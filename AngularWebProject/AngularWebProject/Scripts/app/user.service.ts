import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from './Models/user.model';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    getHeroes(): Promise<User[]> {
        return this.http.get('Identity/GetUsers')
            .toPromise()
            .then(response => <User[]>response.json().data)
            .then(data => { return data; })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}