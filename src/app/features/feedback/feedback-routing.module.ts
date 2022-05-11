import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedbacksPageComponent } from './pages/feedbacks-page/feedbacks-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'feedbacks' },
  { path: 'feedbacks', component: FeedbacksPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackRoutingModule {}
