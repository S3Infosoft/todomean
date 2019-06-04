import { Component, OnInit,Input } from '@angular/core';

import{Router} from '@angular/router';
import{MatTableDataSource} from '@angular/material';
import{Issue} from '../../../../issue.model';
import {IssueService} from '../../../../issue.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

issues:Issue[];
thisMon=[];
thisweek=[];
dayLeft=[];
dayLeftD=[];

  constructor(private issueService: IssueService,private router:Router) { }

  ngOnInit()
  {
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
var l=0;
  for(var i=0;i<(this.issues.length);i++){
  var date=this.issues[i].dueDate;
   var day=Number(date.charAt(8)+date.charAt(9));
   var month=Number(date.charAt(5)+date.charAt(6));
   var year=Number(date.charAt(0)+date.charAt(1)+date.charAt(2)+date.charAt(3));
   if((year-yyyy)==0 && (month-mm)==0)
   {
if(day>dd){
  this.thisMon[k]=this.issues[i];}

  if(day>dd && (day-dd)<8){
    this.thisweek[l]=this.issues[i];
    this.dayLeftD[l]=day-dd;
    l++;
  }
 this.dayLeft[k]=day-dd;
 k++;
   }




  }



  });
  }

}
