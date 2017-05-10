"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var token_service_1 = require("./token.service");
var AuthHttp = (function (_super) {
    __extends(AuthHttp, _super);
    function AuthHttp(token, backend, defaultOptions) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.token = token;
        return _this;
    }
    AuthHttp.prototype.addAuthHeaders = function (options) {
        var authorizationData = this.token.getToken();
        options = options || new http_1.RequestOptions({
            headers: new http_1.Headers()
        });
        debugger;
        if (authorizationData)
            options.headers.append('Authorization', 'bearer ' + authorizationData);
        return options;
    };
    AuthHttp.prototype.get = function (url, options) {
        return _super.prototype.get.call(this, url, this.addAuthHeaders(options));
    };
    AuthHttp.prototype.post = function (url, body, options) {
        return _super.prototype.post.call(this, url, body, this.addAuthHeaders(options));
    };
    AuthHttp.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, url, body, this.addAuthHeaders(options));
    };
    AuthHttp.prototype.patch = function (url, body, options) {
        return _super.prototype.patch.call(this, url, body, this.addAuthHeaders(options));
    };
    AuthHttp.prototype.delete = function (url, options) {
        return _super.prototype.delete.call(this, url, this.addAuthHeaders(options));
    };
    return AuthHttp;
}(http_1.Http));
AuthHttp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [token_service_1.TokenService,
        http_1.XHRBackend,
        http_1.RequestOptions])
], AuthHttp);
exports.AuthHttp = AuthHttp;
