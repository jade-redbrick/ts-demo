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
export interface ChartData {
  labels: Array<string[] | string>;
  datasets: ChartDatasets[];
}

export interface ChartDatasets {
  data: number[] | undefined;
  backgroundColor: string[];
  borderWidth: number;
}

export interface VarInfo {
  key: string;
  value: string;
}

export type World = {
  ownerIcon: string;
  icon: string;
  description: string;
  language: string;
  likeCount: number;
  isVisible: boolean;
  url: string;
  commentCount: number;
  tags: string;
  createdAt: string;
  ownerName: string;
  authorName: string;
  name: string;
  authorIcon: string;
  id: string;
  viewCount: number;
  authorCi: string;
  ownerCi: string;
  updatedAt: string;
};
