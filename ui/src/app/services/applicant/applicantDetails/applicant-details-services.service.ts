import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ApplicantDetailsServicesService {

  private applicantDetails = environment.url + 'applicant';
  constructor( private http:HttpClient ) { }


  getAllApplicants():Observable<any>{
    return this.http.get(this.applicantDetails + "/getAllApplicant");
  }
  getCountAllApplicant():Observable<any>{
    return this.http.get(this.applicantDetails + "/CountAllApplicant/");
  }

  getgeApplicantById(id:any):Observable<any>{
    return this.http.get(this.applicantDetails + "/getApplicantByID/" + id);
  }

  updateApplicant(id:any,data:any){
    return this.http.put(this.applicantDetails+"/updateApplicant"+id,data);
  }

  // deleteUser_Info(id:any){
  //   return this.http.delete(this.user_details+"/deleteUser"+id);
  // }

  creatApplicant(data:any):Observable<any>{
    return this.http.post(this.applicantDetails+"/addApplicant",data);
  }
  countAllApplicantByUser(register_by:any):Observable<any>{
    return this.http.get<any>(`${this.applicantDetails}/CountAllApplicantByUser/?register_by=${register_by}`);
  }
  getAllApplicantByUser(register_by:any):Observable<any>{
    return this.http.get<any>(`${this.applicantDetails}/GetAllApplicantByUser/?register_by=${register_by}`);
  }
}
