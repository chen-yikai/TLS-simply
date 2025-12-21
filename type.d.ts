type Detail = {
  id: number;
  name: string;
  description: string;
  stroke: number;
  polysemy: number;
  clip: string;
  sentences: Sentence[];
};

type Sentence = {
  id: number;
  recordId: number;
  gloss: string;
  translation: string;
  clip: string;
};

type SearchResult = {
  id: number;
  name: string;
};
