import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { ApplicantStatusServicesService } from 'src/app/services/applicant/applicantStatus/applicant-status-services.service';

@Component({
  selector: 'app-pending-applicant',
  templateUrl: './pending-applicant.component.html',
  styleUrls: ['./pending-applicant.component.css']
})
export class PendingApplicantComponent {
  displayedColumns: string[] = ['index','registered_date','country_to_visit', 'applicantfull_name', 'applicantemail_address','applicantphone_number','status','view'];
  columnLabels: { [key: string]: string } = {
    'index': '#',
    'applicantfull_name': 'Full Name',
    'applicantemail_address': 'Email ',
    'applicantphone_number' : 'Phone',
    // 'registeredBy': 'Register By',
    'view': 'View',
    'registered_date':'Date',
    'country_to_visit':'Visa Country',
    'status':'status'
  };
   dataSource = new MatTableDataSource<any>();
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private aplicantStatuServices:ApplicantStatusServicesService,
    private router:Router) {}
username:any
  ngOnInit(): void {
    this.username = sessionStorage.getItem("username");

    this.getAllApplicantStatusIsAvailable(this.username)
    this.countAllApplicantPendingByUser(this.username)
  }
  isLoading: boolean = true; // Flag to track loading state
  currentIndex = 0;
  getAllApplicantStatusIsAvailable(register_by:any) {
    this.aplicantStatuServices.getAllApplicantStatusIsPendingByUser(register_by).subscribe(
      applicant_response => {
        applicant_response.forEach((element: any, index: number) => {
          element['index'] = index + 1; // Assign the index value directly based on the array index
          console.log(index)
        });
        this.dataSource.data = applicant_response;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log("Applicant Status",applicant_response)
            // Introduce a delay before hiding the spinner
       timer(1000).subscribe(() => {
        this.isLoading = false; // Set isLoading to false after a delay
      });  
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
  viewStatus(element: any) {
    // Logic to handle button click for viewing status
    // console.log('Viewing status for:', element.applicantID);
   const id = element.applicantid

//  console.log(id)
    this.router.navigate(["home/applicant-details",{id}])
  }
  countAllApplicantPendingByUser(username:any){
    return this.aplicantStatuServices.countAllApplicantStatusIsPendingByUser(username).subscribe(
      respo=>{
        console.log(respo)
      }
    )
  }
}