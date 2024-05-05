import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ApplicAndFileServicesService {
  private applicantAndFile= environment.url + 'ApplicantDetails_and_File';
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

  deleteApplicantAndFile(id:any){
    return this.http.delete(this.applicantAndFile+"/deleteApplicantAndFile"+id);
  }

  creatApplicantAndFile(data:any):Observable<any>{
    return this.http.post(this.applicantAndFile+"/addApplicant_and_file",data);
  }
  getAllApplicantByApplicantID(applicantID: number): Observable<any> {
    return this.http.get<any>(`${this.applicantAndFile}/GetApplicantFileByApplicantID/?applicantid=${applicantID}`);
  }
}
