import { Ref } from 'vue';

/**
 * メンバーの名前を表す型
 * 
 * @property first - 名
 * @property last - 姓
 */
type MemberName = {
  first: string;
  last: string;
};

/**
 * メンバーIDを表す型
 */
type MemberId = Record<string, string>;

/**
 * メンバーの色を表す型
 */
type MemberColor = Record<string, string>;

/**
 * グループ名を表す型
 */
type GroupName = Record<string, string>;

/**
 * ボーナススキルの詳細を表す型
 * 
 * @property text - スキルの説明テキスト
 * @property skillLevel - スキルレベル
 * @property init - 初期値
 * @property ary - オプションの数値配列
 */
type BonusSkill = {
  text: string[];
  skillLevel: number;
  init: number;
  ary?: number[];
};

/**
 * ボーナススキルのリストを表す型
 */
type BonusSkillList = Record<string, BonusSkill>;

/**
 * カードの変動ステータスを表す型
 * 
 * @property cardLevel - カードレベル
 * @property trainingLevel - トレーニングレベル
 * @property SALevel - 特別アピールレベル
 * @property SLevel - スキルレベル
 * @property releaseLevel - 解放レベル
 * @property releasePoint - 解放ポイント
 */
type CardFluctuationStatus = {
  cardLevel: number;
  trainingLevel: number;
  SALevel: number;
  SLevel: number;
  releaseLevel: number;
  releasePoint: number;
};

/**
 * カードの固有ステータスを表す型
 * 
 * @property smile - スマイル値
 * @property pure - ピュア値
 * @property cool - クール値
 * @property mental - メンタル値
 * @property BP - BP値
 * @property supportSkill - サポートスキル
 * @property supportSkill.initLevel - 初期レベル
 * @property supportSkill.levelUp - レベルアップ値
 * @property supportSkill.upLevel - 上昇レベル
 */
type CardUniqueStatus = {
  smile: number;
  pure: number;
  cool: number;
  mental: number;
  BP: number;
  supportSkill?: Record<string, {
    initLevel: number;
    levelUp: number;
    upLevel: number
  }>;
};

/**
 * カードデータを表す型
 * 
 * @property ID - カードID
 * @property rare - レアリティ
 * @property cardName - カード名
 * @property memberName - メンバー名
 * @property limited - 限定情報
 * @property sortPoint - ソートポイント
 * @property favorite - お気に入りリスト
 * @property fluctuationStatus - 変動ステータス
 * @property uniqueStatus - 固有ステータス
 * @property specialAppeal - 特別アピール情報 (オプション)
 * @property specialAppeal.AP - 消費AP
 * @property skill - スキル情報 (オプション)
 * @property skill.AP - 消費AP
 */
type CardData = {
  ID: string;
  rare: string;
  cardName: string;
  memberName: string;
  limited: string;
  sortPoint: number;
  favorite: string[];
  fluctuationStatus: CardFluctuationStatus;
  uniqueStatus: CardUniqueStatus;
  specialAppeal?: {
    AP: number;
  };
  skill?: {
    AP: number;
  };
};

/**
 * カードリストを表す型
 */
type CardList = Record<string, Record<string, Record<string, CardData>>>;

/**
 * サイト設定を表す型
 * 
 * @property all - 全体設定
 * @property all.headerTracking - ヘッダートラッキング設定
 * @property all.darkMode - ダークモード設定
 * @property cardList - カードリスト設定
 * @property cardList.isShowDetail - 詳細表示設定
 * @property cardList.hover - ホバー設定
 * @property cardList.dot_cardLevel - カードレベルのドット表示設定
 * @property cardList.dot_releasePoint - 解放ポイントのドット表示設定
 * @property cardList.dot_releaseLevel - 解放レベルのドット表示設定
 * @property musicList - 曲リスト設定
 * @property musicList.hover - ホバー設定
 */
type SiteSettings = {
  all: {
    headerTracking: string;
    darkMode: string;
  };
  cardList: {
    isShowDetail: string;
    hover: string;
    dot_cardLevel: string;
    dot_releasePoint: string;
    dot_releaseLevel: string;
  };
  musicList: {
    hover: string;
  };
};

