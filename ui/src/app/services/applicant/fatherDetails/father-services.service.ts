import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class FatherServicesService {

  private father = environment.url + 'fatherDetails';
  constructor( private http:HttpClient ) { }


  // getUser_Info():Observable<any>{
  //   return this.http.get(this.user_details + "/getAllUser");
  // }

  // getgetUser_InfoById(id:any):Observable<any>{
  //   return this.http.get(this.user_details + "/getUserById/" + id);
  // }

  updatefather(id:any,data:any){
    return this.http.put(this.father+"/updatefather"+id,data);
  }

  // deleteUser_Info(id:any){
  //   return this.http.delete(this.user_details+"/deleteUser"+id);
  // }

  creatFather(data:any):Observable<any>{
    return this.http.post(this.father+"/addFather",data);
  }
  getFatherByApplicantID(applicantID: number): Observable<any> {
    return this.http.get<any>(`${this.father}/GetFatherByApplicantID/?applicantid=${applicantID}`);
  }
}
