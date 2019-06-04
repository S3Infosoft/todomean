
import { Component, OnInit,Input } from '@angular/core';
import{Router} from '@angular/router';
import{MatTableDataSource} from '@angular/material';
import{Notebook} from '../../../../notebook.model';
import {IssueService} from '../../../../issue.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBar} from '@angular/material';
import{Issue} from '../../../../issue.model';
@Component({
  selector: 'app-create-notebook',
  templateUrl: './create-notebook.component.html',
  styleUrls: ['./create-notebook.component.css']
})
export class CreateNotebookComponent implements OnInit {
createNoteform: FormGroup;
notebooks:Notebook[];
count:number[];
issues:Issue[];
  constructor(private issueService: IssueService,private router:Router,private fb: FormBuilder,private snackBar:MatSnackBar) {
    this.createNoteform = this.fb.group({
      notename: ['', [Validators.required]]
    });
}


ngOnInit() {
  this.fetchNotebook();

}



save() {

 console.warn(this.createNoteform.value);
var form=this.createNoteform.value;
console.log(form.notename);
this.issueService.addNote(form.notename).subscribe(()=>{
  //this.router.navigate(['list']);
  this.snackBar.open('Notebook created successfully','OK',{
    duration : 3000
  });
  this.fetchNotebook();

});


}
listOfNote(notebook,userId){
  console.log(notebook);
  this.issueService.notebook=notebook;
  this.router.navigate(['list']);
}

  fetchNotebook(){
    this.issueService
    .getNote()
    .subscribe((data: Notebook[])=>{
      this.notebooks=data;

      console.log('data requested ...');
      console.log(this.notebooks);
      console.log(this.notebooks.length);

    });}


}
