import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{MatTableDataSource} from '@angular/material';
import{Issue} from '../../issue.model';
import {IssueService} from '../../issue.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


import * as CanvasJS from '../../../canvasjs.min';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   issues:Issue[];
   displayedColumns=['title','description','severity','actions'];
   page=4;
  
  constructor(private issueService: IssueService,private router:Router) { }//inject issue service

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
