import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-quiz',
  templateUrl: './select-quiz.component.html',
  styleUrls: ['./select-quiz.component.css']
})
export class SelectQuizComponent implements OnInit {

  response: any[];
  signupForm: FormGroup;

  constructor(private qService: QuizService) {

  }

  ngOnInit() {
    this.qService.getQuizes()
      .subscribe(quizes => {
        this.response = quizes.response
      })

    this.signupForm = new FormGroup({
      selectedQuiz: new FormControl('', Validators.required)
    })
  }

  setQuiz() {
    let quizId = this.signupForm.get('selectedQuiz').value;
    this.qService.setQuiz(quizId)
      .subscribe(res => {
        console.log(res)
      }, error => {
        console.log(error)
      })
  }

}
