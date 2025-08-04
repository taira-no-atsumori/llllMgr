/**
 * スキルの追加効果テキスト
 * @property level 効果が適用されるレベル
 * @property text 効果テキスト
 */
interface SkillExText {
  level: number;
  text: string[];
}

/**
 * スキルの詳細情報
 * @property attr スキルの属性
 * @property type スキル効果の種類
 */
interface SkillDetail {
  attr: string;
  type: string[];
}

/**
 * 個々のスキル定義
 * @property text スキル効果のテキスト
 * @property detail スキルの詳細情報
 * @property exText スキルレベルによって変化する追加テキスト
 */
interface SkillDefinition {
  text: string[];
  detail: SkillDetail;
  exText?: SkillExText[];
}

/**
 * スキルカテゴリ。スキルIDをキーとしたスキルのマップ
 * 例: { heartCaptcha: SkillDefinition, loveAttract: SkillDefinition }
 */
type SkillGroup = Record<string, SkillDefinition>;

/**
 * スキル効果の色情報
 * @property name スキル効果の表示名
 * @property colorCode Vuetifyの色コード
 * @property description スキル効果の説明
 */
interface SkillColorInfo {
  name: string;
  colorCode: string;
  description: string;
}

/**
 * スキルリストストアの状態
 */
export interface SkillListState {
  /** スキルカテゴリ名をキーとしたスキルグループのマップ */
  skillList: Record<string, SkillGroup>;
  /** スキル効果タイプをキーとした色情報のマップ */
  skillColor: Record<string, SkillColorInfo>;
}
