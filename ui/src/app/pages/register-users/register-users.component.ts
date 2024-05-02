import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { timer } from 'rxjs';
import { LoginServicesService } from 'src/app/services/Login/login/login-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent {
  displayedColumns: string[] = ['index', 'username','roles','status', 'action']; // Define the columns you want to display
  columnLabels: { [key: string]: string } = {
    'index': '#',
    // 'applicantFileID': '#',
    'username': 'User Name',
    'roles':'Roles',
    'status':'Status',
    'action': 'Action'
  };

  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('addUser') addUser!: TemplateRef<any>;
  @ViewChild('updateUser') updateUser!: TemplateRef<any>;

  @ViewChild('myForm') myForm!: NgForm;

  irccFile: any = {
    applicantFileID:'',
    file_name: '',
    country_name:''
  }
  account:any={
    username:'',
    status:0,
  }
  
  constructor( private dialog: MatDialog,private loginService:LoginServicesService ){
  }
  username:any
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.username = sessionStorage.getItem("username");

    this.getAllUser()
  }
  

openDialogAddUser():void{

  this.dialog.open(this.addUser,{width:'400px'});
}

isLoading: boolean = true; // Flag to track loading state

currentIndex = 0;
getAllUser(){
  return this.loginService.getAllUsers().subscribe(
    respo=>{
      respo.forEach((element: any, index: number) => {
      element['index'] = index + 1; // Assign the index value directly based on the array index
      if(element.status===0){
        element['status'] = "Active"
      }if (element.status===1) {
        element['status'] = "Blocked"
      } else {
        // element['status'] = "Deactive"
      }
      // console.log(index)
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

saveFunction(data: any): void {
  this.loginService.user_registrations(data).subscribe(
    respo=>{
      console.log(respo)
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        text: 'User created successfully.',
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
      this.getAllUser()
      this.myForm.reset()
      this.dialog.closeAll();
    },
    error => {
      console.error(error);
      // Show error message
      Swal.fire({
        title: 'Error!',
        text: 'User name Allready Exist. Please try another user name.',
        icon: 'error',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  )
}
save(){
  this.account.password = "12345"
  this.saveFunction(this.account)
  // console.log("data",this.account)
}
deleteFunction(id: any): void {

}

delete(element: any): void {
  const id = element.irccID
  // console.log(element.irccID)
  this.deleteFunction(id);
}
openDialogUpdateUsers(element:any):void{

  this.dialog.open(this.updateUser,{width:'400px'});
  console.log(element)
 
}
updateFunction(username:any,data:any){
 this.loginService.updateUser(username,data).subscribe(
  respo=>{
    console.log(respo)
    location.reload()
  }
 )
}
updateStatusFunction(username:any,status:any){
  return this.loginService.updateStatus(username,status).subscribe(
    respo=>{
      console.log(respo)
      this.dialog.closeAll()
      this.getAllUser()
      location.reload()
    }
  )
}
update(){
 this.account.username = this.username
    // this.updateFunction(this.irccFile.irccID,this.irccFile)
    console.log(this.account)
    this.updateStatusFunction(this.account.username,this.account.status)
}

changePassword(element:any){
this.account.password = element.password
this.account.password = "12345"
this.account.status = element.status
this.account.status = 0
this.account.username = element.username
this.account.roles = element.roles
  // console.log(this.account)
  this.updateFunction(this.account.username,this.account)
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