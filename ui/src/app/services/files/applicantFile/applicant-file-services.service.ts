import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ApplicantFileServicesService {
  private applicantFile = environment.url + 'ApplicantFile';
  constructor( private http:HttpClient ) { }


  getAllApplicants():Observable<any>{
    return this.http.get(this.applicantFile + "/getAllApplicantFile");
  }

  // getgeApplicantById(id:any):Observable<any>{
  //   return this.http.get(this.applicantDetails + "/getApplicantByID/" + id);
  // }

  updateApplicantFile(id:any,data:any){
    return this.http.put(this.applicantFile+"/updateApplicantFile"+id,data);
  }

  deleteApplicantFile(id:any){
    return this.http.delete(this.applicantFile+"/deleteApplicantFile"+id);
  }

  creatApplicant(data:any):Observable<any>{
    return this.http.post(this.applicantFile+"/addApplicantFile",data);
  }
}
