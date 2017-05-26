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
var user_model_1 = require("./Models/user.model");
var user_role_model_1 = require("./Models/user-role.model");
var user_service_1 = require("./user.service");
var auth_service_1 = require("./auth.service");
var auth_http_service_1 = require("./auth-http.service");
var UserFormComponent = (function () {
    function UserFormComponent(http, userService, authService, authHttp) {
        this.http = http;
        this.userService = userService;
        this.authService = authService;
        this.authHttp = authHttp;
        this.model = new user_model_1.User();
        this.getUsers();
        this.getRoles();
    }
    UserFormComponent.prototype.onRoleSelect = function (event) {
        debugger;
    };
    UserFormComponent.prototype.onUserSelect = function (event) {
        debugger;
    };
    UserFormComponent.prototype.getUsers = function () {
        var _this = this;
        //this.http.get('Identity/GetUsers')
        this.authHttp.get('http://localhost:54449/api/Users')
            .subscribe(function (next) {
            _this.users = next.json();
            var usersLength = _this.users.length;
            var username = "";
            _this.roleList = [];
            for (var i = 0; i < usersLength; i++) {
                username = _this.users[i].UserName;
                var rolesLength = _this.users[i].Roles.length;
                _this.roleString = "";
                for (var j = 0; j < rolesLength; j++) {
                    if (j == 0)
                        _this.roleString += _this.users[i].Roles[j].RoleId;
                    else
                        _this.roleString += ", " + _this.users[i].Roles[j].RoleId;
                }
                _this.userRole = new user_role_model_1.UserRole();
                _this.userRole.UserName = username.toString();
                _this.userRole.Roles = _this.roleString;
                _this.roleList.push(_this.userRole);
            }
        }, function (error) { return console.log(error); });
    };
    UserFormComponent.prototype.getRoles = function () {
        var _this = this;
        this.http.get('Identity/GetRoles')
            .subscribe(function (next) {
            _this.roles = next.json();
        }, function (error) { return console.log(error); });
    };
    UserFormComponent.prototype.onAddUserToRole = function () {
        var _this = this;
        var data = { user: this.selectedUser, roleName: this.selectedRole.Name };
        this.http.post('Identity/AddUserToRole', data)
            .subscribe(function (next) {
            _this.selectedRole = null;
            _this.selectedUser = null;
            _this.getUsers();
        }, function (error) { return console.log(error); });
    };
    UserFormComponent.prototype.onSubmitRole = function () {
        var _this = this;
        this.http.post('Identity/CreateRole', { roleName: this.role })
            .subscribe(function (next) {
            _this.getRoles();
            _this.role = "";
        }, function (error) { return console.log(error); });
    };
    UserFormComponent.prototype.onSubmitUser = function () {
        var _this = this;
        var data = { user: this.model, password: this.model.password };
        this.http.post('Identity/CreateUser', data)
            .subscribe(function (next) {
            _this.getUsers();
            _this.model = new user_model_1.User();
        }, function (error) { return console.log(error); });
    };
    Object.defineProperty(UserFormComponent.prototype, "diagnostic", {
        //onSubmitAuth() {
        //    this.authService.login(this.email, this.password);
        //    this.getUsers();
        //}
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserFormComponent.prototype, "roleDiagnostic", {
        get: function () { return JSON.stringify(this.role); },
        enumerable: true,
        configurable: true
    });
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        templateUrl: 'templates/user-form.html'
    }),
    __metadata("design:paramtypes", [http_1.Http,
        user_service_1.UserService,
        auth_service_1.AuthenticationService,
        auth_http_service_1.AuthHttp])
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user.component.js.map