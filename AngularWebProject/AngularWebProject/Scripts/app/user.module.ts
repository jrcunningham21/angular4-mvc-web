import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataListModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';

import { AuthenticationService } from './auth.service';
import { AuthHttp } from './auth-http.service';
import { TokenService } from './token.service';
import { UserService } from './user.service';
import { UserFormComponent } from './user.component';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DataListModule,
        DataTableModule
    ],
    providers: [
        FormBuilder,
        UserService,
        AuthenticationService,
        AuthHttp,
        TokenService
    ],
    exports: [
        UserFormComponent
    ],
    declarations: [
        UserFormComponent
    ]
})
export class UserModule { }