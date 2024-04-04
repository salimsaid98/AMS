import { Dialog } from '@angular/cdk/dialog';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PreparedFileServicesService } from 'src/app/services/files/preparedFile/prepared-file-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prepared-file',
  templateUrl: './prepared-file.component.html',
  styleUrls: ['./prepared-file.component.css']
})
export class PreparedFileComponent {
  displayedColumns: string[] = ['index', 'file_name', 'action']; // Define the columns you want to display
  columnLabels: { [key: string]: string } = {
    'index': '#',
    // 'applicantFileID': '#',
    'file_name': 'File Name',
    'action': 'Action'
  };

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addFile') addFile!: TemplateRef<any>;
  @ViewChild('updateFile') updateFile!: TemplateRef<any>;

  @ViewChild('myForm') myForm!: NgForm;

  preparedFile: any = {
    preparedFileID:'',
    file_name: '',
  }
  constructor( private dialog: MatDialog,
    private preparedFileServices:PreparedFileServicesService){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getPreparedFile()
  }
  

openDialogAddFile():void{

  this.dialog.open(this.addFile,{width:'400px'});
}


currentIndex = 0;
getPreparedFile(){
  return this.preparedFileServices.getAllPreparedFile().subscribe(
    respo=>{
        respo.forEach((element: any, index: number) => {
        element['index'] = index + 1; // Assign the index value directly based on the array index
        console.log(index)
      });
      // console.log(respo);
      this.dataSource = new  MatTableDataSource<any>(respo);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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

saveFunction(data: any): void {
  this.preparedFileServices.creatPreparedFile(data).subscribe(
    respo => {
      console.log(respo);
      // Show success message
      // Swal.fire({
      //   title: 'Success!',
      //   text: 'Applicant file created successfully.',
      //   icon: 'success',
      //   timer: 1500,
      //   timerProgressBar: true,
      //   showConfirmButton: false
      // });
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        text: 'Applicant file created successfully.',
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
      // Perform any additional actions after successful creation
      this.getPreparedFile();
      this.myForm.reset()
      this.dialog.closeAll();
      // location.reload()
    },
    error => {
      console.error(error);
      // Show error message
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while creating the applicant file. Please try again later.',
        icon: 'error',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  );
}
save(){
  this.saveFunction(this.preparedFile)
}
deleteFunction(id: any): void {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this file!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.isConfirmed) {
      // User confirmed, proceed with deletion
      this.preparedFileServices.deletePreparedFile(id).subscribe(
        respo => {
          console.log(respo);
          // Show success message
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file name has been deleted.',
            icon: 'success',
            timer: 1500,
            timerProgressBar: true,
            showConfirmButton: false
          });
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
          this.getPreparedFile();
        },
        error => {
          console.error(error);
          // Show error message
          Swal.fire({
            title: 'Error!',
            text: 'An error occurred while deleting the file. Please try again later.',
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

delete(element: any): void {
  const id = element.preparedFileID
  // console.log(element.preparedFileID)
  this.deleteFunction(id);
}
openDialogUpdateFile(element:any):void{

  this.dialog.open(this.updateFile,{width:'400px'});
  console.log(element)
  this.preparedFile = element
  this.preparedFile.preparedFileID = element.preparedFileID
}
updateFunction(id:any,data:any){
  return this.preparedFileServices.updatePreparedFile(id,data).subscribe(
    respo=>{
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        text: 'Prepared file Update successfully.',
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
      // Perform any additional actions after successful creation
      this.getPreparedFile();
      this.myForm.reset()
      this.dialog.closeAll();
      location.reload()
    },
    error => {
      console.error(error);
      // Show error message
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while Updating the Prepared file. Please try again later.',
        icon: 'error',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
    
  )
}
update(){
  // console.log(element)
    this.updateFunction(this.preparedFile.preparedFileID,this.preparedFile)
}
}
