import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BankServicesService {
  private bank = environment.url + 'Bank';
  constructor( private http:HttpClient ) { }


  getAllBank():Observable<any>{
    return this.http.get(this.bank + "/getBank");
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

  creatBank(data:any):Observable<any>{
    return this.http.post(this.bank+"/addBank",data);
  }

  getBankByInvestorsID(investorsID: number): Observable<any> {
    return this.http.get<any>(`${this.bank}/GetBankByinvestorsID/?investorsID=${investorsID}`);
  }

}
