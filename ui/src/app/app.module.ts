import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './default/nav-bar/nav-bar.component';
import { AssideComponent } from './default/asside/asside.component';
import { DarshComponent } from './pages/darsh/darsh.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { AllCustomerComponent } from './pages/all-customer/all-customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './pages/login/login.component';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { CustomerDetailsComponent } from './pages/customer-details/customer-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import Swal from 'sweetalert2';
import { IrccFileComponent } from './pages/ircc-file/ircc-file.component';
import { PreparedFileComponent } from './pages/prepared-file/prepared-file.component';
import { ApplicantFileComponent } from './pages/applicant-file/applicant-file.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { RegisterUsersComponent } from './pages/register-users/register-users.component';
import { PendingApplicantComponent } from './pages/pending-applicant/pending-applicant.component';
import { PendingApplicantAdminComponent } from './pages/pending-applicant-admin/pending-applicant-admin.component';
import { AllApplicantUserComponent } from './pages/all-applicant-user/all-applicant-user.component';
import {MatBadgeModule} from '@angular/material/badge';
import { AddInvestorsComponent } from './pages/add-investors/add-investors.component';
import { AddPackegeComponent } from './pages/add-packege/add-packege.component';
import { AllInvestorsComponent } from './pages/all-investors/all-investors.component';
import { InvestorDetailsComponent } from './pages/investor-details/investor-details.component';
import {MatListModule} from '@angular/material/list';
import { EditInvestorsDetailsComponent } from './pages/edit-investors-details/edit-investors-details.component';
import { ApprovedApplicantAdminComponent } from './pages/approved-applicant-admin/approved-applicant-admin.component';
import { ApplicantProfileComponent } from './pages/applicant-profile/applicant-profile.component';
import { ApprovedApplicantUserComponent } from './pages/approved-applicant-user/approved-applicant-user.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AssideComponent,
    DarshComponent,
    AddCustomerComponent,
    AllCustomerComponent,
    LoginComponent,
    CustomerDetailsComponent,
    IrccFileComponent,
    PreparedFileComponent,
    ApplicantFileComponent,
    ManageUsersComponent,
    RegisterUsersComponent,
    PendingApplicantComponent,
    PendingApplicantAdminComponent,
    AllApplicantUserComponent,
    AddInvestorsComponent,
    AddPackegeComponent,
    AllInvestorsComponent,
    InvestorDetailsComponent,
    EditInvestorsDetailsComponent,
    ApprovedApplicantAdminComponent,
    ApplicantProfileComponent,
    ApprovedApplicantUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule ,
    MatPaginatorModule,
    MatDialogModule,
    MatTabsModule,
    MatProgressSpinnerModule,MatProgressBarModule,MatBadgeModule,
    MatListModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
