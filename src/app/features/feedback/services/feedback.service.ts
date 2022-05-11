import { Injectable } from '@angular/core';
import { Feedback } from '../models';

@Injectable()
export class FeedbackService {
  constructor() {}

  //dummy data,in production will get data from APIs using http
  getFeedbacks(): Feedback[] {
    //can be handled in a different way
    //need to know when this data become invalid
    let savedState: any = localStorage.getItem('feedbacks');
    let feedback: Feedback[];

    if (savedState != null) feedback = JSON.parse(savedState) as Feedback[];

    if (!feedback)
      feedback = [
        {
          category: 'Add tags for solutions',
          details: 'easiar to search for solutions based on stack',
          upvotes: 112,
          commentsCount: 2,
          userVoted: false,
        },
        {
          category: 'Add a dark theme option',
          details:
            'it will help people with light sensitive and how prefers dark mode',
          upvotes: 99,
          commentsCount: 4,
          userVoted: false,
        },
        {
          category: 'Q&A in the challanges hub',
          details: 'challange specific Q&A would make for easy reference',
          upvotes: 65,
          commentsCount: 1,
          userVoted: false,
        },
        {
          category: 'allow image/video upload to feedback',
          details: 'images and screencasts can enhance comments on solutions',
          upvotes: 51,
          commentsCount: 2,
          userVoted: false,
        },
        {
          category: 'ability to follow others',
          details: 'stay update on comments and solutions other people post',
          upvotes: 42,
          commentsCount: 3,
          userVoted: false,
        },
        {
          category: 'preview images not loading',
          details:
            'challange preview images are missing when you apply a filter',
          upvotes: 3,
          commentsCount: 0,
          userVoted: false,
        },
      ];
    return feedback;
  }
}
