import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Login_models } from 'src/app/model/Login_models';
import { LoginServicesService } from 'src/app/services/Login/login/login-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private route :Router,
  private login_services:LoginServicesService){}

  login_model: Login_models = new Login_models();
  // login_process(username:any,password:any){
  //   return this.login_services.login_authentication(username,password).subscribe(
  //     respo=>{
  //       console.log(respo)
  //       sessionStorage.setItem("username",respo.username)
  //       if(respo){
  //         this.route.navigate(['/home'])
  //       }else{
  //         alert("error")
  //       }
  //     }
  //   )
  // }
  login_process(username: any, password: any) {
    return this.login_services.login_authentication(username, password).subscribe(
      respo => {
        console.log(respo);
        sessionStorage.setItem("username", respo.username);
        sessionStorage.setItem("roles", respo.roles);
        if (respo) {
          this.route.navigate(['/home']);
          Swal.fire({
            position: 'top-right',
            icon: 'success',
            title: 'Login Successful',
            toast: true,
            timer: 1500,
            showConfirmButton: false,
            timerProgressBar: true,
            width: '350px',
            customClass: {
              title: 'toast-success-title',
              icon: 'toast-success-icon'
            }
          });
        } else {
          Swal.fire({
            position: 'top-right',
            icon: 'error',
            title: 'Login Error',
            text: 'Invalid username or password. Please try again.',
            toast: true,
            timer: 1500,
            showConfirmButton: false,
            timerProgressBar: true,
            width: '350px',
            customClass: {
              title: 'toast-error-title',
              icon: 'toast-error-icon'
            }
          });
        }
      },
      error => {
        console.error(error);
        Swal.fire({
          position: 'top-right',
          icon: 'error',
          title: 'Login Error',
          text: 'An error occurred while logging in. Please try again later.',
          toast: true,
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
          width: '350px',
          customClass: {
            title: 'toast-error-title',
            icon: 'toast-error-icon'
          }
        });
      }
    );
  }
  
  

  login(){
    this.login_process(this.login_model.username,this.login_model.password)
    // console.log(this.login_model);
}
}


        // if(respo.roles=="Admin"){
        //   this.route.navigate(['/home'])
        // }else{
        //   alert("error")
        // }