/**
 * ソート設定を表す型
 * 
 * @property cardList - カードリスト設定
 * @property cardList.sortType - ソートタイプ
 * @property cardList.order - ソート順序
 * @property musicList - 曲リスト設定
 * @property musicList.sortType - ソートタイプ
 * @property musicList.order - ソート順序
 */
type SortSettings = {
  cardList: {
    sortType: string;
    order: string;
  };
  musicList: {
    sortType: string;
    order: string;
  };
};

/**
 * 検索設定を表す型
 * 
 * @property cardList - カードリスト設定
 * @property cardList.rare - レアリティフィルタ
 * @property cardList.styleType - スタイルタイプフィルタ
 * @property cardList.mood - ムードフィルタ
 * @property cardList.limited - 限定フィルタ
 * @property cardList.cardLevel - カードレベル範囲
 * @property cardList.SALevel - 特別アピールレベル範囲
 * @property cardList.SLevel - スキルレベル範囲
 * @property cardList.SAAP - 特別アピールAP範囲
 * @property cardList.SAP - スキルAP範囲
 * @property cardList.releaseLevel - 解放レベル範囲
 * @property cardList.trainingLevel - トレーニングレベル範囲
 * @property cardList.memberName - メンバー名フィルタ
 * @property cardList.favorite - お気に入りフィルタ
 * @property cardList.releaseStatus - 解放ステータスフィルタ
 * @property skillList - スキルリスト設定
 * @property skillList.skillFilterType - スキルフィルタタイプ
 * @property skillList.skillType - スキルタイプ
 * @property skillList.skillType.specialAppeal - 特別アピールスキル
 * @property skillList.skillType.skill - スキルタ
 * @property skillList.skillType.characteristic - 特性
 * @property skillList.skillName - スキル名
 * @property skillList.skillName.specialAppeal - 特別アピールスキル名
 * @property skillList.skillName.skill - スキル名
 * @property skillList.skillName.characteristic - 特性
 * @property cardSeries - カードシリーズフィルタ
 */
type SearchSettings = {
  cardList: {
    rare: string[];
    styleType: string[];
    mood: string[];
    limited: string[];
    cardLevel: [number, number];
    SALevel: [number, number];
    SLevel: [number, number];
    SAAP: [number, number];
    SAP: [number, number];
    releaseLevel: [number, number];
    trainingLevel: [number, number];
    memberName: string[];
    favorite: string[];
    releaseStatus: string;
  };
  skillList: {
    skillFilterType: string;
    skillType: {
      specialAppeal: string[];
      skill: string[];
      characteristic: string[];
    };
    skillName: {
      specialAppeal: string[];
      skill: string[];
      characteristic: string[];
    };
  };
  cardSeries: string[];
};

/**
 * ローカルストレージデータを表す型
 * 
 * @property musicData - 楽曲データ
 * @property musicData.musicLevel - 楽曲レベル
 * @property cardList - カードリスト
 * @property cardList.card - カードリスト
 * @property cardList.cardListFilter - カードリストフィルタ
 * @property selectItemList - アイテムリスト
 * @property selectItemList.item1 - アイテム1
 * @property selectItemList.item2 - アイテム2
 * @property selectItemList.item3 - アイテム3
 * @property siteSettings - サイト設定
 * @property sortSettings - ソート設定
 */
type LocalStorageData = {
  musicData: {
    musicLevel: Record<string, number>;
  };
  cardList: {
    card: CardList;
    cardListFilter: SearchSettings;
  };
  selectItemList: {
    item1: string[];
    item2: string[];
    item3: string[];
  };
  siteSettings: SiteSettings;
  sortSettings: SortSettings;
};

/** 
 * デッキを表す型
 * 
 * @property name - デッキ名
 * @property period - 期
 * @property cardData - カードデータ
 */
type Deck = {
  name: string;
  period: number;
  cardData: Record<string, Record<string, { cardName: string; param: CardFluctuationStatus }>>;
};

