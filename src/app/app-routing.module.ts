import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectQuizComponent } from './select-quiz/select-quiz.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  { path: '', component: RankingComponent },
  { path: 'select', component: SelectQuizComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
