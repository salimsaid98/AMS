import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ApplicantImageFileServicesService {
  private applicantImageFile= environment.url + 'ApplicantImageFile';
  constructor( private http:HttpClient ) { }


  // getAllApplicants():Observable<any>{
  //   return this.http.get(this.applicantDetails + "/getAllApplicant");
  // }

  // getgeApplicantById(id:any):Observable<any>{
  //   return this.http.get(this.applicantDetails + "/getApplicantByID/" + id);
  // }

  // updateUser_Info(id:any,data:any){
  //   return this.http.put(this.user_details+"/updateUser"+id,data);
  // }

  // deleteUser_Info(id:any){
  //   return this.http.delete(this.user_details+"/deleteUser"+id);
  // }

  creatApplicantImageFile(data:any):Observable<any>{
    return this.http.post(this.applicantImageFile+"/addApplicantImageFile",data);
  }
  // getAllApplicantPreparedFileByApplicantID(applicantID: number): Observable<any> {
  //   return this.http.get<any>(`${this.applicantPreparedFile}/GetApplicantFileByApplicantID/?applicantid=${applicantID}`);
  // }
}

