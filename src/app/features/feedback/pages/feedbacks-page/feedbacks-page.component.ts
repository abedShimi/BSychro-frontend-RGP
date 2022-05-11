import { Component, OnDestroy, OnInit } from '@angular/core';
import { FeedbackFacadeService } from '../../facade/feedback-facade.service';
import { Feedback, SortOptions } from '../../models';

@Component({
  selector: 'app-feedbacks-page',
  templateUrl: './feedbacks-page.component.html',
  styleUrls: ['./feedbacks-page.component.scss'],
})
export class FeedbacksPageComponent implements OnInit, OnDestroy {
  feedbacks: Feedback[];
  searchedFeedBacks: Feedback[];
  sortOption: number = SortOptions.MostUpvotes;
  searchText: string = '';

  constructor(private feedbackFacade: FeedbackFacadeService) {
    this.sortOption =
      localStorage.getItem('sortOption') &&
      +localStorage.getItem('sortOption') > 0
        ? +localStorage.getItem('sortOption')
        : SortOptions.MostUpvotes;
    this.searchText = localStorage.getItem('searchText') ?? '';

    this.getFeedBacks();
    this.search();
  }

  ngOnInit(): void {
    //call on destroy when user reload page (will not called by default)
    window.onbeforeunload = () => this.ngOnDestroy();
  }
  ngOnDestroy() {
    if (this.searchText && this.searchText != '')
      localStorage.setItem('searchText', this.searchText);
    else localStorage.removeItem('searchText');

    localStorage.setItem('sortOption', this.sortOption + '');
    localStorage.setItem('feedbacks', JSON.stringify(this.feedbacks));
  }

  //if we have api we should subscribe to the observable
  getFeedBacks() {
    this.feedbacks = this.feedbackFacade.getFeedbacks();
    this.searchedFeedBacks = this.feedbacks;
    this.sort();
  }

  sort() {
    if (this.sortOption == SortOptions.MostUpvotes)
      this.searchedFeedBacks.sort((a, b) => {
        return b.upvotes - a.upvotes;
      });

    if (this.sortOption == SortOptions.LeastUpvotes)
      this.searchedFeedBacks.sort((a, b) => {
        return a.upvotes - b.upvotes;
      });

    if (this.sortOption == SortOptions.MostComments)
      this.searchedFeedBacks.sort((a, b) => {
        return b.commentsCount - a.commentsCount;
      });

    if (this.sortOption == SortOptions.LeastComments)
      this.searchedFeedBacks.sort((a, b) => {
        return a.commentsCount - b.commentsCount;
      });
  }
  upvote(feedback: Feedback) {
    if (feedback.userVoted) {
      feedback.upvotes = feedback.upvotes - 1;
      feedback.userVoted = false;
    } else {
      feedback.upvotes = feedback.upvotes + 1;
      feedback.userVoted = true;
    }

    //sort because of the newely up voted feedback
    //can be enhanced to compare just with the preceeding if its upvote and swap
    //and with the following if it is up vote removing
    this.sort();
  }

  search() {
    if (this.searchText && this.searchText.trim() != '')
      this.searchedFeedBacks = this.feedbacks.filter((f) =>
        f.category.toLowerCase().includes(this.searchText.toLocaleLowerCase())
      );
    else this.searchedFeedBacks = this.feedbacks;
  }
}
