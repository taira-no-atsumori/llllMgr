// vscode:wordWrap on
import { SKILL_DETAIL } from '@/constants/skillDetail';

export const SKILL_LIST = {
  ハートキャプチャ: {
    heartCaptcha: {
      text: ['ビートハート', '回分のスキルハートを獲得する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  ラブアトラクト: {
    loveAttract: {
      text: ['次のハート回収時、獲得するLOVEを+', '%する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.LOVE_ATTRACT],
      },
    },
    loveAttract_section: {
      text: ['このセクション中、獲得するLOVEを+', '%する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    loveAttract_stage: {
      text: ['このステージ中、獲得するLOVEを+', '%する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
  },
  ボルテージゲイン: {
    voltageGain: {
      text: ['ボルテージPt.を+', 'する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  ボルテージブースト: {
    voltageBoost_stage: {
      text: ['このステージ中、ボルテージゲイン効果を+', '%する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.BOOST_VOLTAGE_GAIN],
      },
    },
  },
  メンタルリカバー: {
    mentalRecover: {
      text: ['メンタルを最大値の', '%回復させる。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  メンタルプロテクト: {
    mentalProtect_recover_sectionProtect: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにこのセクション中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.PROTECT_SECTION],
      },
    },
    mentalProtect_stageProtect: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  エクステンドハンド: {
    extendHand_stage1: {
      text: ['このステージ中、手札の上限枚数を1枚増加する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.EXTEND_HAND],
      },
    },
  },
  APゲイン: {
    APGain: {
      text: ['APを', '回復させる。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  リフレッシュハート: {
    refreshHeart: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'refresh',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  リフレッシュボルテージ: {
    refreshVoltage: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
        '%回復させ、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'refresh',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.VOLTAGE_GAIN,
        ],
      },
    },
  },
  リフレッシュマインド: {
    refreshMind: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: 'refresh',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
    refreshMind_stageProtect: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
        '%回復させ、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'refresh',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  リフレッシュプロテクト: {
    refreshProtect_stage: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、メンタルを最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'refresh',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  リフレッシュサポート: {
    refreshSupport_stage: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
        '%回復させ、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'refresh',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
        ],
      },
    },
  },
  リフレッシュゲイン: {
    refreshGain: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引き、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにAPを7回復する。',
      ],
      detail: {
        attr: 'refresh',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
    refreshGain_02: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にし、APを',
        '回復する。',
      ],
      detail: {
        attr: 'refresh',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  リフレッシュバブリング: {
    refreshBubbling: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引き、メンタルを最大値の',
        '%回復させる。さらにバブルカードを1種類(合計3枚)山札に追加する。',
      ],
      detail: {
        attr: 'refresh',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.ADD_CARD,
        ],
      },
    },
  },
  リフレッシュエクステンド: {
    refreshExtend_stage1: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、手札の上限枚数を1枚増加し、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  リフレッシュブースト: {
    refreshBoost: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに3回の間スキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'refresh',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
  },
  リフレッシュワイド: {
    refreshWide: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのセクション中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: 'refresh',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.HEART_LIMIT_UP],
      },
    },
  },
  リフレッシュチェンジ: {
    refreshChange: {
      text: [
        '姫芽の《イグニッションモード》の状態を切り替える。さらに手札を全て捨てて、デッキから手札上限までスキルを引き、このステージ中、メンタルの最大値の',
        '%のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'refresh',
        type: [
          SKILL_DETAIL.MODE_CHANGE,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  リフレッシュチェンジプロテクト: {
    refreshChangeProtect_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にし、姫芽の《イグニッションモード》を切り替える。',
      ],
      detail: {
        attr: 'refresh',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.MODE_CHANGE,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  ハートアトラクション: {
    heartAttraction_section: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    heartAttraction_stage: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにこのステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
    heartAttraction_50: {
      text: [
        '50個のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    heartAttraction_100: {
      text: [
        '100個のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
  },
  ハートブースト: {
    heartBoost: {
      text: ['次に使用するスキルハート獲得効果による獲得数を+', '%する。'],
      detail: {
        attr: 'heartBoost',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
    heartBoost_limit2: {
      text: ['2回の間スキルハート獲得効果による獲得数を+', '%する。'],
      detail: {
        attr: 'heartBoost',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
    heartBoost_limit5: {
      text: ['5回の間スキルハート獲得効果による獲得数を+', '%する。'],
      detail: {
        attr: 'heartBoost',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
    heartBoost_section: {
      text: [
        'このセクション中、スキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'heartBoost',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
  },
  'ハートブースト：みらくらぱーく！': {
    heartBoost_MiraCraPark_stage: {
      text: [
        'このステージ中、みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'heartBoost',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
    heartBoost_MiraCraPark_limit3: {
      text: [
        '3回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'heartBoost',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
  },
  'ハートブースト：ドレス': {
    'heartBoost-dress_01': {
      text: [
        '次のドレスカード使用によるスキルハート獲得効果の獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'heartBoost',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
  },
  ハートゲイン: {
    heartGain_1: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにAPを1回復する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.AP_GAIN],
      },
    },
    heartGain_3: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにAPを3回復する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  ハイアトラクト: {
    highAttract_stage: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が6以上の時APを1回復する。',
      ],
      detail: {
        attr: 'high',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  ハイボルテージ: {
    highVoltage: {
      text: [
        'ボルテージPt.を+',
        'する。使用時のボルテージLv.が6以上だった時、さらにAPを1回復する。',
      ],
      detail: {
        attr: 'high',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.AP_GAIN],
      },
    },
    highVoltage_ver2: {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLv.が6以上の時APを1回復する。',
      ],
      detail: {
        attr: 'high',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.AP_GAIN],
      },
    },
    highVoltage_heartCaptcha: {
      text: [
        'ボルテージPt.を+',
        'する。使用時のボルテージLv.が6以上の時、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'high',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  チアフルハート: {
    cheerfulHeart_over75_APGain: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが75%以上のとき、APを1回復する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.AP_GAIN],
      },
    },
    cheerfulHeart_over75_heartCaptcha: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが75%以上のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    cheerfulHeart_over100_heartCaptcha: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが100%以上のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    cheerfulHeart_over75_heartCaptcha_over100_heartCaptcha: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが75%以上のとき、ビートハート',
        '回分のスキルハートを獲得し、メンタルが100%以上のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  チアフルアトラクト: {
    cheerfulAttract_over100_sectionAttract: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにメンタルが100%以上のとき、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    cheerfulAttract_APGain_over75: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにメンタルが75%以上のとき、APを1回復する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE, SKILL_DETAIL.AP_GAIN],
      },
    },
    cheerfulAttract_loveAttract_over50: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにメンタルが50%以上のとき、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
    cheerfulAttract_over75_stageAttract_over100_stageAttract: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにメンタルが75%以上のとき、このステージ中、獲得するLOVEを+',
        'し、メンタルが100%以上のとき、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
  },
  チアフルアトラクション: {
    cheerfulAttraction_over75_section: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが75%以上のとき、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    cheerfulAttraction_over100_stage: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが100%以上のとき、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    'cheerfulAttraction-sectionAttract-over50_heart-over75_heart-over100_heart':
      {
        text: [
          'ビートハート',
          '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
          '%する。メンタルが50%以上のとき、ビートハート',
          '回分のスキルハートを追加で獲得、メンタルが75%以上のとき、ビートハート',
          '回分のスキルハートを追加で獲得、メンタルが100%以上のとき、ビートハート',
          '回分のスキルハートをさらに追加で獲得する。',
        ],
        detail: {
          attr: 'cheerful',
          type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
        },
      },
  },
  チアフルボルテージ: {
    cheerfulVoltage_voltageGain: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルが50%以上のとき、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
    cheerfulVoltage_voltageGain_over75_over100: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルが75%以上のとき、ボルテージPt.を+',
        'し、メンタルが100％以上のとき、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
    cheerfulVoltage_heartCaptcha: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルが75%以上のとき、ビートハート',
        '個分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  チアフルボルテージブースト: {
    cheerfulVoltageBoost_01: {
      text: [
        'メンタルが100%以上のとき、8回の間ボルテージゲイン効果を+',
        '%する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.BOOST_VOLTAGE_GAIN],
      },
    },
  },
  チアフルリカバー: {
    cheerfulRecover_upper75_APGain: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにメンタルが75%以上のとき、APを2回復する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.AP_GAIN],
      },
    },
    cheerfulRecover_upper100_stageProtect: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにメンタルが100%以上のとき、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  チアフルリカバーハート: {
    'cheerfulRecoverHeart-over50_recover-over100_heartCaptcha': {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。メンタルが50%以上のとき、メンタルを最大値の',
        '%回復させ、メンタルが100%以上のとき、ビートハート',
        '回分のスキルハートを追加で獲得する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  チアフルリカバープロテクト: {
    cheerfulRecover_upper100_stageProtect: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにメンタルが100%以上のとき、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  チアフルプロテクト: {
    cheerfulProtect_loveAttract: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにメンタルが75%以上のとき、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.PROTECT_STAGE, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
  },
  チアフルリゲイン: {
    cheerfulRegain: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルが50%以上のとき、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  チアフルリゲインエクステンド: {
    cheerfulRegainExtend_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引き、ボルテージPt.を+',
        'する。さらにメンタルが100%のとき、このセクション中、手札の上限枚数を1枚増加する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.EXTEND_HAND,
        ],
      },
    },
  },
  チアフルヒーリング: {
    cheerfulHealing: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにメンタルが75%以上のとき、ビートハート',
        '個分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  チアフルサポート: {
    cheerfulSupport_over75_section: {
      text: [
        'メンタルを最大値の',
        '%回復する。さらにメンタルが75%以上のとき、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    cheerfulSupport_over75_stage: {
      text: [
        'メンタルを最大値の',
        '%回復する。さらにメンタルが75%以上のとき、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
    cheerfulSupport_over75_section_over100: {
      text: [
        'メンタルを最大値の',
        '%回復する。さらにメンタルが75%以上のとき、このセクション中、獲得するLOVEを+',
        '%し、メンタルが100％以上のとき、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'cheerful',
        type: [
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  チアフルエンデュランス: {
    cheerfulEndurance_over75: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルが75%以上のとき、メンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  チアフルイニシエイト: {
    cheerfulInitiate: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルが75%以上のとき、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  チアフルファッシネイト: {
    cheerfulFascinate_section_over75: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにメンタルが75%以上のとき、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
    cheerfulFascinate_stage_over50: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにメンタルが50%以上のとき、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  チアフルブースト: {
    cheerfulBoost: {
      text: [
        '次に使用するスキルハート獲得効果による獲得数を+',
        '%する。さらにメンタルが50%以上のとき、次に使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
  },
  'チアフルブースト：みらくらぱーく！': {
    'cheerfulBoost-miraCraPark_01': {
      text: [
        '3回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
        '%する。さらにメンタルが100%のとき、3回の間みらくらぱーく！のメンバーが使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  チアフルハートブースト: {
    cheerfulHeartBoost_over100_boost_heartCaptcha: {
      text: [
        '次に使用するスキルハート獲得効果による獲得数を+',
        '%する。さらにメンタルが100%以上のとき、3回の間スキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
  },
  チアフルワイドエクステンド: {
    cheerfulWideExtend_01: {
      text: [
        'このステージ中、手札の上限枚数を2枚増加する。さらにメンタルが100%のとき、このステージ中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.EXTEND_HAND, SKILL_DETAIL.HEART_LIMIT_UP],
      },
    },
  },
  チアフルブーステッドハート: {
    cheerfulBoostedHeart_01: {
      text: [
        'このステージ中、ハート上限を+',
        'し、メンタルが100%のとき、3回の間ラブアトラクト効果を+',
        '%、ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルを最大値の8%減少させる。',
      ],
      detail: {
        attr: 'cheerful',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  チアフルリカバーバイブス: {
    cheerfulRecoverVibes_01: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにメンタルが100%のとき、このセクション中、ビートハートの出現個数を+',
        'する。',
      ],
      detail: {
        attr: 'cheerful',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.VIBES_SECTION],
      },
    },
  },
  フルネスエクステハート: {
    fulnessExtensionHeart_add3_over8_over75: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加する。さらにボルテージLv.が8以上かつメンタルが75%以上のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'fulness',
        type: [SKILL_DETAIL.EXTEND_HAND, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  フルネスエクステボルテージ: {
    fulnessExtensionVoltage_add2_over5_over50: {
      text: [
        'このセクション中、手札の上限枚数を2枚増加する。さらにボルテージLv.が5以上かつメンタルが50%以上のとき、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'fulness',
        type: [SKILL_DETAIL.EXTEND_HAND, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  フルネスエクステプロテクト: {
    fulnessExtensionProtect_add3_over8_over75: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加する。さらにボルテージLv.が8以上かつメンタルが75%以上のとき、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'fulness',
        type: [SKILL_DETAIL.EXTEND_HAND, SKILL_DETAIL.PROTECT_SECTION],
      },
    },
  },
  アグレッシブハート: {
    aggressiveHeart_mentalReduce10: {
      text: [
        'ビートハート',
        '個分のスキルハートを獲得する。さらにメンタルを最大値の10%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.MENTAL_REDUCE],
      },
    },
    aggressiveHeart_mentalReduce15: {
      text: [
        'ビートハート',
        '個分のスキルハートを獲得する。さらにメンタルを最大値の15%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.MENTAL_REDUCE],
      },
    },
  },
  アグレッシブアトラクト: {
    aggressiveAttract_mentalReduce15_section: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにメンタルを最大値の15%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION, SKILL_DETAIL.MENTAL_REDUCE],
      },
    },
    aggressiveAttract_mentalReduce25_stage: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%し、メンタルを最大値の25％減少させる。さらにデッキにあるメイン効果がメンタル回復効果のスキルの消費AP-2。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.MENTAL_REDUCE,
          SKILL_DETAIL.AP_REDUCE,
        ],
      },
    },
  },
  アグレッシブアトラクション: {
    aggressiveAttraction25_sectionAttract: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。さらにメンタルを最大値の25%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  アグレッシブボルテージ: {
    aggressiveVoltage_mentalReduce15: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルを最大値の15%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.MENTAL_REDUCE],
      },
    },
  },
  アグレッシブリゲイン: {
    aggressiveRegain10_stageAttract: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、獲得するLOVEを+',
        '%し、メンタルを最大値の10%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  アグレッシブアトラクトブースト: {
    aggressiveAttractBoost: {
      text: [
        '5回の間ラブアトラクト効果を+',
        '%する。さらにメンタルを最大値の25%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [SKILL_DETAIL.BOOST_LOVE_ATTRACT, SKILL_DETAIL.MENTAL_REDUCE],
      },
    },
    aggressiveAttractBoost_mentalReduce3: {
      text: [
        '次に使用するラブアトラクト効果を+',
        '%する。さらにメンタルを最大値の3%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [SKILL_DETAIL.BOOST_LOVE_ATTRACT, SKILL_DETAIL.MENTAL_REDUCE],
      },
    },
    aggressiveAttractBoost_mentalReduce10: {
      text: [
        '2回の間ラブアトラクト効果を+',
        '%する。さらにメンタルを最大値の10%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [SKILL_DETAIL.BOOST_LOVE_ATTRACT, SKILL_DETAIL.MENTAL_REDUCE],
      },
    },
  },
  アグレッシブプロテクトブースト: {
    aggressiveProtectBoost: {
      text: [
        '5回の間スキルハート獲得効果による獲得数を+',
        '%し、メンタルを最大値の5%減少させる。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'aggressive',
        type: [SKILL_DETAIL.BOOST_LOVE_ATTRACT, SKILL_DETAIL.MENTAL_REDUCE],
      },
    },
  },
  アグレッシブハートブースト: {
    aggressiveHeartBoost: {
      text: [
        '10回の間スキルハート獲得効果による獲得数を+',
        '%する。さらにメンタルを最大値の50%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA, SKILL_DETAIL.MENTAL_REDUCE],
      },
    },
  },
  アグレッシブリゲインボルテージ: {
    aggressiveRegainVoltage: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにボルテージPt.を+',
        'し、メンタルを最大値の25%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  アグレッシブビリーブハート: {
    aggressiveBelieveHeart: {
      text: [
        'このセクション中、メンタルが0になってもメンタルダウンしなくなる。さらにビートハート',
        '回分のスキルハートを獲得し、メンタルを最大値の75%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
    aggressiveBelieveHeart_reduce100: {
      text: [
        'このセクション中、メンタルが0になってもメンタルダウンしなくなり、ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルを最大値の100%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  アグレッシブエクステビリーフ: {
    aggressiveExtensionBelief_01: {
      text: [
        'このセクション中、メンタルが0になってもメンタルダウンしなくなり、メンタルを最大値の100%減少させる。さらにこのセクション中、手札の上限枚数を3枚増加、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.MENTAL_REDUCE,
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
  },
  'アグレッシブブースト：DOLLCHESTRA': {
    aggressiveBoost_dollchestra: {
      text: [
        '10回の間DOLLCHESTRAのメンバーが使用するラブアトラクト効果を+',
        '%、スキルハート獲得効果による獲得数を+',
        'する。さらにメンタルを最大値の99%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  アグレッシブブレイブハート: {
    aggressiveBraveHeart: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、メンタルを最大値の15％減少させる。さらにメンタル5%以下のときビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'aggressive',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.MENTAL_REDUCE],
      },
    },
    aggressiveBraveHeart_under1_under0: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルが1%以下のとき、このステージ中、獲得するLOVEを+',
        '%する。メンタルが0%のとき、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
        ],
      },
    },
  },
  アグレッシブブレイブアトラクション: {
    aggressiveBraveAttraction_minus15_under5: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%し、メンタルを最大値の15％減少させる。さらにメンタル5%以下のときビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.MENTAL_REDUCE,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  アグレッシブブレイブファッシネイト: {
    aggressiveBraveFascinate10_section: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。メンタルを最大値の25%減少させる。さらにメンタルが10%以下のとき、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.MENTAL_REDUCE,
          SKILL_DETAIL.VOLTAGE_GAIN,
        ],
      },
    },
  },
  'アグレッシブブレイブブーステッドアトラクト：DOLLCHESTRA': {
    aggressiveBraveBoostedAttract_dollchestra: {
      text: [
        '3回の間DOLLCHESTRAのメンバーが使用するラブアトラクト効果を+',
        '%し、メンタルを最大値の10%減少させる。さらにメンタルが1%以下のとき、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.MENTAL_REDUCE,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
  },
  アグレッシブエクステプロテクト: {
    aggressiveExtendProtect_stage: {
      text: [
        'このステージ中、手札の上限枚数を2枚増加し、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにメンタルを最大値の50%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  アグレッシブプロテクション: {
    aggressiveProtection_stage: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにメンタルを最大値の5%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [SKILL_DETAIL.PROTECT_STAGE, SKILL_DETAIL.MENTAL_REDUCE],
      },
    },
  },
  アグレッシブビリーフブースト: {
    aggressiveBeliefBoost: {
      text: [
        'このセクション中、メンタルが0になってもメンタルダウンしなくなる。さらにこのステージ中、10回の間スキルハート獲得効果による獲得数を+',
        '%する。またメンタルを最大値の50%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
    aggressiveBeliefBoost_heatUp_minus100: {
      text: [
        'このセクション中、メンタルが0になってもメンタルダウンしなくなり、AP回復速度を+',
        '%する。さらにメンタルを最大値の100%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  アグレッシブビリーフボルテージ: {
    aggressiveBeliefVoltage: {
      text: [
        'このセクション中、メンタルが0になってもメンタルダウンしなくなる。さらにボルテージPt.を+',
        'し、メンタルを最大値の50%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  アグレッシブビリーフプロテクト: {
    'aggressiveBeliefProtect-mentalMinus50': {
      text: [
        'このセクション中、メンタルが0になってもメンタルダウンしなくなり、メンタルを最大値の50%減少させる。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.MENTAL_REDUCE,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  アグレッシブワイドビリーフ: {
    aggressiveWideBelief_01: {
      text: [
        'このセクション中、メンタルが0になってもメンタルダウンしなくなる。さらにこのステージ中、ハート上限を+',
        'し、メンタルを最大値の100%減少させる。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  アグレッシブブーステッドボルテージ: {
    aggressiveBoostedVoltage_01: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルを最大値の15％減少させ、メンタルが1%以下のとき、次にさやかが使用するボルテージゲイン効果を+',
        '%する。',
      ],
      detail: {
        attr: 'aggressive',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MENTAL_REDUCE,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
        ],
      },
    },
  },
  アグレッシブグルーヴィブースト: {
    aggressiveGroovyBoost_01: {
      text: [
        '2回の間ラブアトラクト効果を+',
        '%し、メンタルを最大値の10％減少させる。さらにボルテージLv.が20以上のとき、2回の間ラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'aggressive',
        type: [SKILL_DETAIL.BOOST_LOVE_ATTRACT, SKILL_DETAIL.MENTAL_REDUCE],
      },
    },
  },
  アトラクトゲイン: {
    attractGain: {
      text: ['このステージ中、獲得するLOVEを+', '%する。さらにAPを3回復する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE, SKILL_DETAIL.AP_GAIN],
      },
    },
    'attractGain-stageAttract-APGain7': {
      text: ['このステージ中、獲得するLOVEを+', '%する。さらにAPを7回復する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  アトラクトブースト: {
    attractBoost1: {
      text: ['次に使用するラブアトラクト効果を+', '%する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.BOOST_LOVE_ATTRACT],
      },
    },
    attractBoost2: {
      text: ['2回の間ラブアトラクト効果を+', '%する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.BOOST_LOVE_ATTRACT],
      },
    },
  },
  'アトラクトブースト：みらくらぱーく！': {
    attractBoost_MiraCraPark: {
      text: [
        '次にみらくらぱーく！のメンバーが使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.BOOST_LOVE_ATTRACT],
      },
    },
  },
  リゲインボルテージ: {
    regainVoltage: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'regain',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  リゲインリカバー: {
    regainRecover: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: 'regain',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  リゲインアトラクト: {
    regainAttract_section: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'regain',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    regainAttract_stage: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'regain',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
  },
  リゲインファッシネイト: {
    regainFascinate_stage: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにステージ中、獲得LOVEを+',
        '%し、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.VOLTAGE_GAIN,
        ],
      },
    },
  },
  リゲインエクステンド: {
    regainExtend_stage1: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにステージ中、手札の上限枚数を1枚増加し、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'regain',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.VOLTAGE_GAIN,
        ],
      },
    },
  },
  リゲインエクステアトラクト: {
    regainExtendAttract_section4: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのセクション中、手札の上限枚数を4枚増加し、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'regain',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.VOLTAGE_GAIN,
        ],
      },
    },
  },
  リゲインバブリング: {
    regainBubbling: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引き、ボルテージPt.を+',
        'する。さらにバブルカードを1種類(合計2枚)山札に追加する。',
      ],
      detail: {
        attr: 'regain',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.ADD_CARD,
        ],
      },
    },
  },
  リゲインチェンジ: {
    regainChange: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引き、ボルテージPt.を+',
        'する。さらに姫芽の《イグニッションモード》の状態を切り替える。',
      ],
      detail: {
        attr: 'regain',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MODE_CHANGE,
        ],
      },
    },
  },
  エクステハート: {
    extensionsHeart_section3: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加する。さらにビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'extensions',
        type: [SKILL_DETAIL.EXTENSIONS_SECTION, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    extensionsHeart_stage1: {
      text: [
        'このステージ中、手札の上限枚数を1枚増加する。さらにビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'extensions',
        type: [SKILL_DETAIL.EXTENSIONS_STAGE, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  エクステハートブースト: {
    extensions_section3_heartBoost_stage: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加する。さらにこのステージ中、10回の間スキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
  },
  エクステハートチェンジ: {
    'extendHeartChange-add3': {
      text: [
        'このセクション中、手札の上限枚数を3枚増加し、ビートハート',
        '回分のスキルハートを獲得する。さらに姫芽の《イグニッションモード》の状態を切り替える。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.MODE_CHANGE,
        ],
      },
    },
  },
  エクステアトラクト: {
    extensions1_stageAttract_section: {
      text: [
        'このセクション中、手札の上限枚数を1枚増加する。さらにこのステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
        ],
      },
    },
    extensions2_stageAttract_section: {
      text: [
        'このセクション中、手札の上限枚数を2枚増加する。さらにこのステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
        ],
      },
    },
    extensions3_stageAttract_section: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加する。さらにこのステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
        ],
      },
    },
    extensions4_stageAttract_section: {
      text: [
        'このセクション中、手札の上限枚数を4枚増加する。さらにこのセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
    extensions1_stageAttract_stage: {
      text: [
        'このステージ中、手札の上限枚数を1枚増加する。さらにこのステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'extensions',
        type: [SKILL_DETAIL.EXTENSIONS_STAGE, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
    extensions1_sectionAttract_section: {
      text: [
        'このセクション中、手札の上限枚数を1枚増加する。さらにこのセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
    extensions3_sectionAttract_section: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加する。さらにこのセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
    extensionsAttract_08: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにこのセクション中、手札の上限枚数を2枚増加する。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.EXTENSIONS_SECTION,
        ],
      },
    },
  },
  エクステボルテージ: {
    extensions2_voltage_section: {
      text: [
        'このセクション中、手札の上限枚数を2枚増加する。さらにボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'extensions',
        type: [SKILL_DETAIL.EXTENSIONS_SECTION, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
    extensions3_voltage_section: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加する。さらにボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'extensions',
        type: [SKILL_DETAIL.EXTENSIONS_SECTION, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
    extensions1_voltage_stage: {
      text: [
        'このステージ中、手札の上限枚数を1枚増加する。さらにボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'extensions',
        type: [SKILL_DETAIL.EXTENSIONS_STAGE, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
    extensions2_voltage_stage: {
      text: [
        'このステージ中、手札の上限枚数を2枚増加する。さらにボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'extensions',
        type: [SKILL_DETAIL.EXTENSIONS_STAGE, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  エクステプロテクト: {
    extensions1_protect: {
      text: [
        'このステージ中、手札の上限枚数を1枚追加する。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'extensions',
        type: [SKILL_DETAIL.EXTENSIONS_STAGE, SKILL_DETAIL.PROTECT_STAGE],
      },
    },
    extensions3_protect: {
      text: [
        'このセクション中、手札の上限枚数を3枚追加する。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'extensions',
        type: [SKILL_DETAIL.EXTENSIONS_SECTION, SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  エクステプロテクトヒート: {
    extensions3_protect_heat: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加し、AP回復速度を+5%する。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  エクステリカバー: {
    extensions3_recover_section: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加する。さらにメンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: 'extensions',
        type: [SKILL_DETAIL.EXTENSIONS_SECTION, SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  エクステリカバーヒート: {
    extensions3_recover_heat_section: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加し、AP回復速度を+5%する。さらにメンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.MENTAL_RECOVER,
        ],
      },
    },
  },
  エクステメンター: {
    extensionsMentor: {
      text: [
        '姫芽の《イグニッションモード》の状態を切り替える。さらにこのステージ中、手札の上限を1枚増加し、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.MODE_CHANGE,
          SKILL_DETAIL.EXTENSIONS_STAGE,
          SKILL_DETAIL.MENTAL_RECOVER,
        ],
      },
    },
  },
  エクステブーステッドヒート: {
    'extensions_stage-boost_heartCaptcha-heatUp_section': {
      text: [
        'このステージ中、手札の上限を1枚追加し、次に使用するスキルハート獲得効果による獲得数を+',
        '%する。さらにこのセクション中、AP回復速度を+5%する。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.EXTENSIONS_STAGE,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.AP_QUICK,
        ],
      },
    },
    'extensions_stage-boost_loveAttract-heatUp_section': {
      text: [
        'このステージ中、手札の上限を1枚追加し、次に使用するラブアトラクト効果を+',
        '%する。さらにこのセクション中、AP回復速度を+5%する。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.EXTENSIONS_STAGE,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.AP_QUICK,
        ],
      },
    },
  },
  エクステボルテージダック: {
    duck_extensions2_voltage_stage: {
      text: [
        'このステージ中、手札の上限枚数を2枚増加する。さらにボルテージPt.を+',
        'し、トリカゴカードを1種類(合計1枚)山札に追加する。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.EXTENSIONS_STAGE,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.ADD_CARD,
        ],
      },
    },
  },
  エクステゲイン: {
    extensionsGain_add3: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加する。さらにAPを',
        '回復する。',
      ],
      detail: {
        attr: 'extensions',
        type: [SKILL_DETAIL.EXTENSIONS_SECTION, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  エクステヒート: {
    extensionHeat_01: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加する。さらにこのセクション中、AP回復速度を+',
        '%する。',
      ],
      detail: {
        attr: 'extensions',
        type: [SKILL_DETAIL.EXTENSIONS_SECTION, SKILL_DETAIL.AP_QUICK],
      },
    },
  },
  エクステアトラクトブースト: {
    extendAttractBoost: {
      text: [
        'このステージ中、手札の上限枚数を2枚増加する。さらに次に使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.EXTEND_HAND, SKILL_DETAIL.BOOST_LOVE_ATTRACT],
      },
    },
  },
  エクステヒートゲイン: {
    extensionHeatGain_01: {
      text: [
        'このステージ中、手札の上限枚数を1枚増加し、AP回復速度を+',
        '%する。さらにAPを',
        '回復する。',
      ],
      detail: {
        attr: 'extensions',
        type: [
          SKILL_DETAIL.EXTENSIONS_STAGE,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  エクステスケルツォアンビエンス: {
    extensionScherzoAmbience_01: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加する。さらにこのセクション中、ムードがハッピーのときメロウ方向に、メロウのときハッピー方向に+',
        'する。',
      ],
      detail: {
        attr: 'extensions',
        type: [SKILL_DETAIL.EXTENSIONS_SECTION, SKILL_DETAIL.AMBIENCE_SECTION],
      },
    },
  },
  エクステメロウバイブス: {
    extensionMellowVibes_01: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加し、ムード値をメロウ方向に+',
        'する。さらにムードがメロウ100のとき、このセクション中、ビートハートの出現個数を+2する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.AMBIENCE_SECTION,
          SKILL_DETAIL.VIBES_SECTION,
        ],
      },
    },
  },
  エクステリテイクワイド: {
    extensionRetakeWide_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのセクション中、手札の上限枚数を2枚増加し、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  エクステリブートボルテージ: {
    extensionRebootVoltage_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのセクション中、手札の上限枚数を2枚増加し、次に使用するボルテージゲイン効果を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
        ],
      },
    },
  },
  エクステリフレッシュヒート: {
    extensionRefreshHeat_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのセクション中、手札の上限枚数を2枚増加し、AP回復速度を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.AP_QUICK,
        ],
      },
    },
  },
  エクステリフレッシュゲイン: {
    extensionRefreshGain_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのセクション中、手札の上限枚数を3枚増加し、APを',
        '回復する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  ファッシネイション: {
    fascination: {
      text: [
        'ボルテージPt.を+',
        'し、このセクション中、獲得するLOVEを+',
        '%する。さらにこのステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'fascination',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
    fascination_voltageGain: {
      text: [
        'ボルテージPt.を+',
        'する。さらにこのステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'fascination',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
    fascination_section: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'fascination',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
    fascination_stage: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'fascination',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
    fascination_stageAttract_stageProtect: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにボルテージPt.を+',
        'し、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'fascination',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  リプレイアトラクション: {
    replayAttraction_section: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'replay',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
  },
  サポーテッドフィール: {
    supportedFeel_section: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにこのセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'feel',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    supportedFeel_stage: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにこのステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'feel',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
    supportedFeel_sectionAttract_mentalRecover: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。メンタルを最大値の',
        '%回復させる。さらに',
      ],
      detail: {
        attr: 'feel',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION, SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
    supportedFeel_stageAttract_mentalRecover: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにメンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: 'feel',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE, SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  プロテクトフィール: {
    protectFeel_APreduce: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%のメンタルダメージを無効にし、獲得するLOVEを+',
        '%する。さらにAPを5回復する。',
      ],
      detail: {
        attr: 'feel',
        type: [
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
    protectFeel_sectionAttract: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにこのセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'feel',
        type: [SKILL_DETAIL.PROTECT_STAGE, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    protectFeel_stageAttract: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにこのステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'feel',
        type: [SKILL_DETAIL.PROTECT_STAGE, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
    protectFeel_sectionAttract_stageProtect: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'feel',
        type: [SKILL_DETAIL.PROTECT_STAGE, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
    protectFeel_stageAttract_stageProtect: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'feel',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE, SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  プロテクトゲイン: {
    protectGain: {
      text: [
        'このステージ中、メンタルの最大値の',
        '分のメンタルダメージを無効にする。さらにAPを+5する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.PROTECT_STAGE, SKILL_DETAIL.AP_GAIN],
      },
    },
    'protectGain-AP9': {
      text: [
        'このステージ中、メンタルの最大値の',
        '分のメンタルダメージを無効にする。さらにAPを9回復する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.PROTECT_STAGE, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  プロテクトヒート: {
    protectHeat_01: {
      text: [
        'このステージ中、AP回復速度を+',
        '%する。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'protect',
        type: [SKILL_DETAIL.AP_QUICK, SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  インヴォケーション: {
    invocation: {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLvが6以下の場合、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'invocation',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
  },
  ボルテージハート: {
    voltageHeart: {
      text: [
        'ボルテージPt.を+',
        'する。さらにビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    voltageHeart_voltageGain_heartCaptcha: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  リカバーサポート: {
    recoverSupport_01: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにデッキ内の梢のスキルの消費AP-6。',
      ],
      detail: {
        attr: 'recover',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.AP_REDUCE],
      },
    },
  },
  リカバーアトラクション: {
    recoverAttraction_section: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらに、ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'recover',
        type: [
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
  },
  リカバーゲイン: {
    recoverGain_gain5: {
      text: ['メンタルを最大値の', '%回復させる。さらにAPを+5する。'],
      detail: {
        attr: 'recover',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.AP_GAIN],
      },
    },
    recoverGain_gain3: {
      text: ['メンタルを最大値の', '%回復させる。さらにAPを+3する。'],
      detail: {
        attr: 'recover',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  チルアトラクト: {
    chillAttract_under3_section: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が3以下の時このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    chillAttract_under3_stage: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が3以下の時このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
  },
  チルアトラクトゲイン: {
    chillAttractGain_01: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が3以下の時このステージ中、獲得するLOVEを+',
        '%し、APを5回復する。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  チルボルテージ: {
    chillVoltage_under1: {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLv.が1以下の時ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
    chillVoltage_under3: {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLv.が3以下の時ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
    chillVoltage_under5: {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLv.が5以下の時ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
    chillVoltage_under5_heartCaptcha: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにボルテージLv.が5以下の時ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  チルボルテージゲイン: {
    chillVoltageGain_01: {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLv.が3以下の時ボルテージPt.を+',
        'し、APを5回復する。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  チルプロテクト: {
    chillProtect_under3_stageProtect: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにボルテージLv.が3以下の時このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.PROTECT_STAGE],
      },
    },
    chillProtect_under5_stageProtect: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにボルテージLv.が5以下の時このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  チルプロテクトゲイン: {
    chillProtectGain_01: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにボルテージLv.が3以下の時このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にし、APを5回復する。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.PROTECT_STAGE, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  チルファッシネイト: {
    chillFascinate_under3_voltageGain_stageAttract_APGain: {
      text: [
        'ボルテージPt.を+',
        'し、このステージ中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が3以下の時APを5回復する。',
      ],
      detail: {
        attr: 'chill',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
    chillFascinate_under2_stageAttract_voltageGain: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が2以下の時ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
    chillFascinate_under5_stageAttract_voltageGain: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が5以下の時ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  チルエンデュランス: {
    chillEndurance_mentalRecover_under5_voltageGain: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにボルテージLv.が5以下の時ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  チルフィール: {
    chillFeel_mentalRecover_under2_stageAttract: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにボルテージLv.が2以下の時このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'chill',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
  },
  グルーヴィアトラクト: {
    groovyAttract_stage_over8_sectionAttract: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が8以上の時このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'groovy',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
    groovyAttract_stage_over6_stageAttract: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が6以上の時このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
    groovyAttract_section_over6_sectionAttract: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が6以上の時このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    groovyAttract_stage_over10_stageAttract: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が10以上の時このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
  },
  グルーヴィアトラクション: {
    groovyAttraction_section_over10_heartCaptcha: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が10以上の時ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    groovyAttraction_section_over8_heartCaptcha: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が8以上の時ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    groovyAttraction_stage_over8_heartCaptcha: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が8以上の時ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    groovyAttraction_over8_heartCaptcha_sectionAttract: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにボルテージLv.が8以上の時このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    groovyAttraction_section_over10_heartCaptcha_sectionAttract: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにボルテージLv.が10以上の時このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
  },
  グルーヴィハート: {
    groovyHeart_over8_heartCaptcha_mentalRecover: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにボルテージLv.が8以上の時メンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
    groovyHeart_over8_heartCaptcha: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにボルテージLv.が8以上の時ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    groovyHeart_over8_voltageGain_heartCaptcha: {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLv.が8以上の時ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    groovyHeart_over10_voltageGain_heartCaptcha: {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLv.が10以上の時ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    groovyHeart_over8_mentalRecover_heartCaptcha: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにボルテージLv.が8以上の時ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  グルーヴィハートゲイン: {
    'groovyHeartGain-over8_voltage-gain7': {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにボルテージLv.が8以上の時、APを7回復する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  グルーヴィボルテージ: {
    groovyVoltage_over8_voltageGain_heartCaptcha: {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLv.が8以上の時ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    'groovyVoltage-voltageOver8_heartCaptcha-voltageOver10_heartCaptcha': {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLv.が8以上の時ビートハート',
        '回分のスキルハートを獲得し、ボルテージLv.が10以上の時ビートハート',
        '回分のスキルハートを追加で獲得する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  グルーヴィリカバー: {
    groovyRecover_over8_mentalRecover: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにボルテージLv.が8以上の時メンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
    'groovyRecover-voltageOver8_mentalRecover-voltageOver10_mentalRecover': {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにボルテージLv.が8以上の時メンタルを最大値の',
        '%回復させさせ、ボルテージLv.が10以上の時メンタルを最大値の',
        '%追加で回復させる。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  グルーヴィブースト: {
    groovyBoost_over10_stageAttract_boost: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が10以上の時次に使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'groovy',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
    groovyBoost_over10_boost_heartCaptcha: {
      text: [
        '次に使用するスキルハート獲得効果による獲得数を+',
        '%する。さらにボルテージLv.が10以上の時ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  グルーヴィイニシアチブ: {
    groovyInitiative_over8_voltageGain_protect: {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLv.が8以上の時このステージ中、メンタルを最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  グルーヴィファッシネイト: {
    groovyFascinate_over8_voltageGain_sectionAttract: {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLv.が8以上の時このセクション中、獲得するLOVEを+',
        'する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    groovyFascinate_over10_voltageGain_sectionAttract: {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLv.が10以上の時このセクション中、獲得するLOVEを+',
        'する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
  },
  グルーヴィフィール: {
    groovyFeel_stage_over10_sectionAttract: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにボルテージLv.が10以上の時このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.PROTECT_STAGE, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
  },
  グルーヴィヒート: {
    groovyHeat_section_over10: {
      text: [
        'このセクション中、AP回復速度を+5%する。さらにボルテージLv.が10以上の時このステージ中、5回の間スキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.AP_QUICK, SKILL_DETAIL.BOOST_LOVE_ATTRACT],
      },
    },
  },
  グルーヴィヒートバイブス: {
    groovyHeatVibes_01: {
      text: [
        'このセクション中、AP回復速度を+',
        '%する。さらにボルテージLv.10以上のとき、このセクション中、ビートハートの出現個数を+2する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.AP_QUICK, SKILL_DETAIL.VIBES_SECTION],
      },
    },
  },
  グルーヴィボルテックスハート: {
    'groovyVortexHeart-over5_voltageGain-over10_heartCaptcha': {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。ボルテージLv.が5以上の時、ボルテージPt.を+',
        'し、ボルテージLv.が10以上の時、ビートハート',
        '回分のスキルハートを追加で獲得する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  グルーヴィボルテックスビリーフ: {
    'groovyVortexBelief-over8_vol': {
      text: [
        'ボルテージLv.を+',
        'する。さらにボルテージLv.が8以上の時、このセクション中、メンタルが0になってもメンタルダウンしなくなる。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.MENTAL_DOWN_SECTION],
      },
    },
  },
  グルーヴィブーステッドアトラクト: {
    groovyBoostedAttract_01: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにボルテージLv.が10以上のとき、次に使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.BOOST_LOVE_ATTRACT],
      },
    },
  },
  グルーヴィブーステッドボルテージハート: {
    'groovyBoostedVoltageHeart-over10_attract': {
      text: [
        'ボルテージPt.を+',
        'し、ビートハート',
        '回分のスキルハートを獲得する。さらにボルテージLv.が10以上の時、次に慈が使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'groovy',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  グルーヴィブーステッドチェンジ: {
    'groovyBoostedChange-over8_attract': {
      text: [
        '姫芽の《イグニッションモード》の状態を切り替える。さらにボルテージLv.が8以上の時、次に使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.MODE_CHANGE, SKILL_DETAIL.BOOST_LOVE_ATTRACT],
      },
    },
  },
  グルーヴィチェンジハート: {
    'groovyChangeHeart-over8_vol-over10_vol': {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、姫芽の《イグニッションモード》の状態を切り替える。さらにボルテージLv.が8以上の時、ビートハート',
        '回分のスキルハートを追加で獲得し、ボルテージLv.が10以上の時、ビートハート',
        '回分のスキルハートを追加で獲得する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.MODE_CHANGE],
      },
    },
  },
  グルーヴィアンビエンスゲイン: {
    groovyAmbienceGain_01: {
      text: [
        'ムードがハッピー、メロウいずれかのとき、このセクション中、ムード値を+',
        'する。さらにボルテージLv.が10以上の時、APを',
        '回復する。',
      ],
      detail: {
        attr: 'groovy',
        type: [
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.AMBIENCE_SECTION,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  グルーヴィシグニャル: {
    groovySignyal_01: {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLv.4以上の時、このセクション中、手札の上限枚数を2枚増加、ボルテージLv.8以上の時、4回の間瑠璃乃が使用するボルテージゲイン効果を+',
        '%、ボルテージLv.16以上の時、手札を全て捨てて、デッキから手札上限までスキルを引き、ボルテージLv.32以上の時、このステージ中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: 'groovy',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
    groovySignyal_02: {
      text: [
        'ボルテージPt.を+',
        'する。さらにボルテージLv.4以上の時、このセクション中、AP回復速度を+',
        '%、ボルテージLv.8以上の時、4回の間瑠璃乃が使用するボルテージゲイン効果を+',
        '%、ボルテージLv.16以上の時、手札を全て捨てて、デッキから手札上限までスキルを引き、ボルテージLv.32以上の時、このステージ中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: 'groovy',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  グルーヴイグニッション: {
    grooveIgnition_01: {
      text: [
        '姫芽が《イグニッションモード》になった回数に応じてボルテージゲイン効果が発動する。',
      ],
      detail: {
        attr: 'groovy',
        type: [SKILL_DETAIL.MODE_CHANGE, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  スイッチボルテージ: {
    switchVoltage: {
      text: [
        'ボルテージLv.5以下の時ボルテージPt.を+',
        'する。ボルテージLv.が6以上の時ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'switch',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  スイッチアトラクション: {
    switchAttraction_basis5_stageAttract_heartCaptcha: {
      text: [
        'ボルテージLv.5以下の時このステージ中、獲得するLOVEを+',
        '%する。ボルテージLv.が6以上の時ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'switch',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
    switchAttraction_basis5_voltageGain_heartCaptcha_sectionAttract: {
      text: [
        'ボルテージLv.5以下の時ボルテージPt.を+',
        'する。ボルテージLv.が6以上の時ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'switch',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
  },
  スイッチプロテクト: {
    switchProtect: {
      text: [
        'メンタルが50%未満のとき、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。メンタルが50%以上のとき、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'switch',
        type: [SKILL_DETAIL.PROTECT_STAGE, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
  },
  カームハート: {
    calmHeart: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにボルテージPt.を-20する。',
      ],
      detail: {
        attr: 'calm',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.VOLTAGE_REDUCE],
      },
    },
  },
  カームアトラクト: {
    calmAttract30_sectionAttract: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにボルテージPt.を-30する。',
      ],
      detail: {
        attr: 'calm',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION, SKILL_DETAIL.VOLTAGE_REDUCE],
      },
    },
    calmAttract20_sectionExtensions2: {
      text: [
        'このセクション中、手札の上限枚数を2枚増加し、獲得するLOVEを+',
        '%する。さらにボルテージPt.を-20する。',
      ],
      detail: {
        attr: 'calm',
        type: [
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.VOLTAGE_REDUCE,
        ],
      },
    },
  },
  カームアトラクション: {
    calmAttraction20_heartCaptcha_stageAttract: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このステージ中、獲得するLOVEを+',
        '%する。さらにボルテージPt.を-20する。',
      ],
      detail: {
        attr: 'calm',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.VOLTAGE_REDUCE,
        ],
      },
    },
    calmAttraction30_heartCaptcha_sectionAttract: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。さらにボルテージPt.を-30する。',
      ],
      detail: {
        attr: 'calm',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.VOLTAGE_REDUCE,
        ],
      },
    },
  },
  カームブースト: {
    calmBoost20: {
      text: [
        '次に使用するスキルハート獲得効果による獲得数を+',
        '%する。さらにボルテージPt.を-20する。',
      ],
      detail: {
        attr: 'calm',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA, SKILL_DETAIL.VOLTAGE_REDUCE],
      },
    },
  },
  カームプロテクト: {
    calmProtect: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにボルテージPt.を-10する。',
      ],
      detail: {
        attr: 'calm',
        type: [SKILL_DETAIL.PROTECT_STAGE, SKILL_DETAIL.VOLTAGE_REDUCE],
      },
    },
  },
  ヒーリングハート: {
    healingHeart_recover_heart: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにビートハート',
        '個分のスキルハートを獲得する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    healingHeart_heart_recover: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  ラブキャブティベイト: {
    loveCaptivate: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにこのセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
  },
  エンデュランス: {
    endurance_APGain: {
      text: [
        'ボルテージPt.を+',
        'し、メンタルを最大値の',
        '%回復させる。さらにAPを1回復する。',
      ],
      detail: {
        attr: 'endurance',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.AP_GAIN],
      },
    },
    endurance_mentalVoltage: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'endurance',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
    endurance_voltageMental: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: 'endurance',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  ロープロテクト: {
    lowProtect: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにメンタルが30%以下のとき、メンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: 'low',
        type: [SKILL_DETAIL.PROTECT_STAGE, SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  イニシアチブ: {
    initiative: {
      text: [
        'ボルテージPt.を+',
        'する。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'initiative',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  クラッチリカバー: {
    clutchRecover: {
      text: [
        'メンタルが25%以上のとき、メンタルを最大値の',
        '%回復させる。メンタルが25%未満のとき、メンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: 'clutch',
        type: [SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  ボルテックスヒートハート: {
    vortexHeatHeart: {
      text: [
        'ボルテージPt.を+',
        'し、このセクション中、AP回復速度を+',
        '%する。さらにビートハート',
        '回分のスキルハートを3回獲得する。',
      ],
      detail: {
        attr: 'vortex',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  ボルテックスアトラクション: {
    vortexAttraction_section: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。さらにボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'vortex',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.VOLTAGE_GAIN,
        ],
      },
    },
    vortexAttraction_stage: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このステージ中、獲得するLOVEを+',
        '%する。さらにボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'vortex',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.VOLTAGE_GAIN,
        ],
      },
    },
  },
  ボルテックスゲイン: {
    'vortexGain-voltage-AP': {
      text: ['ボルテージPt.を+', 'する。さらにAPを9回復する。'],
      detail: {
        attr: 'vortex',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  ボルテックスシフト: {
    vortexShift: {
      text: [
        'このステージ中、ボルテージPt.を獲得する効果が発動した時、代わりに獲得するボルテージPt.の',
        '%の個数のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'vortex',
        type: [SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  クイックフォーム: {
    quickForm: {
      text: [
        'このステージ中、手札の上限枚数を1枚減少する。さらにこのステージ中、AP回復速度を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.CARD_REDUCE, SKILL_DETAIL.AP_QUICK],
      },
    },
  },
  オールマイトヒーリング: {
    allMightHealing: {
      text: [
        'このステージ中、メンタルが回復した時、回復量の',
        '%の個数のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'allMight',
        type: [SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  'Link! Like! Order!': {
    linklikeorder: {
      text: [
        'このステージ中、花帆/梢/さやか/綴理/瑠璃乃/慈のスキルを全員使用するたび、ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。さらにAPを回復する。消費APの合計に応じて効果量が変化する。各メンバーのスキルを重複した際、消費APの記録を上書きする。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.AP_GAIN,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
  },
  'Link! Like! Order! 9': {
    linklikeorder9: {
      text: [
        'このステージ中、吟子/花帆/梢/小鈴/さやか/綴理/姫芽/瑠璃乃/慈のスキルを全員使用するたび、このステージ中、手札の上限枚数を1枚増加、獲得するLOVEを+',
        '%し、AP回復速度を+27%する。消費APの合計に応じてアトラクト効果量が変化する。各メンバーのスキルを使用した際、消費APの記録を上書きする。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.AP_QUICK,
        ],
      },
    },
  },
  'KEY of Link！': {
    keyOfLink: {
      text: [
        'このステージ中、吟子/花帆/梢/小鈴/さやか/綴理/姫芽/瑠璃乃/慈のスキルを全員使用するたび、ビートハート',
        '回分のスキルハートを9回獲得する。消費APの合計に応じてハート獲得効果の効果量が変化する。各メンバーのスキルを重複した際、消費APの記録を上書きする。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  トリオフライト: {
    trioFlight_section: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。さらに手札を全て捨てて、デッキから手札上限までスキルを引く。',
      ],
      detail: {
        attr: 'trio',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.RESHUFFLE,
        ],
      },
    },
  },
  トライアングルライト: {
    triangleLight_stage: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%し、ボルテージPt.を+',
        'する。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'triangle',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  ブルーミングハート: {
    bloomingHeart: {
      text: [
        'このステージ中、メイン効果に獲得LOVE増加効果を持つスキルの消費AP-2。さらに2回の間ラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.AP_SLOW,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  ユースフルキャプチャ: {
    youthfulCaptcha: {
      text: [
        'このステージ中、ボルテージPt.が1秒ごとに25ptずつ減少し、スキル使用時にビートハート',
        '回分のスキルハートを獲得する。消費APに応じて効果量が変化する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.VOLTAGE_REDUCE],
      },
    },
  },
  デュオアトラクト: {
    duoAttract: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにこのセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
  },
  チャウチャウパーティ: {
    chowchowParty: {
      text: [
        'チャウチャウカードを4種類(合計10枚)山札に追加する。さらにこのステージ中、手札の上限枚数を1枚減少する。',
      ],
      detail: {
        attr: 'chowchow',
        type: [SKILL_DETAIL.ADD_CARD, SKILL_DETAIL.CARD_REDUCE],
      },
    },
  },
  チャウチャウパフォーマンス: {
    chowchowPerformance: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが100%以上のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'chowchow',
        type: [SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  チャウチャウムードメイク: {
    chowchowMoodMake: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにメンタルが100%以上のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'chowchow',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  チャウチャウチアリーディング: {
    chowchowCheerLeading: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにメンタルが100%以上のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'chowchow',
        type: [SKILL_DETAIL.MENTAL_RECOVER, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  チャウチャウトリック: {
    chowchowTrick: {
      text: [
        '手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引く。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.RESHUFFLE],
      },
    },
  },
  チャウチャウプレゼント: {
    chowchowPresent: {
      text: ['チャウチャウカードを1種類(合計1枚)山札に追加する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  チャウチャウバカンス: {
    chowchowVacances: {
      text: [
        '手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引く。さらにこのセクション中、手札の上限枚数を2枚増加し、メンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.MENTAL_RECOVER,
        ],
      },
    },
  },
  ドリーミングサポート: {
    dreamingSupport: {
      text: [
        '手札の全てのスキルの消費AP-3。さらにこのステージ中、獲得するLOVEを+',
        '%し、ボルテージPt.を+',
        '、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'dreaming',
        type: [
          SKILL_DETAIL.AP_REDUCE_ALL,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  ブレイブハート: {
    braveHeart_under50: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが50%以下の時、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    braveHeart_under50_under25: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、姫芽の《イグニッションモード》を解除する。メンタルが50%以下のとき、ビートハート',
        '回分のスキルハートを獲得、メンタルが25%以下のとき、ビートハート',
        '回分のスキルハートをさらに追加で獲得する。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.MODE_CHANGE],
      },
    },
  },
  ブレイブアトラクト: {
    braveAttract_under25_sectionAttract: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにメンタルが25%以下のとき、APを1回復する。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    braveAttract_under50_sectionAttract_APGain: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにメンタルが50%以下のとき、APを1回復する。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  ブレイブアトラクション: {
    braveAttraction_under1_heartCaptcha_sectionAttract: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが1%以下の時、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    braveAttraction_under5_heartCaptcha_sectionAttract: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが5%以下の時、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    braveAttraction_under25_sectionAttract_heartCaptcha: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにメンタルが25%以下の時、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    braveAttraction_under50_heartCaptcha_sectionAttract: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが50%以下の時、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    braveAttraction_sectionAttract_under50_heartCaptcha_under25_heartCaptcha: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。さらにメンタルが50%以下のとき、ビートハート',
        '回分のスキルハートを獲得し、メンタルが25%以下のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    braveAttraction_06: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが1%以下の時、このセクション中、獲得するLOVEを+',
        '%し、メンタルが0のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'brave',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  ブレイブアグレッシブアトラクション: {
    braveAggressiveAttraction_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得、メンタルを最大値の25％減少させ、このセクション中、獲得するLOVEを+',
        '%する。さらにメンタルが0のとき、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'brave',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  ブレイブファッシネイト: {
    braveFascinate_under50_voltageGain_sectionAttract: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルが50%以下の時、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
  },
  ブレイブボルテージハート: {
    braveVoltageHeart_under25: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルが25%以下の時、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    braveVoltageHeart_under10: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルが10%以下の時、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  ブレイブエクステボルテージ: {
    braveExtensionsVoltage1_under50_section: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルが50%以下のとき、このセクション中、手札の上限枚数を1枚増加する。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.EXTENSIONS_SECTION],
      },
    },
  },
  ブレイブワイドブースト: {
    braveWideBoost_under10_section: {
      text: [
        'このセクション中、ハート上限を+',
        'する。さらにメンタルが10%以下の時、次に使用するスキルハート獲得効果による獲得数を+',
        'する。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.HEART_LIMIT_UP, SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
  },
  ブレイブワイドアトラクション: {
    braveWideAttraction_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが50%以下のとき、このステージ中、ハート上限を+',
        'し、メンタルが0%以下のとき、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'brave',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
        ],
      },
    },
    braveWideAttraction_02: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにメンタルが50%以下のとき、このステージ中、ハート上限を+',
        'し、メンタルが0%以下のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'brave',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
    braveWideAttraction_03: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにメンタルが5%以下のとき、このセクション中、獲得するLOVEを+',
        '%し、メンタルが0%のとき、このセクション中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: 'brave',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  ブレイブボルテックスアトラクション: {
    braveVortexAttraction_under1_under0: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルが1%以下の時、ビートハート',
        '回分のスキルハートを獲得し、メンタルが0%のとき、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'brave',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
        ],
      },
    },
    braveVortexAttraction_02: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが50%以下のとき、このセクション中、獲得するLOVEを+',
        '%し、メンタルが1%以下のとき、ボルテージPt.を+',
        '%する。',
      ],
      detail: {
        attr: 'brave',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.VOLTAGE_GAIN,
        ],
      },
    },
  },
  ブレイブボルテックスブースト: {
    braveVortexBoost_under1_under0: {
      text: [
        'ボルテージPt.を+',
        'する。さらにメンタルが1%以下のとき、ビートハート',
        '回分のスキルハートを獲得し、メンタルが0%のとき、3回の間DOLLCHESTRAのメンバーが使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'brave',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
          'loveAttract',
        ],
      },
    },
  },
  'ブレイブブーステッドリカバー：DOLLCHESTRA': {
    braveBoostedRecover_dollchestra: {
      text: [
        '3回の間DOLLCHESTRAのメンバーが使用するラブアトラクト効果を+',
        'する。さらにメンタルが1%以下のとき、メンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: 'brave',
        type: [SKILL_DETAIL.BOOST_LOVE_ATTRACT, SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  'ドレス《室咲格子》': {
    dress_murozaki: {
      text: ['ドレスカード《室咲格子》を山札に1枚追加する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《レインボーシフォン》': {
    dress_rainbow: {
      text: ['ドレスカード《レインボーシフォン》を山札に1枚追加する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《Dream Believers》': {
    dress_DreamBelievers: {
      text: ['ドレスカード《Dream Believers》を2種類(合計2枚)山札に追加する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《Reflection in the mirror》': {
    dress_ReflectionInTheMirror: {
      text: [
        'ドレスカード《Reflection in the mirror》を3種類(合計3枚)山札に追加する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《青嵐の鯉流し》': {
    dress_seiranNoKoinagashi: {
      text: ['ドレスカード《青嵐の鯉流し》を1種類(合計2枚)山札に追加する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《Ether Aria》': {
    dress_etherAria: {
      text: ['ドレスカード《Ether Aria》を1種類(合計9枚)山札に追加する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《Bloom the smile, Bloom the dream!》': {
    dress_BsBd: {
      text: [
        'ドレスカード《Bloom the smile, Bloom the dream!》を2種類(合計3枚)山札に追加する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《アオクハルカ》': {
    dress_aokuharuka_kaho: {
      text: [
        'ドレスカード《アオクハルカ》を1種類(合計1枚)山札に追加する。さらに手札を全て捨てて、デッキから手札上限までスキルを引く。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD, SKILL_DETAIL.RESHUFFLE],
      },
    },
    dress_aokuharuka_kozue: {
      text: ['ドレスカード《アオクハルカ》を1種類(合計1枚)山札に追加する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
    dress_aokuharuka_ginko: {
      text: ['ドレスカード《アオクハルカ》を1種類(合計3枚)山札に追加する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《PASSION!!!!!!》': {
    dress_passion: {
      text: ['ドレスカード《PASSION!!!!!!》を1種類(合計2枚)山札に追加する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《16th Birthday》': {
    dress_birthday: {
      text: ['ドレスカード《16th Birthday》を1種類(合計1枚)山札に追加する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《月夜見海月》': {
    dress_tsukuyomi: {
      text: [
        'ドレスカード《月夜見海月》を1種類(合計3枚)山札に追加する。さらにデッキ枚数が25枚以下のとき、ドレスカード《月夜見海月》を1種類(合計3枚)山札に追加する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《Link to the FUTURE》': {
    dress_lttf: {
      text: [
        'ドレスカード《Link to the FUTURE》を1種類(合計3枚)山札に追加する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《ハナムスビ》': {
    dress_hanamusubi: {
      text: [
        'ドレスカード《ハナムスビ》を3種類(合計9枚)山札に追加する。さらに手札を全て捨てて、デッキから手札上限までスキルを引く。この時ドレスカードをドローする確率大幅アップ。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD, SKILL_DETAIL.RESHUFFLE],
      },
    },
  },
  'ドレス《聖夜譚》': {
    dress_seiyatan: {
      text: ['ドレスカード《聖夜譚》を1種類(合計5枚)山札に追加する。'],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《加賀友禅》': {
    dress_kagayuuzen: {
      text: ['ドレスカード《加賀友禅》を9種類(合計9枚)山札に追加する。'],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《ノヴァホワイト》': {
    dress_novaWhite_01: {
      text: ['ドレスカード《ノヴァホワイト》を1種類(合計2枚)山札に追加する。'],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《翠鱗舞》': {
    dress_suirinbu_01: {
      text: ['ドレスカード《翠鱗舞》を1種類(合計2枚)山札に追加する。'],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'リメイクドレス《華・麗・雅》': {
    remakeDress_hrm: {
      text: [
        'リメイクドレスカード《華・麗・雅》を3種類(合計3枚)山札に追加する。さらに手札を全て捨てて、デッキから手札上限までスキルを引く。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD, SKILL_DETAIL.RESHUFFLE],
      },
    },
  },
  'ドレス《Her-bath-rium》': {
    dress_herBathRium: {
      text: ['ドレスカード《Her-bath-rium》を1種類(合計3枚)山札に追加する。'],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ドレス《シュータードレス》': {
    dress_shooterDress: {
      text: [
        '《シュータードレス/RIO》を1種類(合計1枚)山札に追加する。メンタルが50%以下のとき、さらに《シュータードレス/RIO》を1種類(合計1枚)山札に追加する。',
      ],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  '《シュータードレス/RIO》': {
    shooterDressRio: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、AP回復速度を+',
        '%する。',
      ],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.AP_QUICK],
      },
    },
  },
  'ドレス《ユメワズライ》': {
    dress_yumewazurai_01: {
      text: [
        'このステージ中、ハート上限を+',
        'する。さらにドレスカード《ユメワズライ》を1種類(合計3枚)山札に追加する。',
      ],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.HEART_LIMIT_UP, SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  '《ユメワズライ》': {
    yumewazurai_01: {
      text: [
        'このステージ中、ハート上限を+',
        '、AP回復速度を+3%、このセクション中、手札の上限枚数を3枚増加し、フレッシュブーケカードを1種類(合計1枚)山札に追加する。さらにデッキ枚数が27枚以上のとき、このステージ中、獲得するLOVEを+',
        '%し、デッキ枚数が39枚以上のとき、ビートハート',
        '回分のスキルハートを獲得し、このステージ中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: 'dress',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.ADD_CARD,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  フレッシュブーケ: {
    freshBouquet_01: {
      text: [
        'このステージ中、ハート上限を+',
        'し、ビートハート',
        '回分のスキルハートを獲得する。さらにこのセクション中、手札の上限枚数を1枚増加する。',
      ],
      detail: {
        attr: 'bouquet',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.EXTEND_HAND,
        ],
      },
    },
  },
  グレイスブーケ: {
    graceBouquet_01: {
      text: [
        'このステージ中、ハート上限を+',
        'し、ビートハート',
        '回分のスキルハートを獲得する。さらにデッキにあるスリーズブーケのカードスキルの消費AP-3。',
      ],
      detail: {
        attr: 'bouquet',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.AP_REDUCE_DECK_CERISE_BOUQUET,
        ],
      },
    },
  },
  ドリームブーケ: {
    dreamBouquet_01: {
      text: [
        'このステージ中、ハート上限を+',
        'し、ビートハート',
        '回分のスキルハートを獲得する。さらにこのステージ中、獲得するLOVEを+',
        '%、AP回復速度を+3%する。',
      ],
      detail: {
        attr: 'bouquet',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.AP_QUICK,
        ],
      },
    },
  },
  'ドレス《キセキ》': {
    dress_kiseki_01: {
      text: ['ドレスカード《キセキ》を3種類(合計3枚)山札に追加する。'],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  '《奇跡の舞踏会》': {
    dress_kiseki_02: {
      text: [
        'このステージ中、AP回復速度を+',
        '%する。さらにビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.AP_QUICK, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  '《軌跡の舞踏会》': {
    dress_kiseki_03: {
      text: [
        'このステージ中、ハート上限を+',
        'し、ドレスカード使用によるスキルハート獲得効果の獲得数を+',
        '%する。さらにビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'dress',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  '《輝跡の舞踏会》': {
    dress_kiseki_04: {
      text: [
        'このステージ中、手札の上限枚数を1枚増加し、手札を全て捨てて、デッキから手札上限までスキルを引く。さらにビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.AP_QUICK],
      },
    },
  },
  梢デザイン: {
    design_kozue: {
      text: ['このステージ中、AP回復速度を+3%する。'],
      detail: {
        attr: 'design',
        type: [SKILL_DETAIL.AP_QUICK],
      },
    },
  },
  綴理デザイン: {
    design_tsuzuri: {
      text: ['ボルテージPt.を+', 'する。'],
      detail: {
        attr: 'design',
        type: [SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  慈デザイン: {
    design_megumi: {
      text: ['メンタルを最大値の', '%回復させる。'],
      detail: {
        attr: 'design',
        type: [SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  花帆デザイン: {
    design_kaho: {
      text: ['ビートハート', '回分のスキルハートを獲得する。'],
      detail: {
        attr: 'design',
        type: [SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  さやかデザイン: {
    design_sayaka: {
      text: ['次に使用するラブアトラクト効果を+', '%する。'],
      detail: {
        attr: 'design',
        type: [SKILL_DETAIL.BOOST_LOVE_ATTRACT],
      },
    },
  },
  瑠璃乃デザイン: {
    design_rurino: {
      text: ['手札を全て捨てて、デッキから手札上限までスキルを引く。'],
      detail: {
        attr: 'design',
        type: [SKILL_DETAIL.RESHUFFLE],
      },
    },
  },
  吟子デザイン: {
    design_ginko: {
      text: ['このステージ中、手札の上限枚数を1枚増加する。'],
      detail: {
        attr: 'design',
        type: [SKILL_DETAIL.EXTEND_HAND],
      },
    },
  },
  小鈴デザイン: {
    design_kosuzu: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'design',
        type: [SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  姫芽デザイン: {
    design_hime: {
      text: ['姫芽の《イグニッションモード》の状態を切り替える。'],
      detail: {
        attr: 'design',
        type: [SKILL_DETAIL.MODE_CHANGE],
      },
    },
  },
  'ドレス《Celebration!》': {
    dress_celebration_01: {
      text: [
        'ドレスカード《Celebration!》を2種類(合計2枚)山札に追加する。さらにデッキ枚数が22枚のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.ADD_CARD, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  'Celebration!': {
    celebration_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにデッキ枚数が23枚のとき、このセクション中、ハート上限を+',
        'し、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.HEART_LIMIT_UP],
      },
    },
    celebration_02: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。この時花帆、吟子、ドレスカード、チェリーカードをドローする確率大幅アップ。さらにデッキ枚数が24枚のとき、このセクション中、ハート上限を+',
        'し、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.HEART_LIMIT_UP],
      },
    },
  },
  'ドレス《37.5℃のファンタジー》': {
    dress_375fantasy_01: {
      text: [
        'ドレスカード《37.5℃のファンタジー》を2種類(合計2枚)山札に追加する。さらにデッキ枚数が23枚のとき、ビートハート',
        '回分のスキルハートを獲得し、手札を全て捨てて、デッキから手札上限までスキルを引く。',
      ],
      detail: {
        attr: 'dress',
        type: [
          SKILL_DETAIL.ADD_CARD,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.RESHUFFLE,
        ],
      },
    },
  },
  '《37.5℃のファンタジー》': {
    '375fantasy_01': {
      text: [
        '手札を全て捨てて、捨札を山札に戻した後、デッキから手札上限までスキルを引く。この時花帆、吟子、ドレスカードをドローする確率大幅アップ。さらにデッキ枚数が25枚のとき、このセクション中、ハート上限を+',
        '、ビートハート',
        '回分のスキルハートを獲得し、37回の間ドレスカードの使用によるスキルハート獲得効果の獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
    '375fantasy_02': {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。さらにデッキ枚数が25枚のとき、このセクション中、ハート上限を+',
        '、ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  'Letzter Lied': {
    letzterLied: {
      text: ['エーデルカードを2種類(合計2枚)山札に追加する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  '《Her-bath-rium》': {
    'Her-bath-rium': {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのセクション中、手札の上限枚数を1枚増加し、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  'ドレス《フルーツパンチ》': {
    dress_fruitPunch_01: {
      text: [
        'ドレスカード《フルーツパンチ》を2種類(合計2枚)山札に追加する。さらにデッキ枚数が21枚のとき、ビートハート',
        '回分のスキルハートを獲得し、手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引く。この時花帆、吟子、ドレスカード、ハートフルパンチカードをドローする確率大幅アップ。',
      ],
      detail: {
        attr: 'dress',
        type: [
          SKILL_DETAIL.ADD_CARD,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.RESHUFFLE,
        ],
      },
    },
  },
  フルーツパンチ: {
    fruitPunch_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このステージ中、ドレスカードの使用によるボルテージゲイン効果を+',
        '%する。さらにデッキ枚数が22枚のとき、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
        ],
      },
    },
    fruitPunch_02: {
      text: [
        'ボルテージPt.を+',
        'し、ビートハート',
        '回分のスキルハートを獲得する。さらにデッキ枚数が23枚のとき、このステージ中、ドレスカードの使用によるラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  'ドレス《可惜夜花火》': {
    dress_atarayoHanabi_01: {
      text: [
        'ドレスカード《可惜夜花火》を2種類(合計4枚)山札に追加する。さらにフィーバーを除く3～4セクション目のとき、ビートハート',
        '回分のスキルハートを獲得し、手札を全て捨てて、デッキから手札上限までカードを引く。それ以外のセクションのとき、デッキ内の全てのスキルの消費APを-2する。',
      ],
      detail: {
        attr: 'dress',
        type: [
          SKILL_DETAIL.ADD_CARD,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.AP_REDUCE_DECK_ALL,
        ],
      },
    },
  },
  可惜夜花火: {
    atarayoHanabi_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このステージ中、獲得するLOVEを+',
        '%する。さらにデッキ枚数が23枚のとき、このステージ中、ハート上限を+',
        'し、87回の間ドレスカードの使用によるスキルハート獲得効果の獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'atarayoHanabi',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
    atarayoHanabi_02: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%し、手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引く。さらに、デッキ枚数が23枚以上のとき、このステージ中、ハート上限を+',
        'し、87回の間ドレスカードの使用によるラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'atarayoHanabi',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  'ドレス《蒼のツバメ》': {
    dress_aonotsubame_01: {
      text: [
        'このセクション中、手札の上限枚数を2枚増加する。さらにドレスカード《蒼のツバメ》を1種類(合計2枚)山札に追加する。',
      ],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.EXTENSIONS_SECTION, SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  蒼のツバメ: {
    aonotsubame_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに次に使用するボルテージゲイン効果を+',
        '%し、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  'ドレス《一生に夢が咲くように》': {
    dress_hitotose_01: {
      text: [
        'ドレスカード《一生に夢が咲くように》を1種類(合計2枚)山札に追加する。さらに手札をシャッフルする。',
      ],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.ADD_CARD, SKILL_DETAIL.RESHUFFLE],
      },
    },
  },
  '《一生に夢が咲くように》': {
    hitotose_01: {
      text: [
        '手札をシャッフルし、ボルテージPt.を+',
        'する。さらにメンタルが100%のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  'ドレス《乙女詞華集》': {
    dress_otomeAnthology_01: {
      text: ['ドレスカード《乙女詞華集》を2種類(合計4枚)山札に追加する。'],
      detail: {
        attr: 'dress',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  '《乙女詞華集》': {
    otomeAnthology_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このステージ中、ハート上限を+',
        'する。さらにメンタルが100%のとき、次に使用するハート上限増加効果を+',
        '%、次のマニュスクリプト/スリーズアンソロジーカードの使用によるスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
    otomeAnthology_02: {
      text: [
        'このステージ中、ハート上限を+',
        'し、獲得するLOVEを+',
        '%する。さらにメンタルが100%のとき、次に使用するハート上限増加効果を+',
        '%、次のマニュスクリプト/スリーズアンソロジーカードの使用によるラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  ドレッサー: {
    dresser_01: {
      text: [
        'ドレスカードのみを集めたデッキと通常のデッキが切り替えられるようになる。さらにドレス《17th Birthday》を1種類(合計1枚)山札に追加する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.CHANGE_DECK, SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  '《17th Birthday》': {
    '17thBirthday_01': {
      text: ['APを', '回復する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  Prinzessin: {
    prinzessin: {
      text: ['このセクション中、AP回復速度を+', '%する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.AP_QUICK],
      },
    },
  },
  Ritter: {
    ritter: {
      text: [
        'ボルテージPt.を+',
        'する。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  リブートエクステ: {
    rebootExtend_01: {
      text: [
        'このステージ中、手札の上限枚数を2枚増加し、手札を全て捨てて、デッキから手札上限までスキルを引く。さらに',
        '回の間ドレスカードの使用によるスキルハート獲得効果の獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
  },
  リブートエクステンド: {
    rebootExtend_stage1_stageAttract: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、手札の上限枚数を1枚増加し、次に使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  リブートハート: {
    rebootHeart: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに次に使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
    rebootHeart_02: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに10回の間スキルハート獲得効果による獲得量を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
  },
  リブートアトラクト: {
    rebootAttract: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに次に使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.BOOST_LOVE_ATTRACT],
      },
    },
  },
  'リブートアトラクト：みらくらぱーく！': {
    rebootAttract_mirapa: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに次にみらくらぱーく！のメンバーが使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.BOOST_LOVE_ATTRACT],
      },
    },
  },
  リブートプロテクト: {
    rebootProtect: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに次に使用するラブアトラクト効果を+',
        '%し、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  リブートサポート: {
    rebootSupport: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに次にスリーズブーケのメンバーが使用するラブアトラクト効果を',
        '%し、デッキにあるスリーズブーケ、ドレスカードのスキルの消費AP-3。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.AP_REDUCE,
        ],
      },
    },
  },
  リブートマインド: {
    rebootMind_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中3回の間メンタルリカバー効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.BOOST_MENTAL_RECOVER],
      },
    },
  },
  ボルテージサポート: {
    voltageSupport: {
      text: [
        'ボルテージPt.を+',
        'する。さらに手札のメイン効果にボルテージ増加効果を持つスキルの消費AP-1。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.AP_REDUCE_VOLTAGE_GAIN],
      },
    },
  },
  オーバーブルーミング: {
    overBlooming_section: {
      text: [
        'このセクション中、ハートの上限を+',
        'する。さらに',
        '個のスキルハートを獲得する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_LIMIT_UP, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  ハートスプリンクル: {
    heartSprinkles: {
      text: [
        '',
        '個のスキルハートを獲得する。さらに3回の間スキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
  },
  アトラクトブレッシング: {
    attractBlessing: {
      text: [
        'このステージ中、メイン効果に獲得LOVE増加効果を持つスキルの消費AP-2。さらに2回の間ラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_LIMIT_UP, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  フルリカバー: {
    fullRecover: {
      text: [
        'メンタルを最大値の100%回復する。さらにこのセクション中、メンタルが1秒ごとに最大値の',
        '%回復する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  ソラス: {
    solas: {
      text: ['このセクション中、メンタルが1秒ごとに最大値の', '%回復する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  アトラクションゲイン: {
    attractionGain: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このステージ中、獲得するLOVEを+',
        '%する。さらにAPを10回復する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  ハートチューニング: {
    heartTuning: {
      text: [
        '次に使用するスキルハート獲得効果による獲得数を+',
        '%する。さらにこのセクション中、獲得するLOVEを+',
        '%し、ハート数の上限を+',
        'する。',
      ],
      detail: {
        attr: 'tuning',
        type: [
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  ハートブレッシング: {
    heartBlessing: {
      text: [
        'このステージ中、メイン効果にスキルハート獲得効果を持つスキルの消費AP-2。さらに4回の間スキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'blessing',
        type: [SKILL_DETAIL.AP_REDUCE_HEART, SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
  },
  ラブギフト: {
    loveGift: {
      text: [
        'それぞれ3回の間スキルハート獲得効果による獲得数を',
        '%、ラブアトラクト効果を',
        '%する。さらにこのセクション中、ハート数の上限を+',
        'する。',
      ],
      detail: {
        attr: 'gift',
        type: [
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  フューチャーブレッシング: {
    futureBlessing: {
      text: [
        '山札にある全てのスキルの消費AP-1。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'blessing',
        type: [SKILL_DETAIL.AP_REDUCE_ALL, SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  エイペックス: {
    apex: {
      text: [
        'ボルテージLv.を10にし、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'apex',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
  },
  ワイドハート: {
    wideHeart_stage: {
      text: ['このステージ中、ハートの上限を+', 'する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_LIMIT_UP],
      },
    },
  },
  ワイドエクステンド: {
    wideExtend_section3: {
      text: [
        'このセクション中、ハート上限を+',
        'し、手札の上限枚数を3枚増加する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_LIMIT_UP, SKILL_DETAIL.EXTEND_HAND],
      },
    },
    wideExtend_stage1: {
      text: [
        'このステージ中、ハート上限を+',
        'し、手札の上限枚数を1枚増加する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_LIMIT_UP, SKILL_DETAIL.EXTEND_HAND],
      },
    },
    wideExtend_stage1_2: {
      text: [
        'このステージ中、手札の上限枚数を1枚増加し、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_LIMIT_UP, SKILL_DETAIL.EXTEND_HAND],
      },
    },
    wideExtend_section4: {
      text: [
        'このセクション中、手札の上限枚数を4枚増加する。さらにこのステージ中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_LIMIT_UP, SKILL_DETAIL.EXTEND_HAND],
      },
    },
  },
  ワイドゲイン: {
    wideGain_section: {
      text: ['このセクション中、ハートの上限を+', 'する。さらにAPを+5する。'],
      detail: {
        attr: 'wide',
        type: [SKILL_DETAIL.HEART_LIMIT_UP, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  ワイドヒート: {
    wideHeat_01: {
      text: [
        'このセクション中、AP回復速度を+',
        '%し、ハートの上限を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.AP_QUICK, SKILL_DETAIL.HEART_LIMIT_UP],
      },
    },
  },
  セレブレイション: {
    celebration_heart_attract_mental: {
      text: [
        '次に使用するスキルハート獲得効果による獲得数を+',
        '%、ラブアトラクト効果を+',
        '%、メンタルリカバー効果を+',
        '%する。',
      ],
      detail: {
        attr: 'celebration',
        type: [
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.BOOST_MENTAL_RECOVER,
        ],
      },
    },
    celebration_heart_attract_protect: {
      text: [
        '次に使用するスキルハート獲得効果による獲得数を+',
        '%、ラブアトラクト効果を+',
        '%、メンタルプロテクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'celebration',
        type: [
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.BOOST_MENTAL_PROTECT,
        ],
      },
    },
    celebration_attract_voltage_mental: {
      text: [
        '次に使用するラブアトラクト効果を+',
        '%、ボルテージゲイン効果を+',
        '%、メンタルリカバー効果を+',
        '%する。',
      ],
      detail: {
        attr: 'celebration',
        type: [
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.BOOST_MENTAL_RECOVER,
        ],
      },
    },
    celebration_voltage_mental_heart: {
      text: [
        '次に使用するボルテージゲイン効果を+',
        '%、メンタルリカバー効果を+',
        '%、スキルハート獲得効果を+',
        '%する。',
      ],
      detail: {
        attr: 'celebration',
        type: [
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.BOOST_MENTAL_RECOVER,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
    celebration_heart_attract_voltage: {
      text: [
        '次に使用するスキルハート獲得効果を+',
        '%、ラブアトラクト効果を+',
        '%、ボルテージゲイン効果を+',
        '%する。',
      ],
      detail: {
        attr: 'celebration',
        type: [
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
        ],
      },
    },
    celebration_attract_voltage_protect: {
      text: [
        '次に使用するラブアトラクト効果を+',
        '%、ボルテージゲイン効果を+',
        '%、メンタルプロテクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'celebration',
        type: [
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.BOOST_MENTAL_PROTECT,
        ],
      },
    },
    celebration_heart_recover_protect: {
      text: [
        '次に使用するラブアトラクト効果を+',
        '%、メンタルリカバー効果を+',
        '%、メンタルプロテクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'celebration',
        type: [
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.BOOST_MENTAL_RECOVER,
          SKILL_DETAIL.BOOST_MENTAL_PROTECT,
        ],
      },
    },
  },
  ビリーフブースト: {
    beliefBoost: {
      text: [
        'このセクション、メンタルが0になってもメンタルダウンしなくなる。さらに次に使用するスキルハート獲得効果による獲得数を+',
        '%、ラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'belief',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  'ビリーフブースト：DOLLCHESTRA': {
    beliefBoost_dollchestra: {
      text: [
        'このセクション中、メンタルが0になってもメンタルダウンしなくなる。さらにこのステージ中、3回の間DOLLCHESTRAのメンバーが使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'belief',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  ビリーフマイセルフ: {
    beliefMyself_01: {
      text: [
        'このステージ中、メンタルが0になってもメンタルダウンしなくなり、メンタルを最大値の100%減少させる。さらにこのステージ中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: 'belief',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_STAGE,
          SKILL_DETAIL.MENTAL_REDUCE,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  ブーステッドフィール: {
    boostedFeel: {
      text: [
        'メンタルを最大値の',
        '%回復し、ボルテージPt.を+',
        'する。さらに次に使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  ブーステッドゲイン: {
    'boostedGain-boost_recover-boost_voltage-gain7': {
      text: [
        '次に使用するメンタルリカバー効果を+',
        '%、ボルテージゲイン効果を+',
        '%する。さらにAPを7回復する。',
      ],
      detail: {
        attr: 'boost',
        type: [
          SKILL_DETAIL.BOOST_MENTAL_RECOVER,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  ブーステッドエクステゲイン: {
    'boostedExtendGain-boost_voltage-addCard1_stage-gain10': {
      text: [
        '次に使用するボルテージゲイン効果を+',
        '%する。さらにこのステージ中、手札の上限枚数を1枚増加し、APを10回復する。',
      ],
      detail: {
        attr: 'boost',
        type: [
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
    'boostedExtendGain-boost_recover-addCard1_stage-gain10': {
      text: [
        '次に使用するメンタルリカバー効果を+',
        '%する。さらにこのステージ中、手札の上限枚数を1枚増加し、APを10回復する。',
      ],
      detail: {
        attr: 'boost',
        type: [
          SKILL_DETAIL.BOOST_MENTAL_RECOVER,
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  ヒートアップ: {
    heatUp_section: {
      text: ['このセクション中、AP回復速度を+', '%する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.AP_QUICK],
      },
    },
    heatUp_stage: {
      text: ['このステージ中、AP回復速度を+', '%する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.AP_QUICK],
      },
    },
  },
  イグニッションブースト: {
    ignitionBoost_loveAttract: {
      text: [
        '姫芽が《イグニッションモード》になる。さらに3回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'alternate',
        type: [SKILL_DETAIL.MODE_CHANGE, SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
    ignitionBoost_mentalRecover: {
      text: [
        '姫芽が《イグニッションモード》になる。さらに3回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'alternate',
        type: [SKILL_DETAIL.MODE_CHANGE, SKILL_DETAIL.BOOST_MENTAL_RECOVER],
      },
    },
  },
  イグニッションボルテージ: {
    ignitionVoltage: {
      text: [
        '姫芽が《イグニッションモード》になる。さらにボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.MODE_CHANGE, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  イグニッションプロテクト: {
    ignitionProtect: {
      text: [
        '姫芽が《イグニッションモード》になる。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.MODE_CHANGE, SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  'オルタネイト：イグニッション': {
    alternate_ignition_hime: {
      text: ['姫芽の《イグニッションモード》の状態に応じて効果が変化する。'],
      detail: {
        attr: 'alternate',
        type: [SKILL_DETAIL.IGNITION],
      },
    },
  },
  イグニッションリフレッシュ: {
    ignitionRefresh_hime_mentalRecover_over100: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引き、メンタルを最大値の',
        '%回復させる。さらにメンタルが100%以上のとき姫芽が《イグニッションモード》になる。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.MODE_CHANGE,
        ],
      },
    },
  },
  イグニッションスタンバイ: {
    ignitionStandby_hime_mentalOver100OrVoltageOver10: {
      text: [
        'メンタルが50%以下のときメンタルを最大値の',
        '%回復させる。ボルテージLv.が7以下のときボルテージPt.を+',
        'する。メンタルが100%以上、またはボルテージLv.が10以上の時姫芽が《イグニッションモード》になる。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MODE_CHANGE,
        ],
      },
    },
  },
  イグニッションエンデュランス: {
    ignitionEndurance_hime_mentalOver100OrVoltageOver10: {
      text: [
        'メンタルを最大値の',
        '%回復し、ボルテージPt.を+',
        'する。さらにメンタルが100%以上、またはボルテージLv.が10以上のとき姫芽が《イグニッションモード》になる。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MODE_CHANGE,
        ],
      },
    },
  },
  トライアングルコード: {
    triangleCode: {
      text: [
        '梢、綴理がそれぞれ6回の間使用するスキルハート獲得効果による獲得数を+',
        '%、ラブアトラクト効果を+',
        '%、ボルテージゲイン効果を+',
        '%する。',
      ],
      detail: {
        attr: 'triangle',
        type: [
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
        ],
      },
    },
  },
  アバンダンスアトラクション: {
    abunDanceAttraction_over30_stage: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%し、AP回復速度を+1%する。さらにデッキ枚数が30枚以上のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'abunDance',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
    abunDanceAttraction_over30_stage_over33: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにデッキ枚数が30枚以上のとき、ビートハート',
        '回分のスキルハートを獲得し、デッキ枚数が33枚以上のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'abunDance',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  アバンダンスボルテックスアトラクション: {
    abundanceVortexAttraction: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、ボルテージPt.を+',
        'する。さらにデッキ枚数が25枚以上のとき、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'abundance',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
        ],
      },
    },
  },
  アバンダンスアトラクト: {
    abunDanceAttract_over30_stage: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにデッキ枚数が30枚以上のとき、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'abunDance',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
  },
  アバンダンスボルテージハート: {
    abunDanceVoltageHeart: {
      text: [
        'ボルテージPt.を+',
        'する。さらにデッキ枚数が30枚以上のとき、このセクション中、AP回復速度を+13%し、デッキ枚数が33枚以上のとき、このステージ中、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'abunDance',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  アバンダンスハートプロテクト: {
    abunDanceHeartProtect: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。 さらにデッキ枚数が30枚以上のとき、APを3回復し、デッキ枚数が33枚以上のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'abunDance',
        type: [
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.AP_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  アバンダンスリプレイアトラクション: {
    abunDanceReplayAttraction: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。この時スリーズブーケのカードをドローする確率大幅アップ。さらにデッキ枚数が30枚以上のとき、ビートハート',
        '回分のスキルハートを獲得し、デッキ枚数が33枚以上のとき、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'abunDance',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
        ],
      },
    },
  },
  'アバンダンスブースト：ドレス': {
    abunDanceBoost_dress_over30: {
      text: [
        '3回の間ドレスカードの使用によるスキルハート獲得効果による獲得数を+',
        '%する。さらにデッキ枚数が30枚以上のとき、3回の間ドレスカードの使用によるラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'abunDance',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  アバンダンスブーステッドハート: {
    abunDanceBoostedHeart_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにデッキ枚数が25枚以上のとき、次のドレスカード使用によるスキルハート獲得効果の獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'abunDance',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.BOOST_LOVE_ATTRACT],
      },
    },
  },
  アバンダンスブーステッドアトラクト: {
    abunDanceBoostedAttract_01: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにデッキ枚数が25枚以上のとき、次のドレスカード使用によるラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'abunDance',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  アバンダンスブーステッドリカバーハート: {
    abunDanceBoostedRecoverHeart: {
      text: [
        'メンタルを最大値の',
        '%回復させ、ビートハート',
        '回分のスキルハートを獲得する。さらにデッキ枚数が30枚以上のとき、次に慈が使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'abunDance',
        type: [
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
    abunDanceAttraction_over30_stage_over33: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにデッキ枚数が30枚以上のとき、ビートハート',
        '回分のスキルハートを獲得し、デッキ枚数が33枚以上のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'abunDance',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  バブル: {
    bubble_minus3_ceriseBouquet_dressCard: {
      text: ['デッキにあるスリーズブーケ、ドレスカードのスキルの消費AP-3。'],
      detail: {
        attr: 'bubble',
        type: [
          SKILL_DETAIL.AP_REDUCE_DECK_CERISE_BOUQUET,
          SKILL_DETAIL.AP_REDUCE_DECK_DRESS_CARD,
        ],
      },
    },
  },
  タッグハート: {
    tagHeart_APReduce20_hime: {
      text: [
        'ビートハート',
        '分のスキルハートを獲得する。さらにデッキにある姫芽のスキルの消費AP-20。',
      ],
      detail: {
        attr: 'tag',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.AP_REDUCE],
      },
    },
  },
  タッグブースト: {
    tagBoost: {
      text: [
        '次にみらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
        '%、ラブアトラクト効果を+',
        '%する。さらにデッキにある姫芽のスキルの消費AP-10。',
      ],
      detail: {
        attr: 'tag',
        type: [
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.AP_REDUCE,
        ],
      },
    },
  },
  メンターリカバー: {
    mentorRecover: {
      text: [
        '姫芽の《イグニッションモード》を切り替える。さらにメンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: 'mentor',
        type: [SKILL_DETAIL.MODE_CHANGE, SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
  },
  メンターブースト: {
    mentorBoost_captcha_attract: {
      text: [
        '姫芽の《イグニッションモード》を切り替える。さらに次にみらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
        '%、ラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'mentor',
        type: [
          SKILL_DETAIL.MODE_CHANGE,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  フルパワーアトラクション: {
    fullPowerAttraction: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得、このセクション中、獲得するLOVEを+',
        '%し、APを20回復する。さらにメンタルを最大値の50%減少、ボルテージPt.を-600する。また姫芽の《イグニッションモード》を解除する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.MODE_CHANGE,
        ],
      },
    },
  },
  モードチェンジ: {
    modeChange_mentalRecover_voltageGain: {
      text: [
        '姫芽の《イグニッションモード》の状態を切り替える。さらにメンタルを最大値の',
        '%回復し、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: SKILL_DETAIL.MODE_CHANGE,
        type: [
          SKILL_DETAIL.MODE_CHANGE,
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.VOLTAGE_GAIN,
        ],
      },
    },
  },
  アルティメットフォース: {
    ultimateForce: {
      text: [
        'このステージ中、APを無限にする。さらに手札からスキルを使用したとき、スキル使用不可となるクールタイムが発生する。スペシャルアピールのLvが高い、デッキ枚数が多い、または楽曲が短いほどクールタイムが短くなる。',
      ],
      detail: {
        attr: 'infinity',
        type: [SKILL_DETAIL.INFINITY_AP_STAGE, SKILL_DETAIL.COOL_TIME],
      },
    },
  },
  アブソリュートボルテージ: {
    absoluteVoltage: {
      text: [
        'このステージ中、ボルテージLv.を無限にする。さらにボルテージPt.を獲得する効果が発動した時、このステージ中獲得するLOVEを増加させ、APを0～20回復する。発動した効果の効果値とスペシャルアピールのLvが高いほど効果値が増加する。デッキ枚数が18枚より少ないほど、効果値が減少する。',
      ],
      detail: {
        attr: 'infinity',
        type: [
          SKILL_DETAIL.INFINITY_VOLTAGE_STAGE,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  エターナルスピリッツ: {
    eternalSpirits: {
      text: [
        'このステージ中、メンタルを無限にする。さらにメンタルを回復する効果、またはメンタルプロテクト効果が発動した時、スキルハートを獲得し、APを0～20回復する。発動した効果の効果量とスペシャルアピールのLvが高いほど効果値が増加する。デッキ枚数が18枚より少ないほど、効果値が減少する。',
      ],
      detail: {
        attr: 'infinity',
        type: [
          SKILL_DETAIL.INFINITY_MENTAL_STAGE,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  モジュレートボルテージハート: {
    modulateVoltageHeart: {
      text: [
        '3セクション目までの間、ボルテージPt.を+',
        'し、メンタルを最大値の10%減少させる。さらにAPを3回復する。4セクション目以降、ボルテージPt.を+',
        'し、さらにメンタルが5%以下のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'modulate',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MENTAL_REDUCE,
          SKILL_DETAIL.AP_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  モジュレートエクステブースト: {
    modulateExtensionsBoost: {
      text: [
        '3セクション目までの間、このセクション中、手札の上限枚数を3枚増加し、このステージ中、3回の間みらくらぱーく！のメンバーが使用するラブアトラクト効果を+',
        '%する。4セクション目以降、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にし、3回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'modulate',
        type: [
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
  },
  アップドラフトハート: {
    upDraftHeart_attract_reshuffle_heartCaptcha_reduce3: {
      text: [
        '3回の間みらくらぱーく！のメンバーが使用するラブアトラクト効果を+',
        '%する。さらにメンタルが100%のとき、手札を全て捨てて、デッキから手札上限までスキルを引き、ビートハート',
        '個分のスキルハートを獲得、メンタルを最大値の3%減少させる。',
      ],
      detail: {
        attr: 'upDraft',
        type: [
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  アップドラフトアトラクト: {
    upDraftAttract_attract_reshuffle_stageAttract_reduce3: {
      text: [
        '3回の間みらくらぱーく！のメンバーが使用するラブアトラクト効果を+',
        '%する。さらにメンタルが100%のとき、手札を全て捨てて、デッキから手札上限までスキルを引き、このステージ中、獲得するLOVEを+',
        '%し、メンタルを最大値の3%減少させる。',
      ],
      detail: {
        attr: 'upDraft',
        type: [
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  トリカゴ: {
    torikago: {
      text: [
        'このセクション中、メンタルが0になってもメンタルダウンしなくなり、AP回復速度を+33%する。さらにメンタルを最大値の100%減少させる。',
      ],
      detail: {
        attr: 'torikago',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
        ],
      },
    },
  },
  トキノイト: {
    tokinoito: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。この時スリーズブーケ、ドレスカードをドローする確率大幅アップ。さらにデッキ枚数が30枚以上のとき、次のドレスカード使用によるラブアトラクト効果を+',
        '%し、デッキ枚数が33枚以上のとき、次にスリーズブーケのメンバーが使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'tokinoito',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.BOOST_LOVE_ATTRACT],
      },
    },
  },
  エンジェルアタック: {
    angelAttack: {
      text: ['このステージ中、スキルハート獲得効果による獲得数を+', '%する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
  },
  ジャスティスアタック: {
    justiceAttack: {
      text: [
        'メンタルが75%以上のとき、このセクション中、スキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
  },
  トラストスラッシュ: {
    trustSlash: {
      text: [
        '5セクション目でボルテージLv.が10以上のとき、このセクション中、獲得するLOVEを+',
        '%する。さらにビートハート',
        '回分のスキルハートを3回獲得する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.LOVE_ATTRACT_SECTION, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  リプレイブーステッドハート: {
    replayBoostedHeart: {
      text: [
        'ビートハート',
        '回分のスキルハートを3回獲得し、3回の間ラブアトラクト効果を+',
        '%する。さらに手札を全て捨てて、捨て札を全て山札に戻した後、デッキから手札上限までスキルを引く。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.RESHUFFLE,
        ],
      },
    },
  },
  'APゲイン：メンタルリカバー & プロテクト': {
    'APGain-mentalRecover_protect': {
      text: [
        'このステージ中、メンタルを回復する効果、またはメンタルプロテクト効果が発動した時、APを0～20回復する。発動した効果の効果とスペシャルアピールのLvが高いほど効果値が増加する。デッキ枚数が18枚より少ないほど、効果値が減少する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  ワールドワイドアトラクション: {
    worldWideAttraction: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにデッキ枚数が30枚以上、ボルテージLv.が10以上かつメンタルが100%以上のときこのステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
  },
  "M's ジュエル": {
    msJewel: {
      text: [
        'デッキにある全てのカードのスキルの消費AP-1。さらにこのステージ中、AP回復速度を+9%し、手札の上限枚数を1枚増加する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.AP_REDUCE_ALL,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.EXTEND_HAND,
        ],
      },
    },
  },
  'AURORA LINK': {
    AURORALINK: {
      text: [
        'このステージ中、吟子/花帆/梢/小鈴/さやか/綴理/姫芽/瑠璃乃/慈のスキルを全員使用するたび、このステージ中、獲得するLOVEを+',
        '%し、APを20回復する。消費APの合計に応じてアトラクト効果の効果量が変化する。各メンバーを重複した際、消費APの記録を上書きする。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE, SKILL_DETAIL.AP_GAIN],
      },
    },
  },
  'ナインハート・アンサンブル': {
    nineHeart_ensemble: {
      text: [
        '手札の全てのスキルを使用する。さらにビートハート',
        '回分のスキルハートを9回獲得する。このスキル使用に必要なAPは、他の手札の全てのスキルのAPの合計値になる。',
      ],
      detail: {
        attr: 'nineHeart',
        type: [SKILL_DETAIL.SKILL_USE_HANDS_CARD, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  'ナインハート・ボルテージ': {
    nineHeart_voltage: {
      text: [
        'ボルテージPt.を+',
        'する。さらにビートハート',
        '回分のスキルハートを9回獲得する。',
      ],
      detail: {
        attr: 'nineHeart',
        type: [SKILL_DETAIL.VOLTAGE_GAIN, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  'ナインハート・プロテクト': {
    nineHeart_protect: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにビートハート',
        '回分のスキルハートを9回獲得する。',
      ],
      detail: {
        attr: 'nineHeart',
        type: [SKILL_DETAIL.PROTECT_STAGE, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  'ナインハート・ブースト': {
    nineHeart_boost: {
      text: [
        '次に使用するラブアトラクト効果を+',
        '%する。さらにビートハート',
        '回分のスキルハートを9回獲得する。',
      ],
      detail: {
        attr: 'nineHeart',
        type: [SKILL_DETAIL.BOOST_LOVE_ATTRACT, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  'ナインハート・エクステンド': {
    nineHeart_extend: {
      text: [
        'このセクション中、手札の上限枚数を6枚増加する。さらにビートハート',
        '回分のスキルハートを9回獲得する。',
      ],
      detail: {
        attr: 'nineHeart',
        type: [SKILL_DETAIL.EXTEND_HAND, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  'ナインハート・アトラクション': {
    nineHeart_attraction: {
      text: [
        'このステージ中、獲得するLOVEを+',
        '%する。さらにビートハート',
        '回分のスキルハートを9回獲得する。',
      ],
      detail: {
        attr: 'nineHeart',
        type: [SKILL_DETAIL.LOVE_ATTRACT_STAGE, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  'ナインハート・ドレス': {
    nineHeart_dress: {
      text: [
        'ビートハート',
        '回分のスキルハートを9回獲得する。さらに3回までドレスカード《AURORA FLOWER》を3種類(合計3枚)山札に追加する。',
      ],
      detail: {
        attr: 'nineHeart',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'ナインハート・ブレイブ': {
    nineHeart_brave: {
      text: [
        'ビートハート',
        '回分のスキルハートを9回獲得する。さらにメンタルが50%以下のとき、ビートハート',
        '回分のスキルハートを追加で9回獲得する。',
      ],
      detail: {
        attr: 'nineHeart',
        type: [SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  'ナインハート・イグニッション': {
    nineHeart_ignition: {
      text: [
        'ビートハート',
        '回分のスキルハートを9回獲得する。さらに姫芽が《イグニッションモード》になる。',
      ],
      detail: {
        attr: 'nineHeart',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.MODE_CHANGE],
      },
    },
  },
  'ナインハート・リプレイ': {
    nineHeart_replay: {
      text: [
        'ビートハート',
        '回分のスキルハートを9回獲得し、手札を全て捨てて、デッキから手札上限までスキルを引く。さらに姫芽の《イグニッションモード》を解除する。',
      ],
      detail: {
        attr: 'nineHeart',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.MODE_CHANGE,
        ],
      },
    },
  },
  'AURORA FLOWER/C': {
    'auroraFlower-C': {
      text: [
        'ビートハート',
        '回分のスキルハートを3回獲得し、このステージ中、獲得するLOVEを+',
        '%する。さらにAPを',
        '回復する。',
      ],
      detail: {
        attr: 'auroraFlower',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  'AURORA FLOWER/D': {
    'auroraFlower-D': {
      text: [
        'ボルテージPt.を+',
        'し、ビートハート',
        '回分のスキルハートを3回獲得する。さらに次のドレスカード使用によるラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'auroraFlower',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  'AURORA FLOWER/M': {
    'auroraFlower-M': {
      text: [
        '手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引き、ビートハート',
        '回分のスキルハートを3回獲得する。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'auroraFlower',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  シーズニングキャプチャ: {
    'seasoningCaptcha_stage-useSkill': {
      text: [
        'このステージ中、スキル使用時にビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  ブルーミングトゥギャザー: {
    bloomingTogether: {
      text: [
        'このステージ中、スキルハート獲得効果による獲得数を+',
        '%する。さらにデッキにある全てのスキルの消費APを1度だけ1にする。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA, SKILL_DETAIL.AP_REDUCE_ALL],
      },
    },
  },
  'ズッキュン♡ラブビーム': {
    zukkyunLovebeam_section: {
      text: [
        'このセクション中、AP回復速度を+',
        '%する。さらに手札にある全てのスキルの消費AP-9。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.AP_QUICK, SKILL_DETAIL.AP_REDUCE_ALL],
      },
    },
  },
  'オールレンジ♡ボルテージ': {
    'allRangeVoltage_section-mentalOver100': {
      text: [
        'このセクション中、ハート上限を+',
        '、AP回復速度を+',
        '%し、ボルテージPt.を+',
        'する。さらにメンタルが100%以上のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'allRange',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  'オールレンジ♡アトラクション': {
    allRangeAttraction_section: {
      text: [
        'このセクション中、ハート上限を+',
        '、AP回復速度を+',
        '%し、姫芽の《イグニッションモード》を解除する。さらにメンタルが100%以上のとき、ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'allRange',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.MODE_CHANGE,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
  },
  'オールレンジ♡リカバー': {
    allRangeRecover_section: {
      text: [
        'このセクション中、ハート上限を+',
        'し、手札の上限枚数を+1する。さらにメンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: 'allRange',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  'オールレンジ♡プロテクト': {
    allRangeProtect_section: {
      text: [
        'このセクション中、ハート上限を+',
        'する。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'allRange',
        type: [SKILL_DETAIL.HEART_LIMIT_UP, SKILL_DETAIL.PROTECT_STAGE],
      },
    },
  },
  'オールレンジ♡リフレッシュ': {
    allRangeRefresh_section: {
      text: [
        'このセクション中、ハート上限を+',
        'する。さらに手札を全て捨てて、デッキから手札上限までスキルを引き、このステージ中、メンタルの最大値の',
        '%のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'allRange',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  'オールレンジ♡ブースト': {
    allRangeBoost_section: {
      text: [
        'このセクション中、ハート上限を+',
        'し、このステージ中、9回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得効果を+',
        '%、ラブアトラクト効果を+',
        '%する。さらにメンタルが100%以上のとき、APを3回復する。',
      ],
      detail: {
        attr: 'allRange',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  'オールレンジ♡リブート': {
    allRangeReboot_section: {
      text: [
        'このセクション中、ハート上限を+',
        'する。さらに手札を全て捨てて、デッキから手札上限までスキルを引き、9回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'allRange',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
  },
  リスタート: {
    reStart_01: {
      text: [
        'このステージ中、ハート上限を+',
        'する。AP回復速度を+',
        '、手札の上限枚数を1枚増加し、スキルハート獲得効果による獲得数を+',
        'する。さらに手札を全て捨てて、デッキから手札上限までスキルを引く。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.RESHUFFLE,
        ],
      },
    },
  },
  'チェイス＊ドリーム': {
    chaseDream_01: {
      text: [
        'このステージ中、ハート上限を+',
        '、AP回復速度を+3%し、ドリームブーケカードを1種類(合計1枚)山札に追加する。さらにデッキ枚数が27枚以上のとき、ビートハート',
        '回分のスキルハートを獲得し、デッキ枚数が39枚以上のとき、ビートハート',
        '回分のスキルハートを追加で獲得し、このステージ中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: 'dream',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.ADD_CARD,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  'ハートブースト：ブーケ': {
    'heartBoost-bouquet_01': {
      text: [
        'このステージ中、ブーケカードの使用によるスキルハート獲得効果の獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.RESHUFFLE,
        ],
      },
    },
  },
  'サステイン＊ドリーム': {
    sustainDream_01: {
      text: [
        'このステージ中、ハート上限を+',
        'スリーズブーケのメンバーが使用するスキルハート獲得効果による獲得数を+',
        '%し、グレイスブーケカードを1種類(合計1枚)山札に追加する。さらにデッキ枚数が27枚以上のとき、ビートハート',
        '回分のスキルハートを獲得し、デッキ枚数が39枚以上のとき、ビートハート',
        '回分のスキルハートを追加で獲得し、このステージ中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: 'dream',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.ADD_CARD,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  'ジャストゲイン：1': {
    justGain1_01: {
      text: [
        'このステージ中、ブーケカードの使用によるスキルハート獲得効果の獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
  },
  フラッフィーダイナソー: {
    fluffyDinosaur_01: {
      text: ['ダイナソーカードを1種類(合計1枚)山札に追加する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  'M.ゴンザレス': {
    MGonzalez_01: {
      text: [
        'このセクション中、メンタルが0になってもメンタルダウンしなくなり、ハート上限を+',
        'する。さらにメンタルを最大値の100%減少させる。',
      ],
      detail: {
        attr: 'dinosaur',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  コーチング: {
    coaching_01: {
      text: [
        'このセクション中、メンタルが0になってもメンタルダウンしなくなり、AP回復速度を+',
        '%する。さらにこのステージ中、スキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
  },
  'トランセンド▷アトラクション': {
    'transcend-attraction_01': {
      text: [
        'このセクション中、ハート上限を+',
        'し、ボルテージPt.を+',
        'する。さらにメンタルが0%のとき、ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'transcend',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
  },
  'トランセンド▷アグレッシブ': {
    'transcend-aggressive_01': {
      text: [
        'このセクション中、ハート上限を+',
        'し、ボルテージPt.を+',
        'し、メンタルを最大値の50%減少させる。さらに5回の間DOLLCHESTRAのメンバーが使用するスキルハート獲得効果による獲得数を+',
        '%する。またメンタルが0%のとき、ビートハート',
        '回分のスキルハートを獲得し、手札にあるDOLLCHESTRAのスキルの消費AP-3。',
      ],
      detail: {
        attr: 'transcend',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MENTAL_REDUCE,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.AP_REDUCE,
        ],
      },
    },
  },
  'トランセンド▷ブースト': {
    'transcend-boost_01': {
      text: [
        'このセクション中、ハート上限を+',
        'する。さらに5回の間DOLLCHESTRAのメンバーが使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: 'transcend',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
  },
  'トランセンド▷プロテクト': {
    'transcend-protect_01': {
      text: [
        'このセクション中、ハート上限を+',
        'し、ボルテージPt.を+',
        'する。さらにメンタルが0%のとき、ビートハート',
        '回分のスキルハートを獲得、5回の間DOLLCHESTRAのメンバーが使用するラブアトラクト効果を+',
        '%し、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'transcend',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MENTAL_REDUCE,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.AP_REDUCE,
        ],
      },
    },
  },
  ワードローブ: {
    wardrobe_01: {
      text: [
        'ドレスカードのみを集めたデッキと通常のデッキが切り替えられるようになる。さらにこのステージ中、ドレスカード使用によるスキルハート獲得効果の獲得数、ラブアトラクト効果、ボルテージゲイン効果、メンタルリカバー効果、メンタルプロテクトをそれぞれ+',
        '%する。',
      ],
      detail: {
        attr: 'wardrobe',
        type: [
          SKILL_DETAIL.CHANGE_DECK,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.BOOST_MENTAL_RECOVER,
          SKILL_DETAIL.BOOST_MENTAL_PROTECT,
        ],
      },
    },
  },
  スクステチャレンジ: {
    skstChallenge_01: {
      text: [
        'このステージ中、ランダムにチャレンジが発生する。チャレンジをクリアすることでLOVEを獲得し、新たなチャレンジが発生する。チャレンジのクリア回数に応じてLOVEの獲得数が増加する。',
      ],
      detail: {
        attr: 'skstChallenge',
        type: [SKILL_DETAIL.CHALLENGE],
      },
    },
  },
  スキルチャレンジ: {
    skillChallenge_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引き、ビートハート',
        '回分のスキルハートを獲得、ボルテージPt.を+',
        '、メンタルを最大値の',
        '%回復させる。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にし、このセクション中、獲得するLOVEを+',
        '%、手札の上限枚数を1枚増加、AP回復速度を+5%、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: 'skillChallenge',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  ドライブイグニッション: {
    driveIgnition_01: {
      text: [
        '姫芽が《イグニッションモード》になった回数に応じて様々な効果が発動する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.DRIVE_IGNITION],
      },
    },
  },
  リフレッシュイグニッション: {
    refreshIgnition_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに姫芽が《イグニッションモード》になる。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.MODE_CHANGE],
      },
    },
  },
  'リブート：みらくらぱーく！': {
    'reboot-mirapa_01': {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引き、3回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
        '%、ラブアトラクト効果を+',
        '%する。さらにデッキにあるみらくらぱーく！のスキルの消費AP-3し、姫芽の《イグニッションモード》を解除する。',
      ],
      detail: {
        attr: 'reboot',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.MODE_CHANGE,
        ],
      },
    },
  },
  リブートボルテージ: {
    rebootVoltage_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに2回の間ボルテージゲイン効果を+',
        '%する。',
      ],
      detail: {
        attr: 'reboot',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.BOOST_VOLTAGE_GAIN],
      },
    },
    rebootVoltage_02: {
      text: [
        '次に使用するボルテージゲイン効果を+',
        '%する。さらに手札を全て捨てて、デッキから手札上限までスキルを引く。',
      ],
      detail: {
        attr: 'reboot',
        type: [SKILL_DETAIL.BOOST_VOLTAGE_GAIN, SKILL_DETAIL.RESHUFFLE],
      },
    },
  },
  グランドフィナーレ: {
    grandFinale_01: {
      text: [
        '最終セクションで使用したとき、APを',
        '回復し、このセクション中、スキルハート獲得効果による獲得数を+',
        '%、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: 'grandFinale',
        type: [
          SKILL_DETAIL.AP_GAIN,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  パワーオブエール: {
    powerOfYell_01: {
      text: [
        'このステージ中、獲得するLOVEを増加し、スキルハートを獲得する。梢のMember Fan Lv.が高いほど効果量が増加する。さらに梢のMember Fan Lv.が100以上のとき、このステージ中、AP回復速度を+',
        '%し、APを',
        '回復する。',
      ],
      detail: {
        attr: 'powerOfYell',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
    powerOfYell_02: {
      text: [
        'ボルテージPt.を増加し、スキルハートを獲得する。綴理のMember Fan Lv.が高いほど効果量が増加する。さらに綴理のMember Fan Lv.が100以上のとき、このステージ中、AP回復速度を+',
        '%し、APを9回復する。',
      ],
      detail: {
        attr: 'powerOfYell',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
    powerOfYell_03: {
      text: [
        'このステージ中、メンタルの最大値の割合分のメンタルダメージを無効にし、スキルハートを獲得する。慈のMember Fan Lv.が高いほど効果量が増加する。さらに慈のMember Fan Lv.が100以上のとき、このステージ中、AP回復速度を+',
        '%し、APを9回復する。',
      ],
      detail: {
        attr: 'powerOfYell',
        type: [
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  'リユニオンチャーム/Kozue': {
    'reunionCharm-kozue_01': {
      text: ['山札にあるすべてのスキルの消費AP-3。'],
      detail: {
        attr: 'reunionCharm',
        type: [SKILL_DETAIL.AP_REDUCE],
      },
    },
  },
  'リユニオンチャーム/Tsuzuri': {
    'reunionCharm-tsuzuri_01': {
      text: ['山札にあるすべてのスキルの消費AP-3。'],
      detail: {
        attr: 'reunionCharm',
        type: [SKILL_DETAIL.AP_REDUCE],
      },
    },
  },
  'リユニオンチャーム/Megumi': {
    'reunionCharm-megumi_01': {
      text: ['山札にあるすべてのスキルの消費AP-3。'],
      detail: {
        attr: 'reunionCharm',
        type: [SKILL_DETAIL.AP_REDUCE],
      },
    },
  },
  ドリーミングトライアングル: {
    dreamingTriangle_01: {
      text: [
        'デッキ内のすべてのスキルの消費AP3-し、手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引く。さらにこのセクション中、AP回復速度を+',
        '%し、メンタルが0になってもメンタルダウンしなくなる。',
      ],
      detail: {
        attr: 'dreaming',
        type: [
          SKILL_DETAIL.AP_REDUCE,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
        ],
      },
    },
  },
  ボルテージバイブス: {
    voltageVibes_01: {
      text: [
        'このセクション中、ビートハートの出現個数を+',
        'する。さらにボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: 'vibes',
        type: [SKILL_DETAIL.VIBES_SECTION, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  アトラクトバイブス: {
    attractVibes_01: {
      text: [
        'このセクション中、ビートハートの出現個数を+1する。さらにこのセクション中、獲得するLOVEを+',
        'する。',
      ],
      detail: {
        attr: 'vibes',
        type: [SKILL_DETAIL.VIBES_SECTION, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
  },
  ハッピーアンビエンス: {
    happyAmbience_01: {
      text: ['このセクション中、ムードをハッピー方向に+', 'する。'],
      detail: {
        attr: 'ambience',
        type: [SKILL_DETAIL.AMBIENCE_SECTION],
      },
    },
  },
  メロウアンビエンス: {
    mellowAmbience_01: {
      text: ['このセクション中、ムードをメロウ方向に+', 'する。'],
      detail: {
        attr: 'ambience',
        type: [SKILL_DETAIL.AMBIENCE_SECTION],
      },
    },
  },
  エクステアンビエンス: {
    extensionAmbience_01: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加する。さらにムードがハッピー、メロウいずれかのとき、このセクション中、ムード値を+',
        'する。',
      ],
      detail: {
        attr: 'ambience',
        type: [SKILL_DETAIL.EXTENSIONS_SECTION, SKILL_DETAIL.AMBIENCE_SECTION],
      },
    },
  },
  リピートアンビエンス: {
    repeatAmbience_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにムードがハッピー、メロウいずれかのとき、このセクション中、ムード値を+',
        'する。',
      ],
      detail: {
        attr: 'ambience',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.AMBIENCE_SECTION],
      },
    },
  },
  リフレッシュサウンドバイブス: {
    refreshSoundVibes_01: {
      text: [
        '手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引き、メンタルを最大値の',
        '%回復させる。さらにムードがハッピー、メロウいずれか75以上のとき、このセクション中、ビートハートの出現個数を+1する。',
      ],
      detail: {
        attr: 'vibes',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  ワイドサウンドバイブス: {
    wideSoundVibes_01: {
      text: [
        'このセクション中、ビートハートの出現個数を+2する。さらにムードがハッピー、メロウいずれか75以上のとき、このセクション中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.VIBES_SECTION,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  ワイドハッピーバイブス: {
    wideHappyVibes_01: {
      text: [
        'このセクション中、ビートハートの出現個数を+2する。さらにムードがハッピー75以上のとき、このセクション中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: 'vibes',
        type: [SKILL_DETAIL.VIBES_SECTION, SKILL_DETAIL.HEART_LIMIT_UP],
      },
    },
  },
  リットハッピーアンビエンス: {
    litHappyAmbience_01: {
      text: [
        'このセクション中、AP回復速度を-30%する。さらにこのセクション中、ムードをハッピー方向に+',
        'する。',
      ],
      detail: {
        attr: 'ambience',
        type: [SKILL_DETAIL.AP_SLOW, SKILL_DETAIL.AMBIENCE_SECTION],
      },
    },
  },
  リットアトラクトバイブス: {
    litAttractVibes_01: {
      text: [
        'このセクション中、ビートハートの出現個数を+',
        'し、獲得するLOVEを+',
        '%する。さらにこのセクション中、AP回復速度を-66%する。',
      ],
      detail: {
        attr: 'ambience',
        type: [
          SKILL_DETAIL.VIBES_SECTION,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.AP_SLOW,
        ],
      },
    },
  },
  スケルツォアンビエンス: {
    scherzoAmbience_01: {
      text: [
        'このセクション中、ムードがハッピーの時メロウ方向に、メロウの時ハッピー方向に+',
        'する。',
      ],
      detail: {
        attr: 'ambience',
        type: [SKILL_DETAIL.AMBIENCE_SECTION],
      },
    },
  },
  アンビエンスハート: {
    ambienceHeart_01: {
      text: [
        'ムードがハッピー、メロウいずれかのとき、このセクション中、ムード値を+',
        'する。さらにビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: 'ambience',
        type: [SKILL_DETAIL.AMBIENCE_SECTION, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  サウンドハート: {
    soundHeart_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにムードがハッピー、メロウいずれか75以上のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.SOUND, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    soundHeart_02: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにムードがハッピーのとき、このステージ中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
    soundHeart_03: {
      text: [
        'ビートハート',
        'さらにムードがメロウ100のとき、このステージ中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  サウンドリゲイン: {
    soundRegain_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにムードがハッピー、メロウいずれか50以上のとき、ボルテージPt.を+',
        'し、いずれか75以上のとき、このステージ中、ハート上限を+',
        'し、いずれか100のとき、8回の間スキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
  },
  サウンドリフレッシュ: {
    soundRefresh_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにムードがハッピー、メロウいずれか50以上のとき、このステージ中、獲得するLOVEを+',
        'し、いずれか75以上のとき、このステージ中、ハート上限を+',
        'し、いずれか100のとき、8回の間スキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
  },
  サウンドプロテクト: {
    soundProtect_01: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにムードがハッピー、メロウいずれか75以上のとき、デッキにあるみらくらぱーく！のスキルの消費AP-5。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  サウンドハートブースト: {
    soundHeartBoost_01: {
      text: [
        '20回の間スキルハート獲得効果による獲得数を+',
        '%する。さらにムードがハッピー、メロウいずれか75以上のとき、20回の間スキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA, SKILL_DETAIL.SOUND],
      },
    },
  },
  サウンドワイドハート: {
    soundWideHeart_01: {
      text: [
        'このステージ中、ハート上限を+',
        'する。さらにムードがハッピー、メロウいずれか75以上のとき、このステージ中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_LIMIT_UP, SKILL_DETAIL.SOUND],
      },
    },
    soundWideHeart_02: {
      text: [
        'このステージ中、ハート上限を+',
        'する。さらにムードがハッピー、メロウいずれか100以上のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
    soundWideHeart_03: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにムードがハッピー、メロウいずれか100のとき、このステージ中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  サウンドブーステッドハート: {
    soundBoostedHeart_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにムードがメロウのとき、次に使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
    soundBoostedHeart_02: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにムードがハッピー、メロウいずれか50以上のとき、次に使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
    soundBoostedHeart_03: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにムードがハッピー75のとき、次に使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
    soundBoostedHeart_04: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにムードがハッピー100のとき、次に使用するスキルハート獲得効果による獲得数を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
  },
  サウンドブーステッドアトラクト: {
    soundBoostedAttract_01: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにムードがハッピー、メロウいずれか50以上のとき、次に使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
    soundBoostedAttract_02: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%する。さらにムードがハッピー、メロウいずれか75以上のとき、次に使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  サウンドブーステッドアトラクション: {
    soundBoostedAttraction_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。さらにムードがハッピー、メロウいずれか100のとき、次に使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  サウンドブーステッドファッシネイション: {
    soundBoostedFascination_01: {
      text: [
        'このセクション中、獲得するLOVEを+',
        '%し、ボルテージPt.を+',
        'する。さらにムードがハッピー100のとき、次にDOLLCHESTRAのメンバーが使用するラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  サウンドブーステッドボルテージ: {
    soundBoostedVoltage_01: {
      text: [
        'ボルテージPt.を+',
        'する。さらにムードがハッピーのとき、次に使用するボルテージゲイン効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
        ],
      },
    },
    soundBoostedVoltage_02: {
      text: [
        'ボルテージPt.を+',
        'する。さらにムードがハッピー、メロウいずれか75以上のとき、次に使用するボルテージゲイン効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
        ],
      },
    },
  },
  サウンドアンビエンス: {
    soundAmbience_01: {
      text: [
        'ムード値がハッピー、メロウいずれかのとき、このセクション中、ムード値を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.SOUND, SKILL_DETAIL.AMBIENCE_SECTION],
      },
    },
    soundAmbience_02: {
      text: [
        'ムードがハッピー、メロウいずれかのとき、このステージ中、ムード値を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.SOUND, SKILL_DETAIL.AMBIENCE_STAGE],
      },
    },
  },
  サウンドリフレッシュマインド: {
    soundRefreshMind_01: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにムードがハッピー、メロウいずれか75以上のとき、手札を全て捨てて、捨て札を山札に戻した後、デッキから手札上限までスキルを引く。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.RESHUFFLE,
        ],
      },
    },
  },
  サウンドボルテージバイブス: {
    soundVoltageVibes_01: {
      text: [
        'このセクション中、ビートハートの出現個数を+1する。さらにムードがハッピー、メロウいずれか75以上のとき、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.VIBES_SECTION,
          SKILL_DETAIL.SOUND,
          SKILL_DETAIL.VOLTAGE_GAIN,
        ],
      },
    },
  },
  サウンドフュージョン: {
    soundFusion_01: {
      text: [
        'ムードがハッピー、メロウいずれかのとき、このセクション中、ムード値を+',
        'する。さらにフィーバーセクションのとき、ビートハート',
        '回分のスキルハートを獲得、9回の間スキルハート獲得効果による獲得数を+',
        '%し、手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引く。それ以外のセクションのとき、このセクション中、AP回復速度を-5%し、メンタルを最大値の5%減少させる。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.AMBIENCE_SECTION,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.AP_SLOW,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  サウンドアトラクトブースト: {
    soundAttractBoost_01: {
      text: [
        '2回の間ラブアトラクト効果を+',
        '%する。さらにムードがメロウ100のとき、2回の間ラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.BOOST_LOVE_ATTRACT, SKILL_DETAIL.SOUND],
      },
    },
  },
  サウンドリプレイアトラクション: {
    soundReplayAttraction_01: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引き、ビートハート',
        '回分のスキルハートを獲得、このセクション中、獲得するLOVEを+',
        '%する。さらにムードがメロウ100のとき、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: 'sound',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
  },
  イミテーションハート: {
    imitationHeart_01: {
      text: [
        'カードがステージにセットされ、獲得するボルテージPt.を吸収する。ボルテージPt.を200吸収したとき、ビートハート',
        '回分のスキルハートを獲得し、捨札に移動する。',
      ],
      detail: {
        attr: 'imitation',
        type: [SKILL_DETAIL.IMITATION, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
    imitationHeart_02: {
      text: [
        'カードがステージにセットされ、獲得するハートを吸収する。ハートを5個吸収したとき、ビートハート',
        '回分のスキルハートを獲得し、捨札に移動する。',
      ],
      detail: {
        attr: 'imitation',
        type: [SKILL_DETAIL.IMITATION, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  イミテーションアトラクト: {
    imitationAttract_01: {
      text: [
        'カードがステージにセットされ、1セクションの間獲得するラブアトラクト効果を吸収する。セクションが変わったとき、このセクションの間、吸収した効果量の',
        '倍のラブアトラクト効果を発動し、捨札に移動する。',
      ],
      detail: {
        attr: 'imitation',
        type: [SKILL_DETAIL.IMITATION, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  イミテーションボルテージ: {
    imitationVoltage_01: {
      text: [
        'カードがステージにセットされ、獲得するメンタルプロテクト効果を吸収する。メンタルプロテクト効果を10%吸収したとき、ボルテージPt.を+',
        'し、捨札に移動する。',
      ],
      detail: {
        attr: 'imitation',
        type: [SKILL_DETAIL.IMITATION, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
    imitationVoltage_02: {
      text: [
        'カードがステージにセットされ、獲得するボルテージPt.を吸収する。ボルテージPt.を3000吸収したとき、ボルテージPt.を+',
        'し、捨札に移動する。',
      ],
      detail: {
        attr: 'imitation',
        type: [SKILL_DETAIL.IMITATION, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  イミテーションヒート: {
    imitationHeat_01: {
      text: [
        'カードがステージにセットされ、1セクションの間獲得するAP回復速度増加効果を吸収する。セクションが変わったとき、このセクションの間、吸収した効果量の',
        '倍のAP回復速度増加効果を発動し、捨札に移動する。',
      ],
      detail: {
        attr: 'imitation',
        type: [SKILL_DETAIL.IMITATION, SKILL_DETAIL.AP_QUICK],
      },
    },
  },
  イミテーションワイド: {
    imitationWide_01: {
      text: [
        'カードがステージにセットされ、AP回復速度増加効果を吸収する。AP回復速度増加効果を16%吸収したとき、このセクション中、ハート上限を+',
        'し、捨札に移動する。',
      ],
      detail: {
        attr: 'imitation',
        type: [SKILL_DETAIL.IMITATION, SKILL_DETAIL.HEART_LIMIT_UP],
      },
    },
  },
  イミテーションリフレッシュプロテクト: {
    imitationRefreshProtect_01: {
      text: [
        'カードがステージにセットされ、手札上限枚数効果を吸収する。手札上限枚数効果を2枚分吸収したとき、手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引き、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にし、捨札に移動する。',
      ],
      detail: {
        attr: 'imitation',
        type: [
          SKILL_DETAIL.IMITATION,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  イミテーションライト: {
    imitationLight_01: {
      text: [
        'カードがステージにセットされ、1セクションの間ムード値変動効果を吸収する。セクションが変わったとき、このセクションの間、吸収した効果量の',
        '倍のムード値変動効果を発動し、捨札に移動する。',
      ],
      detail: {
        attr: 'imitation',
        type: [SKILL_DETAIL.IMITATION, SKILL_DETAIL.AMBIENCE_SECTION],
      },
    },
  },
  イミテーションエクステアトラクト: {
    imitationExtendAttract_01: {
      text: [
        'カードがステージにセットされ、1セクションの間獲得するアトラクト効果を吸収する。セクションが変わった時、このセクション中、吸収した効果量の',
        '倍のラブアトラクト効果を発動、手札の上限枚数を2枚増加、AP回復速度を+',
        '%し、捨て札に移動する。',
      ],
      detail: {
        attr: 'imitation',
        type: [
          SKILL_DETAIL.IMITATION,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.AP_QUICK,
        ],
      },
    },
  },
  ツインスリーズ: {
    twinCerise_01: {
      text: ['ハピネスチェリーカードを1種類(合計2枚)山札に追加する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  ハピネスチェリー: {
    happinessCherry_01: {
      text: [
        'デッキにある花帆、吟子、ドレスカード、チェリーカードスキルの消費AP-3。さらにデッキ枚数が24枚のとき、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.AP_REDUCE, SKILL_DETAIL.HEART_CAPTCHA],
      },
    },
  },
  イグザクトアトラクション: {
    exhaustAttract_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。さらにデッキ枚数が22枚のとき、ビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_SECTION],
      },
    },
    exhaustAttract_02: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、このステージ中、獲得するLOVEを+',
        '%する。さらにデッキ枚数が21枚のとき、ビートハート',
        '回分のスキルハートを獲得し、このステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.LOVE_ATTRACT_STAGE],
      },
    },
  },
  ブルームマイセルフ: {
    bloomMySelf_01: {
      text: [
        '3回の間花帆が使用するスキルハート獲得効果による獲得数を+',
        '%する。さらに山札にある花帆のスキルの消費AP-3。',
      ],
      detail: {
        attr: 'bloomMySelf',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA, SKILL_DETAIL.AP_REDUCE],
      },
    },
    bloomMySelf_02: {
      text: [
        'ムードがハッピー、メロウいずれかのとき、このセクション中、ムード値を+',
        'する。さらに山札にあるセラスのスキルの消費AP-1。',
      ],
      detail: {
        attr: 'bloomMySelf',
        type: [SKILL_DETAIL.AMBIENCE_SECTION, SKILL_DETAIL.AP_REDUCE],
      },
    },
    bloomMySelf_03: {
      text: [
        '手札を全て捨てて、デッキから手札上限までスキルを引く。この時瑠璃乃のカードをドローする確率大幅アップ。さらに3回の間瑠璃乃が使用するメンタルリカバー効果を',
        '%し、山札にある瑠璃乃のスキルの消費AP-3。',
      ],
      detail: {
        attr: 'bloomMySelf',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.BOOST_MENTAL_RECOVER,
          SKILL_DETAIL.AP_REDUCE,
        ],
      },
    },
    bloomMySelf_04: {
      text: [
        '姫芽の《イグニッションモード》の状態を変化させる。さらに2回の間姫芽が使用するボルテージゲイン効果を+',
        '%し、山札にある姫芽のスキルの消費AP-2。',
      ],
      detail: {
        attr: 'bloomMySelf',
        type: [
          SKILL_DETAIL.MODE_CHANGE,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.AP_REDUCE,
        ],
      },
    },
    bloomMySelf_05: {
      text: [
        '2回の間吟子、ドレスカードの使用するハート上限増加効果を+',
        '%する。さらに山札にある吟子、ドレスカードのスキルの消費AP-2。',
      ],
      detail: {
        attr: 'bloomMySelf',
        type: [SKILL_DETAIL.BOOST_WIDE_HEART, SKILL_DETAIL.AP_REDUCE],
      },
    },
  },
  ミッドワイドビリーフ: {
    midWideBelief_01: {
      text: [
        '3セクション目のとき、このセクション中、メンタルが0になってもメンタルダウンしなくなり、メンタルを最大値の100%減少させる。さらにこのセクション中、ハート上限を+',
        'し、デッキ内のさやか、小鈴のスキルの消費APを-9する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.AP_REDUCE,
        ],
      },
    },
  },
  メーデーメロウ: {
    maydayMellow_01: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにメンタル0%のとき、さやか、小鈴がそれぞれ3回の間使用するスキルハート獲得効果による獲得数を+',
        '%、ムードがメロウ50以上のとき、このステージ中、ハート上限を+',
        'し、メンタル0%かつメロウ50以上のとき、ビートハート',
        '個分のスキルハートを獲得する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  'タイムレス∞フォース': {
    timelessForce_01: {
      text: ['このセクション中、APを無限にする。'],
      exText: [
        {
          level: 12,
          text: [
            'このセクション中、APを無限にする。さらにこのセクション中、スキルハート獲得効果による獲得数を+',
            '%する。',
          ],
        },
      ],
      detail: {
        attr: 'timeless',
        type: [
          SKILL_DETAIL.INFINITY_AP_SECTION,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
  },
  'タイムレス∞ボルテージ': {
    timelessVoltage_01: {
      text: [
        'このセクション中、ボルテージLv.を無限にし、ボルテージPt.獲得効果発動時、このステージ中、獲得するLOVEを増加、APを0～20回復する。発動した効果の効果値とスペシャルアピールのLvが高いほど効果値が増加、デッキ枚数が18枚より少ないほど効果値が減少する。',
      ],
      exText: [
        {
          level: 12,
          text: [
            'このセクション中、ボルテージLv.を無限にし、ボルテージPt.獲得効果発動時、このステージ中、獲得するLOVEを増加、APを0～20回復する。発動した効果の効果値とスペシャルアピールのLvが高いほど効果値が増加、デッキ枚数が18枚より少ないほど効果値が減少する。さらにこのセクション中、スキルハート獲得効果による獲得数を+',
            '%する。',
          ],
        },
      ],
      detail: {
        attr: 'timeless',
        type: [
          SKILL_DETAIL.INFINITY_VOLTAGE_SECTION,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.AP_GAIN,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
  },
  'タイムレス∞スピリッツ': {
    timelessSpirits_01: {
      text: [
        'このセクション中、メンタルを無限にし、メンタル回復効果またはメンタルプロテクト効果発動時、スキルハートを獲得、APを0～20回復する。発動した効果の効果値とスペシャルアピールのLvが高いほど効果値が増加、デッキ枚数が18枚より少ないほど効果値が減少する。',
      ],
      exText: [
        {
          level: 12,
          text: [
            'このセクション中、メンタルを無限にし、メンタル回復効果またはメンタルプロテクト効果発動時、スキルハートを獲得、APを0～20回復する。発動した効果の効果値とスペシャルアピールのLvが高いほど効果値が増加、デッキ枚数が18枚より少ないほど効果値が減少する。さらにこのセクション中、スキルハート獲得効果による獲得数を+',
            '%する。',
          ],
        },
      ],
      detail: {
        attr: 'timeless',
        type: [
          SKILL_DETAIL.INFINITY_MENTAL_SECTION,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.AP_GAIN,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
  },
  マーメイドプライド: {
    mermaidPride_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得、このセクション中、獲得するLOVEを+',
        '%、ボルテージPt.を+',
        '、メンタルを最大値の',
        '%回復させる。さらにAPを0にする。',
      ],
      exText: [
        {
          level: 12,
          text: [
            'ビートハート',
            '回分のスキルハートを獲得、このセクション中、獲得するLOVEを+',
            '%、ボルテージPt.を+',
            '、メンタルを最大値の',
            '%回復させる。さらにAPを0にし、手札の全てのスキルの消費AP-',
            '。',
          ],
        },
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.VOLTAGE_REDUCE,
        ],
      },
    },
  },
  トゥモローリボン: {
    tomorrowRibbon_01: {
      text: [
        'ボルテージLv.10以上のとき、ビートハート',
        '回分のスキルハートを獲得、このセクション中、獲得するLOVEを+',
        '%、AP回復速度を+',
        '%、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにボルテージPt.を0にする。',
      ],
      exText: [
        {
          level: 12,
          text: [
            'ボルテージLv.10以上のとき、ビートハート',
            '回分のスキルハートを獲得、このセクション中、獲得するLOVEを+',
            '%、AP回復速度を+',
            '%、このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにボルテージPt.を0にし、手札の全てのスキルの消費AP-3。',
          ],
        },
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.VOLTAGE_REDUCE,
        ],
      },
    },
  },
  エンジェリックブライト: {
    angelicBright_01: {
      text: [
        'メンタルが100%以上のとき、ビートハート',
        '回分のスキルハートを獲得、このセクション中、獲得するLOVEを+',
        '%、AP回復速度を+',
        '%、ボルテージPt.を+',
        'する。さらにメンタルを最大値の99%減少させる。',
      ],
      exText: [
        {
          level: 12,
          text: [
            'メンタルが100%以上のとき、ビートハート',
            '回分のスキルハートを獲得、このセクション中、獲得するLOVEを+',
            '%、AP回復速度を+',
            '%、ボルテージPt.を+',
            'する。さらにメンタルを最大値の99%減少させ、手札の全てのスキルの消費AP-',
            '。',
          ],
        },
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  Elysion: {
    elysion_01: {
      text: [
        'このステージ中、AP回復速度を-9999%する。さらにこのステージ中、ビートハートの出現個数を+',
        'する。',
      ],
      detail: {
        attr: 'Elysion',
        type: [SKILL_DETAIL.AP_SLOW, SKILL_DETAIL.VIBES_STAGE],
      },
    },
    elysion_02: {
      text: [
        'このステージ中、AP回復速度を-9999%する。さらにこのステージ中、メンタルが1秒ごとに最大値の',
        '%回復する。',
      ],
      detail: {
        attr: 'Elysion',
        type: [SKILL_DETAIL.AP_SLOW, SKILL_DETAIL.MENTAL_RECOVER],
      },
    },
    elysion_03: {
      text: [
        'このステージ中、AP回復速度を-9999%する。さらにこのステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'Elysion',
        type: [SKILL_DETAIL.AP_SLOW, SKILL_DETAIL.PROTECT_STAGE],
      },
    },
    elysion_04: {
      text: [
        'このステージ中、AP回復速度を-9999%する。さらにムードがハッピー、メロウいずれかのとき、このステージ中、ムード値を+',
        'する。',
      ],
      detail: {
        attr: 'Elysion',
        type: [SKILL_DETAIL.AP_SLOW, SKILL_DETAIL.AMBIENCE_STAGE],
      },
    },
    elysion_05: {
      text: [
        'このステージ中、AP回復速度を-9999%する。さらにこのステージ中、手札の上限枚数を',
        '枚増加する。',
      ],
      detail: {
        attr: 'Elysion',
        type: [SKILL_DETAIL.AP_SLOW, SKILL_DETAIL.EXTEND_HAND],
      },
    },
    elysion_06: {
      text: [
        'このステージ中、AP回復速度を-9999%する。さらにこのステージ中、ボルテージPt.が1秒ごとに',
        'ptずつ増加する。',
      ],
      detail: {
        attr: 'Elysion',
        type: [SKILL_DETAIL.AP_SLOW, SKILL_DETAIL.VOLTAGE_GAIN],
      },
    },
  },
  'mode:DESTROYER': {
    mode_destroyer_01: {
      text: [
        '手札を全て捨てて、捨て札を全て山札に戻した後、デッキから手札上限までスキルを引く。さらにビートハート',
        '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
        'する。',
      ],
      detail: {
        attr: 'mode',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
        ],
      },
    },
  },
  'mode:ELIXIR': {
    mode_elixir_01: {
      text: [
        '手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引き、このセクション中、手札の上限枚数を7枚増加する。さらにメンタルを最大値の',
        '%回復させ、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: 'mode',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  'mode:DEVICE': {
    mode_device_01: {
      text: [
        'ボルテージPt.を+',
        'する。さらにビートハート',
        '回分のスキルハートを獲得し、このセクション中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: 'mode',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  'mode:FUTURE': {
    mode_future_01: {
      text: [
        'ムードがハッピー、メロウいずれかのとき、このステージ中、ムード値を+',
        'する。さらにこのステージ中、ビートハートの出現個数を+',
        'し、88回の間ラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: 'mode',
        type: [
          SKILL_DETAIL.AMBIENCE_STAGE,
          SKILL_DETAIL.VIBES_STAGE,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  'mode:ARCHITECTURE': {
    mode_architecture_01: {
      text: ['ドレスカード《Oracle Étude》を1種類(合計11枚)山札に追加する。'],
      detail: {
        attr: 'mode',
        type: [SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  '《Oracle Étude》': {
    oracleEtude_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにこのステージ中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_CAPTCHA, SKILL_DETAIL.HEART_LIMIT_UP],
      },
    },
  },
  'mode:TERMINAL': {
    mode_terminal_01: {
      text: [
        'それぞれ33回の間スキルハート獲得効果による獲得数を+',
        '%、ラブアトラクト効果を+',
        '%、ハート上限増加効果を+',
        '%する。',
      ],
      detail: {
        attr: 'mode',
        type: [
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.BOOST_WIDE_HEART,
        ],
      },
    },
  },
  アグレッシブメロウアンビエンス: {
    aggressiveMellowAmbience_01: {
      text: [
        'このセクション中、ムード値をメロウ方向に+',
        'する。さらにメンタルを最大値の16%減少させる。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.AMBIENCE_SECTION, SKILL_DETAIL.MENTAL_REDUCE],
      },
    },
  },
  'みらくら・マーブル・ブースト!!': {
    'miraCra-marvel-boost_01': {
      text: [
        '瑠璃乃、姫芽がそれぞれ22回の間使用するスキルハート獲得効果による獲得数を+',
        'ラブアトラクト効果を+',
        '%、ボルテージゲイン効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
        ],
      },
    },
  },
  ヒーローズイグニッション: {
    heroesIgnition_01: {
      text: [
        '手札を全て捨てて、捨て札を全て山札に戻した後、デッキから手札上限までスキルを引く。この時、みらくらぱーく！のカードをドローする確率アップ。さらにデッキにある姫芽のスキルの消費APを-9し、姫芽が《イグニッションモード》になる。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.AP_REDUCE,
          SKILL_DETAIL.MODE_CHANGE,
        ],
      },
    },
  },
  ブラストアトラクション: {
    blastAttraction_01: {
      text: [
        'ビートハート',
        '個分のスキルハートを獲得、このセクション中、獲得するLOVEを+',
        '%、ボルテージPt.を+',
        'このステージ中、ハート上限を+',
        'する。さらにメンタルを最大値の22%させ、姫芽の《イグニッションモード》を解除する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.MENTAL_REDUCE,
          SKILL_DETAIL.MODE_CHANGE,
        ],
      },
    },
  },
  'S.R.K. Link': {
    'SRK-Link_01': {
      text: [
        'このステージ中、さやか/瑠璃乃/花帆のスキルを全員使用するたび、ボルテージPt.を+',
        '、このセクション中、獲得するLOVEを+',
        '%、ハート上限を+',
        'し、ビートハート',
        '回分のスキルハートを獲得する。消費APの合計に応じてハート上限増加効果以外の効果量が変化する。各メンバーのスキルを重複した際、消費APの記録を上書きする。',
      ],
      detail: {
        attr: 'SRK',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
    'SRK-Link_02': {
      text: [
        'このステージ中、さやか/瑠璃乃/花帆のスキルを全員使用するたび、このセクション中、獲得するLOVEを+',
        '%、ハート上限を+',
        '、ボルテージPt.を+',
        'し、ビートハート',
        '回分のスキルハートを獲得する。消費APの合計に応じてハート上限増加効果以外の効果量が変化する。各メンバーのスキルを重複した際、消費APの記録を上書きする。',
      ],
      detail: {
        attr: 'SRK',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
    'SRK-Link_03': {
      text: [
        'このステージ中、さやか/瑠璃乃/花帆のスキルを全員使用するたび、このセクション中、ハート上限を+',
        '、獲得するLOVEを+',
        '%、ボルテージPt.を+',
        'し、ビートハート',
        '回分のスキルハートを獲得する。消費APの合計に応じてハート上限増加効果以外の効果量が変化する。各メンバーのスキルを重複した際、消費APの記録を上書きする。',
      ],
      detail: {
        attr: 'SRK',
        type: [
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_CAPTCHA,
        ],
      },
    },
  },
  フラワーイグニッション: {
    flowerIgnition_01: {
      text: [
        '手札を全て捨てて、捨て札を全て山札に戻した後、デッキから手札上限までスキルを引く。この時さやか、瑠璃乃、花帆のスキルをドローする確率アップ。さらにデッキにあるさやか、花帆のスキルの消費APを-9し、姫芽が《イグニッションモード》になる。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.AP_REDUCE,
          SKILL_DETAIL.MODE_CHANGE,
        ],
      },
    },
  },
  トリプレットボルテージ: {
    tripletVoltage_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにムードがハッピー、メロウいずれか33以上のとき、ボルテージPt.を+',
        'し、メンタルが33%以下のとき、さやか、瑠璃乃、花帆がそれぞれ3回の間使用するスキルハート獲得効果による獲得量を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
    tripletVoltage_02: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにムードがハッピー、メロウいずれか33以上のとき、このセクション中、獲得するLOVEを+',
        '%、デッキ枚数が23枚以上のとき、さやか、瑠璃乃、花帆がそれぞれ3回の間使用するスキルハート獲得効果による獲得量を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
        ],
      },
    },
  },
  トリプレットワイド: {
    tripletWide_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにムードがハッピー、メロウいずれか33以上のとき、このセクション中、ハート上限を+',
        'し、3回の間さやかが使用するボルテージゲイン効果を+',
        '%、3回の間花帆が使用するラブアトラクト効果を+',
        '%、姫芽の《イグニッションモード》を解除する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.MODE_CHANGE,
        ],
      },
    },
  },
  リテイクワイド: {
    retakeWide_01: {
      text: [
        'このセクション中、ハート上限を+',
        'する。さらに手札を全て捨てて、デッキから手札上限までスキルを引く。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.HEART_LIMIT_UP, SKILL_DETAIL.RESHUFFLE],
      },
    },
  },
  ダブルパンチ: {
    doublePunch_01: {
      text: [
        'ハートフルパンチカードを1種類(合計2枚)山札に追加する。さらにこのステージ中、ハートフルパンチカードの使用によるスキルハート獲得効果の獲得数を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.ADD_CARD, SKILL_DETAIL.BOOST_HEART_CAPTCHA],
      },
    },
  },
  ハートフルパンチ: {
    heartfulPunch_01: {
      text: [
        '手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引く。この時花帆、吟子、ドレスカード、ハートフルパンチカードをドローする確率大幅アップ',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.RESHUFFLE],
      },
    },
  },
  レイディアントアトラクション: {
    radiantAttraction_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにメンタルが0かつムードがメロウ100のとき、ボルテージPt.を+',
        '、このセクション中、獲得するLOVEを+',
        '%し、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  バックリットアンビエンス: {
    backlitAmbience_01: {
      text: [
        'このセクション中、手札の上限枚数を3枚増加する。さらに手札を全て捨てて、デッキから手札上限までスキルを引き、このセクション中、ムード値を-',
        'する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.RESHUFFLE],
      },
    },
  },
  イルミネイトブースト: {
    illuminateBoost_01: {
      text: [
        '次に使用するスキルハート獲得効果による獲得数を+',
        'し、手札を全て捨てて、デッキから手札上限までスキルを引く。',
        'さらにメンタルが0かつムードがメロウ100のとき、小鈴がそれぞれ3回の間使用するボルテージゲイン効果を+',
        '%、ラブアトラクト効果を+',
        '%し、ビートハート',
        '回分のスキルハートを獲得する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.RESHUFFLE],
      },
    },
  },
  ソーラーココナツ: {
    solarCoconut_01: {
      text: [
        'フィーバーを除く2～3セクション目のとき、このセクション中、ビートハートの出現個数を+',
        '、手札の上限枚数を5枚増加、AP回復速度を+',
        '%し、APを',
        '回復する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.VIBES_SECTION,
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  ココナツトロピカル: {
    coconutTropical_01: {
      text: [
        'フィーバーを除く2～3セクション目のとき、55回の間スキルハート獲得効果による獲得数を+',
        '%、このセクション中、ムード値を+',
        '、手札を全て捨てて、捨札を山札に戻した後、デッキから手札上限までスキルを引き、さらにムードがハッピー100のとき、次に姫芽が使用するボルテージゲイン効果を+',
        '%、このセクション中、獲得するLOVEを+',
        '%する。それ以外のセクションの時、デッキ内の全てのスキルの消費APを-2する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.AMBIENCE_SECTION,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.AP_REDUCE,
        ],
      },
    },
  },
  ココナツパラダイス: {
    coconutParadise_01: {
      text: [
        'フィーバーを除く2～3セクション目のとき、55回の間スキルハート獲得効果による獲得数を+',
        '%、このセクション中、ムード値を+',
        '、手札を全て捨てて、捨札を山札に戻した後、デッキから手札上限までスキルを引き、さらにムードがハッピー100のとき、ボルテージPt.を+',
        '、次に瑠璃乃が使用するラブアトラクト効果を+',
        '%する。それ以外のセクションの時、デッキ内の全てのスキルの消費APを-2する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.AMBIENCE_SECTION,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.AP_REDUCE,
        ],
      },
    },
  },
  サマードーン: {
    summerDawn_01: {
      text: [
        'フィーバーを除く1～2セクション目のとき、このセクション中、AP回復速度を+',
        '%、手札の上限枚数を3枚増加し、APを',
        '回復する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  アサガオデュー: {
    asagaoDew_01: {
      text: [
        'フィーバーを除く1～2セクション目のとき、3回の間スキルハート獲得効果による獲得量を+',
        '%、このセクション中、ムード値を-',
        'し、さらにムードがメロウ50以上のとき、手札を全て捨てて、デッキから手札上限までスキルを引き、このセクション中、手札の上限枚数を2枚増加する。それ以外のセクションのとき、デッキ内の全てのスキルの消費APを-1する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.AMBIENCE_SECTION,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.AP_REDUCE_DECK_ALL,
        ],
      },
    },
    asagaoDew_02: {
      text: [
        'フィーバーを除く1～2セクション目のとき、3回の間ラブアトラクト効果を+',
        '%、このセクション中、ムード値を-',
        'し、さらにムードがメロウ50以上のとき、手札を全て捨てて、デッキから手札上限までスキルを引き、このセクション中、メンタルが0になってもメンタルダウンしなくなる。それ以外のセクションのとき、デッキ内の全てのスキルの消費APを-1する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.AMBIENCE_SECTION,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.AP_REDUCE_DECK_ALL,
        ],
      },
    },
  },
  ムーンライトブルーム: {
    moonlightBloom_01: {
      text: [
        'フィーバーを除く3～4セクション目のとき、このセクション中、ビートハートの出現個数を+',
        '、AP回復速度を+',
        '%し、手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引く。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.VIBES_SECTION,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.RESHUFFLE,
        ],
      },
    },
  },
  ファイアフラワー: {
    fireFlower_01: {
      text: [
        'フィーバーを除く3～4セクション目のとき、ビートハート',
        '回分のスキルハートを獲得し、手札を全て捨てて、デッキから手札上限までスキルを引く。さらにデッキ枚数が23枚以上のとき、このステージ中、ハート上限を+',
        'し、87回の間スキルハート獲得効果による獲得量を+',
        '%する。それ以外のセクションのとき、デッキ内の全てのスキルの消費APを-2する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.AP_REDUCE_DECK_ALL,
        ],
      },
    },
  },
  ナイトクイーン: {
    nightQueen_01: {
      text: [
        'ビートハート873回分のスキルハートを獲得し、このステージ中、獲得するLOVEを+873%し、ハート上限を+87する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  サマーマジックアワー: {
    summerMagicHour_01: {
      text: [
        'フィーバーセクションのとき、ムードがハッピー、メロウいずれかのとき、このセクション中、ムード値を+',
        'し、ビートハートの出現個数を+',
        'する。さらにこのステージ中、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.AMBIENCE_SECTION,
          SKILL_DETAIL.VIBES_STAGE,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
    summerMagicHour_02: {
      text: [
        'フィーバーセクションのとき、このセクション中、AP回復速度を+',
        '%し、ビートハートの出現個数を+',
        'する。さらにこのステージ中、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.VIBES_STAGE,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
        ],
      },
    },
  },
  ドリームジョッキー: {
    dreamJockey_01: {
      text: [
        'このステージ中、手札の上限枚数を2枚増加し、ムードがハッピー、メロウいずれかのとき、このセクション中、ムード値を+',
        'する。さらにムードがハッピー、メロウいずれか64以上のとき、このステージ中、ハート上限を+',
        'し、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.EXTENSIONS_STAGE,
          SKILL_DETAIL.AMBIENCE_SECTION,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.VOLTAGE_GAIN,
        ],
      },
    },
    dreamJockey_02: {
      text: [
        'このステージ中、AP回復速度を+',
        '%し、ムードがハッピー、メロウいずれかのとき、このセクション中、ムード値を+',
        'する。さらにムードがハッピー、メロウいずれか64以上のとき、このステージ中、ハート上限を+',
        'し、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.AMBIENCE_SECTION,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.VOLTAGE_GAIN,
        ],
      },
    },
  },
  イーシェン: {
    eshen_01: {
      text: [
        'フィーバーを除く1セクション目のとき、手札を山札リセットシャッフルし、このセクション中、手札の上限枚数を4枚増加、APを',
        '回復する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  リャンシェン: {
    ryanshen_01: {
      text: [
        'フィーバーを除く2セクション目のとき、手札を山札リセットシャッフルし、このセクション中、手札の上限枚数を4枚増加、APを',
        '回復する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  サンシェン: {
    sanshen_01: {
      text: [
        'フィーバーセクションを除く3セクション目のとき、手札を全て捨てて、捨札を山札に戻した後、デッキから手札上限までスキルを引き、このセクション中、手札の上限枚数を4枚増加、APを',
        '回復する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  スーシェン: {
    sushen_01: {
      text: [
        'フィーバーを除く4セクション目のとき、手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引き、このセクション中、手札の上限枚数を4枚増加、APを',
        '回復する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTENSIONS_SECTION,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  テトライミテーション: {
    tetraImitation_01: {
      text: [
        'フィーバーを除く1セクション目のとき、カードがステージにセットされ、ハート上限増加効果を吸収する。ハート上限増加効果を400個分吸収したとき、このステージ中、ハート上限を+',
        'し、捨札に移動する。それ以外のセクションのとき、カードがステージにセットされ、AP回復効果を吸収する。AP回復効果を4吸収したとき、デッキ内のセラスのスキルの消費APを-4し、捨札に移動する。',
      ],
      detail: {
        attr: 'imitation',
        type: [
          SKILL_DETAIL.IMITATION,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.AP_REDUCE,
        ],
      },
    },
  },
  テトラバイブス: {
    tetraVibes_01: {
      text: [
        'フィーバーを除く2セクション目のとき、このセクション中、ビートハートの出現個数を+',
        'する。それ以外のセクションのとき、デッキ内のさやかのスキルの消費AP-4。',
      ],
      detail: {
        attr: 'imitation',
        type: [SKILL_DETAIL.VIBES_SECTION, SKILL_DETAIL.AP_REDUCE],
      },
    },
  },
  テトラハート: {
    tetraHeart_01: {
      text: [
        'フィーバーを除く4セクション目のとき、ビートハート',
        '回分のスキルハートを獲得、このステージ中、ハート上限を+',
        '、獲得するLOVEを+',
        '%し、ボルテージPt.を+',
        'する。それ以外のセクションのとき、デッキ内の泉のスキルの消費AP-4。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.AP_REDUCE,
        ],
      },
    },
  },
  テトラゲイン: {
    tetraGain_01: {
      text: [
        'フィーバーを除く3セクション目のとき、ボルテージPt.を+',
        '、このステージ中、ハートの上限を+',
        '、獲得するLOVEを+',
        '%し、ビートハート',
        '個分のスキルハートを獲得する。それ以外のセクションのとき、デッキ内の花帆のスキルの消費AP-4。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.AP_REDUCE,
        ],
      },
    },
  },
  エンジェルアシスト: {
    angelAssist_01: {
      text: [
        '次に泉が使用するラブアトラクト効果を+',
        '%する。さらにこのステージ中、ビートハートの出現個数を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.BOOST_LOVE_ATTRACT, SKILL_DETAIL.VIBES_STAGE],
      },
    },
  },
  デビルアシスト: {
    devilAssist_01: {
      text: [
        '次にセラスが使用するラブアトラクト効果を+',
        '%する。さらにこのステージ中、AP回復速度を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.BOOST_LOVE_ATTRACT, SKILL_DETAIL.AP_QUICK],
      },
    },
  },
  ジェネシスレルム: {
    genesisRealm_01: {
      text: [
        'AP、ボルテージ、メンタルの変動に応じてジェネシスプログレスが増減するようになり、ハートがフラワーに変化する。ジェネシスプログレスはこのスキルのLv.が高いほど大きく増減し、ジェネシスプログレスに応じてフラワー回収時のLOVEが変動する。さらに手札からスキルを使用したとき、スキル使用不可となるクールタイムが発生する。クールタイムは楽曲が短いほど短くなる。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.COOL_TIME],
      },
    },
  },
  ブルーミングホライゾン: {
    bloomingHorizon_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにこのステージ中、AP回復速度を+',
        '%、ボルテージPt.を+',
        'し、メンタルを最大値の',
        '%回復させる。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.AP_QUICK,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MENTAL_RECOVER,
        ],
      },
    },
  },
  アウェイキングガイア: {
    awakingGaia_01: {
      text: ['このステージ中、あらゆるスキル効果量を', '%増幅する。'],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.BOOST_ALL_STAGE],
      },
    },
  },
  ブルーミングフューエル: {
    bloomingFuel_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、APを',
        '回復する。さらにボルテージLv.が20以上のとき、3回の間ボルテージゲイン効果を+',
        '%し、メンタルが100%以上のとき、3回の間メンタルリカバー効果を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.AP_GAIN,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.BOOST_MENTAL_RECOVER,
        ],
      },
    },
  },
  セカンドサイト: {
    secondSight_01: {
      text: [
        'スペシャルアピールから、手札を山札リセットシャッフルし任意メンバーのスキルをサーチできるようになる。さらにこのステージ中、手札上限枚数を常に最大にする。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.ADD_SPECIAL_APPEAL,
        ],
      },
    },
  },
  ブルーミングパス: {
    bloomingPath_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得、手札をシャッフル、このセクション中、手札の上限枚数を3枚増加し、ムードがハッピー、メロウいずれかのとき、ムード値を+',
        'する。さらにムードがハッピー、メロウいずれか100のとき、このステージ中、獲得するLOVEを+',
        '%し、ハート上限を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.EXTEND_HAND,
          SKILL_DETAIL.AMBIENCE_SECTION,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  'サモン：梢': {
    'summon-kozue_01': {
      text: [
        '手札を山札リセットシャッフルする。この時梢のカードをドローする確率大幅アップ。再使用にクールタイムが発生する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.DREW,
          SKILL_DETAIL.COOL_TIME,
        ],
      },
    },
  },
  'サモン：綴理': {
    'summon-tsuzuri_01': {
      text: [
        '手札を山札リセットシャッフルする。この時綴理のカードをドローする確率大幅アップ。再使用にクールタイムが発生する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.DREW,
          SKILL_DETAIL.COOL_TIME,
        ],
      },
    },
  },
  'サモン：慈': {
    'summon-megumi_01': {
      text: [
        '手札を山札リセットシャッフルする。この時の慈カードをドローする確率大幅アップ。再使用にクールタイムが発生する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.DREW,
          SKILL_DETAIL.COOL_TIME,
        ],
      },
    },
  },
  'サモン：花帆': {
    'summon-kaho_01': {
      text: [
        '手札を山札リセットシャッフルする。この時花帆のカードをドローする確率大幅アップ。再使用にクールタイムが発生する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.DREW,
          SKILL_DETAIL.COOL_TIME,
        ],
      },
    },
  },
  'サモン：さやか': {
    'summon-sayaka_01': {
      text: [
        '手札を山札リセットシャッフルする。この時さやかのカードをドローする確率大幅アップ。再使用にクールタイムが発生する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.DREW,
          SKILL_DETAIL.COOL_TIME,
        ],
      },
    },
  },
  'サモン：瑠璃乃': {
    'summon-rurino_01': {
      text: [
        '手札を山札リセットシャッフルする。この時瑠璃乃のカードをドローする確率大幅アップ。再使用にクールタイムが発生する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.DREW,
          SKILL_DETAIL.COOL_TIME,
        ],
      },
    },
  },
  'サモン：吟子': {
    'summon-ginko_01': {
      text: [
        '手札を山札リセットシャッフルする。この時吟子のカードをドローする確率大幅アップ。再使用にクールタイムが発生する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.DREW,
          SKILL_DETAIL.COOL_TIME,
        ],
      },
    },
  },
  'サモン：小鈴': {
    'summon-kosuzu_01': {
      text: [
        '手札を山札リセットシャッフルする。この時小鈴のカードをドローする確率大幅アップ。再使用にクールタイムが発生する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.DREW,
          SKILL_DETAIL.COOL_TIME,
        ],
      },
    },
  },
  'サモン：姫芽': {
    'summon-hime_01': {
      text: [
        '手札を山札リセットシャッフルする。この時姫芽のカードをドローする確率大幅アップ。再使用にクールタイムが発生する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.DREW,
          SKILL_DETAIL.COOL_TIME,
        ],
      },
    },
  },
  'サモン：泉': {
    'summon-izumi_01': {
      text: [
        '手札を山札リセットシャッフルする。この時泉のカードをドローする確率大幅アップ。再使用にクールタイムが発生する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.DREW,
          SKILL_DETAIL.COOL_TIME,
        ],
      },
    },
  },
  'サモン：セラス': {
    'summon-seras_01': {
      text: [
        '手札を山札リセットシャッフルする。この時セラスのカードをドローする確率大幅アップ。再使用にクールタイムが発生する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.DREW,
          SKILL_DETAIL.COOL_TIME,
        ],
      },
    },
  },
  'Dream Bloom Link': {
    dreamBloomLink_01: {
      text: [
        'このステージ中、吟子/花帆/小鈴/さやか/姫芽/瑠璃乃/泉/セラスのスキルを全員使用するたび、このセクション中、獲得するLOVEを+',
        '%、ビートハートの出現個数を+',
        '、ハート上限を+',
        'する。消費APの合計に応じてアトラクトの効果量が変化する。各メンバーのスキルを重複した際、消費APの記録を上書きする。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.VIBES_SECTION,
          SKILL_DETAIL.HEART_LIMIT_UP,
        ],
      },
    },
  },
  アーリーボルテックスプロテクト: {
    earlyVortexProtect_01: {
      text: [
        'メンタルを最大値の',
        '%回復させ、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにフィーバーを除く1～2セクション目のとき、ボルテージPt.を+',
        'する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.PROTECT_SECTION,
          SKILL_DETAIL.VOLTAGE_GAIN,
        ],
      },
    },
  },
  オトメライター: {
    otomeWriter_01: {
      text: [
        'このステージ中、マニュスクリプト/スリーズアンソロジーカードの使用によるスキルハート獲得効果による獲得数を+',
        '%する。さらにデッキ枚数が32枚以上のとき、マニュスクリプトカードを1種類(合計1枚)山札に追加する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.BOOST_HEART_CAPTCHA, SKILL_DETAIL.ADD_CARD],
      },
    },
  },
  マニュスクリプト: {
    manuscript_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにこのステージ中、ハート上限を+',
        'し、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
        ],
      },
    },
  },
  スリーズアンソロジー: {
    ceriseAnthology_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得する。さらにこのステージ中、ハート上限を+',
        'し、獲得するLOVEを+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.HEART_LIMIT_UP,
          SKILL_DETAIL.LOVE_ATTRACT_STAGE,
        ],
      },
    },
  },
  リライトページ: {
    rewritePage_01: {
      text: [
        '手札を山札リセットシャッフルし、メンタルを最大値の',
        '%回復させる。さらにメンタルが100%のとき、次に使用するハート上限増加効果を+',
        '%、次のマニュスクリプト/スリーズアンソロジーカードの使用によるスキルハート獲得効果による獲得数を+',
        '%、ラブアトラクト効果を+',
        '%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.BOOST_WIDE_HEART,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
        ],
      },
    },
  },
  リバイタリゼーション: {
    revitalization_01: {
      text: [
        'このセクション中、メンタルリカバー効果を+',
        '%、メンタルプロテクト効果を+',
        '%し、このセクション中、AP回復速度を-9%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.BOOST_MENTAL_RECOVER,
          SKILL_DETAIL.BOOST_MENTAL_PROTECT,
          SKILL_DETAIL.AP_SLOW,
        ],
      },
    },
  },
  スティミュレーション: {
    stimulation_01: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにメンタルが99%以上のとき、9回の間スキルハート獲得効果による獲得数を+',
        '%し、メンタルを最大値の33%固定で減少、メンタルが66%以上のとき、9回の間ボルテージゲイン効果を+',
        '%し、メンタルを最大値の22%固定で減少、メンタルが33%以上のとき、手札をシャッフル、9回の間メンタルプロテクト効果を+',
        '%し、メンタルを最大値の11%固定で減少させる。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.MENTAL_REDUCE,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.BOOST_MENTAL_PROTECT,
        ],
      },
    },
    stimulation_02: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらにメンタルが99%以上のとき、9回の間スキルハート獲得効果による獲得数を+',
        '%し、メンタルを最大値の33%固定で減少、メンタルが66%以上のとき、9回の間ラブアトラクト効果を+',
        '%し、メンタルを最大値の22%固定で減少、メンタルが33%以上のとき、手札をシャッフル、9回の間メンタルプロテクト効果を+',
        '%し、メンタルを最大値の11%固定で減少させる。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.BOOST_HEART_CAPTCHA,
          SKILL_DETAIL.MENTAL_REDUCE,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.BOOST_MENTAL_PROTECT,
        ],
      },
    },
  },
  QQボックス: {
    QQBox_01: {
      text: [
        'メンタルを最大値の',
        '%回復させ、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。さらに手札を山札リセットシャッフルする。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.RESHUFFLE,
        ],
      },
    },
  },
  ダンシングボルテージ: {
    dancingVoltage_01: {
      text: [
        'このセクション中、ボルテージLv.を無限にし、ボルテージPt.獲得効果発動時、スキルハートを獲得、APを0～20回復する。発動した効果の効果値とスペシャルアピールのLvが高いほど効果値が増加、デッキ枚数が18枚より少ないほど効果値が減少する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.INFINITY_VOLTAGE_SECTION,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
    dancingVoltage_02: {
      text: [
        'このセクション中、ボルテージLv.を無限にし、ボルテージPt.獲得効果発動時、このセクション中、獲得するLOVEを増加、APを0～20回復する。発動した効果の効果値とスペシャルアピールのLvが高いほど効果値が増加、デッキ枚数が18枚より少ないほど効果値が減少する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.INFINITY_VOLTAGE_SECTION,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.AP_GAIN,
        ],
      },
    },
  },
  ウイングビートアトラクション: {
    wingBeatAttraction_01: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにメンタルが100%以上のとき、ビートハート',
        '回分のスキルハートを獲得、このセクション中、獲得するLOVEを+',
        '%、ボルテージPt.を+',
        '、メンタルが0になってもメンタルダウンしなくなり、メンタルを最大値の99%固定で減少させる。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.LOVE_ATTRACT_SECTION,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MENTAL_DOWN_SECTION,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  ウイングビートチャレンジャー: {
    wingBeatChallenger_01: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにメンタルが100%以上のとき、手札をシャッフル、ビートハート',
        '回分のスキルハートを獲得、それぞれ3回の間さやかが使用するラブアトラクト効果を+',
        '%、ボルテージゲイン効果を+',
        '、デッキ内のさやかのスキルの消費APを-8し、メンタルを最大値の99%固定で減少させる。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.BOOST_LOVE_ATTRACT,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.AP_REDUCE,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  ウイングビートメンター: {
    wingBeatMentor_01: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらにメンタルが100%以上のとき、手札をシャッフル、ビートハート',
        '回分のスキルハートを獲得し、このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にする。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.RESHUFFLE,
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.PROTECT_STAGE,
        ],
      },
    },
  },
  セルフィッシュフェザー: {
    selfishFeater_01: {
      text: [
        '手札をリセットシャッフルする。さらにこのセクション中、AP回復速度を+80%する。',
      ],
      detail: {
        attr: '',
        type: [SKILL_DETAIL.RESHUFFLE, SKILL_DETAIL.AP_QUICK],
      },
    },
  },
  ドンビーシャイ: {
    doNotBeShy_01: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらに5回の間メンタルリカバー効果を+',
        '%し、このセクション中、AP回復速度を-20%する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.BOOST_MENTAL_RECOVER,
          SKILL_DETAIL.AP_SLOW,
        ],
      },
    },
    doNotBeShy_02: {
      text: [
        'メンタルを最大値の',
        '%回復させる。さらに5回の間メンタルリカバー効果を+',
        '%し、このセクション中、手札の上限枚数を2枚減少する。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.BOOST_MENTAL_RECOVER,
          SKILL_DETAIL.CARD_REDUCE,
        ],
      },
    },
  },
  ロマンプロテクション: {
    romanceProtection_01: {
      text: [
        'このステージ中、メンタルの最大値の',
        '%分のメンタルダメージを無効にし、ボルテージPt.を+',
        '、メンタルを最大値の+',
        '%回復させる。さらにメンタルが100%以上のとき、次に小鈴が使用するボルテージゲイン効果を+',
        '%、デッキ内の小鈴のスキルの消費AP-3し、メンタルを最大値の50%固定で減少させる。',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.PROTECT_STAGE,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.AP_REDUCE,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
  ロマンハート: {
    romanceHeart_01: {
      text: [
        'ビートハート',
        '回分のスキルハートを獲得し、ボルテージPt.を+',
        '、メンタルを最大値の',
        '%回復させる。さらにメンタルが100%以上のとき、次にさやかが使用するボルテージゲイン効果を+',
        '%、デッキ内のさやかのスキルの消費AP-3し、メンタルを最大値の50%固定で減少させる',
      ],
      detail: {
        attr: '',
        type: [
          SKILL_DETAIL.HEART_CAPTCHA,
          SKILL_DETAIL.VOLTAGE_GAIN,
          SKILL_DETAIL.MENTAL_RECOVER,
          SKILL_DETAIL.BOOST_VOLTAGE_GAIN,
          SKILL_DETAIL.AP_REDUCE,
          SKILL_DETAIL.MENTAL_REDUCE,
        ],
      },
    },
  },
} as const;
export type skillList = keyof typeof SKILL_LIST;
