interface Gacha {
  addSeason: string;
  period: string;
}

interface FluctuationStatus {
  cardLevel: number;
  trainingLevel: number;
  SALevel: number;
  SLevel: number;
  releaseLevel: number;
  releasePoint: number;
}

interface UniqueStatus {
  smile: number;
  pure: number;
  cool: number;
  mental: number;
  BP: number;
}

interface SpecialAppeal {
  ID: string;
  name: string;
  AP: number;
  EXAP?: number[];
  detail: number[][] | Record<string, unknown>;
  addSkill?: AddCard[];
}

interface Skill {
  ID: string;
  name: string;
  AP: number;
  detail: number[][] | Record<string, unknown>;
  addSkill?: AddCard[];
}

interface AddCard {
  ID: string;
  name: string;
  AP: number;
  detail: number[][] | Record<string, unknown>;
  characteristic?: Characteristic;
}

interface Characteristic {
  name: string;
  detail: string;
  interface?: string[];
  addSkill?: AddCard[];
}

interface CardData {
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
}

interface Rarity {
  default: {
    default: CardData;
  };
  BR: Record<string, CardData>;
  LR?: Record<string, CardData>;
  DR: Record<string, CardData>;
  UR: Record<string, CardData>;
  SR: Record<string, CardData>;
  R: Record<string, CardData>;
}

interface CardItem {
  default: Rarity;
  kaho: Rarity;
  sayaka: Rarity;
  rurino: Rarity;
  kozue: Rarity;
  tsuzuri: Rarity;
  megumi: Rarity;
  ginko: Rarity;
  kosuzu: Rarity;
  hime: Rarity;
  seras: Rarity;
  izumi: Rarity;
  sachi: Rarity;
  selaIzu: Rarity;
  kozutsuzumegu: Rarity;
}

/**
 * カードリストの状態を表すインターフェース
 *
 * @interface CardListState
 * @property {Record<string, CardItem>} cardList - カード名をキーとしたカードデータのオブジェクト
 */
export interface CardListState {
  card: Record<string, CardItem>;
}
