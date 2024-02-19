// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {CreateUserComponent} from "./pages/create-user/create-user.component";
import {HomeTeacherComponent} from "./pages/home-teacher/home-teacher.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {path:'create-login',component:CreateUserComponent},
  {path:'home-teacher',component:HomeTeacherComponent},
  // Add other routes as needed
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
