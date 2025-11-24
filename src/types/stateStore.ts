import { MemberKeyValues } from '@/constants/memberNames';
import {
  Rare,
  StyleTypeEn,
  FavoriteIcon,
  ReleaseStatus,
  MoodEn,
  Limited,
} from '@/constants/cards';
import { SkillBook } from '@/constants/items';
import { BonusSkillNames } from '@/constants/bonusSkills';
import { CardDataByMember, TrainingStatus } from '@/types/cardList';

/**
 * カードの変動ステータスを表す型
 *
 * @property cardLevel カードレベル
 * @property trainingLevel トレーニングレベル
 * @property SALevel 特別アピールレベル
 * @property SLevel スキルレベル
 * @property releaseLevel 解放レベル
 * @property releasePoint 解放ポイント
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
 * カードリストを表す型
 */
export type LocalStorageCardListType = Record<
  string,
  Record<
    string,
    Record<
      string,
      {
        fluctuationStatus: TrainingStatus;
        favorite: FavoriteIcon[];
      }
    >
  >
>;

/**
 * サイト設定を表す型
 *
 * @property all 全体設定
 * @property all.headerTracking ヘッダートラッキング設定
 * @property all.darkMode ダークモード設定
 * @property cardList カードリスト設定
 * @property cardList.isShowDetail 詳細表示設定
 * @property cardList.hover ホバー設定
 * @property cardList.dot_cardLevel カードレベルのドット表示設定
 * @property cardList.dot_releasePoint 解放ポイントのドット表示設定
 * @property cardList.dot_releaseLevel 解放レベルのドット表示設定
 * @property musicList 曲リスト設定
 * @property musicList.hover ホバー設定
 */
type SiteSettings = {
  all: {
    headerTracking: string;
    darkMode: 'light' | 'dark';
  };
  cardList: {
    isShowDetail: 'true' | 'false';
    hover: 'true' | 'false';
    dot_cardLevel: 'true' | 'false';
    dot_releasePoint: 'true' | 'false';
    dot_releaseLevel: 'true' | 'false';
  };
  musicList: {
    hover: 'true' | 'false';
  };
};

/**
 * ソート設定を表す型
 *
 * @property cardList カードリスト設定
 * @property cardList.sortType ソートタイプ
 * @property cardList.order ソート順序
 * @property musicList 曲リスト設定
 * @property musicList.sortType ソートタイプ
 * @property musicList.order ソート順序
 */
type SortSettings = {
  cardList: {
    sortType: string;
    order: 'descending' | 'ascending';
  };
  musicList: {
    sortType: string;
    order: 'descending' | 'ascending';
  };
};
/**
 * アイテムリストの型
 *
 * @property item1 アイテム1
 * @property item2 アイテム2
 * @property item3 アイテム3
 */
type SelectItemList = {
  item1: SkillBook[];
  item2: string[];
  item3: string[];
};

/**
 * 検索設定を表す型
 *
 * @property cardList カードリスト設定
 * @property cardList.rare レアリティフィルタ
 * @property cardList.styleType スタイルタイプフィルタ
 * @property cardList.mood ムードフィルタ
 * @property cardList.limited 限定フィルタ
 * @property cardList.cardLevel カードレベル範囲
 * @property cardList.SALevel 特別アピールレベル範囲
 * @property cardList.SLevel スキルレベル範囲
 * @property cardList.SAAP 特別アピールAP範囲
 * @property cardList.SAP スキルAP範囲
 * @property cardList.releaseLevel 解放レベル範囲
 * @property cardList.trainingLevel トレーニングレベル範囲
 * @property cardList.memberName メンバー名フィルタ
 * @property cardList.favorite お気に入りフィルタ
 * @property cardList.releaseStatus 解放ステータスフィルタ
 * @property skillList スキルリスト設定
 * @property skillList.skillFilterType スキルフィルタタイプ
 * @property skillList.skillType スキルタイプ
 * @property skillList.skillType.specialAppeal 特別アピールスキル
 * @property skillList.skillType.skill スキルタ
 * @property skillList.skillType.characteristic 特性
 * @property skillList.skillName スキル名
 * @property skillList.skillName.specialAppeal 特別アピールスキル名
 * @property skillList.skillName.skill スキル名
 * @property skillList.skillName.characteristic 特性
 * @property cardSeries カードシリーズフィルタ
 */
