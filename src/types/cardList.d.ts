import { StyleType, Mood } from '@/constants/cards';

/** ガチャの追加シーズンと期間情報 */
interface Gacha {
  addSeason: string;
  period: string;
}

/** 基本ステータス値 */
interface BaseStatus {
  smile: number;
  pure: number;
  cool: number;
  mental: number;
  BP: number;
}

/** カードの育成状況 */
interface TrainingStatus {
  cardLevel: number;
  trainingLevel: number;
  SALevel: number;
  SLevel: number;
  releaseLevel: number;
  releasePoint: number;
}

/** スキル効果の詳細 */
interface SkillDetail {
  ID: string;
  name: string;
  AP: number;
  detail: number[][] | Record<string, unknown>;
}

/** 追加スキル情報 */
interface AdditionalSkill extends SkillDetail {
  characteristic?: Characteristic;
}

/** スペシャルアピール */
interface SpecialAppeal extends SkillDetail {
  EXAP?: number[];
  addSkill?: AdditionalSkill[];
}

/** 通常スキル */
interface Skill extends SkillDetail {
  addSkill?: AdditionalSkill[];
}

/** キャラクター特性 */
interface Characteristic {
  name: string;
  detail: string;
  interface?: string[];
  addSkill?: AdditionalSkill[];
}

/** カード基本データ */
interface CardData {
  ID: string;
  styleType: StyleType;
  mood: Mood;
  series?: string;
  kana: string;
  gacha: Gacha;
  fluctuationStatus?: TrainingStatus;
  uniqueStatus: BaseStatus;
  specialAppeal?: SpecialAppeal;
  skill: Skill;
  characteristic?: Characteristic;
}

/** レアリティごとのカードデータ */
interface CardsByRarity {
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

/** キャラクターごとのカードアイテム */
interface CardDataByMember {
  default: CardsByRarity;
  kaho: CardsByRarity;
  sayaka: CardsByRarity;
  rurino: CardsByRarity;
  kozue: CardsByRarity;
  tsuzuri: CardsByRarity;
  megumi: CardsByRarity;
  ginko: CardsByRarity;
  kosuzu: CardsByRarity;
  hime: CardsByRarity;
  seras: CardsByRarity;
  izumi: CardsByRarity;
  sachi: CardsByRarity;
  selaIzu: CardsByRarity;
  kozutsuzumegu: CardsByRarity;
}

/**
 * カードリストの状態を表すインターフェース
 * @property card - メンバーごとのカードデータ
 */
export interface CardListState {
  card: CardDataByMember;
}
