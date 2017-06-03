"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///<reference path="./../typings/globals/core-js/index.d.ts"/>
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var user_module_1 = require("./user.module");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var not_found_component_1 = require("./not-found.component");
var auth_component_1 = require("./auth.component");
var spotify_component_1 = require("./spotify.component");
var http_1 = require("@angular/http");
var auth_http_service_1 = require("./auth-http.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            user_module_1.UserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            not_found_component_1.PageNotFoundComponent,
            auth_component_1.AuthFormComponent,
            spotify_component_1.SpotifyComponent
        ],
        providers: [{
                provide: http_1.Http,
                useClass: auth_http_service_1.AuthHttp
            }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
