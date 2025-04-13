type Gacha = {
  addSeason: string;
  period: string;
};

type FluctuationStatus = {
  cardLevel: number;
  trainingLevel: number;
  SALevel: number;
  SLevel: number;
  releaseLevel: number;
  releasePoint: number;
};

type UniqueStatus = {
  smile: number;
  pure: number;
  cool: number;
  mental: number;
  BP: number;
};

type SpecialAppeal = {
  ID?: string;
  name: string;
  AP: number;
  detail: number[][] | Record<string, unknown>;
};

type Skill = {
  ID?: string;
  name: string;
  AP: number;
  detail: number[][] | Record<string, unknown>;
};

type Characteristic = {
  name: string;
  detail: string;
  type: string[];
};

type Card = {
  ID: string;
  styleType: string;
  mood: string;
  series?: string;
  kana: string;
  gacha: Gacha;
  fluctuationStatus: FluctuationStatus;
  uniqueStatus: UniqueStatus;
  specialAppeal: SpecialAppeal;
  skill: Skill;
  characteristic: Characteristic;
};

type Kaho = {
  default: {
    default: Card;
  };
  DR: Record<string, Card>;
  BR: Record<string, Card>;
  UR: Record<string, Card>;
  SR: Record<string, Card>;
  R: Record<string, Card>;
};