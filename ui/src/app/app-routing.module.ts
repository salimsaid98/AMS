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
import { PreparedFileComponent } from './pages/prepared-file/prepared-file.component';
import { IrccFileComponent } from './pages/ircc-file/ircc-file.component';
import { ApplicantFileComponent } from './pages/applicant-file/applicant-file.component';
import { RegisterUsersComponent } from './pages/register-users/register-users.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { PendingApplicantComponent } from './pages/pending-applicant/pending-applicant.component';
import { PendingApplicantAdminComponent } from './pages/pending-applicant-admin/pending-applicant-admin.component';
import { AllApplicantUserComponent } from './pages/all-applicant-user/all-applicant-user.component';
import { AddInvestorsComponent } from './pages/add-investors/add-investors.component';
import { AddPackegeComponent } from './pages/add-packege/add-packege.component';
import { AllInvestorsComponent } from './pages/all-investors/all-investors.component';
import { InvestorDetailsComponent } from './pages/investor-details/investor-details.component';

const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:AssideComponent,canActivate: [AuthGuard],children:[
  {path:'',redirectTo:"darsh",pathMatch:'full'},
  {path:'darsh',component:DarshComponent},
  {path:'add-cust',component:AddCustomerComponent},
  {path:'all-cust',component:AllCustomerComponent},
  {path:'applicant-details',component:CustomerDetailsComponent},
  {path:'prepared-file',component:PreparedFileComponent},
  {path:'ircc-file',component:IrccFileComponent},
  {path:'applicant-file',component:ApplicantFileComponent},
  {path:'register-users',component:RegisterUsersComponent},
  {path:'manage-users',component:ManageUsersComponent},
  {path:'pending-applicant',component:PendingApplicantComponent},
  {path:'pending-applicant-admin',component:PendingApplicantAdminComponent},
  {path:'all-applicant',component:AllApplicantUserComponent},
  {path:'add-investos',component:AddInvestorsComponent},
  {path:'add-package',component:AddPackegeComponent},
  {path:'all-investors',component:AllInvestorsComponent},
  {path:'investor-details',component:InvestorDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
