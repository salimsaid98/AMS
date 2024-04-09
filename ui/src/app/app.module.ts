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
    MatProgressSpinnerModule,MatProgressBarModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
