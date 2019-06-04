import { Component, OnInit } from '@angular/core';
import {IssueService} from '../../../../issue.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import{Router} from '@angular/router';
import{Issue} from '../../../../issue.model';

import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
createForm: FormGroup;
  constructor(private issueService: IssueService,private fb: FormBuilder,private router: Router) {

    this.createForm=this.fb.group({
      title:['',Validators.required],
      description:'',
      severity:'',
      dueDate:''


    });
 }

 addIssue(title,description,severity,dueDate){
   console.log(title,dueDate);
   this.issueService.addIssue(title,description,severity,dueDate).subscribe(()=>{
     this.router.navigate(['list']);
   });
 }

  ngOnInit() {
  }
}
