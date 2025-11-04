import { MemberKeyValues } from '@/constants/memberNames';
import { StyleTypeEn, MoodEn, Rare, FavoriteIcon } from '@/constants/cards';

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
  EXAP?: number[];
  detail: number[][] | Record<string, unknown>;
  addSA?: AdditionalSkill[][];
  addSkill?: AdditionalSkill[][];
}

/** 追加スキル情報 */
interface AdditionalSkill extends SkillDetail {
  modeName?: string;
  characteristic?: Characteristic;
}

/** キャラクター特性 */
interface Characteristic {
  name: string;
  detail: string;
  interface?: string[];
  addSkill?: AdditionalSkill[];
}

/** カードステータス */
export interface CardStatus {
  fluctuationStatus: TrainingStatus;
  sortPoint: number;
  favorite: FavoriteIcon[];
}

/** カード基本データ */
export interface CardDefaultData {
  memberName: MemberKeyValues;
  styleType: StyleTypeEn;
  mood: MoodEn;
  series?: string;
  kana: string;
  gacha: Gacha;
  uniqueStatus: BaseStatus;
  specialAppeal?: SkillDetail;
  skill: SkillDetail;
  characteristic?: Characteristic;
}

/** カードデータ */
export interface CardDataType extends CardDefaultData {
  ID: string;
  cardName: string;
  rare: Rare;
  limited: string;
}

/** レアリティごとのカードデータ */
interface CardsByRarity {
  default: {
    default: CardDataType;
  };
  BR: Record<string, CardDataType>;
  LR?: Record<string, CardDataType>;
  DR: Record<string, CardDataType>;
  UR: Record<string, CardDataType>;
  SR: Record<string, CardDataType>;
  R: Record<string, CardDataType>;
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
