interface HNHit {
  title: string;
  url: string;
  author: string;
  points: number;
  created_at: string;
  story_text: string;
  comment_text: string;
  _tags: string[];
  num_comments: number;
  objectID: string;
}

interface HNProps {
  hits: HNHit[];
  nbhits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMs: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
}

interface SearchInterface {
  query: string;
  page: number;
  pagesTotal: number;
  hitsPerPage: number;
  hits: HNHit[];
}