/**
 * カウンターの状態を表す型
 * 
 * @property version - バージョン
 * @property dialog - ダイアログの状態
 * @property showModalName - 表示するモーダル名
 * @property updateData - データ更新状態
 * @property selectCharacter - 選択中のキャラクター
 * @property selectMusicTitle - 選択中の楽曲
 * @property checkMasteryMember - マスタリー確認メンバー
 * @property thisPeriod - 現在の期
 * @property selectDeckName - 選択中のデッキ名
 * @property isParamReflect - パラメータ反映状態
 * @property isPossessionFlg - 持ち物状態
 * @property rare - レアリティ
 * @property favorite - お気に入り
 * @property releaseStatus - 解放ステータス
 * @property bonusSkill - ボーナススキル
 * @property withStar - スター付加状態
 * @property siteSettings - サイト設定
 * @property sortSettings - ソート設定
 * @property defaultSearch - デフォルト検索設定
 * @property styleHeadline - スタイル見出し
 * @property statusName - ステータス名
 * @property styleType - スタイル
 * @property mood - ムード
 * @property attribute - 属性
 * @property limited - 限定
 * @property maxCardLevel - 最大カードレベル
 * @property releasePoint - 解放ポイント
 * @property memberName - メンバー名
 * @property exclusionMember - 除外メンバー
 * @property specialCardIdList - 特別カードIDリスト
 * @property memberId - メンバーID
 * @property formationMember - フォーメーションメンバー
 * @property memberColor - メンバーの色
 * @property groupName - グループ名
 * @property bonusSkillList - ボーナススキルリスト
 * @property memberData - メンバーデータ
 * @property deck - デッキ
 * @property settingCard - 設定カード
 * @property openCard - 開放カード
 * @property localStorageData - ローカルストレージデータ
 * @property grandprixBonus - グランプリボーナス
 * @property supportSkill - サポートスキル
 * @property sortTypeList - ソートタイプリスト
 * @property defaultCardList - デフォルトカードリスト
 * @property windowSize - ウィンドウサイズ
 */
type CounterState = {
  version: string;
  dialog: boolean;
  showModalName: boolean;
  updateData: boolean;
  selectCharacter: string;
  selectMusicTitle: string | undefined;
  checkMasteryMember: string;
  thisPeriod: number;
  selectDeckName: string;
  isParamReflect: boolean;
  isPossessionFlg: boolean;
  rare: string[];
  favorite: string[];
  releaseStatus: string[];
  bonusSkill: string[];
  withStar: Record<string, number>;
  siteSettings: SiteSettings;
  sortSettings: SortSettings;
  defaultSearch: SearchSettings;
  styleHeadline: Record<number, { main: string; side1: string; side2?: string }>;
  statusName: Record<string, string>;
  styleType: Record<string, string>;
  mood: Record<string, string>;
  attribute: Record<string, string>;
  limited: Record<string, { filterLabel: string; cardLabel: string }>;
  maxCardLevel: Record<string, number[]>;
  releasePoint: Record<string, { point: number; max: number }>;
  memberName: Record<string, MemberName>;
  exclusionMember: string[];
  specialCardIdList: string[];
  memberId: MemberId;
  formationMember: Record<number, string[]>;
  memberColor: MemberColor;
  groupName: GroupName;
  bonusSkillList: BonusSkillList;
  memberData: {
    centerList: Record<string, { centerMusic: string[]; bonusSkill: Record<string, number> }>;
  };
  deck: Deck[];
  settingCard: {
    ID: string;
    rare: string;
    name: string;
    card: string;
  };
  openCard: {
    ID: string;
    name: string;
    style: string;
  };
  localStorageData: LocalStorageData;
  grandprixBonus: {
    clearRank: number[];
    seasonFanLv: number[];
    releaseLv: Record<string, number[]>;
  };
  supportSkill: Record<string, Record<string, number>>;
  sortTypeList: Record<string, string>;
  defaultCardList: any[];
  windowSize: {
    w: number;
    h: number;
  };
};

export type CounterStore = {
  state: Ref<CounterState>;
  getters: Record<string, any>;
  actions: Record<string, (...args: any[]) => any>;
};
