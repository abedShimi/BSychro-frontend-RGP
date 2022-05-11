import { TestBed } from '@angular/core/testing';
import { Feedback } from '../models';

import { FeedbackService } from './feedback.service';

describe('FeedbackService', () => {
  let service: FeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedbackService],
    });
    service = TestBed.inject(FeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export class MockFeedBackService extends FeedbackService {
  constructor() {
    super();
  }
  getFeedbacks(): Feedback[] {
    return [
      {
        category: 'Add tags for solutions',
        details: 'easiar to search for solutions based on stack',
        upvotes: 112,
        commentsCount: 2,
        userVoted: false,
      },
    ];
  }
}
