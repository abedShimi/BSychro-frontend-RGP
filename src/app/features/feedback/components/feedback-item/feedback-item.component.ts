import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Feedback } from '../../models';

@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.scss'],
})
export class FeedbackItemComponent implements OnInit {
  @Input() feedback: Feedback;
  @Output() upvote: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  upvoteClicked() {
    this.upvote.emit();
  }
}
