
import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import{Router} from '@angular/router';

import{Issue} from '../../../../issue.model';
import{User} from '../../../../user.model';
import{Token} from'../../../../token.model';
import {IssueService} from '../../../../issue.service';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';

import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  /*profileForm = new FormGroup({
     fName: new FormControl('',Validators.required),
     lname: new FormControl(''),
     email:new FormControl('',Validators.required),
     Pass:new FormControl('',Validators.required),
     Rpass:new FormControl('',Validators.required)
   });*/
  signupForm: FormGroup;
  constructor(private issueService: IssueService,private fb: FormBuilder,private router: Router) {
    this.signupForm=this.fb.group({
    fname:['',Validators.required],
    lname:['',Validators.required],
      email:['',Validators.required],
    Pass:['',Validators.required],
    RPass:['']
    });  }

  ngOnInit() {
  }
  registerUser(fname,lname,email,Pass,RPass){
    console.log(fname);
  }

}
