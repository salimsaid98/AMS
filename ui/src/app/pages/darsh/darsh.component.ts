import { Component } from '@angular/core';
import { LoginServicesService } from 'src/app/services/Login/login/login-services.service';
import { ApplicantDetailsServicesService } from 'src/app/services/applicant/applicantDetails/applicant-details-services.service';
import { ApplicantStatusServicesService } from 'src/app/services/applicant/applicantStatus/applicant-status-services.service';

@Component({
  selector: 'app-darsh',
  templateUrl: './darsh.component.html',
  styleUrls: ['./darsh.component.css']
})
export class DarshComponent {
  userOnly:boolean = false
  addminOnly:boolean = false
  username:any
  roles:any
  constructor(private applicantServices:ApplicantDetailsServicesService,
    private aplicantStatuServices :ApplicantStatusServicesService,
    private loginServices:LoginServicesService
  ){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.username = sessionStorage.getItem("username");
    this.roles= sessionStorage.getItem("roles");
    this.countAllApplicant()
    this.  countAllApplicantApproved();
    this.countAllUser()
    this.countAllApplicantPending()
    this.countAllApplicantPendingByUser(this.username)
    this.countAllApplicantByUser(this.username)
    this.countAllApplicantApprovedByUser(this.username)
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
  total_applicants:any
  countAllApplicant(){
    return this.applicantServices.getCountAllApplicant().subscribe(
      respo=>{
        respo.forEach((item:any) => {
          this.total_applicants = item.total_applicants
        });
        console.log(respo)
      }
    )
  }
  totalPendingByuser:any
  countAllApplicantPendingByUser(username:any){
    return this.aplicantStatuServices.countAllApplicantStatusIsPendingByUser(username).subscribe(
      respo=>{
        respo.forEach((array:any) => {
          this.totalPendingByuser = array.total_pending
  
  
        });
        console.log(respo)
  
      }
    )
  }
  totalPending:any
  countAllApplicantPending(){
    return this.aplicantStatuServices.countAllApplicantStatusIsPending().subscribe(
      respo=>{
        respo.forEach((array:any) => {
          this.totalPending = array.total_pending
  
  
        });
        console.log("total pending",this.totalPending)
  
      }
    )
  }
  totalApprovedByAdmin:any
  countAllApplicantApproved(){
    return this.aplicantStatuServices.countAllApplicantStatusIsApproved().subscribe(
      respo=>{
        respo.forEach((array:any) => {
          this.totalApprovedByAdmin= array.total_approved
  
  
        });
        console.log("total Approved",this.totalApprovedByUser)
  
      }
    )
  }
  totalApplicantByUser:any
  countAllApplicantByUser(username:any){
    return this.applicantServices.countAllApplicantByUser(username).subscribe(
      respo=>{
        respo.forEach((array:any) => {
          this.totalApplicantByUser = array.total_applicant
  
  
        });
        console.log(respo)
  
      }
    )
  }
  totalUsers:any
  countAllUser(){
    return this.loginServices.countAllUsers().subscribe(
      respo=>{
        respo.forEach((array:any) => {
          this.totalUsers = array.total_user
  
  
        });
        console.log(respo)
  
      }
    )
  }
  totalApprovedByUser:any
  countAllApplicantApprovedByUser(username:any){
    return this.aplicantStatuServices.countAllApplicantStatusIsApprovedByUser(username).subscribe(
      respo=>{
        respo.forEach((array:any) => {
          this.totalApprovedByUser = array.total_approved
  
  
        });
        console.log("total Approved By user",this.totalApprovedByUser)
  
      }
    )
  }
}
