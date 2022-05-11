export interface Feedback {
  category: string;
  details: string;
  upvotes: number;
  commentsCount: number;
  userVoted: boolean;
}

export enum SortOptions {
  MostUpvotes = 1,
  LeastUpvotes = 2,
  MostComments = 3,
  LeastComments = 4,
}
