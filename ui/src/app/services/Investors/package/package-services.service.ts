import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PackageServicesService {
  private package = environment.url + 'Package';
  constructor( private http:HttpClient ) { }


  getAllPackage():Observable<any>{
    return this.http.get(this.package + "/getAllPackage");
  }

  // getgetUser_InfoById(id:any):Observable<any>{
  //   return this.http.get(this.user_details + "/getUserById/" + id);
  // }

  updatePackage(id:any,data:any){
    return this.http.put(this.package+"/updatePackage"+id,data);
  }

  deletePackage(id:any){
    return this.http.delete(this.package+"/deletePackage"+id);
  }

  creatPackege(data:any):Observable<any>{
    return this.http.post(this.package+"/addPackage",data);
  }

}
