/**
 * 頭文字判定処理
 *
 * @property
 * 指定された文字の行（あ行、か行など）を取得する。
 *
 * @param char 判定する文字
 * @returns 行の先頭文字（あ、か、さ...）または 'other'
 */
export const getRow = (char: string): string => {
  if (!char) {
    return 'other';
  } else if (/[あ-おア-オ]/.test(char)) {
    return 'あ';
  } else if (/[か-こカ-コが-ごガ-ゴ]/.test(char)) {
    return 'か';
  } else if (/[さ-そサ-ソざ-ぞザ-ゾ]/.test(char)) {
    return 'さ';
  } else if (/[た-とタ-トだ-どダ-ド]/.test(char)) {
    return 'た';
  } else if (/[な-のナ-ノ]/.test(char)) {
    return 'な';
  } else if (/[は-ほハ-ホば-ぼバ-ボぱ-ぽパ-ポ]/.test(char)) {
    return 'は';
  } else if (/[ま-もマ-モ]/.test(char)) {
    return 'ま';
  } else if (/[や-よヤ-ヨ]/.test(char)) {
    return 'や';
  } else if (/[ら-ろラ-ロ]/.test(char)) {
    return 'ら';
  } else if (/[わ-んワ-ン]/.test(char)) {
    return 'わ';
  } else {
    return 'other';
  }
};
