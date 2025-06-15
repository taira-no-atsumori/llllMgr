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
 * @property {string} link 曲の関連リンク
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
  link: string;
}

/**
 * 曲のアイテムデータを表すインターフェース
 *
 * @interface MusicItem
 * @property {string} ID 曲の一意な識別子
 * @property {MusicData} musicData 曲の詳細データ
 * @property {'smile' | 'pure' | 'cool'} attribute 曲の属性（smile, pure, coolのいずれか）
 * @property {number} BHcount ビートハート発生回数
 * @property {0 | 1} level 楽曲マスタリーレベル
 * @property {103 | 104 | 105} term 曲のリリース期
 * @property {'kaho' | 'sayaka' | 'rurino' | 'kozue' | 'tsuduri' | 'megumi' | 'ginko' | 'kosuzu' | 'hime' | 'seras' | 'izumi'} center センターメンバーの名前
 * @property {'ボルテージアップ' | 'メンタルリカバー' | 'ビートハートアップ' | 'LOVEボーナス'} bonusSkill ボーナススキル
 * @property {string[]} singingMembers 歌唱メンバーの名前の配列
 * @property {'NORMAL' | 'HARD' | 'EXPERT' | 'MASTER'} difficultyLevel 曲の難易度
 */
interface MusicItem {
  ID: string;
  musicData: MusicData;
  attribute: 'smile' | 'pure' | 'cool';
  BHcount: number;
  level: 0 | 1;
  term: 103 | 104 | 105;
  center:
    | 'kaho'
    | 'sayaka'
    | 'rurino'
    | 'kozue'
    | 'tsuduri'
    | 'megumi'
    | 'ginko'
    | 'kosuzu'
    | 'hime'
    | 'seras'
    | 'izumi';
  bonusSkill: 'ボルテージアップ' | 'メンタルリカバー' | 'ビートハートアップ' | 'LOVEボーナス';
  singingMembers: string[];
  difficultyLevel?: 'NORMAL' | 'HARD' | 'EXPERT' | 'MASTER';
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
