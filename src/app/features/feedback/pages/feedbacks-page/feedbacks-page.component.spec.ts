import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackFacadeService } from '../../facade/feedback-facade.service';
import { Feedback } from '../../models';

import { FeedbacksPageComponent } from './feedbacks-page.component';
import { FeedbackService } from '../../services/feedback.service';
import { MockFeedBacksFacadeService } from '../../facade/feedback-facade.service.spec';
import { MockFeedBackService } from '../../services/feedback.service.spec';

describe('FeedbacksPageComponent', () => {
  let component: FeedbacksPageComponent;
  let fixture: ComponentFixture<FeedbacksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbacksPageComponent],
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
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('upvote first time should increase vote and userUpvoted true', () => {
    component.getFeedBacks();
    let upvotesBefore: number = component.feedbacks[0].upvotes;
    component.upvote(component.feedbacks[0]);
    expect(component.feedbacks[0].upvotes).toBe(upvotesBefore + 1);
    expect(component.feedbacks[0].userVoted).toBe(true);
  });

  it('upvote when already upvoted should increase vote', () => {
    component.getFeedBacks();
    let upvotesBefore: number = component.feedbacks[0].upvotes;
    component.upvote(component.feedbacks[0]);
    component.upvote(component.feedbacks[0]);
    expect(component.feedbacks[0].upvotes).toBe(upvotesBefore);
    expect(component.feedbacks[0].userVoted).toBe(false);
  });

  it("search with no text shouldn't affect array", () => {
    component.getFeedBacks();
    component.searchText = '';
    component.search();
    expect(component.feedbacks).toEqual(component.searchedFeedBacks);
  });
});
