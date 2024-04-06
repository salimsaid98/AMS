import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { applicantDetailsModel } from 'src/app/model/ApplicantDetalsModel';
import { File_models } from 'src/app/model/File_models';
import { ApplicantDetailsServicesService } from 'src/app/services/applicant/applicantDetails/applicant-details-services.service';
import { FatherServicesService } from 'src/app/services/applicant/fatherDetails/father-services.service';
import { MotherServicesService } from 'src/app/services/applicant/motherDetails/mother-services.service';
import { WifeServicesService } from 'src/app/services/applicant/wifeDetails/wife-services.service';
import { ApplicAndFileServicesService } from 'src/app/services/files/applicantAndFile/applic-and-file-services.service';
import { FilesServicesService } from 'src/app/services/files/files/files-services.service';
import { ApplicantFileServicesService } from 'src/app/services/files/applicantFile/applicant-file-services.service';
import { PreparedFileServicesService } from 'src/app/services/files/preparedFile/prepared-file-services.service';
import { ApplicantPreparedFileServicesService } from 'src/app/services/files/applicantPreparedFile/applicant-prepared-file-services.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
id:any
files: any[] = []; // Array to hold applicant files
files2: any[] = []; // Array to hold applicant files
fileData!: FormData;
fatherDetailsArray: any[] = []; 
motherDetailsArray: any[] = []; 
wifeDetailsArray: any[] = []; 
applicantDetailsArray!:any[]
applicantDetailsModel:applicantDetailsModel = new applicantDetailsModel()
file_model:File_models=new File_models()
username:any
roles:any
applicantandfile_model: any = {
  applicantID: '',
  fileID:'',
  // file_name:'',
  applicantFileID:''
};
applicantPreparedFile_model: any = {
  applicantID: '',
  fileID:'',
  // file_name:'',
  preparedFileID:''
};
applicantFile:any
preparedFile:any
userOnly:boolean = false
addminOnly:boolean = false
  constructor(private route : ActivatedRoute,
    private fatherServices:FatherServicesService,
    private motherServices:MotherServicesService,
    private wifeService:WifeServicesService,
    private applicantServices:ApplicantDetailsServicesService,
    private dialog: MatDialog,
    private fileServices:FilesServicesService,
    private applicantandfileService:ApplicAndFileServicesService,
    private applicantFileService:ApplicantFileServicesService,
    private preparedFileService:PreparedFileServicesService,
    private applicantPreparedFileServices:ApplicantPreparedFileServicesService ){

  }
  displayedColumns: string[] = ['fileid', 'file_name', 'filetype', 'actions']; // Define the columns you want to display
  dataSource!: MatTableDataSource<any>;
  displayedColumns2: string[] = ['fileid', 'file_name', 'filetype', 'actions']; // Define the columns you want to display
  dataSource2!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatPaginator) paginator2!: MatPaginator
  @ViewChild('addFile') addFile!: TemplateRef<any>;
  @ViewChild('addFile2') addFile2!: TemplateRef<any>;
  @ViewChild('myForm') myForm!: NgForm;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id = this.route.snapshot.params['id'];
    this.applicantandfile_model.applicantID =  this.id = this.route.snapshot.params['id'];
    this.applicantPreparedFile_model.applicantID = this.id
    console.log(this.id)
    this.getFatherByApplicantId(this.id)
    this.getMoherByApplicantId(this.id)
    this.getWifeByApplicantId(this.id)
    this.getApplicantDetailsByID(this.id)
    this.getAllApplicantFiles(this.id);
    this.getAllApplicantPreparedFiles(this.id);
    this.username = sessionStorage.getItem("username");
    this.roles= sessionStorage.getItem("roles");
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
  this.getAllApplicantFile()
  this.getAllPreparedFile()
  }

  getApplicantDetailsByID(id:any){
    return this.applicantServices.getgeApplicantById(id).subscribe(
      respo=>{
        this.applicantDetailsModel = respo
        console.log(this.applicantDetailsModel);
      }
    )
  }
  getFatherByApplicantId(id:any){
    return this.fatherServices.getFatherByApplicantID(id).subscribe(
      respo=>{
        this.fatherDetailsArray = respo
        console.log(this.fatherDetailsArray);
      }
    )
  }
  getMoherByApplicantId(id:any){
    return this.motherServices.getMotherByApplicantID(id).subscribe(
      respo=>{
        this.motherDetailsArray = respo
        console.log(this.motherDetailsArray);
      }
    )
  }
  getWifeByApplicantId(id:any){
    return this.wifeService.getFatherByApplicantID(id).subscribe(
      respo=>{
        this.wifeDetailsArray = respo
        console.log(this.wifeDetailsArray);
      }
    )
  }
  // open dialog for add user
