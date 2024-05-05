import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ApplicantPreparedFileServicesService {
  private applicantPreparedFile= environment.url + 'ApplicantPreparedFile';
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

  deleteApplicantPreparedFile(id:any){
    return this.http.delete(this.applicantPreparedFile+"/deleteApplicantPreparedFile"+id);
  }

  creatApplicantPreparedFile(data:any):Observable<any>{
    return this.http.post(this.applicantPreparedFile+"/addApplicantPreparedFile",data);
  }
  getAllApplicantPreparedFileByApplicantID(applicantID: number): Observable<any> {
    return this.http.get<any>(`${this.applicantPreparedFile}/GetApplicantFileByApplicantID/?applicantid=${applicantID}`);
  }
}
