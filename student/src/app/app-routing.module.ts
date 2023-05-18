import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { DisplayStudentComponent } from './pages/display-student/display-student.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:AddStudentComponent,
    path:'add-student'
  },
  {
    component:DisplayStudentComponent,
    path:'Display-Student'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
