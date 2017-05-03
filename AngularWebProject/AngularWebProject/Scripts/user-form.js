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
require("rxjs/add/operator/toPromise.js");
require("rxjs/add/operator/map");
var user_1 = require("./user");
var UserFormComponent = (function () {
    function UserFormComponent(http) {
        this.http = http;
        this.model = new user_1.User('jrcunningham21', 'jrc@123.com', 'password');
        this.submitted = false;
    }
    UserFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.http.get('Identity/CreateUser')
            .subscribe(function (next) { return console.log(next); }, function (error) { return console.log(error); });
    };
    Object.defineProperty(UserFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        templateUrl: '/templates/user-form.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.js.map