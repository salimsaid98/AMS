import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { LoginServicesService } from 'src/app/services/Login/login/login-services.service';
import { ApplicantStatusServicesService } from 'src/app/services/applicant/applicantStatus/applicant-status-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asside',
  templateUrl: './asside.component.html',
  styleUrls: ['./asside.component.css']
})
export class AssideComponent {
  username!:any
  roles!:any
  userOnly:boolean = false
  addminOnly:boolean = false
  User :any={
    newPassword:''
  }
  constructor(
    private router:Router,
    private aplicantStatuServices:ApplicantStatusServicesService,
    private dialog:MatDialog,
    private loginServices:LoginServicesService ){

  }
  @ViewChild('addFile') addFile!: TemplateRef<any>;
  @ViewChild('myForm') myForm!: NgForm;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.username = sessionStorage.getItem("username");
  this.roles= sessionStorage.getItem("roles");
  this.countAllApplicantPendingByUser(this.username)
  this.countAllApplicantPending();
  if(this.roles=="Admin"){
      this.userOnly=false
  }else{
    this.userOnly=true
  }
  if(this.roles=="Staff"){
    this.addminOnly =false
  }else{
    this.addminOnly=true
  }
}
logout(): void {
  sessionStorage.clear();
  this.router.navigateByUrl('/login');
}
sidebarCollapsed: boolean = false;

// Method to toggle sidebar visibility
toggleSidebar() {
  this.sidebarCollapsed = !this.sidebarCollapsed;
  console.log('Sidebar collapsed:', this.sidebarCollapsed);
}
pendingIsZerobyUser:boolean = false
totalPendingByUser:any
countAllApplicantPendingByUser(username:any){
  return this.aplicantStatuServices.countAllApplicantStatusIsPendingByUser(username).subscribe(
    respo=>{
      respo.forEach((array:any) => {

        this.totalPendingByUser = array.total_pending
        if(this.totalPendingByUser<=0){
          this.pendingIsZerobyUser = false
        }else{
          this.pendingIsZerobyUser = true
        }

      });
      console.log(respo)

    }
  )
}
pendingIsZerobyAdmin:any
totalPending :any
countAllApplicantPending(){
  return this.aplicantStatuServices.countAllApplicantStatusIsPending().subscribe(
    respo=>{
      respo.forEach((array:any) => {
        this.totalPending = array.total_pending
        if(this.totalPending<=0){
          this.pendingIsZerobyAdmin = false
        }else{
          this.pendingIsZerobyAdmin = true
        }

      });
      console.log(respo)

    }
  )
}
saveFunction(username:any,password:any){
  this.loginServices.changePassword(username,password).subscribe(
    respo=>{
      console.log(respo)
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        text: 'Password Changed successfully.',
        toast: true,
        timer: 1800,
        showConfirmButton: false,
        timerProgressBar: true,
        width: '350px',
        customClass: {
          title: 'toast-success-title',
          icon: 'toast-success-icon'
        }
      });
      // Perform any additional actions after successful creation
      this.myForm.reset()
      this.dialog.closeAll();
      // location.reload()
    },
    error => {
      console.error(error);
      // Show error message
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while Changing Password. Please try again later.',
        icon: 'error',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  )
}
save(){
// console.log(this.username,this.User.newPassword)
this.saveFunction(this.username,this.User.newPassword)
}
openDialogAdd(){
  this.dialog.open(this.addFile,{width:'400px'});
}
}
