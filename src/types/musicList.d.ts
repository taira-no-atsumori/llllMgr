/**
 * 曲の詳細データを表すインターフェース
 *
 * @interface MusicData
 * @property {string} kana - 曲名のカナ表記
 * @property {string} singer - 歌手名
 * @property {object} releaseDate - 発売日
 * @property {number} releaseDate.year - 発売年
 * @property {number} releaseDate.month - 発売月
 * @property {number} releaseDate.date - 発売日
 * @property {string} numbering - 曲番号（例: 'm_001'）
 * @property {object} BPM - BPM情報
 * @property {number | string} BPM.original - オリジナルのBPM（数値または文字列）
 * @property {number} BPM.inGame - ゲーム内で使用されるBPM
 * @property {number} time - 曲の長さ（秒単位）
 * @property {boolean} cover - カバー曲かどうか（`true`の場合カバー曲）
 * @property {string} link - 曲の関連リンク（例: YouTubeや公式サイトのURL）
 */
export interface MusicData {
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
 * @property {string} ID - 曲の一意な識別子
 * @property {MusicData} musicData - 曲の詳細データ
 * @property {'smile' | 'pure' | 'cool'} attribute - 曲の属性（smile, pure, coolのいずれか）
 * @property {number} BHcount - ビートハートの数
 * @property {number} level - 曲の難易度レベル
 * @property {number} term - 曲のリリース期
 * @property {string} center - センターの名前
 * @property {string} bonusSkill - ボーナススキルの説明
 * @property {string[]} singingMembers - 歌唱メンバーの名前の配列
 */
export interface MusicItem {
  ID: string;
  musicData: MusicData;
  attribute: 'smile' | 'pure' | 'cool';
  BHcount: number;
  level: number;
  term: number;
  center: string;
  bonusSkill: string;
  singingMembers: string[];
}

/**
 * 曲リストの状態を表すインターフェース
 *
 * @interface MusicListState
 * @property {Record<string, MusicItem>} musicList - 曲名をキーとした曲データのオブジェクト
 */
export interface MusicListState {
  musicList: Record<string, MusicItem>;
}