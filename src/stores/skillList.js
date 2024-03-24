import { defineStore } from 'pinia';

export const useSkillStore = defineStore('skillList', {
  state: () => ({
    skillList: {
      'ハートキャプチャ': {
        heartCaptcha: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha']
          }
        }
      },
      'ラブアトラクト': {
        loveAttract: {
          text: [
            '次のハート回収時、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['loveAttract']
          }
        },
        loveAttract_section: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['loveAttract_section']
          }
        },
        loveAttract_stage: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['loveAttract_stage']
          }
        }
      },
      'ボルテージゲイン': {
        voltageGain: {
          text: [
            'ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: '',
            type: ['voltageGain']
          }
        }
      },
      'メンタルリカバー': {
        mentalRecover: {
          text: [
            'メンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: '',
            type: ['mentalRecover']
          }
        }
      },
      'メンタルプロテクト': {
        mentalProtect: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにこのセクション中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: '',
            type: ['mentalRecover', 'protect_section']
          }
        }
      },
      'リフレッシュハート': {
        refreshHeart: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'refresh',
            type: ['reshuffle', 'heartCaptcha']
          }
        }
      },
      'リフレッシュマインド': {
        refreshMind: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'refresh',
            type: ['reshuffle', 'mentalRecover']
          }
        }
      },
      'リフレッシュサポート': {
        refreshSupport_stage: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
            '%回復させ、このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'refresh',
            type: ['reshuffle', 'mentalRecover', 'loveAttract_stage']
          }
        }
      },
      'ハートアトラクション': {
        heartAttraction_section: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'loveAttract_section']
          }
        },
        heartAttraction_stage: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにこのステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'loveAttract_stage']
          }
        },
        heartAttraction_50: {
          text: [
            '50個のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'loveAttract_section']
          }
        },
        heartAttraction_100: {
          text: [
            '100個のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'loveAttract_section']
          }
        }
      },
      'ハートブースト': {
        heartBoost: {
          text: [
            '次に使用するスキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['boost']
          }
        }
      },
      'ハイアトラクト': {
        highAttract_stage: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が6以上の時APを1回復する。'
          ],
          detail: {
            attr: 'high',
            type: ['loveAttract_stage', 'APGain']
          }
        }
      },
      'ハイボルテージ': {
        highVoltage: {
          text: [
            'ボルテージPt.を+',
            'する。使用時のボルテージLv.が6以上だった時、さらにAPを1回復する。'
          ],
          detail: {
            attr: 'high',
            type: ['voltageGain', 'APGain']
          }
        },
        highVoltage_ver2: {
          text: [
            'ボルテージPt.を+',
            'する。さらにボルテージLv.が6以上の時APを1回復する。'
          ],
          detail: {
            attr: 'high',
            type: ['voltageGain', 'APGain']
          }
        },
        highVoltage_heartCaptcha: {
          text: [
            'ボルテージPt.を+',
            'する。使用時のボルテージLv.が6以上の時、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'high',
            type: ['voltageGain', 'heartCaptcha']
          }
        },
      },
      'チアフルハート': {
        cheerfulHeart_APGain: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルが75%以上のとき、APを1回復する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['heartCaptcha', 'APGain']
          }
        },
        cheerfulHeart_heartCaptcha: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルが50%以上のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['heartCaptcha']
          }
        }
      },
      'チアフルアトラクト': {
        cheerfulAttract_APGain_over75: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにメンタルが75%以上のとき、APを1回復する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['loveAttract_stage', 'APGain']
          }
        },
        cheerfulAttract_loveAttract_over50: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにメンタルが50%以上のとき、このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['loveAttract_stage']
          }
        }
      },
      'チアフルアトラクション': {
        cheerfulAttraction: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルが75%以上のとき、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['heartCaptcha', 'loveAttract_section']
          }
        }
      },
      'チアフルボルテージ': {
        cheerfulVoltage_voltageGain: {
          text: [
            'ボルテージPt.を+',
            'する。さらにメンタルが50%以上のとき、ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['voltageGain']
          }
        },
        cheerfulVoltage_heartCaptcha: {
          text: [
            'ボルテージPt.を+',
            'する。さらにメンタルが75%以上のとき、ビートハート',
            '個分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['voltageGain', 'heartCaptcha']
          }
        }
      },
      'チアフルリカバー': {
        cheerfulRecover: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにメンタルが75%以上のとき、APを2回復する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['mentalRecover', 'APGain']
          }
        }
      },
      'チアフルプロテクト': {
        cheerfulProtect_loveAttract: {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにメンタルが75%以上のとき、このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['protect_stage', 'loveAttract_stage']
          }
        }
      },
      'チアフルリゲイン': {
        cheerfulRegain: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルが50%以上のとき、ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['reshuffle', 'voltageGain']
          }
        }
      },
      'チアフルヒーリング': {
        cheerfulHealing: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにメンタルが75%以上のとき、ビートハート',
            '個分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['mentalRecover', 'heartCaptcha']
          }
        }
      },
      'チアフルサポート': {
        cheerfulSupport_over75_section: {
          text: [
            'メンタルを最大値の',
            '%回復する。さらにメンタルが75%以上のとき、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['mentalRecover', 'loveAttract_section']
          }
        },
        cheerfulSupport_over75_stage: {
          text: [
            'メンタルを最大値の',
            '%回復する。さらにメンタルが75%以上のとき、このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['mentalRecover', 'loveAttract_stage']
          }
        }
      },
      'チアフルエンデュランス': {
        cheerfulEndurance_over75: {
          text: [
            'ボルテージPt.を+',
            'する。さらにメンタルが75%以上のとき、メンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['voltageGain', 'mentalRecover']
          }
        }
      },
      'チアフルイニシエイト': {
        cheerfulInitiate: {
          text: [
            'ボルテージPt.を+',
            'する。さらにメンタルが75%以上のとき、このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['voltageGain', 'protect_stage']
          }
        }
      },
      'チアフルファッシネイト': {
        cheerfulFascinate_section_over75: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにメンタルが75%以上のとき、ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['loveAttract_section', 'voltageGain']
          }
        },
        cheerfulFascinate_stage_over50: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにメンタルが50%以上のとき、ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['loveAttract_stage', 'voltageGain']
          }
        }
      },
      'チアフルブースト': {
        cheerfulBoost: {
          text: [
            '次に使用するスキルハート獲得効果による獲得数を+',
            '%する。さらにメンタルが50%以上のとき、次に使用するスキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['boost']
          }
        }
      },
      'アグレッシブハート': {
        aggressiveHeart_mentalReduce10: {
          text: [
            'ビートハート',
            '個分のスキルハートを獲得する。さらにメンタルを最大値の10%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['heartCaptcha', 'mentalReduce']
          }
        },
        aggressiveHeart_mentalReduce15: {
          text: [
            'ビートハート',
            '個分のスキルハートを獲得する。さらにメンタルを最大値の15%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['heartCaptcha', 'mentalReduce']
          }
        }
      },
      'アグレッシブアトラクト': {
        aggressiveAttract_mentalReduce15_section: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにメンタルを最大値の15%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['loveAttract_section', 'mentalReduce']
          }
        },
        aggressiveAttract_mentalReduce25_stage: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにメンタルを最大値の25%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['loveAttract_stage', 'mentalReduce']
          }
        }
      },
      'アグレッシブアトラクション': {
        aggressiveAttraction25_sectionAttract: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
            '%する。さらにメンタルを最大値の25%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['heartCaptcha', 'loveAttract_section', 'mentalReduce']
          }
        }
      },
      'アグレッシブリゲイン': {
        aggressiveRegain10_stageAttract: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、獲得するLOVEを+',
            '%し、メンタルを最大値の10%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['reshuffle', 'loveAttract_stage', 'mentalReduce']
          }
        }
      },
      'リゲインボルテージ': {
        regainVoltage: {
          text: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにボルテージPt.を+',
          'する。'
        ],
        detail: {
          attr: 'regain',
          type: ['reshuffle', 'voltageGain']
        }
      }
      },
      'リゲインアトラクト': {
        regainAttract_section: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'regain',
            type: ['reshuffle', 'loveAttract_section']
          }
        },
        regainAttract_stage: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'regain',
            type: ['reshuffle', 'loveAttract_stage']
          }
        }
      },
      'リゲインファッシネイト': {
        regainFascinate_stage: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにステージ中、獲得LOVEを+',
            '%し、ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: '',
            type: ['reshuffle', 'loveAttract_stage', 'voltageGain']
          }
        }
      },
      'エクステハート': {
        extensionsHeart_section3: {
          text: [
            'このセクション中、手札の上限枚数を3枚増加する。さらにビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'heartCaptcha']
          }
        },
        extensionsHeart_stage1: {
          text: [
            'このステージ中、手札の上限枚数を1枚増加する。さらにビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_stage', 'heartCaptcha']
          }
        }
      },
      'エクステアトラクト': {
        extensions1_attract_section: {
          text: [
            'このセクション中、手札の上限枚数を1枚増加する。さらにこのステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'loveAttract_stage']
          }
        },
        extensions2_attract_section: {
          text: [
            'このセクション中、手札の上限枚数を2枚増加する。さらにこのステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'loveAttract_stage']
          }
        },
        extensions3_attract_section: {
          text: [
            'このセクション中、手札の上限枚数を3枚増加する。さらにこのステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'loveAttract_stage']
          }
        },
        extensions4_attract_section: {
          text: [
            'このセクション中、手札の上限枚数を4枚増加する。さらにこのセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'loveAttract_section']
          }
        }
      },
      'エクステボルテージ': {
        extensions2_voltage_section: {
          text: [
            'このセクション中、手札の上限枚数を2枚増加する。さらにボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'voltageGain']
          }
        },
        extensions3_voltage_section: {
          text: [
            'このセクション中、手札の上限枚数を3枚増加する。さらにボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'voltageGain']
          }
        },
        extensions1_voltage_stage: {
          text: [
            'このステージ中、手札の上限枚数を1枚増加する。さらにボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_stage', 'voltageGain']
          }
        }
      },
      'エクステプロテクト': {
        extensions1_protect: {
          text: [
            'このステージ中、手札の上限枚数を1枚追加する。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_stage', 'protect_stage']
          }
        }
      },
      'ファッシネイション': {
        fascination_voltageGain: {
          text: [
            'ボルテージPt.を+',
            'する。さらにこのステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'fascination',
            type: ['voltageGain', 'loveAttract_stage']
          }
        },
        fascination_section: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'fascination',
            type: ['loveAttract_section', 'voltageGain']
          }
        },
        fascination_stage: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'fascination',
            type: ['loveAttract_stage', 'voltageGain']
          }
        }
      },
      'リプレイアトラクション': {
        replayAttraction_section: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにビートハート',
            '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'replay',
            type: ['reshuffle', 'heartCaptcha', 'loveAttract_section']
          }
        }
      },
      'サポーテッドフィール': {
        supportedFeel_section: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにこのセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'feel',
            type: ['mentalRecover', 'loveAttract_section']
          }
        },
        supportedFeel_stage: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにこのステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'feel',
            type: ['mentalRecover', 'loveAttract_stage']
          }
        },
        supportedFeel_sectionAttract_mentalRecover: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。メンタルを最大値の',
            '%回復させる。さらに'
          ],
          detail: {
            attr: 'feel',
            type: ['loveAttract_section', 'mentalRecover']
          }
        },
        supportedFeel_stageAttract_mentalRecover: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにメンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'feel',
            type: ['loveAttract_stage', 'mentalRecover']
          }
        }
      },
      'プロテクトフィール': {
        protectFeel_APreduce: {
          text: [
            'このステージ中、メンタルの最大値の',
            '%のメンタルダメージを無効にし、獲得するLOVEを+',
            '%する。さらにAPを5回復する。'
          ],
          detail: {
            attr: 'feel',
            type: ['protect_stage', 'loveAttract_stage', 'APGain']
          }
        },
        protectFeel_loveAttract: {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにこのステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'feel',
            type: ['protect_stage', 'loveAttract_stage']
          }
        },
        protectFeel_sectionAttract_stageProtect: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'feel',
            type: ['protect_stage', 'loveAttract_stage']
          }
        },
        protectFeel_stageAttract_stageProtect: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'feel',
            type: ['loveAttract_stage', 'protect_stage']
          }
        }
      },
      'インヴォケーション': {
        invocation: {
          text: [
            'ボルテージPt.を+',
            'する。さらにボルテージLvが6以下の場合、このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'invocation',
            type: ['voltageGain', 'loveAttract_stage']
          }
        }
      },
      'ボルテージハート': {
        voltageHeart: {
          text: [
            'ボルテージPt.を+',
            'する。さらにビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: '',
            type: ['voltageGain', 'heartCaptcha']
          }
        },
        voltageHeart_voltageGain_heartCaptcha: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'voltageGain']
          }
        }
      },
      'リカバーアトラクション': {
        recoverAttraction_section: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらに、ビートハート',
            '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'recover',
            type: ['mentalRecover', 'heartCaptcha', 'loveAttract_section']
          }
        }
      },
      'チルアトラクト': {
        chillAttract_stage: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が3以下の時このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'chill',
            type: ['loveAttract_stage']
          }
        }
      },
      'チルボルテージ': {
        chillVoltage_under1: {
          text: [
            'ボルテージPt.を+',
            'する。さらにボルテージLv.が1以下の時ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'chill',
            type: ['voltageGain']
          }
        },
        chillVoltage_under3: {
          text: [
            'ボルテージPt.を+',
            'する。さらにボルテージLv.が3以下の時ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'chill',
            type: ['voltageGain']
          }
        },
        chillVoltage_under5: {
          text: [
            'ボルテージPt.を+',
            'する。さらにボルテージLv.が5以下の時ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'chill',
            type: ['voltageGain']
          }
        },
        chillVoltage_under5_heartCaptcha: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにボルテージLv.が5以下の時ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'chill',
            type: ['heartCaptcha', 'voltageGain']
          }
        }
      },
      'チルプロテクト': {
        chillProtect_under5_stageProtect: {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにボルテージLv.が5以下の時このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'chill',
            type: ['protect_stage']
          }
        }
      },
      'チルファッシネイト': {
        chillFascinate_under3_voltageGain_stageAttract_APGain: {
          text: [
            'ボルテージPt.を+',
            'し、このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が3以下の時APを3回復する。'
          ],
          detail: {
            attr: 'chill',
            type: ['voltageGain', 'loveAttract_stage', 'APGain']
          }
        },
        chillFascinate_under2_stageAttract_voltageGain: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が2以下の時ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'chill',
            type: ['loveAttract_stage', 'voltageGain']
          }
        },
        chillFascinate_under5_stageAttract_voltageGain: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が5以下の時ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'chill',
            type: ['loveAttract_stage', 'voltageGain']
          }
        }
      },
      'チルエンデュランス': {
        chillEndurance_mentalRecover_under5_voltageGain: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにボルテージLv.が5以下の時ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'chill',
            type: ['mentalRecover', 'voltageGain']
          }
        }
      },
      'チルフィール': {
        chillFeel_mentalRecover_under2_stageAttract: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにボルテージLv.が2以下の時このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'chill',
            type: ['mentalRecover', 'loveAttract_stage']
          }
        }
      },
      'グルーヴィアトラクト': {
        groovyAttract_stage_over8_sectionAttract: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が8以上の時このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['loveAttract_stage', 'loveAttract_section']
          }
        },
        groovyAttract_stage_over6_stageAttract: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が6以上の時このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['loveAttract_stage', 'loveAttract_stage']
          }
        },
        groovyAttract_section_over6_sectionAttract: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が6以上の時このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['loveAttract_section']
          }
        }
      },
      'グルーヴィアトラクション': {
        groovyAttraction_section_over10_heartCaptcha: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が10以上の時ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['loveAttract_section', 'heartCaptcha']
          }
        },
        groovyAttraction_section_over8_heartCaptcha: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が8以上の時ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['loveAttract_section', 'heartCaptcha']
          }
        },
        groovyAttraction_stage_over8_heartCaptcha: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が8以上の時ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['loveAttract_stage', 'heartCaptcha']
          }
        },
        groovyAttraction_over8_heartCaptcha_sectionAttract: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにボルテージLv.が8以上の時このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['heartCaptcha', 'loveAttract_section']
          }
        },
        groovyAttraction_section_over10_heartCaptcha_sectionAttract: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにボルテージLv.が10以上の時このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['heartCaptcha', 'loveAttract_section']
          }
        }
      },
      'グルーヴィハート': {
        groovyHeart_over8_heartCaptcha_mentalRecover: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにボルテージLv.が8以上の時メンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'groovy',
            type: ['heartCaptcha', 'mentalRecover']
          }
        },
        groovyHeart_over8_heartCaptcha: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにボルテージLv.が8以上の時ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['heartCaptcha']
          }
        },
        groovyHeart_over8_voltageGain_heartCaptcha: {
          text: [
            'ボルテージPt.を+',
            'する。さらにボルテージLv.が8以上の時ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['voltageGain', 'heartCaptcha']
          }
        },
        groovyHeart_over10_voltageGain_heartCaptcha: {
          text: [
            'ボルテージPt.を+',
            'する。さらにボルテージLv.が10以上の時ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['voltageGain', 'heartCaptcha']
          }
        },
        groovyHeart_over8_mentalRecover_heartCaptcha: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにボルテージLv.が8以上の時ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['mentalRecover', 'heartCaptcha']
          }
        }
      },
      'グルーヴィボルテージ': {
        groovyVoltage_over8_voltageGain_heartCaptcha: {
          text: [
            'ボルテージPt.を+',
            'する。さらにボルテージLv.が8以上の時ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['voltageGain', 'heartCaptcha']
          }
        }
      },
      'グルーヴィリカバー': {
        groovyRecover_over8_mentalRecover: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにボルテージLv.が8以上の時メンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'groovy',
            type: ['mentalRecover']
          }
        }
      },
      'グルーヴィブースト': {
        groovyBoost_over10_stageAttract_boost: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が10以上の時次に使用するスキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['loveAttract_stage', 'boost']
          }
        }
      },
      'グルーヴィイニシアチブ': {
        groovyInitiative_over8_voltageGain_protect: {
          text: [
            'ボルテージPt.を+',
            'する。さらにボルテージLv.が8以上の時このステージ中、メンタルを最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'groovy',
            type: ['voltageGain', 'protect_stage']
          }
        }
      },
      'グルーヴィファッシネイト': {
        groovyFascinate_over8_voltageGain_sectionAttract: {
          text: [
            'ボルテージPt.を+',
            'する。さらにボルテージLv.が8以上の時このセクション中、獲得するLOVEを+',
            'する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['voltageGain', 'loveAttract_section']
          }
        }
      },
      'スイッチボルテージ': {
        switchVoltage: {
          text: [
            'ボルテージLv.5以下の時ボルテージPt.を+',
            'する。ボルテージLv.が6以上の時ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'switch',
            type: ['voltageGain', 'heartCaptcha']
          }
        }
      },
      'スイッチアトラクション': {
        switchAttraction_basis5_stageAttract_heartCaptcha: {
          text: [
            'ボルテージLv.5以下の時このステージ中、獲得するLOVEを+',
            '%する。ボルテージLv.が6以上の時ビートハート',
            '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'switch',
            type: ['loveAttract_stage', 'heartCaptcha', 'loveAttract_section']
          }
        },
        switchAttraction_basis5_voltageGain_heartCaptcha_sectionAttract: {
          text: [
            'ボルテージLv.5以下の時ボルテージPt.を+',
            'する。ボルテージLv.が6以上の時ビートハート',
            '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'switch',
            type: ['voltageGain', 'heartCaptcha', 'loveAttract_section']
          }
        }
      },
      'カームハート': {
        calmHeart: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにボルテージPt.を-20する。'
          ],
          detail: {
            attr: 'calm',
            type: ['heartCaptcha', 'voltageReduce']
          }
        }
      },
      'カームアトラクト': {
        calmAttract30_sectionAttract: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにボルテージPt.を-30する。'
          ],
          detail: {
            attr: 'calm',
            type: ['loveAttract_section', 'voltageReduce']
          }
        },
        calmAttract20_sectionExtensions2: {
          text: [
            'このセクション中、手札の上限枚数を2枚増加し、獲得するLOVEを+',
            '%する。さらにボルテージPt.を-20する。'
          ],
          detail: {
            attr: 'calm',
            type: ['extensions_section', 'loveAttract_section', 'voltageReduce']
          }
        }
      },
      'カームアトラクション': {
        calmAttraction20_heartCaptcha_stageAttract: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得し、このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージPt.を-20する。'
          ],
          detail: {
            attr: 'calm',
            type: ['heartCaptcha', 'loveAttract_stage', 'voltageReduce']
          }
        },
        calmAttraction30_heartCaptcha_sectionAttract: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
            '%する。さらにボルテージPt.を-30する。'
          ],
          detail: {
            attr: 'calm',
            type: ['heartCaptcha', 'loveAttract_section', 'voltageReduce']
          }
        }
      },
      'カームブースト': {
        calmBoost20: {
          text: [
            '次に使用するスキルハート獲得効果による獲得数を+',
            '%する。さらにボルテージPt.を-20する。'
          ],
          detail: {
            attr: 'calm',
            type: ['boost', 'voltageReduce']
          }
        }
      },
      'ヒーリングハート': {
        healingHeart_recover_heart: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにビートハート',
            '個分のスキルハートを獲得する。'
          ],
          detail: {
            attr: '',
            type: ['mentalRecover', 'heartCaptcha']
          }
        },
        healingHeart_heart_recover: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'mentalRecover']
          }
        }
      },
      'ラブキャブティベイト': {
        loveCaptivate: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにこのセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['loveAttract_stage', 'loveAttract_section']
          }
        }
      },
      'エンデュランス': {
        endurance_APGain: {
          text: [
            'ボルテージPt.を+',
            'し、メンタルを最大値の',
            '%回復させる。さらにAPを1回復する。'
          ],
          detail: {
            attr: 'endurance',
            type: ['voltageGain', 'APGain']
          }
        },
        endurance_mentalVoltage: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'endurance',
            type: ['mentalRecover', 'voltageGain']
          }
        },
        endurance_voltageMental: {
          text: [
            'ボルテージPt.を+',
            'する。さらにメンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'endurance',
            type: ['voltageGain', 'mentalRecover']
          }
        }
      },
      'ロープロテクト': {
        lowProtect: {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにメンタルが30%以下のとき、メンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'low',
            type: ['protect_stage', 'mentalRecover']
          }
        }
      },
      'イニシアチブ': {
        initiative: {
          text: [
            'ボルテージPt.を+',
            'する。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'initiative',
            type: ['voltageGain', 'protect_stage']
          }
        }
      },
      'クラッチリカバー': {
        clutchRecover: {
          text: [
            'メンタルが25%以上のとき、メンタルを最大値の',
            '%回復させる。メンタルが25%未満のとき、メンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'clutch',
            type: ['mentalRecover']
          }
        }
      },
      'ボルテックスアトラクション': {
        vortexAttraction_section: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
            '%する。さらにボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'vortex',
            type: ['heartCaptcha', 'loveAttract_section', 'voltageGain']
          }
        },
        vortexAttraction_stage: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得し、このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'vortex',
            type: ['heartCaptcha', 'loveAttract_stage', 'voltageGain']
          }
        }
      },
      'ボルテックスシフト': {
        vortexShift: {
          text: [
            'このステージ中、ボルテージPt.を獲得する効果が発動した時、代わりに獲得するボルテージPt.の',
            '%の個数のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'vortex',
            type: ['heartCaptcha']
          }
        }
      },
      'クイックフォーム': {
        quickForm: {
          text: [
            'このステージ中、手札の上限枚数を1枚減少する。さらにこのステージ中、AP回復速度を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['cardReduce', 'APQuick']
          }
        }
      },
      'オールマイトヒーリング': {
        allMightHealing: {
          text: [
          'このステージ中、メンタルが回復した時、回復量の',
          '%の個数のスキルハートを獲得する。'
        ],
        detail: {
          attr: 'allMight',
          type: ['heartCaptcha']
        }
      }
      },
      'Link! Like! Order!': {
        linklikeorder: {
          text: [
            'このステージ中、花帆/梢/さやか/綴理/瑠璃乃/慈のスキルを重複なく全員使用するたび、ビートハート',
            '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
            '%する。消費APの合計に応じて効果量が変化する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'loveAttract_section']
          }
        }
      },
      'トリオフライト': {
        trioFlight_section: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
            '%する。さらに手札を全て捨てて、デッキから手札上限までスキルを引く。'
          ],
          detail: {
            attr: 'trio',
            type: ['heartCaptcha', 'loveAttract_section', 'reshuffle']
          }
        }
      },
      'トライアングルライト': {
        triangleLight_stage: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%し、ボルテージPt.を+',
            'する。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'triangle',
            type: ['loveAttract_stage', 'voltageGain', 'protect_stage']
          }
        }
      },
      'ブルーミングハート': {
        bloomingHeart: {
          text: [
            'このステージ中、AP回復速度を-25%し、スキルハート獲得効果による獲得数を+',
            '%する。さらにハート数の上限を+',
            'する。'
          ],
          detail: {
            attr: '',
            type: ['APSlow', 'boost', 'heartLimitUp']
          }
        }
      },
      'ユースフルキャプチャ': {
        youthfulCaptcha: {
          text: [
            'このステージ中、ボルテージPt.が1秒ごとに25ptずつ減少し、スキル使用時にビートハート',
            '回分のスキルハートを獲得する。消費APに応じて効果量が変化する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'voltageReduce']
          }
        }
      },
      'デュオアトラクト': {
        duoAttract: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにこのセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['loveAttract_stage', 'loveAttract_section']
          }
        }
      },
      'チャウチャウパーティ': {
        chowchowParty: {
          text: [
            'チャウチャウカードを4種類(合計10枚)山札に追加する。さらにこのステージ中、手札の上限枚数を1枚減少する。'
          ],
          detail: {
            attr: '',
            type: ['addCard', 'cardReduce']
          }
        }
      },
      'チャウチャウパフォーマンス': {
        chowchowPerformance: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha']
          }
        }
      },
      'チャウチャウムードメイク': {
        chowchowMoodMake: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: '18',
            type: ['loveAttract_section']
          }
        }
      },
      'チャウチャウチアリーディング': {
        chowchowCheerLeading: {
          text: [
            'メンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: '14.4',
            type: ['mentalRecover']
          }
        }
      },
      'チャウチャウトリック': {
        chowchowTrick: {
          text: [
            '手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引く。'
          ],
          detail: {
            attr: '',
            type: ['reshuffle']
          }
        }
      }
    },
    skillColor: {
      heartCaptcha: {
        name: 'ハートキャプチャ',
        colorCode: 'red',
        description: 'ハートを獲得する。'
      },
      loveAttract: {
        name: 'ラブアトラクト',
        colorCode: 'lime-darken-3',
        description: '次回ハート回収時、獲得するLOVEが増加する。'
      },
      loveAttract_section: {
        name: 'ラブアトラクト(セクション)',
        colorCode: 'lime-darken-3',
        description: 'このセクション中、獲得するLOVEが増加する。'
      },
      loveAttract_stage: {
        name: 'ラブアトラクト(ステージ)',
        colorCode: 'lime-darken-3',
        description: 'このステージ中、獲得するLOVEが増加する。'
      },
      voltageGain: {
        name: 'ボルテージゲイン',
        colorCode: 'lime-darken-4',
        description: 'ボルテージPt.を獲得する。'
      },
      voltageReduce: {
        name: 'ボルテージレデュース',
        colorCode: 'lime-darken-4',
        description: 'ボルテージPt.を減らす。'
      },
      mentalRecover: {
        name: 'メンタルリカバー',
        colorCode: 'green',
        description: 'メンタルを回復する。'
      },
      mentalReduce: {
        name: 'メンタルレデュース',
        colorCode: 'green',
        description: 'メンタルを減らす。'
      },
      protect_section: {
        name: 'プロテクト(セクション)',
        colorCode: 'green',
        description: 'このセクション中、メンタル減少を一定量無効化する。'
      },
      protect_stage: {
        name: 'プロテクト(ステージ)',
        colorCode: 'green',
        description: 'このステージ中、メンタル減少を一定量無効化する。'
      },
      reshuffle: {
        name: 'リシャッフル',
        colorCode: 'purple',
        description: '手札を全て捨てて、デッキから手札上限までスキルを引く。'
      },
      extensions_section: {
        name: 'エクステンション(セクション)',
        colorCode: 'purple',
        description: 'このセクション中、手札の上限枚数が増加する(最大8枚)。'
      },
      extensions_stage: {
        name: 'エクステンション(ステージ)',
        colorCode: 'purple',
        description: 'このステージ中、手札の上限枚数が増加する(最大8枚)。'
      },
      cardReduce: {
        name: '手札減少',
        colorCode: 'purple',
        description: 'このステージ中、手札の上限枚数が減少する。'
      },
      boost: {
        name: 'ブースト',
        colorCode: 'red',
        description: '次に使用するスキルハート獲得効果による獲得数を増加させる。'
      },
      APGain: {
        name: 'APゲイン',
        colorCode: '',
        description: 'APを増やす。'
      },
      APReduce: {
        name: 'APレデュース',
        colorCode: '',
        description: 'APを減らす。'
      },
      APQuick: {
        name: 'AP回復速度上昇',
        colorCode: '',
        description: 'AP回復速度を上昇させる。'
      },
      APSlow: {
        name: 'AP回復速度低下',
        colorCode: '',
        description: 'AP回復速度を低下させる。'
      },
      heartLimitUp: {
        name: 'ハート数上限アップ',
        colorCode: '',
        description: 'ハート数の上限を増加させる。'
      },
      addCard: {
        name: 'カード追加',
        colorCode: 'purple',
        description: 'カードを山札に追加する。追加されるカードは以下の通り。'
      }
    }
  }),
  getters: {},
  actions: {}
});