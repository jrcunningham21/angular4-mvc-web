import { Injectable } from '@angular/core';


@Injectable()
export class TokenService {

    getToken(): String {
        return window.localStorage['MyAngularToken'];
    }

    saveToken(token: String) {
        window.localStorage['MyAngularToken'] = token;
    }

    destroyToken() {
        window.localStorage.removeItem('MyAngularToken');
    }

}