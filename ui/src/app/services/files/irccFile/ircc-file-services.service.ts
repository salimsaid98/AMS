import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class IrccFileServicesService {
  private irccFile = environment.url + 'IRCCFile';
  constructor( private http:HttpClient ) { }


  getAllIRCCFiles():Observable<any>{
    return this.http.get(this.irccFile + "/getAllIrccFile");
  }

  // getgeApplicantById(id:any):Observable<any>{
  //   return this.http.get(this.applicantDetails + "/getApplicantByID/" + id);
  // }

  updateIRCCFile(id:any,data:any){
    return this.http.put(this.irccFile+"/updateIrccFile"+id,data);
  }

  deleteIRCCFile(id:any){
    return this.http.delete(this.irccFile+"/deleteIrccFile"+id);
  }

  creatIRCCFile(data:any):Observable<any>{
    return this.http.post(this.irccFile+"/addIrccFile",data);
  }
}
