import { TestBed } from '@angular/core/testing';
import { Feedback } from '../models';
import { FeedbackService } from '../services/feedback.service';
import { MockFeedBackService } from '../services/feedback.service.spec';

import { FeedbackFacadeService } from './feedback-facade.service';

describe('FeedbackFacadeService', () => {
  let service: FeedbackFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: FeedbackFacadeService,
          useClass: MockFeedBacksFacadeService,
        },
        {
          provide: FeedbackService,
          useClass: MockFeedBackService,
        },
      ],
    });
    service = TestBed.inject(FeedbackFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

export class MockFeedBacksFacadeService extends FeedbackFacadeService {
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
