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
      }
    },
    saveBonusSkill: ['ビートハートアップ', 'ボルテージアップ', 'メンタルリカバー', 'LOVEボーナス'],
    skillList: {
      DR: {
        'ハートアトラクション': [
          '',
          '個のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
          '%する。'
        ],
      },
      UR: {
        'ハートキャプチャ': [
          'ビートハート',
          '回分のスキルハートを獲得する。'
        ],
        'ハートアトラクション': [
          'ビートハート',
          '回分のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
          '%する。'
        ],
        'ハートブースト': [
          '次に使用するスキルハート獲得効果による獲得数を+',
          '%する。'
        ],
        'ボルテージゲイン': [
          'ボルテージPt.を+',
          'する。'
        ],
        'チアフルリカバー': [
          'メンタルを最大値の',
          '%回復させる。さらにメンタルが75%以上のとき、APを2回復する。'
        ],
        'クイックフォーム': [
          'このステージ中、手札の上限枚数を1枚減少する。さらにこのステージ中、AP回復速度を+',
          '%する。'
        ],
        'ボルテックスアトラクション': [
          'ビートハート',
          '回分のスキルハートを獲得し、このステージ中、獲得するLOVEを+',
          '%する。さらにボルテージPt.を+',
          'する。'
        ],
        'ボルテックスシフト': [
          'このステージ中、ボルテージPt.を獲得する効果が発動した時、代わりに獲得するボルテージPt.の',
          'の個数のスキルハートを獲得する。'
        ],
        'オールマイトヒーリング': [
          'このステージ中、メンタルが回復した時、回復量の',
          '%の個数のスキルハートを獲得する。'
        ],
        'アグレッシブアトラクト': [
          'このステージ中、獲得するLOVEを+',
          '%する。さらにメンタルを最大値の',
          '%減少させる。'
        ],
      },
      SR: {
        'ハートキャプチャ': [
          'ビートハート',
          '回分のスキルハートを獲得する。'
        ],
        'ハートアトラクション': [
          'ビートハート',
          '回分のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
          '%する。'
        ],
        'ハートブースト': [
          '次に使用するスキルハート獲得効果による獲得数を+',
          '%する。'
        ],
        'ラブアトラクト': [
          'このセクション中、獲得するLOVEを+',
          '%する。'
        ],
        'ボルテージゲイン': [
          'ボルテージPt.を+',
          'する。'
        ],
        'チアフルリカバー': [
          'メンタルを最大値の',
          '%回復させる。さらにメンタルが75%以上のとき、APを2回復する。'
        ],
        'チアフルヒーリング': [
          'メンタルを最大値の',
          '%回復させる。さらにメンタルが75%以上のとき、ビートハート',
          '個分のスキルハートを獲得する。'
        ],
      },
      R: {
        'ハートキャプチャ': [
          'ビートハート',
          '回分のスキルハートを獲得する。'
        ],
        'ハートアトラクション': [
          'ビートハート',
          '回分のスキルハートを獲得する。さらにこのセクション中、獲得するLOVEを+',
          '%する。'
        ],
        'ハートブースト': [
          '次に使用するスキルハート獲得効果による獲得数を+',
          '%する。'
        ],
        'ボルテージゲイン': [
          'ボルテージPt.を+',
          'する。'
        ],
        'チアフルリカバー': [
          'メンタルを最大値の',
          '%回復させる。さらにメンタルが75%以上のとき、APを2回復する。'
        ],
      }
    },
    card: {
      'default': {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            fluctuationStatus: {
              possession: false,
              cardLevel: 1,
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
              possession: false,
              cardLevel: 1,
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
              possession: false,
              cardLevel: 1,
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
              name: 'ハートアトラクション',
              AP: 8,
              level: 1,
              detail: [
                [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.5, 22, 23.5, 25]
              ],
              type: ['heartAtraction', 'heartChaptha', 'loveAtract']
            },
            skill: {
              name: 'ハートアトラクション',
              AP: 5,
              level: 1,
              detail: [
                [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.9, 7.5, 8, 8.5, 9, 9.5, 10]
              ],
              type: ['heartAtraction', 'heartChaptha', 'loveAtract']
            },
            characteristic: {
              name: 'フェイバリット : フィーバー',
              detail: 'フィーバーセクションでドローされる確率が大幅に増加する。',
              type: ['favorite', 'fever']
            }
          }
        },
        UR: {
          'ゆのくにガールズ！': {
            styleType: 'moodMaker',
            mood: 'neutral',
            fluctuationStatus: {
              possession: true,
              cardLevel: 1,
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
              name: 'チアフルリカバー',
              AP: 6,
              level: 1,
              detail: [
                [16.8, 18.48, 20.16, 21.84, 23.52, 25.2, 26.88, 28.56, 30.24, 33.6, 35.7, 37.8, 39.9, 42]
              ],
              type: ['mentalRecovery', 'APRecovery']
            },
            skill: {
              name: 'ハートブースト',
              AP: 5,
              level: 1,
              detail: [
                [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 102.5, 110, 118.5, 125]
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
              possession: true,
              cardLevel: 1,
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
              name: 'ハートアトラクション',
              AP: 6,
              level: 1,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 12, 13, 14],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 11.4, 12, 12.6, 13.2, 13.8],
              ],
              type: ['voltage']
            },
            skill: {
              name: 'ハートキャプチャ',
              AP: 5,
              level: 1,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, 11, 12, 13, 14]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'オーバーセクション : ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+15%する。',
              type: ['oversection', 'heartCaptcha']
            }
          },
          'SPLASH!!!!': {
            styleType: 'performer',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '眩耀夜行': {
            styleType: 'performer',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'ペンギンアイス': {
            styleType: 'performer',
            mood: 'happy',
            fluctuationStatus: {
              possession: true,
              cardLevel: 1,
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
              name: 'ボルテージゲイン',
              AP: 5,
              level: 1,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, 11, 12, 13, 14]
              ],
              type: ['voltage']
            },
            skill: {
              name: 'ハートキャプチャ',
              AP: 6,
              level: 1,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, 11, 12, 13, 14]
              ],
              type: ['heartCaptcha']
            },
            characteristic: {
              name: 'オーバーセクション : ハートキャプチャ',
              detail: '手札にある状態でセクションが変わるたび、ビートハート6回分のスキルハートを獲得する。',
              type: ['oversection', 'heartCaptcha']
            }
          },
          'フォーチュンムービー': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Holiday∞Holiday': {
            styleType: 'performer',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Rose Garden': {
            styleType: '',
            mood: '',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '薫風の調べ': {
            styleType: '',
            mood: '',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '春色ニューデイズ': {
            styleType: 'performer',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Dream Believers': {
            styleType: 'performer',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
        },
        SR: {
          '素顔のピクセル': {
            styleType: 'cheerLeader',
            mood: 'happy',
            fluctuationStatus: {
              possession: false,
              cardLevel: 1,
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
              name: 'ラブアトラクト',
              AP: 7,
              level: 1,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, '?', '?', '?', '?']
              ],
              type: ['loveActract']
            },
            skill: {
              name: 'チアフルヒーリング',
              AP: 5,
              level: 1,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 15.2, 16, 16.8, 17.6, 18.4, 19.2],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, '?', '?' ,'?', '?']
              ],
              type: ['']
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
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'はじける☆オレンジソーダ': {
            styleType: 'performer',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '朝顔令嬢': {
            styleType: 'moodMaker',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '金魚◎花火': {
            styleType: 'performer',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'DEEPNESS': {
            styleType: 'performer',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '雨と紫陽花に唄へば': {
            styleType: 'performer',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'アメアガリストリート': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'チェリー♫ピクニック': {
            styleType: 'performer',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '謳歌爛漫': {
            styleType: '',
            mood: '',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Reflection in the mirror': {
            styleType: 'performer',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '水彩世界': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        R: {
          'オーロラスカイ': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '華紺青': {
            styleType: 'performer',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        }
      },
      sayaka: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            fluctuationStatus: {
              possession: false,
              cardLevel: 1,
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
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        UR: {
          'SPLASH!!!!': {
            styleType: 'moodMaker',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'ドルフィン〰ビーチ': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Mirage Voyage': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '朝顔令嬢': {
            styleType: 'performer',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '雨と紫陽花に唄へば': {
            styleType: 'performer',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'ツキマカセ': {
            styleType: 'performer',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Rose Garden': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '薫風の調べ': {
            styleType: '',
            mood: '',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'スケイプゴート': {
            styleType: '',
            mood: '',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Dream Believers': {
            styleType: '',
            mood: '',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        SR: {
          '夏めきペイン': {
            styleType: 'cheerLeader',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'はじける☆ブルーソーダ': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '金魚◎花火': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'ペンギンアイス': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'DEEPNESS': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'アメアガリストリート': {
            styleType: 'cheerLeader',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Tragic Drops': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'チェリー♫ピクニック': {
            styleType: '',
            mood: '',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '春色ニューデイズ': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'AWOKE': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Sparkly Spot': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        R: {
          'オーロラスカイ': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '華紺青': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
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
              cardLevel: 1,
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
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        UR: {
          '夏めきペイン': {
            styleType: 'trickStar',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Dream Believers': {
            styleType: 'trickStar',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        SR: {
          'にゅーかまー！': {
            styleType: 'trickStar',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '@いっつぁどりーみんわーるど！': {
            styleType: 'trickStar',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'R\'s One Day': {
            styleType: 'trickStar',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        R: {
          'オーロラスカイ': {
            styleType: 'trickStar',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '華紺青': {
            styleType: 'performer',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
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
              cardLevel: 1,
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
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        UR: {
          '奇跡の舞踏会': {
            styleType: 'moodMaker',
            mood: 'happy',
            fluctuationStatus: {
              possession: false,
              cardLevel: 1,
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
              name: 'クイックフォーム',
              AP: 5,
              level: 1,
              detail: [
                [14, 15.4, 16.8, 18.2, 19.6, 21, 22.4, 23.8, 25.2, 28, '??', '??', '??', 35]
              ],
              type: ['boltexShift']
            },
            skill: {
              name: 'ボルテックスアトラクション',
              AP: 7,
              level: 1,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, '??', '??', '??', 12],
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, '??', '??', '??', 4.8],
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, '??', '??', '??', 9]
              ],
              type: ['vortex', 'atraction']
            },
            characteristic: {
              name: 'オーバーセクション : リシャッフル',
              detail: '手札にある状態でセクションが変わるたび、手札を全て捨てて、デッキから手札上限までスキルを引く。',
              type: ['overSection', 'reShuffle']
            }
          },
          'はじける☆メロンソーダ': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'DEEPNESS': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '金魚◎花火': {
            styleType: 'cheerLeader',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'フォーチュンムービー': {
            styleType: 'cheerLeader',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '雨と紫陽花に唄へば': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Holiday∞Holiday': {
            styleType: 'moodMaker',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'チェリー♫ピクニック': {
            styleType: '',
            mood: '',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Reflection in the mirror': {
            styleType: '',
            mood: '',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '春色ニューデイズ': {
            styleType: '',
            mood: '',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Dream Believers': {
            styleType: '',
            mood: '',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        SR: {
          '夏めきペイン': {
            styleType: 'cheerLeader',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'SPLASH!!!!': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '眩耀夜行': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '朝顔令嬢': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'ペンギンアイス': {
            styleType: 'performer',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'アメアガリストリート': {
            styleType: 'cheerLeader',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Rose Garden': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '薫風の調べ': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '謳歌爛漫': {
            styleType: 'moodMaker',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '水彩世界': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Grace Phrase': {
            styleType: 'cheerLeader',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        R: {
          'オーロラスカイ': {
            styleType: 'cheerLeader',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '華紺青': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
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
              cardLevel: 1,
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
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        UR: {
          '革命の舞踏会': {
            styleType: 'moodMaker',
            mood: 'melow',
            fluctuationStatus: {
              possession: false,
              cardLevel: 1,
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
              name: 'ボルテックスシフト',
              AP: 3,
              level: 1,
              detail: [
                [48, 52.8, 57.6, 62.4, 67.2, 72, 76.8, 81.6, 86.4, 96, '??', '??', '??', 120]
              ],
              type: ['boltexShift']
            },
            skill: {
              name: 'ボルテージゲイン',
              AP: 7,
              level: 1,
              detail: [
                [29, 32, 35, 38, 41, 44, 46, 49, 52, 58, '??', '??', '??', 73]
              ],
              type: ['voltageGain']
            },
            characteristic: {
              name: 'APレデュース : ボルテージ',
              detail: '現在のボルテージLvに応じてスキルの消費APダウン',
              type: ['APreduce', 'voltage']
            }
          },
          'はじける☆スイカソーダ': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '金魚◎花火': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '朝顔令嬢': {
            styleType: 'moodMaker',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'ペンギンアイス': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'DEEPNESS': {
            styleType: 'performer',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'ツキマカセ': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'チェリー♫ピクニック': {
            styleType: '',
            mood: '',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'スケイプゴート': {
            styleType: '',
            mood: '',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Dream Believers': {
            styleType: '',
            mood: '',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        SR: {
          '夏めきペイン': {
            styleType: 'performer',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'SPLASH!!!!': {
            styleType: 'moodMaker',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Mirage Voyage': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'アメアガリストリート': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '雨と紫陽花に唄へば': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Tragic Drops': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Rose Garden': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '薫風の調べ': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Sparkly Spot': {
            styleType: 'performer',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '春色ニューデイズ': {
            styleType: 'moodMaker',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'AWOKE': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Vivid Phrase': {
            styleType: 'performer',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        R: {
          'オーロラスカイ': {
            styleType: 'moodMaker',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '華紺青': {
            styleType: 'performer',
            mood: 'melow',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
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
              cardLevel: 1,
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
            rare: 'DR',
            styleType: 'moodMaker',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        UR: {
          '約束の舞踏会': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            fluctuationStatus: {
              possession: false,
              cardLevel: 1,
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
              name: 'オールマイトヒーリング',
              AP: 8,
              level: 1,
              detail: [
                [30, 33, 36, 39, 42, 45, 48, 51, 54, 60, '??', '??', '??', 75]
              ],
              type: ['allMight', 'healing']
            },
            skill: {
              name: 'アグレッシブアトラクト',
              AP: 3,
              level: 1,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, '??', '??', '??', 10]
              ],
              type: ['aggressive', 'attract']
            },
            characteristic: {
              name: 'ドロー : メンタルリカバー & アンコール',
              detail: 'ドローした時、メンタルを最大値の5%回復させる。さらにスキル使用時、山札に戻る。',
              type: ['draw', 'mentalRecover', 'encore']
            }
          },
          '夏めきペイン': {
            styleType: 'cheerLeader',
            mood: 'happy',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'Dream Believers': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        SR: {
          '@いっつぁどりーみんわーるど！': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          'M\'s One Day': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          }
        },
        R: {
          'オーロラスカイ': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
          },
          '華紺青': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            possession: true,
            cardLevel: 1,
            trainingLevel: 0,
            SALevel: 1,
            SLevel: 1,
            releaseLevel: 1
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
          BPM: -1,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'メンタルリカバー',
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
          BPM: -1,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'メンタルリカバー',
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
        bonusSkill: 'ボルテージアップ',
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
          singer: 'みらくらぱーく！',
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
          singer: '村野 さやか',
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
        singingMembers: ['sayaka']
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
    makeSkillText(store) {
      return (target) => {
        let result = '';
        const targetSkill = store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card][target];
        const targetSkillList = store.skillList[store.settingCard.rare][targetSkill.name];

        for (let i = 0; i < targetSkillList.length; i++) {
          result += targetSkillList[i];
          
          if (i < targetSkillList.length - 1) {
            result += targetSkill.detail[i][targetSkill.level - 1];
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
              possession: false,
              cardLevel: 1,
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
    setLocalStorage(setLocalStorageName) {
      localStorage[setLocalStorageName] = '';
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
      } else if (target === 'specialAppeal' || target === 'skill') {
        this.card[this.settingCard.name][this.settingCard.rare][this.settingCard.card][target].level = val;
      } else {
        this.card[this.settingCard.name][this.settingCard.rare][this.settingCard.card].fluctuationStatus[target] = val;
      }
    },
    setCardIllust() {
      //return this.makeCardIllust(cardName);
      return `ペンギンアイス花帆_覚醒後`;
    },
    setSkillText(target) {
      return this.makeSkillText(target);
    },
    setTotalMastaryLv(memberName) {
      return this.makeTotalMastaryLv(memberName);
    },
    setTotalSkillLv(memberName) {
      return this.makeTotalSkillLv(memberName);
    },
    setSaveBonusSkill(skillName) {
      const i = this.saveBonusSkill.indexOf(skillName);
      if (i === -1) {
        this.saveBonusSkill.push(skillName);
      } else {
        const result = [];
        for (const target of this.saveBonusSkill) {
          if (target !== skillName) {
            result.push(target);
          }
        }

        this.saveBonusSkill = result;
      }

      this.makeMusicList();
    },
    makeMusicList() {
      const list = {};

      for (const key in this.musicList) {
        for (const iterator of this.saveBonusSkill) {
          if (this.musicList[key].bonusSkill === iterator) {
            list[key] = this.musicList[key];
          }
        }
      }

      return list;
    },
  }
});