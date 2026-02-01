import type { skillTypeKeyTypes } from '@/constants/skillDetail';

/**
 * スキル詳細の型
 *
 * @property id スキルID
 * @property skillDetailName スキル名
 * @property colorCode カラーコード
 * @property description 詳細説明
 * @property skillTypeKey スキルタイプ
 */
export interface SkillDetailType {
  id: string;
  skillDetailName: string;
  colorCode: string;
  description: string;
  skillTypeKey: skillTypeKeyTypes;
}
