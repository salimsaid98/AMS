import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PreparedFileServicesService {
  private preparedFile = environment.url + 'PreparedFile';
  constructor( private http:HttpClient ) { }


  getAllPreparedFile():Observable<any>{
    return this.http.get(this.preparedFile + "/getAllPreparedtFile");
  }

  // getgeApplicantById(id:any):Observable<any>{
  //   return this.http.get(this.applicantDetails + "/getApplicantByID/" + id);
  // }

  updatePreparedFile(id:any,data:any){
    return this.http.put(this.preparedFile+"/updateIrccFile"+id,data);
  }

  deletePreparedFile(id:any){
    return this.http.delete(this.preparedFile+"/deletePreparedFile"+id);
  }

  creatPreparedFile(data:any):Observable<any>{
    return this.http.post(this.preparedFile+"/addPreparedFile",data);
  }
}
