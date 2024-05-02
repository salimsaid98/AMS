import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { KinDetailsServicesService } from 'src/app/services/Investors/kinDetails/kin-details-services.service';
import { ApplicantDetailsServicesService } from 'src/app/services/applicant/applicantDetails/applicant-details-services.service';
import { FatherServicesService } from 'src/app/services/applicant/fatherDetails/father-services.service';
import { MotherServicesService } from 'src/app/services/applicant/motherDetails/mother-services.service';
import { WifeServicesService } from 'src/app/services/applicant/wifeDetails/wife-services.service';
import { ApplicantImageFileServicesService } from 'src/app/services/files/aplicantImageFile/applicant-image-file-services.service';
import { ApplicAndFileServicesService } from 'src/app/services/files/applicantAndFile/applic-and-file-services.service';
import { ApplicantFileServicesService } from 'src/app/services/files/applicantFile/applicant-file-services.service';
import { ApplicantPreparedFileServicesService } from 'src/app/services/files/applicantPreparedFile/applicant-prepared-file-services.service';

@Component({
  selector: 'app-applicant-profile',
  templateUrl: './applicant-profile.component.html',
  styleUrls: ['./applicant-profile.component.css']
})
export class ApplicantProfileComponent {
  id:any
  applicantImageFile_model: any = {
    applicantID: '',
    fileID:'',
    pplicant_image_fileid:''
    // file_name:'',
  };
constructor(private applicantDetailsServices:ApplicantDetailsServicesService,
  private kinDetailsService:KinDetailsServicesService,
  private fatherDetailsService:FatherServicesService,
  private motherDetailsServices:MotherServicesService,
  private wifeDetailsServices : WifeServicesService,
  private applicantAndFileServices:ApplicAndFileServicesService,
  private applicantPreparedFileServices:ApplicantPreparedFileServicesService,
  private route:ActivatedRoute,
  private applicantImageFileServices : ApplicantImageFileServicesService,
  private sanitizer :DomSanitizer ,


){

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.id = this.route.snapshot.params['id'];

  this.getAllApplicantByApplicantID(this.id);
  this.getKinDetailsByApplicantID(this.id);
  this.getFatherDetailsApplicantID(this.id);
  this.getMotherDetailsByID(this.id);
  this.getWifeDetailsbyApplicantID(this.id);
  this.getApplicantFileByApplicantID(this.id);
  this.getApplicantpreparedFileByApplicantID(this.id);
  this. getApplicantImageFile(this.id)
}
  edit(){

  }
  print() {
    // Add a class to hide all elements except the investor-details-container
    document.body.classList.add('print-only-applicant-details');
  
    // Initiate printing
    window.print();
  
    // Remove the added class after printing is done
    document.body.classList.remove('print-only-applicant-details');
  }
  applicantDetails:any
  getAllApplicantByApplicantID(applicantID:any){
 
    return this.applicantDetailsServices.getgeApplicantById(applicantID).subscribe(
      respo=>{
        this.applicantDetails = respo
        console.log("Applicant Data ",this.applicantDetails)

      }
    )
  }
  KinDetails :any
  getKinDetailsByApplicantID(applicantID:any){
    return this.kinDetailsService.getKinByInvestorsID(applicantID).subscribe(
      respo=>{
        this.KinDetails = respo
        console.log(respo)
      }
    )
  }
  fatherDetails:any
  getFatherDetailsApplicantID(applicantID:any){
    return this.fatherDetailsService.getFatherByApplicantID(applicantID).subscribe(
      respo=>{
      respo.forEach((array:any)=> {
          this.fatherDetails = array

        });
        console.log("Father Details ",this.fatherDetails)

      }
    )
  }
  motherDetails:any
  getMotherDetailsByID(applicantID:any){
    this.motherDetailsServices.getMotherByApplicantID(applicantID).subscribe(
      respo=>{
      respo.forEach((array:any) => {
        this.motherDetails = array
      });
      console.log("mother Details :" , this.motherDetails)
      }
    )
  }
  wifeDetails:any
  getWifeDetailsbyApplicantID(applicantID:any){
    return this.wifeDetailsServices.getFatherByApplicantID(applicantID).subscribe(
      respo=>{
        respo.forEach((array:any)=> {
          this.wifeDetails = array
        });
        console.log("Wife Details ",this.wifeDetails)
      }
    )
  }
  applicantAndfile:any
  getApplicantFileByApplicantID(applicantID:any){
    this.applicantAndFileServices.getAllApplicantByApplicantID(applicantID).subscribe(
      respo=>{
        //   respo.forEach((array:any) => {
        //     this.applicantAndfile = array
        // });
        this.applicantAndfile = respo
        console.log("Applicant and File ",this.applicantAndfile)
      }
    )
  }
  applicantPreparedFile:any
  getApplicantpreparedFileByApplicantID(applicantID:any){
      this.applicantPreparedFileServices.getAllApplicantPreparedFileByApplicantID(applicantID).subscribe(
        respo=>{
          this.applicantPreparedFile = respo
          console.log("Applicant Prepared File ",this.applicantPreparedFile)
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
  profileImage:any
  setProfileImage(): void {
    if (this.imageFile && this.imageFile.length > 0) {
      const imageFile = this.imageFile[0]; // Assuming you only want to display the first image
      this.profileImage = this.sanitizer.bypassSecurityTrustUrl(this.getBase64Image(imageFile));
    }
  }
  getBase64Image(image: any): string {
    return 'data:' + image.file_type + ';base64,' + image.file_byte;
  }
}
