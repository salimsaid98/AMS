import { Component, OnInit, ViewChild, numberAttribute } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApplicantDetailsServicesService } from 'src/app/services/applicant/applicantDetails/applicant-details-services.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.css']
})
export class AllCustomerComponent implements OnInit {
  displayedColumns: string[] = ['index','registeredDate','country_to_visit', 'applicantfullName', 'applicantemailAddress','applicantphoneNumber','registeredBy' ,'view'];
  columnLabels: { [key: string]: string } = {
    'index': '#',
    'applicantfullName': 'Full Name',
    'applicantemailAddress': 'Email ',
    'applicantphoneNumber' : 'Phone',
    'registeredBy': 'Register By',
    'view': 'View',
    'registeredDate':'Date',
    'country_to_visit':'Visa Country'
  };
   dataSource = new MatTableDataSource<any>();
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private applicantService: ApplicantDetailsServicesService,
    private router:Router) {}

  ngOnInit(): void {
    this.getAllApplicant();
  }
  isLoading: boolean = true; // Flag to track loading state
  currentIndex = 0;
  getAllApplicant() {
    this.applicantService.getAllApplicants().subscribe(
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
   const id = element.applicantID
 
    this.router.navigate(["home/applicant-details",{id}])
  }
  
}