openDialogAddFile():void{

  this.dialog.open(this.addFile,{width:'400px'});
}
openDialogAddFile2():void{

  this.dialog.open(this.addFile2,{width:'400px'});
}
onFileChange(event: any) {
  if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    this.file_model.filename = file.name;
    this.fileData = new FormData();
    this.fileData.append('file', file);
  }
}
selectedFile!: File;
onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
}
onFileSelected2(event: any) {
  this.selectedFile = event.target.files[0];
}
getAllApplicantFile(){
  return this.applicantFileService.getAllApplicants().subscribe(
    respo=>{
      console.log("ApplicantFile  ",respo)
      this.applicantFile = respo;
    }
  )
}
getAllPreparedFile(){
  return this.preparedFileService.getAllPreparedFile().subscribe(
    respo=>{
      console.log(respo)
      this.preparedFile = respo;
    }
  )
}
upload(file:File){
  return this.fileServices.uploadFile(file).subscribe(
    response=>{
      if (Array.isArray(response)) {
        // Loop through the array of objects
        response.forEach((item: any) => {
          // Log each object's properties
          console.log('File ID:', item.fileID);

          this.applicantandfile_model.fileID = item.fileID;
          this.applicantandfile_model.applicantFileID = this.applicantFile.applicantFileID;

        });
        this.applicantandfileService.creatApplicantAndFile(this.applicantandfile_model).subscribe(
          respo=>{
            console.log(respo)
            this.dialog.closeAll();
            this.getAllApplicantFiles(this.id);

          }
        )
      }
    }
  )
  
// console.log(this.selectedFile)
}

saveFile() {
  if (this.selectedFile) {
    // console.log('Selected file:', this.selectedFile,id);
      this.upload(this.selectedFile)
  } else {
    console.log('No file selected.');
  }
}

upload2(file:File){
  return this.fileServices.uploadFile(file).subscribe(
    respo=>{
      if (Array.isArray(respo)) {
        // Loop through the array of objects
        respo.forEach((item: any) => {
          // Log each object's properties
          console.log('File ID:', item.fileID);

          this.applicantPreparedFile_model.fileID = item.fileID;
          this.applicantPreparedFile_model.preparedFileID = this.preparedFile.preparedFileID;

        });
        this.applicantPreparedFileServices.creatApplicantPreparedFile(this.applicantPreparedFile_model).subscribe(
          respo=>{
            console.log(respo)
            this.dialog.closeAll();
            this.getAllApplicantPreparedFiles(this.id);

          }
        )
      }
    }
  )
}
saveFile2() {
  if (this.selectedFile) {
    console.log('Selected file:', this.selectedFile);
      this.upload2(this.selectedFile)
  } else {
    console.log('No file selected.');
  }
  console.log(this.preparedFile.preparedFileID)
}

// getAllApplicantFiles(applicantid2:any) {
//   this.applicantandfileService.getAllApplicantByApplicantID(applicantid2).subscribe(
//     (response) => {

//       this.files = response
//       console.log(this.files)
//     },
//     (error) => {
//       console.error('Error retrieving files:', error);
//     }
//   );
// }
getAllApplicantFiles(applicantid2: any): void {
  this.applicantandfileService.getAllApplicantByApplicantID(applicantid2).subscribe(
    (response) => {
      this.files = response;
      this.dataSource = new MatTableDataSource<any>(this.files);
      this.dataSource.paginator = this.paginator;
    },
    (error) => {
      console.error('Error retrieving files:', error);
    }
  );
}
getAllApplicantPreparedFiles(applicantid: any): void {
  this.applicantPreparedFileServices.getAllApplicantPreparedFileByApplicantID(applicantid).subscribe(
    (response) => {
      this.files2 = response;
      console.log("ApplicantPreparedFile  ",this.files2)
      this.dataSource2 = new MatTableDataSource<any>(this.files2);
      this.dataSource2.paginator = this.paginator2;
    },
    (error) => {
      console.error('Error retrieving files:', error);
    }
  );
}

applyFilter(event: Event): void {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
applyFilter2(event: Event): void {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource2.filter = filterValue.trim().toLowerCase();

  if (this.dataSource2.paginator) {
    this.dataSource2.paginator.firstPage();
  }
}

// applyFilter(event: Event): void {
//   const filterValue = (event.target as HTMLInputElement).value;
//   this.dataSource.filter = filterValue.trim().toLowerCase();

//   if (this.dataSource.paginator) {
//     this.dataSource.paginator.firstPage();
//   }
// }
downloadFile(file: any): void {
  // Implement your file download logic here
  console.log('Downloading file:', file);
}

deleteFile(file: any): void {
  // Implement your file delete logic here
  console.log('Deleting file:', file);
}
previewFile(file: any): void {
  const { file_byte, file_name, filetype } = file;
  
  // Convert file byte data to Blob
  const byteCharacters = atob(file_byte);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: filetype });

  // Create a blob URL
  const blobUrl = URL.createObjectURL(blob);

  // Open the blob URL in a new window or tab
  window.open(blobUrl, '_blank');
}


openPDFInIFrame(dataURL: string): void {
  // Create an iframe element to embed the PDF
  const iframe = document.createElement('iframe');
  iframe.src = dataURL;
  iframe.style.width = '100%';
  iframe.style.height = '500px'; // Adjust the height as needed
  document.body.appendChild(iframe);
}

images: any
getBase64Image(image: any): string {
  // Assuming image_byte is a base64 encoded string in the backend
  return 'data:' + image.file_typ + ';base64,' + image.file_byte;
}


profileImage: string | ArrayBuffer | null = null;


// onFileSelected2(event: any): void {
//   const file: File = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = () => {
//       this.profileImage = reader.result;
//     };
//     reader.readAsDataURL(file);
//   }
// }

saveImage(): void {
  // Implement logic to save the image here
  console.log('Image saved');
}
openDialogUpdateFile(element:any){
  console.log(element);
}

uploadImage(){
  
}

}
