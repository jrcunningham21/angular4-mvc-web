import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataListModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';

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
        UserService
    ],
    exports: [
        UserFormComponent
    ],
    declarations: [
        UserFormComponent
    ]
})
export class UserModule { }