import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { InvestorsDetailsServicesService } from 'src/app/services/Investors/ivestorsDetails/investors-details-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-investors',
  templateUrl: './all-investors.component.html',
  styleUrls: ['./all-investors.component.css']
})
export class AllInvestorsComponent {
  displayedColumns: string[] = ['index','investorsID','registerDate', 'investorsfullName', 'investorsemailAddress','investorsphoneNumber' ,'view'];
  columnLabels: { [key: string]: string } = {
    'index': '#',
    'investorsID':'Investors ID',
    'investorsfullName': 'Full Name',
    'investorsemailAddress': 'Email ',
    'investorsphoneNumber' : 'Phone',
    'view': 'View',
    'registerDate':'Date Register',
    'country_to_visit':'Visa Country'
    
  };
   dataSource = new MatTableDataSource<any>();
  constructor(private router:Router,
    private investorsService:InvestorsDetailsServicesService
  ){

  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllInvestors()
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
   const id = element.investorsID
 
    this.router.navigate(["home/investor-details",{id}])
  }
  isLoading: boolean = true; // Flag to track loading state
  currentIndex = 0;
  getAllInvestors(){
    return this.investorsService.getAllInvestors().subscribe(
      investor_respo=>{
        investor_respo.forEach((element: any, index: number) => {
          element['index'] = index + 1; // Assign the index value directly based on the array index
          console.log(index)
        });
        console.log(investor_respo)
        this.dataSource.data = investor_respo;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
            // Introduce a delay before hiding the spinner
       timer(1000).subscribe(() => {
        this.isLoading = false; // Set isLoading to false after a delay
        
      });  
      }
    )
  }
  deleteInvestorsFunction(id: any): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Investors Details!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, proceed with deletion
        this.investorsService.deleteInvestors(id).subscribe(
          respo => {
            console.log(respo);
            // Show success message
            // Swal.fire({
            //   title: 'Deleted!',
            //   text: 'Your file name has been deleted.',
            //   icon: 'success',
            //   timer: 1500,
            //   timerProgressBar: true,
            //   showConfirmButton: false
            // });
            Swal.fire({
              position: 'top-right',
              icon: 'success',
              text: 'Your file name has been deleted.',
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
            
            // Perform any additional actions after successful deletion
            this.getAllInvestors()
          
          },
          error => {
            console.error(error);
            // Show error message
            Swal.fire({
              title: 'Error!',
              text: 'An error occurred while deleting Investor Details. Please try again later.',
              icon: 'error',
              timer: 1500,
              timerProgressBar: true,
              showConfirmButton: false
            });
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // User canceled, do nothing
      }
    });
  }
  deleteInvestor(element:any){
    // console.log(element)
    this.deleteInvestorsFunction(element.investorsID)
  }
}
