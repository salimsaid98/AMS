import { DatePipe } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { kinDetails } from 'src/app/model/KinDetails';
import { BankServicesService } from 'src/app/services/Investors/Bank/bank-services.service';
import { InvestorsImageServicesService } from 'src/app/services/Investors/investorsImage/investors-image-services.service';
import { InvestorsPackageServicesService } from 'src/app/services/Investors/investors_Package/investors-package-services.service';
import { InvestorsDetailsServicesService } from 'src/app/services/Investors/ivestorsDetails/investors-details-services.service';
import { KinDetailsServicesService } from 'src/app/services/Investors/kinDetails/kin-details-services.service';
import { FilesServicesService } from 'src/app/services/files/files/files-services.service';
import Swal from 'sweetalert2';
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'MM/DD/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-edit-investors-details',
  templateUrl: './edit-investors-details.component.html',
  styleUrls: ['./edit-investors-details.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class EditInvestorsDetailsComponent {
  id:any
  kinData:any
  bankData:any
  investors_packageData:any
  inveestorsData:any
  InvestorsImageFileModel:any={
   investorImageFileID:'',
   fileID:'',
   investorsID:''
  }
  Investors_Packages:any={
    package_amount_invested:'',
    profit_earning:'',
    contract_limit:'',
    investorsID:'',
    packageID:'',
    profitEarningYear:'',
    packageDate:''
    
  }
  KinDetails:any={
    kinfullName:'',
    kinemailAddress:'',
    kinhomeAddress:'',
    kinphoneNumber:'',
    kinnationalIdNumber:'',
    kinpassportNumber:'',
    kinTypes:'',
    investorsID:''
  }
  BankDetails:any={
  
    bank_name:'',
    bank_account_no:'',
    bank_account_holders:'',
    bank_swift_code:'',
    bank_account_currence:'',
    investorsID:''
  }
constructor(private kinDetailsServices:KinDetailsServicesService,
  private route:ActivatedRoute,
  private bankAccountServices:BankServicesService,
  private investors_packageService:InvestorsPackageServicesService,
  private inverstorsDetailsServices:InvestorsDetailsServicesService,
  private rout:Router,
  private investorImageFileServices : InvestorsImageServicesService,
  private dialog:MatDialog,
  private fileServices:FilesServicesService,private sanitizer :DomSanitizer
){}
@ViewChild('addImageFile') addImageFile!: TemplateRef<any>;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
this.id = this.route.snapshot.params['id'];
this.InvestorsImageFileModel.investorsID = this.id
this.getKinByInvestorsID(this.id)
this.getBankByInvestorsID(this.id)
this.getInvestors_PackageByInvestorsID(this.id)
this.getInvestorsByID(this.id)
this.getInvestorsImageFileByInvestorsID(this.id)
}
getInvestorsByID(investorsID:any){
  return this.inverstorsDetailsServices.getInestorsById(investorsID).subscribe(
    respo=>{
      console.log(respo)
      this.inveestorsData = respo
    }
  )
}
getKinByInvestorsID(investorsID:any){
  return this.kinDetailsServices.getKinByInvestorsID(investorsID).subscribe(
    respo=>{
      respo.forEach((items:any)=> {
        this.kinData = items
      });
      console.log(respo)
      // this.kinData = respo
    }
  )
}
getBankByInvestorsID(investorsID:any){
  return this.bankAccountServices.getBankByInvestorsID(investorsID).subscribe(
    respo=>{
      respo.forEach((items:any)=> {
        this.bankData = items
      });
      console.log(respo)
      // this.bankData = respo
    }
  )
}
getIinvestors_PackageByID(id:any){
  return this.investors_packageService.getInvest_PackageById(id).subscribe(
    respo=>{
      console.log("Investors Package By ID",respo)
    }
  )
}
getInvestors_PackageByInvestorsID(investorsID:any){
  return this.investors_packageService.getInvestors_PackageByInvestorsID(investorsID).subscribe(
    respo=>{
      console.log(respo)
      respo.forEach((item:any) => {
        this.investors_packageData = item

      });
      // console.log(this.investors_packageData)
      this.getIinvestors_PackageByID(this.investors_packageData.investors_packageid)
    }
  )
}


