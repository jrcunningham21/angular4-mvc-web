import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map'

import { AuthHttp } from './auth-http.service';
import { TokenService } from './token.service';

@Injectable()
export class AuthenticationService {
    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    baseAuthUrl: string = "http://localhost:54449/";
    redirectUrl: string;

    constructor(
        private authHttp: AuthHttp,
        private http: Http,
        private tokenService: TokenService
    ) { }

    populate() {
        if (localStorage.getItem('MyAngularToken')) {
            this.authHttp.get(this.baseAuthUrl + 'Account/Verify').subscribe(
                success => this.isAuthenticatedSubject.next(true),
                error => {
                    this.isAuthenticatedSubject.next(false);
                    this.purgeAuth();
                }
            );
        } else {
            this.purgeAuth();
        }
    }

    purgeAuth() {
        this.tokenService.destroyToken();
        this.isAuthenticatedSubject.next(false);
    }

    login(email: string, password: string) {
        this.http.post(this.baseAuthUrl + 'Token', `grant_type=password&username=${email}&password=${password}`)
            .subscribe(
            success => {
                debugger;
                let response = success.json();
                this.tokenService.saveToken(response.access_token);
                this.isAuthenticatedSubject.next(true);
                //this.router.navigateByUrl(this.redirectUrl || '/');
            },
            error => console.log(error)
            );
    }

    isLoggedIn(): boolean {
        if (this.tokenService.getToken()) {
            return true;
        } else {
            return false;
        }
    }

    logOut() {
        this.purgeAuth();
        //this.router.navigateByUrl('/Login');
    }
}