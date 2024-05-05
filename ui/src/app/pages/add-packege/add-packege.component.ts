import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { timer } from 'rxjs';
import { PackageServicesService } from 'src/app/services/Investors/package/package-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-packege',
  templateUrl: './add-packege.component.html',
  styleUrls: ['./add-packege.component.css']
})
export class AddPackegeComponent {
  @ViewChild('addPackage') addPackage!: TemplateRef<any>;
  @ViewChild('editPackage') editPackage!: TemplateRef<any>;

  @ViewChild('myForm') myForm!: NgForm;
  displayedColumns: string[] = ['index', 'package_name','package_currency','package_parecentage', 'action']; // Define the columns you want to display
  columnLabels: { [key: string]: string } = {
    'index': '#',
    // 'applicantFileID': '#',
    'package_name': 'Package Name',
    'package_currency':'Currency',
    'package_parecentage':'Percentage %',
    'action': 'Action'
  };
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

Package:any={
  package_name:'',
  package_currency:'',
  package_parecentage:''
}

constructor(private dialog:MatDialog,
  private packageService:PackageServicesService
){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getAllpackeges()
}
openaddpackage(){
  this.dialog.open(this.addPackage,{width:'400px'});
}

saveFunction(data:any){
  this.packageService.creatPackege(data).subscribe(
    respo=>{
      console.log(respo)
      this.dialog.closeAll()
      this.myForm.reset()
      this.getAllpackeges()

    }
  )
}
save(){
  // console.log(this.Package)
  this.saveFunction(this.Package)
}
// getAllpackeges(){
//   this.packageService.getAllPackage().subscribe(
//     respo=>{
//       console.log(respo)
//     }
//   )
// }
isLoading: boolean = true; // Flag to track loading state
pakageData:any
currentIndex = 0;
getAllpackeges(){
  return this.packageService.getAllPackage().subscribe(
    respo=>{
        respo.forEach((element: any, index: number) => {
        element['index'] = index + 1; // Assign the index value directly based on the array index
        console.log(index)
      });
      // console.log(respo);
      this.dataSource = new  MatTableDataSource<any>(respo);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // Introduce a delay before hiding the spinner
      timer(1000).subscribe(() => {
        this.isLoading = false; // Set isLoading to false after a delay
      });  
    }
  )
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
openDialogUpdatePackage(element:any){
  this.dialog.open(this.editPackage,{width:'400px'});
  this.pakageData = element

}
deleteFunction(id:any){
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this Package!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.isConfirmed) {
      // User confirmed, proceed with deletion
      this.packageService.deletePackage(id).subscribe(
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
            text: 'Your Package has been deleted.',
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
          this.getAllpackeges()
        },
        error => {
          console.error(error);
          // Show error message
          Swal.fire({
            title: 'Error!',
            text: 'An error occurred while deleting Package. Please try again later.',
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
delete(element:any){
  this.deleteFunction(element.packageID)
}
 currencies: string[] = [
  'USD - United States Dollar',
  'EUR - Euro',
  'GBP - British Pound Sterling',
  'JPY - Japanese Yen',
  'AUD - Australian Dollar',
  'CAD - Canadian Dollar',
  'CHF - Swiss Franc',
  'CNY - Chinese Yuan',
  'SEK - Swedish Krona',
  'NZD - New Zealand Dollar',
  'KRW - South Korean Won',
  'SGD - Singapore Dollar',
  'NOK - Norwegian Krone',
  'MXN - Mexican Peso',
  'INR - Indian Rupee',
  'RUB - Russian Ruble',
  'ZAR - South African Rand',
  'BRL - Brazilian Real',
  'TRY - Turkish Lira',
  'HKD - Hong Kong Dollar',
  'IDR - Indonesian Rupiah',
  // Add more currencies as needed
];
updateFunction(id:any,Data:any){
  this.packageService.updatePackage(id,Data).subscribe(
    respo=>{
      // console.log(respo)
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        text: 'Package Update successfully.',
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
      this.getAllpackeges()
      this.myForm.reset()
      this.dialog.closeAll();
      // location.reload()
    },
    error => {
      console.error(error);
      // Show error message
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while Updating the Package. Please try again later.',
        icon: 'error',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  )
}
update(element:any){
// console.log(element.packageID,element)
this.updateFunction(element.packageID,element)
}
}
