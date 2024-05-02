import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ApplicantStatusServicesService {

  private applicantStatus = environment.url + 'ApplicantStatus';
  constructor( private http:HttpClient ) { }


  getAllApplicantsStatus():Observable<any>{
    return this.http.get(this.applicantStatus+ "/getAllApplicantStaus");
  }
  getAllApplicantStatusIsPendingByUser(register_by:any):Observable<any>{
    return this.http.get<any>(`${this.applicantStatus}/GetAllApplicantStatusIsPendingByUser/?register_by=${register_by}`);
  }
  getAllApplicantStatusIsApprovedByUser(register_by:any):Observable<any>{
    return this.http.get<any>(`${this.applicantStatus}/GetAllApplicantStatusIsApprovedByUser/?register_by=${register_by}`);
  }
  getAllApplicantStatusIsPending():Observable<any>{
    return this.http.get(this.applicantStatus+ "/GetAllApplicantStatusIsPending/");
  }
  getAllApplicantStatusIsApproved():Observable<any>{
    return this.http.get(this.applicantStatus+ "/GetAllApplicantStatusIsApproved/");
  }
  countAllApplicantStatusIsPendingByUser(register_by:any):Observable<any>{
    return this.http.get<any>(`${this.applicantStatus}/countTotalPendingByUser/?register_by=${register_by}`);
  }
  countAllApplicantStatusIsApprovedByUser(register_by:any):Observable<any>{
    return this.http.get<any>(`${this.applicantStatus}/countTotalApprovedByUser/?register_by=${register_by}`);
  }
  countAllApplicantStatusIsPending():Observable<any>{
    return this.http.get(this.applicantStatus+ "/countTotalPending/");
  }
  countAllApplicantStatusIsApproved():Observable<any>{
    return this.http.get(this.applicantStatus+ "/countTotalApproved/");
  }
  getAllApplicantStatusByApplicantID(applicantID:any):Observable<any>{
    return this.http.get<any>(`${this.applicantStatus}/GetAllApplicantByApplicantID/?applicantID=${applicantID}`);
  }
  ChangeApplicantStatusToApproved(applicantStatusID:any,status:any):Observable<any>{
    // return this.http.get<any>(`${this.applicantStatus}/changingApplicantStatus/?applicantStatusID=${applicantStatusID}&status=${status}`);
    return this.http.put(this.applicantStatus + '/changingApplicantStatus/', null, { params: { applicantStatusID, status } });


  }

  // getgeApplicantById(id:any):Observable<any>{
  //   return this.http.get(this.applicantDetails + "/getApplicantByID/" + id);
  // }

  // updateUser_Info(id:any,data:any){
  //   return this.http.put(this.user_details+"/updateUser"+id,data);
  // }

  // deleteUser_Info(id:any){
  //   return this.http.delete(this.user_details+"/deleteUser"+id);
  // }

  creatApplicantStatus(data:any):Observable<any>{
    return this.http.post(this.applicantStatus+"/addApplicantStatus",data);
  }
}
