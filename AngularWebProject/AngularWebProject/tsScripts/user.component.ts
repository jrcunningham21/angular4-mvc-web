import { OnInit, OnDestroy, Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestOptionsArgs, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise.js';
import 'rxjs/add/operator/map';

import { User } from './Models/user.model';
import { UserRole } from './Models/user-role.model';
import { UserService } from './user.service';
import { AuthHttp } from './auth-http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'user-form',
    templateUrl: './templates/user-form.html'
})
export class UserFormComponent {
    model = new User();
    users: any;
    role: any;
    roles: any;
    selectedUser: User;
    selectedRole: any;
    userRoles: any;

    //email: string;
    //password: string;

    userRole: UserRole;
    roleList: UserRole[];   
    roleString: string;

    reqOptionArgs: RequestOptionsArgs;

    constructor(
        private userService: UserService,
        private authHttp: AuthHttp
    ) { 

    }

    ngOnInit() {
        this.getUsers();
        this.getRoles();
    }

    onRoleSelect(event) {
        
    }
    onUserSelect(event) {
        
    }

    getUsers() {
        this.authHttp.get('http://localhost:54449/api/Users/GetUsers').subscribe(
            (next) => {
                ;
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
                    this.userRole = new UserRole();
                    this.userRole.UserName = username.toString();
                    this.userRole.Roles = this.roleString;

                    this.roleList.push(this.userRole);
                }
            },
            error => console.log(error)
            );
    }

    getRoles() {
        this.authHttp.get('http://localhost:54449/api/Users/GetRoles')
            .subscribe(
            next => {
                this.roles = next.json();
            },
            error => console.log(error)
            );
    }

    onAddUserToRole() {
        var data = { user: this.selectedUser, roleName: this.selectedRole.Name };
        this.authHttp.post('http://localhost:54449/api/Users/AddUserToRole', data)
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
        var str = [];
        str.push(encodeURIComponent("roleName") + "=" + encodeURIComponent(this.role))
        var formData = str.join();
        debugger;
        //var data = encodeURIComponent("roleName") + "=" +  encodeURIComponent(this.role);
        this.authHttp.post('http://localhost:54449/api/Users/CreateRole', formData)
            .subscribe(
            next => {
                this.getRoles();
                this.role = "";
            },
            error => console.log(error)
            );
    }
    
    onSubmitUser() {
        var str = [];
        for (var p in this.model)        
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(this.model[p]));
        var formData = str.join("&");

        this.authHttp.post('http://localhost:54449/api/Users/CreateUser', formData)
            .subscribe(
            next => {
                this.getUsers();
                this.model = new User();
            },
            error => console.log(error)
            );
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
    get roleDiagnostic() { return JSON.stringify(this.role); }
}