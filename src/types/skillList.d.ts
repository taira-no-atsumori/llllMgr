/**
 * スキルの詳細情報を表すインターフェース
 * 
 * @interface SkillDetail
 * @property {string} attr - スキルの属性
 * @property {string[]} type - スキルの種類を表す文字列の配列（例: ["passive", "active"]）
 */
export interface SkillDetail {
  attr: string;
  type: string[];
}

/**
 * スキルのテキスト情報を表すインターフェース
 * 
 * @interface SkillText
 * @property {string[]} text - スキルの説明文を格納した文字列の配列
 * @property {SkillDetail} detail - スキルの詳細情報
 */
export interface SkillText {
  text: string[];
  detail: SkillDetail;
}

/**
 * スキルリストの項目を表すインターフェース
 * 
 * @interface SkillListItem
 * @property {Record<string, SkillText>} [key: string] - スキル名をキーとし、スキルテキスト情報を値とするオブジェクト
 */
export interface SkillListItem {
  [key: string]: SkillText;
}

/**
 * スキルリスト全体を表すインターフェース
 * 
 * @interface SkillList
 * @property {Record<string, SkillListItem>} [key: string] - スキルカテゴリ名をキーとし、スキルリスト項目を値とするオブジェクト
 */
export interface SkillList {
  [key: string]: SkillListItem;
}

/**
 * スキルカラー情報を表すインターフェース
 * 
 * @interface SkillColor
 * @property {string} name - スキル名
 * @property {string} colorCode - スキルに対応するカラーコード（例: "#FF0000"）
 * @property {string} description - スキルの説明
 */
export interface SkillColor {
  name: string;
  colorCode: string;
  description: string;
}

/**
 * スキルカラーリストを表すインターフェース
 * 
 * @interface SkillColorList
 * @property {Record<string, SkillColor>} [key: string] - スキル名をキーとし、スキルカラー情報を値とするオブジェクト
 */
export interface SkillColorList {
  [key: string]: SkillColor;
}

/**
 * スキルストアの状態を表すインターフェース
 * 
 * @interface SkillListState
 * @property {SkillList} skillList - 全スキルのリスト
 * @property {SkillColorList} skillColor - スキルごとのカラー情報リスト
 */
export interface SkillListState {
  skillList: SkillList;
  skillColor: SkillColorList;
}