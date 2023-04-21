import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { JavaComponent } from '../java/java.component';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {




  currentSubject : string = '';
  constructor(private router : Router) { }


  ngOnInit(): void {
  }
 
  serverNotFound(subject  :string){
    if(subject==='java'){
    // if(list.length === 0){

    // }
    }
    if(subject==='javascript'){

    }
    if(subject==='Springboot'){

    }

    
  }


}
