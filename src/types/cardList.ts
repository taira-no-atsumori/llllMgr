import type { MemberKeyValues } from '@/constants/memberNames';
import type {
  StyleTypeEn,
  MoodEn,
  Rare,
  FavoriteIcon,
} from '@/constants/cards';

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
 *
 * @property supportSkillTitle サポートスキルのタイトル
 * @property supportSkillList サポートスキルの詳細リスト
 */
interface SupportSkill {
  supportSkillTitle: string;
  supportSkillList: Record<string, SupportSkillList>;
}

/**
 * ガチャの追加シーズンと期間情報
 *
 * @property addSeason 初登場ガチャ
 * @property period 期間
 */
interface Gacha {
  addSeason: string;
  period: string;
}

/**
 * 基本ステータス値
 *
 * @property smile スマイル
 * @property pure ピュア
 * @property cool クール
 * @property mental メンタル
 * @property BP BP
 * @property supportSkill サポートスキル（BRのみ）
 */
interface BaseStatus {
  smile: number;
  pure: number;
  cool: number;
  mental: number;
  BP: number;
  supportSkill?: SupportSkill;
}

/**
 * カードの育成状況
 *
 * @property cardLevel カードレベル
 * @property SALevel スペシャルアピールレベル（スクステ）
 * @property SLevel スキルレベル（スクステ）
 * @property SALevel_show スペシャルアピールレベル（スクショウ）
 * @property SLevel_show スキルレベル（スクショウ）
 * @property releaseLevel 解放レベル
 * @property releasePoint 解放ポイント
 */
export interface TrainingStatus {
  cardLevel: number;
  trainingLevel: number;
  SALevel: number;
  SLevel: number;
  SALevel_show?: number;
  SLevel_show?: number;
  releaseLevel: number;
  releasePoint: number;
}

/**
 * スキル効果の詳細
 *
 * @property ID カードID
 * @property name カード名
 * @property AP 消費AP
 * @property EXAP 消費EXAP
 * @property detail 各レベルごとの効果量
 * @property addSA 追加スペシャルアピール
 * @property addSkill 追加スキル
 */
export interface SkillDetail {
  ID: string;
  name: string;
  AP: number;
  EXAP?: number[];
  detail: number[][] | Record<string, unknown>;
  addSA?: AdditionalSkill[][];
  addSkill?: AdditionalSkill[][];
}

/**
 * 追加スキル情報
 *
 * @property modeName モード
 * @property characteristic メンバー特性
 */
interface AdditionalSkill extends SkillDetail {
  modeName?: string;
  characteristic?: Characteristic;
}

/**
 * キャラクター特性
 *
 * @property name 特性名
 * @property detail 特性詳細
 * @property interface
 * @property addSkill 追加スキル
 */
interface Characteristic {
  name: string;
  detail: string;
  interface?: string[];
  addSkill?: AdditionalSkill[];
}

/**
 * カードステータス
 *
 * @property fluctuationStatus カードの育成状況
 * @property favorite お気に入り
 * @property sortPoint ソートポイント
 */
export interface CardStatus {
  fluctuationStatus: TrainingStatus;
  favorite: FavoriteIcon[];
  sortPoint: number;
}

/**
 * カード基本データ
 * @property memberName メンバー名
 * @property styleType スタイル
 * @property mood ムード
 * @property series カードシリーズ
 * @property kana カード名（かな）
 * @property gacha ガチャ関連
 * @property uniqueStatus 2解放目のカードステータス
 * @property specialAppeal スペシャルアピール
 * @property skill スキル
 * @property characteristic 特性
 */
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

/**
 * カードデータ
 * @property ID カードID
 * @property cardName カード名
 * @property rare レア
 * @property limited 期間
 */
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

/** メンバーごとのカードアイテム */
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
