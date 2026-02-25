import { describe, it, expect, beforeEach, beforeAll } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { get, ref as dbRef } from 'firebase/database';
import { useStateStore } from '../../src/stores/stateStore';
import {
  MEMBER_IDS,
  EXCLUSION_MEMBER,
  type MemberIds,
  type MemberKeyValues,
} from '../../src/constants/memberNames';
import type {
  CardDataType,
  CardDataByMember,
  // SkillDetail,
} from '../../src/types/cardList';
import { rtdb } from '../../src/firebase';
import type { SkillType } from '../../src/types/skill';

describe('データ整合性チェック', () => {
  let stateStore: ReturnType<typeof useStateStore>;
  let allCards: CardDataType[];
  let skillList: Record<string, SkillType>;

  // ヘルパー関数
  /**
   * カード情報取得処理
   *
   * @param store store
   * @returns CardDataType
   */
  const getAllCards = (
    store: ReturnType<typeof useStateStore>,
  ): CardDataType[] => {
    const cardData = store.card as unknown as CardDataByMember;

    return Object.values(cardData).flatMap((memberCards) =>
      Object.values(memberCards).flatMap((rarityCards) =>
        Object.values(rarityCards).filter(
          (card): card is CardDataType =>
            !!(
              card &&
              typeof card === 'object' &&
              'ID' in card &&
              !card.ID.endsWith('_000')
            ),
        ),
      ),
    );
  };

  beforeAll(async () => {
    const snapshot = await get(dbRef(rtdb, 'skills/skill'));
    skillList = snapshot.val() || {};
  });

  beforeEach(async () => {
    setActivePinia(createPinia());
    stateStore = useStateStore();
    await stateStore.initializeData();
    allCards = getAllCards(stateStore);
  });

  it('カードIDが重複していないこと', () => {
    const idMap = new Map<string, string[]>();
    allCards.forEach((card) => {
      if (!idMap.has(card.ID)) {
        idMap.set(card.ID, []);
      }

      idMap.get(card.ID)!.push(card.kana || card.ID);
    });

    const duplicates = [...idMap.entries()]
      .filter(([, names]) => names.length > 1)
      .map(([id, names]) => `ID: ${id} (Cards: ${names.join(', ')})`);

    expect(
      duplicates,
      `カードIDが重複しています:\n${duplicates.join('\n')}`,
    ).toEqual([]);
  });

  it('カードIDの数字が連番になっていること', () => {
    const idsByPrefix = new Map<string, number[]>();

    // プレフィックスごとにIDの数字部分を収集
    allCards.forEach((card) => {
      const match = card.ID.match(/^([a-z]+)_(\d+)$/);

      if (match) {
        const [, prefix, numStr] = match;
        const num = parseInt(numStr, 10);

        if (!idsByPrefix.has(prefix)) {
          idsByPrefix.set(prefix, []);
        }

        idsByPrefix.get(prefix)!.push(num);
      }
    });

    const gapErrors: string[] = [];

    // 各プレフィックスで連番になっているかチェック
    idsByPrefix.forEach((numbers, prefix) => {
      if (numbers.length === 0) {
        return;
      }

      const sorted = [...new Set(numbers)].sort((a, b) => a - b);
      const min = sorted[0];
      const max = sorted[sorted.length - 1];

      const missingNumbers: number[] = [];
      for (let i = min; i <= max; i++) {
        if (!sorted.includes(i)) {
          missingNumbers.push(i);
        }
      }

      if (missingNumbers.length > 0) {
        gapErrors.push(
          `Prefix "${prefix}": 欠番があります: ${missingNumbers.join(', ')}`,
        );
      }
    });

    expect(
      gapErrors,
      `カードIDに欠番が見つかりました:\n${gapErrors.join('\n')}`,
    ).toEqual([]);
  });

  it('各カードのIDが、対応するキャラクターの略称と一致していること', () => {
    const { card } = stateStore;

    const errors: string[] = [];

    // cardListのキャラクターキー（例: kaho, sayaka など）でループ
    for (const characterKey in card) {
      if (
        characterKey === 'default' ||
        EXCLUSION_MEMBER.includes(characterKey)
      ) {
        continue;
      }

      // MEMBER_IDS（例: { kh: 'kaho' }）から、キャラクターキー（例: 'kaho'）に対応するIDプレフィックス（例: 'kh'）を検索
      const expectedPrefix: MemberIds | undefined =
        MEMBER_IDS[characterKey as MemberKeyValues];

      if (!expectedPrefix) {
        errors.push(
          `キャラクター「${characterKey}」に対応するIDプレフィックスがMEMBER_IDSに見つかりません。`,
        );
        continue;
      }

      // レアリティごとにループ
      for (const rarity in card[characterKey]) {
        if (rarity === 'default') {
          continue;
        }

        // カード名ごとにループ
        for (const cardName in card[characterKey][rarity]) {
          if (cardName === 'default') {
            continue;
          }

          const cardData = card[characterKey][rarity][cardName];
          const cardId = cardData.ID;

          if (!cardId || cardId.endsWith('_000')) {
            continue;
          }

          const idPrefix = cardId.split('_')[0];

          if (idPrefix !== expectedPrefix) {
            errors.push(
              `不正なIDです: カード「${cardName}」（ID: ${cardId}）のプレフィックスが「${idPrefix}」になっています。キャラクター「${characterKey}」の正しいプレフィックスは「${expectedPrefix}」です。`,
            );
          }
        }
      }
    }

    expect(
      errors,
      `カードIDのプレフィックスがキャラクターの略称と一致しません:\n${errors.join(
        '\n',
      )}`,
    ).toEqual([]);
  });

  it('カードIDのフォーマットが正しいこと', () => {
    const formatErrors: string[] = [];

    allCards.forEach((card) => {
      // 基本フォーマット: 小文字アルファベット_数字3桁
      const formatRegex = /^[a-z]+_\d{3}$/;

      if (!formatRegex.test(card.ID)) {
        formatErrors.push(
          `ID: ${card.ID} - フォーマットが不正です（小文字アルファベット_数字3桁の形式が必要）`,
        );
      }
    });

    expect(
      formatErrors,
      `カードIDのフォーマットエラー:\n${formatErrors.join('\n')}`,
    ).toEqual([]);
  });

  it('各カードのspecialAppealがskillListに存在すること', () => {
    const errors: string[] = [];
    allCards.forEach((card) => {
      if (card.specialAppeal?.name && card.specialAppeal?.ID) {
        const { name, ID } = card.specialAppeal;

        if (!skillList[ID]) {
          errors.push(
            `カード [${card.ID}: ${card.cardName}] のスペシャルアピール名「${name}」が skillList に存在しません。`,
          );
        }
      }
    });
    expect(
      errors,
      `スペシャルアピールの不整合が見つかりました:\n${errors.join('\n')}`,
    ).toEqual([]);
  });

  it('各カードのskillがskillListに存在すること', () => {
    const errors: string[] = [];
    allCards.forEach((card) => {
      if (card.skill?.name && card.skill?.ID) {
        const { name, ID } = card.skill;

        if (!skillList[ID]) {
          errors.push(
            `カード [${card.ID}: ${card.cardName}] のスキル名「${name}」が skillList に存在しません。`,
          );
        }
      }
    });
    expect(
      errors,
      `スキルの不整合が見つかりました:\n${errors.join('\n')}`,
    ).toEqual([]);
  });

  it('カードデータの必須プロパティ（ID, cardName, rareなど）が欠落していないこと', () => {
    const errors: string[] = [];

    allCards.forEach((card) => {
      const cardIdentifier = `カード [${card.ID || 'ID不明'}: ${
        card.cardName || '名前不明'
      }]`;

      // 文字列であるべき必須プロパティをチェック
      ['ID', 'cardName', 'rare', 'memberName', 'styleType', 'mood'].forEach(
        (prop) => {
          if (typeof card[prop] !== 'string' || card[prop] === '') {
            errors.push(
              `${cardIdentifier}: 必須プロパティ「${prop}」が存在しないか、空です。`,
            );
          }
        },
      );

      // オブジェクトであるべき必須プロパティをチェック
      ['uniqueStatus', 'skill', 'gacha'].forEach((prop) => {
        if (typeof card[prop] !== 'object' || card[prop] === null) {
          errors.push(
            `${cardIdentifier}: 必須プロパティ「${prop}」が存在しないか、オブジェクトではありません。`,
          );
        }
      });

      // uniqueStatus内のネストされたプロパティをチェック
      if (card.uniqueStatus) {
        ['smile', 'pure', 'cool', 'mental', 'BP'].forEach((prop) => {
          if (typeof card.uniqueStatus[prop] !== 'number') {
            errors.push(
              `${cardIdentifier}: uniqueStatus内に必須プロパティ「${prop}」が存在しないか、数値ではありません。`,
            );
          }
        });
      }
    });

    expect(
      errors,
      `必須プロパティに関するエラー:\n${errors.join('\n')}`,
    ).toEqual([]);
  });

  // it('スキルテキストと効果量の数が一致していること', () => {
  //   const errors: string[] = [];

  //   const checkSkillConsistency = (
  //     card: CardDataType,
  //     skill: SkillDetail | undefined,
  //     path: string,
  //   ) => {
  //     if (!skill?.ID) return;

  //     const skillInfo = skillList[skill.ID];
  //     if (
  //       !skillInfo ||
  //       !Array.isArray(skill.detail) ||
  //       !Array.isArray(skillInfo.text)
  //     ) {
  //       return;
  //     }

  //     const textList =
  //       skillInfo.exText && skillInfo.exText.length > 0
  //         ? skillInfo.exText[skillInfo.exText.length - 1].text
  //         : skillInfo.text;
  //     const expectedLength = textList.length > 0 ? textList.length - 1 : 0;
  //     const actualLength = skill.detail.length;

  //     if (actualLength !== expectedLength) {
  //       errors.push(
  //         `カード [${card.ID}: ${card.cardName}] の \`${path}\` (スキルID: ${skill.ID}): skill.text の要素数(${skillInfo.text.length})から期待される detail の要素数(${expectedLength})と、実際の要素数(${actualLength})が一致しません。`,
  //       );
  //     }

  //     skill.addSkill?.flat().forEach((add, i) => {
  //       checkSkillConsistency(card, add, `${path}.addSkill[${i}]`);
  //     });
  //     skill.addSA?.flat().forEach((add, i) => {
  //       checkSkillConsistency(card, add, `${path}.addSA[${i}]`);
  //     });
  //   };

  //   allCards.forEach((card) => {
  //     checkSkillConsistency(card, card.specialAppeal, 'specialAppeal');
  //     checkSkillConsistency(card, card.skill, 'skill');
  //   });

  //   expect(
  //     errors,
  //     `スキルテキストと効果量の数に不整合が見つかりました:\n${errors.join('\n')}`,
  //   ).toEqual([]);
  // });
});
