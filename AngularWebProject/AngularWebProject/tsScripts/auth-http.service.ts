import { Injectable } from '@angular/core';
import { Http, XHRBackend, Headers, ConnectionBackend, RequestOptions, Response, RequestOptionsArgs, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { TokenService } from './token.service';

@Injectable()
export class AuthHttp extends Http {
    constructor(
        private token: TokenService,
        backend: XHRBackend,
        defaultOptions: RequestOptions
    ) {
        super(backend, defaultOptions);
    }

    addAuthHeaders(options?: RequestOptionsArgs) {
        let authorizationData = this.token.getToken();

        options = options || new RequestOptions({
            headers: new Headers()            
        });

        if (authorizationData)
            options.headers.append('Authorization', 'bearer ' + authorizationData);

        return options;
    }

    get(url: string, options?: RequestOptionsArgs) {
        return super.get(url, this.addAuthHeaders(options));
    }

    post(url: string, body: any, options?: RequestOptionsArgs) {
        return super.post(url, body, this.addAuthHeaders(options));
    }

    put(url: string, body: any, options?: RequestOptionsArgs) {
        return super.put(url, body, this.addAuthHeaders(options));
    }

    patch(url: string, body: any, options?: RequestOptionsArgs) {
        return super.patch(url, body, this.addAuthHeaders(options));
    }

    delete(url: string, options?: RequestOptionsArgs) {
        return super.delete(url, this.addAuthHeaders(options));
    }
}