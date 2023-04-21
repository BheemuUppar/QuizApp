import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.css']
})
export class JavaScriptComponent implements OnInit {

  status: string = 'NEXT';
  map = new Map<string, number>();
  minute = 29;
  seconds = 59;

  answers = new Map();
  marks : number = 0 ;
  displayResult : boolean = false;
  constructor(private service: QuestionsService) {}

  currentIndex: any = 0;
  currentQuestion: any = [];
  list: any = [];
   length = this.list.length;
  index = 0;
  ngOnInit(): void {
    this.getJavaQuestions();

      console.log(this.map)


      // do somthing on Time Over!!
  //  this.onTimeOver();


    setInterval(()=>{
      if(this.minute == 0 && this.seconds==0){
        // alert("Time Over!!")
        this.onTimeOver();
      }
      if(this.seconds ==0){
             this.minute--;
             this.seconds = 60;
      }
  this.seconds--;

    },1000)
    //


      //give some  warning if user tries to refresh the quiz page
  
  }

  nextQuestion(){
     // Next Question Logic
     if(this.currentIndex<24){
      console.log("next button clicked...")
       this.currentIndex++;
     }
     else{
      alert('This is Last The Question!, Please submit Test to see Result');
     }
  }

  // getting questions from servie
  getJavaQuestions() {
    console.log('current question' + this.currentQuestion);
    this.service.getQuestions('Javascript').subscribe((data:any)=>{
      this.list = data
    });
    // console.log("In component", this.service.getQuestions('java'));
    // console.log(this.list);
  }


   
  saveAndValidateAnswer(option: any,i :any) {


    // is correct
if(this.list[this.currentIndex].answer == option){
  this.map.set(this.currentIndex, 1);
}
else{
  this.map.set(this.currentIndex, 0);
}
    console.log(this.map);
  }

  showResult(){
  // let marks:number = 0;
  this.map.forEach((value: number, key: string) => {
  if(value === 1){
    console.log('correct')
    this.marks++;
  }
  });
  console.log(this.marks);
  this.displayResult = true;
  }


  previousQuestion(){
    if(this.currentIndex !== 0){
      this.currentIndex--;
    }
  }

  onTimeOver(){
    // if(this.minute == 0 && this.seconds ==0){
      alert("Time Over.. Your Test will be submitted");
      this.showResult();
    // }
  }

}
