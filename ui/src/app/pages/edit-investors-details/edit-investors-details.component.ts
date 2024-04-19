import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { BankServicesService } from 'src/app/services/Investors/Bank/bank-services.service';
import { InvestorsImageServicesService } from 'src/app/services/Investors/investorsImage/investors-image-services.service';
import { InvestorsPackageServicesService } from 'src/app/services/Investors/investors_Package/investors-package-services.service';
import { InvestorsDetailsServicesService } from 'src/app/services/Investors/ivestorsDetails/investors-details-services.service';
import { KinDetailsServicesService } from 'src/app/services/Investors/kinDetails/kin-details-services.service';
import { FilesServicesService } from 'src/app/services/files/files/files-services.service';

@Component({
  selector: 'app-edit-investors-details',
  templateUrl: './edit-investors-details.component.html',
  styleUrls: ['./edit-investors-details.component.css']
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
      console.log(respo)
      this.kinData = respo
    }
  )
}
getBankByInvestorsID(investorsID:any){
  return this.bankAccountServices.getBankByInvestorsID(investorsID).subscribe(
    respo=>{
      console.log(respo)
      this.bankData = respo
    }
  )
}
getInvestors_PackageByInvestorsID(investorsID:any){
  return this.investors_packageService.getInvestors_PackageByInvestorsID(investorsID).subscribe(
    respo=>{
      console.log(respo)
      this.investors_packageData = respo
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
        this.InvestorsImageFileModel.investorsID = item.investorsID
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
deleteImage(element:any){

}
saveImage(){

}
}
