import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RelativeServicesService {

  private relative = environment.url + 'Relative';
  constructor( private http:HttpClient ) { }


  // getUser_Info():Observable<any>{
  //   return this.http.get(this.user_details + "/getAllUser");
  // }

  // getgetUser_InfoById(id:any):Observable<any>{
  //   return this.http.get(this.user_details + "/getUserById/" + id);
  // }

  updateRelative(id:any,data:any){
    return this.http.put(this.relative+"/updateRelative"+id,data);
  }

  deleteRealtive(id:any){
    return this.http.delete(this.relative+"/deleterelative"+id);
  }

  creatRelative(data:any):Observable<any>{
    return this.http.post(this.relative+"/addRelative",data);
  }
  getRelativeByApplicantID(applicantID: number): Observable<any> {
    return this.http.get<any>(`${this.relative}/GetrelativeByApplicantID/?applicantid=${applicantID}`);
  }
}
