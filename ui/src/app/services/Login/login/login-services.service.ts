import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  private login = environment.url + 'Account';

  constructor(
    private http: HttpClient
   ) { }

   login_authentication(username: any, password: any): Observable<any> {
    return this.http.post(this.login + '/login', null, { params: { username, password } });
  }



    user_registrations(data:any):Observable<any>{
      return this.http.post(this.login +'/register',data);
    }

    getAllUsers():Observable<any>{
      return this.http.get(this.login + "/GetAllUsers");
    }

    updateUser(username:any,data:any){
      return this.http.put(this.login+"/updateUser"+username,data);
    }

}
