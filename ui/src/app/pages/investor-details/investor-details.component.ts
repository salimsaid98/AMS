import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankServicesService } from 'src/app/services/Investors/Bank/bank-services.service';
import { InvestorsPackageServicesService } from 'src/app/services/Investors/investors_Package/investors-package-services.service';
import { InvestorsDetailsServicesService } from 'src/app/services/Investors/ivestorsDetails/investors-details-services.service';
import { KinDetailsServicesService } from 'src/app/services/Investors/kinDetails/kin-details-services.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { kinDetails } from 'src/app/model/KinDetails';
import { DomSanitizer } from '@angular/platform-browser';
import { InvestorsImageServicesService } from 'src/app/services/Investors/investorsImage/investors-image-services.service';

@Component({
  selector: 'app-investor-details',
  templateUrl: './investor-details.component.html',
  styleUrls: ['./investor-details.component.css']
})
export class InvestorDetailsComponent {
  user = {
    name: 'John Doe',
    email: 'john@example.com',
    // Add more user properties as needed
  };
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
 private sanitizer :DomSanitizer,
 private investorImageFileServices : InvestorsImageServicesService,


){}
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
this.updateDateTime();

setInterval(() => {
  this.updateDateTime();
}, 1000);

}
getInvestorsByID(investorsID:any){
  return this.inverstorsDetailsServices.getInestorsById(investorsID).subscribe(
    respo=>{
      console.log(respo)
      this.inveestorsData = respo
    }
  )
}
getStatusColor(): string {
  if (this.inveestorsData && this.inveestorsData.status === 'Pending') {
    return 'red';
  } if (this.inveestorsData && this.inveestorsData.status === 'Approved') {
    return 'blue';
  } else {
    return 'black'; // Default color
  }
}
getKinByInvestorsID(investorsID:any){
  return this.kinDetailsServices.getKinByInvestorsID(investorsID).subscribe(
    respo=>{
      respo.forEach((items:any) => {
        this.kinData = items
      });
      // console.log(this.kinData)
    }
  )
}
getBankByInvestorsID(investorsID:any){
  return this.bankAccountServices.getBankByInvestorsID(investorsID).subscribe(
    respo=>{
      respo.forEach((items:any) => {
        this.bankData = items
      });
      // console.log(this.bankData)
    }
  )
}
getInvestors_PackageByInvestorsID(investorsID:any){
  return this.investors_packageService.getInvestors_PackageByInvestorsID(investorsID).subscribe(
    respo=>{
      respo.forEach((items:any) => {
        this.investors_packageData = items
      });
      // console.log(this.investors_packageData)

    }
  )
}
print() {
  // Add a class to hide all elements except the investor-details-container
  document.body.classList.add('print-only-investor-details');

  // Initiate printing
  window.print();

  // Remove the added class after printing is done
  document.body.classList.remove('print-only-investor-details');
}






// Function to load profile image and return as base64 data URL
loadProfileImage(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = 150; // Adjust width as needed
        canvas.height = 150; // Adjust height as needed
        ctx.drawImage(img, 0, 0, 150, 150); // Adjust width and height as needed
        resolve(canvas.toDataURL('image/png'));
      } else {
        reject(new Error('Failed to get 2D rendering context'));
      }
    };
    img.onerror = (error) => {
      reject(error);
    };
    img.src = this.getBase64Image(this.imageFile[0]); // Assuming this.imageFile contains your image data
  });
}




edit(){
  const id = this.id
  this.rout.navigate(['home/edit-investors',{id}])
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
currentDateTime!: string;
updateDateTime() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  };
  this.currentDateTime = currentDate.toLocaleDateString('en-US', options);
}
}




