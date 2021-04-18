import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { SiteHomeComponent } from './site-home/site-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { EmployeeListShowComponent } from './employee-list-show/employee-list-show.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeinfoComponent,
    SiteHomeComponent,
    EmployeListComponent,
    EmployeeListShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
