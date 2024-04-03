import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './default/nav-bar/nav-bar.component';
import { AssideComponent } from './default/asside/asside.component';
import { DarshComponent } from './pages/darsh/darsh.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { AllCustomerComponent } from './pages/all-customer/all-customer.component';
import { LoginComponent } from './pages/login/login.component';
import { CustomerDetailsComponent } from './pages/customer-details/customer-details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:AssideComponent,canActivate: [AuthGuard],children:[
    {path:'',redirectTo:"darsh",pathMatch:'full'},
    {path:'darsh',component:DarshComponent},
    {path:'add-cust',component:AddCustomerComponent},
    {path:'all-cust',component:AllCustomerComponent},
    {path:'applicant-details',component:CustomerDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
