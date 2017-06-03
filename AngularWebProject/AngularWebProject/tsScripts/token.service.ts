import { Injectable } from '@angular/core';


@Injectable()
export class TokenService {

    getToken(): String {
        return window.localStorage['MyAngularToken'];
    }

    getSpotifyToken(): String {
        return window.localStorage['spotify-token'];
    }

    saveToken(token: String) {
        window.localStorage['MyAngularToken'] = token;
    }

    saveSpotifyToken(token: String) {
        window.localStorage['spotify-token'] = token;
    }

    destroyToken() {
        window.localStorage.removeItem('MyAngularToken');
    }

}