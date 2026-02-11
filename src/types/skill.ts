import type { skillTypeKeyTypes } from '@/constants/skillDetail';

/**
 * スキルの型
 *
 * @property id スキルID
 * @property text スキル説明文
 * @property exText 追加スキル
 * @property exText.level 追加スキルが追加されるレベル
 * @property exText.text 追加スキル説明文
 * @property detail スキルの型
 * @property detail.attr スキルタイプ
 * @property detail.type スキルタイプ
 */
export interface SkillType {
  id: string;
  text: string[];
  exText?: [
    {
      level: number;
      text: string[];
    },
  ];
  detail: {
    attr: string;
    type: string[];
  };
}

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
