"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
require("rxjs/add/operator/map");
var auth_http_service_1 = require("./auth-http.service");
var token_service_1 = require("./token.service");
var AuthenticationService = (function () {
    function AuthenticationService(authHttp, http, tokenService) {
        this.authHttp = authHttp;
        this.http = http;
        this.tokenService = tokenService;
        this.isAuthenticatedSubject = new ReplaySubject_1.ReplaySubject(1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
        this.baseAuthUrl = "http://localhost:54449/";
    }
    AuthenticationService.prototype.populate = function () {
        var _this = this;
        if (localStorage.getItem('MyAngularToken')) {
            this.authHttp.get(this.baseAuthUrl + 'Account/Verify').subscribe(function (success) { return _this.isAuthenticatedSubject.next(true); }, function (error) {
                _this.isAuthenticatedSubject.next(false);
                _this.purgeAuth();
            });
        }
        else {
            this.purgeAuth();
        }
    };
    AuthenticationService.prototype.purgeAuth = function () {
        this.tokenService.destroyToken();
        this.isAuthenticatedSubject.next(false);
    };
    AuthenticationService.prototype.login = function (email, password) {
        var _this = this;
        this.http.post(this.baseAuthUrl + 'Token', "grant_type=password&username=" + email + "&password=" + password)
            .subscribe(function (success) {
            var response = success.json();
            _this.tokenService.saveToken(response.access_token);
            _this.isAuthenticatedSubject.next(true);
            //this.router.navigateByUrl(this.redirectUrl || '/');
        }, function (error) { return console.log(error); });
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (this.tokenService.getToken()) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.logOut = function () {
        this.purgeAuth();
        //this.router.navigateByUrl('/Login');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_http_service_1.AuthHttp,
        http_1.Http,
        token_service_1.TokenService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
