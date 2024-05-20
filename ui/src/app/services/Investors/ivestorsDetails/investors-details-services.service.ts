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

  getInestorsById(id:any):Observable<any>{
    return this.http.get(this.investors + "/getInvestorsByID/" + id);
  }

  updateInvestorDetails(id:any,data:any){
    return this.http.put(this.investors+"/updateInvestors"+id,data);
  }

  deleteInvestors(id:any){
    return this.http.delete(this.investors+"/deleteInvestors"+id);
  }

  creatInvestors(data:any):Observable<any>{
    return this.http.post(this.investors+"/addInvestors",data);
  }
  CountAllInvestors():Observable<any>{
    return this.http.get(this.investors+ "/CountAllInvestors/");
  }

}