export type SearchSettings = {
  cardList: {
    rare: Rare[];
    styleType: StyleTypeEn[];
    mood: MoodEn[];
    limited: Limited[];
    cardLevel: [number, number];
    SALevel: [number, number];
    SLevel: [number, number];
    SAAP: [number, number];
    SAP: [number, number];
    releaseLevel: [number, number];
    trainingLevel: [number, number];
    memberName: MemberKeyValues[];
    favorite: FavoriteIcon[];
    releaseStatus: ReleaseStatus;
  };
  skillList: {
    skillFilterType?: string;
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
 * @property musicData 楽曲データ
 * @property musicData.musicLevel 楽曲レベル
 * @property cardList カードリスト
 * @property cardList.card カードリスト
 * @property cardList.cardListFilter カードリストフィルタ
 * @property selectItemList アイテムリスト
 * @property selectItemList.item1 アイテム1
 * @property selectItemList.item2 アイテム2
 * @property selectItemList.item3 アイテム3
 * @property siteSettings サイト設定
 * @property sortSettings ソート設定
 */
type LocalStorageData = {
  musicData: {
    musicLevel: Record<string, number>;
  };
  cardList: {
    card: LocalStorageCardListType;
    cardListFilter: SearchSettings;
  };
  selectItemList: {
    item1: SkillBook[];
    item2: string[];
    item3: string[];
  };
  siteSettings: SiteSettings;
  sortSettings: SortSettings;
};

/**
 * デッキを表す型
 *
 * @property name デッキ名
 * @property period 期
 * @property cardData カードデータ
 */
type Deck = {
  name: string;
  period: number;
  cardData: Record<
    string,
    Record<
      string,
      {
        cardName: string;
        param: CardFluctuationStatus;
      }
    >
  >;
};

/**
 * カウンターの状態を表す型
 *
 * @property dialog ダイアログの状態
 * @property showModalName 表示するモーダル名
 * @property updateData データ更新状態
 * @property selectCharacter 選択中のキャラクター
 * @property selectMusicTitle 選択中の楽曲
 * @property checkMasteryMember マスタリー確認メンバー
 * @property thisPeriod 現在の期
 * @property selectDeckName 選択中のデッキ名
 * @property isParamReflect パラメータ反映状態
 * @property isPossessionFlg 持ち物状態
 * @property releaseStatus 解放ステータス
 * @property bonusSkillLevels ボーナススキルレベル
 * @property withStar スター付加状態
 * @property siteSettings サイト設定
 * @property sortSettings ソート設定
 * @property memberData メンバーデータ
 * @property deck デッキ
 * @property settingCard 設定カード
 * @property openCard 開放カード
 * @property localStorageData ローカルストレージデータ
 * @property supportSkill サポートスキル
 * @property windowSize ウィンドウサイズ
 * @property musicLevel 楽曲レベル
 */
export type StoreState = {
  loading: boolean;
  dialog: boolean;
  dialogError: boolean;
  showModalName: boolean;
  updateData: boolean;
  selectCharacter: MemberKeyValues | undefined;
  selectMusicTitle: string | undefined;
  checkMasteryMember: MemberKeyValues;
  thisPeriod: 103 | 104 | 105;
  selectDeckName: string;
  isParamReflect: boolean;
  isPossessionFlg: boolean;
  withStar: Record<string, number>;
  siteSettings: SiteSettings;
  sortSettings: SortSettings;
  selectItemList: SelectItemList;
  search: SearchSettings;
  card: Record<string, CardDataByMember>;
  musicLevel: Record<string, number>;
  bonusSkillLevels: Record<BonusSkillNames, number>;
  memberData: {
    centerList: Record<
      string,
      {
        centerMusic: string[];
        bonusSkill: Record<BonusSkillNames, number>;
      }
    >;
  };
  deck: Deck[];
  settingCard: {
    ID: string;
  };
  openCard: {
    ID: string;
    name: MemberKeyValues;
    style: string;
  };
  localStorageData: LocalStorageData[];
  supportSkill: Record<string, Record<string, number>>;
  windowSize: {
    w: number;
    h: number;
  };
};
