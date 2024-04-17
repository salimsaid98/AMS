import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class InvestorsDetailsServicesService {
  private investors = environment.url + 'Investors';
  constructor( private http:HttpClient ) { }


  getAllInvestors():Observable<any>{
    return this.http.get(this.investors + "/getInvestors");
  }

  // getgetUser_InfoById(id:any):Observable<any>{
  //   return this.http.get(this.user_details + "/getUserById/" + id);
  // }

  // updateUser_Info(id:any,data:any){
  //   return this.http.put(this.user_details+"/updateUser"+id,data);
  // }

  // deleteUser_Info(id:any){
  //   return this.http.delete(this.user_details+"/deleteUser"+id);
  // }

  creatInvestors(data:any):Observable<any>{
    return this.http.post(this.investors+"/addInvestors",data);
  }

}
