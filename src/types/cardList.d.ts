import { MemberKeyValues } from '@/constants/memberNames';
import { StyleTypeJp, MoodJp, Rare } from '@/constants/cards';

/**
 * サポートスキルの詳細情報
 *
 * @interface SupportSkillList
 * @property initLevel - サポートスキルの初期レベル
 * @property levelUp - サポートスキルが上がるレベルの閾値
 * @property upLevel - サポートスキルの上がるレベル
 */
interface SupportSkillList {
  initLevel: number;
  levelUp: number;
  upLevel: number;
}

/**
 * サポートスキル情報
 * @property supportSkillTitle サポートスキルのタイトル
 * @property supportSkillList サポートスキルの詳細リスト
 */
interface SupportSkill {
  supportSkillTitle: string;
  supportSkillList: Record<string, SupportSkillList>;
}

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
  supportSkill?: SupportSkill;
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
export interface CardDefaultData {
  ID: string;
  styleType: StyleTypeJp;
  mood: MoodJp;
  series?: string;
  kana: string;
  gacha: Gacha;
  fluctuationStatus?: TrainingStatus;
  uniqueStatus: BaseStatus;
  specialAppeal?: SpecialAppeal;
  skill: Skill;
  characteristic?: Characteristic;
}

/** カードデータ */
export interface CardDataType {
  ID: string;
  styleType: StyleTypeJp;
  mood: MoodJp;
  series?: string;
  kana: string;
  gacha: Gacha;
  fluctuationStatus?: TrainingStatus;
  uniqueStatus: BaseStatus;
  specialAppeal?: SpecialAppeal;
  skill: Skill;
  characteristic?: Characteristic;
  cardName: string;
  rare: Rare;
  memberName: MemberKeyValues;
  limited: string;
  sortPoint: number;
  favorite: string[];
}

/** レアリティごとのカードデータ */
interface CardsByRarity {
  default: {
    default: CardDefaultData;
  };
  BR: Record<string, CardDefaultData>;
  LR?: Record<string, CardDefaultData>;
  DR: Record<string, CardDefaultData>;
  UR: Record<string, CardDefaultData>;
  SR: Record<string, CardDefaultData>;
  R: Record<string, CardDefaultData>;
}

/** キャラクターごとのカードアイテム */
export interface CardDataByMember {
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
