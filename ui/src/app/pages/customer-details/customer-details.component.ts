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
import { ApplicantImageFileServicesService } from 'src/app/services/files/aplicantImageFile/applicant-image-file-services.service';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { RelativeServicesService } from 'src/app/services/applicant/relative/relative-services.service';

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
relativeDetailsArray: any[] = []; 
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
applicantImageFile_model: any = {
  applicantID: '',
  fileID:'',
  pplicant_image_fileid:''
  // file_name:'',
};
relativeDetails: any = {
  relativefullName: '',
  relativedateOfBirth: '',
  relativemarriedStatus: '',
  relativenationality: '',
  relativehomeAddress: '',
  relativeoccupation: '',
  relativeapplicantID:'',
  relativeTypes:''
};
applicantFile:any
preparedFile:any
ImageFile:any
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
    private applicantPreparedFileServices:ApplicantPreparedFileServicesService ,
    private applicantImageFileServices :ApplicantImageFileServicesService,
  private sanitizer :DomSanitizer ,
  private relativeServices:RelativeServicesService ){

  }
  displayedColumns: string[] = ['fileid', 'file_name', 'filetype', 'actions']; // Define the columns you want to display
  dataSource!: MatTableDataSource<any>;
  displayedColumns2: string[] = ['fileid', 'file_name', 'filetype', 'actions']; // Define the columns you want to display
  dataSource2!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatPaginator) paginator2!: MatPaginator
  @ViewChild('addFile') addFile!: TemplateRef<any>;
  @ViewChild('addFile2') addFile2!: TemplateRef<any>;
  @ViewChild('addImageFile') addImageFile!: TemplateRef<any>;
  @ViewChild('addRelative') addRelative!: TemplateRef<any>;


  @ViewChild('myForm') myForm!: NgForm;
  @ViewChild('myRelativeForm') myRelativeForm!:NgForm;
  @ViewChild('myImageForm') myImageForm!: NgForm;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id = this.route.snapshot.params['id'];
    this.applicantandfile_model.applicantID =  this.id = this.route.snapshot.params['id'];
    this.applicantPreparedFile_model.applicantID = this.id
    this.relativeDetails.applicantID = this.id;
    this.applicantImageFile_model.applicantID = this.id

    console.log(this.id)
    this.getFatherByApplicantId(this.id)
    this.getMoherByApplicantId(this.id)
    this.getWifeByApplicantId(this.id)
    this.getApplicantDetailsByID(this.id)
    this.getAllApplicantFiles(this.id);
    this.getAllApplicantPreparedFiles(this.id);
    this.getApplicantImageFile(this.id)
    this.getRelativebyApplicantID(this.id)
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
  imageAvailable:boolean=true
  imageFile:any
  imageunAvailable:boolean=false
  getApplicantImageFile(id: any): void {
    this.applicantImageFileServices.getAllApplicantImageFileByApplicantID(id).subscribe(
      respo => {
        respo.forEach((array:any) => {
          this.applicantImageFile_model.applicant_image_fileid = array.applicant_image_fileid
          this.applicantImageFile_model.applicantID = array.applicantID

        });
        console.log("Applicant Image File", respo);
        this.imageFile = respo;
        this.setProfileImage();

        if( this.applicantImageFile_model.applicantID==this.id){
          this.imageAvailable = true
          
          this.imageunAvailable =false

        }else{
          this.imageAvailable = false
          this.imageunAvailable =true
        }
       
      },
      error => {
        console.error('Error retrieving applicant image file:', error);
        this.imageAvailable = true
      }
    );
  }
getRelativebyApplicantID(id:any){
  return this.relativeServices.getRelativeByApplicantID(id).subscribe(
    respo =>{
      this.relativeDetailsArray = respo
      console.log("Relative " ,this.relativeDetailsArray)
    }
  )
}
  setProfileImage(): void {
    if (this.imageFile && this.imageFile.length > 0) {
      const imageFile = this.imageFile[0]; // Assuming you only want to display the first image
      this.profileImage = this.sanitizer.bypassSecurityTrustUrl(this.getBase64Image(imageFile));
    }
  }

  getBase64Image(image: any): string {
    return 'data:' + image.file_type + ';base64,' + image.file_byte;
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
onImageFileSelected(event: any) {
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
shareFile(file: any): void {
  // Implement your file download logic here
  console.log('Downloading file:', file);
}
// deleteFunction(id:any){
//   return this.applicantImageFileServices.deleteApplicantImageFile(id).subscribe(
//     respo=>{
//       console.log(respo)
//       location.reload()
//     }
//   )
// }
deleteFunction(id: any): void {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this image!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.isConfirmed) {
      // User confirmed, proceed with deletion
      this.applicantImageFileServices.deleteApplicantImageFile(id).subscribe(
            respo=>{
          console.log(respo);
          location.reload()
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
          // this.getIRCCFile();
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
deleteImage(element:any){
  // console.log(element)
  this.deleteFunction(element)
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

saveImage(): void {
  if (this.imageFile && this.imageFile.length > 0) {
    const imageFile = this.imageFile[0]; // Assuming you only want to download the first image
    const link = document.createElement('a');
    const imageUrl = 'data:' + imageFile.file_type + ';base64,' + imageFile.file_byte;
    link.href = imageUrl;
    link.download = 'profile_image.png'; // You can specify the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

profileImage: any


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


openDialogUpdateFile(element:any){
  console.log(element);
}

uploadImage(){
  this.dialog.open(this.addImageFile,{width:'400px'});

}
uploadImageFile(file:File){
  return this.fileServices.uploadFile(file).subscribe(
    respo=>{
      if (Array.isArray(respo)) {
        // Loop through the array of objects
        respo.forEach((item: any) => {
          // Log each object's properties
          console.log('File ID:', item.fileID);
          location.reload()
          this.applicantImageFile_model.fileID = item.fileID;
        });
        this.applicantImageFileServices.creatApplicantImageFile(this.applicantImageFile_model).subscribe(
          respo=>{
            console.log(respo)
            this.dialog.closeAll();
            // this.getAllApplicantPreparedFiles(this.id);

          }
        )
      }
    }
  )
}
saveImageFile(){
  // console.log(this.selectedFile)
  if (this.selectedFile) {
    console.log('Selected file:', this.selectedFile);
      this.uploadImageFile(this.selectedFile)
  } else {
    console.log('No file selected.');
  }
}

openDialogRelative(){
  this.dialog.open(this.addRelative,{width:'400px'});
}
saveRelativeFuntion(data:any){
  return this.relativeServices.creatRelative(data).subscribe(
    respo=>{
      console.log(respo)
      this.dialog.closeAll()
      this.myRelativeForm.reset()
      this.getRelativebyApplicantID(this.id)
    }
  )
}
saveRelative(){
// console.log(this.relativeDetails)
this.saveRelativeFuntion(this.relativeDetails);
}
countries: string[] = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];
}
