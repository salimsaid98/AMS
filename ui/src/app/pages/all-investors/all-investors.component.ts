import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { InvestorsDetailsServicesService } from 'src/app/services/Investors/ivestorsDetails/investors-details-services.service';

@Component({
  selector: 'app-all-investors',
  templateUrl: './all-investors.component.html',
  styleUrls: ['./all-investors.component.css']
})
export class AllInvestorsComponent {
  displayedColumns: string[] = ['index','registerDate', 'investorsfullName', 'investorsemailAddress','investorsphoneNumber' ,'view'];
  columnLabels: { [key: string]: string } = {
    'index': '#',
    'investorsfullName': 'Full Name',
    'investorsemailAddress': 'Email ',
    'investorsphoneNumber' : 'Phone',
    'view': 'View',
    'registerDate':'Date',
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
}
