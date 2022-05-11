import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackItemComponent } from './feedback-item.component';

describe('FeedbackItemComponent', () => {
  let component: FeedbackItemComponent;
  let fixture: ComponentFixture<FeedbackItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackItemComponent);
    component = fixture.componentInstance;
    component.feedback = {
      category: 'Add tags for solutions',
      details: 'easiar to search for solutions based on stack',
      upvotes: 112,
      commentsCount: 2,
      userVoted: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
