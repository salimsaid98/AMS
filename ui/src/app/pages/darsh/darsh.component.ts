import { Component } from '@angular/core';
import { ApplicantDetailsServicesService } from 'src/app/services/applicant/applicantDetails/applicant-details-services.service';

@Component({
  selector: 'app-darsh',
  templateUrl: './darsh.component.html',
  styleUrls: ['./darsh.component.css']
})
export class DarshComponent {

  constructor(private applicantServices:ApplicantDetailsServicesService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.countAllApplicant()
    
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
}
