import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class FilesServicesService {

  private files = environment.url + 'ApplicantFile';
  constructor( private http:HttpClient ) { }


  // getUser_Info():Observable<any>{
  //   return this.http.get(this.user_details + "/getAllUser");
  // }

  // getgetUser_InfoById(id:any):Observable<any>{
  //   return this.http.get(this.user_details + "/getUserById/" + id);
  // }

  // updateUser_Info(id:any,data:any){
  //   return this.http.put(this.user_details+"/updateUser"+id,data);
  // }

  // deleteUser_Info(id:any){
  //   return this.http.delete(this.user_details+"/deleteUser"+id);
  // }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(this.files+"/addFile", formData);
  }
}
