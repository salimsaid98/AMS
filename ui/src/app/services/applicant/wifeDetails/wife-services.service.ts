import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class WifeServicesService {


  private wife = environment.url + 'WifeDetails';
  constructor( private http:HttpClient ) { }


  // getUser_Info():Observable<any>{
  //   return this.http.get(this.user_details + "/getAllUser");
  // }

  // getgetUser_InfoById(id:any):Observable<any>{
  //   return this.http.get(this.user_details + "/getUserById/" + id);
  // }

  updateWife(id:any,data:any){
    return this.http.put(this.wife+"/updateWife"+id,data);
  }

  // deleteUser_Info(id:any){
  //   return this.http.delete(this.user_details+"/deleteUser"+id);
  // }

  creatWife(data:any):Observable<any>{
    return this.http.post(this.wife+"/addWife",data);
  }
  getFatherByApplicantID(applicantID: number): Observable<any> {
    return this.http.get<any>(`${this.wife}/GetWifeByApplicantID/?applicantid=${applicantID}`);
  }
}
