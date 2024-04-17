import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class KinDetailsServicesService {
  private kin = environment.url + 'Kin';
  constructor( private http:HttpClient ) { }


  getAllKing():Observable<any>{
    return this.http.get(this.kin + "/getKin");
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

  creatkin(data:any):Observable<any>{
    return this.http.post(this.kin+"/addKin",data);
  }

}
