import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class MotherServicesService {

 
  private mother = environment.url + 'MotherDetails';
  constructor( private http:HttpClient ) { }


  // getUser_Info():Observable<any>{
  //   return this.http.get(this.user_details + "/getAllUser");
  // }

  // getgetUser_InfoById(id:any):Observable<any>{
  //   return this.http.get(this.user_details + "/getUserById/" + id);
  // }

  // updateUser_Info(id:any,data:any){
  //   return this.http.put(this.user_details+"/updateUser"+id,data);
  // }

  // deleteUser_Info(id:any){
  //   return this.http.delete(this.user_details+"/deleteUser"+id);
  // }

  creatMother(data:any):Observable<any>{
    return this.http.post(this.mother+"/addMother",data);
  }
  getMotherByApplicantID(applicantID: number): Observable<any> {
    return this.http.get<any>(`${this.mother}/GetMotherByApplicantID/?applicantid=${applicantID}`);
  }
}
