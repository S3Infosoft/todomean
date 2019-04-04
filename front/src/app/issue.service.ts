import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class IssueService {
uri='http://localhost:4000';
  constructor(private http: HttpClient) {}

getIssues(){
  return this.http.get(`${this.uri}/issues`);

}
getIssuesById(id)
{
return this.http.get(`${this.uri}/issues/${id}`);
}
addIssue(title,description,severity,dueDate){
  const issue={
    title:title,

    description:description,
    severity:severity,
    dueDate:dueDate
  };
  return this.http.post(`${this.uri}/issues/add`,issue);
}


updateIssue(id,title,description,severity,dueDate){
  const issue={
    title:title,

    description:description,
    severity:severity,
    dueDate:dueDate

  };
  return this.http.post(`${this.uri}/issues/update/${id}`,issue);

}
deleteIssue(id){
  return this.http.get(`${this.uri}/issues/delete/${id}`);
}

}
