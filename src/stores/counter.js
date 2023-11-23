import { defineStore } from 'pinia';
// import { list } from 'postcss';

export const useStoreCounter = defineStore('store', {
  state: () => ({
    count: 1,
    count2: 2,
    user: {
      name: 'John Doe',
    },
    dialog: false,
    showModalName: false,
    updateData: false,
    selectCharactor: '',
    selectMusicTitle: undefined,
    rarity: ['DR', 'UR', 'SR', 'R'],
    search: {
      cardList: {
        rare: ['DR', 'UR', 'SR', 'R'],
        styleType: ['performer', 'moodMaker', 'cheerLeader', 'trickStar'],
        mood: ['happy', 'neutral', 'melow'],
        cardLevel: [0, 120],
        SALevel: [1, 14],
        SLevel: [1, 14],
        releaseLevel: [1, 5],
        memberName: ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi']
      },
      skillList: {
        specialAppeal: [],
        skill: [],
        //characteristic: []
      }
    },
    outputCardList: {},
    styleHeadline: {
      main: 'MAIN STYLE',
      side1: 'SIDE STYLE 1',
      side2: 'SIDE STYLE 2'
    },
    styleType: {
      performer: 'パフォーマー',
      moodMaker: 'ムードメーカー',
      cheerLeader: 'チアリーダー',
      trickStar: 'トリックスター'
    },
    mood: {
      happy: 'ハッピー',
      neutral: 'ニュートラル',
      melow: 'メロウ'
    },
    maxCardLevel: {
      DR: [100, 120],
      UR: [60, 80, 100],
      SR: [40, 60, 80],
      R: [30, 40, 60]
    },
    charactorName: {
      kaho: {
        first: '日野下',
        last: '花帆'
      },
      sayaka: {
        first: '村野',
        last: 'さやか'
      },
      rurino: {
        first: '大沢',
        last: '瑠璃乃'
      },
      kozue: {
        first: '乙宗',
        last: '梢'
      },
      tsuzuri: {
        first: '夕霧',
        last: '綴理'
      },
      megumi: {
        first: '藤島',
        last: '慈'
      }
    },
    memberColor: {
      kaho: '#F8B500',
      sayaka: '#5383C3',
      rurino: '#E7609E',
      kozue: '#68BE8D',
      tsuzuri: '#BA2636',
      megumi: '#C8C2C6'
    },
    groupName: {
      hasunosora: '蓮ノ空女学院スクールアイドルクラブ',
      CeriseBouquet: 'スリーズブーケ',
      DOLLCHESTRA: 'DOLLCHESTRA',
      miraCraPark: 'みらくらぱーく！'
    },
    memberData: {
      centerList: {
        kaho: {
          centerMusic: [],
          bonusSkill: {
            'ビートハートアップ': 0,
            'ボルテージアップ': 0,
            'メンタルリカバー': 0,
            'LOVEボーナス': 0
          }
        },
        sayaka: {
          centerMusic: [],
          bonusSkill: {
            'ビートハートアップ': 0,
            'ボルテージアップ': 0,
            'メンタルリカバー': 0,
            'LOVEボーナス': 0
          }
        },
        rurino:{
          centerMusic: [],
          bonusSkill: {
            'ビートハートアップ': 0,
            'ボルテージアップ': 0,
            'メンタルリカバー': 0,
            'LOVEボーナス': 0
          }
        },
        kozue: {
          centerMusic: [],
          bonusSkill: {
            'ビートハートアップ': 0,
            'ボルテージアップ': 0,
            'メンタルリカバー': 0,
            'LOVEボーナス': 0
          }
        },
        tsuzuri: {
          centerMusic: [],
          bonusSkill: {
            'ビートハートアップ': 0,
            'ボルテージアップ': 0,
            'メンタルリカバー': 0,
            'LOVEボーナス': 0
          }
        },
        megumi: {
          centerMusic: [],
          bonusSkill: {
            'ビートハートアップ': 0,
            'ボルテージアップ': 0,
            'メンタルリカバー': 0,
            'LOVEボーナス': 0
          }
        }
      },
    },
    selectCard: {
      kaho: {
        main: 'default',
        side1: 'default',
        side2: 'default'
      },
      sayaka: {
        main: 'default',
        side1: 'default',
        side2: 'default'
      },
      rurino: {
        main: 'default',
        side1: 'default',
        side2: 'default'
      },
      kozue: {
        main: 'default',
        side1: 'default',
        side2: 'default'
      },
      tsuzuri: {
        main: 'default',
        side1: 'default',
        side2: 'default'
      },
      megumi: {
        main: 'default',
        side1: 'default',
        side2: 'default'
      },
    },
    settingCard: { // 何故か分からないがここを設定しないとエラーが出るため設定
      rare: 'DR',
      name: 'kaho',
      card: 'Prism Echo'
    },
    abc: {
      name: 'kaho',
      style: 'main'
    },
    localStorageData: {
      musicData: {
        musicLevel: {}
      },
      cardList: {}
    },
    skillList: {
      'ハートキャプチャ': {
        heartCaptcha: [
          'ビートハート',
          '回分のスキルハートを獲得する。'
        ]
      },
      'ハートアトラクション': {
        heartAttraction: [
          'ビートハート',
          '回分のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
          '%する。'
        ],
        heartAttraction_50: [
          '50個のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
          '%する。'
        ],
        heartAttraction_100: [
          '100個のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'ハートブースト': {
        heartBoost: [
          '次に使用するスキルハート獲得効果による獲得数を+',
          '%する。'
        ]
      },
      'ボルテージゲイン': {
        voltageGain: [
          'ボルテージPt.を+',
          'する。'
        ]
      },
      'ハイボルテージ': {
        highVoltage: [
          'ボルテージPt.を+',
          'する。使用時のボルテージLv.が6以上だった場合、さらにAPを1回復する。'
        ]
      },
      'ヒーリングハート': {
        healingHeart: [
          'メンタルを最大値の',
          '%回復させる。さらにビートハート',
          '個分のスキルハートを獲得する。'
        ]
      },
      'メンタルリカバー': {
        mentalRecover: [
          'メンタルを最大値の',
          '%回復させる。'
        ]
      },
      'メンタルプロテクト': {
        mentalProtect: [
          'メンタルを最大値の',
          '%回復させる。さらにこのセクション中、メンタルの最大値の',
          '%分のメンタルダメージを無効にする。'
        ]
      },
      'チアフルリカバー': {
        cheerfulRecover: [
          'メンタルを最大値の',
          '%回復させる。さらにメンタルが75%以上のとき、APを2回復する。'
        ]
      },
      'チアフルヒーリング': {
        cheerfulHealing: [
          'メンタルを最大値の',
          '%回復させる。さらにメンタルが75%以上のとき、ビートハート',
          '個分のスキルハートを獲得する。'
        ]
      },
      'チアフルサポート': {
        cheerfulSupport_over75: [
          'メンタルを最大値の',
          '%回復する。さらにメンタルが75%以上のとき、このステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'チアフルハート': {
        cheerfulHeart_APreduce: [
          'ビートハート',
          '回分のスキルハートを獲得する。さらにメンタルが75%以上のとき、APを1回復する。'
        ],
        cheerfulHeart_heartCaptcha: [
          'ビートハート',
          '回分のスキルハートを獲得する。さらにメンタルが50%以上のとき、ビートハート',
          '回分のスキルハートを獲得する。'
        ]
      },
      'チアフルボルテージ': {
        cheerfulVoltage_voltageGain: [
          'ボルテージPt.を+',
          'する。さらにメンタルが50%以上のとき、ボルテージPt.を+',
          'する。'
        ],
        cheerfulVoltage_heartCaptcha: [
          'ボルテージPt.を+',
          'する。さらにメンタルが75%以上のとき、ビートハート',
          '個分のスキルハートを獲得する。'
        ],
        UR: [
          'ボルテージPt.を+',
          'する。さらにメンタルが75%以上のとき、ビートハート',
          '個分のスキルハートを獲得する。'
        ],
        SR: [
          'ボルテージPt.を+',
          'する。さらにメンタルが50%以上のとき、ボルテージPt.を+',
          'する。'
        ]
      },
      'チアフルプロテクト': {
        cheerfulProtect_loveAttract: [
          'このステージ中、メンタルの最大値の',
          '%分のメンタルダメージを無効にする。さらにメンタルが75%以上のとき、このステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'チアフルアトラクト': {
        cheerfulAttract_APreduce_over75: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにメンタルが75%以上のとき、APを1回復する。'
        ],
        cheerfulAttract_loveAttract_over50: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにメンタルが50%以上のとき、このステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'チアフルエンデュランス': {
        cheerfulEndurance_over75: [
          'ボルテージPt.を+',
          'する。さらにメンタルが75%以上のとき、メンタルを最大値の',
          '%回復させる。'
        ]
      },
      'チアフルイニシエイト': {
        cheerfulInitiate: [
          'ボルテージPt.を+',
          'する。さらにメンタルが75%以上のとき、このステージ中、メンタルの最大値の',
          '%分のメンタルダメージを無効にする。'
        ]
      },
      'チアフルファッシネイト': {
        cheerfulFascinate_section_over75: [
          'このセクション中、獲得するLOVEを+',
          '%する。さらにメンタルが75%以上のとき、ボルテージPt.を+',
          'する。'
        ],
        cheerfulFascinate_stage_over50: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにメンタルが50%以上のとき、ボルテージPt.を+',
          'する。'
        ]
      },
      'チアフルブースト': {
        cheerfulBoost: [
          '次に使用するスキルハート獲得効果による獲得数を+',
          '%する。さらにメンタルが50%以上のとき、次に使用するスキルハート獲得効果による獲得数を+',
          '%する。'
        ]
      },
      'チアフルリゲイン': {
        cheerfulRegain: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルが50%以上のとき、ボルテージPt.を+',
          'する。'
        ]
      },
      'クイックフォーム': {
        quickForm: [
          'このステージ中、手札の上限枚数を1枚減少する。さらにこのステージ中、AP回復速度を+',
          '%する。'
        ]
      },
      'ボルテックスアトラクション': {
        vortexAttraction: [
          'ビートハート',
          '回分のスキルハートを獲得し、このステージ中、獲得するLOVEを+',
          '%する。さらにボルテージPt.を+',
          'する。'
        ]
      },
      'ボルテックスシフト': {
        vortexShift: [
          'このステージ中、ボルテージPt.を獲得する効果が発動した時、代わりに獲得するボルテージPt.の',
          '%の個数のスキルハートを獲得する。'
        ]
      },
      'オールマイトヒーリング': {
        allMightHealing: [
          'このステージ中、メンタルが回復した時、回復量の',
          '%の個数のスキルハートを獲得する。'
        ]
      },
      'アグレッシブアトラクト': {
        aggressiveAttract_section: [
          'このセクション中、獲得するLOVEを+',
          '%する。さらにメンタルを最大値の15%減少させる。'
        ],
        aggressiveAttract_stage: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにメンタルを最大値の25%減少させる。'
        ]
      },
      'ラブアトラクト': {
        loveAttract: [
          '次のハート回収時、獲得するLOVEを+',
          '%する。'
        ],
        loveAttract_section: [
          'このセクション中、獲得するLOVEを+',
          '%する。'
        ],
        loveAttract_stage: [
          'このステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'ラブキャブティベイト': {
        loveCaptivate: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにこのセクション中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'エンデュランス': {
        endurance_APreduce: [
          'ボルテージPt.を+',
          'し、メンタルを最大値の',
          '%回復させる。さらにAPを1回復する。'
        ],
        endurance_mentalVoltage: [
          'メンタルを最大値の',
          '%回復させる。さらにボルテージPt.を',
          'する。'
        ],
        endurance_voltageMental: [
          'ボルテージPt.を+',
          'する。さらにメンタルを最大値の',
          '%回復させる。'
        ]
      },
      'リゲインボルテージ': {
        regainVoltage: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにボルテージPt.を+',
          'する。'
        ]
      },
      'リゲインアトラクト': {
        regainAttract_section: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのセクション中、獲得するLOVEを+',
          '%する。'
        ],
        regainAttract_stage: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにこのステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'エクステボルテージ': {
        extensionsVoltage_section: [
          'このセクション中、手札の上限枚数を3枚増加する。さらにボルテージPt.を+',
          'する。'
        ],
        extensionsVoltage_stage: [
          'このステージ中、手札の上限枚数を1枚増加する。さらにボルテージPt.を+',
          'する。'
        ]
      },
      'エクステアトラクト': {
        extensionsAttract_section: [
          'このセクション中、手札の上限枚数を2枚増加する。さらにこのステージ中、獲得するLOVEを+',
          '%する。'
        ],
      },
      'ファッシネイション': {
        fascination_voltageGain: [
          'ボルテージPt.を+',
          'する。さらにこのステージ中、獲得するLOVEを+',
          '%する。'
        ],
        fascination_section: [
          'このセクション中、獲得するLOVEを+',
          '%する。さらにボルテージPt.を+',
          'する。'
        ],
        fascination_stage: [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにボルテージPt.を+',
          'する。'
        ]
      },
      'リプレイアトラクション': {
        regainAttraction_section: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにビートハート',
          '回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'ロープロテクト': {
        lowProtect: [
          'このステージ中、メンタルの最大値の',
          '%分のメンタルダメージを無効にする。さらにメンタルが30%以下のとき、メンタルを最大値の',
          '%回復させる。'
        ]
      },
      'リフレッシュマインド': {
        refreshMind: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
          '%回復させる。'
        ]
      },
      'リフレッシュハート': {
        refreshHeart: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにビートハート',
          '回分のスキルハートを獲得する。'
        ]
      },
      'リフレッシュサポート': {
        refreshSupport_stage: [
          '手札を全て捨てて、デッキから手札上限までスキルを引く。さらにメンタルを最大値の',
          '%回復させ、このステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'クラッチリカバー': {
        klutchRecover: [
          'メンタルが25%以上のとき、メンタルを最大値の',
          '%回復させる。メンタルが25%未満のとき、メンタルを最大値の',
          '%回復させる。'
        ]
      },
      'サポーテッドフィール': {
        supportedFeel: [
          'メンタルを最大値の',
          '%回復させる。さらにこのステージ中、獲得するLOVEを+',
          '%する。'
        ],
      },
      'プロテクトフィール': {
        protectFeel_APreduce: [
          'このステージ中、メンタルの最大値の',
          '%のメンタルダメージを無効にし、獲得するLOVEを+',
          '%する。さらにAPを5回復する。'
        ],
        protectFeel_loveAttract: [
          'このステージ中、メンタルの最大値の',
          '%分のメンタルダメージを無効にする。さらにこのステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'インヴォケーション': {
        invocation: [
          'ボルテージPt.を+',
          'する。さらにボルテージLvが6以下の場合、このステージ中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'ボルテージハート': {
        voltageHeart: [
          'ボルテージPt.を+',
          'する。さらにビートハート',
          '回分のスキルハートを獲得する。'
        ]
      },
      'イニシアチブ': {
        initiative: [
          'ボルテージPt.を+',
          'する。さらにこのステージ中、メンタルの最大値の',
          '%分のメンタルダメージを無効にする。'
        ]
      },
      'アグレッシブハート': {
        aggressiveHeart: [
          'ビートハート',
          '個分のスキルハートを獲得する。さらにメンタルを最大値の15%減少させる。'
        ]
      },
      'チアフルアトラクション': {
        cheerfulAttraction: [
          'ビートハート',
          '回分のスキルハートを獲得する。さらにメンタルが75%以上のとき、このセクション中、獲得するLOVEを+',
          '%する。'
        ]
      },
      'カームハート': {
        calmHeart: [
          'ビートハート',
          '回分のスキルハートを獲得する。さらにボルテージPt.を-20する。'
        ]
      },
      'エクステプロテクト': {
        extensionsProtect: [
          'このステージ中、手札の上限枚数を1枚追加する。さらにこのステージ中、メンタルの最大値の',
          '%分のメンタルダメージを無効にする。'
        ]
      }
    },
    card: {
      'default': {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1,
              pure: 1,
              cool: 1,
              mental: 1,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {},
              type: []
            },
            skill: {
              name: '',
              AP: 1,
              detail: {},
              type: []
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        }
      },
      kaho: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1,
              pure: 1,
              cool: 1,
              mental: 1,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {},
              type: []
            },
            skill: {
              name: '',
              AP: 1,
              detail: {},
              type: []
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        DR: {
          'Prism Echo': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2830,
              pure: 2430,
              cool: 1630,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartAttraction_100',
              name: 'ハートアトラクション',
              AP: 8,
              detail: [
                [10, '11?', '12?', '13?', '14?', 15, '16?', '17?', '18?', '20?', '21?', '22?', '23?', 25]
              ],
              type: ['heartAttraction', 'heartChaptha', 'loveAttract']
            },
            skill: {
              ID: 'heartAttraction_50',
              name: 'ハートアトラクション',
              AP: 5,
              detail: [
                [4, '4.4?', '4.8?', '5.2?', '5.6?', '6?', 6.4, '6.8?', '7.2?', 8, '8.4?', '8.8?', '9.2?', 10]
              ],
              type: ['heartAttraction', 'heartChaptha', 'loveAttract']
            },
            characteristic: {
              name: 'フェイバリット : フィーバー',
              detail: 'フィーバーセクションでドローされる確率が大幅に増加する。',
              type: ['favorite', 'fever']
            }
          }
        },
        UR: {
          'コットン=ユートピア': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1130,
              pure: 2230,
              cool: 1730,
              mental: 223,
              BP: 100
            },
            specialAppeal: {
              ID: 'healingHeart',
              name: 'ヒーリングハート',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 24],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ],
              type: ['mentalRecover', 'heartCaptcha']
            },
            skill: {
              ID: 'fascination_stage',
              name: 'ファッシネイション',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.6', 30],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 24]
              ],
              type: ['loveAttract', 'voltageGain']
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース & マチュレーション',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費APを-3し、スキルの効果値が増加する。',
              type: ['overSection', 'APreduce', 'maturation']
            }
          },
          '喫茶ハスノソラ': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2330,
              pure: 2230,
              cool: 1230,
              mental: 153,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, '11?', '11?', '12?', '12?']
              ],
              type: ['refresh', 'heart']
            },
            skill: {
              ID: 'cheerfulHeart_heartCaptcha',
              name: 'チアフルハート',
              AP: 4,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, '?', '?', '?', 11],
                [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, '?', '?', '?', '?']
              ],
              type: ['cheerful', 'heart']
            },
            characteristic: {
              name: 'インタープリテーション & チェイン：梢',
              detail: 'このスキルのムードによる効果増加量を上昇させる。さらに梢のスキルを使用した後、ドローされる確率が増加する。',
              type: ['interPretation', 'chain', 'kozue']
            }
          },
          'Trick & Cute': {
            styleType: 'performer',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2030,
              pure: 830,
              cool: 2530,
              mental: 193,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensionsVoltage_stage',
              name: 'エクステボルテージ',
              AP: 7,
              detail: [
                [24, 26, 29, 31, 34, 36, 38, 41, 43, 48, '?', '?', '?', 60]
              ],
              type: ['extensions', 'voltage']
            },
            skill: {
              ID: 'heartAttraction',
              name: 'ハートアトラクション',
              AP: 10,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 24],
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.6', 30]
              ],
              type: ['heartChaptha', 'loveAttract']
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース & アグレッシブ',
              detail: '手札にある状態でセクションが変わるたび、メンタルを最大値の40%減少させ、手札のこのスキルの消費AP-9。',
              type: ['overSection', 'APreduce', 'aggressive']
            }
          },
          'ゆのくにガールズ！': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2130,
              pure: 1930,
              cool: 1230,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'cheerfulRecover',
              name: 'チアフルリカバー',
              AP: 6,
              detail: [
                [16.8, 18.48, 20.16, 21.84, 23.52, 25.2, 26.88, 28.56, 30.24, 33.6, 35.28, '37.8?', '39.9?', 42]
              ],
              type: ['cheerful', 'recover']
            },
            skill: {
              ID: 'heartBoost',
              name: 'ハートブースト',
              AP: 5,
              detail: [
                [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, '?', '?', 125]
              ],
              type: ['heartBoost']
            },
            characteristic: {
              name: 'APレデュース : ラブアトラクト',
              detail: '手札にあるメイン効果に獲得LOVE増加効果を持つスキル1枚につき、手札のこのスキルの消費AP-2。',
              type: ['APReduce', 'loveActract']
            }
          },
          '夏めきペイン': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2230,
              pure: 1630,
              cool: 1430,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartAttraction',
              name: 'ハートアトラクション',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 12, 13, 14],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 11.4, 12, 12.6, 13.2, 13.8]
              ],
              type: ['voltage']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, 11, 12, 13, 14]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'オーバーセクション : ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+15%する。',
              type: ['overSection', 'heartCaptcha']
            }
          },
          'SPLASH!!!!': {
            styleType: 'performer',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1530,
              pure: 2030,
              cool: 1130,
              mental: 263,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartAttraction',
              name: 'ハートアトラクション',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, '?', '?', '?', 11],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, '?', '?', '?', 12]
              ],
              type: ['heartAttraction']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 7,
              detail: [
                [7, 8, 8, 9, 10, 11, 11, 12, 13, 14, 15, '16?', '17?', 18]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'APレデュース : 梢',
              detail: '梢のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APReduce', 'kozue']
            }
          },
          '眩耀夜行': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2230,
              pure: 1630,
              cool: 1330,
              mental: 213,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2', '26.4', '27.6?', 30]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, '?', '?', '?', 15]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'インタープリテーション',
              detail: 'このスキルのムードによる効果増加量を上昇させる。',
              type: ['interPretation']
            }
          },
          'ペンギンアイス': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 2280,
              cool: 1480,
              mental: 173,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, 11, 12, 13, 14]
              ],
              type: ['voltage']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, 11, 12, 13, 14]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'オーバーセクション：ハートキャプチャ',
              detail: '手札にある状態でセクションが変わるたび、ビートハート6回分のスキルハートを獲得する。',
              type: ['overSection', 'heartCaptcha']
            }
          },
          'フォーチュンムービー': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2480,
              pure: 1780,
              cool: 1530,
              mental: 153,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartAttraction',
              name: 'ハートアトラクション',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, '?', 12],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, '13.8?', 15]
              ],
              type: ['heartAttraction']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, '23?', 25]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'オーバーセクション：APゲイン',
              detail: '手札にある状態でセクションが変わるたび、APを5回復する。',
              type: ['overSection', 'APGain']
            }
          },
          'Holiday∞Holiday': {
            styleType: 'performer',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1730,
              pure: 2230,
              cool: 1730,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, '31.5?', '33?', '34.5?', 37.5]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 3,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'チェイン：花帆',
              detail: '花帆のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'kaho']
            }
          },
          'Rose Garden': {
            styleType: 'performer',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1530,
              pure: 2630,
              cool: 1430,
              mental: 173,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, '13?', '13?', '14?', 15]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, '8?', '9?', '?', 10]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'チェイン：梢',
              detail: '梢のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'kozue']
            }
          },
          '薫風の調べ': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 2230,
              cool: 1430,
              mental: 173,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 7,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, '14?', 15]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '?', 10]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APreduce']
            }
          },
          '春色ニューデイズ': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 2280,
              cool: 1380,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, 31.5, '33?', '34.5?', 37.5]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, '?', '?', 10]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-1する。',
              type: ['draw', 'APreduce']
            }
          },
          'Dream Believers': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1730,
              pure: 2230,
              cool: 1730,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, '?', '?', '?', 15]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 3,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, '?', '?', '?', 13]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'フェイバリット：フィーバー',
              detail: 'フィーバーセクションでドローされる確率が増加する。',
              type: ['favorite', 'fever']
            }
          },
        },
        SR: {
          '宇宙演舞☆うさぴょん': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 2130,
              cool: 1330,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, '?', '?', '?', 8]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'supportedFeel',
              name: 'サポーテッドフィール',
              AP: 4,
              detail: [
                [5.2, 5.72, 6.24, 6.76, 7.28, 7.8, 8.32, 8.84, 9.36, 10.4, '10.92?', '11.44?', '11.96?', 13],
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, '6.7?', '7?', '7.4?', 8]
              ],
              type: ['supported', 'feel']
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクション中、消費APを-1する。',
              type: ['draw', 'APreduce']
            }
          },
          '素顔のピクセル': {
            styleType: 'cheerLeader',
            mood: 'happy',
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 1730,
              cool: 1330,
              mental: 233,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, 31.5, 33, '34.5?', 37.5]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'cheerfulHealing',
              name: 'チアフルヒーリング',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, '18.4?', 20],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, '?', 5]
              ],
              type: ['cheerful', 'healing']
            },
            characteristic: {
              name: 'オーバーセクション : APレデュース',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-3。',
              type: ['overSection', 'APreduce']
            }
          },
          'ドルフィン〰ビーチ': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2130,
              pure: 1830,
              cool: 1530,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'APレデュース：梢',
              detail: '梢のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'kozue']
            }
          },
          'はじける☆オレンジソーダ': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2030,
              pure: 2130,
              cool: 1630,
              mental: 153,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 7,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, '?', '?', '?', 15]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, '?', '?', '?', 13]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'オーバーセクション：APゲイン',
              detail: '手札にある状態でセクションが変わるたび、APを2回復する。',
              type: ['overSection', 'APGain']
            }
          },
          '朝顔令嬢': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1430,
              pure: 1830,
              cool: 2230,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.6?', 30]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, '27?', '29?', '30?', 32]
              ],
              type: ['voltageGain']
            },
            characteristic: {
              name: 'ドロー : APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APreduce']
            }
          },
          '金魚◎花火': {
            styleType: 'performer',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1430,
              pure: 1830,
              cool: 2230,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'フェイバリット：フィーバー',
              detail: 'フィーバーセクションでドローされる確率が増加する。',
              type: ['favorite', 'fever']
            }
          },
          'DEEPNESS': {
            styleType: 'performer',
            mood: 'melow',
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 1580,
              cool: 2280,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, '11?', '11?', '12?', '15?']
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, '?', '?', '?', '3.2?']
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'チェイン : さやか',
              detail: 'さやかのスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'sayaka']
            }
          },
          '雨と紫陽花に唄へば': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2230,
              pure: 2130,
              cool: 1430,
              mental: 153,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 12, 13, 14, 15]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'フェイバリット：フィーバー',
              detail: 'フィーバーセクションでドローされる確率が増加する。',
              type: ['favorite', 'fever']
            }
          },
          'アメアガリストリート': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2230,
              pure: 2130,
              cool: 1430,
              mental: 153,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, '?', '?']
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 3,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, '23?', '25?']
              ],
              type: ['voltageGain']
            },
            characteristic: {
              name: 'ドロー：メンタルリカバー',
              detail: 'ドローした時、メンタルを最大値の6%回復させる。',
              type: ['draw', 'mentalRecover']
            }
          },
          'チェリー♫ピクニック': {
            styleType: 'performer',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2430,
              pure: 1930,
              cool: 1830,
              mental: 113,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.8, 30]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'APレデュース：さやか',
              detail: 'さやかのスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'sayaka']
            }
          },
          '謳歌爛漫': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 1840,
              cool: 1730,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 7,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, '?', '?', '15?']
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, '16.8?', '17.6?', '18.4?', '20?']
              ],
              type: ['mentalRecover']
            },
            characteristic: {
              name: 'ドロー：ボルテージゲイン',
              detail: 'ドローした時、ボルテージ値を+12する。',
              type: ['draw', 'voltage', 'gain']
            }
          },
          'Reflection in the mirror': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1730,
              pure: 2430,
              cool: 930,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.8?', '30?']
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, '6?', '7?', '7?', '8?']
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'メンタルリカバー',
              detail: 'ドローした時、メンタルを最大値の6%回復させる。',
              type: ['mentalRecover']
            }
          },
          '水彩世界': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2130,
              pure: 1930,
              cool: 1030,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 7,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, '?', '?', '?', '15?']
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, '16.8?', '17.6?', '18.4?', '20?']
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'チェイン：梢',
              detail: '梢のスキルを使用した後、ドローされる確率が増加する。',
              type: ['cain', 'kozue']
            }
          }
        },
        R: {
          'オーロラスカイ': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1225,
              pure: 1525,
              cool: 925,
              mental: 123,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ],
              type: ['heartCaptcha']
            }
          },
          '華紺青': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1425,
              pure: 1225,
              cool: 825,
              mental: 143,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ],
              type: ['loveAttract']
            }
          }
        }
      },
      sayaka: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1,
              pure: 1,
              cool: 1,
              mental: 1,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {},
              type: []
            },
            skill: {
              name: '',
              AP: 1,
              detail: {},
              type: []
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        DR: {
          'Prism Echo': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 2830,
              cool: 2970,
              mental: 243,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract',
              name: 'ラブアトラクト',
              AP: 1,
              detail: [
                [30, 33, 36, 39, 42, 45, 48, 51, 54, 60, '63?', '66?', '69?', 75]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'loveAttract',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [28, 31, 34, 37, 40, 43, 46, 49, 52, 57, '60?', '63?', '66?', 72]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'APレデュース：ボルテージ',
              detail: '現在のボルテージLvに応じてスキルの消費APダウン',
              type: ['APreduce', 'voltage']
            }
          }
        },
        UR: {
          '喫茶ハスノソラ': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2530,
              pure: 1130,
              cool: 2030,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensionsProtect',
              name: 'エクステプロテクト',
              AP: 6,
              detail: [
                [7.2, 7.92, 8.64, 9.36, 10.08, 10.8, 11.52, 12.24, 12.96, 14.4, '15.12?', '15.84?', '16.56?', 18]
              ],
              type: ['extensions', 'protect']
            },
            skill: {
              ID: 'cheerfulFascinate_stage_over50',
              name: 'チアフルファッシネイト',
              AP: 2,
              detail: [
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, '4?', '4.2?', '4.4?', 4.8],
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, '11?', '11?', '12?', 12]
              ],
              type: ['cheerful', 'fascinate']
            },
            characteristic: {
              name: 'インタープリテーション & チェイン：慈',
              detail: 'このスキルのムードによる効果増加量を上昇させる。さらに慈のスキルを使用した後、ドローされる確率が増加する。',
              type: ['interPretation', 'chain', 'megumi']
            }
          },
          '宇宙警察★うさぴょん': {
            styleType: 'trickStar',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1730,
              pure: 2330,
              cool: 1330,
              mental: 193,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, '42?', '44?', '46?', 50]
              ],
              type: ['regain', 'voltage']
            },
            skill: {
              ID: 'extensionsVoltage_section',
              name: 'エクステボルテージ',
              AP: 5,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 24]
              ],
              type: ['extensions', 'voltage']
            },
            characteristic: {
              name: 'チェイン : 瑠璃乃',
              detail: '瑠璃乃のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'rurino']
            }
          },
          'ゆのくにガールズ！': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1730,
              pure: 2330,
              cool: 1330,
              mental: 193,
              BP: 100
            },
            specialAppeal: {
              ID: 'cheerfulRecover',
              name: 'チアフルリカバー',
              AP: 8,
              detail: [
                [16.8, 18.48, 20.16, 21.84, 23.52, 25.2, 26.88, 28.56, 30.24, 33.6, 35.28, '37.8?', '39.9?', 42]
              ],
              type: ['cheerful', 'recover']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, '26.4?', '27.8?', 30]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'APレデュース：ボルテージゲイン',
              detail: '手札にあるメイン効果にボルテージ増加効果を持つスキル1枚につき、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'voltageGain']
            }
          },
          'SPLASH!!!!': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1080,
              pure: 2030,
              cool: 1530,
              mental: 268,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'fascination_section',
              name: 'ファッシネイション',
              AP: 7,
              detail: [
                [14.4, 15.8, 17.3, 18.7, 20.2, 21.6, 23, 24.5, 25.9, 28.8, 30.2, 31.7, 33.1, 36],
                [12, 13, 14, 16, 17, 18, 19, 20, 22, 24, 25, 26, 28, 29]
              ],
              type: ['loveAttract', 'voltageGain']
            },
            characteristic: {
              name: 'APレデュース：綴理',
              detail: '綴理のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'tsuzuri']
            }
          },
          'ドルフィン〰ビーチ': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2430,
              pure: 1430,
              cool: 2030,
              mental: 143,
              BP: 100
            },
            specialAppeal: {
              ID: 'fascination_section',
              name: 'ファッシネイション',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, '?', '30?'],
                [12, 13, 14, 16, 17, 18, 19, 20, 22, 24, 25, 26, 28, 29]
              ],
              type: ['loveAttract', 'voltageGain']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, 39.6, 41.4, '45?']
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'APレデュース：綴理',
              detail: '綴理のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'tsuzuri']
            }
          },
          'Mirage Voyage': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1730,
              pure: 2230,
              cool: 1430,
              mental: 193,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.6?', 30]
              ],
              type: ['mentalRecover']
            },
            skill: {
              ID: 'fascination_section',
              name: 'ファッシネイション',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.6?', 30],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 24]
              ],
              type: ['loveAttract', 'voltageGain']
            },
            characteristic: {
              name: 'インタープリテーション',
              detail: 'このスキルのムードによる効果増加量を上昇させる。',
              type: ['interPretation']
            }
          },
          '朝顔令嬢': {
            styleType: 'performer',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1530,
              pure: 1330,
              cool: 2530,
              mental: 193,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, '23?', 25]
              ],
              type: ['regain', 'attract']
            },
            skill: {
              ID: 'heartAttraction',
              name: 'ハートアトラクション',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '10?', 11],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, '11.1?', 12]
              ],
              type: ['heartAttraction']
            },
            characteristic: {
              name: 'ドロー : APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APreduce']
            }
          },
          '雨と紫陽花に唄へば': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2230,
              pure: 1480,
              cool: 2080,
              mental: 153,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, 39.6, '41.4?', '45?']
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'heartAttraction',
              name: 'ハートアトラクション',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ],
              type: ['heart', 'attraction']
            },
            characteristic: {
              name: 'フェイバリット：フィーバー',
              detail: 'フィーバーセクションでドローされる確率が増加する。',
              type: ['favorite', 'fever']
            }
          },
          'ツキマカセ': {
            styleType: 'performer',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 930,
              pure: 2630,
              cool: 2130,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, 39.6, '41.4?', 45]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'インタープリテーション',
              detail: 'このスキルのムードによる効果増加量を上昇させる。',
              type: ['interPretation']
            }
          },
          'Rose Garden': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1430,
              pure: 2480,
              cool: 2280,
              mental: 113,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, '13?', '13?', '14?', 15]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', '25?']
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'チェイン：綴理',
              detail: '綴理のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'tsuzuri']
            }
          },
          '薫風の調べ': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 2130,
              cool: 1630,
              mental: 193,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, 31.5, '33?', '34.5?', 37.5]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 25]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APreduce']
            }
          },
          'スケイプゴート': {
            styleType: 'performer',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1530,
              pure: 1930,
              cool: 2230,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, '37.8?', '39.6?', '41.4?', 45]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, '11?', '11?', '12?', 13]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'フェイバリット : 4',
              detail: 'フィーバーセクションを除いた4セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'Dream Believers': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2230,
              pure: 1630,
              cool: 1430,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, '31.5?', '33?', '34.5?', 37.5],
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.6?', 30]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'アキューミュレイト',
              detail: '手札にある時、ボルテージLvが上がるたびに消費APが低下する。',
              type: ['accumulate']
            }
          }
        },
        SR: {
          'Trick & Cute': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 1430,
              cool: 2130,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', '25?']
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'aggressiveAttract_section',
              name: 'アグレッシブアトラクト',
              AP: 3,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, '16.8?', '17.6?', '18.4?', '20?']
              ],
              type: ['aggressive', 'attract']
            },
            characteristic: {
              name: 'ドロー：ボルテージゲイン',
              detail: 'ドローした時、ボルテージPt.を+12する。',
              type: ['draw', 'voltageGain']
            }
          },
          'Take It Over': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 1430,
              cool: 2130,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'cheerfulFascinate_section_over75',
              name: 'チアフルファッシネイト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 16]
              ],
              type: ['cheerful', 'fascinate']
            },
            characteristic: {
              name: 'オーバーセクション：ハートキャプチャ',
              detail: '手札にある状態でセクションが変わるたび、ビートハート4個分のスキルハートを獲得する。',
              type: ['overSection', 'heartCaptcha']
            }
          },
          '夏めきペイン': {
            styleType: 'cheerLeader',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 1630,
              cool: 1430,
              mental: 233,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, '27.6?', 30]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'supportedFeel',
              name: 'サポーテッドフィール',
              AP: 6,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, '18.4?', 20],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ],
              type: ['supported', 'feel']
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-3',
              type: ['overSection', 'APreduce']
            }
          },
          'はじける☆ブルーソーダ': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 2130,
              cool: 2030,
              mental: 153,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, '31.5?', '33?', '34.5?', 37.5]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.6?', 30]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'オーバーセクション：ボルテージゲイン',
              detail: '手札にある状態でセクションが変わるたび、ボルテージPt.を+12する。',
              type: ['overSection', 'voltageGain']
            }
          },
          '金魚◎花火': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 2030,
              cool: 1830,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 6,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ],
              type: ['regain', 'voltage']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'ドロー：ラブアトラクト',
              detail: 'ドローした時、このセクション中、獲得するLOVEを7.5%する。',
              type: ['draw', 'loveAttract']
            }
          },
          'ペンギンアイス': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1480,
              pure: 2280,
              cool: 2030,
              mental: 153,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.6?', 30]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, '16.8?', '17.6?', '18.4?', 20]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'オーバーセクション：ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+10%する。',
              type: ['overSection', 'heartCaptcha']
            }
          },
          'DEEPNESS': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1730,
              pure: 1580,
              cool: 2230,
              mental: 178,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.6?', 30]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, '2.7?', '2.8?', '3?', '3.2?']
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'チェイン : 梢',
              detail: '梢のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'kozue']
            }
          },
          'アメアガリストリート': {
            styleType: 'cheerLeader',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1330,
              pure: 1630,
              cool: 2430,
              mental: 193,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [6.4, 7.04, 7.68, 8.32, 8.96, 9.6, 10.24, 10.88, 11.52, 12.8, 13.44, 14.08, 14.72, 16]
              ],
              type: ['mentalRecover']
            },
            characteristic: {
              name: 'ドロー：ボルテージゲイン',
              detail: 'ドローした時、ボルテージPt.を+12する。',
              type: ['draw', 'voltageGain']
            }
          },
          'Tragic Drops': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2230,
              pure: 1530,
              cool: 1830,
              mental: 173,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, '11?', '12?', '13?', '14?']
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 3,
              detail: [
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, '12.6?', '13.2?', '13.8?', '15?']
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'チェイン : さやか',
              detail: 'さやかのスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'sayaka']
            }
          },
          'チェリー♫ピクニック': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2030,
              pure: 1730,
              cool: 1430,
              mental: 213,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, '11?', '12?', '13?', '14?']
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, '27?', '29?', '30?', '32?']
              ],
              type: ['voltageGain']
            },
            characteristic: {
              name: 'APレデュース：綴理',
              detail: '綴理のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'tsuzuri']
            }
          },
          '春色ニューデイズ': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 2280,
              cool: 1380,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2', '26.4', '27.6?', 30]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'endurance_voltageMental',
              name: 'エンデュランス',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', '25?'],
                [2.8, 3.08, 3.36, 3.64, 3.92, 4.2, 4.48, 4.76, 5.04, 5.6, '5.88?', '6.16?', '6.44?', '7?']
              ],
              type: ['endurance']
            },
            characteristic: {
              name: 'フェイバリット : 2',
              detail: 'フィーバーセクションを除いた2セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'AWOKE': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1430,
              pure: 1430,
              cool: 2430,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2', '26.4', '27.6?', '30?']
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, '27?', '29?', '30?', '32?']
              ],
              type: ['voltageGain']
            },
            characteristic: {
              name: 'フェイバリット：1',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'Sparkly Spot': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 1030,
              cool: 2130,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [12, 13, 14, 16, 17, 18, 19, 20, 22, 24, 25, '?', '?', '30?']
              ],
              type: ['voltageGain']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, '17.6?', '18.4?', '20?'],
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'チェイン：綴理',
              detail: '綴理のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'tsuzuri']
            }
          }
        },
        R: {
          'オーロラスカイ': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1225,
              pure: 1025,
              cool: 1425,
              mental: 123,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
              ],
              type: ['voltage', 'gain']
            }
          },
          '華紺青': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1425,
              pure: 1225,
              cool: 825,
              mental: 143,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ],
              type: ['voltage', 'gain']
            }
          }
        }
      },
      rurino: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1,
              pure: 1,
              cool: 1,
              mental: 1,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {},
              type: []
            },
            skill: {
              name: '',
              AP: 1,
              detail: {},
              type: []
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        DR: {
          'Prism Echo': {
            styleType: 'trickStar',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2030,
              pure: 2430,
              cool: 1630,
              mental: 283,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_stage',
              name: 'リゲインアトラクト',
              AP: 1,
              detail: [
                [1.9, '2.1?', '2.3?', '2.5?', '2.7?', '2.9?', '3?', '3.2?', '3.4?', '3.8?', '4?', '4.2?', '4.4?', 4.8]
              ],
              type: ['regainAttract']
            },
            skill: {
              ID: 'regainAttract_stage',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [4, '4.4?', '4.8?', '5.2?', '5.6?', '6?', '6.4?', '6.8?', '7.2?', '8?', '8.4?', '8.8?', '9.2?', 10]
              ],
              type: ['regainAttract']
            },
            characteristic: {
              name: 'ドロー：ラブアトラクト & APレデュース：メンタル',
              detail: 'ドローした時、このステージ中、獲得するLOVEを+4%する。さらに現在のメンタルに応じてスキルの消費APダウン',
              type: ['draw', 'loveAttract', 'APreduce', 'mental']
            }
          }
        },
        UR: {
          'コットン=ユートピア': {
            styleType: 'trickStar',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 930,
              pure: 2530,
              cool: 1630,
              mental: 223,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, '8.4?', '8.8?', '9.2?', 10]
              ],
              type: ['regain', 'attract']
            },
            skill: {
              ID: 'refreshSupport_stage',
              name: 'リフレッシュサポート',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25],
                [1.6, 1.76, 1.92, 2.08, 2.24, 2.4, 2.56, 2.72, 2.88, 3.2, '3.36?', '3.48?', '3.64?', 4]
              ],
              type: ['refresh', 'support']
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース & マチュレーション',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費APを-3し、スキルの効果値が増加する。',
              type: ['overSection', 'APreduce', 'maturation']
            }
          },
          'Trick & Cute': {
            styleType: 'performer',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2130,
              pure: 730,
              cool: 2630,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensionsAttract_section',
              name: 'エクステアトラクト',
              AP: 7,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, '10.1?', '10.6?', '11.1?', 12]
              ],
              type: ['extensions', 'attract']
            },
            skill: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 10,
              detail: [
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, '4?', '4.2?', '4.4?', 4.8]
              ],
              type: ['regain', 'attract']
            },
            characteristic: {
              name: 'ドロー：カームダウン',
              detail: 'ドローした時、ボルテージPt.を-50する。',
              type: ['draw', 'calmDown']
            }
          },
          '宇宙警察★うさぴょん': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 2430,
              cool: 1030,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshMind',
              name: 'リフレッシュマインド',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22', '23?', 25]
              ],
              type: ['refreshMind']
            },
            skill: {
              ID: 'klutchRecover',
              name: 'クラッチリカバー',
              AP: 5,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 25],
                [15.2, 16.72, 18.24, 19.76, 21.28, 22.8, 24.32, 25.84, 27.36, 30.4, '31.92?', '33.44?', '34.96?', 38]
              ],
              type: ['klutchRecover']
            },
            characteristic: {
              name: 'APレデュース：ハイメンタル',
              detail: 'メンタルが75%以上の時にドローすると、消費APを-2する。',
              type: ['APreduce', 'hiMental']
            }
          },
          'アイデンティティ': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 2130,
              cool: 1430,
              mental: 193,
              BP: 100
            },
            specialAppeal: {
              ID: 'lowProtect',
              name: 'ロープロテクト',
              AP: 6,
              detail: [
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, '12.6?', '13.2', '13.8?', 15],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, '12.6?', '13.2', '13.8?', 15]
              ],
              type: ['lowProtect']
            },
            skill: {
              ID: 'cheerfulAttract_APreduce_over75',
              name: 'チアフルアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, '6.7?', '7?', '7.4?', 8]
              ],
              type: ['cheerful', 'attract']
            },
            characteristic: {
              name: 'オーバーセクション：マチュレーション',
              detail: '手札にある状態でセクションが変わるたび、スキルの効果量が増加する。',
              type: ['overSection', 'maturation']
            }
          },
          'yours ever': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 2130,
              cool: 1430,
              mental: 193,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '9?', 10]
              ],
              type: ['refresh', 'heart']
            },
            skill: {
              ID: 'heartAttraction',
              name: 'ハートアトラクション',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '9?', 10],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, '11.1?', '12?']
              ],
              type: ['heartAttraction']
            },
            characteristic: {
              name: 'インタープリテーション',
              detail: 'このスキルのムードによる効果上昇量を上昇させる。',
              type: ['interPretation']
            }
          },
          '夏めきペイン': {
            styleType: 'trickStar',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2530,
              pure: 1330,
              cool: 1030,
              mental: 243,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '9?', 10]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'regainAttraction_section',
              name: 'リプレイアトラクション',
              AP: 5,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, '7?', 7],
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, '7.4?', 8]
              ],
              type: ['replayAttraction']
            },
            characteristic: {
              name: 'エクステンドハンド：3',
              detail: '手札にある間、手札の枚数上限を3枚増加する。',
              type: ['extendHand']
            }
          },
          'Dream Believers': {
            styleType: 'trickStar',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2530,
              pure: 1530,
              cool: 1030,
              mental: 223,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, '8.4?', '8.8?', '9.2?', 10]
              ],
              type: ['regainAttract']
            },
            skill: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, '27?', '29?', '30?', 32]
              ],
              type: ['regainVoltage']
            },
            characteristic: {
              name: 'ドロー：ボルテージゲイン',
              detail: 'ドローした時、ボルテージPt.を+18する。',
              type: ['draw', 'voltageGain']
            }
          }
        },
        SR: {
          '喫茶ハスノソラ': {
            styleType: 'trickStar',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2430,
              pure: 1930,
              cool: 1430,
              mental: 153,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, '6?', '7?', '7?', 8]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'cheerfulRegain',
              name: 'チアフルリゲイン',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 24]
              ],
              type: ['cheerful', 'regain']
            },
            characteristic: {
              name: 'ドロー：ハートキャプチャ',
              detail: 'ドローした時、ビートハート3回分のスキルハートを獲得する。',
              type: ['draw', 'heartCaptcha']
            }
          },
          'Au Bord du Lac': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1230,
              pure: 2330,
              cool: 1730,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, '10?']
              ],
              type: ['refresh', 'heart']
            },
            skill: {
              ID: 'refreshMind',
              name: 'リフレッシュマインド',
              AP: 4,
              detail: [
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, '10.8?', '10.56?', '11.04?', '12?']
              ],
              type: ['refresh', 'mind']
            },
            characteristic: {
              name: 'フェイバリット：1',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'ゆのくにガールズ！': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 2230,
              cool: 1330,
              mental: 213,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, '5.5?', '5.7?', '6?', 6.4]
              ],
              type: ['regain', 'attract']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, '10?', '11?', '12?', 13]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'APレデュース：慈',
              detail: '慈のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'megumi']
            }
          },
          '世界中を夢中に': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 2230,
              cool: 1330,
              mental: 213,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 6,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, '28?', '30?', 32]
              ],
              type: ['regainVoltage']
            },
            skill: {
              ID: 'cheerfulEndurance_over75',
              name: 'チアフルエンデュランス',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, '28?', '30?', 32],
                [3.2, 3.52, 3.84, 4.16, 4.48, 4.8, 5.12, 5.44, 5.76, 6.4, 6.72, '7.04?', '7.36?', 8]
              ],
              type: ['cheerful', 'endurance']
            },
            characteristic: {
              name: 'チェイン：慈',
              detail: '慈のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'megumi']
            }
          },
          'にゅーかまー！': {
            styleType: 'trickStar',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1680,
              pure: 2130,
              cool: 1330,
              mental: 218,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 6,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, '?', '?', '?', 32]
              ],
              type: ['regain', 'voltage']
            },
            skill: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 4,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, '2.7?', '2.8?', '3?', 3.2]
              ],
              type: ['regain', 'attract']
            },
            characteristic: {
              name: 'フェイバリット：2',
              detail: 'フィーバーセクションを除いた2セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          '@いっつぁどりーみんわーるど！': {
            styleType: 'trickStar',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 2130,
              cool: 1030,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, '?', '9?', '10?']
              ],
              type: ['refresh', 'heart']
            },
            skill: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 6,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ],
              type: ['refresh', 'heart']
            },
            characteristic: {
              name: 'チェイン：慈',
              detail: '慈のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'megumi']
            }
          },
          'R\'s One Day': {
            styleType: 'trickStar',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1730,
              pure: 1930,
              cool: 1430,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshMind',
              name: 'リフレッシュマインド',
              AP: 6,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, '16.8?', '17.6?', '18.4?', '20?'],
              ],
              type: ['refresh', 'mind']
            },
            skill: {
              ID: 'refreshMind',
              name: 'リフレッシュマインド',
              AP: 4,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, '10.1?', '10.6?', '11.1?', '12?']
              ],
              type: ['refresh', 'mind']
            },
            characteristic: {
              name: 'ドロー：メンタルリカバー',
              detail: 'ドローした際、メンタルを最大値の6%回復させる。',
              type: ['draw', 'mentalRecover']
            }
          }
        },
        R: {
          'オーロラスカイ': {
            styleType: 'trickStar',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1525,
              pure: 1125,
              cool: 725,
              mental: 153,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 6,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ],
              type: ['refresh', 'heart']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ],
              type: ['heartCaptcha']
            }
          },
          '華紺青': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1625,
              pure: 1025,
              cool: 625,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 6,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ],
              type: ['regainVoltage']
            },
            skill: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 4,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 16]
              ],
              type: ['regainVoltage']
            }
          }
        }
      },
      kozue: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1,
              pure: 1,
              cool: 1,
              mental: 1,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {},
              type: []
            },
            skill: {
              name: '',
              AP: 1,
              detail: {},
              type: []
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        DR: {
          'Prism Echo': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2430,
              pure: 2030,
              cool: 1630,
              mental: 283,
              BP: 100
            },
            specialAppeal: {
              ID: 'fascination_stage',
              name: 'ファッシネイション',
              AP: 1,
              detail: [
                [2.6, '?', '?', '?', '?', 3.9, '?', '?', '?', '?', '?', '?', '?', 6.4],
                [6, '?', '?', '?', '?', 9, '?', '?', '?', '?', '?', '?', '?', 16]
              ],
              type: ['loveAttract', 'voltageGain']
            },
            skill: {
              ID: 'loveCaptivate',
              name: 'ラブキャブティベイト',
              AP: 2,
              detail: [
                [1.5, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.4, 2.6, 2.7, 3, '?', '?', 3.8],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, '10.1?', '10.6?', '11.1?', 12]
              ],
              type: ['love', 'captivate']
            },
            characteristic: {
              name: 'アキューミュレイト',
              detail: 'このスキルを使用する度に、5回までスキルの効果値が増加する。',
              type: ['accumulate']
            }
          }
        },
        UR: {
          '奇跡の舞踏会': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 3030,
              pure: 1330,
              cool: 1130,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'quickForm',
              name: 'クイックフォーム',
              AP: 7,
              detail: [
                [14, 15.4, 16.8, 18.2, 19.6, 21, 22.4, 23.8, 25.2, 28, 29.4, 30.8, 32.2, 35]
              ],
              type: ['quickForm']
            },
            skill: {
              ID: 'vortexAttraction',
              name: 'ボルテックスアトラクション',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, 4, 4.2, 4.4, 4.8],
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 9]
              ],
              type: ['vortex', 'attraction']
            },
            characteristic: {
              name: 'オーバーセクション : リシャッフル',
              detail: '手札にある状態でセクションが変わるたび、手札を全て捨てて、デッキから手札上限までスキルを引く。',
              type: ['overSection', 'reShuffle']
            }
          },
          '秋色カントリーロード': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1530,
              pure: 2030,
              cool: 1330,
              mental: 243,
              BP: 100
            },
            specialAppeal: {
              ID: 'cheerfulSupport_over75',
              name: 'チアフルサポート',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2', '26.4', '27.6?', 30],
                [2.4, 2.6, 2.9, 3.1, 3.4, 3.6, 3.8, 4.1, 4.3, 4.8, '5?', '5.3?', '5.5?', 6]
              ],
              type: ['cheerful', 'support']
            },
            skill: {
              ID: 'cheerfulAttract_APreduce_over75',
              name: 'チアフルアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, '10.1?', '10.6?', '11.1?', 12],
                [2.4, 2.6, 2.9, 3.1, 3.4, 3.6, 3.8, 4.1, 4.3, 4.8, '5?', '5.3?', '5.5?', 6]
              ],
              type: ['cheerful', 'attract']
            },
            characteristic: {
              name: 'チェイン：綴理&慈 & ドロー：メンタルリカバー',
              detail: '綴理、慈のスキルを使用した際、ドローされる確率が増加する。さらにドローした時、メンタルを最大値の5%回復させる。',
              type: ['chain', 'tsuzuri', 'megumi', 'draw', 'mentalRecover']
            }
          },
          'はじける☆メロンソーダ': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2130,
              pure: 2430,
              cool: 1380,
              mental: 138,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, '?', '?', '?', 15]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, '10.1?', '10.6?', '11.1?', 12]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'オーバーセクション：ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+15%する。',
              type: ['overSection', 'loveAttract']
            }
          },
          'DEEPNESS': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2130,
              pure: 2430,
              cool: 1380,
              mental: 138,
              BP: 100
            },
            specialAppeal: {
              ID: 'fascination_voltageGain',
              name: 'ファッシネイション',
              AP: 7,
              detail: [
                [23, 25, 28, 30, 32, 35, 37, 39, 41, 46, '?', '?', '?', 58],
                [2.4, 2.6, 2.9, 3.1, 3.4, 3.6, 3.8, 4.1, 4.3, 4.8, '5?', '5.3?', '5.5?', 6]
              ],
              type: ['loveAttract', 'voltageGain']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 1,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, 2.7, 2.9, 3, 3.2]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: '花帆 & ドロー：APゲイン',
              detail: '花帆のスキルを使用した後、ドローされる確率が増加する。ドローした時、AP+1。',
              type: ['kaho', 'draw', 'APgain']
            }
          },
          '金魚◎花火': {
            styleType: 'cheerLeader',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2030,
              pure: 1830,
              cool: 1680,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 8,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 2,
              detail: [
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, 10.08, 10.56, 11.04, 12]
              ],
              type: ['mentalRecover']
            },
            characteristic: {
              name: 'フェイバリット：3',
              detail: 'フィーバーセクションを除いた3セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'フォーチュンムービー': {
            styleType: 'cheerLeader',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2180,
              pure: 2030,
              cool: 1530,
              mental: 158,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, '11.1?', 12]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, '18.4?', 20]
              ],
              type: ['mentalRecover']
            },
            characteristic: {
              name: 'オーバーセクション：メンタルリカバー',
              detail: '手札にある状態でセクションが変わるたび、メンタルを最大値の12%回復させる。',
              type: ['overSection', 'mentalRecover']
            }
          },
          '雨と紫陽花に唄へば': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 1630,
              cool: 2430,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, '10.1?', '10.6?', '11.1?', '12?']
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, '10.1?', '10.6?', '11.1?', '12?']
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'フェイバリット：スタート',
              detail: '初期手札に加わる確率が増加する。',
              type: ['favorite']
            }
          },
          'Holiday∞Holiday': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 2180,
              cool: 1480,
              mental: 173,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, '39.6?', '41.4?', 45]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 3,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, '5.7?', '6?', 6.4]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'チェイン：梢',
              detail: '梢のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'kozue']
            }
          },
          'チェリー♫ピクニック': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2030,
              pure: 2730,
              cool: 930,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, '42?', '44?', '46?', 50]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, '6.7?', '7?', '7.4?', 8]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'フェイバリット：1',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'Reflection in the mirror': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2330,
              pure: 1930,
              cool: 1630,
              mental: 143,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, '11.1?', 12]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, '46?', 50]
              ],
              type: ['voltage', 'gain']
            },
            characteristic: {
              name: 'ドロー：メンタルリカバー',
              detail: 'ドローした際、メンタルを最大値の6%回復させる。',
              type: ['draw', 'mentalRecover']
            }
          },
          '春色ニューデイズ': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2430,
              pure: 1630,
              cool: 1230,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2', '26.4', '27.6?', 30]
              ],
              type: ['mentalRecover']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, '6.7?', '7?', '7.4?', 8]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-1する。',
              type: ['draw', 'APreduce']
            }
          },
          'Dream Believers': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2630,
              pure: 1830,
              cool: 1030,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, '7?', '7.4?', 8]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, '44?', '46?', 50]
              ],
              type: ['voltage', 'gain']
            },
            characteristic: {
              name: 'フェイバリット：スタート',
              detail: '初期手札に加わる確率が増加する。',
              type: ['favorite']
            }
          }
        },
        SR: {
          '喫茶ハスノソラ': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2530,
              pure: 1130,
              cool: 2030,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, '7?', '7.4?', '8?']
              ],
              type: ['regain', 'attract']
            },
            skill: {
              ID: 'cheerfulAttract_loveAttract_over50',
              name: 'チアフルアトラクト',
              AP: 3,
              detail: [
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, '4?', '4.2?', '4.4?', 4.8],
                [0.6, 0.7, 0.7, 0.8, 0.8, 0.9, 1, 1, 1.1, 1.2, '?', '?', '?', '?']
              ],
              type: ['cheerful', 'attract']
            },
            characteristic: {
              name: 'インタープリテーション & チェイン：花帆',
              detail: 'このスキルのムードによる効果増加量を上昇させる。さらに花帆のスキルを使用した後、ドローされる確率が増加する。',
              type: ['interPretation', 'chain', 'kaho']
            }
          },
          'Trick & Cute': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 1330,
              cool: 2230,
              mental: 193,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 25]
              ],
              type: ['mentalRecover']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 3,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, '27?', '29?', '30?', 32]
              ],
              type: ['voltage', 'gain']
            },
            characteristic: {
              name: 'オーバーセクション：アグレッシブ',
              detail: '手札にある状態でセクションが変わるたび、メンタルを最大値の15%減少させる。',
              type: ['overSection', 'aggressive']
            }
          },
          '素顔のピクセル': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2030,
              pure: 1730,
              cool: 1230,
              mental: 233,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, '11.1?', 12]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'cheerfulProtect_loveAttract',
              name: 'チアフルプロテクト',
              AP: 5,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, '9.2?', 10],
                [1.6, 1.8, 1.9, 2.1, 2.2, 2.4, 2.6, 2.7, 2.9, 3.2, 3.4, 3.5, '?', 4]
              ],
              type: ['cheerful', 'protect']
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-3。',
              type: ['overSection', 'APreduce']
            }
          },
          '夏めきペイン': {
            styleType: 'cheerLeader',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2030,
              pure: 1830,
              cool: 1230,
              mental: 223,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 3,
              detail: [
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, 10.08, 10.56, 11.04, 12]
              ],
              type: ['mentalRecover']
            },
            characteristic: {
              name: 'オーバーセクション：ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+15%する。',
              type: ['overSection', 'loveAttract']
            }
          },
          'SPLASH!!!!': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 2130,
              cool: 1230,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ],
              type: ['mentalRecover']
            },
            characteristic: {
              name: 'APレデュース : 花帆',
              detail: '花帆のスキルを使用するたび、手札のこのスキルの消費AP-2 。',
              type: ['APreduce', 'kaho']
            }
          },
          '眩耀夜行': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 1730,
              cool: 1430,
              mental: 223,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, '8.4?', '8.8?', '9.2?', 10]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, '8.4?', '8.8?', '9.2?', 10]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'インタープリテーション',
              detail: 'このスキルのムードによる効果上昇量を上昇させる。',
              type: ['interPretation']
            }
          },
          '朝顔令嬢': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 1530,
              cool: 2230,
              mental: 173,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, '2.7?', '2.8?', '3?', 3.2]
              ],
              type: ['regainAttract']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, '16.8?', '17.6?', '18.4?', 20]
              ],
              type: ['mentalRecover']
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APreduce']
            }
          },
          'ペンギンアイス': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1730,
              pure: 2480,
              cool: 1480,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 8,
              detail: [
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, '12.6?', '13.2', '13.8?', 15]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, '6?', '7?', '7?', 8]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'オーバーセクション：ボルテージゲイン',
              detail: '手札にある状態でセクションが変わるたび、ボルテージPt.を+12する。',
              type: ['overSection', 'voltageGain']
            }
          },
          'アメアガリストリート': {
            styleType: 'cheerLeader',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2130,
              pure: 1880,
              cool: 1280,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, '8.8?', '9.2?', 10]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [6.4, 7.04, 7.68, 8.32, 8.96, 9.6, 10.24, 10.88, 11.52, 12.8, '13.44?', '14.08?', '14.72?', 16]
              ],
              type: ['mentalRecover']
            },
            characteristic: {
              name: 'ドロー：ラブアトラクト',
              detail: 'ドローした時、このセクション中、獲得するLOVEを2.4%する。',
              type: ['draw', 'loveAttract']
            }
          },
          'Rose Garden': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1530,
              pure: 1980,
              cool: 1630,
              mental: 218,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, '22?', '23?', 25]
              ],
              type: ['mentalRecover']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, '16.8?', '17.6?', '18.4?', 20]
              ],
              type: ['mentalRecover']
            },
            characteristic: {
              name: 'チェイン：花帆',
              detail: '花帆のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'kaho']
            }
          },
          '薫風の調べ': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 2130,
              cool: 1580,
              mental: 178,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APreduce']
            }
          },
          '謳歌爛漫': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 1730,
              cool: 1630,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, '10.6?', '11.1?', 12]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, '7?', '7.4?', 8]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'アクセラレーション',
              detail: 'ボルテージLv.が8以上の間、消費AP-2',
              type: ['acceleration']
            }
          },
          '水彩世界': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 2130,
              cool: 1130,
              mental: 173,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, '27?', '29?', '30?', 32]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, '6.7?', '7?', '7.4?', 8]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'チェイン：花帆',
              detail: '花帆のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'kaho']
            }
          },
          'Grace Phrase': {
            styleType: 'cheerLeader',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2430,
              pure: 1730,
              cool: 930,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, '16.8?', '17.6?', '18.4?', 20]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, '16.8?', '17.6?', '18.4?', 20]
              ],
              type: ['mentalRecover']
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-1する。',
              type: ['draw', 'APreduce']
            }
          }
        },
        R: {
          'オーロラスカイ': {
            styleType: 'cheerLeader',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1525,
              pure: 1225,
              cool: 925,
              mental: 123,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, 10.08, 10.56, 11.04, 12]
              ],
              type: ['mentalRecover']
            }
          },
          '華紺青': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1225,
              pure: 1625,
              cool: 825,
              mental: 123,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, 4, 4.2, 4.4, 4.8]
              ],
              type: ['loveAttract']
            }
          }
        }
      },
      tsuzuri: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1,
              pure: 1,
              cool: 1,
              mental: 1,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {},
              type: []
            },
            skill: {
              name: '',
              AP: 1,
              detail: {},
              type: []
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        DR: {
          'Prism Echo': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 2030,
              cool: 2830,
              mental: 243,
              BP: 100
            },
            specialAppeal: {
              ID: 'invocation',
              name: 'インヴォケーション',
              AP: 7,
              detail: [
                [38, '?', '?', '?', '?', '57?', '?', '?', '?', '76?', '?', '?', '?', 96],
                [4.8, '5.28?', '5.76?', '6.24?', '6.72?', '7.2?', '7.68?', '8.16?', '8.64?', '9.6?', '10.08?', '10.56?', '11.04?', 12]
              ],
              type: ['invocation']
            },
            skill: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 2,
              detail: [
                [10, '11?', '12?', '13?', '14?', '15?', '16?', '17?', '18?', 20, '21?', '22?', '23?', 26],
                [2, '?', '?', '?', '?', '?', '?', '?', '?', 4, '?', '?', '?', 5],
              ],
              type: ['voltageHeart']
            },
            characteristic: {
              name: 'アキューミュレイト',
              detail: 'このスキルを使用する度に、5回までスキルの効果値が増加する。',
              type: ['accumulate']
            }
          }
        },
        UR: {
          'Trick & Cute': {
            styleType: 'performer',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 1430,
              cool: 2130,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.6?', 30]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'aggressiveHeart',
              name: 'アグレッシブハート',
              AP: 3,
              detail: [
                ['セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション'],
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, '8?', '9?', '9?', '10?']
              ],
              type: ['aggressive', 'heart']
            },
            characteristic: {
              name: 'ドロー：ラブアトラクト',
              detail: 'ドローした時、このセクション中、獲得するLOVEを12.5%する。',
              type: ['draw', 'loveAttract']
            }
          },
          '革命の舞踏会': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 830,
              pure: 1530,
              cool: 3230,
              mental: 173,
              BP: 100
            },
            specialAppeal: {
              ID: 'vortexShift',
              name: 'ボルテックスシフト',
              AP: 3,
              detail: [
                [48, 52.8, 57.6, 62.4, 67.2, 72, 76.8, 81.6, 86.4, 96, 100.8, 105.6, 110.4, 120]
              ],
              type: ['vortexShift']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 7,
              detail: [
                [29, 32, 35, 38, 41, 44, 46, 49, 52, 58, 61, 64, 67, 72]
              ],
              type: ['voltage', 'gain']
            },
            characteristic: {
              name: 'APレデュース：ボルテージ',
              detail: '現在のボルテージLvに応じてスキルの消費APダウン',
              type: ['APreduce', 'voltage']
            }
          },
          'Take It Over': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 1530,
              cool: 2030,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, '37?', 40]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'cheerfulVoltage_heartCaptcha',
              name: 'チアフルボルテージ',
              AP: 4,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, '37?', 40],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, '5?', 5]
              ],
              type: ['cheerful', 'voltage']
            },
            characteristic: {
              name: 'オーバーセクション：ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+15%する。',
              type: ['overSection', 'loveAttract']
            }
          },
          '秋色カントリーロード': {
            styleType: 'performer',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1030,
              pure: 2130,
              cool: 1730,
              mental: 243,
              BP: 100
            },
            specialAppeal: {
              ID: 'cheerfulAttraction',
              name: 'チアフルアトラクション',
              AP: 6,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, '?', '?', '?', 15],
                [7.5, 8.3, 9, 9.8, 10.5, 11.3, 12, 12.8, 13.5, 15, '15.8?', '16.5?', '17.3?', 18.8]
              ],
              type: ['cheerful', 'attraction']
            },
            skill: {
              ID: 'cheerfulHeart_heartCaptcha',
              name: 'チアフルハート',
              AP: 4,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, '?', '?', '?', 15],
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, '6?', '7?', '7?', 8]
              ],
              type: ['cheerful', 'heart']
            },
            characteristic: {
              name: 'チェイン：梢&慈 & ドロー：メンタルリカバー',
              detail: '梢、慈のスキルを使用した際、ドローされる確率が増加する。さらにドローした時、メンタルを最大値の5%回復させる。',
              type: ['chain', 'kozue', 'megumi', 'draw', 'mentalRecover']
            }
          },
          'はじける☆スイカソーダ': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1380,
              pure: 2430,
              cool: 2130,
              mental: 138,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 7,
              detail: [
                [23, 25, 28, 30, 32, 35, 37, 39, 41, 46, '?', '?', '?', 58],
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, '6?', '7?', '7?', 8]
              ],
              type: ['voltage', 'heart']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [24, 26, 29, 31, 34, 36, 38, 41, 43, 48, '?', '?', '?', 60]
              ],
              type: ['voltage', 'gain']
            },
            characteristic: {
              name: 'オーバーセクション：ハートキャプチャ',
              detail: '手札にある状態でセクションが変わるたび、ビートハート6回分のスキルハートを獲得する。',
              type: ['overSection', 'heartCaptcha']
            }
          },
          '金魚◎花火': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1430,
              pure: 2230,
              cool: 1830,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, '37?', 40]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 3,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, '30?', 32]
              ],
              type: ['voltage', 'gain']
            },
            characteristic: {
              name: 'ドロー：ボルテージゲイン',
              detail: 'ドローした時、ボルテージPt.を+18する。',
              type: ['draw', 'voltageGain']
            }
          },
          '朝顔令嬢': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 1330,
              cool: 2580,
              mental: 178,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [24, 26, 29, 31, 34, 36, 38, 41, 43, 48, 50, '?', '?', 60]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'fascination_section',
              name: 'ファッシネイション',
              AP: 6,
              detail: [
                [9.6, 10.6, 11.5, 12.5, 13.4, 14.4, 15.4, 16.3, 17.3, 19.2, 20.2, '?', '?', 24],
                [8, 9, 10, 10, 11, 12, 13, 14, 14, 16, 17, '?', '?', 20]
              ],
              type: ['loveAttract', 'voltageGain']
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APreduce']
            }
          },
          'ペンギンアイス': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1480,
              pure: 2280,
              cool: 1830,
              mental: 173,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 6,
              detail: [
                [19, 21, 23, 25, 27, 29, 30, 32, 34, 38, '?', '?', '?', 48],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, '4?', '4?', '5?', 6]
              ],
              type: ['voltage', 'heart']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, '46?', 50]
              ],
              type: ['voltage', 'gain']
            },
            characteristic: {
              name: 'オーバーセクション：ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このステージ中、獲得するLOVEを+4.8%する。',
              type: ['overSection', 'loveAttract']
            }
          },
          'DEEPNESS': {
            styleType: 'performer',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1480,
              pure: 2280,
              cool: 1830,
              mental: 173,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'heartAttraction',
              name: 'ハートアトラクション',
              AP: 10,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24],
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ],
              type: ['heart', 'attraction']
            },
            characteristic: {
              name: 'APレデュース：梢',
              detail: '梢のスキルを使用するたび、手札のこのスキルの消費AP-3。',
              type: ['APreduce', 'kozue']
            }
          },
          'ツキマカセ': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 930,
              pure: 2530,
              cool: 2330,
              mental: 153,
              BP: 100
            },
            specialAppeal: {
              ID: 'fascination_section',
              name: 'ファッシネイション',
              AP: 7,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.6?', 30],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 24]
              ],
              type: ['loveAttract', 'voltageGain']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                ['セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション', 'セクション'],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 24]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'インタープリテーション',
              detail: 'このスキルのムードによる効果増加量を上昇させる。',
              type: ['interPretation']
            }
          },
          'チェリー♫ピクニック': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1380,
              pure: 1780,
              cool: 2830,
              mental: 133,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, '10.1?', '10.6?', '11.1?', 12]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, '34?', '35?', '37?', 40]
              ],
              type: ['voltage', 'gain']
            },
            characteristic: {
              name: 'フェイバリット：1',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'スケイプゴート': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1330,
              pure: 2030,
              cool: 2930,
              mental: 103,
              BP: 100
            },
            specialAppeal: {
              ID: 'initiative',
              name: 'イニシアチブ',
              AP: 7,
              detail: [
                [22, 24, 26, 29, 31, 33, 35, 37, 40, 44, '?', '?', '?', 54],
                [3.6, 3.96, 4.32, 4.68, 5.04, 5.4, 5.76, 6.12, 6.48, 7.2, '7.56?', '7.92?', '8.28?', 9]
              ],
              type: ['initiative']
            },
            skill: {
              ID: 'initiative',
              name: 'イニシアチブ',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, '34?', '35?', '37?', 40],
                [2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 4, '4.2?', '4.4?', '4.6?', 5]
              ],
              type: ['initiative']
            },
            characteristic: {
              name: 'フェイバリット：1',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'Dream Believers': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 1180,
              cool: 2780,
              mental: 153,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 2,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, '23?', 24]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 3,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 26],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ],
              type: ['voltage', 'heart']
            },
            characteristic: {
              name: 'アキューミュレイト',
              detail: '使用する度に消費APが低下する。',
              type: ['accumulate']
            }
          }
        },
        SR: {
          'コットン=ユートピア': {
            styleType: 'trickStar',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1130,
              pure: 2330,
              cool: 1730,
              mental: 213,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, '46?', 50]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'initiative',
              name: 'イニシアチブ',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, '34?', '35?', '37?', 40],
                [2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 4, '4.2?', '4.4?', '4.6?', 5]
              ],
              type: ['initiative']
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース & マチュレーション',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費APを-3し、スキルの効果値が増加する。',
              type: ['overSection', 'APreduce', 'maturation']
            }
          },
          '喫茶ハスノソラ': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2230,
              pure: 1530,
              cool: 2030,
              mental: 153,
              BP: 100
            },
            specialAppeal: {
              ID: 'initiative',
              name: 'イニシアチブ',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 26],
                [1.6, 1.76, 1.92, 2.08, 2.24, 2.4, 2.56, 2.72, 2.88, 3.2, '3.36?', '3.48?', '3.64?', 4]
              ],
              type: ['initiative']
            },
            skill: {
              ID: 'cheerfulVoltage_voltageGain',
              name: 'チアフルボルテージ',
              AP: 3,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 24],
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, '6?', '7?', '7?', 8]
              ],
              type: ['cheerful', 'voltage']
            },
            characteristic: {
              name: 'ドロー：ラブアトラクト',
              detail: 'ドローした時、このセクション中、獲得するLOVEを+7.5%する。',
              type: ['draw', 'loveAttract']
            }
          },
          '夏めきペイン': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1980,
              pure: 1680,
              cool: 1430,
              mental: 223,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, '37?', 40],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, '5?', 6]
              ],
              type: ['voltage', 'heart']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, '12?', 13]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-3',
              type: ['overSection', 'APreduce']
            }
          },
          'SPLASH!!!!': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1330,
              pure: 2130,
              cool: 1930,
              mental: 193,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ],
              type: ['voltage', 'heart']
            },
            characteristic: {
              name: 'APレデュース：さやか',
              detail: 'さやかのスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'sayaka']
            }
          },
          'Mirage Voyage': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1530,
              pure: 1930,
              cool: 1730,
              mental: 213,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, '42?', '44?', '46?', 50]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.6?', 30]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'インタープリテーション',
              detail: 'このスキルのムードによる効果増加量を上昇させる。',
              type: ['interPretation']
            }
          },
          'アメアガリストリート': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2230,
              pure: 1530,
              cool: 2080,
              mental: 148,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, '42?', '44?', '46?', 50]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'ドロー：ラブアトラクト',
              detail: 'ドローした時、このステージ中、獲得するLOVEを+2.4%する。',
              type: ['draw', 'loveAttract']
            }
          },
          '雨と紫陽花に唄へば': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 1830,
              cool: 2130,
              mental: 173,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, '42?', '44?', '46?', 50]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, '42?', '44?', '46?', 50]
              ],
              type: ['voltage', 'gain']
            },
            characteristic: {
              name: 'フェイバリット：スタート',
              detail: '初期手札に加わる確率が増加する。',
              type: ['favorite']
            }
          },
          'Tragic Drops': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1430,
              pure: 1730,
              cool: 2730,
              mental: 143,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, '27?', '29?', '30?', 32]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 3,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 25]
              ],
              type: ['voltage', 'gain']
            },
            characteristic: {
              name: 'チェイン：綴理',
              detail: '綴理のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'tsuzuri']
            }
          },
          'Rose Garden': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1230,
              pure: 2130,
              cool: 2030,
              mental: 193,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, '34?', '35?', '37?', 40]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, '6.7?', '7?', '7.4?', 8]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'チェイン：さやか',
              detail: 'さやかのスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'sayaka']
            }
          },
          '薫風の調べ': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 2230,
              cool: 1930,
              mental: 153,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 7,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, '46?', 50]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, '30?', 32]
              ],
              type: ['voltage', 'gain']
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APreduce']
            }
          },
          'Sparkly Spot': {
            styleType: 'performer',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1530,
              pure: 1830,
              cool: 2230,
              mental: 173,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, '31.5?', '33?', '34.5?', 37.5]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, '8?', '9?', '9?', '10?']
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'ドロー：ボルテージゲイン',
              detail: 'ドローした時、ボルテージ値を+12する。',
              type: ['draw', 'valtageGain']
            }
          },
          '春色ニューデイズ': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1330,
              pure: 1630,
              cool: 2580,
              mental: 178,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, '42?', '44?', '46?', 50]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, '27?', '29?', '30?', 32]
              ],
              type: ['voltage', 'gain']
            },
            characteristic: {
              name: 'フェイバリット：1',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'AWOKE': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2130,
              pure: 1030,
              cool: 1930,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, '8?', '9?', '9?', '10?']
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'highVoltage',
              name: 'ハイボルテージ',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', 22, '23?', 25]
              ],
              type: ['high',' voltage']
            },
            characteristic: {
              name: 'チェイン：さやか',
              detail: 'さやかのスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'sayaka']
            }
          },
          'Vivid Phrase': {
            styleType: 'performer',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1530,
              pure: 1030,
              cool: 2730,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, '27?', '29?', '30?', 32]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, '6?', '7?', '7?', 8]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費AP1を-1する。',
              type: ['draw', 'APreduce']
            }
          }
        },
        R: {
          'オーロラスカイ': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1225,
              pure: 925,
              cool: 1525,
              mental: 123,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ],
              type: ['voltage', 'gain']
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ],
              type: ['voltage', 'gain']
            }
          },
          '華紺青': {
            styleType: 'performer',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1225,
              pure: 925,
              cool: 1525,
              mental: 123,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ],
              type: ['heartCaptcha']
            }
          }
        }
      },
      megumi: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1,
              pure: 1,
              cool: 1,
              mental: 1,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {},
              type: []
            },
            skill: {
              name: '',
              AP: 1,
              detail: {},
              type: []
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        DR: {
          'Prism Echo': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2830,
              pure: 2430,
              cool: 1630,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'protectFeel_APreduce',
              name: 'プロテクトフィール',
              AP: 3,
              detail: [
                [3.2, '3.5?', '3.8?', '4.2?', '4.5?', '4.8?', '5.1?', '5.4?', '5.8?', '6.4?', '6.7?', '7?', '7.4?', 8],
                [1.3, '1.4?', '1.6?', '1.7?', '1.8?', '2', '2.1?', '2.2?', '2.3?', '2.6?', '2.7?', '2.9?', '3?', 3.2]
              ],
              type: ['protect', 'feel']
            },
            skill: {
              ID: 'endurance_APreduce',
              name: 'エンデュランス',
              AP: 4,
              detail: [
                [16, '18?', '19?', '21?', '22?', '24?', '26?', '27?', '29?', '32?', '34?', '35?', '37?', 40],
                [4, '4.4?', '4.8?', '5.2?', '5.6?', '6?', '6.4?', '6.8?', '7.2?', '8?', '8.4?', '8.8?', '9.2?', 10]
              ],
              type: ['endurance']
            },
            characteristic: {
              name: 'ドロー：プロテクト & APゲイン',
              detail: 'ドローした時、メンタルの最大値の4%分のメンタルダメージを無効にする。さらにAPを2回復する。',
              type: ['draw', 'protect', 'APgain']
            }
          }
        },
        UR: {
          '喫茶ハスノソラ': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2430,
              pure: 2130,
              cool: 1130,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'supportedFeel',
              name: 'サポーテッドフィール',
              AP: 4,
              detail: [
                [6.4, 7.04, 7.68, 8.32, 8.96, 9.6, 10.24, 10.88, 11.52, 12.8, '13.44?', '14.08?', '14.72?', 16],
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, '2.7?', '2.9?', '3?', 3.2]
              ],
              type: ['supported', 'feel']
            },
            skill: {
              ID: 'cheerfulBoost',
              name: 'チアフルブースト',
              AP: 2,
              detail: [
                [40, 44, 48, 52, 56, 60, 64, 68, 72, 76, '?', '?', '?', 100],
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 22.8, '25.2?', '26.4?', '27.6?', 30]
              ],
              type: ['cheerful', 'boost']
            },
            characteristic: {
              name: 'インタープリテーション & チェイン：さやか',
              detail: 'このスキルのムードによる効果増加量を上昇させる。さらにさやかのスキルを使用した後、ドローされる確率が増加する。',
              type: ['interPretation', 'chain', 'sayaka']
            }
          },
          '約束の舞踏会': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 2930,
              cool: 230,
              mental: 253,
              BP: 100
            },
            specialAppeal: {
              ID: 'allMightHealing',
              name: 'オールマイトヒーリング',
              AP: 8,
              detail: [
                [30, 33, 36, 39, 42, 45, 48, 51, 54, 60, 63, 66, 69, 75]
              ],
              type: ['allMight', 'healing']
            },
            skill: {
              ID: 'aggressiveAttract_stage',
              name: 'アグレッシブアトラクト',
              AP: 3,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ],
              type: ['aggressive', 'attract']
            },
            characteristic: {
              name: 'ドロー：メンタルリカバー & アンコール',
              detail: 'ドローした時、メンタルを最大値の5%回復させる。さらにスキル使用時、山札に戻る。',
              type: ['draw', 'mentalRecover', 'encore']
            }
          },
          'アイデンティティ': {
            styleType: 'performer',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 2230,
              cool: 1230,
              mental: 203,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, '6.7?', '7?', '7.3?', 8]
              ],
              type: ['regain', 'attract']
            },
            skill: {
              ID: 'cheerfulHeart_APreduce',
              name: 'チアフルハート',
              AP: 4,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, '8?', '9?', '9?', 10]
              ],
              type: ['cheerful', 'heart']
            },
            characteristic: {
              name: 'オーバーセクション：マチュレーション',
              detail: '手札にある状態でセクションが変わるたび、スキルの効果量が増加する。',
              type: ['overSection', 'maturation']
            }
          },
          'Au Bord du Lac': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1030,
              pure: 2230,
              cool: 1930,
              mental: 213,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, '8.8?', '9.2?', '10?']
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'endurance_mentalVoltage',
              name: 'エンデュランス',
              AP: 5,
              detail: [
                [5.2, 5.72, 6.24, 6.76, 7.28, 7.8, 8.32, 8.84, 9.36, 10.4, 10.92, '11.44?', '11.96?', '13?'],
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, 11, '12?', '13?', '15?']
              ],
              type: ['endurance']
            },
            characteristic: {
              name: 'フェイバリット : 1',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          '夏めきペイン': {
            styleType: 'cheerLeader',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2430,
              pure: 1380,
              cool: 1180,
              mental: 233,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 7,
              detail: [
                [7, 8, 8, 9, 10, 11, 11, 12, 13, 14, 15, '16?', '17?', 18]
              ],
              type: ['heartCaptcha']
            },
            skill: {
              ID: 'protectFeel_loveAttract',
              name: 'プロテクトフィール',
              AP: 10,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ],
              type: ['protect', 'feel']
            },
            characteristic: {
              name: 'APレデュース：メンタルリカバー',
              detail: '手札にあるメイン効果にメンタル回復効果を持つスキル1枚につき、手札のこのスキルの消費AP-3。',
              type: ['APreduce', 'mentalRecover']
            }
          },
          'Dream Believers': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 2230,
              cool: 1430,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 8,
              detail: [
                [16.8, 18.48, 20.16, 21.84, 23.52, 25.2, 26.88, 28.56, 30.24, 33.6, '35.7?', '37.8?', '39.9?', 42]
              ],
              type: ['mentalRecover']
            },
            skill: {
              ID: 'supportedFeel',
              name: 'サポーテッドフィール',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [1.6, 1.8, 1.9, 2.1, 2.2, 2.4, 2.6, 2.7, 2.9, 3.2, '3.4?', '3.5?', '?', 4]
              ],
              type: ['supported', 'feel']
            },
            characteristic: {
              name: 'APレデュース：ローメンタル',
              detail: 'メンタルが30％以下の時にドローすると、消費APを-2する。',
              type: ['APreduce', 'lowMeental']
            }
          }
        },
        SR: {
          'コットン=ユートピア': {
            styleType: 'cheerLeader',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1230,
              pure: 2230,
              cool: 1630,
              mental: 223,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ],
              type: ['mentalRecover']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ],
              type: ['mentalRecover']
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース & マチュレーション',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費APを-3し、スキルの効果値が増加する。',
              type: ['overSection', 'APreduce', 'maturation']
            }
          },
          'Trick & Cute': {
            styleType: 'performer',
            mood: 'melow',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 1330,
              cool: 2130,
              mental: 193,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartAttraction',
              name: 'ハートアトラクション',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, '?', '?', '?', 11],
                [1.6, 1.8, 1.9, 2.1, 2.2, 2.4, 2.6, 2.7, 2.9, 3.2, '3.4?', '3.5?', '?', 4]
              ],
              type: ['heartAttraction']
            },
            skill: {
              ID: 'calmHeart',
              name: 'カームハート',
              AP: 3,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, '?', '?', '?', 10]
              ],
              type: ['calmHeart']
            },
            characteristic: {
              name: 'ドロー：カームダウン',
              detail: 'ドローした時、ボルテージPt.を-20する。',
              type: ['draw', 'calmDown']
            }
          },
          '宇宙演舞☆うさぴょん': {
            styleType: 'trickStar',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 2030,
              cool: 1530,
              mental: 213,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshMind',
              name: 'リフレッシュマインド',
              AP: 6,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, '16.8?', '17.6?', '18.4?', 20]
              ],
              type: ['refresh', 'mind']
            },
            skill: {
              ID: 'extensionsAttract_section',
              name: 'エクステアトラクト',
              AP: 3,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, '2.7?', '2.8?', '3?', 3.2]
              ],
              type: ['extensions', 'attract']
            },
            characteristic: {
              name: 'チェイン：花帆',
              detail: '花帆のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'kaho']
            }
          },
          'ゆのくにガールズ！': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2030,
              pure: 1630,
              cool: 1480,
              mental: 218,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, '8.4?', '8.8?', '9.2?', 10]
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, '21?', '22?', '23?', 25]
              ],
              type: ['mentalRecover']
            },
            characteristic: {
              name: 'APレデュース：瑠璃乃',
              detail: '瑠璃乃のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'rurino']
            }
          },
          'yours ever': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2230,
              pure: 1930,
              cool: 1330,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'healingHeart',
              name: 'ヒーリングハート',
              AP: 6,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ],
              type: ['mentalRecover', 'heartCaptcha']
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4]
              ],
              type: ['loveAttract']
            },
            characteristic: {
              name: 'APレデュース：瑠璃乃',
              detail: '瑠璃乃のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'rurino']
            }
          },
          '世界中を夢中に': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 2130,
              cool: 1230,
              mental: 213,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.6?', '30?']
              ],
              type: ['loveAttract']
            },
            skill: {
              ID: 'cheerfulInitiate',
              name: 'チアフルイニシエイト',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, '29?', '30?', 32],
                [1.6, 1.76, 1.92, 2.08, 2.24, 2.4, 2.56, 2.72, 2.88, 3.2, 3.36, '3.48?', '3.64?', 4]
              ],
              type: ['cheerful', 'initiate']
            },
            characteristic: {
              name: 'チェイン：瑠璃乃',
              detail: '瑠璃乃のスキルを使用した後、ドローさせる確率が増加する。',
              type: ['chain', 'rurino']
            }
          },
          '@いっつぁどりーみんわーるど！': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2130,
              pure: 1930,
              cool: 1030,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 7,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, '25.2?', '26.4?', '27.6?', '30?']
              ],
              type: ['mentalRecover']
            },
            skill: {
              ID: 'mentalProtect',
              name: 'メンタルプロテクト',
              AP: 4,
              detail: [
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, '10.8?', '10.56?', '11.04?', '12?'],
                [2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 4, '4.2?', '4.4?', '4.6?', '5?']
              ],
              type: ['mental', 'protect']
            },
            characteristic: {
              name: 'チェイン：瑠璃乃',
              detail: '瑠璃乃のスキルを使用した後、ドローさせる確率が増加する。',
              type: ['chain', 'rurino']
            }
          },
          'M\'s One Day': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 2030,
              cool: 1630,
              mental: 143,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, '16.8?', '17.6?', '18.4?', '20?']
              ],
              type: ['mentalRecover']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, '16.8?', '17.6?', '18.4?', '20?']
              ],
              type: ['mentalRecover']
            },
            characteristic: {
              name: 'フェイバリット：3',
              detail: 'フィーバーセクションを除いた3セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          }
        },
        R: {
          'オーロラスカイ': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1125,
              pure: 1525,
              cool: 925,
              mental: 133,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ],
              type: ['mentalRecover']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, 10.08, 10.56, 11.04, 12]
              ],
              type: ['mentalRecover']
            }
          },
          '華紺青': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1125,
              pure: 1325,
              cool: 1125,
              mental: 123,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 8,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ],
              type: ['mentalRecover']
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ],
              type: ['mentalRecover']
            }
          }
        }
      }
    },
    musicList: {
      'Dream Believers(4人Ver.)': {
        musicData: {
          singer: '日野下 花帆、村野 さやか、乙宗 梢、夕霧 綴理',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: 'デビューミニアルバム',
          BPM: 162,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri']
      },
      '永遠のEuphoria(4人Ver.)': {
        musicData: {
          singer: '日野下 花帆、村野 さやか、乙宗 梢、夕霧 綴理',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: 'デビューミニアルバム',
          BPM: 162,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri']
      },
      'On your mark': {
        musicData: {
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: 'デビューミニアルバム',
          BPM: 154,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      'DEEPNESS': {
        musicData: {
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 8,
            date: 9
          },
          numbering: 'スリーズブーケ/DOLLCHESTRA 2ndシングル',
          BPM: 136,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri']
      },
      '永遠のEuphoria': {
        musicData: {
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: 'デビューミニアルバム',
          BPM: 162,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      '夏めきペイン': {
        musicData: {
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: 188,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      'Dream Believers': {
        musicData: {
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: 'デビューミニアルバム',
          BPM: 162,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      'Legato': {
        musicData: {
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: 160,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      'Trick & Cute': {
        musicData: {
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2024,
            month: 1,
            date: 17
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stシングル',
          BPM: 244,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      '明日の空の僕たちへ': {
        musicData: {
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: 164,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      '水彩世界': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: 'デビューミニアルバム',
          BPM: '80～160',
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue']
      },
      'Reflection in the mirror': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 4,
            date: 26
          },
          numbering: 'スリーズブーケ 1stシングル',
          BPM: 175,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue']
      },
      'フォーチュンムービー': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 4,
            date: 26
          },
          numbering: 'スリーズブーケ 1stシングル',
          BPM: 220,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'kozue']
      },
      'Mix shake！！': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 4,
            date: 26
          },
          numbering: 'スリーズブーケ 1stシングル',
          BPM: 174,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'kozue']
      },
      '謳歌爛漫': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 6,
            date: 14
          },
          numbering: 'スリーズブーケ&DOLLCHESTRA ユニットスプリットシングル',
          BPM: 104,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'kozue']
      },
      'Holiday∞Holiday': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 6,
            date: 14
          },
          numbering: 'スリーズブーケ&DOLLCHESTRA ユニットスプリットシングル',
          BPM: 135,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'kozue']
      },
      '眩耀夜行': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 8,
            date: 9
          },
          numbering: 'スリーズブーケ 2ndシングル',
          BPM: 158,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'kozue']
      },
      'Kawaii no susume': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 8,
            date: 9
          },
          numbering: 'スリーズブーケ 2ndシングル',
          BPM: 132,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'kozue']
      },
      '残陽': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '1stアルバム',
          BPM: 118,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'kozue']
      },
      '素顔のピクセル': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 15
          },
          numbering: 'スリーズブーケ 3rdシングル',
          BPM: 138,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue']
      },
      '千変万華': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 15
          },
          numbering: 'スリーズブーケ 3rdシングル',
          BPM: 140,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'kozue']
      },
      'AWOKE': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: 'デビューミニアルバム',
          BPM: 150,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'Sparkly Spot': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 4,
            date: 26
          },
          numbering: 'DOLLCHESTRA 1stシングル',
          BPM: 176,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'ツキマカセ': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 4,
            date: 26
          },
          numbering: 'DOLLCHESTRA 1stシングル',
          BPM: 220,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      '希望的プリズム': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 4,
            date: 26
          },
          numbering: 'DOLLCHESTRA 1stシングル',
          BPM: 131,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'スケイプゴート': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 6,
            date: 14
          },
          numbering: 'スリーズブーケ&DOLLCHESTRA ユニットスプリットシングル',
          BPM: 97,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'Tragic Drops': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 6,
            date: 14
          },
          numbering: 'スリーズブーケ&DOLLCHESTRA ユニットスプリットシングル',
          BPM: 110,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'Mirage Voyage': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 8,
            date: 9
          },
          numbering: 'DOLLCHESTRA 2ndシングル',
          BPM: 130,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'ジブンダイアリー': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 8,
            date: 9
          },
          numbering: 'DOLLCHESTRA 2ndシングル',
          BPM: 102,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'パラレルダンサー': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: 185,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'Take It Over': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 22
          },
          numbering: 'DOLLCHESTRA 3rdシングル',
          BPM: 150,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'KNOT': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 22
          },
          numbering: 'DOLLCHESTRA 3rdシングル',
          BPM: 175,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      '青春の輪郭': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: 176,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'ド！ド！ド！': {
        musicData: {
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: 'デビューミニアルバム',
          BPM: 197,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['rurino', 'megumi']
      },
      'ハクチューアラモード': {
        musicData: {
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: 258,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['rurino', 'megumi']
      },
      'ココン東西': {
        musicData: {
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: 160,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['rurino', 'megumi']
      },
      'アイデンティティ': {
        musicData: {
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 29
          },
          numbering: 'みらくらぱーく！ 1stシングル',
          BPM: 157,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['rurino', 'megumi']
      },
      'ノンフィクションヒーローショー': {
        musicData: {
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 29
          },
          numbering: 'みらくらぱーく！ 1stシングル',
          BPM: 180,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['rurino', 'megumi']
      },
      'Runway': {
        musicData: {
          singer: '村野さやか',
          releaseDate: {
            year: 2000,
            month: 1,
            date: 1
          },
          numbering: '???',
          BPM: 74,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['sayaka']
      },
      '僕らのLIVE 君とのLIFE': {
        musicData: {
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: 'デビューミニアルバム',
          BPM: 210,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi']
      },
      '君のこころは輝いてるかい？': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 183,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'kozue']
      },
      'TOKIMEKI Runners': {
        musicData: {
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 180,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['rurino', 'megumi']
      },
      '始まりは君の空': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 164,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'ビバハピ': {
        musicData: {
          singer: '日野下 花帆',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 148,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho']
      },
      '深愛': {
        musicData: {
          singer: '乙宗 梢',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 133,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kozue']
      },
      'Preserved Roses': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 167,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'kozue']
      },
      'そばかす': {
        musicData: {
          singer: '村野 さやか',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 170,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka']
      },
      'ロストワンの号哭': {
        musicData: {
          singer: '夕霧 綴理',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 162,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['tsuzuri']
      },
      '名前のない怪物': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 180,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      '狙いうち': {
        musicData: {
          singer: '大沢 瑠璃乃',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 143,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['rurino']
      },
      '♡桃色片想い♡': {
        musicData: {
          singer: '藤島 慈',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 154,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['megumi']
      },
      'いーあるふぁんくらぶ': {
        musicData: {
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 145,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['rurino', 'megumi']
      },
      'ハッピーシンセサイザ': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: 'デビューミニアルバム',
          BPM: 127,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue']
      },
      'ヴィラン': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 102,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      '心予報': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 143,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue']
      },
      '威風堂々': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 130,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      '強風オールバック': {
        musicData: {
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '',
          BPM: 153,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['rurino', 'megumi']
      },
      'ダンスロボットダンス': {
        musicData: {
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2000,
            month: 1,
            date: 1
          },
          numbering: '',
          BPM: 190,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['rurino', 'megumi']
      }
    },
  }),
  getters: {
    setSelectCard() {
      console.log(this.card[this.abc.name][this.abc.style])
    },
    /*makeCardIllust(store) {
      return (cardName) => {};
    }, */
    makeSkillText() {
      return (target) => {
        let result = '';
        const cardData = this.card[this.settingCard.name][this.settingCard.rare][this.settingCard.card];
        const skillData = cardData[target];
        const skillTextList = this.skillList[skillData.name][skillData.ID];

        for (let i = 0; i < skillTextList.length; i++) {
          result += skillTextList[i];
          
          if (i < skillTextList.length - 1) {
            result += skillData.detail[i][cardData.fluctuationStatus[target === 'specialAppeal' ? 'SALevel' : 'SLevel'] - 1];
          }
        }

        return result;
      }
    },
    setMaxTrainingLevel() {
      return this.settingCard.rare === 'DR' ? 1 : 2;
    },
    changeMaxCardLevel() {
      return this.maxCardLevel[this.settingCard.rare][this.card[this.settingCard.name][this.settingCard.rare][this.settingCard.card].fluctuationStatus.trainingLevel];
    },
    changeSkillLevel() {
      return this.card[this.settingCard.name][this.settingCard.rare][this.settingCard.card].fluctuationStatus.releaseLevel + 9;
    },
    setMusicLevel() {
      for (const musicTitle in this.musicList) {
        this.localStorageData.musicData.musicLevel[musicTitle] = this.musicList[musicTitle].level;
      }

      localStorage.llllMgr_musicData = JSON.stringify(this.localStorageData.musicData);
    },
    makeTotalMastaryLv() {
      return (memberName) => {
        let result = 0;
        const bonusSkill = {
          'ビートハートアップ': 0,
          'ボルテージアップ': 0,
          'メンタルリカバー': 0,
          'LOVEボーナス': 0
        };

        for (const musicTitle of this.memberData.centerList[memberName].centerMusic) {
          result += this.musicList[musicTitle].level;
          bonusSkill[this.musicList[musicTitle].bonusSkill] += Math.floor(this.musicList[musicTitle].level / 10);
        }

        for (const bonusSkillName in bonusSkill) {
          this.memberData.centerList[memberName].bonusSkill[bonusSkillName] = bonusSkill[bonusSkillName];
        }

        return result;
      }
    },
  },
  actions: {
    makeTotalSkillLv(memberName) {
      let result = 0;
      
      for (const musicTitle of this.memberData.centerList[memberName].centerMusic) {
        result += this.musicList[musicTitle].level;
      }

      return result;
    },
    init() {
      for (const name in this.charactorName) {
        for (const rare of this.rarity) {
          for (const cardName in this.card[name][rare]) {
            this.card[name][rare][cardName].fluctuationStatus = {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            };
          }
        }
      }
      this.getLocalStorage();
    },
    setLocalStorage(setLocalStorageName, value) {
      localStorage[setLocalStorageName] = JSON.stringify(value);
      console.log(localStorage[setLocalStorageName]);
    },
    getLocalStorage() {
      if (localStorage.llllMgr_musicData === undefined) {
        for (const musicTitle in this.musicList) {
          this.localStorageData.musicData.musicLevel[musicTitle] = this.musicList[musicTitle].level;
        }

        localStorage.llllMgr_musicData = JSON.stringify(this.localStorageData.musicData);
      } else {
        this.localStorageData.musicData = JSON.parse(localStorage.llllMgr_musicData);

        for (const musicTitle in this.musicList) {
          this.musicList[musicTitle].level = this.localStorageData.musicData.musicLevel[musicTitle];
        }
      }
      
      for (const musicTitle in this.musicList) {
        this.memberData.centerList[this.musicList[musicTitle].center].centerMusic.push(musicTitle);
      }
    },
    showModalEvent(showModalName) {
      this.switchDialog(showModalName);
      this.showModalName = showModalName;
    },
    setLevel(a, e) {
      this.card[this.settingCard.name][this.settingCard.rare][this.settingCard.card].fluctuationStatus[a] = e.target.value;
    },
    cardSelect(charactorName, rare, selectedCard) {
      this.settingCard.rare = rare;
      this.settingCard.name = charactorName;
      this.settingCard.card = selectedCard;
    },
    conversion(name) {
      if (/!/.test(name)) {
        return name.replace(/!/g, '！');
      } else {
        return name;
      }
    },
    openCard(name, style) {
      this.abc.name = name;
      this.abc.style = style;
    },
    aaa() {
      for (const rare of this.rarity) {
        if (this.selectCard[this.abc.name][this.abc.style] in this.card[this.abc.name][rare]) {
          this.selectCard[this.abc.name][this.abc.style] = this.card[this.abc.name][rare][this.selectCard[this.abc.name][this.abc.style]];
          break;
        }
      }
    },
    searchRarity(charactorName, cardName) {
      let result = 'default';
      for (const rare of this.rarity) {
        if (cardName in this.card[charactorName][rare]) {
          result = rare;
          break;
        }
      }

      return result;
    },
    searchSelectCard(name, style) {
      return this.selectCard[name][style];
    },
    cardDataSet() {},
    submitCardData(submitData) {
      for (const i in submitData) {
        this.submitData[i] = submitData[i];
      }
    },
    switchDialog(switchFlg) {
      this.dialog = !!switchFlg;
    },
    selectMusic(a) {
      this.selectMusicTitle = a;
    },
    closeModal() {
      this.showModalName = false;
      // this.cardSelect(false, false, false);
      // this.submitData = {};
    },
    makeReleaseDate() {
      const date = {
        year: this.musicList[this.selectMusicTitle].musicData.releaseDate.year,
        month: this.musicList[this.selectMusicTitle].musicData.releaseDate.month,
        date: this.musicList[this.selectMusicTitle].musicData.releaseDate.date
      };
      return date.year + '年' + date.month + '月' + date.date + '日(' + (['日', '月', '火', '水', '木', '金', '土'][new Date(date.year, date.month - 1, date.date).getDay()]) + ')';
    },
    valueChange(target, val) {
      if (target === 'musicLevel') {
        this.musicList[this.selectMusicTitle].level = val;
      } else {
        this.card[this.settingCard.name][this.settingCard.rare][this.settingCard.card].fluctuationStatus[target] = val;
      }
    },
    setCardIllust() {
      //return this.makeCardIllust(cardName);
      return this.settingCard.card + this.charactorName[this.settingCard.name].last + '_覚醒';
    },
    setTotalSkillLv(memberName) {
      return this.makeTotalSkillLv(memberName);
    },
    makeMusicList(selectSkillList) {
      const list = {};
      let targetMusicList;

      for (const musicTitle in this.musicList) {
        targetMusicList = this.musicList[musicTitle];
        if (typeof targetMusicList.level !== 'number') {
          targetMusicList.level = 0;
        }

        for (const skillName of selectSkillList) {
          if (targetMusicList.bonusSkill === skillName) {
            list[musicTitle] = targetMusicList;
          }
        }
      }

      return list;
    },
    cardParam(style) {
      const selectCard = this.card[this.settingCard.name][this.settingCard.rare][this.settingCard.card];
      return selectCard.uniqueStatus[style] + (selectCard.fluctuationStatus.cardLevel - 1) * (this.settingCard.rare === 'R' ? 25 : 30);
    },
    mentalCul() {
      const selectCard = this.card[this.settingCard.name][this.settingCard.rare][this.settingCard.card];

      if (this.settingCard.rare !== 'R') {
        return selectCard.uniqueStatus.mental + (selectCard.fluctuationStatus.cardLevel - 1) * 3;
      }

      return selectCard.uniqueStatus.mental + Math.ceil((selectCard.fluctuationStatus.cardLevel - 1) / 2) * 2  + Math.floor((selectCard.fluctuationStatus.cardLevel - 1) / 2) * 3;
    },
    setOutputCardList() {
      let result = [];

      for (const memberName in this.card) {
        if (memberName !== 'default') {
          for (const rare in this.card[memberName]) {
            for (const cardName in this.card[memberName][rare]) {
              if (cardName !== 'default') {
                this.card[memberName][rare][cardName].cardName = cardName;
                this.card[memberName][rare][cardName].rare = rare;
                this.card[memberName][rare][cardName].memberName = memberName;
                result.push(this.card[memberName][rare][cardName]);
              }
            }
          }
        }
      }

      for (const searchKey in this.search.cardList) {
        if (result.length === 0) {
          break;
        }

        const filterList = this.search.cardList[searchKey];
        result = result.filter((cardData) => {
          if (/^cardLevel|SALevel|SLevel|releaseLevel$/.test(searchKey)) {
            return filterList[0] <= cardData.fluctuationStatus[searchKey] && cardData.fluctuationStatus[searchKey] <= filterList[1];
          } else if (searchKey === 'favorite') {
            return true;
          } else {
            return filterList.some((val) => {
              return cardData[searchKey] === val;
            });
          }
        });
      }

      for (const searchKey in this.search.skillList) {
        if (result.length === 0) {
          break;
        }

        const filterList = this.search.skillList[searchKey];

        if (filterList.length > 0) {
          result = result.filter((cardData) => {
            return filterList.some((val) => {
              return cardData[searchKey].name === val;
            });
          });
        }
      }

      this.outputCardList = result;
    }
  }
});