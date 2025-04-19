interface Gacha = {
  addSeason: string;
  period: string;
};

interface FluctuationStatus = {
  cardLevel: number;
  trainingLevel: number;
  SALevel: number;
  SLevel: number;
  releaseLevel: number;
  releasePoint: number;
};

interface UniqueStatus = {
  smile: number;
  pure: number;
  cool: number;
  mental: number;
  BP: number;
};

interface SpecialAppeal = {
  ID: string;
  name: string;
  AP: number;
  detail: number[][] | Record<string, unknown>;
  addSkill?: addCard[];
};

interface Skill = {
  ID: string;
  name: string;
  AP: number;
  detail: number[][] | Record<string, unknown>;
  addSkill?: addCard[];
};

interface AddCard {
  ID: string;
  name: string;
  AP: number;
  detail: number[][] | Record<string, unknown>;
  characteristic?: Characteristic;
}

interface Characteristic = {
  name: string;
  detail: string;
  interface?: string[];
  addSkill?: addCard[];
};

interface Card = {
  ID: string;
  styleType: 'performer' | 'moodMaker' | 'cheerLeader' | 'trickStar';
  mood: 'happy' | 'neutral' | 'melow';
  series?: string;
  kana: string;
  gacha: Gacha;
  fluctuationStatus?: FluctuationStatus;
  uniqueStatus: UniqueStatus;
  specialAppeal?: SpecialAppeal;
  skill: Skill;
  characteristic?: Characteristic;
};

interface rarity = {
  default: {
    default: Card;
  };
  DR?: Record<string, Card>;
  BR?: Record<string, Card>;
  UR?: Record<string, Card>;
  SR?: Record<string, Card>;
  R?: Record<string, Card>;
};

interface CardItem {
  default: rarity;
  kaho: rarity;
  sayaka: rarity;
  rurino: rarity;
  kozue: rarity;
  tsuzuri: rarity;
  megumi: rarity;
  ginko: rarity;
  kosuzu: rarity;
  hime: rarity;
  seras: rarity;
  izumi: rarity;
  sachi: rarity;
  selaIzu: rarity;
  kozutsuzumegu: rarity;
}

/**
 * カードリストの状態を表すインターフェース
 * 
 * @interface CardListState
 * @property {Record<string, CardItem>} cardList - カード名をキーとしたカードデータのオブジェクト
 */
export interface CardListState {
  cardList: Record<string, CardItem>;
}