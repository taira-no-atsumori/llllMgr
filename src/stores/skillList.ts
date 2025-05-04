import { defineStore } from 'pinia';
import { SkillListState } from '@/types/skillList';

export const useSkillStore = defineStore('skillList', {
  state: (): SkillListState => ({
    skillList: {
      ハートキャプチャ: {
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
      ラブアトラクト: {
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
      ボルテージゲイン: {
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
      ボルテージブースト: {
        voltageBoost_stage: {
          text: [
            'このステージ中、ボルテージゲイン効果を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['boost_voltageGain']
          }
        }
      },
      メンタルリカバー: {
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
      メンタルプロテクト: {
        mentalProtect_recover_sectionProtect: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにこのセクション中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: '',
            type: ['mentalRecover', 'protect_section']
          }
        },
        mentalProtect_stageProtect: {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: '',
            type: ['protect_stage']
          }
        }
      },
      エクステンドハンド: {
        extendHand_stage1: {
          text: ['このステージ中、手札の上限枚数を1枚増加する。'],
          detail: {
            attr: '',
            type: ['extendHand']
          }
        }
      },
      'APゲイン': {
        'APGain': {
          text: [
            'APを',
            '回復させる。'
          ],
          detail: {
            attr: '',
            type: ['APGain']
          }
        }
      },
      'リフレッシュハート': {
        'refreshHeart': {
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
      リフレッシュボルテージ: {
        refreshVoltage: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
            '%回復させ、ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'refresh',
            type: ['reshuffle', 'mentalRecover', 'voltageGain']
          }
        }
      },
      リフレッシュマインド: {
        refreshMind: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'refresh',
            type: ['reshuffle', 'mentalRecover']
          }
        },
        refreshMind_stageProtect: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
            '%回復させ、このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'refresh',
            type: ['reshuffle', 'mentalRecover', 'protect_stage']
          }
        }
      },
      リフレッシュプロテクト: {
        refreshProtect_stage: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、メンタルを最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'refresh',
            type: ['reshuffle', 'protect_stage']
          }
        }
      },
      リフレッシュサポート: {
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
      'リフレッシュゲイン': {
        'refreshGain': {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引き、このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにAPを7回復する。'
          ],
          detail: {
            attr: 'refresh',
            type: ['reshuffle', 'protect_stage', 'APGain']
          }
        },
        'refreshGain_02': {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にし、APを',
            '回復する。'
          ],
          detail: {
            attr: 'refresh',
            type: ['reshuffle', 'protect_stage', 'APGain']
          }
        }
      },
      リフレッシュバブリング: {
        refreshBubbling: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引き、メンタルを最大値の',
            '%回復させる。さらにバブルカードを1種類(合計3枚)山札に追加する。'
          ],
          detail: {
            attr: 'refresh',
            type: ['reshuffle', 'mentalRecover', 'addCard']
          }
        }
      },
      リフレッシュエクステンド: {
        refreshExtend_stage1: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、手札の上限枚数を1枚増加し、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: '',
            type: ['reshuffle', 'extendHand', 'protect_stage']
          }
        }
      },
      リフレッシュブースト: {
        refreshBoost: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに3回の間スキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'refresh',
            type: ['reshuffle', 'boost_heartCaptcha']
          }
        }
      },
      リフレッシュワイド: {
        refreshWide: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのセクション中、ハート上限を+',
            'する。'
          ],
          detail: {
            attr: 'refresh',
            type: ['reshuffle', 'heartLimitUp']
          }
        }
      },
      リフレッシュチェンジ: {
        refreshChange: {
          text: [
            '姫芽の《イグニッションモード》の状態を切り替える。さらに手札を全て捨てて、デッキから手札上限までスキルを引き、このステージ中、メンタルの最大値の',
            '%のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'refresh',
            type: ['modeChange', 'reshuffle', 'protect_stage']
          }
        }
      },
      'リフレッシュチェンジプロテクト': {
        'refreshChangeProtect_01': {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にし、姫芽の《イグニッションモード》を切り替える。'
          ],
          detail: {
            attr: 'refresh',
            type: ['reshuffle', 'modeChange', 'protect_stage']
          }
        }
      },
      ハートアトラクション: {
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
        'heartBoost': {
          text: ['次に使用するスキルハート獲得効果による獲得数を+', '%する。'],
          detail: {
            attr: 'heartBoost',
            type: ['boost_heartCaptcha']
          }
        },
        'heartBoost_limit2': {
          text: ['2回の間スキルハート獲得効果による獲得数を+', '%する。'],
          detail: {
            attr: 'heartBoost',
            type: ['boost_heartCaptcha']
          }
        },
        'heartBoost_limit5': {
          text: ['5回の間スキルハート獲得効果による獲得数を+', '%する。'],
          detail: {
            attr: 'heartBoost',
            type: ['boost_heartCaptcha']
          }
        }
      },
      'ハートブースト：みらくらぱーく！': {
        heartBoost_MiraCraPark_stage: {
          text: [
            'このステージ中、みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'heartBoost',
            type: ['boost_heartCaptcha']
          }
        },
        heartBoost_MiraCraPark_limit3: {
          text: [
            '3回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'heartBoost',
            type: ['boost_heartCaptcha']
          }
        }
      },
      'ハートブースト：ドレス': {
        'heartBoost-dress_01': {
          text: [
            '次のドレスカード使用によるスキルハート獲得効果の獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'heartBoost',
            type: ['boost_heartCaptcha']
          }
        }
      },
      ハートゲイン: {
        heartGain_1: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにAPを1回復する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'APGain']
          }
        },
        heartGain_3: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにAPを3回復する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'APGain']
          }
        }
      },
      ハイアトラクト: {
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
      ハイボルテージ: {
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
        }
      },
      チアフルハート: {
        cheerfulHeart_over75_APGain: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルが75%以上のとき、APを1回復する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['heartCaptcha', 'APGain']
          }
        },
        cheerfulHeart_over75_heartCaptcha: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルが75%以上のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['heartCaptcha']
          }
        },
        cheerfulHeart_over100_heartCaptcha: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルが100%以上のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['heartCaptcha']
          }
        },
        cheerfulHeart_over75_heartCaptcha_over100_heartCaptcha: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルが75%以上のとき、ビートハート',
            '回分のスキルハートを獲得し、メンタルが100%以上のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['heartCaptcha']
          }
        }
      },
      チアフルアトラクト: {
        cheerfulAttract_over100_sectionAttract: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにメンタルが100%以上のとき、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['loveAttract_section']
          }
        },
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
        },
        cheerfulAttract_over75_stageAttract_over100_stageAttract: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにメンタルが75%以上のとき、このステージ中、獲得するLOVEを+',
            'し、メンタルが100%以上のとき、このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['loveAttract_stage']
          }
        }
      },
      チアフルアトラクション: {
        cheerfulAttraction_over75_section: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルが75%以上のとき、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['heartCaptcha', 'loveAttract_section']
          }
        },
        cheerfulAttraction_over100_stage: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルが100%以上のとき、このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['heartCaptcha', 'loveAttract_section']
          }
        },
        'cheerfulAttraction-sectionAttract-over50_heart-over75_heart-over100_heart': {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
            '%する。メンタルが50%以上のとき、ビートハート',
            '回分のスキルハートを追加で獲得、メンタルが75%以上のとき、ビートハート',
            '回分のスキルハートを追加で獲得、メンタルが100%以上のとき、ビートハート',
            '回分のスキルハートをさらに追加で獲得する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['heartCaptcha', 'loveAttract_section']
          }
        }
      },
      チアフルボルテージ: {
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
        cheerfulVoltage_voltageGain_over75_over100: {
          text: [
            'ボルテージPt.を+',
            'する。さらにメンタルが75%以上のとき、ボルテージPt.を+',
            'し、メンタルが100％以上のとき、ボルテージPt.を+',
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
      チアフルリカバー: {
        cheerfulRecover_upper75_APGain: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにメンタルが75%以上のとき、APを2回復する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['mentalRecover', 'APGain']
          }
        },
        cheerfulRecover_upper100_stageProtect: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにメンタルが100%以上のとき、このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['mentalRecover', 'APGain']
          }
        }
      },
      チアフルリカバーハート: {
        'cheerfulRecoverHeart-over50_recover-over100_heartCaptcha': {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。メンタルが50%以上のとき、メンタルを最大値の',
            '%回復させ、メンタルが100%以上のとき、ビートハート',
            '回分のスキルハートを追加で獲得する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['heartCaptcha', 'mentalRecover']
          }
        }
      },
      チアフルリカバープロテクト: {
        cheerfulRecover_upper100_stageProtect: {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにメンタルが100%以上のとき、このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['mentalRecover', 'protect_stage']
          }
        }
      },
      チアフルプロテクト: {
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
      チアフルリゲイン: {
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
      チアフルヒーリング: {
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
      チアフルサポート: {
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
        },
        cheerfulSupport_over75_section_over100: {
          text: [
            'メンタルを最大値の',
            '%回復する。さらにメンタルが75%以上のとき、このセクション中、獲得するLOVEを+',
            '%し、メンタルが100％以上のとき、このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['mentalRecover', 'loveAttract_section', 'protect_stage']
          }
        }
      },
      チアフルエンデュランス: {
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
      チアフルイニシエイト: {
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
      チアフルファッシネイト: {
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
      チアフルブースト: {
        cheerfulBoost: {
          text: [
            '次に使用するスキルハート獲得効果による獲得数を+',
            '%する。さらにメンタルが50%以上のとき、次に使用するスキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['boost_heartCaptcha']
          }
        }
      },
      チアフルハートブースト: {
        cheerfulHeartBoost_over100_boost_heartCaptcha: {
          text: [
            '次に使用するスキルハート獲得効果による獲得数を+',
            '%する。さらにメンタルが100%以上のとき、3回の間スキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'cheerful',
            type: ['boost_heartCaptcha']
          }
        }
      },
      フルネスエクステハート: {
        fulnessExtensionHeart_add3_over8_over75: {
          text: [
            'このセクション中、手札の上限枚数を3枚増加する。さらにボルテージLv.が8以上かつメンタルが75%以上のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'fulness',
            type: ['extendHand', 'heartCaptcha']
          }
        }
      },
      フルネスエクステボルテージ: {
        fulnessExtensionVoltage_add2_over5_over50: {
          text: [
            'このセクション中、手札の上限枚数を2枚増加する。さらにボルテージLv.が5以上かつメンタルが50%以上のとき、ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'fulness',
            type: ['extendHand', 'voltageGain']
          }
        }
      },
      フルネスエクステプロテクト: {
        fulnessExtensionProtect_add3_over8_over75: {
          text: [
            'このセクション中、手札の上限枚数を3枚増加する。さらにボルテージLv.が8以上かつメンタルが75%以上のとき、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'fulness',
            type: ['extendHand', 'protect_section']
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
            '%し、メンタルを最大値の25％減少させる。さらにデッキにあるメイン効果がメンタル回復効果のスキルの消費AP-2。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['loveAttract_stage', 'mentalReduce', 'APReduce']
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
      'アグレッシブボルテージ': {
        aggressiveVoltage_mentalReduce15: {
          text: [
            'ボルテージPt.を+',
            'する。さらにメンタルを最大値の15%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['voltageGain', 'mentalReduce']
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
      'アグレッシブアトラクトブースト': {
        aggressiveAttractBoost: {
          text: [
            '5回の間ラブアトラクト効果を+',
            '%する。さらにメンタルを最大値の25%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['boost_loveAttract', 'mentalReduce']
          }
        },
        aggressiveAttractBoost_mentalReduce3: {
          text: [
            '次に使用するラブアトラクト効果を+',
            '%する。さらにメンタルを最大値の3%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['boost_loveAttract', 'mentalReduce']
          }
        },
        aggressiveAttractBoost_mentalReduce10: {
          text: [
            '2回の間ラブアトラクト効果を+',
            '%する。さらにメンタルを最大値の10%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['boost_loveAttract', 'mentalReduce']
          }
        }
      },
      'アグレッシブプロテクトブースト': {
        aggressiveProtectBoost: {
          text: [
            '5回の間スキルハート獲得効果による獲得数を+',
            '%し、メンタルを最大値の5%減少させる。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['boost_loveAttract', 'mentalReduce']
          }
        }
      },
      'アグレッシブハートブースト': {
        aggressiveHeartBoost: {
          text: [
            '10回の間スキルハート獲得効果による獲得数を+',
            '%する。さらにメンタルを最大値の50%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['boost_heartCaptcha', 'mentalReduce']
          }
        }
      },
      'アグレッシブリゲインボルテージ': {
        aggressiveRegainVoltage: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにボルテージPt.を+',
            'し、メンタルを最大値の25%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['reshuffle', 'voltageGain', 'mentalReduce']
          }
        }
      },
      'アグレッシブビリーブハート': {
        aggressiveBelieveHeart: {
          text: [
            'このセクション中、メンタルが0になってもメンタルダウンしなくなる。さらにビートハート',
            '回分のスキルハートを獲得し、メンタルを最大値の75%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['mentalDown_section', 'heartCaptcha', 'mentalReduce']
          }
        },
        aggressiveBelieveHeart_reduce100: {
          text: [
            'このセクション中、メンタルが0になってもメンタルダウンしなくなり、ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルを最大値の100%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['mentalDown_section', 'heartCaptcha', 'mentalReduce']
          }
        }
      },
      'アグレッシブエクステビリーフ': {
        aggressiveExtensionBelief_01: {
          text: [
            'このセクション中、メンタルが0になってもメンタルダウンしなくなり、メンタルを最大値の100%減少させる。さらにこのセクション中、手札の上限枚数を3枚増加、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['mentalDown_section', 'mentalReduce', 'extendHand', 'loveAttract_section']
          }
        }
      },
      'アグレッシブブースト：DOLLCHESTRA': {
        aggressiveBoost_dollchestra: {
          text: [
            '10回の間DOLLCHESTRAのメンバーが使用するラブアトラクト効果を+',
            '%、スキルハート獲得効果による獲得数を+',
            'する。さらにメンタルを最大値の99%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['boost_loveAttract', 'boost_heartCaptcha', 'mentalReduce']
          }
        }
      },
      アグレッシブブレイブハート: {
        aggressiveBraveHeart: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得し、メンタルを最大値の15％減少させる。さらにメンタル5%以下のときビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['heartCaptcha', 'mentalReduce']
          }
        },
        aggressiveBraveHeart_under1_under0: {
          text: [
            'ボルテージPt.を+',
            'する。さらにメンタルが1%以下のとき、このステージ中、獲得するLOVEを+',
            '%する。メンタルが0%のとき、このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['voltageGain', 'heartCaptcha', 'loveAttract_stage']
          }
        }
      },
      アグレッシブブレイブアトラクション: {
        aggressiveBraveAttraction_minus15_under5: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%し、メンタルを最大値の15％減少させる。さらにメンタル5%以下のときビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['loveAttract_section', 'mentalReduce', 'heartCaptcha']
          }
        }
      },
      アグレッシブブレイブファッシネイト: {
        aggressiveBraveFascinate10_section: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。メンタルを最大値の25%減少させる。さらにメンタルが10%以下のとき、ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['loveAttract_section', 'mentalReduce', 'voltageGain']
          }
        }
      },
      'アグレッシブブレイブブーステッドアトラクト：DOLLCHESTRA': {
        aggressiveBraveBoostedAttract_dollchestra: {
          text: [
            '3回の間DOLLCHESTRAのメンバーが使用するラブアトラクト効果を+',
            '%し、メンタルを最大値の10%減少させる。さらにメンタルが1%以下のとき、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['boost_loveAttract', 'mentalReduce', 'loveAttract_section']
          }
        }
      },
      アグレッシブエクステプロテクト: {
        aggressiveExtendProtect_stage: {
          text: [
            'このステージ中、手札の上限枚数を2枚増加し、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにメンタルを最大値の50%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['extendHand', 'protect_stage', 'mentalReduce']
          }
        }
      },
      アグレッシブプロテクション: {
        aggressiveProtection_stage: {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにメンタルを最大値の5%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['protect_stage', 'mentalReduce']
          }
        }
      },
      アグレッシブビリーフブースト: {
        aggressiveBeliefBoost: {
          text: [
            'このセクション中、メンタルが0になってもメンタルダウンしなくなる。さらにこのステージ中、10回の間スキルハート獲得効果による獲得数を+',
            '%する。またメンタルを最大値の50%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['mentalDown_section', 'boost_heartCaptcha', 'mentalReduce']
          }
        },
        aggressiveBeliefBoost_heatUp_minus100: {
          text: [
            'このセクション中、メンタルが0になってもメンタルダウンしなくなり、AP回復速度を+',
            '%する。さらにメンタルを最大値の100%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['mentalDown_section', 'APQuick', 'mentalReduce']
          }
        }
      },
      アグレッシブビリーフボルテージ: {
        aggressiveBeliefVoltage: {
          text: [
            'このセクション中、メンタルが0になってもメンタルダウンしなくなる。さらにボルテージPt.を+',
            'し、メンタルを最大値の50%減少させる。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['mentalDown_section', 'voltageGain', 'mentalReduce']
          }
        }
      },
      アグレッシブビリーフプロテクト: {
        'aggressiveBeliefProtect-mentalMinus50': {
          text: [
            'このセクション中、メンタルが0になってもメンタルダウンしなくなり、メンタルを最大値の50%減少させる。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'aggressive',
            type: ['mentalDown_section', 'mentalReduce', 'protect_stage']
          }
        }
      },
      アトラクトゲイン: {
        attractGain: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにAPを3回復する。'
          ],
          detail: {
            attr: '',
            type: ['loveAttract_stage', 'APGain']
          }
        },
        'attractGain-stageAttract-APGain7': {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにAPを7回復する。'
          ],
          detail: {
            attr: '',
            type: ['loveAttract_stage', 'APGain']
          }
        }
      },
      'アトラクトブースト': {
        attractBoost1: {
          text: ['次に使用するラブアトラクト効果を+', '%する。'],
          detail: {
            attr: '',
            type: ['boost_loveAttract']
          }
        },
        attractBoost2: {
          text: ['2回の間ラブアトラクト効果を+', '%する。'],
          detail: {
            attr: '',
            type: ['boost_loveAttract']
          }
        }
      },
      'アトラクトブースト：みらくらぱーく！': {
        attractBoost_MiraCraPark: {
          text: [
            '次にみらくらぱーく！のメンバーが使用するラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['boost_loveAttract']
          }
        }
      },
      リゲインボルテージ: {
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
      リゲインリカバー: {
        regainRecover: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'regain',
            type: ['reshuffle', 'mentalRecover']
          }
        }
      },
      リゲインアトラクト: {
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
      リゲインファッシネイト: {
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
      リゲインエクステンド: {
        regainExtend_stage1: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにステージ中、手札の上限枚数を1枚増加し、ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'regain',
            type: ['reshuffle', 'extendHand', 'voltageGain']
          }
        }
      },
      リゲインエクステアトラクト: {
        regainExtendAttract_section4: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのセクション中、手札の上限枚数を4枚増加し、このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'regain',
            type: ['reshuffle', 'extendHand', 'voltageGain']
          }
        }
      },
      リゲインバブリング: {
        regainBubbling: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引き、ボルテージPt.を+',
            'する。さらにバブルカードを1種類(合計2枚)山札に追加する。'
          ],
          detail: {
            attr: 'regain',
            type: ['reshuffle', 'voltageGain', 'addCard']
          }
        }
      },
      リゲインチェンジ: {
        regainChange: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引き、ボルテージPt.を+',
            'する。さらに姫芽の《イグニッションモード》の状態を切り替える。'
          ],
          detail: {
            attr: 'regain',
            type: ['reshuffle', 'voltageGain', 'modeChange']
          }
        }
      },
      エクステハート: {
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
      エクステハートブースト: {
        extensions_section3_heartBoost_stage: {
          text: [
            'このセクション中、手札の上限枚数を3枚増加する。さらにこのステージ中、10回の間スキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'boost_heartCaptcha']
          }
        }
      },
      'エクステハートチェンジ': {
        'extendHeartChange-add3': {
          text: [
            'このセクション中、手札の上限枚数を3枚増加し、ビートハート',
            '回分のスキルハートを獲得する。さらに姫芽の《イグニッションモード》の状態を切り替える。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'extensions_section', 'modeChange']
          }
        }
      },
      'エクステアトラクト': {
        'extensions1_stageAttract_section': {
          text: [
            'このセクション中、手札の上限枚数を1枚増加する。さらにこのステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'loveAttract_stage']
          }
        },
        'extensions2_stageAttract_section': {
          text: [
            'このセクション中、手札の上限枚数を2枚増加する。さらにこのステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'loveAttract_stage']
          }
        },
        'extensions3_stageAttract_section': {
          text: [
            'このセクション中、手札の上限枚数を3枚増加する。さらにこのステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'loveAttract_stage']
          }
        },
        'extensions4_stageAttract_section': {
          text: [
            'このセクション中、手札の上限枚数を4枚増加する。さらにこのセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'loveAttract_section']
          }
        },
        'extensions1_stageAttract_stage': {
          text: [
            'このステージ中、手札の上限枚数を1枚増加する。さらにこのステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_stage', 'loveAttract_stage']
          }
        },
        'extensions1_sectionAttract_section': {
          text: [
            'このセクション中、手札の上限枚数を1枚増加する。さらにこのセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'loveAttract_section']
          }
        },
        'extensions3_sectionAttract_section': {
          text: [
            'このセクション中、手札の上限枚数を3枚増加する。さらにこのセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'loveAttract_section']
          }
        }
      },
      エクステボルテージ: {
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
        },
        extensions2_voltage_stage: {
          text: [
            'このステージ中、手札の上限枚数を2枚増加する。さらにボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_stage', 'voltageGain']
          }
        }
      },
      'エクステプロテクト': {
        'extensions1_protect': {
          text: [
            'このステージ中、手札の上限枚数を1枚追加する。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_stage', 'protect_stage']
          }
        },
        'extensions3_protect': {
          text: [
            'このセクション中、手札の上限枚数を3枚追加する。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'protect_stage']
          }
        }
      },
      'エクステプロテクトヒート': {
        'extensions3_protect_heat': {
          text: [
            'このセクション中、手札の上限枚数を3枚増加し、AP回復速度を+5%する。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'APQuick', 'protect_stage']
          }
        }
      },
      エクステリカバー: {
        extensions3_recover_section: {
          text: [
            'このセクション中、手札の上限枚数を3枚増加する。さらにメンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'mentalRecover']
          }
        }
      },
      エクステリカバーヒート: {
        extensions3_recover_heat_section: {
          text: [
            'このセクション中、手札の上限枚数を3枚増加し、AP回復速度を+5%する。さらにメンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'APQuick', 'mentalRecover']
          }
        }
      },
      エクステメンター: {
        extensionsMentor: {
          text: [
            '姫芽の《イグニッションモード》の状態を切り替える。さらにこのステージ中、手札の上限を1枚増加し、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'extensions',
            type: ['modeChange', 'extensions_stage', 'mentalRecover']
          }
        }
      },
      エクステブーステッドヒート: {
        'extensions_stage-boost_heartCaptcha-heatUp_section': {
          text: [
            'このステージ中、手札の上限を1枚追加し、次に使用するスキルハート獲得効果による獲得数を+',
            '%する。さらにこのセクション中、AP回復速度を+5%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_stage', 'boost_heartCaptcha', 'APQuick']
          }
        },
        'extensions_stage-boost_loveAttract-heatUp_section': {
          text: [
            'このステージ中、手札の上限を1枚追加し、次に使用するラブアトラクト効果を+',
            '%する。さらにこのセクション中、AP回復速度を+5%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_stage', 'boost_loveAttract', 'APQuick']
          }
        }
      },
      エクステボルテージダック: {
        duck_extensions2_voltage_stage: {
          text: [
            'このステージ中、手札の上限枚数を2枚増加する。さらにボルテージPt.を+',
            'し、トリカゴカードを1種類(合計1枚)山札に追加する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_stage', 'voltageGain', 'addCard']
          }
        }
      },
      エクステゲイン: {
        extensionsGain_add3: {
          text: [
            'このセクション中、手札の上限枚数を3枚増加する。さらにAPを',
            '回復する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'APGain']
          }
        }
      },
      'エクステヒート': {
        'extensionHeat_01': {
          text: [
            'このセクション中、手札の上限枚数を3枚増加する。さらにこのセクション中、AP回復速度を+',
            '%する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_section', 'APQuick']
          }
        }
      },
      'エクステヒートゲイン': {
        'extensionHeatGain_01': {
          text: [
            'このステージ中、手札の上限枚数を1枚増加し、AP回復速度を+',
            '%する。さらにAPを',
            '回復する。'
          ],
          detail: {
            attr: 'extensions',
            type: ['extensions_stage', 'APQuick', 'APGain']
          }
        }
      },
      ファッシネイション: {
        fascination: {
          text: [
            'ボルテージPt.を+',
            'し、このセクション中、獲得するLOVEを+',
            '%する。さらにこのステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'fascination',
            type: ['voltageGain', 'loveAttract_stage']
          }
        },
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
        },
        fascination_stageAttract_stageProtect: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージPt.を+',
            'し、このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'fascination',
            type: ['loveAttract_stage', 'voltageGain', 'protect_stage']
          }
        }
      },
      リプレイアトラクション: {
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
      サポーテッドフィール: {
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
      プロテクトフィール: {
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
        protectFeel_sectionAttract: {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにこのセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'feel',
            type: ['protect_stage', 'loveAttract_section']
          }
        },
        protectFeel_stageAttract: {
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
      プロテクトゲイン: {
        protectGain: {
          text: [
            'このステージ中、メンタルの最大値の',
            '分のメンタルダメージを無効にする。さらにAPを+5する。'
          ],
          detail: {
            attr: '',
            type: ['protect_stage', 'APGain']
          }
        },
        'protectGain-AP9': {
          text: [
            'このステージ中、メンタルの最大値の',
            '分のメンタルダメージを無効にする。さらにAPを9回復する。'
          ],
          detail: {
            attr: '',
            type: ['protect_stage', 'APGain']
          }
        }
      },
      'プロテクトヒート': {
        'protectHeat_01': {
          text: [
            'このステージ中、AP回復速度を+',
            '%する。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'protect',
            type: ['APQuick', 'protect_stage']
          }
        }
      },
      インヴォケーション: {
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
      ボルテージハート: {
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
      'リカバーサポート': {
        'recoverSupport_01': {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにデッキ内の梢のスキルの消費AP-6。'
          ],
          detail: {
            attr: 'recover',
            type: ['mentalRecover', 'APReduce']
          }
        }
      },
      リカバーアトラクション: {
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
      リカバーゲイン: {
        recoverGain_gain5: {
          text: ['メンタルを最大値の', '%回復させる。さらにAPを+5する。'],
          detail: {
            attr: 'recover',
            type: ['mentalRecover', 'APGain']
          }
        },
        recoverGain_gain3: {
          text: ['メンタルを最大値の', '%回復させる。さらにAPを+3する。'],
          detail: {
            attr: 'recover',
            type: ['mentalRecover', 'APGain']
          }
        }
      },
      チルアトラクト: {
        chillAttract_under3_section: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が3以下の時このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'chill',
            type: ['loveAttract_section']
          }
        },
        chillAttract_under3_stage: {
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
      'チルアトラクトゲイン': {
        'chillAttractGain_01': {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が3以下の時このステージ中、獲得するLOVEを+',
            '%し、APを5回復する。'
          ],
          detail: {
            attr: 'chill',
            type: ['loveAttract_section', 'APGain']
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
      'チルボルテージゲイン': {
        chillVoltageGain_01: {
          text: [
            'ボルテージPt.を+',
            'する。さらにボルテージLv.が3以下の時ボルテージPt.を+',
            'し、APを5回復する。'
          ],
          detail: {
            attr: 'chill',
            type: ['voltageGain', 'APGain']
          }
        }
      },
      'チルプロテクト': {
        chillProtect_under3_stageProtect: {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにボルテージLv.が3以下の時このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'chill',
            type: ['protect_stage']
          }
        },
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
      'チルプロテクトゲイン': {
        chillProtectGain_01: {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにボルテージLv.が3以下の時このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にし、APを5回復する。'
          ],
          detail: {
            attr: 'chill',
            type: ['protect_stage', 'APGain']
          }
        }
      },
      チルファッシネイト: {
        chillFascinate_under3_voltageGain_stageAttract_APGain: {
          text: [
            'ボルテージPt.を+',
            'し、このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が3以下の時APを5回復する。'
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
      チルエンデュランス: {
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
      チルフィール: {
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
      グルーヴィアトラクト: {
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
            type: ['loveAttract_stage']
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
        },
        groovyAttract_stage_over10_stageAttract: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が10以上の時このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['loveAttract_stage']
          }
        }
      },
      グルーヴィアトラクション: {
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
      グルーヴィハート: {
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
      グルーヴィハートゲイン: {
        'groovyHeartGain-over8_voltage-gain7': {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにボルテージLv.が8以上の時、APを7回復する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['heartCaptcha', 'APGain']
          }
        }
      },
      グルーヴィボルテージ: {
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
        },
        'groovyVoltage-voltageOver8_heartCaptcha-voltageOver10_heartCaptcha': {
          text: [
            'ボルテージPt.を+',
            'する。さらにボルテージLv.が8以上の時ビートハート',
            '回分のスキルハートを獲得し、ボルテージLv.が10以上の時ビートハート',
            '回分のスキルハートを追加で獲得する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['voltageGain', 'heartCaptcha']
          }
        }
      },
      グルーヴィリカバー: {
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
        },
        'groovyRecover-voltageOver8_mentalRecover-voltageOver10_mentalRecover': {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにボルテージLv.が8以上の時メンタルを最大値の',
            '%回復させさせ、ボルテージLv.が10以上の時メンタルを最大値の',
            '%追加で回復させる。'
          ],
          detail: {
            attr: 'groovy',
            type: ['mentalRecover']
          }
        }
      },
      グルーヴィブースト: {
        groovyBoost_over10_stageAttract_boost: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにボルテージLv.が10以上の時次に使用するスキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['loveAttract_stage', 'boost_heartCaptcha']
          }
        },
        groovyBoost_over10_boost_heartCaptcha: {
          text: [
            '次に使用するスキルハート獲得効果による獲得数を+',
            '%する。さらにボルテージLv.が10以上の時ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['boost_heartCaptcha', 'heartCaptcha']
          }
        }
      },
      グルーヴィイニシアチブ: {
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
      グルーヴィファッシネイト: {
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
        },
        groovyFascinate_over10_voltageGain_sectionAttract: {
          text: [
            'ボルテージPt.を+',
            'する。さらにボルテージLv.が10以上の時このセクション中、獲得するLOVEを+',
            'する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['voltageGain', 'loveAttract_section']
          }
        }
      },
      グルーヴィフィール: {
        groovyFeel_stage_over10_sectionAttract: {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにボルテージLv.が10以上の時このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['protect_stage', 'loveAttract_section']
          }
        }
      },
      グルーヴィヒート: {
        groovyHeat_section_over10: {
          text: [
            'このセクション中、AP回復速度を+5%する。さらにボルテージLv.が10以上の時このステージ中、5回の間スキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['APQuick', 'boost_loveAttract']
          }
        }
      },
      グルーヴィボルテックスハート: {
        'groovyVortexHeart-over5_voltageGain-over10_heartCaptcha': {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。ボルテージLv.が5以上の時、ボルテージPt.を+',
            'し、ボルテージLv.が10以上の時、ビートハート',
            '回分のスキルハートを追加で獲得する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['heartCaptcha', 'voltageGain']
          }
        }
      },
      グルーヴィボルテックスビリーフ: {
        'groovyVortexBelief-over8_vol': {
          text: [
            'ボルテージLv.を+',
            'する。さらにボルテージLv.が8以上の時、このセクション中、メンタルが0になってもメンタルダウンしなくなる。'
          ],
          detail: {
            attr: 'groovy',
            type: ['voltageGain', 'mentalDown_section']
          }
        }
      },
      グルーヴィブーステッドボルテージハート: {
        'groovyBoostedVoltageHeart-over10_attract': {
          text: [
            'ボルテージPt.を+',
            'し、ビートハート',
            '回分のスキルハートを獲得する。さらにボルテージLv.が10以上の時、次に慈が使用するラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['voltageGain', 'heartCaptcha', 'boost_loveAttract']
          }
        }
      },
      グルーヴィブーステッドチェンジ: {
        'groovyBoostedChange-over8_attract': {
          text: [
            '姫芽の《イグニッションモード》の状態を切り替える。さらにボルテージLv.が8以上の時、次に使用するラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['modeChange', 'boost_loveAttract']
          }
        }
      },
      グルーヴィチェンジハート: {
        'groovyChangeHeart-over8_vol-over10_vol': {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得し、姫芽の《イグニッションモード》の状態を切り替える。さらにボルテージLv.が8以上の時、ビートハート',
            '回分のスキルハートを追加で獲得し、ボルテージLv.が10以上の時、ビートハート',
            '回分のスキルハートを追加で獲得する。'
          ],
          detail: {
            attr: 'groovy',
            type: ['heartCaptcha', 'modeChange']
          }
        }
      },
      スイッチボルテージ: {
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
      スイッチアトラクション: {
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
      スイッチプロテクト: {
        switchProtect: {
          text: [
            'メンタルが50%未満のとき、このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。メンタルが50%以上のとき、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'switch',
            type: ['protect_stage', 'loveAttract_section']
          }
        }
      },
      カームハート: {
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
      カームアトラクト: {
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
            type: [
              'extensions_section',
              'loveAttract_section',
              'voltageReduce'
            ]
          }
        }
      },
      カームアトラクション: {
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
      カームブースト: {
        calmBoost20: {
          text: [
            '次に使用するスキルハート獲得効果による獲得数を+',
            '%する。さらにボルテージPt.を-20する。'
          ],
          detail: {
            attr: 'calm',
            type: ['boost_heartCaptcha', 'voltageReduce']
          }
        }
      },
      カームプロテクト: {
        calmProtect: {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにボルテージPt.を-10する。'
          ],
          detail: {
            attr: 'calm',
            type: ['protect_stage', 'voltageReduce']
          }
        }
      },
      ヒーリングハート: {
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
      ラブキャブティベイト: {
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
      エンデュランス: {
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
      ロープロテクト: {
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
      イニシアチブ: {
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
      クラッチリカバー: {
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
      ボルテックスヒートハート: {
        vortexHeatHeart: {
          text: [
            'ボルテージPt.を+',
            'し、このセクション中、AP回復速度を+',
            '%する。さらにビートハート',
            '回分のスキルハートを3回獲得する。'
          ],
          detail: {
            attr: 'vortex',
            type: ['voltageGain', 'APQuick', 'heartCaptcha']
          }
        }
      },
      ボルテックスアトラクション: {
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
      ボルテックスゲイン: {
        'vortexGain-voltage-AP': {
          text: [
            'ボルテージPt.を+',
            'する。さらにAPを9回復する。'
          ],
          detail: {
            attr: 'vortex',
            type: ['voltageGain', 'APGain']
          }
        }
      },
      ボルテックスシフト: {
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
      クイックフォーム: {
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
      オールマイトヒーリング: {
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
            'このステージ中、花帆/梢/さやか/綴理/瑠璃乃/慈のスキルを全員使用するたび、ビートハート',
            '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
            '%する。さらにAPを回復する。消費APの合計に応じて効果量が変化する。各メンバーのスキルを重複した際、消費APの記録を上書きする。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'APGain', 'loveAttract_section']
          }
        }
      },
      'Link! Like! Order! 9': {
        linklikeorder9: {
          text: [
            'このステージ中、吟子/花帆/梢/小鈴/さやか/綴理/姫芽/瑠璃乃/慈のスキルを全員使用するたび、このステージ中、手札の上限枚数を1枚増加、獲得するLOVEを+',
            '%し、AP回復速度を+27%する。消費APの合計に応じてアトラクト効果量が変化する。各メンバーのスキルを使用した際、消費APの記録を上書きする。'
          ],
          detail: {
            attr: '',
            type: ['extendHand', 'loveAttract_stage', 'APQuick']
          }
        }
      },
      'KEY of Link！': {
        keyOfLink: {
          text: [
            'このステージ中、吟子/花帆/梢/小鈴/さやか/綴理/姫芽/瑠璃乃/慈のスキルを全員使用するたび、ビートハート',
            '回分のスキルハートを9回獲得する。消費APの合計に応じてハート獲得効果の効果量が変化する。各メンバーのスキルを重複した際、消費APの記録を上書きする。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha']
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
        'bloomingHeart': {
          text: [
            'このステージ中、メイン効果に獲得LOVE増加効果を持つスキルの消費AP-2。さらに2回の間ラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['APSlow', 'boost_heartCaptcha', 'heartLimitUp']
          }
        }
      },
      'ユースフルキャプチャ': {
        'youthfulCaptcha': {
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
      デュオアトラクト: {
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
            attr: 'chowchow',
            type: ['addCard', 'cardReduce']
          }
        }
      },
      'チャウチャウパフォーマンス': {
        'chowchowPerformance': {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルが100%以上のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'chowchow',
            type: ['heartCaptcha']
          }
        }
      },
      'チャウチャウムードメイク': {
        'chowchowMoodMake': {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにメンタルが100%以上のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'chowchow',
            type: ['loveAttract_section', 'heartCaptcha']
          }
        }
      },
      'チャウチャウチアリーディング': {
        'chowchowCheerLeading': {
          text: [
            'メンタルを最大値の',
            '%回復させる。さらにメンタルが100%以上のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'chowchow',
            type: ['mentalRecover', 'heartCaptcha']
          }
        }
      },
      チャウチャウトリック: {
        chowchowTrick: {
          text: [
            '手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引く。'
          ],
          detail: {
            attr: '',
            type: ['reshuffle']
          }
        }
      },
      チャウチャウプレゼント: {
        chowchowPresent: {
          text: ['チャウチャウカードを1種類(合計1枚)山札に追加する。'],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      チャウチャウバカンス: {
        chowchowVacances: {
          text: [
            '手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引く。さらにこのセクション中、手札の上限枚数を2枚増加し、メンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: '',
            type: ['reshuffle', 'extensions_section', 'mentalRecover']
          }
        }
      },
      ドリーミングサポート: {
        dreamingSupport: {
          text: [
            '手札の全てのスキルの消費AP-3。さらにこのステージ中、獲得するLOVEを+',
            '%し、ボルテージPt.を+',
            '、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'dreaming',
            type: [
              'APReduce_all',
              'loveAttract_stage',
              'voltageGain',
              'protect_stage'
            ]
          }
        }
      },
      ブレイブハート: {
        braveHeart_under50: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルが50%以下の時、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'brave',
            type: ['heartCaptcha']
          }
        },
        braveHeart_under50_under25: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得し、姫芽の《イグニッションモード》を解除する。メンタルが50%以下のとき、ビートハート',
            '回分のスキルハートを獲得、メンタルが25%以下のとき、ビートハート',
            '回分のスキルハートをさらに追加で獲得する。'
          ],
          detail: {
            attr: 'brave',
            type: ['heartCaptcha', 'modeChange']
          }
        }
      },
      ブレイブアトラクト: {
        braveAttract_under25_sectionAttract: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにメンタルが25%以下のとき、APを1回復する。'
          ],
          detail: {
            attr: 'brave',
            type: ['loveAttract_section']
          }
        },
        braveAttract_under50_sectionAttract_APGain: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにメンタルが50%以下のとき、APを1回復する。'
          ],
          detail: {
            attr: 'brave',
            type: ['loveAttract_section', 'APGain']
          }
        }
      },
      ブレイブアトラクション: {
        braveAttraction_under1_heartCaptcha_sectionAttract: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルが1%以下の時、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'brave',
            type: ['heartCaptcha', 'loveAttract_section']
          }
        },
        braveAttraction_under5_heartCaptcha_sectionAttract: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルが5%以下の時、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'brave',
            type: ['heartCaptcha', 'loveAttract_section']
          }
        },
        braveAttraction_under25_sectionAttract_heartCaptcha: {
          text: [
            'このセクション中、獲得するLOVEを+',
            '%する。さらにメンタルが25%以下の時、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'brave',
            type: ['heartCaptcha', 'loveAttract_section']
          }
        },
        braveAttraction_under50_heartCaptcha_sectionAttract: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにメンタルが50%以下の時、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'brave',
            type: ['heartCaptcha', 'loveAttract_section']
          }
        },
        braveAttraction_sectionAttract_under50_heartCaptcha_under25_heartCaptcha:
          {
            text: [
              'ビートハート',
              '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
              '%する。さらにメンタルが50%以下のとき、ビートハート',
              '回分のスキルハートを獲得し、メンタルが25%以下のとき、ビートハート',
              '回分のスキルハートを獲得する。'
            ],
            detail: {
              attr: 'brave',
              type: ['heartCaptcha', 'loveAttract_section']
            }
          }
      },
      ブレイブファッシネイト: {
        braveFascinate_under50_voltageGain_sectionAttract: {
          text: [
            'ボルテージPt.を+',
            'する。さらにメンタルが50%以下の時、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'brave',
            type: ['voltageGain', 'loveAttract_section']
          }
        }
      },
      ブレイブボルテージハート: {
        braveVoltageHeart_under25: {
          text: [
            'ボルテージPt.を+',
            'する。さらにメンタルが25%以下の時、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'brave',
            type: ['voltageGain', 'heartCaptcha']
          }
        },
        braveVoltageHeart_under10: {
          text: [
            'ボルテージPt.を+',
            'する。さらにメンタルが10%以下の時、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'brave',
            type: ['voltageGain', 'heartCaptcha']
          }
        }
      },
      ブレイブエクステボルテージ: {
        braveExtensionsVoltage1_under50_section: {
          text: [
            'ボルテージPt.を+',
            'する。さらにメンタルが50%以下のとき、このセクション中、手札の上限枚数を1枚増加する。'
          ],
          detail: {
            attr: 'brave',
            type: ['voltageGain', 'extensions_section']
          }
        }
      },
      ブレイブワイドブースト: {
        braveWideBoost_under10_section: {
          text: [
            'このセクション中、ハート上限を+',
            'する。さらにメンタルが10%以下の時、次に使用するスキルハート獲得効果による獲得数を+',
            'する。'
          ],
          detail: {
            attr: 'brave',
            type: ['heartLimitUp', 'boost_heartCaptcha']
          }
        }
      },
      ブレイブボルテックスアトラクション: {
        braveVortexAttraction_under1_under0: {
          text: [
            'ボルテージPt.を+',
            'する。さらにメンタルが1%以下の時、ビートハート',
            '回分のスキルハートを獲得し、メンタルが0%のとき、このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'brave',
            type: ['voltageGain', 'heartCaptcha', 'loveAttract_stage']
          }
        }
      },
      ブレイブボルテックスブースト: {
        braveVortexBoost_under1_under0: {
          text: [
            'ボルテージPt.を+',
            'する。さらにメンタルが1%以下のとき、ビートハート',
            '回分のスキルハートを獲得し、メンタルが0%のとき、3回の間DOLLCHESTRAのメンバーが使用するラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: 'brave',
            type: ['voltageGain', 'heartCaptcha', 'loveAttract']
          }
        }
      },
      'ブレイブブーステッドリカバー：DOLLCHESTRA': {
        braveBoostedRecover_dollchestra: {
          text: [
            '3回の間DOLLCHESTRAのメンバーが使用するラブアトラクト効果を+',
            'する。さらにメンタルが1%以下のとき、メンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'brave',
            type: ['boost_loveAttract', 'mentalRecover']
          }
        }
      },
      'ドレス《室咲格子》': {
        dress_murozaki: {
          text: ['ドレスカード《室咲格子》を山札に1枚追加する。'],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      'ドレス《レインボーシフォン》': {
        dress_rainbow: {
          text: ['ドレスカード《レインボーシフォン》を山札に1枚追加する。'],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      'ドレス《Dream Believers》': {
        dress_DreamBelievers: {
          text: [
            'ドレスカード《Dream Believers》を2種類(合計2枚)山札に追加する。'
          ],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      'ドレス《Reflection in the mirror》': {
        dress_ReflectionInTheMirror: {
          text: [
            'ドレスカード《Reflection in the mirror》を3種類(合計3枚)山札に追加する。'
          ],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      'ドレス《青嵐の鯉流し》': {
        dress_seiranNoKoinagashi: {
          text: [
            'ドレスカード《青嵐の鯉流し》を1種類(合計2枚)山札に追加する。'
          ],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      'ドレス《Ether Aria》': {
        dress_etherAria: {
          text: ['ドレスカード《Ether Aria》を1種類(合計9枚)山札に追加する。'],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      'ドレス《Bloom the smile, Bloom the dream!》': {
        dress_BsBd: {
          text: [
            'ドレスカード《Bloom the smile, Bloom the dream!》を2種類(合計3枚)山札に追加する。'
          ],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      'ドレス《アオクハルカ》': {
        dress_aokuharuka_kaho: {
          text: [
            'ドレスカード《アオクハルカ》を1種類(合計1枚)山札に追加する。'
          ],
          detail: {
            attr: '',
            type: ['addCard']
          }
        },
        dress_aokuharuka_kozue: {
          text: [
            'ドレスカード《アオクハルカ》を1種類(合計1枚)山札に追加する。'
          ],
          detail: {
            attr: '',
            type: ['addCard']
          }
        },
        dress_aokuharuka_ginko: {
          text: [
            'ドレスカード《アオクハルカ》を1種類(合計3枚)山札に追加する。'
          ],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      'ドレス《PASSION!!!!!!》': {
        dress_passion: {
          text: [
            'ドレスカード《PASSION!!!!!!》を1種類(合計2枚)山札に追加する。'
          ],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      'ドレス《16th Birthday》': {
        dress_birthday: {
          text: [
            'ドレスカード《16th Birthday》を1種類(合計1枚)山札に追加する。'
          ],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      'ドレス《月夜見海月》': {
        dress_tsukuyomi: {
          text: [
            'ドレスカード《月夜見海月》を1種類(合計3枚)山札に追加する。さらにデッキ枚数が25枚以下のとき、ドレスカード《月夜見海月》を1種類(合計3枚)山札に追加する。'
          ],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      'ドレス《Link to the FUTURE》': {
        dress_lttf: {
          text: [
            'ドレスカード《Link to the FUTURE》を1種類(合計3枚)山札に追加する。'
          ],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      'ドレス《ハナムスビ》': {
        dress_hanamusubi: {
          text: [
            'ドレスカード《ハナムスビ》を3種類(合計9枚)山札に追加する。さらに手札を全て捨てて、デッキから手札上限までスキルを引く。この時ドレスカードをドローする確率大幅アップ。'
          ],
          detail: {
            attr: '',
            type: ['addCard', 'reshuffle']
          }
        }
      },
      'ドレス《聖夜譚》': {
        dress_seiyatan: {
          text: [
            'ドレスカード《聖夜譚》を1種類(合計5枚)山札に追加する。'
          ],
          detail: {
            attr: 'dress',
            type: ['addCard']
          }
        }
      },
      'ドレス《加賀友禅》': {
        dress_kagayuuzen: {
          text: [
            'ドレスカード《加賀友禅》を9種類(合計9枚)山札に追加する。'
          ],
          detail: {
            attr: 'dress',
            type: ['addCard']
          }
        }
      },
      'ドレス《ノヴァホワイト》': {
        'dress_novaWhite_01': {
          text: [
            'ドレスカード《ノヴァホワイト》を1種類(合計2枚)山札に追加する。'
          ],
          detail: {
            attr: 'dress',
            type: ['addCard']
          }
        }
      },
      'ドレス《翠鱗舞》': {
        'dress_suirinbu_01': {
          text: [
            'ドレスカード《翠鱗舞》を1種類(合計2枚)山札に追加する。'
          ],
          detail: {
            attr: 'dress',
            type: ['addCard']
          }
        }
      },
      'リメイクドレス《華・麗・雅》': {
        remakeDress_hrm: {
          text: [
            'リメイクドレスカード《華・麗・雅》を3種類(合計3枚)山札に追加する。さらに手札を全て捨てて、デッキから手札上限までスキルを引く。'
          ],
          detail: {
            attr: '',
            type: ['addCard', 'reshuffle']
          }
        }
      },
      'ドレス《Her-bath-rium》': {
        'dress_herBathRium': {
          text: [
            'ドレスカード《Her-bath-rium》を1種類(合計3枚)山札に追加する。'
          ],
          detail: {
            attr: 'dress',
            type: ['addCard']
          }
        }
      },
      'ドレス《シュータードレス》': {
        dress_shooterDress: {
          text: [
            '《シュータードレス/RIO》を1種類(合計1枚)山札に追加する。メンタルが50%以下のとき、さらに《シュータードレス/RIO》を1種類(合計1枚)山札に追加する。'
          ],
          detail: {
            attr: 'dress',
            type: ['addCard']
          }
        }
      },
      '《シュータードレス/RIO》': {
        shooterDressRio: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、AP回復速度を+',
            '%する。'
          ],
          detail: {
            attr: 'dress',
            type: ['reshuffle', 'APQuick']
          }
        }
      },
      'ドレス《ユメワズライ》': {
        'dress_yumewazurai_01': {
          text: [
            'このステージ中、ハート上限を+',
            'する。さらにドレスカード《ユメワズライ》を1種類(合計3枚)山札に追加する。'
          ],
          detail: {
            attr: 'dress',
            type: ['heartLimitUp', 'addCard']
          }
        }
      },
      '《ユメワズライ》': {
        'yumewazurai_01': {
          text: [
            'このステージ中、ハート上限を+',
            '、AP回復速度を+3%、このセクション中、手札の上限枚数を3枚増加し、フレッシュブーケカードを1種類(合計1枚)山札に追加する。さらにデッキ枚数が27枚以上のとき、このステージ中、獲得するLOVEを+',
            '%し、デッキ枚数が39枚以上のとき、ビートハート',
            '回分のスキルハートを獲得し、このステージ中、ハート上限を+',
            'する。'
          ],
          detail: {
            attr: 'dress',
            type: ['heartLimitUp', 'APQuick', 'extendHand', 'addCard', 'loveAttract_stage', 'heartCaptcha']
          }
        }
      },
      'フレッシュブーケ': {
        'freshBouquet_01': {
          text: [
            'このステージ中、ハート上限を+',
            'し、ビートハート',
            '回分のスキルハートを獲得する。さらにこのセクション中、手札の上限枚数を1枚増加する。'
          ],
          detail: {
            attr: 'bouquet',
            type: ['heartLimitUp', 'heartCaptcha', 'extendHand']
          }
        }
      },
      'グレイスブーケ': {
        'graceBouquet_01': {
          text: [
            'このステージ中、ハート上限を+',
            'し、ビートハート',
            '回分のスキルハートを獲得する。さらにデッキにあるスリーズブーケのカードスキルの消費AP-3。'
          ],
          detail: {
            attr: 'bouquet',
            type: ['heartLimitUp', 'heartCaptcha', 'APReduce_deck_ceriseBouquet']
          }
        }
      },
      'ドリームブーケ': {
        'dreamBouquet_01': {
          text: [
            'このステージ中、ハート上限を+',
            'し、ビートハート',
            '回分のスキルハートを獲得する。さらにこのステージ中、獲得するLOVEを+',
            '%、AP回復速度を+3%する。'
          ],
          detail: {
            attr: 'bouquet',
            type: ['heartLimitUp', 'heartCaptcha', 'loveAttract_stage', 'APQuick']
          }
        }
      },
      'ドレス《キセキ》': {
        'dress_kiseki_01': {
          text: [
            'ドレスカード《キセキ》を3種類(合計3枚)山札に追加する。'
          ],
          detail: {
            attr: 'dress',
            type: ['addCard']
          }
        }
      },
      '《奇跡の舞踏会》': {
        'dress_kiseki_02': {
          text: [
            'このステージ中、AP回復速度を+',
            '%する。さらにビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'dress',
            type: ['APQuick', 'heartCaptcha']
          }
        }
      },
      '《軌跡の舞踏会》': {
        'dress_kiseki_03': {
          text: [
            'このステージ中、ハート上限を+',
            'し、ドレスカード使用によるスキルハート獲得効果の獲得数を+',
            '%する。さらにビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'dress',
            type: ['heartLimitUp', 'boost_heartCaptcha', 'heartCaptcha']
          }
        }
      },
      '《輝跡の舞踏会》': {
        'dress_kiseki_04': {
          text: [
            'このステージ中、手札の上限枚数を1枚増加し、手札を全て捨てて、デッキから手札上限までスキルを引く。さらにビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'dress',
            type: ['reshuffle', 'APQuick']
          }
        }
      },
      '梢デザイン': {
        design_kozue: {
          text: [
            'このステージ中、AP回復速度を+3%する。'
          ],
          detail: {
            attr: 'design',
            type: ['APQuick']
          }
        }
      },
      '綴理デザイン': {
        design_tsuzuri: {
          text: [
            'ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'design',
            type: ['voltageGain']
          }
        }
      },
      '慈デザイン': {
        design_megumi: {
          text: [
            'メンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'design',
            type: ['mentalRecover']
          }
        }
      },
      '花帆デザイン': {
        design_kaho: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'design',
            type: ['heartCaptcha']
          }
        }
      },
      'さやかデザイン': {
        design_sayaka: {
          text: [
            '次に使用するラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: 'design',
            type: ['boost_loveAttract']
          }
        }
      },
      '瑠璃乃デザイン': {
        design_rurino: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。'
          ],
          detail: {
            attr: 'design',
            type: ['reshuffle']
          }
        }
      },
      '吟子デザイン': {
        design_ginko: {
          text: [
            'このステージ中、手札の上限枚数を1枚増加する。'
          ],
          detail: {
            attr: 'design',
            type: ['extendHand']
          }
        }
      },
      '小鈴デザイン': {
        design_kosuzu: {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'design',
            type: ['protect_stage']
          }
        }
      },
      '姫芽デザイン': {
        design_hime: {
          text: [
            '姫芽の《イグニッションモード》の状態を切り替える。'
          ],
          detail: {
            attr: 'design',
            type: ['modeChange']
          }
        }
      },
      'Letzter Lied': {
        letzterLied: {
          text: [
            'エーデルカードを2種類(合計2枚)山札に追加する。'
          ],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      '《Her-bath-rium》': {
        'Her-bath-rium': {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのセクション中、手札の上限枚数を1枚増加し、このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: '',
            type: ['reshuffle', 'extendHand', 'protect_stage']
          }
        }
      },
      'Prinzessin': {
        prinzessin: {
          text: [
            'このセクション中、AP回復速度を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['APQuick']
          }
        }
      },
      'Ritter': {
        ritter: {
          text: [
            'ボルテージPt.を+',
            'する。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: '',
            type: ['voltageGain', 'protect_stage']
          }
        }
      },
      リブートエクステンド: {
        rebootExtend_stage1_stageAttract: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、手札の上限枚数を1枚増加し、次に使用するラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['reshuffle', 'extendHand', 'boost_loveAttract']
          }
        }
      },
      リブートハート: {
        rebootHeart: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに次に使用するスキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['reshuffle', 'boost_heartCaptcha']
          }
        }
      },
      リブートアトラクト: {
        rebootAttract: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに次に使用するラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['reshuffle', 'boost_loveAttract']
          }
        }
      },
      'リブートアトラクト：みらくらぱーく！': {
        rebootAttract_mirapa: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに次にみらくらぱーく！のメンバーが使用するラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['reshuffle', 'boost_loveAttract']
          }
        }
      },
      リブートプロテクト: {
        rebootProtect: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに次に使用するラブアトラクト効果を+',
            '%し、このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: '',
            type: ['reshuffle', 'boost_loveAttract', 'protect_stage']
          }
        }
      },
      リブートサポート: {
        rebootSupport: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに次にスリーズブーケのメンバーが使用するラブアトラクト効果を',
            '%し、デッキにあるスリーズブーケ、ドレスカードのスキルの消費AP-3。'
          ],
          detail: {
            attr: '',
            type: ['reshuffle', 'boost_loveAttract', 'APReduce']
          }
        }
      },
      ボルテージサポート: {
        voltageSupport: {
          text: [
            'ボルテージPt.を+',
            'する。さらに手札のメイン効果にボルテージ増加効果を持つスキルの消費AP-1。'
          ],
          detail: {
            attr: '',
            type: ['voltageGain', 'APReduce_voltageGain']
          }
        }
      },
      オーバーブルーミング: {
        overBlooming_section: {
          text: [
            'このセクション中、ハートの上限を+',
            'する。さらに',
            '個のスキルハートを獲得する。'
          ],
          detail: {
            attr: '',
            type: ['heartLimitUp', 'heartCaptcha']
          }
        }
      },
      ハートスプリンクル: {
        heartSprinkles: {
          text: [
            '',
            '個のスキルハートを獲得する。さらに3回の間スキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'boost_heartCaptcha']
          }
        }
      },
      アトラクトブレッシング: {
        attractBlessing: {
          text: [
            'このステージ中、メイン効果に獲得LOVE増加効果を持つスキルの消費AP-2。さらに2回の間ラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['heartLimitUp', 'heartCaptcha']
          }
        }
      },
      フルリカバー: {
        fullRecover: {
          text: [
            'メンタルを最大値の100%回復する。さらにこのセクション中、メンタルが1秒ごとに最大値の',
            '%回復する。'
          ],
          detail: {
            attr: '',
            type: ['mentalRecover']
          }
        }
      },
      ソラス: {
        solas: {
          text: [
            'このセクション中、メンタルが1秒ごとに最大値の',
            '%回復する。'
          ],
          detail: {
            attr: '',
            type: ['mentalRecover']
          }
        }
      },
      アトラクションゲイン: {
        attractionGain: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得し、このステージ中、獲得するLOVEを+',
            '%する。さらにAPを10回復する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'loveAttract_stage', 'APGain']
          }
        }
      },
      ハートチューニング: {
        heartTuning: {
          text: [
            '次に使用するスキルハート獲得効果による獲得数を+',
            '%する。さらにこのセクション中、獲得するLOVEを+',
            '%し、ハート数の上限を+',
            'する。'
          ],
          detail: {
            attr: 'tuning',
            type: ['boost_heartCaptcha', 'loveAttract_section', 'heartLimitUp']
          }
        }
      },
      ハートブレッシング: {
        heartBlessing: {
          text: [
            'このステージ中、メイン効果にスキルハート獲得効果を持つスキルの消費AP-2。さらに4回の間スキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'blessing',
            type: ['APReduce_heart', 'boost_heartCaptcha']
          }
        }
      },
      エクステアトラクトブースト: {
        extendAttractBoost: {
          text: [
            'このステージ中、手札の上限枚数を2枚増加する。さらに次に使用するラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['extendHand', 'boost_loveAttract']
          }
        }
      },
      ラブギフト: {
        loveGift: {
          text: [
            'それぞれ3回の間スキルハート獲得効果による獲得数を',
            '%、ラブアトラクト効果を',
            '%する。さらにこのセクション中、ハート数の上限を+',
            'する。'
          ],
          detail: {
            attr: 'gift',
            type: ['boost_heartCaptcha', 'boost_loveAttract', 'heartLimitUp']
          }
        }
      },
      フューチャーブレッシング: {
        futureBlessing: {
          text: [
            '山札にある全てのスキルの消費AP-1。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'blessing',
            type: ['APReduce_all', 'protect_stage']
          }
        }
      },
      エイペックス: {
        apex: {
          text: [
            'ボルテージLv.を10にし、このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'apex',
            type: ['voltageGain', 'loveAttract_stage']
          }
        }
      },
      ワイドハート: {
        wideHeart_stage: {
          text: ['このステージ中、ハートの上限を+', 'する。'],
          detail: {
            attr: '',
            type: ['heartLimitUp']
          }
        }
      },
      ワイドエクステンド: {
        wideExtend_section3: {
          text: [
            'このセクション中、ハート上限を+',
            'し、手札の上限枚数を3枚増加する。'
          ],
          detail: {
            attr: '',
            type: ['heartLimitUp', 'extendHand']
          }
        },
        wideExtend_stage1: {
          text: [
            'このステージ中、ハート上限を+',
            'し、手札の上限枚数を1枚増加する。'
          ],
          detail: {
            attr: '',
            type: ['heartLimitUp', 'extendHand']
          }
        },
        wideExtend_stage1_2: {
          text: [
            'このステージ中、手札の上限枚数を1枚増加し、ハート上限を+',
            'する。'
          ],
          detail: {
            attr: '',
            type: ['heartLimitUp', 'extendHand']
          }
        },
        wideExtend_section4: {
          text: [
            'このセクション中、手札の上限枚数を4枚増加する。さらにこのステージ中、ハート上限を+',
            'する。'
          ],
          detail: {
            attr: '',
            type: ['heartLimitUp', 'extendHand']
          }
        }
      },
      ワイドゲイン: {
        wideGain_section: {
          text: [
            'このセクション中、ハートの上限を+',
            'する。さらにAPを+5する。'
          ],
          detail: {
            attr: 'wide',
            type: ['heartLimitUp', 'APGain']
          }
        }
      },
      セレブレイション: {
        celebration_heart_attract_mental: {
          text: [
            '次に使用するスキルハート獲得効果による獲得数を+',
            '%、ラブアトラクト効果を+',
            '%、メンタルリカバー効果を+',
            '%する。'
          ],
          detail: {
            attr: 'celebration',
            type: [
              'boost_heartCaptcha',
              'boost_loveAttract',
              'boost_mentalRecover'
            ]
          }
        },
        celebration_heart_attract_protect: {
          text: [
            '次に使用するスキルハート獲得効果による獲得数を+',
            '%、ラブアトラクト効果を+',
            '%、メンタルプロテクト効果を+',
            '%する。'
          ],
          detail: {
            attr: 'celebration',
            type: [
              'boost_heartCaptcha',
              'boost_loveAttract',
              'boost_mentalProtect'
            ]
          }
        },
        celebration_attract_voltage_mental: {
          text: [
            '次に使用するラブアトラクト効果を+',
            '%、ボルテージゲイン効果を+',
            '%、メンタルリカバー効果を+',
            '%する。'
          ],
          detail: {
            attr: 'celebration',
            type: [
              'boost_loveAttract',
              'boost_voltageGain',
              'boost_mentalRecover'
            ]
          }
        },
        celebration_voltage_mental_heart: {
          text: [
            '次に使用するボルテージゲイン効果を+',
            '%、メンタルリカバー効果を+',
            '%、スキルハート獲得効果を+',
            '%する。'
          ],
          detail: {
            attr: 'celebration',
            type: [
              'boost_voltageGain',
              'boost_mentalRecover',
              'boost_heartCaptcha'
            ]
          }
        },
        celebration_heart_attract_voltage: {
          text: [
            '次に使用するスキルハート獲得効果を+',
            '%、ラブアトラクト効果を+',
            '%、ボルテージゲイン効果を+',
            '%する。'
          ],
          detail: {
            attr: 'celebration',
            type: [
              'boost_heartCaptcha',
              'boost_loveAttract',
              'boost_voltageGain'
            ]
          }
        },
        celebration_attract_voltage_protect: {
          text: [
            '次に使用するラブアトラクト効果を+',
            '%、ボルテージゲイン効果を+',
            '%、メンタルプロテクト効果を+',
            '%する。'
          ],
          detail: {
            attr: 'celebration',
            type: [
              'boost_loveAttract',
              'boost_voltageGain',
              'boost_mentalProtect'
            ]
          }
        },
        celebration_heart_recover_protect: {
          text: [
            '次に使用するラブアトラクト効果を+',
            '%、メンタルリカバー効果を+',
            '%、メンタルプロテクト効果を+',
            '%する。'
          ],
          detail: {
            attr: 'celebration',
            type: [
              'boost_loveAttract',
              'boost_mentalRecover',
              'boost_mentalProtect'
            ]
          }
        }
      },
      ビリーフブースト: {
        beliefBoost: {
          text: [
            'このセクション、メンタルが0になってもメンタルダウンしなくなる。さらに次に使用するスキルハート獲得効果による獲得数を+',
            '%、ラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: 'belief',
            type: [
              'mentalDown_section',
              'boost_heartCaptcha',
              'boost_loveAttract'
            ]
          }
        }
      },
      'ビリーフブースト：DOLLCHESTRA': {
        beliefBoost_dollchestra: {
          text: [
            'このセクション中、メンタルが0になってもメンタルダウンしなくなる。さらにこのステージ中、3回の間DOLLCHESTRAのメンバーが使用するラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: 'belief',
            type: ['mentalDown_section', 'boost_loveAttract']
          }
        }
      },
      ブーステッドフィール: {
        boostedFeel: {
          text: [
            'メンタルを最大値の',
            '%回復し、ボルテージPt.を+',
            'する。さらに次に使用するラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['mentalRecover', 'voltageGain', 'boost_loveAttract']
          }
        }
      },
      ブーステッドゲイン: {
        'boostedGain-boost_recover-boost_voltage-gain7': {
          text: [
            '次に使用するメンタルリカバー効果を+',
            '%、ボルテージゲイン効果を+',
            '%する。さらにAPを7回復する。'
          ],
          detail: {
            attr: 'boost',
            type: ['boost_mentalRecover', 'boost_voltageGain', 'APGain']
          }
        }
      },
      ブーステッドエクステゲイン: {
        'boostedExtendGain-boost_voltage-addCard1_stage-gain10': {
          text: [
            '次に使用するボルテージゲイン効果を+',
            '%する。さらにこのステージ中、手札の上限枚数を1枚増加し、APを10回復する。'
          ],
          detail: {
            attr: 'boost',
            type: ['boost_voltageGain', 'extendHand', 'APGain']
          }
        },
        'boostedExtendGain-boost_recover-addCard1_stage-gain10': {
          text: [
            '次に使用するメンタルリカバー効果を+',
            '%する。さらにこのステージ中、手札の上限枚数を1枚増加し、APを10回復する。'
          ],
          detail: {
            attr: 'boost',
            type: ['boost_mentalRecover', 'extendHand', 'APGain']
          }
        }
      },
      ヒートアップ: {
        heatUp_section: {
          text: ['このセクション中、AP回復速度を+', '%する。'],
          detail: {
            attr: '',
            type: ['APQuick']
          }
        },
        heatUp_stage: {
          text: ['このステージ中、AP回復速度を+', '%する。'],
          detail: {
            attr: '',
            type: ['APQuick']
          }
        }
      },
      イグニッションブースト: {
        ignitionBoost_loveAttract: {
          text: [
            '姫芽が《イグニッションモード》になる。さらに3回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'alternate',
            type: ['modeChange', 'boost_heartCaptcha']
          }
        },
        ignitionBoost_mentalRecover: {
          text: [
            '姫芽が《イグニッションモード》になる。さらに3回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'alternate',
            type: ['modeChange', 'boost_mentalRecover']
          }
        }
      },
      イグニッションボルテージ: {
        ignitionVoltage: {
          text: [
            '姫芽が《イグニッションモード》になる。さらにボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: '',
            type: ['modeChange', 'voltageGain']
          }
        }
      },
      イグニッションプロテクト: {
        ignitionProtect: {
          text: [
            '姫芽が《イグニッションモード》になる。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: '',
            type: ['modeChange', 'protect_stage']
          }
        }
      },
      'オルタネイト：イグニッション': {
        alternate_ignition_hime: {
          text: [
            '姫芽の《イグニッションモード》の状態に応じて効果が変化する。'
          ],
          detail: {
            attr: 'alternate',
            type: ['ignition']
          }
        }
      },
      イグニッションリフレッシュ: {
        ignitionRefresh_hime_mentalRecover_over100: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引き、メンタルを最大値の',
            '%回復させる。さらにメンタルが100%以上のとき姫芽が《イグニッションモード》になる。'
          ],
          detail: {
            attr: '',
            type: ['reshuffle', 'mentalRecover', 'modeChange']
          }
        }
      },
      イグニッションスタンバイ: {
        ignitionStandby_hime_mentalOver100OrVoltageOver10: {
          text: [
            'メンタルが50%以下のときメンタルを最大値の',
            '%回復させる。ボルテージLv.が7以下のときボルテージPt.を+',
            'する。メンタルが100%以上、またはボルテージLv.が10以上の時姫芽が《イグニッションモード》になる。'
          ],
          detail: {
            attr: '',
            type: ['mentalRecover', 'voltageGain', 'modeChange']
          }
        }
      },
      イグニッションエンデュランス: {
        ignitionEndurance_hime_mentalOver100OrVoltageOver10: {
          text: [
            'メンタルを最大値の',
            '%回復し、ボルテージPt.を+',
            'する。さらにメンタルが100%以上、またはボルテージLv.が10以上のとき姫芽が《イグニッションモード》になる。'
          ],
          detail: {
            attr: '',
            type: ['mentalRecover', 'voltageGain', 'modeChange']
          }
        }
      },
      トライアングルコード: {
        triangleCode: {
          text: [
            '梢、綴理がそれぞれ6回の間使用するスキルハート獲得効果による獲得数を+',
            '%、ラブアトラクト効果を+',
            '%、ボルテージゲイン効果を+',
            '%する。'
          ],
          detail: {
            attr: 'triangle',
            type: [
              'boost_heartCaptcha',
              'boost_loveAttract',
              'boost_voltageGain'
            ]
          }
        }
      },
      アバンダンスアトラクション: {
        abunDanceAttraction_over30_stage: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%し、AP回復速度を+1%する。さらにデッキ枚数が30枚以上のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'abunDance',
            type: ['loveAttract_stage', 'APQuick', 'heartCaptcha']
          }
        },
        abunDanceAttraction_over30_stage_over33: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにデッキ枚数が30枚以上のとき、ビートハート',
            '回分のスキルハートを獲得し、デッキ枚数が33枚以上のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'abunDance',
            type: ['loveAttract_stage', 'APQuick', 'heartCaptcha']
          }
        }
      },
      アバンダンスボルテックスアトラクション: {
        abundanceVortexAttraction: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得し、ボルテージPt.を+',
            'する。さらにデッキ枚数が25枚以上のとき、このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'abundance',
            type: ['heartCaptcha', 'voltageGain', 'loveAttract_stage']
          }
        }
      },
      アバンダンスアトラクト: {
        abunDanceAttract_over30_stage: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにデッキ枚数が30枚以上のとき、このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'abunDance',
            type: ['loveAttract_stage']
          }
        }
      },
      アバンダンスボルテージハート: {
        abunDanceVoltageHeart: {
          text: [
            'ボルテージPt.を+',
            'する。さらにデッキ枚数が30枚以上のとき、このセクション中、AP回復速度を+13%し、デッキ枚数が33枚以上のとき、このステージ中、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'abunDance',
            type: ['voltageGain', 'APQuick', 'heartCaptcha']
          }
        }
      },
      アバンダンスハートプロテクト: {
        abunDanceHeartProtect: {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。 さらにデッキ枚数が30枚以上のとき、APを3回復し、デッキ枚数が33枚以上のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'abunDance',
            type: ['protect_stage', 'APGain', 'heartCaptcha']
          }
        }
      },
      アバンダンスリプレイアトラクション: {
        abunDanceReplayAttraction: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。この時スリーズブーケのカードをドローする確率大幅アップ。さらにデッキ枚数が30枚以上のとき、ビートハート',
            '回分のスキルハートを獲得し、デッキ枚数が33枚以上のとき、このステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'abunDance',
            type: ['reshuffle', 'heartCaptcha', 'loveAttract_stage']
          }
        }
      },
      'アバンダンスブースト：ドレス': {
        abunDanceBoost_dress_over30: {
          text: [
            '3回の間ドレスカードの使用によるスキルハート獲得効果による獲得数を+',
            '%する。さらにデッキ枚数が30枚以上のとき、3回の間ドレスカードの使用によるラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: 'abunDance',
            type: ['loveAttract_stage', 'APQuick', 'heartCaptcha']
          }
        }
      },
      アバンダンスブーステッドリカバーハート: {
        abunDanceBoostedRecoverHeart: {
          text: [
            'メンタルを最大値の',
            '%回復させ、ビートハート',
            '回分のスキルハートを獲得する。さらにデッキ枚数が30枚以上のとき、次に慈が使用するラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: 'abunDance',
            type: ['mentalRecover', 'heartCaptcha', 'boost_loveAttract']
          }
        },
        abunDanceAttraction_over30_stage_over33: {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにデッキ枚数が30枚以上のとき、ビートハート',
            '回分のスキルハートを獲得し、デッキ枚数が33枚以上のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'abunDance',
            type: ['loveAttract_stage', 'APQuick', 'heartCaptcha']
          }
        }
      },
      バブル: {
        bubble_minus3_ceriseBouquet_dressCard: {
          text: [
            'デッキにあるスリーズブーケ、ドレスカードのスキルの消費AP-3。'
          ],
          detail: {
            attr: 'bubble',
            type: ['APReduce_deck_ceriseBouquet', 'APReduce_deck_dressCard']
          }
        }
      },
      タッグハート: {
        tagHeart_APReduce20_hime: {
          text: [
            'ビートハート',
            '分のスキルハートを獲得する。さらにデッキにある姫芽のスキルの消費AP-20。'
          ],
          detail: {
            attr: 'tag',
            type: ['heartCaptcha', 'APReduce']
          }
        }
      },
      タッグブースト: {
        tagBoost: {
          text: [
            '次にみらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
            '%、ラブアトラクト効果を+',
            '%する。さらにデッキにある姫芽のスキルの消費AP-10。'
          ],
          detail: {
            attr: 'tag',
            type: ['boost_heartCaptcha', 'boost_loveAttract', 'APReduce']
          }
        }
      },
      メンターリカバー: {
        mentorRecover: {
          text: [
            '姫芽の《イグニッションモード》を切り替える。さらにメンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'mentor',
            type: ['modeChange', 'mentalRecover']
          }
        }
      },
      メンターブースト: {
        mentorBoost_captcha_attract: {
          text: [
            '姫芽の《イグニッションモード》を切り替える。さらに次にみらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
            '%、ラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: 'mentor',
            type: ['modeChange', 'boost_heartCaptcha', 'boost_loveAttract']
          }
        }
      },
      フルパワーアトラクション: {
        fullPowerAttraction: {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得、このセクション中、獲得するLOVEを+',
            '%し、APを20回復する。さらにメンタルを最大値の50%減少、ボルテージPt.を-600する。また姫芽の《イグニッションモード》を解除する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'loveAttract_section', 'modeChange']
          }
        }
      },
      モードチェンジ: {
        modeChange_mentalRecover_voltageGain: {
          text: [
            '姫芽の《イグニッションモード》の状態を切り替える。さらにメンタルを最大値の',
            '%回復し、ボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'modeChange',
            type: ['modeChange', 'mentalRecover', 'voltageGain']
          }
        }
      },
      アルティメットフォース: {
        ultimateForce: {
          text: [
            'このステージ中、APを無限にする。さらに手札からスキルを使用したとき、スキル使用不可となるクールタイムが発生する。スペシャルアピールのLvが高い、デッキ枚数が多い、または楽曲が短いほどクールタイムが短くなる。'
          ],
          detail: {
            attr: 'infinity',
            type: ['infinity_AP_stage', 'coolTime']
          }
        }
      },
      アブソリュートボルテージ: {
        absoluteVoltage: {
          text: [
            'このステージ中、ボルテージLv.を無限にする。さらにボルテージPt.を獲得する効果が発動した時、このステージ中獲得するLOVEを増加させ、APを0～20回復する。発動した効果の効果値とスペシャルアピールのLvが高いほど効果値が増加する。デッキ枚数が18枚より少ないほど、効果値が減少する。'
          ],
          detail: {
            attr: 'infinity',
            type: ['infinity_voltage_stage', 'loveAttract_stage', 'APGain']
          }
        }
      },
      エターナルスピリッツ: {
        eternalSpirits: {
          text: [
            'このステージ中、メンタルを無限にする。さらにメンタルを回復する効果、またはメンタルプロテクト効果が発動した時、スキルハートを獲得し、APを0～20回復する。発動した効果の効果量とスペシャルアピールのLvが高いほど効果値が増加する。デッキ枚数が18枚より少ないほど、効果値が減少する。'
          ],
          detail: {
            attr: 'infinity',
            type: ['infinity_mental_stage', 'heartCaptcha', 'APGain']
          }
        }
      },
      モジュレートボルテージハート: {
        modulateVoltageHeart: {
          text: [
            '3セクション目までの間、ボルテージPt.を+',
            'し、メンタルを最大値の10%減少させる。さらにAPを3回復する。4セクション目以降、ボルテージPt.を+',
            'し、さらにメンタルが5%以下のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'modulate',
            type: ['voltageGain', 'mentalReduce', 'APGain', 'heartCaptcha']
          }
        }
      },
      モジュレートエクステブースト: {
        modulateExtensionsBoost: {
          text: [
            '3セクション目までの間、このセクション中、手札の上限枚数を3枚増加し、このステージ中、3回の間みらくらぱーく！のメンバーが使用するラブアトラクト効果を+',
            '%する。4セクション目以降、このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にし、3回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'modulate',
            type: [
              'extensions_section',
              'loveAttract_stage',
              'protect_stage',
              'boost_heartCaptcha'
            ]
          }
        }
      },
      アップドラフトハート: {
        upDraftHeart_attract_reshuffle_heartCaptcha_reduce3: {
          text: [
            '3回の間みらくらぱーく！のメンバーが使用するラブアトラクト効果を+',
            '%する。さらにメンタルが100%のとき、手札を全て捨てて、デッキから手札上限までスキルを引き、ビートハート',
            '個分のスキルハートを獲得、メンタルを最大値の3%減少させる。'
          ],
          detail: {
            attr: 'upDraft',
            type: [
              'boost_loveAttract',
              'reshuffle',
              'heartCaptcha',
              'mentalReduce'
            ]
          }
        }
      },
      アップドラフトアトラクト: {
        upDraftAttract_attract_reshuffle_stageAttract_reduce3: {
          text: [
            '3回の間みらくらぱーく！のメンバーが使用するラブアトラクト効果を+',
            '%する。さらにメンタルが100%のとき、手札を全て捨てて、デッキから手札上限までスキルを引き、このステージ中、獲得するLOVEを+',
            '%し、メンタルを最大値の3%減少させる。'
          ],
          detail: {
            attr: 'upDraft',
            type: [
              'boost_loveAttract',
              'reshuffle',
              'loveAttract_stage',
              'mentalReduce'
            ]
          }
        }
      },
      トリカゴ: {
        torikago: {
          text: [
            'このセクション中、メンタルが0になってもメンタルダウンしなくなり、AP回復速度を+33%する。さらにメンタルを最大値の100%減少させる。'
          ],
          detail: {
            attr: 'torikago',
            type: ['mentalDown_section', 'APQuick', 'mentalDown_section']
          }
        }
      },
      トキノイト: {
        tokinoito: {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。この時スリーズブーケ、ドレスカードをドローする確率大幅アップ。さらにデッキ枚数が30枚以上のとき、次のドレスカード使用によるラブアトラクト効果を+',
            '%し、デッキ枚数が33枚以上のとき、次にスリーズブーケのメンバーが使用するラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: 'tokinoito',
            type: ['reshuffle', 'boost_loveAttract']
          }
        }
      },
      エンジェルアタック: {
        angelAttack: {
          text: [
            'このステージ中、スキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['boost_heartCaptcha']
          }
        }
      },
      ジャスティスアタック: {
        justiceAttack: {
          text: [
            'メンタルが75%以上のとき、このセクション中、スキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['boost_heartCaptcha']
          }
        }
      },
      トラストスラッシュ: {
        trustSlash: {
          text: [
            '5セクション目でボルテージLv.が10以上のとき、このセクション中、獲得するLOVEを+',
            '%する。さらにビートハート',
            '回分のスキルハートを3回獲得する。'
          ],
          detail: {
            attr: '',
            type: ['loveAttract_section', 'heartCaptcha']
          }
        }
      },
      リプレイブーステッドハート: {
        replayBoostedHeart: {
          text: [
            'ビートハート',
            '回分のスキルハートを3回獲得し、3回の間ラブアトラクト効果を+',
            '%する。さらに手札を全て捨てて、捨て札を全て山札に戻した後、デッキから手札上限までスキルを引く。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'boost_loveAttract', 'reshuffle']
          }
        }
      },
      'APゲイン：メンタルリカバー & プロテクト': {
        'APGain-mentalRecover_protect': {
          text: [
            'このステージ中、メンタルを回復する効果、またはメンタルプロテクト効果が発動した時、APを0～20回復する。発動した効果の効果とスペシャルアピールのLvが高いほど効果値が増加する。デッキ枚数が18枚より少ないほど、効果値が減少する。'
          ],
          detail: {
            attr: '',
            type: ['APGain']
          }
        }
      },
      'ワールドワイドアトラクション': {
        'worldWideAttraction': {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにデッキ枚数が30枚以上、ボルテージLv.が10以上かつメンタルが100%以上のときこのステージ中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha', 'loveAttract_stage']
          }
        }
      },
      'M\'s ジュエル': {
        'msJewel': {
          text: [
            'デッキにある全てのカードのスキルの消費AP-1。さらにこのステージ中、AP回復速度を+9%し、手札の上限枚数を1枚増加する。'
          ],
          detail: {
            attr: '',
            type: ['APReduce_all', 'APQuick', 'extendHand']
          }
        }
      },
      'AURORA LINK': {
        'AURORALINK': {
          text: [
            'このステージ中、吟子/花帆/梢/小鈴/さやか/綴理/姫芽/瑠璃乃/慈のスキルを全員使用するたび、このステージ中、獲得するLOVEを+',
            '%し、APを20回復する。消費APの合計に応じてアトラクト効果の効果量が変化する。各メンバーを重複した際、消費APの記録を上書きする。'
          ],
          detail: {
            attr: '',
            type: ['loveAttract_stage', 'APGain']
          }
        }
      },
      'ナインハート・アンサンブル': {
        'nineHeart_ensemble': {
          text: [
            '手札の全てのスキルを使用する。さらにビートハート',
            '回分のスキルハートを9回獲得する。このスキル使用に必要なAPは、他の手札の全てのスキルのAPの合計値になる。'
          ],
          detail: {
            attr: 'nineHeart',
            type: ['skillUse-handsCard', 'heartCaptcha']
          }
        }
      },
      'ナインハート・ボルテージ': {
        'nineHeart_voltage': {
          text: [
            'ボルテージPt.を+',
            'する。さらにビートハート',
            '回分のスキルハートを9回獲得する。'
          ],
          detail: {
            attr: 'nineHeart',
            type: ['voltageGain', 'heartCaptcha']
          }
        }
      },
      'ナインハート・プロテクト': {
        'nineHeart_protect': {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにビートハート',
            '回分のスキルハートを9回獲得する。'
          ],
          detail: {
            attr: 'nineHeart',
            type: ['protect_stage', 'heartCaptcha']
          }
        }
      },
      'ナインハート・ブースト': {
        'nineHeart_boost': {
          text: [
            '次に使用するラブアトラクト効果を+',
            '%する。さらにビートハート',
            '回分のスキルハートを9回獲得する。'
          ],
          detail: {
            attr: 'nineHeart',
            type: ['boost_loveAttract', 'heartCaptcha']
          }
        }
      },
      'ナインハート・エクステンド': {
        'nineHeart_extend': {
          text: [
            'このセクション中、手札の上限枚数を6枚増加する。さらにビートハート',
            '回分のスキルハートを9回獲得する。'
          ],
          detail: {
            attr: 'nineHeart',
            type: ['extendHand', 'heartCaptcha']
          }
        }
      },
      'ナインハート・アトラクション': {
        'nineHeart_attraction': {
          text: [
            'このステージ中、獲得するLOVEを+',
            '%する。さらにビートハート',
            '回分のスキルハートを9回獲得する。'
          ],
          detail: {
            attr: 'nineHeart',
            type: ['loveAttract_stage', 'heartCaptcha']
          }
        }
      },
      'ナインハート・ドレス': {
        'nineHeart_dress': {
          text: [
            'ビートハート',
            '回分のスキルハートを9回獲得する。さらに3回までドレスカード《AURORA FLOWER》を3種類(合計3枚)山札に追加する。'
          ],
          detail: {
            attr: 'nineHeart',
            type: ['heartCaptcha', 'addCard']
          }
        }
      },
      'ナインハート・ブレイブ': {
        'nineHeart_brave': {
          text: [
            'ビートハート',
            '回分のスキルハートを9回獲得する。さらにメンタルが50%以下のとき、ビートハート',
            '回分のスキルハートを追加で9回獲得する。'
          ],
          detail: {
            attr: 'nineHeart',
            type: ['heartCaptcha']
          }
        }
      },
      'ナインハート・イグニッション': {
        'nineHeart_ignition': {
          text: [
            'ビートハート',
            '回分のスキルハートを9回獲得する。さらに姫芽が《イグニッションモード》になる。'
          ],
          detail: {
            attr: 'nineHeart',
            type: ['heartCaptcha', 'modeChange']
          }
        }
      },
      'ナインハート・リプレイ': {
        'nineHeart_replay': {
          text: [
            'ビートハート',
            '回分のスキルハートを9回獲得し、手札を全て捨てて、デッキから手札上限までスキルを引く。さらに姫芽の《イグニッションモード》を解除する。'
          ],
          detail: {
            attr: 'nineHeart',
            type: ['heartCaptcha', 'reshuffle', 'modeChange']
          }
        }
      },
      'AURORA FLOWER/C': {
        'auroraFlower-C': {
          text: [
            'ビートハート',
            '回分のスキルハートを3回獲得し、このステージ中、獲得するLOVEを+',
            '%する。さらにAPを',
            '回復する。'
          ],
          detail: {
            attr: 'auroraFlower',
            type: ['heartCaptcha', 'loveAttract_stage', 'APGain']
          }
        }
      },
      'AURORA FLOWER/D': {
        'auroraFlower-D': {
          text: [
            'ボルテージPt.を+',
            'し、ビートハート',
            '回分のスキルハートを3回獲得する。さらに次のドレスカード使用によるラブアトラクト効果を+',
            '%する。'
          ],
          detail: {
            attr: 'auroraFlower',
            type: ['voltageGain', 'heartCaptcha', 'boost_loveAttract']
          }
        }
      },
      'AURORA FLOWER/M': {
        'auroraFlower-M': {
          text: [
            '手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引き、ビートハート',
            '回分のスキルハートを3回獲得する。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'auroraFlower',
            type: ['reshuffle', 'heartCaptcha', 'protect_stage']
          }
        }
      },
      'シーズニングキャプチャ': {
        'seasoningCaptcha_stage-useSkill': {
          text: [
            'このステージ中、スキル使用時にビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: '',
            type: ['heartCaptcha']
          }
        }
      },
      'ブルーミングトゥギャザー': {
        'bloomingTogether': {
          text: [
            'このステージ中、スキルハート獲得効果による獲得数を+',
            '%する。さらにデッキにある全てのスキルの消費APを1度だけ1にする。'
          ],
          detail: {
            attr: '',
            type: ['boost_heartCaptcha', 'APReduce_all']
          }
        }
      },
      'ズッキュン♡ラブビーム': {
        'zukkyunLovebeam_section': {
          text: [
            'このセクション中、AP回復速度を+',
            '%する。さらに手札にある全てのスキルの消費AP-9。'
          ],
          detail: {
            attr: '',
            type: ['APQuick', 'APReduce_all']
          }
        }
      },
      'オールレンジ♡ボルテージ': {
        'allRangeVoltage_section-mentalOver100': {
          text: [
            'このセクション中、ハート上限を+',
            '、AP回復速度を+',
            '%し、ボルテージPt.を+',
            'する。さらにメンタルが100%以上のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: 'allRange',
            type: ['heartLimitUp', 'APQuick', 'voltageGain', 'heartCaptcha']
          }
        }
      },
      'オールレンジ♡アトラクション': {
        'allRangeAttraction_section': {
          text: [
            'このセクション中、ハート上限を+',
            '、AP回復速度を+',
            '%し、姫芽の《イグニッションモード》を解除する。さらにメンタルが100%以上のとき、ビートハート',
            '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'allRange',
            type: ['heartLimitUp', 'APQuick', 'modeChange', 'heartCaptcha', 'loveAttract_section']
          }
        }
      },
      'オールレンジ♡リカバー': {
        'allRangeRecover_section': {
          text: [
            'このセクション中、ハート上限を+',
            'し、手札の上限枚数を+1する。さらにメンタルを最大値の',
            '%回復させる。'
          ],
          detail: {
            attr: 'allRange',
            type: ['heartLimitUp', 'reshuffle', 'protect_stage']
          }
        }
      },
      'オールレンジ♡プロテクト': {
        'allRangeProtect_section': {
          text: [
            'このセクション中、ハート上限を+',
            'する。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'allRange',
            type: ['heartLimitUp', 'protect_stage']
          }
        }
      },
      'オールレンジ♡リフレッシュ': {
        'allRangeRefresh_section': {
          text: [
            'このセクション中、ハート上限を+',
            'する。さらに手札を全て捨てて、デッキから手札上限までスキルを引き、このステージ中、メンタルの最大値の',
            '%のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'allRange',
            type: ['heartLimitUp', 'reshuffle', 'protect_stage']
          }
        }
      },
      'オールレンジ♡ブースト': {
        'allRangeBoost_section': {
          text: [
            'このセクション中、ハート上限を+',
            'し、このステージ中、9回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得効果を+',
            '%、ラブアトラクト効果を+',
            '%する。さらにメンタルが100%以上のとき、APを3回復する。'
          ],
          detail: {
            attr: 'allRange',
            type: ['heartLimitUp', 'boost_heartCaptcha', 'boost_loveAttract', 'APGain']
          }
        }
      },
      'オールレンジ♡リブート': {
        'allRangeReboot_section': {
          text: [
            'このセクション中、ハート上限を+',
            'する。さらに手札を全て捨てて、デッキから手札上限までスキルを引き、9回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'allRange',
            type: ['heartLimitUp', 'reshuffle', 'boost_heartCaptcha']
          }
        }
      },
      'リスタート': {
        'reStart_01': {
          text: [
            'このステージ中、ハート上限を+',
            'する。AP回復速度を+',
            '、手札の上限枚数を1枚増加し、スキルハート獲得効果による獲得数を+',
            'する。さらに手札を全て捨てて、デッキから手札上限までスキルを引く。'
          ],
          detail: {
            attr: '',
            type: ['heartLimitUp', 'APQuick', 'boost_heartCaptcha', 'reshuffle']
          }
        }
      },
      'チェイス＊ドリーム': {
        'chaseDream_01': {
          text: [
            'このステージ中、ハート上限を+',
            '、AP回復速度を+3%し、ドリームブーケカードを1種類(合計1枚)山札に追加する。さらにデッキ枚数が27枚以上のとき、ビートハート',
            '回分のスキルハートを獲得し、デッキ枚数が39枚以上のとき、ビートハート',
            '回分のスキルハートを追加で獲得し、このステージ中、ハート上限を+',
            'する。'
          ],
          detail: {
            attr: 'dream',
            type: ['heartLimitUp', 'APQuick', 'addCard', 'heartCaptcha']
          }
        }
      },
      'ハートブースト：ブーケ': {
        'heartBoost-bouquet_01': {
          text: [
            'このステージ中、ブーケカードの使用によるスキルハート獲得効果の獲得数を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['heartLimitUp', 'APQuick', 'boost_heartCaptcha', 'reshuffle']
          }
        }
      },
      'サステイン＊ドリーム': {
        'sustainDream_01': {
          text: [
            'このステージ中、ハート上限を+',
            'スリーズブーケのメンバーが使用するスキルハート獲得効果による獲得数を+',
            '%し、グレイスブーケカードを1種類(合計1枚)山札に追加する。さらにデッキ枚数が27枚以上のとき、ビートハート',
            '回分のスキルハートを獲得し、デッキ枚数が39枚以上のとき、ビートハート',
            '回分のスキルハートを追加で獲得し、このステージ中、ハート上限を+',
            'する。'
          ],
          detail: {
            attr: 'dream',
            type: ['heartLimitUp', 'boost_heartCaptcha', 'addCard', 'heartCaptcha']
          }
        }
      },
      'ジャストゲイン：1': {
        'justGain1_01': {
          text: [
            'このステージ中、ブーケカードの使用によるスキルハート獲得効果の獲得数を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['boost_heartCaptcha']
          }
        }
      },
      'フラッフィーダイナソー': {
        'fluffyDinosaur_01': {
          text: [
            'ダイナソーカードを1種類(合計1枚)山札に追加する。'
          ],
          detail: {
            attr: '',
            type: ['addCard']
          }
        }
      },
      'M.ゴンザレス': {
        'MGonzalez_01': {
          text: [
            'このセクション中、メンタルが0になってもメンタルダウンしなくなり、ハート上限を+',
            'する。さらにメンタルを最大値の100%減少させる。'
          ],
          detail: {
            attr: 'dinosaur',
            type: ['mentalDown_section', 'heartLimitUp', 'mentalReduce']
          }
        }
      },
      'コーチング': {
        'coaching_01': {
          text: [
            'このセクション中、メンタルが0になってもメンタルダウンしなくなり、AP回復速度を+',
            '%する。さらにこのステージ中、スキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['mentalDown_section', 'APQuick', 'boost_heartCaptcha']
          }
        }
      },
      'トランセンド▷アトラクション': {
        'transcend-attraction_01': {
          text: [
            'このセクション中、ハート上限を+',
            'し、ボルテージPt.を+',
            'する。さらにメンタルが0%のとき、ビートハート',
            '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
            '%する。'
          ],
          detail: {
            attr: 'transcend',
            type: ['heartLimitUp', 'voltageGain', 'heartCaptcha', 'loveAttract_section']
          }
        }
      },
      'トランセンド▷アグレッシブ': {
        'transcend-aggressive_01': {
          text: [
            'このセクション中、ハート上限を+',
            'し、ボルテージPt.を+',
            'し、メンタルを最大値の50%減少させる。さらに5回の間DOLLCHESTRAのメンバーが使用するスキルハート獲得効果による獲得数を+',
            '%する。またメンタルが0%のとき、ビートハート',
            '回分のスキルハートを獲得し、手札にあるDOLLCHESTRAのスキルの消費AP-3。'
          ],
          detail: {
            attr: 'transcend',
            type: ['heartLimitUp', 'voltageGain', 'mentalReduce', 'boost_heartCaptcha', 'heartCaptcha', 'APReduce']
          }
        }
      },
      'トランセンド▷ブースト': {
        'transcend-boost_01': {
          text: [
            'このセクション中、ハート上限を+',
            'する。さらに5回の間DOLLCHESTRAのメンバーが使用するスキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: 'transcend',
            type: ['heartLimitUp', 'voltageGain', 'heartCaptcha', 'loveAttract_section']
          }
        }
      },
      'トランセンド▷プロテクト': {
        'transcend-protect_01': {
          text: [
            'このセクション中、ハート上限を+',
            'し、ボルテージPt.を+',
            'する。さらにメンタルが0%のとき、ビートハート',
            '回分のスキルハートを獲得、5回の間DOLLCHESTRAのメンバーが使用するラブアトラクト効果を+',
            '%し、このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。'
          ],
          detail: {
            attr: 'transcend',
            type: ['heartLimitUp', 'voltageGain', 'mentalReduce', 'boost_heartCaptcha', 'heartCaptcha', 'APReduce']
          }
        }
      },
      'ワードローブ': {
        'wardrobe_01': {
          text: [
            'ドレスカードのみを集めたデッキと通常のデッキが切り替えられるようになる。さらにこのステージ中、ドレスカード使用によるスキルハート獲得効果の獲得数、ラブアトラクト効果、ボルテージゲイン効果、メンタルリカバー効果、メンタルプロテクトをそれぞれ+',
            '%する。'
          ],
          detail: {
            attr: 'wardrobe',
            type: ['changeDeck', 'boost_heartCaptcha', 'boost_loveAttract', 'boost_voltageGain', 'boost_mentalRecover', 'boost_mentalProtect']
          }
        }
      },
      'スクステチャレンジ': {
        'skstChallenge_01': {
          text: [
            'このステージ中、ランダムにチャレンジが発生する。チャレンジをクリアすることでLOVEを獲得し、新たなチャレンジが発生する。チャレンジのクリア回数に応じてLOVEの獲得数が増加する。'
          ],
          detail: {
            attr: 'skstChallenge',
            type: ['challenge']
          }
        }
      },
      'スキルチャレンジ': {
        'skillChallenge_01': {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引き、ビートハート',
            '回分のスキルハートを獲得、ボルテージPt.を+',
            '、メンタルを最大値の',
            '%回復させる。さらにこのステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にし、このセクション中、獲得するLOVEを+',
            '%、手札の上限枚数を1枚増加、AP回復速度を+5%、ハート上限を+',
            'する。'
          ],
          detail: {
            attr: 'skillChallenge',
            type: ['reshuffle', 'heartCaptcha', 'voltageGain', 'mentalRecover', 'protect_stage', 'loveAttract_section', 'extendHand', 'APQuick', 'heartLimitUp']
          }
        }
      },
      'ドライブイグニッション': {
        'driveIgnition_01': {
          text: [
            '姫芽が《イグニッションモード》になった回数に応じて様々な効果が発動する。'
          ],
          detail: {
            attr: '',
            type: ['driveIgnition']
          }
        }
      },
      'リフレッシュイグニッション': {
        'refreshIgnition_01': {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに姫芽が《イグニッションモード》になる。'
          ],
          detail: {
            attr: '',
            type: ['reshuffle', 'modeChange']
          }
        }
      },
      'リブート：みらくらぱーく！': {
        'reboot-mirapa_01': {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引き、3回の間みらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+',
            '%、ラブアトラクト効果を+',
            '%する。さらにデッキにあるみらくらぱーく！のスキルの消費AP-3し、姫芽の《イグニッションモード》を解除する。'
          ],
          detail: {
            attr: 'reboot',
            type: ['reshuffle', 'boost_loveAttract', 'modeChange']
          }
        }
      },
      'リブートボルテージ': {
        'rebootVoltage_01': {
          text: [
            '手札を全て捨てて、デッキから手札上限までスキルを引く。さらに2回の間ボルテージゲイン効果を+',
            '%する。'
          ],
          detail: {
            attr: 'reboot',
            type: ['reshuffle', 'boost_voltageGain']
          }
        }
      },
      'グランドフィナーレ': {
        'grandFinale_01': {
          text: [
            '最終セクションで使用したとき、APを',
            '回復し、このセクション中、スキルハート獲得効果による獲得数を+',
            '%、ハート上限を+',
            'する。'
          ],
          detail: {
            attr: 'grandFinale',
            type: ['APGain', 'boost_heartCaptcha', 'heartLimitUp']
          }
        }
      },
      'パワーオブエール': {
        'powerOfYell_01': {
          text: [
            'このステージ中、獲得するLOVEを増加し、スキルハートを獲得する。梢のMember Fan Lv.が高いほど効果量が増加する。さらに梢のMember Fan Lv.が100以上のとき、このステージ中、AP回復速度を+',
            '%し、APを',
            '回復する。'
          ],
          detail: {
            attr: 'powerOfYell',
            type: ['loveAttract_stage', 'APQuick', 'APGain']
          }
        },
        'powerOfYell_02': {
          text: [
            'ボルテージPt.を増加し、スキルハートを獲得する。綴理のMember Fan Lv.が高いほど効果量が増加する。さらに綴理のMember Fan Lv.が100以上のとき、このステージ中、AP回復速度を+',
            '%し、APを9回復する。'
          ],
          detail: {
            attr: 'powerOfYell',
            type: ['voltageGain', 'APQuick', 'APGain']
          }
        },
        'powerOfYell_03': {
          text: [
            'このステージ中、メンタルの最大値の割合分のメンタルダメージを無効にし、スキルハートを獲得する。慈のMember Fan Lv.が高いほど効果量が増加する。さらに慈のMember Fan Lv.が100以上のとき、このステージ中、AP回復速度を+',
            '%し、APを9回復する。'
          ],
          detail: {
            attr: 'powerOfYell',
            type: ['protect_stage', 'APQuick', 'APGain']
          }
        }
      },
      'リユニオンチャーム/Kozue': {
        'reunionCharm-kozue_01': {
          text: [
            '山札にあるすべてのスキルの消費AP-3。'
          ],
          detail: {
            attr: 'reunionCharm',
            type: ['APReduce']
          }
        }
      },
      'リユニオンチャーム/Tsuzuri': {
        'reunionCharm-tsuzuri_01': {
          text: [
            '山札にあるすべてのスキルの消費AP-3。'
          ],
          detail: {
            attr: 'reunionCharm',
            type: ['APReduce']
          }
        }
      },
      'リユニオンチャーム/Megumi': {
        'reunionCharm-megumi_01': {
          text: [
            '山札にあるすべてのスキルの消費AP-3。'
          ],
          detail: {
            attr: 'reunionCharm',
            type: ['APReduce']
          }
        }
      },
      'ドリーミングトライアングル': {
        'dreamingTriangle_01': {
          text: [
            'デッキ内のすべてのスキルの消費AP3-し、手札を全て捨てて、捨札を全て山札に戻した後、デッキから手札上限までスキルを引く。さらにこのセクション中、AP回復速度を+',
            '%し、メンタルが0になってもメンタルダウンしなくなる。'
          ],
          detail: {
            attr: 'dreaming',
            type: ['APReduce', 'reshuffle', 'APQuick', 'mentalDown_section']
          }
        }
      },
      'ボルテージバイブス': {
        'voltageVibes_01': {
          text: [
            'このセクション中、ビートハートの出現個数を+',
            'する。さらにボルテージPt.を+',
            'する。'
          ],
          detail: {
            attr: 'vibes',
            type: ['vibes_section', 'voltageGain']
          }
        }
      },
      'アトラクトバイブス': {
        'attractVibes_01': {
          text: [
            'このセクション中、ビートハートの出現個数を+1する。さらにこのセクション中、獲得するLOVEを+',
            'する。'
          ],
          detail: {
            attr: 'vibes',
            type: ['vibes_section', 'loveAttract_section']
          }
        }
      },
      'ハッピーアンビエンス': {
        'happyAmbience_01': {
          text: [
            'このセクション中、ムードをハッピー方向に+',
            'する。'
          ],
          detail: {
            attr: 'ambience',
            type: ['ambience_section']
          }
        }
      },
      'メロウアンビエンス': {
        'mellowAmbience_01': {
          text: [
            'このセクション中、ムードをメロウ方向に+',
            'する。'
          ],
          detail: {
            attr: 'ambience',
            type: ['ambience_section']
          }
        }
      },
      'ワイドサウンドバイブス': {
        'wideSoundVibes_01': {
          text: [
            'このセクション中、ビートハートの出現個数を+2する。さらにムードがハッピー、メロウいずれか75以上のとき、このセクション中、ハート上限を+',
            'する。'
          ],
          detail: {
            attr: '',
            type: ['vibes_section', 'sound', 'heartLimitUp']
          }
        }
      },
      'ワイドハッピーバイブス': {
        'wideHappyVibes_01': {
          text: [
            'このセクション中、ビートハートの出現個数を+2する。さらにムードがハッピー75以上のとき、このセクション中、ハート上限を+',
            'する。'
          ],
          detail: {
            attr: 'vibes',
            type: ['vibes_section', 'heartLimitUp']
          }
        }
      },
      'リットハッピーアンビエンス': {
        'litHappyAmbience_01': {
          text: [
            'このセクション中、AP回復速度を-30%する。さらにこのセクション中、ムードをハッピー方向に+',
            'する。'
          ],
          detail: {
            attr: 'ambience',
            type: ['APSlow', 'ambience_section']
          }
        }
      },
      'サウンドハート': {
        'soundHeart_01': {
          text: [
            'ビートハート',
            '回分のスキルハートを獲得する。さらにムードがハッピー、メロウいずれか75以上のとき、ビートハート',
            '回分のスキルハートを獲得する。'
          ],
          detail: {
            attr: '',
            type: ['sound', 'heartCaptcha']
          }
        }
      },
      'サウンドプロテクト': {
        'soundProtect_01': {
          text: [
            'このステージ中、メンタルの最大値の',
            '%分のメンタルダメージを無効にする。さらにムードがハッピー、メロウいずれか75以上のとき、デッキにあるみらくらぱーく！のスキルの消費AP-5。'
          ],
          detail: {
            attr: '',
            type: ['protect_stage', 'sound', 'APGain']
          }
        }
      },
      'サウンドハートブースト': {
        'soundHeartBoost_01': {
          text: [
            '20回の間スキルハート獲得効果による獲得数を+',
            '%する。さらにムードがハッピー、メロウいずれか75以上のとき、20回の間スキルハート獲得効果による獲得数を+',
            '%する。'
          ],
          detail: {
            attr: '',
            type: ['boost_heartCaptcha', 'sound']
          }
        }
      },
      'サウンドアンビエンス': {
        'soundAmbience_01': {
          text: [
            'ムード値がハッピー、メロウいずれかのとき、ムード値を+',
            'する。'
          ],
          detail: {
            attr: '',
            type: ['sound', 'ambience_section']
          }
        }
      },
      'イミテーションハート': {
        'imitationHeart_01': {
          text: [
            'カードがステージにセットされ、獲得するボルテージPt.を吸収する。ボルテージPt.を200吸収したとき、ビートハート',
            '回分のスキルハートを獲得し、捨札に移動する。'
          ],
          detail: {
            attr: 'imitation',
            type: ['imitation', 'heartCaptcha']
          }
        },
        'imitationHeart_02': {
          text: [
            'カードがステージにセットされ、獲得するハートを吸収する。ハートを5個吸収したとき、ビートハート',
            '回分のスキルハートを獲得し、捨札に移動する。'
          ],
          detail: {
            attr: 'imitation',
            type: ['imitation', 'heartCaptcha']
          }
        }
      },
      'イミテーションアトラクト': {
        'imitationAttract_01': {
          text: [
            'カードがステージにセットされ、1セクションの間獲得するラブアトラクト効果を吸収する。セクションが変わったとき、このセクションの間、吸収した効果量の',
            '倍のラブアトラクト効果を発動し、捨札に移動する。'
          ],
          detail: {
            attr: 'imitation',
            type: ['imitation', 'heartCaptcha']
          }
        }
      },
      'イミテーションボルテージ': {
        'imitationVoltage_01': {
          text: [
            'カードがステージにセットされ、獲得するメンタルプロテクト効果を吸収する。メンタルプロテクト効果を10%吸収したとき、ボルテージPt.を+',
            'し、捨札に移動する。'
          ],
          detail: {
            attr: 'imitation',
            type: ['imitation', 'voltageGain']
          }
        }
      },
      'イミテーションヒート': {
        'imitationHeat_01': {
          text: [
            'カードがステージにセットされ、1セクションの間獲得するAP回復速度増加効果を吸収する。セクションが変わったとき、このセクションの間、吸収した効果量の',
            '倍のAP回復速度増加効果を発動し、捨札に移動する。'
          ],
          detail: {
            attr: 'imitation',
            type: ['imitation', 'APQuick']
          }
        }
      }
    },
    skillColor: {
      'heartCaptcha': {
        name: 'ハートキャプチャ',
        colorCode: 'red',
        description: 'ハートを獲得する。'
      },
      'loveAttract': {
        name: 'ラブアトラクト',
        colorCode: 'lime-darken-3',
        description: '次回ハート回収時、獲得するLOVEが増加する。'
      },
      'loveAttract_section': {
        name: 'ラブアトラクト(セクション)',
        colorCode: 'lime-darken-3',
        description: 'このセクション中、獲得するLOVEが増加する。'
      },
      'loveAttract_stage': {
        name: 'ラブアトラクト(ステージ)',
        colorCode: 'lime-darken-3',
        description: 'このステージ中、獲得するLOVEが増加する。'
      },
      'voltageGain': {
        name: 'ボルテージゲイン',
        colorCode: 'lime-darken-4',
        description: 'ボルテージPt.を獲得する。'
      },
      'voltageReduce': {
        name: 'ボルテージレデュース',
        colorCode: 'lime-darken-4',
        description: 'ボルテージPt.を減らす。'
      },
      'mentalRecover': {
        name: 'メンタルリカバー',
        colorCode: 'green',
        description: 'メンタルを回復する。'
      },
      'mentalReduce': {
        name: 'メンタルレデュース',
        colorCode: 'green',
        description: 'メンタルを減らす。'
      },
      'mentalDown_section': {
        name: 'メンタルダウン(セクション)',
        colorCode: 'green',
        description: 'メンタルが0になってもメンタルダウンしなくなる。'
      },
      'protect_section': {
        name: 'プロテクト(セクション)',
        colorCode: 'green',
        description: 'このセクション中、メンタル減少を一定量無効化する。'
      },
      'protect_stage': {
        name: 'プロテクト(ステージ)',
        colorCode: 'green',
        description: 'このステージ中、メンタル減少を一定量無効化する。'
      },
      'reshuffle': {
        name: 'リシャッフル',
        colorCode: 'purple',
        description: '手札を全て捨てて、デッキから手札上限までスキルを引く。'
      },
      'extendHand': {
        name: 'エクステンドハンド',
        colorCode: 'purple',
        description: '手札の上限枚数が増加する。'
      },
      'extensions_section': {
        name: 'エクステンション(セクション)',
        colorCode: 'purple',
        description: 'このセクション中、手札の上限枚数が増加する(最大8枚)。'
      },
      'extensions_stage': {
        name: 'エクステンション(ステージ)',
        colorCode: 'purple',
        description: 'このステージ中、手札の上限枚数が増加する(最大8枚)。'
      },
      'cardReduce': {
        name: '手札減少',
        colorCode: 'purple',
        description: 'このステージ中、手札の上限枚数が減少する。'
      },
      'boost_heartCaptcha': {
        name: 'ブースト(ハートキャプチャ)',
        colorCode: 'red',
        description:
          '次に使用するスキルハート獲得効果による獲得数を増加させる。'
      },
      'boost_loveAttract': {
        name: 'ブースト(ラブアトラクト)',
        colorCode: 'lime-darken-3',
        description: '次に使用するラブアトラクトの効果を増加させる。'
      },
      'boost_voltageGain': {
        name: 'ブースト(ボルテージゲイン)',
        colorCode: 'lime-darken-4',
        description: '次に使用するボルテージゲインの効果を増加させる。'
      },
      'boost_mentalRecover': {
        name: 'ブースト(メンタルリカバー)',
        colorCode: 'green',
        description: '次に使用するメンタルリカバーの効果を増加させる。'
      },
      'boost_mentalProtect': {
        name: 'ブースト(メンタルプロテクト)',
        colorCode: 'green',
        description: '次に使用するメンタルプロテクトの効果を増加させる。'
      },
      'APGain': {
        name: 'APゲイン',
        colorCode: '',
        description: 'APを回復する。'
      },
      'APLoss': {
        name: 'APロス',
        colorCode: '',
        description: 'APを減少させる。'
      },
      'APReduce': {
        name: 'APレデュース',
        colorCode: 'purple',
        description: 'スキルの消費APを減少させる。'
      },
      'APReduce_all': {
        name: '消費AP減少',
        colorCode: 'purple',
        description: '手札の全てのスキルの消費APを減少させる。'
      },
      'APReduce_heart': {
        name: '消費AP減少(ハート系)',
        colorCode: 'purple',
        description: '手札のメイン効果にスキルハート獲得効果を持つスキルの消費APを減少させる。'
      },
      'APReduce_voltageGain': {
        name: '消費AP減少(ボルテージ系)',
        colorCode: 'purple',
        description:
          '手札のメイン効果にボルテージ増加効果を持つスキルの消費APを減少させる。'
      },
      'APReduce_deck_ceriseBouquet': {
        name: '消費AP減少(スリーズブーケ)',
        colorCode: 'purple',
        description: 'デッキにあるスリーズブーケのスキルの消費APを減少させる。'
      },
      'APReduce_deck_dressCard': {
        name: '消費AP減少(ドレスカード)',
        colorCode: 'purple',
        description: 'デッキにあるドレスカードの消費APを減少させる。'
      },
      'APQuick': {
        name: 'ヒートアップ',
        colorCode: 'lime-darken-3',
        description: 'AP回復速度を上昇させる。'
      },
      'APSlow': {
        name: 'AP回復速度低下',
        colorCode: '',
        description: 'AP回復速度を低下させる。'
      },
      'heartLimitUp': {
        name: 'ワイドハート',
        colorCode: 'red',
        description: 'ハート数の上限を増加させる。'
      },
      'addCard': {
        name: 'カード追加',
        colorCode: 'purple',
        description: 'カードを山札に追加する。'
      },
      'ignition': {
        name: 'イグニッション',
        colorCode: 'purple',
        description: '特定条件で効果が変化する。'
      },
      'modeChange': {
        name: 'モードチェンジ',
        colorCode: 'purple',
        description: 'スキルの効果を変化させる。'
      },
      'coolTime': {
        name: 'クールタイム',
        colorCode: '',
        description: 'スキル使用時、クールタイムが発生する。'
      },
      'infinity_AP_stage': {
        name: 'AP無限',
        colorCode: '',
        description: 'このステージ中、APを無限にする。'
      },
      'infinity_voltage_stage': {
        name: 'ボルテージ無限',
        colorCode: '',
        description: 'このステージ中、ボルテージを無限にする。'
      },
      'infinity_mental_stage': {
        name: 'メンタル無限',
        colorCode: '',
        description: 'このステージ中、メンタルを無限にする。'
      },
      'skillUse-handsCard': {
        name: 'スキル使用(手札)',
        colorCode: '',
        description: '手札の他の全スキルを同時に使用する。'
      },
      'changeDeck': {
        name: 'チェンジデッキ',
        colorCode: 'purple',
        description: 'デッキを入れ替える。'
      },
      'challenge': {
        name: 'チャレンジ',
        colorCode: '',
        description: 'ランダムにチャレンジが発生する。'
      },
      'driveIgnition': {
        name: 'ドライブイグニッション',
        colorCode: '',
        description: 'イグニッションモードになった回数に応じて、様々な効果が発動する。'
      },
      'vibes_section': {
        name: 'バイブス(セクション)',
        colorCode: 'lime-darken-4',
        description: 'このセクション中、ビートハートの出現個数を増加させる。'
      },
      'vibes_stage': {
        name: 'バイブス(ステージ)',
        colorCode: 'lime-darken-4',
        description: 'このステージ中、ビートハートの出現個数を増加させる。'
      },
      'ambience_section': {
        name: 'アンビエンス(セクション)',
        colorCode: 'lime-darken-4',
        description: 'このセクション中、ムード値を変化させる。'
      },
      'ambience_stage': {
        name: 'アンビエンス(ステージ)',
        colorCode: 'lime-darken-4',
        description: 'このステージ中、ムード値を変化させる。'
      },
      'imitation': {
        name: 'イミテーション',
        colorCode: 'purple',
        description: 'カードがステージにセットされ、特定の獲得したものを吸収する。その後、特定の効果を発動し、捨札に移動する。'
      },
      'sound': {
        name: 'サウンド',
        colorCode: 'red',
        description: 'ムードが一定値以上もしくは一定値以下になると、特定の効果を発動する。'
      }
    }
  }),
  getters: {},
  actions: {}
});