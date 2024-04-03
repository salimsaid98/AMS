import { Component, OnInit, ViewChild, numberAttribute } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApplicantDetailsServicesService } from 'src/app/services/applicant/applicantDetails/applicant-details-services.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-customer',
  templateUrl: './all-customer.component.html',
  styleUrls: ['./all-customer.component.css']
})
export class AllCustomerComponent implements OnInit {
  displayedColumns: string[] = ['applicantID', 'applicantfullName', 'applicantemailAddress','applicantphoneNumber' ,'view'];
  columnLabels: { [key: string]: string } = {
    'applicantID': 'Applicant ID',
    'applicantfullName': 'Full Name',
    'applicantemailAddress': 'Email Address',
    'applicantphoneNumber' : 'Applicant Phone',
    'view': 'View'
  };
   dataSource = new MatTableDataSource<any>();
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private applicantService: ApplicantDetailsServicesService,
    private router:Router) {}

  ngOnInit(): void {
    this.getAllApplicant();
  }

  getAllApplicant() {
    this.applicantService.getAllApplicants().subscribe(
      applicant_response => {
        this.dataSource.data = applicant_response;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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