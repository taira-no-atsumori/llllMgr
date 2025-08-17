/**
 * スキルの色を定義する定数
 */
export const SKILL_COLOR = {
  heartCaptcha: {
    name: 'ハートキャプチャ',
    colorCode: 'red',
    description: 'ハートを獲得する。',
  },
  loveAttract: {
    name: 'ラブアトラクト',
    colorCode: 'lime-darken-3',
    description: '次回ハート回収時、獲得するLOVEが増加する。',
  },
  loveAttract_section: {
    name: 'ラブアトラクト(セクション)',
    colorCode: 'lime-darken-3',
    description: 'このセクション中、獲得するLOVEが増加する。',
  },
  loveAttract_stage: {
    name: 'ラブアトラクト(ステージ)',
    colorCode: 'lime-darken-3',
    description: 'このステージ中、獲得するLOVEが増加する。',
  },
  voltageGain: {
    name: 'ボルテージゲイン',
    colorCode: 'lime-darken-4',
    description: 'ボルテージPt.を獲得する。',
  },
  voltageReduce: {
    name: 'ボルテージレデュース',
    colorCode: 'lime-darken-4',
    description: 'ボルテージPt.を減らす。',
  },
  mentalRecover: {
    name: 'メンタルリカバー',
    colorCode: 'green',
    description: 'メンタルを回復する。',
  },
  mentalReduce: {
    name: 'メンタルレデュース',
    colorCode: 'green',
    description: 'メンタルを減らす。',
  },
  mentalDown_section: {
    name: 'メンタルダウン(セクション)',
    colorCode: 'green',
    description: 'メンタルが0になってもメンタルダウンしなくなる。',
  },
  mentalDown_stage: {
    name: 'メンタルダウン(ステージ)',
    colorCode: 'green',
    description: 'メンタルが0になってもメンタルダウンしなくなる。',
  },
  protect_section: {
    name: 'プロテクト(セクション)',
    colorCode: 'green',
    description: 'このセクション中、メンタル減少を一定量無効化する。',
  },
  protect_stage: {
    name: 'プロテクト(ステージ)',
    colorCode: 'green',
    description: 'このステージ中、メンタル減少を一定量無効化する。',
  },
  reshuffle: {
    name: 'リシャッフル',
    colorCode: 'purple',
    description: '手札を全て捨てて、デッキから手札上限までスキルを引く。',
  },
  extendHand: {
    name: 'エクステンドハンド',
    colorCode: 'purple',
    description: '手札の上限枚数が増加する。',
  },
  extensions_section: {
    name: 'エクステンション(セクション)',
    colorCode: 'purple',
    description: 'このセクション中、手札の上限枚数が増加する(最大8枚)。',
  },
  extensions_stage: {
    name: 'エクステンション(ステージ)',
    colorCode: 'purple',
    description: 'このステージ中、手札の上限枚数が増加する(最大8枚)。',
  },
  cardReduce: {
    name: '手札減少',
    colorCode: 'purple',
    description: 'このステージ中、手札の上限枚数が減少する。',
  },
  boost_heartCaptcha: {
    name: 'ブースト(ハートキャプチャ)',
    colorCode: 'red',
    description: '次に使用するスキルハート獲得効果による獲得数を増加させる。',
  },
  boost_loveAttract: {
    name: 'ブースト(ラブアトラクト)',
    colorCode: 'lime-darken-3',
    description: '次に使用するラブアトラクトの効果を増加させる。',
  },
  boost_voltageGain: {
    name: 'ブースト(ボルテージゲイン)',
    colorCode: 'lime-darken-4',
    description: '次に使用するボルテージゲインの効果を増加させる。',
  },
  boost_mentalRecover: {
    name: 'ブースト(メンタルリカバー)',
    colorCode: 'green',
    description: '次に使用するメンタルリカバーの効果を増加させる。',
  },
  boost_mentalProtect: {
    name: 'ブースト(メンタルプロテクト)',
    colorCode: 'green',
    description: '次に使用するメンタルプロテクトの効果を増加させる。',
  },
  APGain: {
    name: 'APゲイン',
    colorCode: '',
    description: 'APを回復する。',
  },
  APLoss: {
    name: 'APロス',
    colorCode: '',
    description: 'APを減少させる。',
  },
  APReduce: {
    name: 'APレデュース',
    colorCode: 'purple',
    description: 'スキルの消費APを減少させる。',
  },
  APReduce_all: {
    name: 'APレデュース(手札全て)',
    colorCode: 'purple',
    description: '手札の全てのスキルの消費APを減少させる。',
  },
  APReduce_heart: {
    name: 'APレデュース(ハート系)',
    colorCode: 'purple',
    description: '手札のメイン効果にスキルハート獲得効果を持つスキルの消費APを減少させる。',
  },
  APReduce_voltageGain: {
    name: 'APレデュース(ボルテージ系)',
    colorCode: 'purple',
    description: '手札のメイン効果にボルテージ増加効果を持つスキルの消費APを減少させる。',
  },
  APReduce_deck_ceriseBouquet: {
    name: 'APレデュース(スリーズブーケ)',
    colorCode: 'purple',
    description: 'デッキにあるスリーズブーケのスキルの消費APを減少させる。',
  },
  APReduce_deck_dressCard: {
    name: 'APレデュース(ドレスカード)',
    colorCode: 'purple',
    description: 'デッキにあるドレスカードの消費APを減少させる。',
  },
  APQuick: {
    name: 'ヒートアップ',
    colorCode: 'lime-darken-3',
    description: 'AP回復速度を上昇させる。',
  },
  APSlow: {
    name: 'AP回復速度低下',
    colorCode: '',
    description: 'AP回復速度を低下させる。',
  },
  heartLimitUp: {
    name: 'ワイドハート',
    colorCode: 'red',
    description: 'ハート数の上限を増加させる。',
  },
  addCard: {
    name: 'カード追加',
    colorCode: 'purple',
    description: 'カードを山札に追加する。',
  },
  ignition: {
    name: 'イグニッション',
    colorCode: 'purple',
    description: '特定条件で効果が変化する。',
  },
  modeChange: {
    name: 'モードチェンジ',
    colorCode: 'purple',
    description: 'スキルの効果を変化させる。',
  },
  coolTime: {
    name: 'クールタイム',
    colorCode: '',
    description: 'スキル使用時、クールタイムが発生する。',
  },
  infinity_AP_section: {
    name: 'AP無限(セクション)',
    colorCode: '',
    description: 'このセクション中、APを無限にする。',
  },
  infinity_AP_stage: {
    name: 'AP無限(ステージ)',
    colorCode: '',
    description: 'このステージ中、APを無限にする。',
  },
  infinity_voltage_section: {
    name: 'ボルテージ無限(セクション)',
    colorCode: '',
    description: 'このセクション中、ボルテージを無限にする。',
  },
  infinity_voltage_stage: {
    name: 'ボルテージ無限(ステージ)',
    colorCode: '',
    description: 'このステージ中、ボルテージを無限にする。',
  },
  infinity_mental_section: {
    name: 'メンタル無限(セクション)',
    colorCode: '',
    description: 'このセクション中、メンタルを無限にする。',
  },
  infinity_mental_stage: {
    name: 'メンタル無限(ステージ)',
    colorCode: '',
    description: 'このステージ中、メンタルを無限にする。',
  },
  'skillUse-handsCard': {
    name: 'スキル使用(手札)',
    colorCode: '',
    description: '手札の他の全スキルを同時に使用する。',
  },
  changeDeck: {
    name: 'チェンジデッキ',
    colorCode: 'purple',
    description: 'デッキを入れ替える。',
  },
  challenge: {
    name: 'チャレンジ',
    colorCode: '',
    description: 'ランダムにチャレンジが発生する。',
  },
  driveIgnition: {
    name: 'ドライブイグニッション',
    colorCode: '',
    description: 'イグニッションモードになった回数に応じて、様々な効果が発動する。',
  },
  vibes_section: {
    name: 'バイブス(セクション)',
    colorCode: 'lime-darken-4',
    description: 'このセクション中、ビートハートの出現個数を増加させる。',
  },
  vibes_stage: {
    name: 'バイブス(ステージ)',
    colorCode: 'lime-darken-4',
    description: 'このステージ中、ビートハートの出現個数を増加させる。',
  },
  ambience_section: {
    name: 'アンビエンス(セクション)',
    colorCode: 'lime-darken-4',
    description: 'このセクション中、ムード値を変化させる。',
  },
  ambience_stage: {
    name: 'アンビエンス(ステージ)',
    colorCode: 'lime-darken-4',
    description: 'このステージ中、ムード値を変化させる。',
  },
  imitation: {
    name: 'イミテーション',
    colorCode: 'purple',
    description:
      'カードがステージにセットされ、特定の獲得したものを吸収する。その後、特定の効果を発動し、捨札に移動する。',
  },
  sound: {
    name: 'サウンド',
    colorCode: 'red',
    description: 'ムードが一定値以上もしくは一定値以下になると、特定の効果を発動する。',
  },
} as const;
