import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-asside',
  templateUrl: './asside.component.html',
  styleUrls: ['./asside.component.css']
})
export class AssideComponent {
  username!:any
  roles!:any
  userOnly:boolean = false
  addminOnly:boolean = false
  constructor(private router:Router){

  }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.username = sessionStorage.getItem("username");
  this.roles= sessionStorage.getItem("roles");
  if(this.roles=="Admin"){
      this.userOnly=false
  }else{
    this.userOnly=true
  }
  if(this.roles=="Staff"){
    this.addminOnly =false
  }else{
    this.addminOnly=true
  }
}
logout(): void {
  sessionStorage.clear();
  this.router.navigateByUrl('/login');
}
sidebarCollapsed: boolean = false;

// Method to toggle sidebar visibility
toggleSidebar() {
  this.sidebarCollapsed = this.sidebarCollapsed;
}
}
