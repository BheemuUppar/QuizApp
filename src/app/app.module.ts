import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { RegisterComponent } from './components/register/register.component';
import { JavaComponent } from './components/java/java.component';
import {HttpClientModule} from'@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsService } from './services/questions.service';
import { UserService } from './services/user.service';
import { LoginService } from './services/login.service';
import { PrepareComponent } from './components/prepare/prepare.component';
import { JavaScriptComponent } from './components/java-script/java-script.component';
import { SpringBootComponent } from './components/spring-boot/spring-boot.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    SubjectsComponent,
    RegisterComponent,
    JavaComponent,
    PrepareComponent,
    JavaScriptComponent,
    SpringBootComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [QuestionsService, UserService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
