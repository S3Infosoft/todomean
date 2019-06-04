import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import{Router} from '@angular/router';

import{Issue} from '../../../../issue.model';
import{User} from '../../../../user.model';
import{Token} from'../../../../token.model';
import {IssueService} from '../../../../issue.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   tokendata:Token;
  loginForm: FormGroup;
    constructor(private issueService: IssueService,private fb: FormBuilder,private router: Router) {

      this.loginForm=this.fb.group({
        email:['',Validators.required],
      password:['',Validators.required]


      });


   }
   loginUser(email,password){
     console.log(email);
     this.issueService.loginUser(email,password).subscribe((data:Token)=>{
       this.tokendata=data;
       console.log(data.token);
       console.log(data.email);
       console.log(data.id);
this.issueService.serviceData=data.token;
this.issueService.userId=data.id;
this.issueService.email=data.email;
       this.router.navigate(['createNotebook']);


     });
   }

  ngOnInit() {
  }

}
