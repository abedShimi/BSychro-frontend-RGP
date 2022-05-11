import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackService } from './services/feedback.service';
import { FeedbacksPageComponent } from './pages/feedbacks-page/feedbacks-page.component';
import { FeedbackFacadeService } from './facade/feedback-facade.service';
import { PageCardComponent } from './components/page-card/page-card.component';
import { FeedbackItemComponent } from './components/feedback-item/feedback-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FeedbacksPageComponent,
    PageCardComponent,
    FeedbackItemComponent,
  ],
  imports: [SharedModule, FeedbackRoutingModule],
  providers: [FeedbackService, FeedbackFacadeService],
})
export class FeedbackModule {}
