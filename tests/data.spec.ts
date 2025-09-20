import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCardStore } from '../src/stores/cardList';
import { SKILL_LIST } from '../src/constants/skillList';
import { MUSIC_LIST } from '../src/constants/musicList';
import { useStateStore } from '../src/stores/stateStore';
import type { CardData } from '../src/types/cardList';

describe('データ整合性チェック', () => {
  let cardStore: ReturnType<typeof useCardStore>;
  let stateStore: ReturnType<typeof useStateStore>;
  let allCards: CardData[];
  let allMusic;

  beforeEach(() => {
    // 各テストの前にPiniaを初期化
    setActivePinia(createPinia());

    // ストアのインスタンスを作成
    cardStore = useCardStore();
    stateStore = useStateStore();

    allCards = [];
    allMusic = Object.values(MUSIC_LIST);

    // すべてのカードを一つの配列にまとめる
    Object.values(cardStore.card).forEach((memberCards) => {
      Object.values(memberCards).forEach((rarityCards) => {
        Object.values(rarityCards).forEach((card) => {
          if (card.ID && !card.ID.endsWith('_000')) {
            allCards.push(card);
          }
        });
      });
    });
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

    expect(duplicates, `カードIDが重複しています:\n${duplicates.join('\n')}`).toEqual([]);
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
      if (numbers.length === 0) return;

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
        gapErrors.push(`Prefix "${prefix}": 欠番があります: ${missingNumbers.join(', ')}`);
      }
    });

    expect(gapErrors, `カードIDに欠番が見つかりました:\n${gapErrors.join('\n')}`).toEqual([]);
  });

  it('各カードのIDが、対応するキャラクターの略称と一致していること', () => {
    const { card } = cardStore;
    const { memberId, exclusionMember } = stateStore;

    const errors: string[] = [];

    // cardListのキャラクターキー (kaho, sayaka など) を使ってループ
    for (const characterKey in card) {
      if (characterKey === 'default' || exclusionMember.includes(characterKey)) {
        continue;
      }

      // memberId (例: { kh: 'kaho' }) から、キャラクターキー (例: 'kaho') に対応するIDプレフィックス (例: 'kh') を検索
      const expectedPrefix = Object.keys(memberId).find((key) => memberId[key] === characterKey);

      if (!expectedPrefix) {
        errors.push(`キャラクター「${characterKey}」に対応するIDプレフィックスが memberId に見つかりません。`);
        continue;
      }

      // レアリティごとにループ
      for (const rarity in card[characterKey]) {
        if (rarity === 'default') continue;

        // カード名でループ
        for (const cardName in card[characterKey][rarity]) {
          if (cardName === 'default') continue;

          const cardData = card[characterKey][rarity][cardName];
          const cardId = cardData.ID;

          if (!cardId || cardId.endsWith('_000')) continue;

          const idPrefix = cardId.split('_')[0];

          if (idPrefix !== expectedPrefix) {
            errors.push(
              `不正なIDです: カード「${cardName}」(ID: ${cardId})のプレフィックスが「${idPrefix}」になっています。キャラクター「${characterKey}」の正しいプレフィックスは「${expectedPrefix}」です。`
            );
          }
        }
      }
    }

    expect(errors, `カードIDのプレフィックスがキャラクターの略称と一致しません:\n${errors.join('\n')}`).toEqual([]);
  });

  it('楽曲IDが重複していないこと', () => {
    const idMap = new Map<string, string[]>();
    allMusic.forEach((music) => {
      if (!idMap.has(music.ID)) {
        idMap.set(music.ID, []);
      }
      idMap.get(music.ID)!.push(music.musicData.kana || music.ID);
    });

    const duplicates = [...idMap.entries()]
      .filter(([, names]) => names.length > 1)
      .map(([id, names]) => `ID: ${id} (Music: ${names.join(', ')})`);

    expect(duplicates, `楽曲IDが重複しています:\n${duplicates.join('\n')}`).toEqual([]);
  });

  it('楽曲IDの数字が連番になっていること', () => {
    const numbers = allMusic
      .map((music) => {
        const match = music.ID.match(/^m_(\d+)$/);
        return match ? parseInt(match[1], 10) : null;
      })
      .filter((num): num is number => num !== null);

    if (numbers.length === 0) return;

    const sorted = [...new Set(numbers)].sort((a, b) => a - b);
    const min = sorted[0];
    const max = sorted[sorted.length - 1];

    const missingNumbers: number[] = [];
    for (let i = min; i <= max; i++) {
      if (!sorted.includes(i)) {
        missingNumbers.push(i);
      }
    }

    expect(missingNumbers, `楽曲IDに欠番が見つかりました: ${missingNumbers.join(', ')}`).toEqual([]);
  });

  it('カードIDのフォーマットが正しいこと', () => {
    const formatErrors: string[] = [];

    allCards.forEach((card) => {
      // 基本フォーマット: 小文字アルファベット_数字3桁
      const formatRegex = /^[a-z]+_\d{3}$/;
      if (!formatRegex.test(card.ID)) {
        formatErrors.push(`ID: ${card.ID} - フォーマットが不正です（小文字アルファベット_数字3桁の形式が必要）`);
      }
    });

    expect(formatErrors, `カードIDのフォーマットエラー:\n${formatErrors.join('\n')}`).toEqual([]);
  });

  it('楽曲IDのフォーマットが正しいこと', () => {
    const formatErrors: string[] = [];

    allMusic.forEach((music) => {
      // 基本フォーマット: 小文字アルファベット_数字3桁
      const formatRegex = /^[a-z]+_\d{3}$/;
      if (!formatRegex.test(music.ID)) {
        formatErrors.push(`ID: ${music.ID} - フォーマットが不正です（小文字アルファベット_数字3桁の形式が必要）`);
      }
    });

    expect(formatErrors, `楽曲IDのフォーマットエラー:\n${formatErrors.join('\n')}`).toEqual([]);
  });

  it('各カードのspecialAppealがskillListに存在すること', () => {
    const errors: string[] = [];
    allCards.forEach((card) => {
      if (card.specialAppeal?.name && card.specialAppeal?.ID) {
        const { name, ID } = card.specialAppeal;
        if (!SKILL_LIST[name]) {
          errors.push(
            `カード [${card.ID}: ${card.kana}] のスペシャルアピール名「${name}」が skillList に存在しません。`
          );
        } else if (!SKILL_LIST[name][ID]) {
          errors.push(
            `カード [${card.ID}: ${card.kana}] のスペシャルアピールID「${ID}」が skillList.${name} に存在しません。`
          );
        }
      }
    });
    expect(errors, `スペシャルアピールの不整合が見つかりました:\n${errors.join('\n')}`).toEqual([]);
  });

  it('各カードのskillがskillListに存在すること', () => {
    const errors: string[] = [];
    allCards.forEach((card) => {
      if (card.skill?.name && card.skill?.ID) {
        const { name, ID } = card.skill;
        if (!SKILL_LIST[name]) {
          errors.push(`カード [${card.ID}: ${card.kana}] のスキル名「${name}」が skillList に存在しません。`);
        } else if (!SKILL_LIST[name][ID]) {
          errors.push(`カード [${card.ID}: ${card.kana}] のスキルID「${ID}」が skillList.${name} に存在しません。`);
        }
      }
    });
    expect(errors, `スキルの不整合が見つかりました:\n${errors.join('\n')}`).toEqual([]);
  });
});
