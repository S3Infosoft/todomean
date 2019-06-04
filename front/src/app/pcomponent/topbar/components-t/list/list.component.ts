import { Component, OnInit,Input } from '@angular/core';
import{Router} from '@angular/router';
import{MatTableDataSource} from '@angular/material';
import{Issue} from '../../../../issue.model';
import {IssueService} from '../../../../issue.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


import * as CanvasJS from '../../../../../canvasjs.min';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   issues:Issue[];
   notebook:string;
   displayedColumns=['title','description','severity','dueDate','actions'];
   page=4;

  constructor(private issueService: IssueService,private router:Router) { }//inject issue service

  ngOnInit() {

this.notebook=this.issueService.notebook;
 this.fetchIssues();



}

fetchIssues(){
  this.issueService
  .getIssuesByNote()
  .subscribe((data: Issue[])=>{
    this.issues=data;

    console.log('data requested ...');
    console.log(this.issues);
    console.log(this.issues.length);
    var date=this.issues[0].dueDate;
     var day=date.charAt(8)+date.charAt(9);
     var month=date.charAt(5)+date.charAt(6);
     var year=date.charAt(0)+date.charAt(1)+date.charAt(2)+date.charAt(3);

    console.log( Number(day));
    console.log(Number(month));
    console.log(Number(year));
    console.log(day);
    console.log(date);



  });

}
editIssue(id){
  console.log(id);
 this.router.navigate([`edit/${id}`]);
}
deleteIssue(id){
  this.issueService.deleteIssue(id).subscribe(()=>{
    this.fetchIssues();
  });
}
}
