export interface GstarChallengeWorld {
  authorCi: string;
  authorName: string;
  commentCount: number;
  createdAt: string;
  description: string;
  extraViewCount: number;
  icon: string;
  id: string;
  isVisible: boolean;
  language: string;
  likeCount: number;
  name: string;
  ownerCi: string;
  ownerName: string;
  updatedAt: string;
  url: string;
  viewCount: number;
}

export interface SortedWorld {
  authorName: string;
  extraViewCount: number;
  icon: string;
  id: string;
  name: string;
  viewCount: number;
}

export interface GstarChallengeWorldListResponse {
  data: GstarChallengeWorld[];
}
