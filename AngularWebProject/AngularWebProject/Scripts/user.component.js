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
require("rxjs/add/operator/toPromise.js");
require("rxjs/add/operator/map");
var user_model_1 = require("./Models/user.model");
var user_role_model_1 = require("./Models/user-role.model");
var user_service_1 = require("./user.service");
var auth_http_service_1 = require("./auth-http.service");
var UserFormComponent = (function () {
    function UserFormComponent(userService, authHttp) {
        this.userService = userService;
        this.authHttp = authHttp;
        this.model = new user_model_1.User();
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.getRoles();
    };
    UserFormComponent.prototype.onRoleSelect = function (event) {
    };
    UserFormComponent.prototype.onUserSelect = function (event) {
    };
    UserFormComponent.prototype.getUsers = function () {
        var _this = this;
        this.authHttp.get('http://localhost:54449/api/Users/GetUsers').subscribe(function (next) {
            ;
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
        this.authHttp.get('http://localhost:54449/api/Users/GetRoles')
            .subscribe(function (next) {
            _this.roles = next.json();
        }, function (error) { return console.log(error); });
    };
    UserFormComponent.prototype.onAddUserToRole = function () {
        var _this = this;
        var data = { user: this.selectedUser, roleName: this.selectedRole.Name };
        this.authHttp.post('http://localhost:54449/api/Users/AddUserToRole', data)
            .subscribe(function (next) {
            _this.selectedRole = null;
            _this.selectedUser = null;
            _this.getUsers();
        }, function (error) { return console.log(error); });
    };
    UserFormComponent.prototype.onSubmitRole = function () {
        var _this = this;
        var str = [];
        str.push(encodeURIComponent("roleName") + "=" + encodeURIComponent(this.role));
        var formData = str.join();
        debugger;
        //var data = encodeURIComponent("roleName") + "=" +  encodeURIComponent(this.role);
        this.authHttp.post('http://localhost:54449/api/Users/CreateRole', formData)
            .subscribe(function (next) {
            _this.getRoles();
            _this.role = "";
        }, function (error) { return console.log(error); });
    };
    UserFormComponent.prototype.onSubmitUser = function () {
        var _this = this;
        var str = [];
        for (var p in this.model) {
            debugger;
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(this.model[p]));
        }
        var formData = str.join("&");
        this.authHttp.post('http://localhost:54449/api/Users/CreateUser', formData)
            .subscribe(function (next) {
            _this.getUsers();
            _this.model = new user_model_1.User();
        }, function (error) { return console.log(error); });
    };
    Object.defineProperty(UserFormComponent.prototype, "diagnostic", {
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
        templateUrl: './templates/user-form.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_http_service_1.AuthHttp])
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
