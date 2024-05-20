import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BankServicesService } from 'src/app/services/Investors/Bank/bank-services.service';
import { InvestorsPackageServicesService } from 'src/app/services/Investors/investors_Package/investors-package-services.service';
import { InvestorsDetailsServicesService } from 'src/app/services/Investors/ivestorsDetails/investors-details-services.service';
import { KinDetailsServicesService } from 'src/app/services/Investors/kinDetails/kin-details-services.service';
import { PackageServicesService } from 'src/app/services/Investors/package/package-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-investors',
  templateUrl: './add-investors.component.html',
  styleUrls: ['./add-investors.component.css']
})
export class AddInvestorsComponent {
localDate = new Date().toLocaleDateString(); // Get current local date in string format
amountInvested: number = 0;
profitEarning: number = 0;
profitEarningYear: number = 0;
@ViewChild('myForm') myForm!: NgForm;

constructor(private packageService:PackageServicesService,
  private investors_packageServices:InvestorsPackageServicesService,
  private investorsServices:InvestorsDetailsServicesService,
  private kinServices:KinDetailsServicesService,
  private bankServices:BankServicesService,
  private route:Router
){

}
Investors:any={
  investorsfullName:'',
  investorsemailAddress:'',
  investorshomeAddress:'',
  investorsphoneNumber:'',
  investorsnationalIdNumber:'',
  investorspassportNumber:'',
  registerDate:this.localDate,
  investorsgender:'',
  status:'',
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

Investors_Package:any={
}
Investors_Packages:any={
  package_amount_invested:'',
  profit_earning:'',
  contract_limit:'',
  investorsID:'',
  packageID:'',
  profitEarningYear:''
  
}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getAllPackage();
}

packageData:any
getAllPackage(){
  this.packageService.getAllPackage().subscribe(
    respo=>{
      console.log(respo)
      this.packageData = respo
    }
  )
}
save(){
  // console.log(this.Investors,this.BankDetails,this.KinDetails,this.Investors_Packages)


  this.saveInvestors(this.Investors,this.BankDetails,this.KinDetails,this.Investors_Packages)
}
saveInvestors(investors:any,bank:any,kin:any,investor_package:any){
  // console.log(this.Investors,this.BankDetails,this.KinDetails,this.Investors_Packages)

  return this.investorsServices.creatInvestors(investors).subscribe(
    invest=>{
      console.log("Investors ",invest)
      this.KinDetails.investorsID = invest.investorsID
      this.BankDetails.investorsID = invest.investorsID
      this.Investors_Packages.investorsID = invest.investorsID
      this.kinServices.creatkin(kin).subscribe(
        kin=>{
          console.log("Kin Details ",kin)
        }
      )
      this.bankServices.creatBank(bank).subscribe(
        bank=>{
          console.log("Bank Details" ,bank)
        }
      )
      this.investors_packageServices.creatInvestorsPackege(investor_package).subscribe(
        invepack=>{
          console.log("ivestorst Package ",invepack)
        }
      )
      Swal.fire({
        position: 'top-right',
        icon: 'success',
        text: 'Investors Information created successfully.',
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
      this.route.navigate(['/home/all-investors'])

    },
    error => {
      console.error(error);
      // Show error message
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while creating the Investors Infomation. Please try again later.',
        icon: 'error',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  )
 
}

// onPackageSelect(packageID: number) {
//   const selectedPackage = this.packageData.find((pkg: { packageID: number; }) => pkg.packageID === packageID);
//   if (selectedPackage) {
//     this.Investors_Package.package_currency = selectedPackage.package_currency;
//     this.Investors_Package.package_name = selectedPackage.package_name;
//     this.Investors_Package.package_parecentage = selectedPackage.package_parecentage
//     ;
//   }
// }
onPackageSelect(packageID: number) {
  const selectedPackage = this.packageData.find((pkg: { packageID: number; }) => pkg.packageID === packageID);
  if (selectedPackage) {
    this.Investors_Package.package_currency = selectedPackage.package_currency;
    this.Investors_Package.package_name = selectedPackage.package_name;
    this.Investors_Package.package_parecentage = selectedPackage.package_parecentage;
    this.calculateProfitEarning();
  }
}

calculateProfitEarning() {
  if (this.amountInvested && this.Investors_Package.package_parecentage) {
    this.profitEarning = (this.amountInvested * this.Investors_Package.package_parecentage) / 100;
    // this.profitEarningYear = (((this.amountInvested * this.Investors_Package.package_parecentage) / 100));
    this.Investors_Packages.profit_earning = this.profitEarning
    this.Investors_Packages.package_amount_invested = this.amountInvested
  } else {
    this.profitEarning = 0;
  }
}
calculateProfitEarningYear(){
  if (this.amountInvested && this.Investors_Package.package_parecentage) {
    // this.profitEarning = (this.amountInvested * this.Investors_Package.package_parecentage) / 100;
    this.profitEarningYear = (((this.amountInvested * this.Investors_Package.package_parecentage *(this.Investors_Packages.contract_limit*12)) / 100));
    this.Investors_Packages.profitEarningYear = this.profitEarningYear
    this.Investors_Packages.package_amount_invested = this.amountInvested
  } else {
    this.profitEarning = 0;
  }
}

}
