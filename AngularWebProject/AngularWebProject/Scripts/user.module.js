"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var primeng_1 = require("primeng/primeng");
var primeng_2 = require("primeng/primeng");
var auth_service_1 = require("./auth.service");
var auth_http_service_1 = require("./auth-http.service");
var token_service_1 = require("./token.service");
var user_service_1 = require("./user.service");
var user_component_1 = require("./user.component");
var forms_2 = require("@angular/forms");
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            primeng_1.DataListModule,
            primeng_2.DataTableModule
        ],
        providers: [
            forms_2.FormBuilder,
            user_service_1.UserService,
            auth_service_1.AuthenticationService,
            auth_http_service_1.AuthHttp,
            token_service_1.TokenService
        ],
        exports: [
            user_component_1.UserFormComponent
        ],
        declarations: [
            user_component_1.UserFormComponent
        ]
    })
], UserModule);
exports.UserModule = UserModule;
