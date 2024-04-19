import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class InvestorsImageServicesService {
  private investors = environment.url + 'InvestorImageFile';
  constructor( private http:HttpClient ) { }


  // getAllInvestors():Observable<any>{
  //   return this.http.get(this.investors + "/getInvestors");
  // }

  // getInestorsById(id:any):Observable<any>{
  //   return this.http.get(this.investors + "/getInvestorsByID/" + id);
  // }

  // updateUser_Info(id:any,data:any){
  //   return this.http.put(this.user_details+"/updateUser"+id,data);
  // }

  // deleteUser_Info(id:any){
  //   return this.http.delete(this.user_details+"/deleteUser"+id);
  // }

  creatInvestorsImageFile(data:any):Observable<any>{
    return this.http.post(this.investors+"/addInvestorImageFile",data);
  }
  getAllInvestorsImageFileByInvestorsID(investorsID: number): Observable<any> {
    return this.http.get<any>(`${this.investors}/GetInvestorsImageFileByInvestorsID/?investorsID=${investorsID}`);
  }
}
