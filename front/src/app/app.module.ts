import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './pcomponent/topbar/components-t/list/list.component';

import { CreateComponent } from './pcomponent/topbar/components-t/create/create.component';
import { EditComponent } from './pcomponent/topbar/components-t/edit/edit.component';
 import {MatToolbarModule,MatFormFieldModule,MatInputModule,MatOptionModule,MatSelectModule,MatIconModule,MatButtonModule,MatCardModule,MatTableModule,MatDividerModule,MatSnackBarModule} from '@angular/material';//user interface
import{HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {IssueService} from './issue.service';
import {MatNativeDateModule} from '@angular/material';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './pcomponent/topbar/components-t/alert/alert.component';
import { LoginComponent } from './pcomponent/topbar/components-t/login/login.component';
import { TopbarComponent } from './pcomponent/topbar/topbar.component';
import { DueMonthComponent } from './pcomponent/topbar/components-t/alert/due-month/due-month.component';
import { DueWeekComponent } from './pcomponent/topbar/components-t/alert/due-week/due-week.component';
import { CreateUserComponent } from './pcomponent/topbar/components-t/create-user/create-user.component';
import { SidebarComponent } from './pcomponent/topbar/sidebar/sidebar.component';
import { CreateNotebookComponent } from './pcomponent/topbar/components-t/create-notebook/create-notebook.component';


const routes:Routes=[
  {path:'create',component:CreateComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'list',component:ListComponent},
  {path:'alert',component:AlertComponent},
    {path:'login',component:LoginComponent},
    {path:'createUser',component:CreateUserComponent},
    {path:'createNotebook',component:CreateNotebookComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];
@NgModule({
  declarations: [

    AppComponent,
     AlertComponent ,
    ListComponent,
    CreateComponent,
    EditComponent,
    AlertComponent,
    LoginComponent,
    TopbarComponent,
    DueMonthComponent,
    DueWeekComponent,
    CreateUserComponent,
    SidebarComponent,
    CreateNotebookComponent,

  ],
  imports: [
    FormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
  MatDatepickerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    HttpClientModule,

  ],
  providers: [IssueService],
  bootstrap: [AppComponent,TopbarComponent]
})
export class AppModule { }
