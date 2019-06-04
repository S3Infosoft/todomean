import { Component, OnInit,Input } from '@angular/core';

import{Router} from '@angular/router';
import{MatTableDataSource} from '@angular/material';
import{Issue} from '../../../../../issue.model';
import {IssueService} from '../../../../../issue.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-due-month',
  templateUrl: './due-month.component.html',
  styleUrls: ['./due-month.component.css']
})
export class DueMonthComponent implements OnInit {

  issues:Issue[];
  thisMon=[];
  thisweek=[];
  dayLeft=[];
  dayLeftD=[];
  constructor(private issueService: IssueService,private router:Router) { }

  ngOnInit() {
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

  var k=0,l=0;
  for(var i=0;i<(this.issues.length);i++){
  var date=this.issues[i].dueDate;
   var day=Number(date.charAt(8)+date.charAt(9));
   console.log(day);
   var month=Number(date.charAt(5)+date.charAt(6));
   var year=Number(date.charAt(0)+date.charAt(1)+date.charAt(2)+date.charAt(3));
   if((year-yyyy)==0 && (month-mm)==0 && day>dd)
   {
       this.thisMon[k]=this.issues[i];
       this.dayLeft[k]=day-dd;
       k++;
   }

 }
 console.log(this.thisMon[0]);
});
}}
