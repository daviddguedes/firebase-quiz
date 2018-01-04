import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class QuizService {

  SERVER_URL: string = "https://2301bd89.ngrok.io";

  constructor(public http: Http) { }

  getQuizes() {
    return this.http.get(this.SERVER_URL + '/escolher-quiz').map(res => res.json())
  }

  setQuiz(quizId) {
    let headers = new Headers({ 'Content-Type': 'application/json' })
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.SERVER_URL + '/selected-quiz', {quizId: quizId}, options)
  }

}
