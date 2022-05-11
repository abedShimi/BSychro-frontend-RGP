import { Injectable } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';

@Injectable()
export class FeedbackFacadeService {
  constructor(private feedbackService: FeedbackService) {}

  getFeedbacks() {
    return this.feedbackService.getFeedbacks();
  }
}
