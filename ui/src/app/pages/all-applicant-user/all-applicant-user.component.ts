import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { ApplicantDetailsServicesService } from 'src/app/services/applicant/applicantDetails/applicant-details-services.service';

@Component({
  selector: 'app-all-applicant-user',
  templateUrl: './all-applicant-user.component.html',
  styleUrls: ['./all-applicant-user.component.css']
})
export class AllApplicantUserComponent {
  displayedColumns: string[] = ['index','registered_date','country_to_visit', 'applicantfull_name', 'applicantemail_address','applicantphone_number','view'];
  columnLabels: { [key: string]: string } = {
    'index': '#',
    'applicantfull_name': 'Full Name',
    'applicantemail_address': 'Email ',
    'applicantphone_number' : 'Phone',
    // 'registeredBy': 'Register By',
    'view': 'View',
    'registered_date':'Date',
    'country_to_visit':'Visa Country'
  };
   dataSource = new MatTableDataSource<any>();
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private applicantService: ApplicantDetailsServicesService,
    private router:Router) {}
username:any
  ngOnInit(): void {
    this.username = sessionStorage.getItem("username");
    this.getAllApplicantByUser(this.username);
  }
  isLoading: boolean = true; // Flag to track loading state
  currentIndex = 0;
  getAllApplicantByUser(username:any) {
    this.applicantService.getAllApplicantByUser(username).subscribe(
      applicant_response => {
        applicant_response.forEach((element: any, index: number) => {
          element['index'] = index + 1; // Assign the index value directly based on the array index
          console.log(index)
        });
        this.dataSource.data = applicant_response;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
 
    this.router.navigate(["home/applicant-details",{id}])
  }
  
}