edit(){
  const id = this.id
  this.rout.navigate(['home/edit-investors',{id}])
}
SaveInvestorImage(){
  // console.log(this.selectedFile)
  if (this.selectedFile) {
    console.log('Selected file:', this.selectedFile);
      this.uploadImageFile(this.selectedFile)
  } else {
    console.log('No file selected.');
  }
}
selectedFile!: File;
onImageFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
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
          this.InvestorsImageFileModel.fileID = item.fileID;
        });
        this.investorImageFileServices.creatInvestorsImageFile(this.InvestorsImageFileModel).subscribe(
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

imageAvailable:boolean=true
imageFile:any
imageunAvailable:boolean=false
getInvestorsImageFileByInvestorsID(investorsID:any){
  return this.investorImageFileServices.getAllInvestorsImageFileByInvestorsID(investorsID).subscribe(
    respo=>{
      respo.forEach((item:any) => {
        this.InvestorsImageFileModel = item
      });
      console.log(respo)
      this.imageFile = respo
      this.setProfileImage();
      if( this.InvestorsImageFileModel.investorsID==this.id){
        this.imageAvailable = true
        
        this.imageunAvailable =false

      }else{
        this.imageAvailable = false
        this.imageunAvailable =true
      }
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
profileImage: any
deleteInvestImageFunction(id: any): void {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this Investors Image!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.isConfirmed) {
      // User confirmed, proceed with deletion
      this.investorImageFileServices.deleteInvestorsImage(id).subscribe(
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
          this.getInvestorsImageFileByInvestorsID(this.id)
          location.reload()
        },
        error => {
          console.error(error);
          // Show error message
          Swal.fire({
            title: 'Error!',
            text: 'An error occurred while deleting Investor Image. Please try again later.',
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
this.deleteInvestImageFunction(element);
}
saveImage(){

}
updateinvestorsFunction(id:any,data:any){
  return this.inverstorsDetailsServices.updateInvestorDetails(id,data).subscribe(
    respo=>{
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        text: 'Investors Details Update successfully.',
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
      // console.log(respo)
      this.getInvestorsByID(this.id)
    },
    error => {
      console.error(error);
      // Show error message
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while Updating the Investors Details. Please try again later.',
        icon: 'error',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  )
}
updateInvestors(element:any){
// console.log(element)
this.updateinvestorsFunction(element.investorsID,element)

}
updateKinDetailsFunction(id:any,data:any){
  return this.kinDetailsServices.updateKindetails(id,data).subscribe(
    respo=>{
      console.log(respo)
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        text: 'Kin Deatails update successfully.',
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
      this.getKinByInvestorsID(this.id)
    },
    error => {
      console.error(error);
      // Show error message
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while Updating the Kin Details. Please try again later.',
        icon: 'error',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  )
}
kin_detailsID:any
updateKin(element:any){
  this.KinDetails.kinfullName = element.kinfull_name
  this.KinDetails.kinemailAddress = element.kinemail_address
  this.KinDetails.kinhomeAddress=  element.kinemail_address
  this.KinDetails.kinphoneNumber= element.kinphone_number
  this.KinDetails.kinnationalIdNumber= element.kinnational_id_number
  this.KinDetails.kinpassportNumber= element.kinpassport_number
  this.KinDetails.kinTypes= element.kin_types
  this.KinDetails.investorsID= this.id
  this.kin_detailsID = element.kin_detailsid
  

  // console.log(this.kin_detailsID,this.KinDetails)
  this.updateKinDetailsFunction(this.kin_detailsID,this.KinDetails)
}
updateBankFunction(id:any,data:any){
  return this.bankAccountServices.updateBank(id,data).subscribe(
    respo=>{
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        text: 'Bank Details Update successfully.',
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
      this.getBankByInvestorsID(this.id)
    },
    error => {
      console.error(error);
      // Show error message
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while Updating the Bank Details. Please try again later.',
        icon: 'error',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  )
}
bank_accountID:any
updateBank(element:any){
  this.BankDetails.bank_name = element.bank_name
  this.BankDetails.bank_account_no = element.bank_account_no
  this.BankDetails.bank_account_holders=element.bank_account_holders
  this.BankDetails.bank_swift_code=element.bank_swift_code
  this.BankDetails.bank_account_currence=element.bank_account_currence
  this.BankDetails.investorsID=this.id
  this.bank_accountID=element.bank_accountid
  // console.log(this.BankDetails)
  this.updateBankFunction(this.bank_accountID,this.BankDetails);
}
updateInvest_packFunction(id:any,data:any){
  this.investors_packageService.updateInvestors_Package(id,data).subscribe(
    respo=>{
      console.log(respo)
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        text: 'Investors Details Update successfully.',
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
      this.getInvestors_PackageByInvestorsID(this.id)
    },
    error => {
      console.error(error);
      // Show error message
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while Updating the Invoice Date. Please try again later.',
        icon: 'error',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  )
}
updateInvest_pack(element:any){
  this.Investors_Packages.packageData = element.package_date
  console.log(this.Investors_Packages)
  
  // this.updateInvest_packFunction(element.investors_packageid,element)
}
clearTime(event: MatDatepickerInputEvent<Date>) {
  if (event.value) {
    event.value.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0
  }
}

}
