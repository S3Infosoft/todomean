import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from "@angular/common/http";




@Injectable({
  providedIn: 'root'
})
export class IssueService {
  serviceData:string;
  token:string;
userId:string;
notebook:string;
email:string;
uri='http://localhost:4000';
  constructor(private http: HttpClient) {}

getIssues(){
console.log(this.userId);
  let params = new HttpParams().set('secret_token',this.serviceData);

  return this.http.get(`${this.uri}/user/issues/${this.userId}`,{params});

}
getIssuesByNote(){
    let params = new HttpParams().set('secret_token',this.serviceData);
    return this.http.get(`${this.uri}/user/issues/notebook/${this.userId}/${this.notebook}`,{params});
}
getIssuesById(id)
{  let params = new HttpParams().set('secret_token',this.serviceData);
return this.http.get(`${this.uri}/user/issues/${id}`,{params});
}
addIssue(title,description,severity,dueDate){
  console.log(this.userId);
	let body = 'title=' + title + '&description=' + description +'&severity='+severity+'&dueDate='+dueDate+'&userId='+(this.userId)+'&notebook='+(this.notebook);
  console.log(title);
  console.log(dueDate);
  console.log(this.serviceData);

  let params = new HttpParams().set('secret_token',this.serviceData);
  const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
      })};
  return this.http.post(`${this.uri}/issues/add`,body,httpOptions);
}


updateIssue(id,title,description,severity,dueDate){
  let body = 'title=' + title + '&description=' + description +'&severity='+severity+'&dueDate='+dueDate+'&userId='+(this.userId)+'&notebook='+(this.notebook);
let params = new HttpParams().set('secret_token',this.serviceData);

  const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
      })};
      
  return this.http.post(`${this.uri}/issues/update/${id}`,body,httpOptions);

}
deleteIssue(id){
    let params = new HttpParams().set('secret_token',this.serviceData);
  return this.http.get(`${this.uri}/user/issues/delete/${id}`,{params});
}
loginUser(email,password){
	let body = 'email=' + email + '&password=' + password;
  //sconsole.log(body.password);
  const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    })};
  return this.http.post(`${this.uri}/login`,body,httpOptions);

}
getNote(){
  console.log(this.userId);
    let params = new HttpParams().set('secret_token',this.serviceData);

    return this.http.get(`${this.uri}/user/notebook/${this.userId}`,{params});
}
addNote(notename){
  let body='notebook='+notename+'&userId='+(this.userId);
  const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    })};
  return this.http.post(`${this.uri}/notebook/add`,body,httpOptions);
}

}
