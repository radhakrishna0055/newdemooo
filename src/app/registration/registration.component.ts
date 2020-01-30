import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{

firstname:string=null;
lastname:string=null;
username:string=null;
email:string=null;
gender:string=null;
qualification:string=null;
address:string=null;
city:string=null;
state:string=null;
country:string=null;
msg:string=null;

onRegisterClick(f)
{
  if(f.valid)
{
 
  this.msg="Firstname:" + this.firstname + "<br>Lastname:" + this.lastname +"<br>Username:" +
   this.username +"<br>Email:" + this.email +"<br>Gender:" + this.gender +"<br>Qualification:"+ 
   this.qualification + "<br>Address:" + this.address +"<br>City:" + this.city +"<br>State:" +
   this.state +"<br>country:" + this.country;
}
else
{
  this.msg ="invalid";
}
}
}
