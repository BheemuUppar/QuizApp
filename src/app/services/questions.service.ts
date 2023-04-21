import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class QuestionsService  {

  questions : any = [];

  constructor(private http : HttpClient) {
   
    
    
       this.getQuestions('java').subscribe((data:any)=>{
           console.log(data);
       });
    
   }
   
   
   
   
   getQuestions(subject:string ){
    let url =`https://angular-quizdb-default-rtdb.firebaseio.com/${subject}.json`;
   

       return this.http.get(url);

  }

}
