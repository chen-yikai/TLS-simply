type Detail = {
  id: number;
  name: string;
  description: string;
  stroke: number;
  polysemy: number;
  clip: string;
  sentences: Sentence[];
  polysemyWords: string[];
};

type Sentence = {
  id: number;
  recordId: number;
  gloss: string;
  translation: string;
  clip: string;
};

type Search = {
  results: SearchResult[];
  total: number;
};

type SearchResult = {
  id: number;
  recordId: number;
  name: string;
};

type TranslateResult = {
  query: strign;
  total: number;
  results: TranslateItem[];
};

type TranslateItem = {
  recordId: number;
  result: string;
  source: string;
};
