import { describe, it, expect } from 'vitest';
import { getRow } from './stringUtil';

describe('getRow', () => {
  it('空文字の場合は "other" を返すこと', () => {
    expect(getRow('')).toBe('other');
  });

  it('あ行（ひらがな・カタカナ）を正しく判定できること', () => {
    expect(getRow('あ')).toBe('あ');
    expect(getRow('い')).toBe('あ');
    expect(getRow('お')).toBe('あ');
    expect(getRow('ア')).toBe('あ');
    expect(getRow('オ')).toBe('あ');
  });

  it('か行（ひらがな・カタカナ・濁音）を正しく判定できること', () => {
    expect(getRow('か')).toBe('か');
    expect(getRow('こ')).toBe('か');
    expect(getRow('が')).toBe('か');
    expect(getRow('カ')).toBe('か');
    expect(getRow('ゴ')).toBe('か');
  });

  it('さ行（ひらがな・カタカナ・濁音）を正しく判定できること', () => {
    expect(getRow('さ')).toBe('さ');
    expect(getRow('ざ')).toBe('さ');
    expect(getRow('サ')).toBe('さ');
    expect(getRow('ゾ')).toBe('さ');
  });

  it('た行（ひらがな・カタカナ・濁音）を正しく判定できること', () => {
    expect(getRow('た')).toBe('た');
    expect(getRow('だ')).toBe('た');
    expect(getRow('タ')).toBe('た');
    expect(getRow('ド')).toBe('た');
  });

  it('な行（ひらがな・カタカナ）を正しく判定できること', () => {
    expect(getRow('な')).toBe('な');
    expect(getRow('の')).toBe('な');
    expect(getRow('ナ')).toBe('な');
    expect(getRow('ノ')).toBe('な');
  });

  it('は行（ひらがな・カタカナ・濁音・半濁音）を正しく判定できること', () => {
    expect(getRow('は')).toBe('は');
    expect(getRow('ば')).toBe('は');
    expect(getRow('ぱ')).toBe('は');
    expect(getRow('ハ')).toBe('は');
    expect(getRow('ボ')).toBe('は');
    expect(getRow('ポ')).toBe('は');
  });

  it('ま行（ひらがな・カタカナ）を正しく判定できること', () => {
    expect(getRow('ま')).toBe('ま');
    expect(getRow('も')).toBe('ま');
    expect(getRow('マ')).toBe('ま');
    expect(getRow('モ')).toBe('ま');
  });

  it('や行（ひらがな・カタカナ）を正しく判定できること', () => {
    expect(getRow('や')).toBe('や');
    expect(getRow('よ')).toBe('や');
    expect(getRow('ヤ')).toBe('や');
    expect(getRow('ヨ')).toBe('や');
  });

  it('ら行（ひらがな・カタカナ）を正しく判定できること', () => {
    expect(getRow('ら')).toBe('ら');
    expect(getRow('ろ')).toBe('ら');
    expect(getRow('ラ')).toBe('ら');
    expect(getRow('ロ')).toBe('ら');
  });

  it('わ行（ひらがな・カタカナ）を正しく判定できること', () => {
    expect(getRow('わ')).toBe('わ');
    expect(getRow('を')).toBe('わ');
    expect(getRow('ん')).toBe('わ');
    expect(getRow('ワ')).toBe('わ');
    expect(getRow('ン')).toBe('わ');
  });

  it('その他の文字は "other" を返すこと', () => {
    expect(getRow('a')).toBe('other');
    expect(getRow('1')).toBe('other');
    expect(getRow('漢')).toBe('other');
    expect(getRow('ー')).toBe('other');
  });
});
