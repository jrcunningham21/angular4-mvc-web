import { Injectable } from '@angular/core';
import { Http, XHRBackend, Headers, ConnectionBackend, Request, RequestOptions, Response, RequestOptionsArgs, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { TokenService } from './token.service';

@Injectable()
export class AuthHttp extends Http {

    //private token: TokenService;

    constructor(        
        backend: XHRBackend,
        options: RequestOptions
    ) {
        options.headers.set('Content-Type', 'application/x-www-form-urlencoded');
        super(backend, options);
    }

    addAuthHeaders(options?: RequestOptionsArgs) {
        //let authorizationData = this.token.getToken();

        options = options || new RequestOptions({
            headers: new Headers()            
        });

        //if (authorizationData)
        //    options.headers.append('Authorization', 'bearer ' + authorizationData);

        return options;
    }

    get(url: string, options?: RequestOptionsArgs) {
        return super.get(url, this.addAuthHeaders(options));
    }

    post(url: string, body: any, options?: RequestOptionsArgs) {
        options = options || new RequestOptions({
            headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }),
            body: body,
            method: RequestMethod.Post
        });
        return super.post(url, body, options);
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