﻿import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise.js';
import 'rxjs/add/operator/map';

import { User } from './user';
import { UserRole } from './userRole';
//import { UserService } from './user-service';


@Component({
    selector: 'user-form',
    templateUrl: 'templates/user-form.html'
})
export class UserFormComponent {
    model = new User('', '', '');
    users: any;
    role: any;
    roles: any;
    selectedUser: User;
    selectedRole: any;
    userRoles: any;

    userRole: UserRole;
    roleList: UserRole[];   
    roleString: string;

    constructor(
        private http: Http
    ) { 
        this.getUsers();
        this.getRoles();
    }

    onRoleSelect(event) {
        debugger;
    }
    onUserSelect(event) {
        debugger;
    }

    getUsers() {
        this.http.get('Identity/GetUsers')
            .subscribe(
            (next) => {
                this.users = next.json();
                var usersLength = this.users.length;
                var username = "";
                this.roleList = [];
                for (var i = 0; i < usersLength; i++)
                {
                    username = this.users[i].UserName;
                    var rolesLength = this.users[i].Roles.length;
                    this.roleString = "";
                    for (var j = 0; j < rolesLength; j++)
                    {
                        if (j == 0)
                            this.roleString += this.users[i].Roles[j].RoleId;
                        else
                            this.roleString += ", " + this.users[i].Roles[j].RoleId;
                    }
                    this.userRole = new UserRole(username.toString(), this.roleString);
                    this.roleList.push(this.userRole);
                }
            },
            error => console.log(error)
            );
    }

    getRoles() {
        this.http.get('Identity/GetRoles')
            .subscribe(
            next => {
                this.roles = next.json();
            },
            error => console.log(error)
            );
    }

    onAddUserToRole() {
        var data = { user: this.selectedUser, roleName: this.selectedRole.Name };
        this.http.post('Identity/AddUserToRole', data)
            .subscribe(
            next => {
                this.selectedRole = null;
                this.selectedUser = null;
                this.getUsers();
            },
            error => console.log(error)
            );
    }

    onSubmitRole() {
        this.http.post('Identity/CreateRole', { roleName: this.role })
            .subscribe(
            next => {
                this.getRoles();
                this.role = "";
            },
            error => console.log(error)
            );
    }
    
    onSubmitUser() {
        var data = { user: this.model, password: this.model.password };
        this.http.post('Identity/CreateUser', data)
            .subscribe(
            next => {
                this.getUsers();
                this.model = new User('', '', '');
            },
            error => console.log(error)
            );
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
    get roleDiagnostic() { return JSON.stringify(this.role); }
}