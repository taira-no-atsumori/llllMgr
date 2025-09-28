import { MemberKeys } from '@/constants/memberNames';
import { BonusSkillNames } from '@/constants/bonusSkills';
import { AttributeEn } from '@/constants/music';

/**
 * 曲の詳細データを表すインターフェース
 *
 * @interface MusicData
 * @property {string} kana 曲名のかな表記
 * @property {string} singer 歌手名
 * @property {object} releaseDate 発売日付
 * @property {number} releaseDate.year 発売年
 * @property {number} releaseDate.month 発売月
 * @property {number} releaseDate.date 発売日
 * @property {string} numbering 曲番号（例: 'm_001'）
 * @property {object} BPM BPM
 * @property {number | string} BPM.original オリジナルのBPM
 * @property {number} BPM.inGame ゲーム内で使用されるBPM
 * @property {number} time 曲の長さ（秒単位）
 * @property {boolean} cover カバー曲かどうか（trueの場合カバー曲）
 */
interface MusicData {
  kana: string;
  singer: string;
  releaseDate: {
    year: number;
    month: number;
    date: number;
  };
  numbering: string;
  BPM: {
    original: number | string;
    inGame: number;
  };
  time: number;
  cover: boolean;
}

/**
 * 曲の難易度レベルを表すインターフェース
 *
 * @interface difficultyLevel
 * @property {number} NORMAL ノーマルレベル
 * @property {number} HARD ハードレベル
 * @property {number} EXPERT エキスパートレベル
 * @property {number} MASTER マスターレベル
 */
interface difficultyLevel {
  NORMAL: number;
  HARD: number;
  EXPERT: number;
  MASTER: number;
}

/**
 * 曲の最大コンボ数を表すインターフェース
 *
 * @interface maxCombo
 * @property {number} NORMAL ノーマルレベル
 * @property {number} HARD ハードレベル
 * @property {number} EXPERT エキスパートレベル
 * @property {number} MASTER マスターレベル
 */
interface maxCombo {
  NORMAL: number;
  HARD: number;
  EXPERT: number;
  MASTER: number;
}

/**
 * 曲のアイテムデータを表すインターフェース
 *
 * @interface MusicItem
 * @property {string} ID 曲ID
 * @property {MusicData} musicData 曲の詳細データ
 * @property {AttributeEn} attribute 曲の属性
 * @property {number} BHcount ビートハート発生回数
 * @property {0 | 1} level 楽曲マスタリーレベル
 * @property {103 | 104 | 105} term 曲のリリース期
 * @property {MemberKeys} center センターメンバーの名前
 * @property {BonusSkillNames} bonusSkill ボーナススキル
 * @property {MemberKeys[]} singingMembers 歌唱メンバーの名前の配列
 * @property {difficultyLevel} difficultyLevel 曲の難易度
 */
export interface MusicItem {
  ID: string;
  musicData: MusicData;
  attribute: AttributeEn;
  BHcount: number;
  level: 0 | 1;
  term: 103 | 104 | 105;
  center: MemberKeys;
  bonusSkill: BonusSkillNames;
  singingMembers: MemberKeys[];
  scoreData?: {
    difficultyLevel: difficultyLevel;
    maxCombo: maxCombo;
  };
}

/**
 * 曲リストの状態を表すインターフェース
 *
 * @interface MusicListState
 * @property {Record<string, MusicItem>} musicList 曲名をキーとした曲データのオブジェクト
 */
export interface MusicListState {
  musicList: Record<string, MusicItem>;
}
