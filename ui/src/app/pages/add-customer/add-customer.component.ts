import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, NgForm} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ApplicantDetailsServicesService } from 'src/app/services/applicant/applicantDetails/applicant-details-services.service';
import { FilesServicesService } from 'src/app/services/files/files/files-services.service';
import { File_models } from 'src/app/model/File_models';
import { FatherServicesService } from 'src/app/services/applicant/fatherDetails/father-services.service';
import { MotherServicesService } from 'src/app/services/applicant/motherDetails/mother-services.service';
import { WifeServicesService } from 'src/app/services/applicant/wifeDetails/wife-services.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ApplicantStatusServicesService } from 'src/app/services/applicant/applicantStatus/applicant-status-services.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})

export class AddCustomerComponent{
  localDate = new Date().toLocaleDateString(); // Get current local date in string format
  file_model:File_models = new File_models()
  file_data!:FormData
 applicantDetails: any = {
  applicantfullName: '',
  applicantemailAddress: '',
  applicanthomeAddress: '',
  applicantbusinessNumber: '',
  applicantnationalIdNumber: '',
  applicantwebsite: '',
  applicantnationalIdNumbe: '',
  applicantpassportNumber: '',
  applicantoccupation: '',
  applicantmarriedStatus: '',
  bank_name:'',
  bankAccount_no:'',
  registeredBy:'',
  registeredDate:'',
  country_to_visit:'',
  applicantgender:''
};

wifeDetails: any = {
  wifeName: '',
  wifedateOfBirth: '',
  wifenationality: '',
  wifehomeAddress: '',
  wifeoccupation: '',
  applicantID:''
};

fatherDetails: any = {
  fatherfullName: '',
  fatherdateOfBirth: '',
  fathermarriedStatus: '',
  fathernationality: '',
  fatherhomeAddress: '',
  fatheroccupation: '',
  applicantID:''
};

motherDetails: any = {
  motherfullName: '',
  motherdateOfBirth: '',
  mothermarriedStatus: '',
  mothernationality: '',
  motherhomeAddress: '',
  motheroccupation: '',
  applicantID:''
};
fileDetails:any={
    name: '', // To store file name
    file: null // To store the entire File object
  
}
applicantStatus:any={
  status:'Pending',
  applicantID:''
}
username:any
@ViewChild('stepperForm') stepperForm!: NgForm;

constructor(private applicantDetailsServicers:ApplicantDetailsServicesService,
  private fileServices:FilesServicesService,
  private fatherservice:FatherServicesService,
  private motherservice:MotherServicesService,
  private wifeservice:WifeServicesService,
  private applicantStatusServices:ApplicantStatusServicesService,
  private route:Router) {}
  ngOnInit(): void {
    this.username = sessionStorage.getItem("username");
    this.applicantDetails.registeredBy = this.username
    this.applicantDetails.registeredDate = this.localDate
  }
selectFile(event: any) {
  this.fileDetails = event.target.files[0]; // Assign the selected file to profileImage variable
}

// submit() {
//   Handle form submission here
//   console.log("Applicant Details:", this.applicantDetails);
//   console.log("Wife Details:", this.wifeDetails);
//   console.log("Father's Details:", this.fatherDetails);
//   console.log("Mother's Details:", this.motherDetails);
// }
saveFunction(data1:any,data2:any,data3:any,data4:any,applicantStatusData:any){
  return this.applicantDetailsServicers.creatApplicant(data1).subscribe(
    respo=>{
      this.wifeDetails.applicantID = respo.applicantID
      this.fatherDetails.applicantID = respo.applicantID
      this.motherDetails.applicantID = respo.applicantID
      this.applicantStatus.applicantID = respo.applicantID
      this.wifeservice.creatWife(data4).subscribe(
        wife_response=>{
          console.log("Mother response  "+wife_response)
        }
      )
      this.fatherservice.creatFather(data2).subscribe(
        father_response=>{
          console.log("Father response  "+father_response)
        }
      )
      this.motherservice.creatMother(data3).subscribe(
        mother_response=>{
          console.log("Mother response  "+mother_response)
        }
      )
      this.applicantStatusServices.creatApplicantStatus(applicantStatusData).subscribe(
        applicantStatus_respo =>{
            console.log("Applicant Status "+applicantStatus_respo)
        }
      )
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        text: 'Applicant Information created successfully.',
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
      this.route.navigate(['/home/pending-applicant'])

    },
    error => {
      console.error(error);
      // Show error message
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while creating the applicant Infomation. Please try again later.',
        icon: 'error',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }

   
  );
}
Save(){
 this.saveFunction(this.applicantDetails,this.fatherDetails,this.motherDetails,this.wifeDetails,this.applicantStatus);
// console.log(this.fileDetails);
  // console.log("Applicant Details:", this.applicantDetails);
  // console.log("Wife Details:", this.wifeDetails);
  // console.log("Father's Details:", this.fatherDetails);
  // console.log("Mother's Details:", this.motherDetails);
  // console.log("Status",this.applicantStatus)
}
save2(){
  console.log("Applicant Details:", this.applicantDetails)

}
// onFileChange(event: any) {
//   if (event.target.files && event.target.files.length > 0) {
//     const file = event.target.files[0];
//     this.file_model.filename = file.name;
//     this.file_data = new FormData();
//     this.file_data.append('file', file);
//   }
// }
// selectedFile!: File;
// onFileSelected(event: any) {
//   this.selectedFile = event.target.files[0];
// }
// upload(file:File,data:any){
//   return this.applicantDetailsServicers.creatApplicant(data).subscribe(response=>{
//     this.fileServices.uploadFile(file).subscribe((respo:any)=>{
//       this.file_model.fileID = respo.fileID
//       console.log(respo)
//       console.log(response)
//         respo.forEach((item:any)=>{
//           console.log(item.fileID)
//           this.file_model.fileID = item.fileID;
//         })
//         console.log(this.file_model.fileID);
//     })
//   })
// }

// uploadFile() {
//   if (this.selectedFile) {
//     console.log('Selected file:', this.selectedFile);
//       this.upload(this.selectedFile,this.applicantDetails)
//   } else {
//     console.log('No file selected.');
//   }
// }
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