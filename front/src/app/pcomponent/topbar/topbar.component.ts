import { Component, OnInit,Input } from '@angular/core';

import{Issue} from '../../issue.model';
import {IssueService} from '../../issue.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent  {
email:string;
  issues:Issue[];

  title = 'frontend';
alerts=[];
  constructor(private issueService: IssueService,private router:Router) { }//inject issue service
  ngOnInit()
  {this.email=this.issueService.email;
 this.fetchIssues();
}


fetchIssues(){
  this.issueService
  .getIssues()
  .subscribe((data: Issue[])=>{
    this.issues=data;

    console.log('data requested ...');
    console.log(this.issues);

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

var k=0;
for(var i=0;i<(this.issues.length);i++){
  var date=this.issues[i].dueDate;
   var day=Number(date.charAt(8)+date.charAt(9));
   var month=Number(date.charAt(5)+date.charAt(6));
   var year=Number(date.charAt(0)+date.charAt(1)+date.charAt(2)+date.charAt(3));
   if((year-yyyy)==0 && (month-mm)==0&&day>=dd)
   {

this.alerts[k]=this.issues[i];
k++;
   }



}



  });
}
}
