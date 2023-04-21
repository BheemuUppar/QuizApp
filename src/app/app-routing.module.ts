import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { JavaScriptComponent } from './components/java-script/java-script.component';
import { JavaComponent } from './components/java/java.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PrepareComponent } from './components/prepare/prepare.component';
import { RegisterComponent } from './components/register/register.component';
import { SpringBootComponent } from './components/spring-boot/spring-boot.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'prepare', component: PrepareComponent},
  {path:'register', component:RegisterComponent},
  {path:'subjects', component:SubjectsComponent, canActivate:[AuthGuard]},
  {path:`java/quiz`, component:JavaComponent , canActivate:[AuthGuard]},
  {path:"javascript/quiz", component:JavaScriptComponent , canActivate:[AuthGuard]},
  {path:"springboot/quiz", component:SpringBootComponent , canActivate:[AuthGuard]},
  {path:"**", component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
