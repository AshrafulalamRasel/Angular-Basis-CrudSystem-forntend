import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeinfoComponent} from './employeeinfo/employeeinfo.component';
import {SiteHomeComponent} from './site-home/site-home.component';
import {EmployeListComponent} from './employe-list/employe-list.component';
import {EmployeeListShowComponent} from './employee-list-show/employee-list-show.component';

const routes: Routes = [

  {
    path: '',
    component: SiteHomeComponent,
    children: [
      {path: '', component: SiteHomeComponent, pathMatch: 'full'}

    ]
  },

  {
    path: 'startapp',
    component: EmployeeinfoComponent,
    children: [
      {path: 'startapp', component: EmployeeinfoComponent, canActivate: [true]},
    ],
  },

  {
    path: 'employee/list',
    component: EmployeListComponent,
    children: [
      {path: 'employee/list', component: EmployeListComponent, canActivate: [true]},
    ],
  },

  {
    path: 'employee/list',
    component: EmployeListComponent,
    children: [
      {path: 'employee/list', component: EmployeListComponent, canActivate: [true]},
    ],
  },

  {
    path: 'employee/list/show-by/:id',
    component: EmployeeListShowComponent,
    children: [
      {path: 'employee/list/show-by/:id', component: EmployeeListShowComponent, canActivate: [true]},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
