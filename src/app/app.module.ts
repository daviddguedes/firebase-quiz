import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { KeysPipe } from './keys.pipe';
import { SelectQuizComponent } from './select-quiz/select-quiz.component';
import { AppRoutingModule } from './app-routing.module';
import { RankingComponent } from './ranking/ranking.component';
import { QuizService } from './services/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    SelectQuizComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFireDatabase, QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
