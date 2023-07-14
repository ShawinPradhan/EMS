import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';

const routes: Routes = [
  {path:'empList', component: EmployeeListComponent},
  {path:'home', component:HomeComponent},
  {path:'registerEmp', component: RegisterEmployeeComponent},
  {path:'updateEmp/:id', component: UpdateEmployeeComponent},
  {path:'viewEmp/:id', component: EmpDetailsComponent},
  {path:'', redirectTo:'home', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
