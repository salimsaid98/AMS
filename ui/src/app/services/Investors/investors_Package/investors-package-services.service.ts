import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class InvestorsPackageServicesService {

  private package = environment.url + 'Investors_Package';
  constructor( private http:HttpClient ) { }


  // getAllInvestPackage():Observable<any>{
  //   return this.http.get(this.package + "/getAllPackage");
  // }

  getInvest_PackageById(id:any):Observable<any>{
    return this.http.get(this.package + "/getInvestors_PackagebyID/" + id);
  }

  updateInvestors_Package(id:any,data:any){
    return this.http.put(this.package+"/updateInvestorsPackage"+id,data);
  }

  // deleteUser_Info(id:any){
  //   return this.http.delete(this.user_details+"/deleteUser"+id);
  // }

  creatInvestorsPackege(data:any):Observable<any>{
    return this.http.post(this.package+"/addInvestors_package",data);
  }
  getInvestors_PackageByInvestorsID(investorsID: number): Observable<any> {
    return this.http.get<any>(`${this.package}/GetInvestors_PackageByinvestorsID/?investorsID=${investorsID}`);
  }
}
