import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApplicantStatusServicesService } from 'src/app/services/applicant/applicantStatus/applicant-status-services.service';

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
  constructor(
    private router:Router,
    private aplicantStatuServices:ApplicantStatusServicesService){

  }
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

totalPendingByUser:any
countAllApplicantPendingByUser(username:any){
  return this.aplicantStatuServices.countAllApplicantStatusIsPendingByUser(username).subscribe(
    respo=>{
      respo.forEach((array:any) => {
        this.totalPendingByUser = array.total_pending


      });
      console.log(respo)

    }
  )
}
totalPending :any
countAllApplicantPending(){
  return this.aplicantStatuServices.countAllApplicantStatusIsPending().subscribe(
    respo=>{
      respo.forEach((array:any) => {
        this.totalPending = array.total_pending


      });
      console.log(respo)

    }
  )
}

}
