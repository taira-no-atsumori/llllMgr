import { defineStore } from 'pinia';

export const useCardStore = defineStore('cardList', {
  state: () => ({
    card: {
      'default': {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            series: '',
            kana: '',
            gacha: {
              addSeason: '',
              period: ''
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 30,
              pure: 30,
              cool: 30,
              mental: 3,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {}
            },
            skill: {
              name: '',
              AP: 1,
              detail: {}
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
            kana: '',
            gacha: {
              addSeason: '',
              period: ''
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 30,
              pure: 30,
              cool: 30,
              mental: 3,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {}
            },
            skill: {
              name: '',
              AP: 1,
              detail: {}
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        DR: {
          'Ether Aria': {
            styleType: 'performer',
            mood: 'happy',
            series: 'Ether Aria',
            kana: 'えーてるありあ',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 7200,
              pure: 5600,
              cool: 4700,
              mental: 570,
              BP: 100
            },
            specialAppeal: {
              ID: 'overBlooming_section',
              name: 'オーバーブルーミング',
              AP: 11,
              detail: [
                [200, 220, 240, 260, 280, 300, 320, 340, 360, 400, 420, 440, 460, 500],
                [80, 88, 96, 104, 112, 120, 128, 136, 144, 160, 168, 176, 184, 200]
              ]
            },
            skill: {
              ID: 'heartSprinkles',
              name: 'ハートスプリンクル',
              AP: 3,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50],
                [16, 17.6, 19.2, 20.8, 22.4, 24, 25.6, 27.2, 28.8, 32, 33.6, 35.2, 36.8, 40]
              ]
            },
            characteristic: {
              name: 'ドロー：カームダウン & アグレッシブ',
              detail: 'ドローした時、ボルテージPt.を-10する。さらにメンタルを5%減少させる。',
              type: ['draw', 'voltageReduce', 'mentalReduce']
            }
          },
          'Prism Echo': {
            styleType: 'performer',
            mood: 'happy',
            series: 'Prism Echo',
            kana: 'ぷりずむえこー',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 6400,
              pure: 6000,
              cool: 5200,
              mental: 560,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartAttraction_100',
              name: 'ハートアトラクション',
              AP: 8,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'heartAttraction_50',
              name: 'ハートアトラクション',
              AP: 5,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            characteristic: {
              name: 'フェイバリット：フィーバー',
              detail: 'フィーバーセクションでドローされる確率が大幅に増加する。',
              type: ['favorite']
            }
          }
        },
        BR: {
          '17th Birthday': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: 'Birthday',
            kana: 'せぶんてぃーんすばーすでー',
            gacha: {
              addSeason: '2024 BIRTHDAY LIMITED COLLECTION -Kaho-',
              period: 'birthday'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 4800,
              cool: 4800,
              mental: 480,
              BP: 100,
              supportSkill: {
                supportSkillTitle: '17th Birthday',
                supportSkillList: {
                  'ボルテージアップ': {
                    initLevel: 1,
                    levelUp: 4,
                    upLevel: 1
                  },
                  'メンタルリカバー': {
                    initLevel: 1,
                    levelUp: 3,
                    upLevel: 1
                  },
                  'ビートハートアップ': {
                    initLevel: 1,
                    levelUp: 2,
                    upLevel: 1
                  },
                  'LOVEボーナス': {
                    initLevel: 1,
                    levelUp: 5,
                    upLevel: 1
                  }
                }
              }
            },
            specialAppeal: {
              ID: 'wideHeart_stage',
              name: 'ワイドハート',
              AP: 4,
              detail: [
                [12, 14, 15, 16, 17, 18, 20, 21, 22, 26, 25, 27, 28, 30]
              ]
            },
            skill: {
              ID: 'celebration_heart_attract_mental',
              name: 'セレブレイション',
              AP: 3,
              detail: [
                [24, 26.4, 28.8, 31.2, 33.6, 36, 38.4, 40.8, 43.2, 45.6, 48, 50.4, 52.8, 60],
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [24, 26.4, 28.8, 31.2, 33.6, 36, 38.4, 40.8, 43.2, 48, 50.4, 52.8, 55.2, 60]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ブレッシング',
              detail: '手札にある状態でセクションが変わるたび、手札のすべてのスキルの消費AP-1。',
              type: ['overSection', 'APReduce_all']
            }
          }
        },
        UR: {
          '月夜見海月': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '月夜見海月',
            kana: 'つくよみくらげ',
            gacha: {
              addSeason: '2024 AUTUMN LIMITED COLLECTION Vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 5000,
              cool: 5300,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshBubbling',
              name: 'リフレッシュバブリング',
              AP: 7,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ],
              addSkill: [
                {
                  ID: 'bubble_minus3_ceriseBouquet_dressCard',
                  name: 'バブル',
                  AP: 1,
                  detail: [],
                  characteristic: {
                    name: 'ポッピング',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            },
            skill: {
              ID: 'abunDanceBoost_dress_over30',
              name: 'アバンダンスブースト：ドレス',
              AP: 5,
              detail: [
                [45, 49.5, 54, 58.5, 63., 67.5, 72, 76.5, 81, 90, 94.5, 99., 103.5, 112.5],
                [168, 184.8, 201.6, 218.4, 235.2, 252, 268.8, 285.6, 302.4, 336, 352.8, 369.6, 386.4, 420]
              ]
            },
            characteristic: {
              name: 'ドロー：バブリング',
              detail: 'ドローした時、バブルカードを1種類(合計1枚)山札に追加する。',
              type: ['drew', 'addCard'],
              addSkill: [
                {
                  ID: 'bubble_minus3_ceriseBouquet_dressCard',
                  name: 'バブル',
                  AP: 1,
                  detail: [],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            }
          },
          'アオクハルカ': {
            styleType: 'trickStar',
            mood: 'melow',
            series: 'アオクハルカ',
            kana: 'あおくはるか',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.5',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 5300,
              cool: 4300,
              mental: 520,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions_section3_heartBoost_stage',
              name: 'エクステハートブースト',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'dress_aokuharuka_kaho',
              name: 'ドレス《アオクハルカ》',
              AP: 3,
              detail: [],
              addSkill: [
                {
                  ID: 'heartCaptcha',
                  name: 'ハートキャプチャ',
                  AP: 3,
                  detail: [
                    [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
                  ],
                  characteristic: {
                    name: 'インスタンス & ドロー：ワイドハート',
                    detail: 'このスキルを使用すると、デッキから除外される。さらにドローした時、このステージ中、ハート上限を+12する。',
                    type: ['exclusion', 'boost_heartCaptcha']
                  }
                }
              ]
            },
            characteristic: {
              name: 'ボルテージゲイン & ハートブースト：スリーズブーケ',
              detail: '手札にある状態でスリーズブーケのスキルを使用するたび、ボルテージPt.を+5し、次に使用するスキルハート獲得効果による獲得数を+15%する。',
              type: ['voltageGain', 'boost_heartCaptcha']
            }
          },
          'H.S.C.T.☆': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'hsct',
            kana: 'hsct',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.1',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5100,
              pure: 4900,
              cool: 3900,
              mental: 530,
              BP: 100
            },
            specialAppeal: {
              ID: 'recoverGain_gain5',
              name: 'リカバーゲイン',
              AP: 3,
              detail: [
                [6.4, 7.04, 7.68, 8.32, 8.96, 9.6, 10.24, 10.88, 11.52, 12.8, 13.44, 14.08, 14.72, 16]
              ]
            },
            skill: {
              ID: 'aggressiveAttractBoost_mentalReduce10',
              name: 'アグレッシブアトラクトブースト',
              AP: 10,
              detail: [
                [24, 26, 29, 31, 34, 36, 38, 41, 43, 48, 50, 53, 55, 60]
              ]
            },
            characteristic: {
              name: 'APレデュース：ボルテージ & ショット：ヒートアップ',
              detail: '現在のボルテージLv.が高いほどスキルの消費APダウン(最大-7)。さらにスキル使用時2回まで、このステージ中、AP回復速度を+10%する。',
              type: ['APReduce', 'APFast_stage']
            }
          },
          '春風ブランコ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '春風ブランコ',
            kana: 'はるかぜぶらんこ',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5200,
              pure: 4900,
              cool: 4200,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ]
            },
            characteristic: {
              name: 'アーリードロー：APゲイン & レイトドロー：APレデュース',
              detail: '3セクション目までにドローした時、AP+1、3セクション目以降にドローした時、消費APを-3する。',
              type: ['earlyDraw', 'APGain', 'lateDraw', 'APReduce']
            }
          },
          '軌跡の舞踏会': {
            styleType: 'performer',
            mood: 'happy',
            series: '舞踏会',
            kana: 'きせきのぶとうかい',
            gacha: {
              addSeason: '2023 PARTY! LIMITED COLLECTION',
              period: 'party'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 6400,
              pure: 4800,
              cool: 3300,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'bloomingHeart',
              name: 'ブルーミングハート',
              AP: 7,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50],
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：APゲイン & リシャッフル',
              detail: '手札にある状態でセクションが変わるたび、APを7回復し、手札を全て捨てて、デッキから手札上限までスキルを引く。',
              type: ['overSection', 'APGain', 'reShuffle']
            }
          },
          'lucky train!': {
            styleType: 'performer',
            mood: 'melow',
            series: 'アイカツ!コラボ',
            kana: 'らっきーとれいん',
            gacha: {
              addSeason: 'AIKATSU! LIMITED COLLECTION',
              period: 'collaboration'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 1,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 4500,
              cool: 5400,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'chillFascinate_under2_stageAttract_voltageGain',
              name: 'チルファッシネイト',
              AP: 6,
              detail: [
                [5.4, 5.9, 6.5, 7, 7.6, 8.1, 8.6, 9.2, 9.7, 10.8, 11.3, 11.9, 12.4, 13.5],
                [58, 64, 70, 75, 81, 87, 93, 99, 104, 116, 122, 128, 133, 145]
              ]
            },
            skill: {
              ID: 'trioFlight_section',
              name: 'トリオフライト',
              AP: 9,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [11.7, 12.9, 14, 15.2, 16.4, 17.6, 18.7, 19.9, 21.1, 23.4, 24.6, 25.7, 26.9, 29.6],
              ]
            },
            characteristic: {
              name: 'APレデュース：花帆 & さやか & 瑠璃乃',
              detail: '花帆、さやか、瑠璃乃のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APReduce', 'kaho', 'sayaka', 'rurino']
            }
          },
          '蓮ノ空歌留多': {
            styleType: 'performer',
            mood: 'neutral',
            series: '蓮ノ空歌留多',
            kana: 'はすのそらかるた',
            gacha: {
              addSeason: 'ライブグランプリ「第8回 個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3700,
              pure: 5000,
              cool: 5500,
              mental: 500,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyFascinate_over8_voltageGain_sectionAttract',
              name: 'グルーヴィファッシネイト',
              AP: 4,
              detail: [
                [14, 15, 17, 18, 20, 21, 22, 24, 25, 28, 29, 31, 32, 35],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ]
            },
            skill: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11, 12]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ボルテージゲイン & APレデュース：花帆',
              detail: '手札にある状態でセクションが変わるたび、ボルテージPt.を+20する。さらに花帆のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['overSection', 'voltageGain', 'APReduce' ,'kaho']
            }
          },
          'Special Thanks': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Special Thanks',
            kana: 'すぺしゃるさんくす',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION Vol.6',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 5500,
              cool: 4000,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensionsHeart_section3',
              name: 'エクステハート',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ]
            },
            skill: {
              ID: 'chillVoltage_under1',
              name: 'チルボルテージ',
              AP: 2,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [120, 132, 144, 156, 168, 180, 192, 204, 216, 240, 252, 264, 276, 300],
              ]
            },
            characteristic: {
              name: 'ハートアトラクション：梢',
              detail: '手札にある状態で梢のスキルを使用するたび、ビートハート4回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+8%する。',
              type: ['heartCaptcha', 'loveAttraction', 'kozue']
            }
          },
          'Link to the FUTURE': {
            styleType: 'performer',
            mood: 'happy',
            series: 'Link to the FUTURE',
            kana: 'りんくとぅーざふゅーちゃー',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION Vol.3',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 6200,
              pure: 5500,
              cool: 4100,
              mental: 540,
              BP: 100
            },
            specialAppeal: {
              ID: 'linklikeorder',
              name: 'Link! Like! Order!',
              AP: 8,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ]
            },
            skill: {
              ID: 'heartAttraction_stage',
              name: 'ハートアトラクション',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '10?', 11],
                [1.6, 1.8, 1.9, 2.1, 2.2, 2.4, 2.6, 2.7, 2.9, 3.2, 3.4, 3.5, 3.7, 4]
              ]
            },
            characteristic: {
              name: 'サーチ：綴理 & APゲイン',
              detail: 'スキル使用後、綴理のカードをドローする確率大幅アップ。さらにスキル使用時、3回までAPを5回復する。',
              type: ['search', 'tsuzuri', 'APGain']
            }
          },
          'コットン=ユートピア': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'コットン=ユートピア',
            kana: 'こっとんゆーとぴあ',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION Vol.7',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4100,
              pure: 5200,
              cool: 4700,
              mental: 520,
              BP: 100
            },
            specialAppeal: {
              ID: 'healingHeart_recover_heart',
              name: 'ヒーリングハート',
              AP: 6,
              detail: [
                [9.6, 10.56, 11.52, 12.48, 13.44, 14.4, 15.36, 16.32, 17.28, 19.2, 20.16, 21.12, 22.08, 24],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            },
            skill: {
              ID: 'fascination_stage',
              name: 'ファッシネイション',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース & マチュレーション',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費APを-3し、スキルの効果値が増加する。',
              type: ['overSection', 'APReduce', 'maturation']
            }
          },
          '喫茶ハスノソラ': {
            styleType: 'performer',
            mood: 'happy',
            series: '喫茶ハスノソラ',
            kana: 'きっさはすのそら',
            gacha: {
              addSeason: 'ライブグランプリ「第5回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5300,
              pure: 52000,
              cool: 4200,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, '13?']
              ]
            },
            skill: {
              ID: 'cheerfulHeart_over75_heartCaptcha',
              name: 'チアフルハート',
              AP: 4,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, '9?', '9?', '10?'],
                [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, '2?', '2?', '3?']
              ]
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
            series: 'Trick & Cute',
            kana: 'とりっくあんどきゅーと',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.5',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5000,
              pure: 3800,
              cool: 5500,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions1_voltage_stage',
              name: 'エクステボルテージ',
              AP: 7,
              detail: [
                [24, 26, 29, 31, 34, 36, 38, 41, 43, 48, 50, 53, 55, 60]
              ]
            },
            skill: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 10,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 20, 21, 22, 24],
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース & アグレッシブ',
              detail: '手札にある状態でセクションが変わるたび、メンタルを最大値の40%減少させ、手札のこのスキルの消費AP-9。',
              type: ['overSection', 'APReduce', 'aggressive']
            }
          },
          'ゆのくにガールズ！': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'ゆのくにガールズ！',
            kana: 'ゆのくにがーるず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5100,
              pure: 4900,
              cool: 4200,
              mental: 500,
              BP: 100
            },
            specialAppeal: {
              ID: 'cheerfulRecover_upper75_APGain',
              name: 'チアフルリカバー',
              AP: 6,
              detail: [
                [16.8, 18.48, 20.16, 21.84, 23.52, 25.2, 26.88, 28.56, 30.24, 33.6, 35.28, 36.96, 38.64, 42]
              ]
            },
            skill: {
              ID: 'cheerfulHeartBoost_over100_boost_heartCaptcha',
              name: 'チアフルハートブースト',
              AP: 5,
              detail: [
                [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 125],
                [40, 44, 48, 52, 56, 60, 64, 68, 72, 80, 84, 88, 92, 100]
              ]
            },
            characteristic: {
              name: 'APレデュース：ラブアトラクト',
              detail: '手札にあるメイン効果に獲得LOVE増加効果を持つスキル1枚につき、手札のこのスキルの消費AP-2。',
              type: ['APReduce', 'loveAttract']
            }
          },
          '夏めきペイン': {
            styleType: 'performer',
            mood: 'happy',
            series: '夏めきペイン',
            kana: 'なつめきぺいん',
            gacha: {
              addSeason: 'ライブグランプリ「103期8月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5200,
              pure: 4600,
              cool: 4400,
              mental: 500,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, '12?', '13?', '14?'],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, '13.2?', '13.8?', '15?']
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, '13?']
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ラブアトラクト & ハートブースト',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+15%し、さらに次に使用するスキルハート獲得効果による獲得数を+60%する。',
              type: ['overSection', 'loveAttract', 'boost_heartCaptcha']
            }
          },
          'SPLASH!!!!': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'SPLASH!!!!',
            kana: 'すぷらっしゅ',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.8',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 5000,
              cool: 4100,
              mental: 560,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 10, 11],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11, 12]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 7,
              detail: [
                [7, 8, 8, 9, 10, 11, 11, 12, 13, 14, 15, 15, 16, 18]
              ]
            },
            characteristic: {
              name: 'APレデュース：梢 & ハートブースト：梢',
              detail: '梢のスキルを使用するたび、手札のこのスキルの消費AP-2し、次に使用するスキルハート獲得効果による獲得数を+30%する。',
              type: ['APReduce', 'kozue', 'boost_heartCaptcha']
            }
          },
          '眩耀夜行': {
            styleType: 'performer',
            mood: 'happy',
            series: '眩耀夜行',
            kana: 'げんようやこう',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.6',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5200,
              pure: 4600,
              cool: 4300,
              mental: 510,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15]
              ]
            },
            characteristic: {
              name: 'インタープリテーション & ドロー：アトラクトブースト：スリーズブーケ',
              detail: 'このスキルのムードによる効果増加量を上昇させる。さらにドローした時、次にスリーズブーケのメンバーが使用するラブアトラクト効果を+40%する。',
              type: ['interPretation', 'drew', 'boost_loveAttract']
            }
          },
          'ペンギンアイス': {
            styleType: 'performer',
            mood: 'happy',
            series: 'ペンギンアイス',
            kana: 'ぺんぎんあいす',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.4',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 5250,
              cool: 4450,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, 11, 12, 13, 14]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, 11, 12, 13, 14]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ハートキャプチャ & APゲイン',
              detail: '手札にある状態でセクションが変わるたび、ビートハート6回分のスキルハートを獲得し、APを3回復する。',
              type: ['overSection', 'heartCaptcha', 'APGain']
            }
          },
          'フォーチュンムービー': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'フォーチュンムービー',
            kana: 'ふぉーちゅんむーびー',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5450,
              pure: 4750,
              cool: 4500,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：APゲイン & マチュレーション',
              detail: '手札にある状態でセクションが変わるたび、APを5回復し、さらにスキルの効果値が増加する。',
              type: ['overSection', 'APGain', 'maturation']
            }
          },
          'Holiday∞Holiday': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'Holiday∞Holiday',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.3',
              period: 'spring'
            },
            kana: 'ほりでーほりでー',
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4700,
              pure: 5200,
              cool: 4700,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, 31.5, 33, 34.5, 37.5]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 3,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ]
            },
            characteristic: {
              name: 'チェイン：花帆 & ジャストドロー：フィーバー/APゲイン & APゲイン',
              detail: '花帆のスキルを使用した後、ドローされる確率が増加し、FEVERセクションでドローした時、消費APを-2する。さらにスキル使用時、APを+1する。',
              type: ['chain', 'kaho', 'justDrew', 'APGain']
            }
          },
          'Rose Garden': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'Rose Garden',
            kana: 'ろーずがーでん',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 5600,
              cool: 4400,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, '8?', '9?', '9?', 10]
              ]
            },
            characteristic: {
              name: 'チェイン：梢 & APレデュース：梢 & 花帆',
              detail: '梢のスキルを使用した後、ドローされる確率が増加する。さらに手札にある梢、花帆のスキル1枚につき、手札のこのスキルの消費AP-1。',
              type: ['chain', 'kozue', 'APReduce']
            }
          },
          '薫風の調べ': {
            styleType: 'performer',
            mood: 'happy',
            series: '薫風の調べ',
            kana: 'くんぷうのしらべ',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4900,
              pure: 5200,
              cool: 4400,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 7,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APReduce']
            }
          },
          '春色ニューデイズ': {
            styleType: 'performer',
            mood: 'happy',
            series: '春色ニューデイズ',
            kana: 'はるいろにゅーでいず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 5250,
              cool: 4350,
              mental: 500,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, 31.5, 33, 34.5, 37.5]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ]
            },
            characteristic: {
              name: 'レイトドロー：3/APレデュース',
              detail: '3セクション目以降にドローした時、消費APを-3する。',
              type: ['lateDraw', 'APReduce']
            }
          },
          'Dream Believers': {
            styleType: 'performer',
            mood: 'happy',
            series: 'Dream Believers',
            kana: 'どりーむびりーばーず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 5600,
              cool: 4000,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            characteristic: {
              name: 'フェイバリット：フィーバー & APレデュース：ラブアトラクト',
              detail: 'フィーバーセクションでドローされる確率が増加する。さらに適用されているラブアトラクト効果量が200%以上のとき、手札のこのスキルの消費AP-3。',
              type: ['favorite', 'APReduce', 'loveAttract']
            }
          }
        },
        SR: {
          '紅葉乃舞姫': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: '紅葉乃舞姫',
            kana: 'こうようのまいひめ',
            gacha: {
              addSeason: 'ライブグランプリ「104期 2ndTerm 第3回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 4800,
              cool: 3200,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 5,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 33]
              ]
            },
            skill: {
              ID: 'fulnessExtensionVoltage_add2_over5_over50',
              name: 'フルネスエクステボルテージ',
              AP: 8,
              detail: [
                [58, 64, 70, 75, 81, 87, 93, 99, 104, 116, 122, 128, 133, 145]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース：グルーヴィ & チアフル',
              detail: 'ボルテージLv.5以上でドローした時、消費APを-2、メンタル50%以上でドローした時、消費APを-2する。',
              type: ['drew', 'APReduce', 'groovy']
            }
          },
          '織姫草紙': {
            styleType: 'trickStar',
            mood: 'melow',
            series: '織姫草紙',
            kana: 'おりひめそうし',
            gacha: {
              addSeason: 'ライブグランプリ「104期 1stTerm 第4回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3500,
              pure: 4100,
              cool: 5000,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'refreshMind',
              name: 'リフレッシュマインド',
              AP: 4,
              detail: [
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, 10.08, 10.56, 11.04, 12]
              ]
            },
            characteristic: {
              name: 'ジャストドロー：1/APレデュース & アザードロー：リカバーブースト',
              detail: '1セクション目にドローした時、APを5回復する。それ以外のセクションでドローした時、次に使用するメンタルリカバー効果を+50%する。',
              type: ['justDrew', 'APReduce', 'otherDrew', 'boost_mentalRecover']
            }
          },
          '抱きしめる花びら': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '抱きしめる花びら',
            kana: 'だきしめるはなびら',
            gacha: {
              addSeason: 'ライブグランプリ「103期3月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3600,
              pure: 4600,
              cool: 4300,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensionsHeart_stage1',
              name: 'エクステハート',
              AP: 5,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, '8?']
              ]
            },
            skill: {
              ID: 'chillAttract_under3_section',
              name: 'チルアトラクト',
              AP: 5,
              detail: [
                [7.2, 7.9, 8.6, 9.4, 10.1, 10.8, 11.5, 12.2, 13, 14.4, 15.1, 15.8, 16.6, 18],
                [3.3, 3.6, 4, 4.3, 4.6, 5, 5.3, 5.6, 6, 6.6, 6.9, 7.3, 7.6, 8.3]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース & サーチ：梢',
              detail: 'ドローしたセクションの間、消費APを-3する。さらにスキル使用後、梢のカードをドローする確率大幅アップ。',
              type: ['draw', 'APReduce', 'search', 'kozue']
            }
          },
          '桃節銘記': {
            styleType: 'performer',
            mood: 'happy',
            series: '桃節銘記',
            kana: 'とうせつめいき',
            gacha: {
              addSeason: '2023 GRADUATION LIMITED COLLECTION Vol.1',
              period: 'graduation'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4200,
              pure: 4600,
              cool: 4100,
              mental: 390,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 5,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8],
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'voltageHeart_voltageGain_heartCaptcha',
              name: 'ボルテージハート',
              AP: 4,
              /*AP: {
                max: 9,
                min: 1
              },*/
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 7],
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            characteristic: {
              name: 'ハートコレクト：APレデュース & ラブアトラクト',
              detail: '手札にある状態でハートを100個回収したとき、このスキルの消費APを-3し、このステージ中、獲得するLOVEを+3%する。',
              type: ['heartCollect', 'APReduce', 'loveAttract_stage']
            }
          },
          'ハッピー至上主義！': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'ハッピー至上主義！',
            kana: 'はっぴーしじょうしゅぎ',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.8',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 4100,
              cool: 3700,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions1_protect',
              name: 'エクステプロテクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'endurance_mentalVoltage',
              name: 'エンデュランス',
              AP: 2,
              detail: [
                [2.8, 3.08, 3.36, 3.64, 3.92, 4.2, 4.48, 4.76, 5.04, 5.6, 5.88, 6.16, 6.44, 7],
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ]
            },
            characteristic: {
              name: 'ドロー：メンタルリカバー',
              detail: 'ドローした際、メンタルを最大値の6%回復させる。',
              type: ['draw', 'mentalRecover']
            }
          },
          '迎春 -食-': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: '迎春',
            kana: 'げいしゅん',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.4',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 4100,
              cool: 4600,
              mental: 410,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyHeart_over8_heartCaptcha',
              name: 'グルーヴィハート',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ]
            },
            skill: {
              ID: 'chillEndurance_mentalRecover_under5_voltageGain',
              name: 'チルエンデュランス',
              AP: 4,
              detail: [
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15],
                [17, 19, 20, 22, 24, 26, 27, 29, 31, 34, 36, 37, 39, 42]
              ],
              type: ['chill', 'mentalRecover', 'voltageGain']
            },
            characteristic: {
              name: 'オーバーセクション：APゲイン',
              detail: '手札にある状態でセクションが変わるたび、APを2回復する。',
              type: ['overSection', 'APGain']
            }
          },
          '冬のおくりもの': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '冬のおくりもの',
            kana: 'ふゆのおくりもの',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.1',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 4100,
              cool: 3800,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'highAttract_stage',
              name: 'ハイアトラクト',
              AP: 4,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4]
              ]
            },
            skill: {
              ID: 'groovyAttract_stage_over8_sectionAttract',
              name: 'グルーヴィアトラクト',
              AP: 3,
              detail: [
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, 4, 4.2, 4.4, 4.8],
                [3, 3.3, 3.6, 3.9, 4.2, 4.5, 4.8, 5.1, 5.4, 6, 6.3, 6.6, 6.9, 7.5]
              ]
            },
            characteristic: {
              name: 'フェイバリット：1',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が大幅に増加する。',
              type: ['favorite']
            }
          },
          'ツバサ・ラ・リベルテ': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'ツバサ・ラ・リベルテ',
            kana: 'つばさらりべるて',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.8',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 4800,
              cool: 3300,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ]
            },
            skill: {
              ID: 'highVoltage_heartCaptcha',
              name: 'ハイボルテージ',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50],
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 7]
              ]
            },
            characteristic: {
              name: 'APレデュース：メンタル',
              detail: '現在の残りメンタルが多いほどスキルの消費APダウン(最大-4)',
              type: ['APReduce', 'mental']
            }
          },
          '宇宙演舞☆うさぴょん': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: 'うさぴょん',
            kana: 'うちゅうえんぶうさぴょん',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.4',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4200,
              pure: 4500,
              cool: 3700,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ]
            },
            skill: {
              ID: 'supportedFeel_section',
              name: 'サポーテッドフィール',
              AP: 4,
              detail: [
                [5.2, 5.72, 6.24, 6.76, 7.28, 7.8, 8.32, 8.84, 9.36, 10.4, 10.92, 11.44, 11.96, 13],
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクション中、消費APを-1する。',
              type: ['draw', 'APReduce']
            }
          },
          '素顔のピクセル': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: '素顔のピクセル',
            kana: 'すがおのぴくせる',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.3',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 4100,
              cool: 3700,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, 31.5, 33, 34.5, 37.5]
              ]
            },
            skill: {
              ID: 'cheerfulHealing',
              name: 'チアフルヒーリング',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース & ラブアトラクト：梢',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-3。さらに手札にある状態で梢のスキルを使用するたび、このステージ中、獲得するLOVEを+1.6%する。',
              type: ['overSection', 'APReduce', 'loveAttract_stage', 'kozue']
            }
          },
          'ドルフィン〰ビーチ': {
            styleType: 'performer',
            mood: 'happy',
            series: 'ドルフィン〰ビーチ',
            kana: 'どるふぃんびーち',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第2回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 4200,
              cool: 3900,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ]
            },
            characteristic: {
              name: 'APレデュース：梢 & ハートブースト：梢',
              detail: '梢のスキルを使用するたび、手札のこのスキルの消費AP-2し、次に使用するスキルハート獲得効果による獲得数を+20%する。',
              type: ['APReduce', 'boost_heartCaptcha', 'kozue']
            }
          },
          'はじける☆オレンジソーダ': {
            styleType: 'performer',
            mood: 'happy',
            series: 'はじける☆ソーダ',
            kana: 'はじけるおれんじそーだ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.7',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 4500,
              cool: 4000,
              mental: 390,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 7,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：APゲイン & APレデュース',
              detail: '手札にある状態でセクションが変わるたび、APを2回復し、手札のこのスキルの消費AP-4する。',
              type: ['overSection', 'APGain', 'APReduce']
            }
          },
          '朝顔令嬢': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '朝顔令嬢',
            kana: 'あさがおれいじょう',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.5',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3800,
              pure: 4200,
              cool: 4600,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース & APゲイン',
              detail: 'ドローしたセクションの間、消費APを-3する。さらにスキル使用時、APを+1する。',
              type: ['draw', 'APReduce', 'APGain']
            }
          },
          '金魚◎花火': {
            styleType: 'performer',
            mood: 'melow',
            series: '金魚◎花火',
            kana: 'きんぎょはなび',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第1回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 4200,
              cool: 4000,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            characteristic: {
              name: 'フェイバリット：フィーバー & ドロー：ハートブースト',
              detail: 'フィーバーセクションでドローされる確率が増加する。さらにこのステージ中、ドローした時、次に使用するスキルハート獲得効果による獲得数を+30%する。',
              type: ['favorite', 'drew', 'boost_heartCaptcha']
            }
          },
          'DEEPNESS': {
            styleType: 'performer',
            mood: 'melow',
            series: 'DEEPNESS',
            kana: 'でぃーぷねす',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.3',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4200,
              pure: 3950,
              cool: 4650,
              mental: 400,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, '13?']
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, 2.7, 2.9, 3, '3.3?']
              ]
            },
            characteristic: {
              name: 'チェイン：さやか & ドロー：アトラクトブースト：梢',
              detail: 'さやかのスキルを使用した後、ドローされる確率が増加する。さらにドローした時、次に梢が使用するラブアトラクト効果を+75%する。',
              type: ['chain', 'sayaka', 'drew', 'boost_loveAttract', 'kozue']
            }
          },
          '雨と紫陽花に唄へば': {
            styleType: 'performer',
            mood: 'happy',
            series: '雨と紫陽花に唄へば',
            kana: 'あめとあじさいにうたへば',
            gacha: {
              addSeason: 'ライブグランプリ「103期6月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 4500,
              cool: 3800,
              mental: 390,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 12, 13, 14, 15]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ]
            },
            characteristic: {
              name: 'フェイバリット：フィーバー & ジャストドロー：フィーバー/ハートブースト：花帆',
              detail: 'フィーバーセクションでドローされる確率が増加する。さらにフィーバーセクションでドローした時、次に花帆が使用するスキルハート獲得効果による獲得数を+225%する。',
              type: ['favorite', 'justDrew', 'boost_heartCaptcha', 'kaho']
            }
          },
          'アメアガリストリート': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'アメアガリストリート',
            kana: 'あめあがりすとりーと',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.1',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 4500,
              cool: 3800,
              mental: 390,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, '13?']
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 3,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, '25?']
              ]
            },
            characteristic: {
              name: 'ドロー：メンタルリカバー & チル：ボルテージブースト',
              detail: 'ドローした時、メンタルを最大値の6%回復させる。さらにドローした時ボルテージLv.が5以下のとき、次に使用するボルテージゲイン効果を+10%する。',
              type: ['draw', 'mentalRecover', 'chill', 'boost_voltageGain']
            }
          },
          'チェリー♫ピクニック': {
            styleType: 'performer',
            mood: 'melow',
            series: 'チェリー♫ピクニック',
            kana: 'ちぇりーぴくにっく',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 4300,
              cool: 4200,
              mental: 350,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.8, 30]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ]
            },
            characteristic: {
              name: 'APレデュース：梢 & さやか',
              detail: '梢、さやかのスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APReduce', 'kozue', 'sayaka']
            }
          },
          '謳歌爛漫': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: '謳歌爛漫',
            kana: 'おうからんまん',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 4200,
              cool: 4100,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 7,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, '15?']
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'ドロー：ボルテージゲイン & アクセラレーション',
              detail: 'ドローした時、ボルテージ値を+12する。さらにボルテージLv.が8以上の間、消費AP-2。',
              type: ['draw', 'voltageGain', 'acceleration']
            }
          },
          'Reflection in the mirror': {
            styleType: 'performer',
            mood: 'happy',
            series: 'Reflection in the mirror',
            kana: 'りふれくしょんいんざみらー',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4100,
              pure: 4800,
              cool: 3300,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, '8?']
              ]
            },
            characteristic: {
              name: 'ドロー：メンタルリカバー & APレデュース：チアフル',
              detail: 'ドローした時、メンタルを最大値の6%回復させる。さらにメンタルが50%以上の時にドローすると、消費APを-3する。',
              type: ['mentalRecover', 'APReduce', 'cheerful']
            }
          },
          '水彩世界': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '水彩世界',
            kana: 'すいさいせかい',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 4300,
              cool: 3400,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 7,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, '15?']
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'チェイン：梢',
              detail: '梢のスキルを使用した後、ドローされる確率が増加する。',
              type: ['cain', 'kozue']
            }
          }
        },
        R: {
          '室咲格子': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '室咲格子',
            kana: 'むろざきこうし',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3100,
              pure: 2600,
              cool: 2300,
              mental: 280,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 7,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            }
          },
          'レインボーシフォン': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'レインボーシフォン',
            kana: 'れいんぼーしふぉん',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2400,
              pure: 3000,
              cool: 2400,
              mental: 300,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 33]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 2,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            }
          },
          '華紺青': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '華紺青',
            kana: 'はなこんじょう',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2900,
              pure: 2700,
              cool: 2300,
              mental: 290,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ]
            }
          },
          'オーロラスカイ': {
            styleType: 'performer',
            mood: 'happy',
            series: 'オーロラスカイ',
            kana: 'おーろらすかい',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2700,
              pure: 3000,
              cool: 2400,
              mental: 270,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            }
          }
        }
      },
      sayaka: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            kana: '',
            gacha: {
              addSeason: '',
              period: ''
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 30,
              pure: 30,
              cool: 30,
              mental: 3,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {}
            },
            skill: {
              name: '',
              AP: 1,
              detail: {}
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        DR: {
          'Ether Aria': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Ether Aria',
            kana: 'えーてるありあ',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5100,
              pure: 5200,
              cool: 7000,
              mental: 590,
              BP: 100
            },
            specialAppeal: {
              ID: 'aggressiveAttractBoost',
              name: 'アグレッシブアトラクトブースト',
              AP: 3,
              detail: [
                [10.4, 11.44, 12.48, 13.52, 14.56, 15.6, 16.64, 17.68, 18.72, 20.8, 21.84, 22.88, 23.92, 26]
              ]
            },
            skill: {
              ID: 'attractBlessing',
              name: 'アトラクトブレッシング',
              AP: 5,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ボルテージブレッシング',
              detail: '手札にある状態でセクションが変わるたび、メイン効果にボルテージ増加効果を持つ、山札を含む全てのスキルの消費AP-2。',
              type: ['overSection', 'blessing_voltageGain']
            }
          },
          'Prism Echo': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Prism Echo',
            kana: 'ぷりずむえこー',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5200,
              pure: 6400,
              cool: 5600,
              mental: 600,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract',
              name: 'ラブアトラクト',
              AP: 1,
              detail: [
                [30, 33, 36, 39, 42, 45, 48, 51, 54, 60, 63, 66, 69, 75]
              ]
            },
            skill: {
              ID: 'loveAttract',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [28, 31, 34, 37, 40, 43, 46, 49, 52, 57, 60, 63, 66, 72]
              ]
            },
            characteristic: {
              name: 'APレデュース：ボルテージ',
              detail: '現在のボルテージLvに応じてスキルの消費APダウン',
              type: ['APReduce', 'voltageGain']
            }
          }
        },
        UR: {
          '紅葉乃舞姫': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: '紅葉乃舞姫',
            kana: 'こうようのまいひめ',
            gacha: {
              addSeason: '2024 AUTUMN LIMITED COLLECTION vol.4',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4900,
              pure: 5600,
              cool: 3800,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ]
            },
            skill: {
              ID: 'fulnessExtensionHeart_add3_over8_over75',
              name: 'フルネスエクステハート',
              AP: 12,
              detail: [
                [48, 53, 58, 62, 67, 72, 77, 82, 86, 96, 101, 106, 110, 120]
              ]
            },
            characteristic: {
              name: 'ドロー：ボルテージブースト & APレデュース：グルーヴィ & チアフル',
              detail: 'ドローした時、次に使用するボルテージゲイン効果を+16%する。さらにボルテージLv.8以上でドローした時、消費APを-5、メンタル75%以上でドローした時、消費APを-2する。',
              type: ['drew', 'boost_voltageGain', 'APReduce', 'groovy', 'cheerful']
            }
          },
          'Proof': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Proof',
            kana: 'ぷるーふ',
            gacha: {
              addSeason: 'ライブグランプリ「104期 2ndTerm 第1回サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5000,
              pure: 6000,
              cool: 3200,
              mental: 500,
              BP: 100
            },
            specialAppeal: {
              ID: 'aggressiveBoost_dollchestra',
              name: 'アグレッシブブースト：DOLLCHESTRA',
              AP: 17,
              detail: [
                [47.3, 52, 56.7, 61.5, 66.2, 70.9, 75.6, 80.4, 85.1, 94.6, 99.3, 104, 108.7, '118.2?'],
                [139, 152.9, 166.8, 180.7, 194.6, 208.5, 222.4, 236.3, 250.2, 278, 291.9, 305.8, 319.7, '347.5?']
              ]
            },
            skill: {
              ID: 'braveBoostedRecover_dollchestra',
              name: 'ブレイブブーステッドリカバー：DOLLCHESTRA',
              AP: 4,
              detail: [
                [12.6, 13.9, 15.1, 16.4, 17.6, 18.9, 20.2, 21.4, 22.7, 25.2, 26.5, 27.7, 29, '31.5?'],
                [40, 44, 48, 52, 56, 60, 64, 68, 72, 80, 84, 88, 92, '100?']
              ]
            },
            characteristic: {
              name: 'アトラクトブースト：DOLLCHESTRA：DOLLCHESTRA',
              detail: '手札にある状態でDOLLCHESTRAのスキルを使用するたび、3回の間DOLLCHESTRAのメンバーが使用するラブアトラクト効果を+15%する。',
              type: ['boost_loveAttract']
            }
          },
          '織姫草紙': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '織姫草紙',
            kana: 'おりひめそうし',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION vol.4',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 4800,
              cool: 5700,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'attractBoost2',
              name: 'アトラクトブースト',
              AP: 15,
              detail: [
                [46.5, 51.2, 55.8, 60.5, 65.1, 69.8, 74.4, 79.1, 83.7, 93, 97.7, 102.3, 107, 116.3]
              ]
            },
            characteristic: {
              name: 'ミッドドロー：2～4/APレデュース & アザードロー：ハートブースト',
              detail: '2～4セクション目でドローした時、消費APを-10する。それ以外のセクションでドローした時、次に使用するスキルハート獲得効果による獲数を+50%する。',
              type: ['midDrew', 'APReduce', 'otherDrew', 'boost_heartCaptcha']
            }
          },
          'レディバグ': {
            styleType: 'cheerLeader',
            mood: 'melow',
            series: 'レディバグ',
            kana: 'れでぃばぐ',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION vol.6',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3550,
              pure: 4800,
              cool: 5650,
              mental: 520,
              BP: 100
            },
            specialAppeal: {
              ID: 'aggressiveExtendProtect_stage',
              name: 'アグレッシブエクステプロテクト',
              AP: 7,
              detail: [
                [7.2, 7.92, 8.64, 9.36, 10.08, 10.8, 11.52, 12.24, 12.96, 14.4, 15.12, 15.84, 16.56, 18]
              ]
            },
            skill: {
              ID: 'aggressiveProtection_stage',
              name: 'アグレッシブプロテクション',
              AP: 1,
              detail: [
                [3.2, 3.52, 3.84, 4.16, 4.48, 4.8, 5.12, 5.44, 5.76, 6.4, 6.72, 7.04, 7.36, 8]
              ]
            },
            characteristic: {
              name: 'ハートキャプチャ：DOLLCHESTRA',
              detail: '手札にある状態でDOLLCHESTRAのスキルを使用するたび、ビートハート3回分のスキルハートを獲得する。',
              type: ['heartCaptcha', 'DOLLCHESTRA']
            }
          },
          '真実の舞踏会': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '舞踏会',
            kana: 'しんじつのぶとうかい',
            gacha: {
              addSeason: '2023 PARTY! LIMITED COLLECTION',
              period: 'party'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 3400,
              cool: 6600,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'youthfulCaptcha',
              name: 'ユースフルキャプチャ',
              AP: 3,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ]
            },
            skill: {
              ID: 'duoAttract',
              name: 'デュオアトラクト',
              AP: 7,
              detail: [
                [3.6, 4, 4.3, 4.7, 5, 5.4, 5.8, 6.1, 6.5, 7.2, 7.56, 7.9, 8.3, 9],
                [10.8, 11.9, 13, 14, 15.1, 16.2, 17.3, 18.4, 19.4, 21.6, 22.7, 23.8, 24.8, 27]
              ]
            },
            characteristic: {
              name: 'APレデュース：ラブアトラクト',
              detail: '適用されているラブアトラクト効果量に応じて、手札のこのスキルの消費APダウン(最大-5)',
              type: ['APReduce', 'loveAttract']
            }
          },
          '蓮ノ空歌留多': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '蓮ノ空歌留多',
            kana: 'はすのそらかるた',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.7',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 4800,
              cool: 5600,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyInitiative_over8_voltageGain_protect',
              name: 'グルーヴィイニシアチブ',
              AP: 4,
              detail: [
                [14, 16, 17, 19, 20, 22, 23, 24, 26, 29, 30, 32, 33, 36],
                [2.4, '2.6?', '2.9?', '3.1?', '3.4?', 3.6, '3.8?', '4.1?', '4.3?', 4.8, '5?', '5.3?', '5.5?', 6]
              ]
            },
            skill: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ボルテージゲイン & APレデュース：さやか',
              detail: '手札にある状態でセクションが変わるたび、ボルテージPt.を+20する。さらにさやかのスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['overSection', 'voltageGain', 'APReduce' ,'sayaka']
            }
          },
          '青とシャボン': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '青とシャボン',
            kana: 'あおとしゃぼん',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION Vol.6',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 4600,
              cool: 5700,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions3_voltage_section',
              name: 'エクステボルテージ',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'groovyAttraction_section_over10_heartCaptcha',
              name: 'グルーヴィアトラクション',
              AP: 5,
              detail: [
                [8.4, 9.2, 10.1, 10.9, 11.8, 12.6, 13.4, 14.3, 15.1, 16.8, 17.6, 18.5, 19.3, 21],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
              ]
            },
            characteristic: {
              name: 'APレデュース：綴理 & ボルテージゲイン：綴理',
              detail: '綴理のスキルを使用するたび、手札のこのスキルの消費AP-1し、ボルテージPt.を+10する。',
              type: ['APReduce', 'voltageGain', 'tsuzuri']
            }
          },
          'Link to the FUTURE': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Link to the FUTURE',
            kana: 'りんくとぅーざふゅーちゃー',
            gacha: {
              addSeason: 'ライブグランプリ「103期12月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 6000,
              pure: 5300,
              cool: 4300,
              mental: 560,
              BP: 100
            },
            specialAppeal: {
              ID: 'vortexAttraction_section',
              name: 'ボルテックスアトラクション',
              AP: 7,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15],
                [7.2, 7.9, 8.6, 9.4, 10.1, 10.8, 11.5, 12.2, 13, 14.4, 15.1, 15.8, 16.6, 18],
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ]
            },
            skill: {
              ID: 'chillFascinate_under3_voltageGain_stageAttract_APGain',
              name: 'チルファッシネイト',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [1.6, 1.8, 1.9, 2.1, 2.2, 2.4, 2.6, 2.7, 2.9, 3.2, 3.4, 3.5, 3.7, 4]
              ]
            },
            characteristic: {
              name: 'サーチ：慈 & APゲイン',
              detail: 'スキル使用後、慈のカードをドローする確率大幅アップ。さらにスキル使用時、3回までAPを5回復する。',
              type: ['search', 'megumi', 'APGain']
            }
          },
          'Secret Christmas': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Secret Christmas',
            kana: 'しーくれっとくりすます',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.2',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4900,
              pure: 3900,
              cool: 5500,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'chillVoltage_under3',
              name: 'チルボルテージ',
              AP: 5,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50],
                [34, 37, 41, 44, 48, 51, 54, 58, 61, 68, 71, 74, 78, 84]
              ]
            },
            skill: {
              ID: 'groovyVoltage_over8_voltageGain_heartCaptcha',
              name: 'グルーヴィボルテージ',
              AP: 4,
              detail: [
                [14, 16, 17, 19, 20, 22, 23, 24, 26, 29, 30, 32, 33, 36],
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 9]
              ]
            },
            characteristic: {
              name: 'チェイン：綴理 & ドロー：ボルテージゲイン',
              detail: '綴理のスキルを使用した後、ドローされる確率が増加する。さらにドローした時、ボルテージPt.を+18する。',
              type: ['chain', 'tsuzuri', 'draw', 'voltageGain']
            }
          },
          '喫茶ハスノソラ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '喫茶ハスノソラ',
            kana: 'きっさはすのそら',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.6',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5500,
              pure: 4100,
              cool: 5000,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions1_protect',
              name: 'エクステプロテクト',
              AP: 6,
              detail: [
                [7.2, 7.92, 8.64, 9.36, 10.08, 10.8, 11.52, 12.24, 12.96, 14.4, 15.12, 15.84, 16.56, 18]
              ]
            },
            skill: {
              ID: 'cheerfulFascinate_stage_over50',
              name: 'チアフルファッシネイト',
              AP: 2,
              detail: [
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, 4, 4.2, 4.4, 4.8],
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12]
              ]
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
            series: 'うさぴょん',
            kana: 'うちゅうけいさつうさぴょん',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.4',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4700,
              pure: 5300,
              cool: 4300,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'extensions3_voltage_section',
              name: 'エクステボルテージ',
              AP: 5,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
              ]
            },
            characteristic: {
              name: 'チェイン：瑠璃乃',
              detail: '瑠璃乃のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'rurino']
            }
          },
          'ゆのくにガールズ！': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'ゆのくにガールズ！',
            kana: 'ゆのくにがーるず',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5100,
              pure: 4600,
              cool: 4400,
              mental: 510,
              BP: 100
            },
            specialAppeal: {
              ID: 'cheerfulRecover_upper75_APGain',
              name: 'チアフルリカバー',
              AP: 8,
              detail: [
                [16.8, 18.48, 20.16, 21.84, 23.52, 25.2, 26.88, 28.56, 30.24, 33.6, 35.28, 36.96, 38.64, 42]
              ]
            },
            skill: {
              ID: 'cheerfulAttract_over100_sectionAttract',
              name: 'チアフルアトラクト',
              AP: 5,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30],
                [24, 26.4, 28.8, 31.2, 33.6, 36, 38.4, 40.8, 43.2, 48, 50.4, 52.8, 55.2, 60]
              ]
            },
            characteristic: {
              name: 'APレデュース：ボルテージゲイン',
              detail: '手札にあるメイン効果にボルテージ増加効果を持つスキル1枚につき、手札のこのスキルの消費AP-2。',
              type: ['APReduce', 'voltageGain']
            }
          },
          'SPLASH!!!!': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'SPLASH!!!!',
            kana: 'すぷらっしゅ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.8',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4050,
              pure: 5000,
              cool: 4500,
              mental: 565,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'fascination_section',
              name: 'ファッシネイション',
              AP: 7,
              detail: [
                [14.4, 15.8, 17.3, 18.7, 20.2, 21.6, 23, 24.5, 25.9, 28.8, 30.2, 31.7, 33.1, 36],
                [12, 13, 14, 16, 17, 18, 19, 20, 22, 24, 25, 26, 28, 29]
              ]
            },
            characteristic: {
              name: 'APレデュース：綴理 & アトラクトブースト：綴理',
              detail: '綴理のスキルを使用するたび、手札のこのスキルの消費AP-2し、次に使用するラブアトラクト効果を+10%する。',
              type: ['APReduce', 'tsuzuri', 'boost_loveAttract']
            }
          },
          'ドルフィン〰ビーチ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'ドルフィン〰ビーチ',
            kana: 'どるふぃんびーち',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第2回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5400,
              pure: 4400,
              cool: 5000,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'fascination_section',
              name: 'ファッシネイション',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30],
                [12, 13, 14, 16, 17, 18, 19, 20, 22, 24, 25, 26, 28, 29]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, 39.6, 41.4, 45]
              ]
            },
            characteristic: {
              name: 'APレデュース：綴理 & アトラクトブースト：綴理',
              detail: '綴理のスキルを使用するたび、手札のこのスキルの消費AP-2し、次に使用するラブアトラクト効果を+10%する。',
              type: ['APReduce', 'tsuzuri', 'boost_loveAttract']
            }
          },
          'Mirage Voyage': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Mirage Voyage',
            kana: 'みらーじゅぼやーじゅ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.6',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4700,
              pure: 5200,
              cool: 4400,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'fascination_section',
              name: 'ファッシネイション',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
              ]
            },
            characteristic: {
              name: 'インタープリテーション & ドロー：アトラクトブースト：DOLLCHESTRA',
              detail: 'このスキルのムードによる効果増加量を上昇させる。さらにドローした時、次にDOLLCHESTRAのメンバーが使用するラブアトラクト効果を+40%する。',
              type: ['interPretation', 'drew', 'boost_loveAttract']
            }
          },
          '朝顔令嬢': {
            styleType: 'performer',
            mood: 'neutral',
            series: '朝顔令嬢',
            kana: 'あさがおれいじょう',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.5',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 4300,
              cool: 5500,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '10?', 11],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース & APゲイン',
              detail: 'ドローしたセクションの間、消費APを-3する。さらにスキル使用時、APを+1する。',
              type: ['draw', 'APReduce', 'APGain']
            }
          },
          '雨と紫陽花に唄へば': {
            styleType: 'performer',
            mood: 'happy',
            series: '雨と紫陽花に唄へば',
            kana: 'あめとあじさいにうたへば',
            gacha: {
              addSeason: 'ライブグランプリ「103期6月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5200,
              pure: 4450,
              cool: 5050,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, 39.6, 41.4, '45?']
              ]
            },
            skill: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ],
              type: ['heartCaptcha', 'loveAttraction']
            },
            characteristic: {
              name: 'フェイバリット：フィーバー & ジャストドロー：フィーバー/ハートブースト & アトラクトブースト：さやか',
              detail: 'フィーバーセクションでドローされる確率が増加する。さらにフィーバーセクションでドローした時、次にさやかが使用するスキルハート獲得効果による獲得数を+375%、ラブアトラクト効果を+120%する。',
              type: ['favorite', 'justDrew', 'boost_heartCaptcha', 'boost_loveAttract']
            }
          },
          'ツキマカセ': {
            styleType: 'performer',
            mood: 'melow',
            series: 'ツキマカセ',
            kana: 'つきまかせ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 5600,
              cool: 5100,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, 39.6, 41.4, 45]
              ]
            },
            skill: {
              ID: 'braveHeart_under50',
              name: 'ブレイブハート',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13],
                [7, 8, 8, 9, 10, 11, 11, 12, 13, 14, 15, 15, 16, 17]
              ]
            },
            characteristic: {
              name: 'インタープリテーション',
              detail: 'このスキルのムードによる効果上昇量を上昇させる。',
              type: ['interPretation']
            }
          },
          'Rose Garden': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Rose Garden',
            kana: 'ろーずがーでん',
            gacha: {
              addSeason: 'ログインボーナス',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 5450,
              cool: 5250,
              mental: 410,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, '25?']
              ]
            },
            characteristic: {
              name: 'チェイン：綴理 & APレデュース：綴理 & さやか',
              detail: '綴理のスキルを使用した後、ドローされる確率が増加する。さらに手札にある綴理、さやかのスキル1枚につき、手札のこのスキルの消費AP-1。',
              type: ['chain', 'tsuzuri', 'APReduce', 'sayaka']
            }
          },
          '薫風の調べ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '薫風の調べ',
            kana: 'くんぷうのしらべ',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 5100,
              cool: 4600,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, 31.5, 33, 34.5, 37.5]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APReduce']
            }
          },
          'スケイプゴート': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'スケイプゴート',
            kana: 'すけいぷごーと',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 4900,
              cool: 5200,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, 39.6, 41.4, 45]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            characteristic: {
              name: 'フェイバリット：4 & アクセラレーション',
              detail: 'フィーバーセクションを除いた4セクション目でドローされる確率が増加する。さらにボルテージLv.が8以上の間、消費AP-2。',
              type: ['favorite', 'acceleration']
            }
          },
          'Dream Believers': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Dream Believers',
            kana: 'どりーむびりーばーず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4900,
              pure: 4200,
              cool: 5700,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, 31.5, 33, 34.5, 37.5]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            characteristic: {
              name: 'アキューミュレイト & アクセラレーション',
              detail: '手札にある時、ボルテージLvが上がるたびに消費APが低下する。さらにボルテージLv.が7以上の間、消費AP-2。',
              type: ['accumulate', 'acceleration']
            }
          }
        },
        SR: {
          '魔法少女リズミックハート': {
            styleType: 'performer',
            mood: 'happy',
            series: '魔法少女リズミックハート',
            kana: 'まほうしょうじょりずみっくはーと',
            gacha: {
              addSeason: 'ライブグランプリ「104期 2ndTerm 第2回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 4500,
              cool: 3600,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions1_sectionAttract_section',
              name: 'エクステアトラクト',
              AP: 6,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, '8?']
              ]
            },
            skill: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 7,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, '13?'],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, '15?']
              ]
            },
            characteristic: {
              name: 'ジャストドロー：フィーバー/APゲイン & ハートブースト & アトラクトブースト：さやか',
              detail: 'フィーバーセクションでドローした時、APを5回復し、次にさやかが使用するスキルハート獲得効果による獲得数を+225%、ラブアトラクト効果を+75%する。',
              type: ['justDrew', 'APGain', 'boost_heartCaptcha', 'boost_loveAttract', 'sayaka']
            }
          },
          '春風ブランコ': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: '春風ブランコ',
            kana: 'はるかぜぶらんこ',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 4150,
              cool: 3750,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'switchProtect',
              name: 'スイッチプロテクト',
              AP: 4,
              detail: [
                [3.2, 3.52, 3.84, 4.16, 4.48, 4.8, 5.12, 5.44, 5.76, 6.4, 6.72, 7.04, 7.36, 8],
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'レイトドロー：APレデュース',
              detail: '3セクション目以降にドローした時、消費APを-3する。',
              type: ['lateDraw', 'APReduce']
            }
          },
          '抱きしめる花びら': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '抱きしめる花びら',
            kana: 'だきしめるはなびら',
            gacha: {
              addSeason: '2023 GRADUATION LIMITED COLLECTION Vol.2',
              period: 'graduation'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3200,
              pure: 5000,
              cool: 4300,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions1_voltage_stage',
              name: 'エクステボルテージ',
              AP: 5,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
            },
            skill: {
              ID: 'chillVoltage_under3',
              name: 'チルボルテージ',
              AP: 5,
              detail: [
                [12, 13, 14, 16, 17, 18, 19, 20, 22, 24, 25, 26, 28, 29],
                [17, 19, 20, 22, 24, 26, 27, 29, 31, 34, 36, 37, 39, 42]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース & サーチ：綴理',
              detail: 'ドローしたセクションの間、消費APを-3する。さらにスキル使用後、綴理のカードをドローする確率大幅アップ。',
              type: ['draw', 'APReduce', 'search', 'tsuzuri']
            }
          },
          '桃節銘記': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '桃節銘記',
            kana: 'とうせつめいき',
            gacha: {
              addSeason: '2023 GRADUATION LIMITED COLLECTION Vol.1',
              period: 'graduation'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4200,
              pure: 4500,
              cool: 4200,
              mental: 390,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'fascination_section',
              name: 'ファッシネイション',
              AP: 4,
              detail: [
                [6.4, 7, 7.7, 8.3, 9, 9.6, 10.2, 10.8, 11.5, 12.8, 13.4, 14.1, 14.7, 16],
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            characteristic: {
              name: 'ハートコレクト：APレデュース & ボルテージゲイン',
              detail: '手札にある状態でハートを100個回収したとき、このスキルの消費APを-3し、ボルテージPt.を+12する。',
              type: ['heartCollect', 'APReduce', 'voltageGain']
            }
          },
          'Pleasure Feather': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Pleasure Feather',
            kana: 'ぷれじゃーふぇざー',
            gacha: {
              addSeason: 'ライブグランプリ「103期2月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 4600,
              cool: 4100,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_stage',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [3.2, 3.52, 3.84, 4.16, 4.48, 4.8, 5.12, 5.44, 5.76, 6.4, 6.72, 7.04, 7.36, 8]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APReduce']
            }
          },
          'Eisprinzessin': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Eisprinzessin / Eisritter',
            kana: 'あいすぷりんせす',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.5',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3700,
              pure: 3800,
              cool: 4900,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'chillFascinate_under5_stageAttract_voltageGain',
              name: 'チルファッシネイト',
              AP: 7,
              detail: [
                [4.3, 4.7, 5.2, 5.6, 6, 6.5, 6.9, 7.3, 7.7, 8.6, 9, 9.5, 9.9, 10.8],
                [31, 34, 37, 40, 43, 47, 50, 53, 56, 62, 65, 68, 71, 78]
              ]
            },
            skill: {
              ID: 'calmAttract30_sectionAttract',
              name: 'カームアトラクト',
              AP: 3,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ],
              type: ['calm', 'heartCaptcha', 'loveAttract']
            },
            characteristic: {
              name: 'インタープリテーション＆サーチ：綴理',
              detail: 'このスキルのムードによる効果増加量を増加させる。さらにスキル使用後、綴理のカードをドローする確率大幅アップ。',
              type: ['interPretation', 'search', 'tsuzuri']
            }
          },
          '迎春 -舞-': {
            styleType: 'performer',
            mood: 'neutral',
            series: '迎春',
            kana: 'げいしゅん',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.4',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 4000,
              cool: 4600,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyAttract_section_over6_sectionAttract',
              name: 'グルーヴィアトラクト',
              AP: 4,
              detail: [
                [7.2, 7.9, 8.6, 9.4, 10.1, 10.8, 11.5, 12.2, 13, 14.4, 15.1, 15.8, 16.6, 18],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            skill: {
              ID: 'chillVoltage_under5_heartCaptcha',
              name: 'チルボルテージ',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8],
                [17, 19, 20, 22, 24, 26, 27, 29, 31, 34, 36, 37, 39, 42]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：メンタルリカバー',
              detail: '手札にある状態でセクションが変わるたび、メンタルを最大値の8%回復させる。',
              type: ['overSection', 'mentalRecover']
            }
          },
          'ツバサ・ラ・リベルテ': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'ツバサ・ラ・リベルテ',
            kana: 'つばさらりべるて',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.8',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3200,
              pure: 4800,
              cool: 4400,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'cheerfulSupport_over75_section',
              name: 'チアフルサポート',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ]
            },
            characteristic: {
              name: 'APレデュース：メンタル',
              detail: '現在の残りメンタルが多いほどスキルの消費APダウン(最大-4)',
              type: ['APReduce', 'mental']
            }
          },
          'Trick & Cute': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Trick & Cute',
            kana: 'とりっくあんどきゅーと',
            gacha: {
              addSeason: 'ライブグランプリ「103期10月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 3800,
              cool: 4500,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'aggressiveAttract_mentalReduce15_section',
              name: 'アグレッシブアトラクト',
              AP: 3,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
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
            series: 'Take It Over',
            kana: 'ていくいっとおーばー',
            gacha: {
              addSeason: 'ライブグランプリ「103期9月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 3800,
              cool: 4500,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'cheerfulFascinate_section_over75',
              name: 'チアフルファッシネイト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 16]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ハートキャプチャ & メンタルプロテクト：綴理',
              detail: '手札にある状態でセクションが変わるたび、ビートハート4回分のスキルハートを獲得する。さらに手札にある状態で綴理のスキルを使用するたび、このステージ中、メンタルの最大値の2%分のメンタルダメージを無効にする。',
              type: ['overSection', 'heartCaptcha', 'tsuzuri', 'protect_stage']
            }
          },
          '夏めきペイン': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: '夏めきペイン',
            kana: 'なつめきぺいん',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.9',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4200,
              pure: 4000,
              cool: 3800,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'supportedFeel_section',
              name: 'サポーテッドフィール',
              AP: 6,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース & リカバーブースト',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-3し、次に使用するメンタルリカバー効果を+40%する。',
              type: ['overSection', 'APReduce', 'boost_mentalRecover']
            }
          },
          'はじける☆ブルーソーダ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'はじける☆ソーダ',
            kana: 'はじけるぶるーそーだ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.7',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 4500,
              cool: 4400,
              mental: 390,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, 31.5, 33, 34.5, 37.5]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ボルテージゲイン & APレデュース',
              detail: '手札にある状態でセクションが変わるたび、ボルテージPt.を+12し、手札のこのスキルの消費AP-4する。',
              type: ['overSection', 'voltageGain', 'APReduce']
            }
          },
          '金魚◎花火': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '金魚◎花火',
            kana: 'きんぎょはなび',
            gacha: {
              addSeason: 'ライブグランプリ「103期7月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 4400,
              cool: 4200,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 6,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'ドロー：ラブアトラクト & アトラクトブースト',
              detail: 'ドローした時、このセクション中、獲得するLOVEを+7.5%する。さらにこのステージ中、次に使用するラブアトラクト効果を+10%する。',
              type: ['draw', 'loveAttract', 'boost_loveAttract']
            }
          },
          'ペンギンアイス': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'ペンギンアイス',
            kana: 'ぺんぎんあいす',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.4',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3850,
              pure: 4650,
              cool: 4400,
              mental: 390,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ラブアトラクト & APゲイン',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+10%し、APを1回復する。',
              type: ['overSection', 'heartCaptcha', 'APGain']
            }
          },
          'DEEPNESS': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'DEEPNESS',
            kana: 'でぃーぷねす',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.3',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4100,
              pure: 3950,
              cool: 4600,
              mental: 415,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, 2.7, 2.8, 3, '3.2?']
              ]
            },
            characteristic: {
              name: 'チェイン：梢 & ドロー：アトラクトブースト：花帆',
              detail: '梢のスキルを使用した後、ドローされる確率が増加する。さらにドローした時、次に花帆が使用するラブアトラクト効果を+75%する。',
              type: ['chain', 'kozue', 'drew', 'boost_loveAttract', 'kaho']
            }
          },
          'アメアガリストリート': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'アメアガリストリート',
            kana: 'あめあがりすとりーと',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.2',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 3900,
              cool: 4200,
              mental: 410,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [6.4, 7.04, 7.68, 8.32, 8.96, 9.6, 10.24, 10.88, 11.52, 12.8, 13.44, 14.08, 14.72, 16]
              ]
            },
            characteristic: {
              name: 'ドロー：ボルテージゲイン & ブレイブ：リカバーブースト',
              detail: 'ドローした時、ボルテージPt.を+12する。さらにメンタルが50%以下の時にドローすると、次に使用するメンタルリカバー効果を+30%する。',
              type: ['draw', 'voltageGain', 'boost_mentalRecover']
            }
          },
          'Tragic Drops': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Tragic Drops',
            kana: 'とらじっくどろっぷす',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.3',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3700,
              pure: 4000,
              cool: 4800,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 3,
              detail: [
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, '15?']
              ]
            },
            characteristic: {
              name: 'チェイン：さやか & ジャストドロー：フィーバー/APレデュース',
              detail: 'さやかのスキルを使用した後、ドローされる確率が増加する。さらにFEVERセクションでドローした時、消費APを-2する。',
              type: ['chain', 'sayaka', 'justDrew', 'APReduce']
            }
          },
          'チェリー♫ピクニック': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'チェリー♫ピクニック',
            kana: 'ちぇりーぴくにっく',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 4100,
              cool: 3800,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
            },
            characteristic: {
              name: 'APレデュース：綴理 & 花帆',
              detail: '綴理、花帆のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APReduce', 'tsuzuri', 'kaho']
            }
          },
          '春色ニューデイズ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '春色ニューデイズ',
            kana: 'はるいろにゅーでいず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 3800,
              cool: 4600,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'endurance_voltageMental',
              name: 'エンデュランス',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, '25?'],
                [2.8, 3.08, 3.36, 3.64, 3.92, 4.2, 4.48, 4.76, 5.04, 5.6, 5.88, 6.16, 6.44, '7?']
              ]
            },
            characteristic: {
              name: 'ジャストドロー：2/APレデュース',
              detail: '2セクション目でドローした時、消費APを-3する。',
              type: ['justDraw', 'APReduce']
            }
          },
          'AWOKE': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'AWOKE',
            kana: 'あうぉーく',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3800,
              pure: 3800,
              cool: 4800,
              mental: 400,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
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
            series: 'Sparkly Spot',
            kana: 'すぱーくりーすぽっと',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 3400,
              cool: 4500,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [12, 13, 14, 16, 17, 18, 19, 20, 22, 24, 25, 26, 28, 30]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
              ]
            },
            characteristic: {
              name: 'チェイン：綴理 & APレデュース：グルーヴィ',
              detail: '綴理のスキルを使用した後、ドローされる確率が増加する。さらにドローした時ボルテージLv.が5以上のとき、手札のこのスキルの消費AP-2。',
              type: ['chain', 'tsuzuri', 'APReduce', 'groovy']
            }
          }
        },
        R: {
          '室咲格子': {
            styleType: 'performer',
            mood: 'melow',
            series: '室咲格子',
            kana: 'むろざきこうし',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2200,
              pure: 2500,
              cool: 3300,
              mental: 280,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ]
            }
          },
          'レインボーシフォン': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'レインボーシフォン',
            kana: 'れいんぼーしふぉん',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2300,
              pure: 3200,
              cool: 2300,
              mental: 300,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 3,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 16]
              ]
            }
          },
          '華紺青': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '華紺青',
            kana: 'はなこんじょう',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2900,
              pure: 2300,
              cool: 3100,
              mental: 250,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            }
          },
          'オーロラスカイ': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'オーロラスカイ',
            kana: 'おーろらすかい',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2700,
              pure: 2500,
              cool: 2900,
              mental: 270,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
              ]
            }
          }
        }
      },
      rurino: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            kana: '',
            gacha: {
              addSeason: '',
              period: ''
            },
            favorite: [],
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 30,
              pure: 30,
              cool: 30,
              mental: 3,
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
          'Ether Aria': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: 'Ether Aria',
            kana: 'えーてるありあ',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5200,
              pure: 6900,
              cool: 5400,
              mental: 570,
              BP: 100
            },
            specialAppeal: {
              ID: 'fullRecover',
              name: 'フルリカバー',
              AP: 6,
              detail: [
                [2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 4, 4.2, 4.4, 4.6, 5]
              ]
            },
            skill: {
              ID: 'solas',
              name: 'ソラス',
              AP: 5,
              detail: [
                [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.5]
              ]
            },
            characteristic: {
              name: 'ハートコレクト：メンタルリカバー',
              detail: '手札にある状態でハートを30個回収するたび、メンタルを最大値の5%回復する。',
              type: ['heartCollect', 'mentalRecover']
            }
          },
          'Prism Echo': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: 'Prism Echo',
            kana: 'ぷりずむえこー',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5600,
              pure: 6000,
              cool: 5200,
              mental: 640,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_stage',
              name: 'リゲインアトラクト',
              AP: 1,
              detail: [
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, 4, 4.2, 4.4, 4.8]
              ]
            },
            skill: {
              ID: 'regainAttract_stage',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            characteristic: {
              name: 'ドロー：ラブアトラクト & APレデュース：メンタル',
              detail: 'ドローした時、このステージ中、獲得するLOVEを+4%する。さらに現在のメンタルに応じてスキルの消費APダウン',
              type: ['draw', 'loveAttract', 'APReduce', 'mental']
            }
          }
        },
        BR: {
          '17th Birthday': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: 'Birthday',
            kana: 'せぶんてぃーんすばーすでー',
            gacha: {
              addSeason: '2024 BIRTHDAY LIMITED COLLECTION -Rurino-',
              period: 'birthday'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 4800,
              cool: 4800,
              mental: 480,
              BP: 100,
              supportSkill: {
                supportSkillTitle: '17th Birthday',
                supportSkillList: {
                  'ボルテージアップ': {
                    initLevel: 1,
                    levelUp: 5,
                    upLevel: 1
                  },
                  'メンタルリカバー': {
                    initLevel: 1,
                    levelUp: 3,
                    upLevel: 1
                  },
                  'ビートハートアップ': {
                    initLevel: 1,
                    levelUp: 4,
                    upLevel: 1
                  },
                  'LOVEボーナス': {
                    initLevel: 1,
                    levelUp: 2,
                    upLevel: 1
                  }
                }
              }
            },
            specialAppeal: {
              ID: 'chowchowPresent',
              name: 'チャウチャウプレゼント',
              AP: 2,
              detail: [],
              addSkill: [
                {
                  ID: 'chowchowVacances',
                  name: 'チャウチャウバカンス',
                  AP: 3,
                  detail: [
                    [7, 8, 8, 9, 10, 11, 11, 12, 13, 14, 15, 15, 16, 18]
                  ],
                  characteristic: {
                    name: 'チャウチャウフォーエバー',
                    detail: 'このカードはスキル使用時にデッキから除外されない。',
                    type: ['forever']
                  }
                }
              ]
            },
            skill: {
              ID: 'celebration_voltage_mental_heart',
              name: 'セレブレイション',
              AP: 3,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [24, 26.4, 28.8, 31.2, 33.6, 36, 38.4, 40.8, 43.2, 48, 50.4, 52.8, 55.2, 60],
                [24, 26.4, 28.8, 31.2, 33.6, 36, 38.4, 40.8, 43.2, 48, 50.4, 52.8, 55.2, 60]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ブレッシング',
              detail: '手札にある状態でセクションが変わるたび、手札のすべてのスキルの消費AP-1。',
              type: ['overSection', 'APReduce_all']
            }
          }
        },
        UR: {
          '紅葉乃舞姫': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: '紅葉乃舞姫',
            kana: 'こうようのまいひめ',
            gacha: {
              addSeason: '2024 AUTUMN LIMITED COLLECTION vol.4',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4900,
              pure: 5600,
              cool: 3800,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshProtect_stage',
              name: 'リフレッシュプロテクト',
              AP: 5,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'fulnessExtensionProtect_add3_over8_over75',
              name: 'フルネスエクステプロテクト',
              AP: 12,
              detail: [
                [48, 53, 58, 62, 67, 72, 77, 82, 86, 96, 101, 106, 110, 120]
              ]
            },
            characteristic: {
              name: 'ドロー：ボルテージブースト & APレデュース：グルーヴィ & チアフル',
              detail: 'ドローした時、次に使用するボルテージゲイン効果を+16%する。さらにボルテージLv.8以上でドローした時、消費APを-2、メンタル75%以上でドローした時、消費APを-5する。',
              type: ['drew', 'boost_voltageGain', 'APReduce', 'groovy', 'cheerful']
            }
          },
          'ファンファーレ！！！': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'ファンファーレ！！！',
            kana: 'ふぁんふぁーれ',
            gacha: {
              addSeason: 'ライブグランプリ「104期 2ndTerm 第2回サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5450,
              pure: 5050,
              cool: 3800,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentorRecover',
              name: 'メンターリカバー',
              AP: 5,
              detail: [
                [14.4, 15.84, 17.28, 18.72, 20.16, 21.6, 23.04, 24.48, 25.92, 28.8, 30.24, 31.68, 33.12, 36]
              ]
            },
            skill: {
              ID: 'alternate_ignition_hime',
              name: 'オルタネイト：イグニッション',
              AP: 4,
              detail: [],
              addSkill: {
                off: {
                  modeName: '通常',
                  ID: 'ignitionRefresh_hime_mentalRecover_over100',
                  name: 'イグニッションリフレッシュ',
                  AP: 4,
                  detail: [
                    [6.4, 7.04, 7.68, 8.32, 8.96, 9.6, 10.24, 10.88, 11.52, 12.8, 13.44, 14.08, 14.72, 16],
                  ]
                },
                on: {
                  modeName: 'イグニッションモード',
                  ID: 'tagBoost',
                  name: 'タッグブースト',
                  AP: 5,
                  detail: [
                    [100, 110, 120, 130, 140, 150, 160, 170, 180, 200, 210, 220, 230, 250],
                    [16.8, 18.5, 20.2, 21.8, 23.5, 25.2, 26.9, 28.6, 30.2, 33.6, 35.3, 367, 38.6, 42],
                  ]
                }
              }
            },
            characteristic: {
              name: 'オルタネイト：イグニッション',
              detail: '姫芽の《イグニッションモード》の状態に応じて効果が変化する。',
              type: ['alternate'],
              changeCharacteristic: [
                {
                  modeName: '通常',
                  name: 'ドロー：ボルテージゲイン',
                  detail: 'ドローした時、ボルテージPt.を18する。'
                },
                {
                  modeName: 'イグニッションモード',
                  name: 'クールダウン',
                  detail: 'メンタルが最大値の50%以下でドローした時、次にみらくらぱーく！のメンバーが使用するメンタルリカバー効果を+125%する。また手札にある間、メンタルが最大値の50%以下、またはボルテージLv.が3以下のとき、姫芽の《イグニッションモード》を解除する。'
                }
              ]
            }
          },
          'DEEPNESS': {
            styleType: 'trickStar',
            mood: 'melow',
            series: 'DEEPNESS',
            kana: 'でぃーぷねす',
            gacha: {
              addSeason: '2024 AUTUMN LIMITED COLLECTION vol.1',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4350,
              pure: 4200,
              cool: 6050,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions2_voltage_stage',
              name: 'エクステボルテージ',
              AP: 11,
              detail: [
                [48, 53, 58, 62, 67, 72, 77, 82, 86, 96, 101, 106, 110, 120]
              ]
            },
            skill: {
              ID: 'regainExtendAttract_section4',
              name: 'リゲインエクステアトラクト',
              AP: 3,
              detail: [
                [32, 35.2, 38.4, 41.6, 44.8, 48, 51.2, 54.4, 57.6, 64, 67.2, 70.4, 73.6, 80]
              ]
            },
            characteristic: {
              name: 'ミラージュ',
              detail: 'このスキルを6回使用すると、デッキから除外される。',
              type: ['mirage']
            }
          },
          '織姫草紙': {
            styleType: 'trickStar',
            mood: 'melow',
            series: '織姫草紙',
            kana: 'おりひめそうし',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION vol.4',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3950,
              pure: 4700,
              cool: 5750,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions3_protect',
              name: 'エクステプロテクト',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'replayAttraction_section',
              name: 'リプレイアトラクション',
              AP: 15,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [20.4, 22.4, 24.5, 26.5, 28.6, 30.6, 32.6, 34.7, 36.7, 40.8, 42.8, 44.9, 46.9, 51]
              ]
            },
            characteristic: {
              name: 'ジャストドロー：フィナーレ/APレデュース & アザードロー：アトラクトブースト',
              detail: '2～4セクション目でドローした時、消費APを-10する。それ以外のセクションでドローした時、次に使用するスキルハート獲得効果による獲数を+50%する。',
              type: ['justDrew', 'APReduce', 'otherDrew', 'boost_loveAttract']
            }
          },
          'みらくりえーしょん': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: 'みらくりえーしょん',
            kana: 'みらくりえーしょん',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION vol.3',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4700,
              pure: 5800,
              cool: 3500,
              mental: 520,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensionsMentor',
              name: 'エクステメンター',
              AP: 7,
              detail: [
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ]
            },
            skill: {
              ID: 'rebootAttract_mirapa',
              name: 'リブートアトラクト：みらくらぱーく！',
              AP: 4,
              detail: [
                [34, 37.4, 40.8, 44.2, 47.6, 51, 54.4, 57.8, 61.2, 68, 71.4, 74.8, 78.2, 85]
              ]
            },
            characteristic: {
              name: 'オルタネイト：イグニッション',
              detail: '姫芽の《イグニッションモード》の状態に応じて効果が変化する。',
              type: ['alternate'],
              changeCharacteristic: [
                {
                  modeName: '通常',
                  name: 'APゲイン',
                  detail: 'スキル使用時、APを+1する。'
                },
                {
                  modeName: 'イグニッションモード',
                  name: 'ハートアトラククション',
                  detail: 'スキル使用時、ビートハート4回分のスキルハートを獲得し、このセクション中、獲得するLOVEを+8%する。'
                }
              ]
            }
          },
          '悠久の舞踏会': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: '舞踏会',
            kana: 'ゆうきゅうのぶとうかい',
            gacha: {
              addSeason: '2023 PARTY! LIMITED COLLECTION',
              period: 'party'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3600,
              pure: 6500,
              cool: 4300,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'chowchowParty',
              name: 'チャウチャウパーティ',
              AP: 7,
              detail: [],
              addSkill: [
                {
                  ID: 'chowchowPerformance',
                  name: 'チャウチャウパフォーマンス',
                  AP: 1,
                  detail: [
                    [7, 8, 8, 9, 10, 11, 11, 12, 13, 14, 15, 15, 16, 18]
                  ],
                  characteristic: {
                    name: 'チャウチャウフォーエバー',
                    detail: 'このカードはスキル使用時にデッキから除外されない。',
                    type: ['forever']
                  }
                },
                {
                  ID: 'chowchowMoodMake',
                  name: 'チャウチャウムードメイク',
                  AP: 1,
                  detail: [
                    [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, 39.6, 41.4, 45]
                  ],
                  characteristic: {
                    name: 'チャウチャウフォーエバー',
                    detail: 'このカードはスキル使用時にデッキから除外されない。',
                    type: ['forever']
                  }
                },
                {
                  ID: 'chowchowCheerLeading',
                  name: 'チャウチャウチアリーディング',
                  AP: 1,
                  detail: [
                    [14.4, 15.84, 17.28, 18.72, 20.16, 21.6, 23.04, 24.48, 25.92, 28.8, 30.24, 31.68, 33.12, 36]
                  ],
                  characteristic: {
                    name: 'チャウチャウフォーエバー',
                    detail: 'このカードはスキル使用時にデッキから除外されない。',
                    type: ['forever']
                  }
                },
                {
                  ID: 'chowchowTrick',
                  name: 'チャウチャウトリック',
                  AP: 1,
                  detail: [
                    []
                  ],
                  characteristic: {
                    name: 'チャウチャウフォーエバー',
                    detail: 'このカードはスキル使用時にデッキから除外されない。',
                    type: ['forever']
                  }
                }
              ]
            },
            skill: {
              ID: 'regainFascinate_stage',
              name: 'リゲインファッシネイト',
              AP: 1,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8],
                [8, 9, 10, 10, 11, 12, 13, 14, 14, 16, 17, 18, 18, 20]
              ]
            },
            characteristic: {
              name: 'バッテリードレイン',
              detail: '使用するたびに、手札のこのスキルの消費AP+1(最大+9)',
              type: ['APUp']
            }
          },
          'Colorfulness': {
            styleType: 'cheerLeader',
            mood: 'melow',
            series: 'Colorfulness',
            kana: 'からふるねす',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.8',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 4800,
              cool: 5600,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'replayAttraction_section',
              name: 'リプレイアトラクション',
              AP: 7,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ]
            },
            skill: {
              ID: 'recoverAttraction_section',
              name: 'リカバーアトラクション',
              AP: 1,
              detail: [
                [19.2, 21.12, 23.04, 24.96, 26.88, 28.8, 30.72, 32.64, 34.56, 38.4, 40.32, 42.24, 44.16, 48],
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [4.5, 5, 5.4, 5.9, 6.3, 6.8, 7.2, 7.7, 8.1, 9, 9.5, 9.9, 10.4, 11.3]
              ]
            },
            characteristic: {
              name: 'APエスカレート：メンタル',
              detail: '現在の残りメンタルが多いほどスキルの消費AP増加(最大+9 最小+1)',
              type: ['APEscalate' ,'mental']
            }
          },
          '蓮ノ空歌留多': {
            styleType: 'performer',
            mood: 'neutral',
            series: '蓮ノ空歌留多',
            kana: 'はすのそらかるた',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.7',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3850,
              pure: 4700,
              cool: 5550,
              mental: 510,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyHeart_over8_heartCaptcha',
              name: 'グルーヴィハート',
              AP: 4,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 9],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            },
            skill: {
              ID: 'healingHeart_heart_recover',
              name: 'ヒーリングハート',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '10?', 11],
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ボルテージゲイン & APレデュース：瑠璃乃',
              detail: '手札にある状態でセクションが変わるたび、ボルテージPt.を+20する。さらに瑠璃乃のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['overSection', 'voltageGain', 'APReduce' ,'rurino']
            }
          },
          'ミルク': {
            styleType: 'trickStar',
            mood: 'happy',
            series: 'ミルク',
            kana: 'みるく',
            gacha: {
              addSeason: 'サークル対抗戦 -Exhibition- (2024年1月度)',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4700,
              pure: 5400,
              cool: 4000,
              mental: 510,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions3_voltage_section',
              name: 'エクステボルテージ',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'switchAttraction_basis5_stageAttract_heartCaptcha',
              name: 'スイッチアトラクション',
              AP: 4,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8],
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8],
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            characteristic: {
              name: 'APレデュース：慈 & メンタルリカバー：慈',
              detail: '慈のスキルを使用するたび、手札のこのスキルの消費AP-1し、メンタルを最大値の6%回復させる。',
              type: ['APReduce', 'mentalRecover', 'megumi']
            }
          },
          'ハクチューアラモード': {
            styleType: 'trickStar',
            mood: 'happy',
            series: 'ハクチューアラモード',
            kana: 'はくちゅーあらもーど',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.5',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5600,
              pure: 4500,
              cool: 3900,
              mental: 520,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions1_voltage_stage',
              name: 'エクステボルテージ',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'aggressiveRegain10_stageAttract',
              name: 'アグレッシブリゲイン',
              AP: 5,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4]
              ]
            },
            characteristic: {
              name: 'ドロー：ハートキャプチャ',
              detail: 'ドローした時、ビートハート5回分のスキルハートを獲得する。',
              type: ['draw', 'heartCaptcha']
            }
          },
          'Link to the FUTURE': {
            styleType: 'trickStar',
            mood: 'happy',
            series: 'Link to the FUTURE',
            kana: 'りんくとぅーざふゅーちゃー',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION Vol.3',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 6000,
              pure: 5500,
              cool: 4200,
              mental: 550,
              BP: 100
            },
            specialAppeal: {
              ID: 'replayAttraction_section',
              name: 'リプレイアトラクション',
              AP: 7,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ]
            },
            skill: {
              ID: 'extensions4_stageAttract_section',
              name: 'エクステアトラクト',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'サーチ：梢 & APゲイン',
              detail: 'スキル使用後、梢のカードをドローする確率大幅アップ。さらにスキル使用時、3回までAPを5回復する。',
              type: ['search', 'kozue', 'APGain']
            }
          },
          'プチパティシエール': {
            styleType: 'trickStar',
            mood: 'happy',
            series: 'プチパティシエール',
            kana: 'ぷちぱてぃしえーる',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第6回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5400,
              pure: 4900,
              cool: 4300,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshMind',
              name: 'リフレッシュマインド',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ]
            },
            characteristic: {
              name: 'ドロー：ラブアトラクト',
              detail: 'ドローした時、このステージ中、獲得するLOVEを+4%する。',
              type: ['draw', 'loveAttract_stage']
            }
          },
          'コットン=ユートピア': {
            styleType: 'trickStar',
            mood: 'melow',
            series: 'コットン=ユートピア',
            kana: 'こっとんゆーとぴあ',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.7',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 5500,
              cool: 4600,
              mental: 520,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'refreshSupport_stage',
              name: 'リフレッシュサポート',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25],
                [1.6, 1.76, 1.92, 2.08, 2.24, 2.4, 2.56, 2.72, 2.88, 3.2, 3.36, 3.48, 3.64, 4]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース & マチュレーション',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費APを-3し、スキルの効果値が増加する。',
              type: ['overSection', 'APReduce', 'maturation']
            }
          },
          'Trick & Cute': {
            styleType: 'performer',
            mood: 'melow',
            series: 'Trick & Cute',
            kana: 'とりっくあんどきゅーと',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.5',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5100,
              pure: 3700,
              cool: 5600,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions2_stageAttract_section',
              name: 'エクステアトラクト',
              AP: 7,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            skill: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 2,
              detail: [
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, 4, 4.2, 4.4, 4.8]
              ]
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
            series: 'うさぴょん',
            kana: 'うちゅうけいさつうさぴょん',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.4',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 5400,
              cool: 4000,
              mental: 500,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshMind',
              name: 'リフレッシュマインド',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'clutchRecover',
              name: 'クラッチリカバー',
              AP: 5,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25],
                [15.2, 16.72, 18.24, 19.76, 21.28, 22.8, 24.32, 25.84, 27.36, 30.4, 31.92, 33.44, 34.96, 38]
              ]
            },
            characteristic: {
              name: 'APレデュース：ハイメンタル',
              detail: 'メンタルが75%以上の時にドローすると、消費APを-2する。',
              type: ['APReduce', 'hiMental']
            }
          },
          'アイデンティティ': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'アイデンティティ',
            kana: 'あいでんてぃてぃ',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.3',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 5100,
              cool: 4400,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'lowProtect',
              name: 'ロープロテクト',
              AP: 6,
              detail: [
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ]
            },
            skill: {
              ID: 'cheerfulAttract_APGain_over75',
              name: 'チアフルアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：マチュレーション & ワイドハート',
              detail: '手札にある状態でセクションが変わるたび、スキルの効果値が増加する。さらに手札にある間、ハート上限を+50する。',
              type: ['overSection', 'maturation', 'wideHeart']
            }
          },
          'yours ever': {
            styleType: 'performer',
            mood: 'happy',
            series: 'yours ever',
            kana: 'ゆあーずえばー',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第3回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5000,
              pure: 4550,
              cool: 4450,
              mental: 520,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ]
            },
            skill: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 10, 11],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            characteristic: {
              name: 'インタープリテーション & ドロー：ハッピー/ハートブースト',
              detail: 'このスキルのムードによる効果増加量を上昇させる。さらにムードがハッピーでドローした時、次に使用するスキルハート獲得効果による獲得数を+60%する。',
              type: ['interPretation', 'drew', 'boost_heartCaptcha']
            }
          },
          '夏めきペイン': {
            styleType: 'trickStar',
            mood: 'happy',
            series: '夏めきペイン',
            kana: 'なつめきぺいん',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.9',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5500,
              pure: 4300,
              cool: 4000,
              mental: 540,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '9?', 10]
              ]
            },
            skill: {
              ID: 'replayAttraction_section',
              name: 'リプレイアトラクション',
              AP: 5,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 7],
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
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
            series: 'Dream Believers',
            kana: 'どりーむびりーばーず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5500,
              pure: 4500,
              cool: 4000,
              mental: 520,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
            },
            characteristic: {
              name: 'ドロー：ボルテージゲイン & アーリードロー：3/APレデュース',
              detail: 'ドローした時、ボルテージPt.を+18する。さらに3セクション目までにドローした時、消費APを-1する。',
              type: ['draw', 'voltageGain', 'earlyDraw', 'APReduce']
            }
          }
        },
        SR: {
          '春風ブランコ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '春風ブランコ',
            kana: 'はるかぜぶらんこ',
            gacha: {
              addSeason: 'ライブグランプリ「104期 第1回 個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4450,
              pure: 4100,
              cool: 3750,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 26],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ]
            },
            characteristic: {
              name: 'レイトドロー：APレデュース',
              detail: '3セクション目以降にドローした時、消費APを-3する。',
              type: ['lateDraw', 'APReduce']
            }
          },
          '抱きしめる花びら': {
            styleType: 'cheerLeader',
            mood: 'melow',
            series: '抱きしめる花びら',
            kana: 'だきしめるはなびら',
            gacha: {
              addSeason: '2023 GRADUATION LIMITED COLLECTION Vol.2',
              period: 'graduation'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3300,
              pure: 4700,
              cool: 4500,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions1_stageAttract_stage',
              name: 'エクステアトラクト',
              AP: 5,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4]
              ]
            },
            skill: {
              ID: 'chillProtect_under3_stageProtect',
              name: 'チルプロテクト',
              AP: 5,
              detail: [
                [3.2, 3.52, 3.84, 4.16, 4.48, 4.8, 5.12, 5.44, 5.76, 6.4, 6.72, 7.04, 7.36, 8],
                [4.4, 4.84, 5.28, 5.72, 6.16, 6.6, 7.04, 7.48, 7.92, 8.8, 9.24, 9.68, 10.12, 11]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース & サーチ：慈',
              detail: 'ドローしたセクションの間、消費APを-3する。さらにスキル使用後、慈のカードをドローする確率大幅アップ。',
              type: ['draw', 'APReduce', 'search', 'megumi']
            }
          },
          '迎春 -楽-': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '迎春',
            kana: 'げいしゅん',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第7回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 4200,
              cool: 4500,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyRecover_over8_mentalRecover',
              name: 'グルーヴィリカバー',
              AP: 4,
              detail: [
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15],
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'chillFascinate_under5_stageAttract_voltageGain',
              name: 'チルファッシネイト',
              AP: 4,
              detail: [
                [2.3, 2.5, 2.8, 3, 3.2, 3.5, 3.7, 3.9, 4.1, 4.6, 4.8, 5.1, 5.3, 5.8],
                [17, 19, 20, 22, 24, 26, 27, 29, 31, 34, 36, 37, 39, 42]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ハートキャプチャ',
              detail: '手札にある状態でセクションが変わるたび、ビートハート4回分のスキルハートを獲得する。',
              type: ['overSection', 'heartCaptcha']
            }
          },
          'Secret Christmas': {
            styleType: 'trickStar',
            mood: 'happy',
            series: 'Secret Christmas',
            kana: 'しーくれっとくりすます',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.2',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 3300,
              cool: 4600,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ]
            },
            skill: {
              ID: 'switchVoltage',
              name: 'スイッチボルテージ',
              AP: 3,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            },
            characteristic: {
              name: 'チェイン：慈',
              detail: '慈のスキルを使用した時、ドローされる確率が増加する。',
              type: ['chain', 'megumi']
            }
          },
          '冬のおくりもの': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: '冬のおくりもの',
            kana: 'ふゆのおくりもの',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.1',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4200,
              pure: 4600,
              cool: 3700,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'highVoltage_ver2',
              name: 'ハイボルテージ',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
            },
            skill: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
              ]
            },
            characteristic: {
              name: 'フェイバリット：1 & APレデュース：チル',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。さらにドローした時ボルテージLv.が3以下のとき、手札のこのスキルの消費AP-1。',
              type: ['favorite', 'APReduce', 'chill']
            }
          },
          'ツバサ・ラ・リベルテ': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'ツバサ・ラ・リベルテ',
            kana: 'つばさらりべるて',
            gacha: {
              addSeason: 'ライブグランプリ「103期11月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3300,
              pure: 4900,
              cool: 4300,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'cheerfulVoltage_voltageGain',
              name: 'チアフルボルテージ',
              AP: 4,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            characteristic: {
              name: 'APレデュース：メンタル',
              detail: '現在の残りメンタルが多いほどスキルの消費APダウン(最大-4)',
              type: ['APReduce', 'mental']
            }
          },
          '喫茶ハスノソラ': {
            styleType: 'trickStar',
            mood: 'happy',
            series: '喫茶ハスノソラ',
            kana: 'きっさはすのそら',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.6',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 4300,
              cool: 3800,
              mental: 390,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, '7?', 8]
              ]
            },
            skill: {
              ID: 'cheerfulRegain',
              name: 'チアフルリゲイン',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
              ]
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
            series: 'Au Bord du Lac',
            kana: 'あうぼーどどぅらっく',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第4回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3600,
              pure: 4700,
              cool: 4100,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, '10?']
              ]
            },
            skill: {
              ID: 'refreshMind',
              name: 'リフレッシュマインド',
              AP: 4,
              detail: [
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, 10.08, 10.56, 11.04, 12]
              ]
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
            series: 'ゆのくにガールズ！',
            kana: 'ゆのくにがーるず',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 4100,
              cool: 3900,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4]
              ]
            },
            skill: {
              ID: 'cheerfulHeart_over100_heartCaptcha',
              name: 'チアフルハート',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 26]
              ]
            },
            characteristic: {
              name: 'APレデュース：慈',
              detail: '慈のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APReduce', 'megumi']
            }
          },
          '世界中を夢中に': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '世界中を夢中に',
            kana: 'せかいじゅうをむちゅうに',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 4600,
              cool: 3700,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 6,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 28, 30, 32]
              ]
            },
            skill: {
              ID: 'cheerfulEndurance_over75',
              name: 'チアフルエンデュランス',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 28, 30, 32],
                [3.2, 3.52, 3.84, 4.16, 4.48, 4.8, 5.12, 5.44, 5.76, 6.4, 6.72, 7.04, 7.36, 8]
              ]
            },
            characteristic: {
              name: 'チェイン：慈 & ドロー：ボルテージブースト：慈',
              detail: '慈のスキルを使用した後、ドローされる確率が増加する。さらにドローしたとき、次に慈が使用するボルテージゲイン効果を+75%する。',
              type: ['chain', 'megumi', 'drew', 'boost_voltageGain']
            }
          },
          'にゅーかまー！': {
            styleType: 'trickStar',
            mood: 'happy',
            series: 'にゅーかまー！',
            kana: 'にゅーかまー',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.6',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4050,
              pure: 4500,
              cool: 3700,
              mental: 455,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 6,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
            },
            skill: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 4,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, 2.7, 2.9, 3, 3.2]
              ]
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
            series: '@いっつぁどりーみんわーるど！',
            kana: 'いっつぁどりーみんわーるど',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 4500,
              cool: 3400,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, '10?']
              ]
            },
            skill: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 6,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
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
            series: 'One Day',
            kana: 'あーるずわんでい',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4100,
              pure: 4300,
              cool: 3800,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshMind',
              name: 'リフレッシュマインド',
              AP: 6,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'refreshMind',
              name: 'リフレッシュマインド',
              AP: 4,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            characteristic: {
              name: 'ドロー：メンタルリカバー',
              detail: 'ドローした際、メンタルを最大値の6%回復させる。',
              type: ['draw', 'mentalRecover']
            }
          }
        },
        R: {
          '室咲格子': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '室咲格子',
            kana: 'むろざきこうし',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2400,
              pure: 2600,
              cool: 2900,
              mental: 290,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, 4, 4.2, 4.4, 4.8]
              ]
            }
          },
          'レインボーシフォン': {
            styleType: 'trickStar',
            mood: 'happy',
            series: 'レインボーシフォン',
            kana: 'れいんぼーしふぉん',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3200,
              pure: 2600,
              cool: 2000,
              mental: 300,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 6,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
            },
            skill: {
              ID: 'regainRecover',
              name: 'リゲインリカバー',
              AP: 4,
              detail: [
                [3.2, 3.52, 3.84, 4.16, 4.48, 4.8, 5.12, 5.44, 5.76, 6.4, 6.72, 7.04, 7.36, 8]
              ]
            }
          },
          '華紺青': {
            styleType: 'performer',
            mood: 'happy',
            series: '華紺青',
            kana: 'はなこんじょう',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3100,
              pure: 2500,
              cool: 2100,
              mental: 310,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 6,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
            },
            skill: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 4,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 16]
              ]
            }
          },
          'オーロラスカイ': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: 'オーロラスカイ',
            kana: 'おーろらすかい',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3000,
              pure: 2600,
              cool: 2200,
              mental: 300,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 6,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ]
            }
          }
        }
      },
      kozue: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            kana: '',
            gacha: {
              addSeason: '',
              period: ''
            },
            favorite: [],
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 30,
              pure: 30,
              cool: 30,
              mental: 3,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {}
            },
            skill: {
              name: '',
              AP: 1,
              detail: {}
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        DR: {
          'Ether Aria': {
            styleType: 'performer',
            mood: 'melow',
            series: 'Ether Aria',
            kana: 'えーてるありあ',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5400,
              pure: 5400,
              cool: 6800,
              mental: 560,
              BP: 100
            },
            specialAppeal: {
              ID: 'attractionGain',
              name: 'アトラクションゲイン',
              AP: 6,
              detail: [
                [8, 9, 10, 10, 11, 12, 13, 14, 14, 16, 17, 18, 18, 20],
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'heartTuning',
              name: 'ハートチューニング',
              AP: 5,
              detail: [
                [40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 100],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25],
                [4, 5, 5, 5, 6, 6, 7, 7, 7, 8, 9, 9, 9, 10]
              ]
            },
            characteristic: {
              name: 'ドロー：エクステンドハンド & ハートブースト',
              detail: 'ドローした時、セクション中、手札上限を1枚増加し、次に使用するスキルハート獲得効果による獲得数を+50%する。',
              type: ['draw', 'extendHand', 'heartBoost']
            }
          },
          'Prism Echo': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Prism Echo',
            kana: 'ぷりずむえこー',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 6000,
              pure: 5600,
              cool: 5200,
              mental: 640,
              BP: 100
            },
            specialAppeal: {
              ID: 'fascination_stage',
              name: 'ファッシネイション',
              AP: 1,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4],
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 16]
              ]
            },
            skill: {
              ID: 'loveCaptivate',
              name: 'ラブキャブティベイト',
              AP: 2,
              detail: [
                [1.5, 1.7, 1.8, 2, 2.1, 2.3, 2.4, 2.6, 2.7, 3, 3.2, 3.3, 3.5, 3.8],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11, 12]
              ]
            },
            characteristic: {
              name: 'アキューミュレイト',
              detail: 'このスキルを使用する度に、5回までスキルの効果値が増加する。',
              type: ['accumulate']
            }
          }
        },
        BR: {
          '18th Birthday': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: 'Birthday',
            kana: 'えいてぃーんばーすでー',
            gacha: {
              addSeason: '2024 BIRTHDAY LIMITED COLLECTION -Kozue-',
              period: 'birthday'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 4800,
              cool: 4800,
              mental: 480,
              BP: 100,
              supportSkill: {
                supportSkillTitle: '18th Birthday',
                supportSkillList: {
                  'ボルテージアップ': {
                    initLevel: 1,
                    levelUp: 3,
                    upLevel: 1
                  },
                  'メンタルリカバー': {
                    initLevel: 1,
                    levelUp: 4,
                    upLevel: 1
                  },
                  'ビートハートアップ': {
                    initLevel: 1,
                    levelUp: 5,
                    upLevel: 1
                  },
                  'LOVEボーナス': {
                    initLevel: 1,
                    levelUp: 2,
                    upLevel: 1
                  }
                }
              }
            },
            specialAppeal: {
              ID: 'heatUp_stage',
              name: 'ヒートアップ',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'celebration_attract_voltage_mental',
              name: 'セレブレイション',
              AP: 3,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [24, 26.4, 28.8, 31.2, 33.6, 36, 38.4, 40.8, 43.2, 48, 50.4, 52.8, 55.2, 60]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ブレッシング',
              detail: '手札にある状態でセクションが変わるたび、手札のすべてのスキルの消費AP-1。',
              type: ['overSection', 'APReduce_all']
            }
          }
        },
        UR: {
          '輪廻の銀河へ': {
            styleType: 'performer',
            mood: 'melow',
            series: '銀河',
            kana: 'りんねのぎんがへ',
            gacha: {
              addSeason: '2024 PARTY! LIMITED COLLECTION',
              period: 'party'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 3900,
              cool: 6200,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'ultimateForce',
              name: 'アルティメットフォース',
              AP: 12,
              detail: []
            },
            skill: {
              ID: 'cheerfulAttraction_over100_stage',
              name: 'チアフルアトラクション',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            characteristic: {
              name: 'アッチェレランド',
              detail: '使用するたび、手札のこのスキルの消費AP+3(最大15)し、さらに5回までスキルの効果量が上昇する。',
              type: ['APGain']
            }
          },
          'PASSION!!!!!!': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'PASSION!!!!!!',
            kana: 'ぱっしょん',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.7',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3840,
              pure: 6960,
              cool: 6360,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions3_recover_heat_section',
              name: 'エクステリカバーヒート',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'groovyHeat_section_over10',
              name: 'グルーヴィヒート',
              AP: 3,
              detail: [
                [17.3, 19, 20.7, 22.4, 24.2, 25.9, 27.6, 29.4, 31.1, 34.6, 36.3, 38, 39.7, 43.2]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ヒートアップ & リシャッフル',
              detail: '手札にある状態でセクションが変わった時、このセクション中、AP回復速度を+15%し、手札を全て捨てて、デッキから手札上限までスキルを引く。',
              type: ['overSection', 'APFast_section', 'reShuffle']
            }
          },
          'アオクハルカ': {
            styleType: 'trickStar',
            mood: 'melow',
            series: 'アオクハルカ',
            kana: 'あおくはるか',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.5',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 5500,
              cool: 4200,
              mental: 510,
              BP: 100
            },
            specialAppeal: {
              ID: 'wideExtend_stage1_2',
              name: 'ワイドエクステンド',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'dress_aokuharuka_kozue',
              name: 'ドレス《アオクハルカ》',
              AP: 3,
              detail: [],
              addSkill: [
                {
                  ID: 'loveAttract',
                  name: 'ラブアトラクト',
                  AP: 3,
                  detail: [
                    [40, 44, 48, 52, 56, 60, 64, 68, 72, 80, 84, 88, 92, 100]
                  ],
                  characteristic: {
                    name: 'インスタンス & ドロー：アトラクトブースト',
                    detail: 'このスキルを使用すると、デッキから除外される。さらにドローした時、次に使用するラブアトラクト効果を+16%する。',
                    type: ['exclusion', 'boost_loveAttract']
                  }
                }
              ]
            },
            characteristic: {
              name: 'ボルテージゲイン & ワイドハート：スリーズブーケ',
              detail: '手札にある状態でスリーズブーケのスキルを使用するたび、ボルテージPt.を+5し、このステージ中、ハート上限を+4する。',
              type: ['voltageGain', 'heartLimitUp']
            }
          },
          'H.S.C.T.☆': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'hsct',
            kana: 'hsct',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.1',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5000,
              pure: 4900,
              cool: 4000,
              mental: 530,
              BP: 100
            },
            specialAppeal: {
              ID: 'protectGain',
              name: 'プロテクトゲイン',
              AP: 3,
              detail: [
                [3.2, 3.52, 3.84, 4.16, 4.48, 4.8, 5.12, 5.44, 5.76, 6.4, 6.72, 7.04, 7.36, 8]
              ]
            },
            skill: {
              ID: 'boostedFeel',
              name: 'ブーステッドフィール',
              AP: 3,
              detail: [
                [1.2, 1.32, 1.44, 1.56, 1.68, 1.8, 1.92, 2.04, 2.16, 2.4, 2.52, 2.64, 2.76, 3],
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13],
                [8.7, '9.57?', '10.44?', '11.31?', '12.18?', '13.05?', '13.92?', '14.79?', '15.66?', '17.4?', '18.27?', '19.14?', '20.01?', 21.6],
              ]
            },
            characteristic: {
              name: 'ショット：ヒートアップ',
              detail: 'スキル使用時4回まで、このステージ中、AP回復速度を+5%する。',
              type: ['APFast_stage']
            }
          },
          '365 Days': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '365 Days',
            kana: 'えぶりでい',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION Vol.5',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5350,
              pure: 4600,
              cool: 3950,
              mental: 530,
              BP: 100
            },
            specialAppeal: {
              ID: 'rebootExtend_stage1_stageAttract',
              name: 'リブートエクステンド',
              AP: 5,
              detail: [
                [13.6, 15, 16.4, 17.8, 19.2, 20.6, 22, 23.4, 24.8, 26.2, '?', '?', '?', 34]
              ]
            },
            skill: {
              ID: 'aggressiveAttractBoost_mentalReduce3',
              name: 'アグレッシブアトラクトブースト',
              AP: 3,
              detail: [
                [10.8, 11.9, 13, 14.1, 15.2, 16.3, 17.4, 18.5, 19.6, 20.7, '?', '?', '?', 27]
              ]
            },
            characteristic: {
              name: 'APゲイン & アンコール',
              detail: 'スキル使用時、APを+2し、山札に戻る。',
              type: ['APGain', 'encore']
            }
          },
          '抱きしめる花びら': {
            styleType: 'performer',
            mood: 'melow',
            series: '抱きしめる花びら',
            kana: 'だきしめるはなびら',
            gacha: {
              addSeason: 'ライブグランプリ「103期3月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3600,
              pure: 5900,
              cool: 5000,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensionsHeart_section3',
              name: 'エクステハート',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, '10?']
              ]
            },
            skill: {
              ID: 'groovyAttraction_section_over10_heartCaptcha_sectionAttract',
              name: 'グルーヴィアトラクション',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, '8?'],
                [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, 39.6, 41.4, 45]
              ]
            },
            characteristic: {
              name: 'ドロー：ラブアトラクト & ショット：ラブアトラクト',
              detail: 'ドローした時、このステージ中、獲得するLOVEを+4%する。さらにスキル使用時2回まで、このセクション中、獲得するLOVEを+102%する。',
              type: ['draw', 'loveAttract_stage', 'shot', 'loveAttract_section']
            }
          },
          '桃節銘記': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '桃節銘記',
            kana: 'とうせつめいき',
            gacha: {
              addSeason: '2023 GRADUATION LIMITED COLLECTION Vol.1',
              period: 'graduation'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 5500,
              cool: 4800,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'protectFeel_stageAttract_stageProtect',
              name: 'プロテクトフィール',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8],
                [2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 4, 4.2, 4.4, 4.6, 5]
              ]
            },
            skill: {
              ID: 'supportedFeel_stageAttract_mentalRecover',
              name: 'サポーテッドフィール',
              AP: 4,
              /*AP: {
                max: 9,
                min: 1
              },*/
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4],
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            characteristic: {
              name: 'ハートコレクト：APレデュース & ハートキャプチャ',
              detail: '手札にある状態でハートを50個回収したとき、このスキルの消費APを-3し、ビートハート4個分のスキルハートを獲得する。',
              type: ['heartCollect', 'APReduce', 'heartCaptcha']
            }
          },
          'ダイヤモンドハッピー': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'アイカツ!コラボ',
            kana: 'だいやもんどはっぴー',
            gacha: {
              addSeason: 'AIKATSU! LIMITED COLLECTION',
              period: 'collaboration'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 1,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5400,
              pure: 4600,
              cool: 4400,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyAttraction_section_over10_heartCaptcha_sectionAttract',
              name: 'グルーヴィアトラクション',
              AP: 6,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15],
                [21.6, 23.8, 25.9, 28.1, 30.2, 32.4, 34.6, 36.7, 38.9, 43.2, 45.4, 47.5, 49.7, 54]
              ]
            },
            skill: {
              ID: 'triangleLight_stage',
              name: 'トライアングルライト',
              AP: 9,
              /*AP: {
                max: 9,
                min: 1
              },*/
              detail: [
                [4.5, 5, 5.4, 5.9, 6.3, 6.8, 7.2, 7.7, 8.1, 9, 9.5, 9.9, 10.4, 11.3],
                [18, 20, 22, 23, 25, 27, 29, 31, 32, 36, 38, 40, 41, 45],
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, 10.08, 10.56, 11.04, 12]
              ]
            },
            characteristic: {
              name: 'APレデュース：梢 & 綴理 & 慈',
              detail: '梢、綴理、慈のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APReduce', 'kozue', 'tsuzuri', 'megumi']
            }
          },
          '蓮ノ空歌留多': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '蓮ノ空歌留多',
            kana: 'はすのそらかるた',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.4',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 4700,
              cool: 5200,
              mental: 500,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyAttraction_stage_over8_heartCaptcha',
              name: 'グルーヴィアトラクション',
              AP: 4,
              detail: [
                [2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.6, 4.9, 5.2, 5.8, 6.1, 6.4, 6.7, 7.2],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            },
            skill: {
              ID: 'endurance_voltageMental',
              name: 'エンデュランス',
              AP: 4,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ボルテージゲイン & APレデュース：梢',
              detail: '手札にある状態でセクションが変わるたび、ボルテージPt.を+20する。さらに梢のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['overSection', 'voltageGain', 'APReduce' ,'kozue']
            }
          },
          '冬のおくりもの': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '冬のおくりもの',
            kana: 'ふゆのおくりもの',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.1',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4700,
              pure: 5100,
              cool: 4600,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions3_stageAttract_section',
              name: 'エクステアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            skill: {
              ID: 'chillAttract_under3_stage',
              name: 'チルアトラクト',
              AP: 3,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            characteristic: {
              name: 'フェイバリット：1',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が大幅に増加する。',
              type: ['favorite', 'mental']
            }
          },
          'ツバサ・ラ・リベルテ': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: 'ツバサ・ラ・リベルテ',
            kana: 'つばさらりべるて',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.8',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 5500,
              cool: 4500,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'protectFeel_stageAttract',
              name: 'プロテクトフィール',
              AP: 8,
              detail: [
                [6.8, 7.48, 8.16, 8.84, 9.52, 10.2, 10.88, 11.56, 12.24, 13.6, 14.28, 14.96, 15.64, 17],
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            characteristic: {
              name: 'APレデュース：メンタル',
              detail: '現在の残りメンタルが多いほどスキルの消費APダウン(最大-6)',
              type: ['APReduce', 'mental']
            }
          },
          '奇跡の舞踏会': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '舞踏会',
            kana: 'きせきのぶとうかい',
            gacha: {
              addSeason: '2023 PARTY! LIMITED COLLECTION',
              period: 'party'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 6000,
              pure: 4300,
              cool: 4100,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'quickForm',
              name: 'クイックフォーム',
              AP: 7,
              detail: [
                [14, 15.4, 16.8, 18.2, 19.6, 21, 22.4, 23.8, 25.2, 28, 29.4, 30.8, 32.2, 35]
              ]
            },
            skill: {
              ID: 'vortexAttraction_stage',
              name: 'ボルテックスアトラクション',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, 4, 4.2, 4.4, 4.8],
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 9]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：リシャッフル',
              detail: '手札にある状態でセクションが変わるたび、手札を全て捨てて、デッキから手札上限までスキルを引く。',
              type: ['overSection', 'reShuffle']
            }
          },
          '秋色カントリーロード': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '秋色カントリーロード',
            kana: 'あきいろかんとりーろーど',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.1',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 5000,
              cool: 4300,
              mental: 540,
              BP: 100
            },
            specialAppeal: {
              ID: 'cheerfulSupport_over75_stage',
              name: 'チアフルサポート',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30],
                [2.4, 2.6, 2.9, 3.1, 3.4, 3.6, 3.8, 4.1, 4.3, 4.8, 5, 5.3, 5.5, 6]
              ]
            },
            skill: {
              ID: 'cheerfulAttract_over75_stageAttract_over100_stageAttract',
              name: 'チアフルアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12],
                [2.4, 2.6, 2.9, 3.1, 3.4, 3.6, 3.8, 4.1, 4.3, 4.8, 5, 5.3, 5.5, 6],
                [7.2, 7.9, 8.6, 9.4, 10.1, 10.8, 11.5, 12.2, 13, 14.4, 15.1, 15.8, 16.6, 18],
              ]
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
            series: 'はじける☆ソーダ',
            kana: 'はじけるめろんそーだ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.7',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5100,
              pure: 5400,
              cool: 4350,
              mental: 435,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ラブアトラクト & APレデュース',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+15%し、手札のこのスキルの消費AP-4する。',
              type: ['overSection', 'loveAttract', 'APReduce']
            }
          },
          'DEEPNESS': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'DEEPNESS',
            kana: 'でぃーぷねす',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.3',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 4200,
              cool: 6100,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'fascination_voltageGain',
              name: 'ファッシネイション',
              AP: 7,
              detail: [
                [23, 25, 28, 30, 32, 35, 37, 39, 41, 46, 48, 51, 53, 58],
                [2.4, 2.6, 2.9, 3.1, 3.4, 3.6, 3.8, 4.1, 4.3, 4.8, 5, 5.3, 5.5, 6]
              ]
            },
            skill: {
              ID: 'groovyAttract_stage_over10_stageAttract',
              name: 'グルーヴィアトラクト',
              AP: 1,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, 2.7, 2.9, 3, 3.2],
                [1.5, 1.7, 1.8, 2, 2.1, 2.3, 2.4, 2.6, 2.7, 3, 3.2, 3.3, 3.5, 3.9],
              ]
            },
            characteristic: {
              name: 'チェイン：花帆 & ドロー：APゲイン & アトラクトブースト：さやか',
              detail: '花帆のスキルを使用した後、ドローされる確率が増加する。ドローした時、AP+1し、次にさやかが使用するラブアトラクト効果を+120%する。',
              type: ['kaho', 'draw', 'APGain', 'boost_loveAttract', 'sayaka']
            }
          },
          '金魚◎花火': {
            styleType: 'cheerLeader',
            mood: 'melow',
            series: '金魚◎花火',
            kana: 'きんぎょはなび',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第1回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5000,
              pure: 4800,
              cool: 4600,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 8,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 2,
              detail: [
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, 10.08, 10.56, 11.04, 12]
              ]
            },
            characteristic: {
              name: 'フェイバリット：3 & ドロー：リカバーブースト',
              detail: 'フィーバーセクションを除いた3セクション目でドローされる確率が増加する。さらにこのステージ中、ドローした時、次に使用するメンタルリカバー効果を+50%する。',
              type: ['favorite', 'drew', 'boost_mentalRecover']
            }
          },
          'フォーチュンムービー': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'フォーチュンムービー',
            kana: 'ふぉーちゅんむーびー',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5150,
              pure: 5000,
              cool: 4500,
              mental: 455,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：メンタルリカバー & マチュレーション',
              detail: '手札にある状態でセクションが変わるたび、メンタルを最大値の12%回復し、さらにスキルの効果値が増加する。',
              type: ['overSection', 'mentalRecover', 'maturation']
            }
          },
          '雨と紫陽花に唄へば': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '雨と紫陽花に唄へば',
            kana: 'あめとあじさいにうたへば',
            gacha: {
              addSeason: 'ログインボーナス',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 4600,
              cool: 5400,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            characteristic: {
              name: 'フェイバリット：スタート & オーバーセクション：APレデュース & マチュレーション',
              detail: '初期手札に加わる確率が増加する。さらに手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-3し、スキルの効果値が増加する。',
              type: ['favorite', 'overSection', 'APReduce', 'maturation']
            }
          },
          'Holiday∞Holiday': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Holiday∞Holiday',
            kana: 'ほりでーほりでー',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.3',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4900,
              pure: 5150,
              cool: 4450,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, 39.6, 41.4, 45]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 3,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4]
              ]
            },
            characteristic: {
              name: 'チェイン：梢 & アーリードロー：2/APレデュース & APゲイン',
              detail: '梢のスキルを使用した後、ドローされる確率が増加し、2セクション目までにドローした時、消費APを-2する。さらにスキル使用時、APを+1する。',
              type: ['chain', 'kozue', 'earlyDrew', 'APReduce', 'APGain']
            }
          },
          'チェリー♫ピクニック': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'チェリー♫ピクニック',
            kana: 'ちぇりーぴくにっく',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5000,
              pure: 5700,
              cool: 3900,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            characteristic: {
              name: 'フェイバリット：1 & アーリードロー：2/APレデュース',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。さらに2セクション目までにドローした時、消費APを-3する。',
              type: ['favorite', 'earlyDrew', 'APReduce']
            }
          },
          'Reflection in the mirror': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Reflection in the mirror',
            kana: 'りふれくしょんいんざみらー',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5300,
              pure: 4900,
              cool: 4600,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            characteristic: {
              name: 'ドロー：メンタルリカバー & APレデュース：チアフル',
              detail: 'ドローした時、メンタルを最大値の10%回復する。さらにメンタルが50%以上の時にドローすると、消費APを-3する。',
              type: ['draw', 'mentalRecover', 'APReduce', 'cheerful']
            }
          },
          '春色ニューデイズ': {
            styleType: 'performer',
            mood: 'happy',
            series: '春色ニューデイズ',
            kana: 'はるいろにゅーでいず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5400,
              pure: 4600,
              cool: 4200,
              mental: 500,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            characteristic: {
              name: 'アーリードロー：APレデュース',
              detail: '3セクション目までにドローした時、消費APを-3する。',
              type: ['earlyDraw', 'APReduce']
            }
          },
          'Dream Believers': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Dream Believers',
            kana: 'どりーむびりーばーず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5600,
              pure: 4800,
              cool: 4000,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            characteristic: {
              name: 'フェイバリット：スタート & オーバーセクション：APレデュース & ラブアトラクト',
              detail: '初期手札に加わる確率が大幅に増加する。さらに手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-4し、このステージ中、獲得するLOVEを+4%する。',
              type: ['favorite', 'overSection', 'APReduce', 'loveAttract']
            }
          }
        },
        SR: {
          '月夜見海月': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '月夜見海月',
            kana: 'つくよみくらげ',
            gacha: {
              addSeason: '2024 AUTUMN LIMITED COLLECTION Vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 4400,
              cool: 4500,
              mental: 390,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainBubbling',
              name: 'リゲインバブリング',
              AP: 7,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ],
              addSkill: [
                {
                  ID: 'bubble_minus3_ceriseBouquet_dressCard',
                  name: 'バブル',
                  AP: 1,
                  detail: [],
                  characteristic: {
                    name: 'ポッピング',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            },
            skill: {
              ID: 'abunDanceAttract_over30_stage',
              name: 'アバンダンスアトラクト',
              AP: 3,
              detail: [
                [2.9, 3.2, 3.5, 3.8, 4.1, 4.4, 4.6, 4.9, 5.2, 5.8, 6.1, 6.4, 6.7, 7.2],
                [32, 35.2, 38.4, 41.6, 44.8, 48, 51.2, 54.4, 57.6, 64, 67.2, 70.4, 73.6, 80]
              ]
            },
            characteristic: {
              name: 'ドロー：バブリング',
              detail: 'ドローした時、バブルカードを1種類(合計1枚)山札に追加する。',
              type: ['drew', 'addCard'],
              addSkill: [
                {
                  ID: 'bubble_minus3_ceriseBouquet_dressCard',
                  name: 'バブル',
                  AP: 1,
                  detail: [],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            }
          },
          'おしえて♡ティーチャー': {
            styleType: 'performer',
            mood: 'melow',
            series: 'おしえて♡ティーチャー',
            kana: 'おしえててぃーちゃー',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第9回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3800,
              pure: 3900,
              cool: 4600,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'aggressiveHeart_mentalReduce10',
              name: 'アグレッシブハート',
              AP: 2,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, '6?']
              ]
            },
            characteristic: {
              name: 'ドロー：メンタルリカバー',
              detail: 'ドローした時、メンタルを最大値の6%回復させる。',
              type: ['draw', 'mentalRecover']
            }
          },
          'Pleasure Feather': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Pleasure Feather',
            kana: 'ぷれじゃーふぇざー',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.8',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3800,
              pure: 4700,
              cool: 4200,
              mental: 410,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APReduce']
            }
          },
          '節分 -魅-': {
            styleType: 'performer',
            mood: 'neutral',
            series: '節分',
            kana: 'せつぶん',
            gacha: {
              addSeason: 'ライブグランプリ「第8回 個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3500,
              pure: 4300,
              cool: 4500,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyAttract_stage_over8_sectionAttract',
              name: 'グルーヴィアトラクト',
              AP: 4,
              detail: [
                [2.3, 2.5, 2.8, 3, 3.2, 3.5, 3.7, 3.9, 4.1, 4.6, 4.8, 5.1, 5.3, 5.8],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            skill: {
              ID: 'calmAttraction20_heartCaptcha_stageAttract',
              name: 'カームアトラクション',
              AP: 4,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, '9?'],
                [1.6, 1.8, 1.9, 2.1, 2.2, 2.4, 2.6, 2.7, 2.9, 3.2, 3.4, 3.5, 3.7, 4]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このステージ中、獲得するLOVEを+3.2%する。',
              type: ['overSection', 'loveAttract']
            }
          },
          'Special Thanks': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Special Thanks',
            kana: 'すぺしゃるさんくす',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION Vol.6',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4100,
              pure: 4600,
              cool: 3700,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.76, 6.4, 6.72, 7.04, 7.36, 8]
              ]
            },
            skill: {
              ID: 'groovyBoost_over10_stageAttract_boost',
              name: 'グルーヴィブースト',
              AP: 6,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.76, 6.4, 6.72, 7.04, 7.36, 8],
                [60, 66, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126, 132, 150],
              ],
              type: ['groovy', 'loveAttraction', 'heartBoost']
            },
            characteristic: {
              name: 'APレデュース：花帆 & ハートキャプチャ：花帆',
              detail: '花帆のスキルを使用するたび、手札のこのスキルの消費AP-1し、ビートハート2回分のスキルハートを獲得する。',
              type: ['APReduce', 'heartCaptcha', 'kaho']
            }
          },
          'Link to the FUTURE': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Link to the FUTURE',
            kana: 'りんくとぅーざふゅーちゃー',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION Vol.3',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5100,
              pure: 4500,
              cool: 4000,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'fascination_stage',
              name: 'ファッシネイション',
              AP: 6,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8],
                [8, 9, 10, 10, 11, 12, 13, 14, 14, 16, 17, 18, 18, 20]
              ]
            },
            skill: {
              ID: 'groovyAttract_stage_over6_stageAttract',
              name: 'グルーヴィアトラクト',
              AP: 5,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4],
                [2.2, 2.4, 2.6, 2.9, 3.1, 3.3, 3.5, 3.7, 4, 4.4, 4.6, 4.8, 5.1, 5.6]
              ]
            },
            characteristic: {
              name: 'サーチ：花帆 & APゲイン',
              detail: 'スキル使用後、花帆のカードをドローする確率大幅アップ。さらにスキル使用時、3回までAPを3回復する。',
              type: ['search', 'kaho', 'APGain']
            }
          },
          '喫茶ハスノソラ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '喫茶ハスノソラ',
            kana: 'きっさはすのそら',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第5回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 4500,
              cool: 3900,
              mental: 380,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, '8?']
              ]
            },
            skill: {
              ID: 'cheerfulAttract_loveAttract_over50',
              name: 'チアフルアトラクト',
              AP: 3,
              detail: [
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, 4, 4.2, 4.4, 4.8],
                [0.6, 0.7, 0.7, 0.8, 0.8, 0.9, 1, 1, 1.1, 1.2, 1.3, 1.3, 1.4, '1.5?']
              ]
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
            series: 'Trick & Cute',
            kana: 'とりっくあんどきゅーと',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.5',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4200,
              pure: 3700,
              cool: 4600,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 3,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
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
            series: '素顔のピクセル',
            kana: 'すがおのぴくせる',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.3',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 4100,
              cool: 3600,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            skill: {
              ID: 'cheerfulProtect_loveAttract',
              name: 'チアフルプロテクト',
              AP: 5,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10],
                [1.6, 1.8, 1.9, 2.1, 2.2, 2.4, 2.6, 2.7, 2.9, 3.2, 3.4, 3.5, 3.7, 4]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース & ハートキャプチャ：花帆',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-3。さらに手札にある状態で花帆のスキルを使用するたび、ビートハート2回分のスキルハートを獲得する。',
              type: ['overSection', 'APReduce', 'heartCaptcha', 'kaho']
            }
          },
          '夏めきペイン': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: '夏めきペイン',
            kana: 'なつめきぺいん',
            gacha: {
              addSeason: 'ライブグランプリ「103期8月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 4200,
              cool: 3600,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 3,
              detail: [
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, 10.08, 10.56, 11.04, 12]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ラブアトラクト & リカバーブースト',
              detail: '手札にある状態でセクションが変わるたび、このステージ中、獲得するLOVEを+3.2%し、さらに次に使用するメンタルリカバー効果を+40%する。',
              type: ['overSection', 'loveAttract', 'boost_mentalRecover']
            }
          },
          'SPLASH!!!!': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: 'SPLASH!!!!',
            kana: 'すぷらっしゅ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.8',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 4500,
              cool: 3600,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            characteristic: {
              name: 'APレデュース：花帆 & リカバーブースト：花帆',
              detail: '花帆のスキルを使用するたび、手札のこのスキルの消費AP-2し、次に使用するメンタルリカバー効果を+20%する。',
              type: ['APReduce', 'boost_mentalRecover', 'kaho']
            }
          },
          '眩耀夜行': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '眩耀夜行',
            kana: 'げんようやこう',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.6',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 4100,
              cool: 3800,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            characteristic: {
              name: 'インタープリテーション & ドロー：アトラクトブースト：スリーズブーケ',
              detail: 'このスキルのムードによる効果増加量を上昇させる。さらにドローした時、次にスリーズブーケのメンバーが使用するラブアトラクト効果を+25%する。',
              type: ['interPretation', 'drew', 'boost_loveAttract']
            }
          },
          '朝顔令嬢': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: '朝顔令嬢',
            kana: 'あさがおれいじょう',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.5',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4200,
              pure: 3900,
              cool: 4600,
              mental: 410,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, 2.7, 2.8, 3, 3.2]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース & APゲイン',
              detail: 'ドローしたセクションの間、消費APを-3する。さらにスキル使用時、APを+1する。',
              type: ['draw', 'APReduce', 'APGain']
            }
          },
          'ペンギンアイス': {
            styleType: 'performer',
            mood: 'happy',
            series: 'ペンギンアイス',
            kana: 'ぺんぎんあいす',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.4',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4100,
              pure: 4850,
              cool: 3850,
              mental: 400,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 8,
              detail: [
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ボルテージゲイン & APゲイン',
              detail: '手札にある状態でセクションが変わるたび、ボルテージPt.を+12し、APを1回復する。',
              type: ['overSection', 'voltageGain', 'APGain']
            }
          },
          'アメアガリストリート': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'アメアガリストリート',
            kana: 'あめあがりすとりーと',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.1',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 4250,
              cool: 3650,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [6.4, 7.04, 7.68, 8.32, 8.96, 9.6, 10.24, 10.88, 11.52, 12.8, 13.44, 14.08, 14.72, 16]
              ]
            },
            characteristic: {
              name: 'ドロー：ラブアトラクト & ブレイブ：リカバーブースト',
              detail: 'ドローした時、このステージ中、獲得するLOVEを+2.4%する。さらにメンタルが50%以下の時にドローすると、次に使用するメンタルリカバー効果を+30%する。',
              type: ['draw', 'loveAttract_stage', 'brave', 'boost_mentalRecover']
            }
          },
          'Rose Garden': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: 'Rose Garden',
            kana: 'ろーずがーでん',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 4350,
              cool: 4000,
              mental: 455,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'チェイン：花帆 & APレデュース：梢 & 花帆',
              detail: '花帆のスキルを使用した後、ドローされる確率が増加する。さらに手札にある梢、花帆のスキル1枚につき、手札のこのスキルの消費AP-1。',
              type: ['chain', 'kaho', 'APReduce', 'kozue']
            }
          },
          '薫風の調べ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '薫風の調べ',
            kana: 'くんぷうのしらべ',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4200,
              pure: 4500,
              cool: 3950,
              mental: 415,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APReduce']
            }
          },
          '謳歌爛漫': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '謳歌爛漫',
            kana: 'おうからんまん',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 4100,
              cool: 4000,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            characteristic: {
              name: 'ドロー：ハートキャプチャ & アクセラレーション',
              detail: 'ドローした時、ビートハート3回分のスキルハートを獲得する。さらにボルテージLv.が8以上の間、消費AP-2。',
              type: ['draw', 'heartCaptcha', 'acceleration']
            }
          },
          '水彩世界': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '水彩世界',
            kana: 'すいさいせかい',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.3',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 4500,
              cool: 3500,
              mental: 410,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 33]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
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
            series: 'Grace Phrase',
            kana: 'ぐれいすふれーず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 4100,
              cool: 3300,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-1する。',
              type: ['draw', 'APReduce']
            }
          }
        },
        R: {
          '室咲格子': {
            styleType: 'performer',
            mood: 'happy',
            series: '室咲格子',
            kana: 'むろざきこうし',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3050,
              pure: 2650,
              cool: 2300,
              mental: 280,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ]
            }
          },
          'レインボーシフォン': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'レインボーシフォン',
            kana: 'れいんぼーしふぉん',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2500,
              pure: 2900,
              cool: 2400,
              mental: 300,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 5,
              detail: [
                [6.4, 7.04, 7.68, 8.32, 8.96, 9.6, 10.24, 10.88, 11.52, 12.8, 13.44, 14.08, 14.72, 16]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 3,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, 2.7, 2.8, 3, 3.2]
              ]
            }
          },
          '華紺青': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '華紺青',
            kana: 'はなこんじょう',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2700,
              pure: 3100,
              cool: 2300,
              mental: 270,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, 4, 4.2, 4.4, 4.8]
              ]
            }
          },
          'オーロラスカイ': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'オーロラスカイ',
            kana: 'おーろらすかい',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3000,
              pure: 2700,
              cool: 2400,
              mental: 270,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, 10.08, 10.56, 11.04, 12]
              ]
            }
          }
        }
      },
      tsuzuri: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            kana: '',
            gacha: {
              addSeason: '',
              period: ''
            },
            favorite: [],
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 30,
              pure: 30,
              cool: 30,
              mental: 3,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {}
            },
            skill: {
              name: '',
              AP: 1,
              detail: {}
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        DR: {
          'Ether Aria': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Ether Aria',
            kana: 'えーてるありあ',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5200,
              pure: 7000,
              cool: 5400,
              mental: 560,
              BP: 100
            },
            specialAppeal: {
              ID: 'aggressiveHeartBoost',
              name: 'アグレッシブハートブースト',
              AP: 1,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'heartBlessing',
              name: 'ハートブレッシング',
              AP: 6,
              detail: [
                [24, 26, 29, 31, 34, 36, 38, 41, 43, 48, 50, 53, 55, 60]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：リカバーブレッシング',
              detail: '手札にある状態でセクションが変わるたび、このステージ中、メイン効果にメンタル回復効果を持つスキルの消費AP-2。',
              type: ['overSection', 'blessing_mentalRecover']
            }
          },
          'Prism Echo': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Prism Echo',
            kana: 'ぷりずむえこー',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5200,
              pure: 5600,
              cool: 6400,
              mental: 600,
              BP: 100
            },
            specialAppeal: {
              ID: 'invocation',
              name: 'インヴォケーション',
              AP: 7,
              detail: [
                [38, 42, 46, 49, 53, 57, 61, 65, 68, 76, 80, 84, 87, 96],
                [4.8, '5.28?', '5.76?', '6.24?', '6.72?', 7.2, '7.68?', '8.16?', '8.64?', 9.6, '10.08?', '10.56?', '11.04?', 12]
              ]
            },
            skill: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 2,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 26],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ]
            },
            characteristic: {
              name: 'アキューミュレイト',
              detail: 'このスキルを使用する度に、5回までスキルの効果値が増加する。',
              type: ['accumulate']
            }
          }
        },
        UR: {
          '福音の銀河へ': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '銀河',
            kana: 'ふくいんのぎんがへ',
            gacha: {
              addSeason: '2024 PARTY! LIMITED COLLECTION',
              period: 'party'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 6100,
              cool: 4200,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'absoluteVoltage',
              name: 'アブソリュートボルテージ',
              AP: 12,
              detail: []
            },
            skill: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            },
            characteristic: {
              name: 'インクリーズ',
              detail: 'ボルテージLv.が10以上の間、消費APを-3し、スキル効果値が増加する。',
              type: ['APReduce', 'maturation']
            }
          },
          'Proof': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Proof',
            kana: 'ぷるーふ',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.9',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5150,
              pure: 5900,
              cool: 3200,
              mental: 495,
              BP: 100
            },
            specialAppeal: {
              ID: 'aggressiveBeliefVoltage',
              name: 'アグレッシブビリーフボルテージ',
              AP: 3,
              detail: [
                [64, 70.4, 76.8, 83.2, 89.6, 96, 102.4, 108.8, 115.2, 128, 134.4, 140.8, 147.2, 160]
              ]
            },
            skill: {
              ID: 'aggressiveBraveBoostedAttract_dollchestra',
              name: 'アグレッシブブレイブブーステッドアトラクト：DOLLCHESTRA',
              AP: 7,
              detail: [
                [25.2, '27.7?', '30.2?', '32.8?', '35.3?', 37.8, '40.3?', '42.8?', '45.4?', 50.4, '52.9?', '55.4?', '58?', 63],
                [106, '116.6?', '127.2?', '137.8?', '148.4?', 159, '169.6?', '180.2?', '190.8?', 212, '222.6?', '233.2?', '243.8?', 265]
              ]
            },
            characteristic: {
              name: 'ショット：ビリーフ & APゲイン：ブレイブ',
              detail: 'スキル使用時、このセクション中、メンタルが0になってもメンタルダウンしなくなる。(ステージ中、1回まで発動)さらにスキル使用時、メンタルが25%以下のとき、APを3回復する。',
              type: ['mentalDown_section', 'APGain']
            }
          },
          'レディバグ': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'レディバグ',
            kana: 'れでぃばぐ',
            gacha: {
              addSeason: 'ライブグランプリ「104期 1stTerm 第2回サークル対抗戦」',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3800,
              pure: 4800,
              cool: 5500,
              mental: 510,
              BP: 100
            },
            specialAppeal: {
              ID: 'aggressiveRegainVoltage',
              name: 'アグレッシブリゲインボルテージ',
              AP: 3,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'aggressiveBraveFascinate10_section',
              name: 'アグレッシブブレイブファッシネイト',
              AP: 7,
              detail: [
                [27, 29.7, 32.4, 35.1, 37.8, 40.5, 43.2, 45.9, 48.6, 54, 56.7, 59.4, 62.1, 67.5],
                [96, 106, 115, 125, 134, 144, 154, 163, 173, 192, 202, 211, 221, 240]
              ]
            },
            characteristic: {
              name: 'APゲイン：ブレイブ',
              detail: 'スキル使用時メンタルが50%以下のとき、APを+5する。',
              type: ['APGain']
            }
          },
          '抱きしめる花びら': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '抱きしめる花びら',
            kana: 'だきしめるはなびら',
            gacha: {
              addSeason: '2023 GRADUATION LIMITED COLLECTION Vol.2',
              period: 'graduation'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3500,
              pure: 5700,
              cool: 5300,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions3_sectionAttract_section',
              name: 'エクステアトラクト',
              AP: 5,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'groovyFascinate_over10_voltageGain_sectionAttract',
              name: 'グルーヴィファッシネイト',
              AP: 4,
              detail: [
                [11, 12, 13, 14, 15, 17, 18, 19, 20, 22, 23, 24, 25, 28],
                [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, 39.6, 41.4, 45]
              ]
            },
            characteristic: {
              name: 'ドロー：ボルテージゲイン & ショット：ラブアトラクト',
              detail: 'ドローした時、ボルテージPt.を+18する。さらにスキル使用時2回まで、このセクション中、獲得するLOVEを+102%する。',
              type: ['draw', 'voltageGain', 'shot', 'loveAttract_section']
            }
          },
          '桃節銘記': {
            styleType: 'performer',
            mood: 'happy',
            series: '桃節銘記',
            kana: 'とうせつめいき',
            gacha: {
              addSeason: '2023 GRADUATION LIMITED COLLECTION Vol.1',
              period: 'graduation'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 5400,
              cool: 4700,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            skill: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 7,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15],
                [7.2, 7.9, 8.6, 9.4, 10.1, 10.8, 11.5, 12.2, 13, 14.4, 15.1, 15.8, 16.6, 18]
              ]
            },
            characteristic: {
              name: 'ハートコレクト：APレデュース & ラブアトラクト',
              detail: '手札にある状態でハートを200個回収したとき、このスキルの消費APを-6し、このセクション中、獲得するLOVEを+15%する。',
              type: ['heartCollect', 'APReduce', 'loveAttract_section']
            }
          },
          'Colorfulness': {
            styleType: 'trickStar',
            mood: 'melow',
            series: 'Colorfulness',
            kana: 'からふるねす',
            gacha: {
              addSeason: 'ライブグランプリ「103期2月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 5000,
              cool: 5300,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainVoltage',
              name: 'リゲインボルテージ',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'extensions2_voltage_section',
              name: 'エクステボルテージ',
              AP: 3,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, '25?']
              ]
            },
            characteristic: {
              name: 'アキューミュレイト',
              detail: '使用する度に消費APが低下する。',
              type: ['accumulate']
            }
          },
          '蓮ノ空歌留多': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '蓮ノ空歌留多',
            kana: 'はすのそらかるた',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.4',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 4800,
              cool: 5200,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyAttraction_section_over8_heartCaptcha',
              name: 'グルーヴィアトラクション',
              AP: 4,
              detail: [
                [9, 9.9, 10.8, 11.7, 12.6, 13.5, 14.4, 15.3, 16.2, 18, 18.9, 19.8, 20.7, 22.5],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            },
            skill: {
              ID: 'fascination_section',
              name: 'ファッシネイション',
              AP: 4,
              detail: [
                [9.6, 10.6, 11.5, 12.5, 13.4, 14.4, 15.4, 16.3, 17.3, 19.2, 20.2, 21.1, 22.1, 24],
                [8, 9, 10, 10, 11, 12, 13, 14, 14, 16, 17, 18, 18, 20]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ボルテージゲイン & APレデュース：綴理',
              detail: '手札にある状態でセクションが変わるたび、ボルテージPt.を+20する。さらに綴理のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['overSection', 'voltageGain', 'APReduce' ,'kozue']
            }
          },
          'ツバサ・ラ・リベルテ': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: 'ツバサ・ラ・リベルテ',
            kana: 'つばさらりべるて',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.8',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3500,
              pure: 5600,
              cool: 5300,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'recoverAttraction_section',
              name: 'リカバーアトラクション',
              AP: 10,
              detail: [
                [19.2, 21.12, 23.04, 24.96, 26.88, 28.8, 30.72, 32.64, 34.56, 38.4, 40.32, 42.24, 44.16, 48],
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [4.5, 5, 5.4, 5.9, 6.3, 6.8, 7.2, 7.7, 8.1, 9, 9.5, 9.9, 10.4, 11.3]
              ]
            },
            characteristic: {
              name: 'APレデュース：メンタル',
              detail: '現在の残りメンタルが多いほどスキルの消費APダウン(最大-8)',
              type: ['APReduce', 'mental']
            }
          },
          'Trick & Cute': {
            styleType: 'performer',
            mood: 'melow',
            series: 'Trick & Cute',
            kana: 'とりっくあんどきゅーと',
            gacha: {
              addSeason: 'ライブグランプリ「103期10月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4900,
              pure: 4400,
              cool: 5100,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'aggressiveHeart_mentalReduce15',
              name: 'アグレッシブハート',
              AP: 3,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '9?', '10?']
              ]
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
            series: '舞踏会',
            kana: 'かくめいのぶとうかい',
            gacha: {
              addSeason: '2023 PARTY! LIMITED COLLECTION',
              period: 'party'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3800,
              pure: 4500,
              cool: 6200,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'vortexShift',
              name: 'ボルテックスシフト',
              AP: 3,
              detail: [
                [48, 52.8, 57.6, 62.4, 67.2, 72, 76.8, 81.6, 86.4, 96, 100.8, 105.6, 110.4, 120]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 7,
              detail: [
                [29, 32, 35, 38, 41, 44, 46, 49, 52, 58, 61, 64, 67, 72]
              ]
            },
            characteristic: {
              name: 'APレデュース：ボルテージ',
              detail: '現在のボルテージLvに応じてスキルの消費APダウン',
              type: ['APReduce', 'voltage']
            }
          },
          'Take It Over': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Take It Over',
            kana: 'ていくいっとおーばー',
            gacha: {
              addSeason: 'ライブグランプリ「103期9月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4900,
              pure: 4500,
              cool: 5000,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'cheerfulVoltage_heartCaptcha',
              name: 'チアフルボルテージ',
              AP: 4,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ラブアトラクト & メンタルリカバー：さやか',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+15%する。さらに手札にある状態でさやかのスキルを使用するたび、メンタルを最大値の6%回復させる。',
              type: ['overSection', 'loveAttract_section', 'mentalRecover', 'sayaka']
            }
          },
          '秋色カントリーロード': {
            styleType: 'performer',
            mood: 'neutral',
            series: '秋色カントリーロード',
            kana: 'あきいろかんとりーろーど',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.1',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 5100,
              cool: 4700,
              mental: 540,
              BP: 100
            },
            specialAppeal: {
              ID: 'cheerfulAttraction_over75_section',
              name: 'チアフルアトラクション',
              AP: 6,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15],
                [7.5, 8.3, 9, 9.8, 10.5, 11.3, 12, 12.8, 13.5, 15, 15.8, 16.5, 17.3, 18.8]
              ]
            },
            skill: {
              ID: 'cheerfulHeart_over75_heartCaptcha_over100_heartCaptcha',
              name: 'チアフルハート',
              AP: 4,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15],
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8],
                [9, 10, 11, 12, 13, 14, 14, 15, 16, 18, 19, 20, 21, 23],
              ]
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
            series: 'はじける☆ソーダ',
            kana: 'はじけるすいかそーだ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.7',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4350,
              pure: 5400,
              cool: 5100,
              mental: 435,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 7,
              detail: [
                [23, 25, 28, 30, 32, 35, 37, 39, 41, 46, 48, 51, 53, 58],
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, '7?', 8]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [24, 26, 29, 31, 34, 36, 38, 41, 43, 48, 50, 53, 55, 60]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ハートキャプチャ & APレデュース',
              detail: '手札にある状態でセクションが変わるたび、ビートハート6回分のスキルハートを獲得し、手札のこのスキルの消費AP-4する。',
              type: ['overSection', 'heartCaptcha']
            }
          },
          '金魚◎花火': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '金魚◎花火',
            kana: 'きんぎょはなび',
            gacha: {
              addSeason: 'ライブグランプリ「103期7月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 5200,
              cool: 4800,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 3,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
            },
            characteristic: {
              name: 'ドロー：ボルテージゲイン & ボルテージブースト',
              detail: 'ドローした時、ボルテージPt.を+18する。さらに次に使用するボルテージゲイン効果を+16%する。',
              type: ['draw', 'voltageGain', 'boost_voltageGain']
            }
          },
          '朝顔令嬢': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '朝顔令嬢',
            kana: 'あさがおれいじょう',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.5',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 4300,
              cool: 5550,
              mental: 475,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [24, 26, 29, 31, 34, 36, 38, 41, 43, 48, 50, 53, 55, 60]
              ]
            },
            skill: {
              ID: 'fascination_section',
              name: 'ファッシネイション',
              AP: 6,
              detail: [
                [9.6, 10.6, 11.5, 12.5, 13.4, 14.4, 15.4, 16.3, 17.3, 19.2, 20.2, 21.1, 22.1, 24],
                [8, 9, 10, 10, 11, 12, 13, 14, 14, 16, 17, 18, '18?', 20]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース & APゲイン',
              detail: 'ドローしたセクションの間、消費APを-3する。さらにスキル使用時、APを+1する。',
              type: ['draw', 'APReduce', 'APGain']
            }
          },
          'ペンギンアイス': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'ペンギンアイス',
            kana: 'ぺんぎんあいす',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.4',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4450,
              pure: 5250,
              cool: 4800,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 6,
              detail: [
                [19, 21, 23, 25, 27, 29, 30, 32, 34, 38, 40, 42, 44, 48],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ラブアトラクト & APゲイン',
              detail: '手札にある状態でセクションが変わるたび、このステージ中、獲得するLOVEを+4.8%し、APを3回復する。',
              type: ['overSection', 'loveAttract', 'APGain']
            }
          },
          'DEEPNESS': {
            styleType: 'performer',
            mood: 'melow',
            series: 'DEEPNESS',
            kana: 'でぃーぷねす',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.3',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 4600,
              cool: 6100,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            skill: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 10,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24],
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            characteristic: {
              name: 'APレデュース：梢 & リインフォース：慈',
              detail: '梢のスキルを使用するたび、手札のこのスキルの消費AP-3。さらに慈のスキルを使用するたび3回まで、手札のこのスキルの効果量が増加する。',
              type: ['APReduce', 'kozue', 'reinforce', 'megumi']
            }
          },
          'ツキマカセ': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'ツキマカセ',
            kana: 'つきまかせ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 5500,
              cool: 5300,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'fascination_section',
              name: 'ファッシネイション',
              AP: 7,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
              ]
            },
            skill: {
              ID: 'braveAttract_under25_sectionAttract',
              name: 'ブレイブアトラクト',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25],
                [13, 14.3, 15.6, 16.9, 18.2, 19.5, 20.8, 22.1, 23.4, 26, 27.3, 28.6, 29.9, 32.5]
              ]
            },
            characteristic: {
              name: 'インタープリテーション',
              detail: 'このスキルのムードによる効果上昇量を上昇させる。',
              type: ['interPretation']
            }
          },
          'チェリー♫ピクニック': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'チェリー♫ピクニック',
            kana: 'ちぇりーぴくにっく',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4350,
              pure: 4750,
              cool: 5800,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            characteristic: {
              name: 'フェイバリット：1 & アーリードロー：2/APレデュース',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。さらに2セクション目までにドローした時、消費APを-3する。',
              type: ['favorite', 'earlyDrew', 'APReduce']
            }
          },
          'スケイプゴート': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'スケイプゴート',
            kana: 'すけいぷごーと',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 5000,
              cool: 5900,
              mental: 400,
              BP: 100
            },
            specialAppeal: {
              ID: 'initiative',
              name: 'イニシアチブ',
              AP: 7,
              detail: [
                [22, 24, 26, 29, 31, 33, 35, 37, 40, 44, 46, 48, 51, 54],
                [3.6, 3.96, 4.32, 4.68, 5.04, 5.4, 5.76, 6.12, 6.48, 7.2, 7.56, 7.92, 8.28, 9]
              ]
            },
            skill: {
              ID: 'initiative',
              name: 'イニシアチブ',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 4, 4.2, 4.4, 4.6, 5]
              ]
            },
            characteristic: {
              name: 'フェイバリット：1 & ウォームアップ',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。ボルテージLv.が7以下の間、消費AP-4。',
              type: ['favorite', 'warmUp']
            }
          },
          'Dream Believers': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Dream Believers',
            kana: 'どりーむびりーばーず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 4150,
              cool: 5750,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 2,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
              ]
            },
            skill: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 3,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 26],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ]
            },
            characteristic: {
              name: 'アキューミュレイト',
              detail: '使用する度に消費APが低下する。',
              type: ['accumulate']
            }
          }
        },
        SR: {
          'PASSION!!!!!!': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'PASSION!!!!!!',
            kana: 'ぱっしょん',
            gacha: {
              addSeason: 'ライブグランプリ「104期 2ndTerm 第1回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3100,
              pure: 4900,
              cool: 4600,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions2_voltage_section',
              name: 'エクステボルテージ',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, '40?']
              ]
            },
            skill: {
              ID: 'groovyVoltage_over8_voltageGain_heartCaptcha',
              name: 'グルーヴィボルテージ',
              AP: 3,
              detail: [
                [9, 10, 11, 12, 13, 14, 14, 15, 16, 18, 19, 20, 21, '23?'],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, '5?']
              ]
            },
            characteristic: {
              name: 'ドロー：ヒートアップ',
              detail: 'ドローしたセクションの間、AP回復速度を+5%する。',
              type: ['drew', 'APFast_section']
            }
          },
          '365 Days': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '365 Days',
            kana: 'えぶりでい',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION Vol.5',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4700,
              pure: 4000,
              cool: 3600,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainExtend_stage1',
              name: 'リゲインエクステンド',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'voltageSupport',
              name: 'ボルテージサポート',
              AP: 3,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ]
            },
            characteristic: {
              name: 'APゲイン & アンコール',
              detail: 'スキル使用時、APを+1し、山札に戻る。',
              type: ['APGain', 'encore']
            }
          },
          '節分 -妖-': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '節分',
            kana: 'せつぶん',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.7',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3600,
              pure: 4200,
              cool: 4600,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyHeart_over8_voltageGain_heartCaptcha',
              name: 'グルーヴィハート',
              AP: 4,
              detail: [
                [12, 13, 14, 16, 17, 18, 19, 20, 22, 24, 25, 26, 28, 29],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ]
            },
            skill: {
              ID: 'calmBoost20',
              name: 'カームブースト',
              AP: 4,
              detail: [
                [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 125]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+10%する。',
              type: ['overSection', 'loveAttract']
            }
          },
          '青とシャボン': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '青とシャボン',
            kana: 'あおとしゃぼん',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION Vol.6',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3600,
              pure: 4100,
              cool: 4700,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'groovyHeart_over10_voltageGain_heartCaptcha',
              name: 'グルーヴィハート',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 16]
              ]
            },
            characteristic: {
              name: 'APレデュース：さやか & ボルテージゲイン：さやか',
              detail: 'さやかのスキルを使用するたび、手札のこのスキルの消費AP-1し、ボルテージPt.を+6する。',
              type: ['APReduce', 'voltageGain', 'sayaka']
            }
          },
          'Eisritter': {
            styleType: 'performer',
            mood: 'melow',
            series: 'Eisprinzessin / Eisritter',
            kana: 'あいすりったー',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.5',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3800,
              pure: 3900,
              cool: 4900,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'chillAttract_under3_stage',
              name: 'チルアトラクト',
              AP: 7,
              detail: [
                [4.3, 4.7, 5.2, 5.6, 6, 6.5, 6.9, 7.3, 7.7, 8.6, 9, 9.5, 9.9, 10.8],
                [6.2, 6.8, 7.4, 8.1, 8.7, 9.3, 9.9, 10.5, 11.2, 12.4, 13, 13.6, 14.3, 15.6]
              ]
            },
            skill: {
              ID: 'calmAttraction30_heartCaptcha_sectionAttract',
              name: 'カームアトラクション',
              AP: 3,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '10?', 11],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            characteristic: {
              name: 'インタープリテーション＆サーチ：さやか',
              detail: 'このスキルのムードによる効果増加量を増加させる。さらにスキル使用後、さやかのカードをドローする確率大幅アップ。',
              type: ['interPretation', 'search', 'sayaka']
            }
          },
          'Link to the FUTURE': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Link to the FUTURE',
            kana: 'りんくとぅーざふゅーちゃー',
            gacha: {
              addSeason: 'ライブグランプリ「103期12月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5000,
              pure: 4700,
              cool: 3900,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyAttraction_over8_heartCaptcha_sectionAttract',
              name: 'グルーヴィアトラクション',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13],
                [10.8, 11.9, 13, 14, 15.1, 16.2, 17.3, 18.4, 19.4, 21.6, 22.7, 23.8, 24.8, 27]
              ]
            },
            skill: {
              ID: 'chillVoltage_under5',
              name: 'チルボルテージ',
              AP: 5,
              detail: [
                [14, 15, 17, 18, 20, 21, 22, 24, 25, 28, 29, 31, 32, 35],
                [18, 20, 22, 23, 25, 27, 29, 31, 32, 36, 38, 40, 41, 45]
              ]
            },
            characteristic: {
              name: 'サーチ：さやか & APゲイン',
              detail: 'スキル使用後、さやかのカードをドローする確率大幅アップ。さらにスキル使用時、3回までAPを3回復する。',
              type: ['search', 'sayaka', 'APGain']
            }
          },
          'Secret Christmas': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Secret Christmas',
            kana: 'しーくれっとくりすます',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.2',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 3400,
              cool: 4700,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyAttraction_section_over8_heartCaptcha',
              name: 'グルーヴィアトラクション',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30],
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 7]
              ]
            },
            skill: {
              ID: 'groovyAttract_stage_over8_sectionAttract',
              name: 'グルーヴィアトラクト',
              AP: 3,
              detail: [
                [5.4, 5.9, 6.5, 7, 7.6, 8.1, 8.6, 9.2, 9.7, 10.8, 11.3, 11.9, 12.4, 13.5],
                [3.6, 4, 4.3, 4.7, 5, 5.4, 5.8, 6.1, 6.5, 7.2, 7.56, 7.9, 8.3, 9]
              ]
            },
            characteristic: {
              name: 'チェイン：さやか',
              detail: 'さやかのスキルを使用した時、ドローされる確率が増加する。',
              type: ['chain', 'sayaka']
            }
          },
          'コットン=ユートピア': {
            styleType: 'trickStar',
            mood: 'melow',
            series: 'コットン=ユートピア',
            kana: 'こっとんゆーとぴあ',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.7',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3500,
              pure: 4700,
              cool: 4100,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'initiative',
              name: 'イニシアチブ',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 4, 4.2, 4.4, 4.6, 5]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース & マチュレーション',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費APを-3し、スキルの効果値が増加する。',
              type: ['overSection', 'APReduce', 'maturation']
            }
          },
          '喫茶ハスノソラ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '喫茶ハスノソラ',
            kana: 'きっさはすのそら',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.6',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 3900,
              cool: 4400,
              mental: 390,
              BP: 100
            },
            specialAppeal: {
              ID: 'initiative',
              name: 'イニシアチブ',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 26],
                [1.6, 1.76, 1.92, 2.08, 2.24, 2.4, 2.56, 2.72, 2.88, 3.2, 3.36, 3.52, 3.68, 4]
              ]
            },
            skill: {
              ID: 'cheerfulVoltage_voltageGain',
              name: 'チアフルボルテージ',
              AP: 3,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24],
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, '7?', 8]
              ]
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
            series: '夏めきペイン',
            kana: 'なつめきぺいん',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.9',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4350,
              pure: 4050,
              cool: 3800,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース & ハートブースト',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-3し、次に使用するスキルハート獲得効果による獲得数を+40%する。',
              type: ['overSection', 'APReduce', 'boost_heartCaptcha']
            }
          },
          'SPLASH!!!!': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'SPLASH!!!!',
            kana: 'すぷらっしゅ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.8',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3700,
              pure: 4500,
              cool: 4300,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            },
            characteristic: {
              name: 'APレデュース：さやか & ボルテージブースト：さやか',
              detail: 'さやかのスキルを使用するたび、手札のこのスキルの消費AP-2し、次に使用するボルテージゲイン効果を+7%する。',
              type: ['APReduce', 'boost_voltageGain', 'sayaka']
            }
          },
          'Mirage Voyage': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Mirage Voyage',
            kana: 'みらーじゅぼやーじゅ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.6',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 4300,
              cool: 4100,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            characteristic: {
              name: 'インタープリテーション & ドロー：アトラクトブースト：DOLLCHESTRA',
              detail: 'このスキルのムードによる効果増加量を上昇させる。さらにドローした時、次にDOLLCHESTRAのメンバーが使用するラブアトラクト効果を+25%する。',
              type: ['interPretation', 'drew', 'boost_loveAttract']
            }
          },
          'アメアガリストリート': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'アメアガリストリート',
            kana: 'あめあがりすとりーと',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.2',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 3900,
              cool: 4450,
              mental: 385,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            characteristic: {
              name: 'ドロー：ハートキャプチャ & グルーヴィ：アトラクトブースト',
              detail: 'ドローした時、ビートハート3回分のスキルハートを獲得する。さらにドローした時ボルテージLv.が5以上のとき、次に使用するラブアトラクト効果を+10%する。',
              type: ['draw', 'heartCaptcha', 'groovy', 'boost_loveAttract']
            }
          },
          '雨と紫陽花に唄へば': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '雨と紫陽花に唄へば',
            kana: 'あめとあじさいにうたへば',
            gacha: {
              addSeason: 'ログインボーナス',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 4200,
              cool: 4500,
              mental: 410,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            characteristic: {
              name: 'フェイバリット：スタート & オーバーセクション：APレデュース & マチュレーション',
              detail: '初期手札に加わる確率が増加する。さらに手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-3し、スキルの効果値が増加する。',
              type: ['favorite', 'APReduce', 'maturation']
            }
          },
          'Tragic Drops': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Tragic Drops',
            kana: 'とらじっくどろっぷす',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.3',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3800,
              pure: 4100,
              cool: 5100,
              mental: 380,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 3,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            characteristic: {
              name: 'チェイン：綴理 & アーリードロー：2/APレデュース',
              detail: '綴理のスキルを使用した後、ドローされる確率が増加する。さらに2セクション目までにドローした時、消費APを-2する。',
              type: ['chain', 'tsuzuri', 'earlyDrew', 'APReduce']
            }
          },
          'Rose Garden': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Rose Garden',
            kana: 'ろーずがーでん',
            gacha: {
              addSeason: 'ログインボーナス',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3600,
              pure: 4500,
              cool: 4400,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            characteristic: {
              name: 'チェイン：さやか & APレデュース：綴理 & さやか',
              detail: 'さやかのスキルを使用した後、ドローされる確率が増加する。さらに手札にある綴理、さやかのスキル1枚につき、手札のこのスキルの消費AP-1。',
              type: ['chain', 'sayaka', 'APReduce', 'tsuzuri']
            }
          },
          '薫風の調べ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '薫風の調べ',
            kana: 'くんぷうのしらべ',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 4600,
              cool: 4300,
              mental: 390,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 7,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 5,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APReduce']
            }
          },
          'Sparkly Spot': {
            styleType: 'performer',
            mood: 'melow',
            series: 'Sparkly Spot',
            kana: 'すぱーくりーすぽっと',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 4200,
              cool: 4600,
              mental: 410,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, 31.5, 33, 34.5, 37.5]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '9?', '10?']
              ]
            },
            characteristic: {
              name: 'ドロー：ボルテージゲイン & APレデュース : グルーヴィ',
              detail: 'ドローした時、ボルテージ値を+12する。さらにドローした時ボルテージLv.が5以上のとき、手札のこのスキルの消費AP-2。',
              type: ['draw', 'voltageGain', 'APReduce', 'groovy']
            }
          },
          '春色ニューデイズ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '春色ニューデイズ',
            kana: 'はるいろにゅーでいず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3700,
              pure: 4000,
              cool: 4950,
              mental: 415,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
            },
            characteristic: {
              name: 'ジャストドロー：1/APレデュース',
              detail: '1セクション目でドローした時、消費APを-3する。',
              type: ['justDraw', 'APReduce']
            }
          },
          'AWOKE': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'AWOKE',
            kana: 'あうぉーく',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.3',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 3400,
              cool: 4300,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '9?', '10?']
              ]
            },
            skill: {
              ID: 'highVoltage',
              name: 'ハイボルテージ',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
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
            series: 'Vivid Phrase',
            kana: 'ゔぃゔぃっどふれーず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3800,
              pure: 3400,
              cool: 5100,
              mental: 400,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, '7?', 8]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費AP1を-1する。',
              type: ['draw', 'APReduce']
            }
          }
        },
        R: {
          '室咲格子': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '室咲格子',
            kana: 'むろざきこうし',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2300,
              pure: 2500,
              cool: 3200,
              mental: 280,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 7,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            }
          },
          'レインボーシフォン': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'レインボーシフォン',
            kana: 'れいんぼーしふぉん',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2400,
              pure: 3050,
              cool: 2350,
              mental: 300,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 3,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            }
          },
          '華紺青': {
            styleType: 'performer',
            mood: 'melow',
            series: '華紺青',
            kana: 'はなこんじょう',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2600,
              pure: 220,
              cool: 3300,
              mental: 270,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            }
          },
          'オーロラスカイ': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'オーロラスカイ',
            kana: 'おーろらすかい',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2700,
              pure: 2400,
              cool: 3000,
              mental: 270,
              BP: 100
            },
            specialAppeal: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            }
          }
        }
      },
      megumi: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            kana: '',
            gacha: {
              addSeason: '',
              period: ''
            },
            favorite: [],
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 30,
              pure: 30,
              cool: 30,
              mental: 3,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {}
            },
            skill: {
              name: '',
              AP: 1,
              detail: {}
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        DR: {
          'Ether Aria': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Ether Aria',
            kana: 'えーてるありあ',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 6800,
              pure: 5300,
              cool: 5100,
              mental: 600,
              BP: 100
            },
            specialAppeal: {
              ID: 'extendAttractBoost',
              name: 'エクステアトラクトブースト',
              AP: 6,
              detail: [
                [33.6, '37?', '40.3?', '43.7?', '47?', 50.4, '53.8?', '57.1?', '60.5?', 67.2, '70.6?', '73.9?', '77.3?', 84]
              ]
            },
            skill: {
              ID: 'loveGift',
              name: 'ラブギフト',
              AP: 10,
              detail: [
                [24, 26, 29, 31, 34, 36, 38, 41, 43, 48, 50, 53, 55, 60],
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [8, 9, 10, 10, 11, 12, 13, 14, 14, 16, 17, 18, 18, 20]
              ]
            },
            characteristic: {
              name: 'APゲイン',
              detail: 'スキル使用時、APを+10する。',
              type: ['APGain']
            }
          },
          'Prism Echo': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Prism Echo',
            kana: 'ぷりずむえこー',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 6400,
              pure: 6000,
              cool: 5200,
              mental: 560,
              BP: 100
            },
            specialAppeal: {
              ID: 'protectFeel_APreduce',
              name: 'プロテクトフィール',
              AP: 3,
              detail: [
                [3.2, 3.52, 3.84, 4.16, 4.48, 4.8, 5.12, 5.44, 5.76, 6.4, 6.72, 7.04, 7.36, 8],
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, 2.7, 2.9, 3, 3.2]
              ]
            },
            skill: {
              ID: 'endurance_APGain',
              name: 'エンデュランス',
              AP: 4,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            characteristic: {
              name: 'ドロー：メンタルプロテクト & APゲイン',
              detail: 'ドローした時、このステージ中、メンタルの最大値の4%分のメンタルダメージを無効にする。さらにAPを2回復する。',
              type: ['draw', 'protect', 'APGain']
            }
          }
        },
        UR: {
          '久遠の銀河へ': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: '銀河',
            kana: 'くえんのぎんがへ',
            gacha: {
              addSeason: '2024 PARTY! LIMITED COLLECTION',
              period: 'party'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 600,
              pure: 4100,
              cool: 4000,
              mental: 510,
              BP: 100
            },
            specialAppeal: {
              ID: 'eternalSpirits',
              name: 'エターナルスピリッツ',
              AP: 12,
              detail: []
            },
            skill: {
              ID: 'refreshProtect_stage',
              name: 'リフレッシュプロテクト',
              AP: 5,
              detail: [
                [6.4, 7.04, 7.68, 8.32, 8.96, 9.6, 10.24, 10.88, 11.52, 12.8, 13.44, 14.08, 14.72, 16],
                [1.6, 1.76, 1.92, 2.08, 2.24, 2.4, 2.56, 2.72, 2.88, 3.2, 3.36, 3.48, 3.64, 4]
              ]
            },
            characteristic: {
              name: 'オーバーヒーリング',
              detail: 'このスキルを使用するたび、5回までスキルの効果値が増加する。',
              type: ['overHealing', 'maturation']
            }
          },
          'ファンファーレ！！！': {
            styleType: 'performer',
            mood: 'happy',
            series: 'ファンファーレ！！！',
            kana: 'ふぁんふぁーれ',
            gacha: {
              addSeason: '2024 AUTUMN LIMITED COLLECTION vol.3',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5600,
              pure: 5000,
              cool: 3700,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentorBoost_captcha_attract',
              name: 'メンターブースト',
              AP: 7,
              detail: [
                [144, '158.4?', '172.8?', '187.2?', '201.6?', 216, '230.4?', '244.8?', '259.2?', 288, '302.4?', '316.8?', '331.2?', 360],
                [24, '26.4?', '28.8?', '31.2?', '33.6?', 36, '38.4?', '40.8?', '43.2?', 48, '50.4?', '52.8?', '55.2?', 60]
              ]
            },
            skill: {
              ID: 'alternate_ignition_hime',
              name: 'オルタネイト：イグニッション',
              AP: 4,
              detail: [],
              addSkill: {
                off: {
                  modeName: '通常',
                  ID: 'ignitionEndurance_hime_mentalOver100OrVoltageOver10',
                  name: 'イグニッションエンデュランス',
                  AP: 5,
                  detail: [
                    [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                    [8, 9, 10, 10, 11, 12, 13, 14, 14, 16, 17, 18, 18, 20]
                  ]
                },
                on: {
                  modeName: 'イグニッションモード',
                  ID: 'tagHeart_APReduce20_hime',
                  name: 'タッグハート',
                  AP: 10,
                  detail: [
                    [12, 13, 14, 16, 17, 18, 19, 20, 22, 24, 25, 26, 28, 30]
                  ]
                }
              }
            },
            characteristic: {
              name: 'オルタネイト：イグニッション',
              detail: '姫芽の《イグニッションモード》の状態に応じて効果が変化する。',
              type: ['alternate'],
              changeCharacteristic: [
                {
                  modeName: '通常',
                  name: 'ドロー：メンタルリカバー & メンタルプロテクト',
                  detail: 'ドローした時、メンタルを最大値の8%回復し、このステージ中、メンタルの最大値の4%分のメンタルダメージを無効にする。'
                },
                {
                  modeName: 'イグニッションモード',
                  name: 'アクセルコントロール',
                  detail: '手札にある間、ボルテージLv.が10以上のとき、このスキルの消費AP-7。ボルテージLv.が3以下のとき、姫芽の《イグニッションモード》を解除する。'
                }
              ]
            }
          },
          'DEEPNESS': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'DEEPNESS',
            kana: 'でぃーぷねす',
            gacha: {
              addSeason: '2024 AUTUMN LIMITED COLLECTION vol.1',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 4150,
              cool: 6050,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalProtect_stageProtect',
              name: 'メンタルプロテクト',
              AP: 11,
              detail: [
                [14, 15.4, 16.8, 18.2, 19.6, 21, 22.4, 23.8, 25.2, 28, 29.4, 30.8, 32.2, 35]
              ]
            },
            skill: {
              ID: 'triangleCode',
              name: 'トライアングルコード',
              AP: 9,
              detail: [
                [228, 250.8, 273.6, 296.4, 319.2, 342, 364.8, 387.6, 410.4, 456, 478.8, 501.6, 524.4, 570],
                [77.5, 85.3, 93, 100.8, 108.5, 116.3, 124, 131.8, 139.5, 155, 162.8, 170.5, 178.3, 193.8],
                [77.5, 85.3, 93, 100.8, 108.5, 116.3, 124, 131.8, 139.5, 155, 162.8, 170.5, 178.3, 193.8],
              ]
            },
            characteristic: {
              name: 'ミラージュ',
              detail: 'このスキルを6回使用すると、デッキから除外される。',
              type: ['mirage']
            }
          },
          'PASSION!!!!!!': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'PASSION!!!!!!',
            kana: 'ぱっしょん',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.7',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3400,
              pure: 5700,
              cool: 5200,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions3_protect_heat',
              name: 'エクステプロテクトヒート',
              AP: 6,
              detail: [
                [5.2, 5.72, 6.24, 6.76, 7.28, 7.8, 8.32, 8.84, 9.36, 10.4, 10.92, 11.44, 11.96, 13]
              ]
            },
            skill: {
              ID: 'groovyBoost_over10_boost_heartCaptcha',
              name: 'グルーヴィブースト',
              AP: 3,
              detail: [
                [35, 38.5, 42, 45.5, 49, 52.5, 56, 59.5, 63, 70, 73.5, 77, 80.5, 87.5],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
              ]
            },
            characteristic: {
              name: 'ショット：ヒートアップ',
              detail: 'スキル使用時、このセクション中、AP回復速度を+50%する。(ステージ中、2回まで発動)',
              type: ['shot', 'APFast_stage']
            }
          },
          'みらくりえーしょん': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'みらくりえーしょん',
            kana: 'みらくりえーしょん',
            gacha: {
              addSeason: 'ライブグランプリ「104期 1stTerm 第3回サークル対抗戦」',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 5700,
              cool: 3500,
              mental: 520,
              BP: 100
            },
            specialAppeal: {
              ID: 'rebootProtect',
              name: 'リブートプロテクト',
              AP: 5,
              detail: [
                [13.4, 14.8, 16.1, 17.5, 18.8, 20.2, 21.5, 22.8, 24.2, 26.9, 28.2, 29.5, 30.9, 33.5],
                [2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 4, 4.2, 4.4, 4.6, 5]
              ]
            },
            skill: {
              ID: 'heartBoost_limit5',
              name: 'ハートブースト',
              AP: 10,
              detail: [
                [32, 35.2, 38.4, 41.6, 44.8, 48, 51.2, 54.4, 57.6, 64, 67.2, 70.4, 73.6, 80]
              ]
            },
            characteristic: {
              name: 'オルタネイト：イグニッション',
              detail: '姫芽の《イグニッションモード》の状態に応じて効果が変化する。',
              type: ['alternate'],
              changeCharacteristic: [
                {
                  modeName: '通常',
                  name: 'ドロー：ハートブースト & アトラクトブースト：みらくらぱーく！',
                  detail: 'ドローした時、次にみらくらぱーく！のメンバーが使用するスキルハート獲得効果による獲得数を+125%、ラブアトラクト効果を+40%する。'
                },
                {
                  modeName: 'イグニッションモード',
                  name: 'レイトドロー：4/APレデュース',
                  detail: '4セクション目以降にドローした時、消費APを-7する。'
                }
              ]
            }
          },
          '365 Days': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: '365 Days',
            kana: 'えぶりでい',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION Vol.5',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5450,
              pure: 4500,
              cool: 3850,
              mental: 540,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshExtend_stage1',
              name: 'リフレッシュエクステンド',
              AP: 5,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'calmProtect',
              name: 'カームプロテクト',
              AP: 3,
              detail: [
                [2.4, '2.64?', '2.88?', '3.12?', '3.36?', 3.6, '3.84?', '4.08?', '4.32?', 4.8, '5.04?', '5.28?', '5.52?', 6]
              ]
            },
            characteristic: {
              name: 'APゲイン',
              detail: 'スキル使用時、APを+3する。',
              type: ['APGain']
            }
          },
          '抱きしめる花びら': {
            styleType: 'cheerLeader',
            mood: 'melow',
            series: '抱きしめる花びら',
            kana: 'だきしめるはなびら',
            gacha: {
              addSeason: '2023 GRADUATION LIMITED COLLECTION Vol.2',
              period: 'graduation'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3200,
              pure: 6200,
              cool: 5100,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions3_recover_section',
              name: 'エクステリカバー',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'groovyFeel_stage_over10_sectionAttract',
              name: 'グルーヴィフィール',
              AP: 4,
              detail: [
                [2.8, '3.08?', '3.36?', '3.64?', '3.92?', 4.2, '4.48?', '4.76?', '5.04?', 5.6, '5.88?', '6.16?', '6.44?', 7],
                [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, 39.6, 41.4, 45]
              ]
            },
            characteristic: {
              name: 'ドロー：メンタルプロテクト & ショット：ラブアトラクト',
              detail: 'ドローした時、このステージ中、メンタルの最大値の10%分のメンタルダメージを無効にする。さらにスキル使用時2回まで、このセクション中、獲得するLOVEを+102%する。',
              type: ['draw', 'protect_stage', 'shot', 'loveAttract_section']
            }
          },
          'おしえて♡ティーチャー': {
            styleType: 'cheerLeader',
            mood: 'melow',
            series: 'おしえて♡ティーチャー',
            kana: 'おしえててぃーちゃー',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第9回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4100,
              pure: 4400,
              cool: 5500,
              mental: 520,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 2,
              /*AP: {
                max: 9,
                min: 1
              },*/
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'ドロー：アグレッシブ',
              detail: 'ドローした時、メンタルを最大値の10%減少させる。',
              type: ['draw', 'aggressive']
            }
          },
          'ハッピー至上主義！': {
            styleType: 'performer',
            mood: 'happy',
            series: 'ハッピー至上主義！',
            kana: 'はっぴーしじょうしゅぎ',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.8',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5900,
              pure: 4800,
              cool: 3900,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensionsHeart_stage1',
              name: 'エクステハート',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            skill: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 7,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15],
                [7.2, 7.9, 8.6, 9.4, 10.1, 10.8, 11.5, 12.2, 13, 14.4, 15.1, 15.8, 16.6, 18]
              ]
            },
            characteristic: {
              name: 'APレデュース：ラブアトラクト',
              detail: '手札にある状態メイン効果に獲得LOVE増加効果を持つスキル1枚につき、手札のこのスキルの消費AP-2。',
              type: ['APReduce' ,'loveAttract']
            }
          },
          'ハクチューアラモード': {
            styleType: 'performer',
            mood: 'happy',
            series: 'ハクチューアラモード',
            kana: 'はくちゅーあらもーど',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.5',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5400,
              pure: 4300,
              cool: 4100,
              mental: 540,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions1_stageAttract_section',
              name: 'エクステアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'aggressiveAttraction25_sectionAttract',
              name: 'アグレッシブアトラクション',
              AP: 3,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, '12?', 12],
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ]
            },
            characteristic: {
              name: 'ドロー：ラブアトラクト',
              detail: 'ドローした時、このステージ中、獲得するLOVEを+4%する。',
              type: ['draw', 'loveAttract']
            }
          },
          '蓮ノ空歌留多': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '蓮ノ空歌留多',
            kana: 'はすのそらかるた',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第7回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4450,
              pure: 4750,
              cool: 5100,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyHeart_over8_mentalRecover_heartCaptcha',
              name: 'グルーヴィハート',
              AP: 4,
              detail: [
                [7.2, 7.92, 8.64, 9.36, 10.08, 10.8, 11.52, 12.24, 12.96, 14.4, 15.12, 15.84, 16.56, 18],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            },
            skill: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ボルテージゲイン & APレデュース：慈',
              detail: '手札にある状態でセクションが変わるたび、ボルテージPt.を+20する。さらに慈のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['overSection', 'voltageGain', 'APReduce' ,'megumi']
            }
          },
          'Secret Christmas': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'Secret Christmas',
            kana: 'しーくれっとくりすます',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.2',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5000,
              pure: 3800,
              cool: 5600,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'healingHeart_recover_heart',
              name: 'ヒーリングハート',
              AP: 7,
              detail: [
                [11.6, 12.76, 13.92, 15.08, 16.24, 17.4, 18.56, 19.72, 20.88, 23.2, 24.36, 25.52, 26.68, 29],
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 8]
              ]
            },
            skill: {
              ID: 'groovyRecover_over8_mentalRecover',
              name: 'グルーヴィリカバー',
              AP: 4,
              detail: [
                [6.4, 7.04, 7.68, 8.32, 8.96, 9.6, 10.24, 10.88, 11.52, 12.8, 13.44, 14.08, 14.72, 16],
                [9.6, 10.6, 11.5, 12.5, 13.4, 14.4, 15.4, 16.3, 17.3, 19.2, 20.2, 21.1, 22.1, 24]
              ]
            },
            characteristic: {
              name: 'チェイン：瑠璃乃 & ドロー：メンタルリカバー',
              detail: '瑠璃乃のスキルを使用した後、ドローされる確率が増加する。さらにドローした時、メンタルを最大値の10%回復させる。',
              type: ['chain', 'tsuzuri', 'draw', 'mentalRecover']
            }
          },
          '冬のおくりもの': {
            styleType: 'performer',
            mood: 'neutral',
            series: '冬のおくりもの',
            kana: 'ふゆのおくりもの',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.1',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5500,
              pure: 4800,
              cool: 3700,
              mental: 520,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensionsHeart_section3',
              name: 'エクステハート',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            skill: {
              ID: 'groovyHeart_over8_heartCaptcha_mentalRecover',
              name: 'グルーヴィハート',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13],
                [5.2, 5.72, 6.24, 6.76, 7.28, 7.8, 8.32, 8.84, 9.36, 10.4, 10.92, 11.44, 11.96, 13]
              ]
            },
            characteristic: {
              name: 'フェイバリット：フィーバー & APレデュース：グルーヴィ',
              detail: 'フィーバーセクションでドローされる確率が増加する。さらにドローした時ボルテージLv.が8以上のとき、手札のこのスキルの消費AP-3。',
              type: ['favorite', 'mental']
            }
          },
          'ツバサ・ラ・リベルテ': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'ツバサ・ラ・リベルテ',
            kana: 'つばさらりべるて',
            gacha: {
              addSeason: 'ライブグランプリ「103期11月度 サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 5600,
              cool: 5000,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 6,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15]
              ]
            },
            characteristic: {
              name: 'APレデュース：メンタル',
              detail: '現在の残りメンタルが多いほどスキルの消費APダウン(最大-4)',
              type: ['APReduce', 'mental']
            }
          },
          '喫茶ハスノソラ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '喫茶ハスノソラ',
            kana: 'きっさはすのそら',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.6',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5400,
              pure: 5100,
              cool: 4100,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'supportedFeel_stage',
              name: 'サポーテッドフィール',
              AP: 4,
              detail: [
                [6.4, 7.04, 7.68, 8.32, 8.96, 9.6, 10.24, 10.88, 11.52, 12.8, 13.44, 14.08, 14.72, 16],
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, 2.7, 2.9, 3, 3.2]
              ]
            },
            skill: {
              ID: 'cheerfulBoost',
              name: 'チアフルブースト',
              AP: 2,
              detail: [
                [40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 100],
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
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
            series: '舞踏会',
            kana: 'やくそくのぶとうかい',
            gacha: {
              addSeason: '2023 PARTY! LIMITED COLLECTION',
              period: 'party'
            },
            favorite: [],
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 5900,
              cool: 3200,
              mental: 550,
              BP: 100
            },
            specialAppeal: {
              ID: 'allMightHealing',
              name: 'オールマイトヒーリング',
              AP: 8,
              detail: [
                [30, 33, 36, 39, 42, 45, 48, 51, 54, 60, 63, 66, 69, 75]
              ]
            },
            skill: {
              ID: 'aggressiveAttract_mentalReduce25_stage',
              name: 'アグレッシブアトラクト',
              AP: 3,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            characteristic: {
              name: 'ドロー：メンタルリカバー & アンコール',
              detail: 'ドローした時、メンタルを最大値の5%回復させる。さらにスキル使用時、山札に戻る。'
            }
          },
          'アイデンティティ': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'アイデンティティ',
            kana: 'あいでんてぃてぃ',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.3',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 5200,
              cool: 4200,
              mental: 500,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            skill: {
              ID: 'cheerfulHeart_over75_APGain',
              name: 'チアフルハート',
              AP: 4,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '9?', 10]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：マチュレーション & ハートブースト',
              detail: '手札にある状態でセクションが変わるたび、スキルの効果値が増加する。さらに手札にある間、スキルハート獲得効果による獲得数を+50%する。',
              type: ['overSection', 'maturation', 'boost_heartCaptcha']
            }
          },
          'Au Bord du Lac': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Au Bord du Lac',
            kana: 'あうぼーどどぅらっく',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第4回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 5200,
              cool: 4900,
              mental: 510,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'endurance_mentalVoltage',
              name: 'エンデュランス',
              AP: 5,
              detail: [
                [5.2, 5.72, 6.24, 6.76, 7.28, 7.8, 8.32, 8.84, 9.36, 10.4, 10.92, 11.44, 11.96, 13],
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, 11, 12, 13, '15?']
              ]
            },
            characteristic: {
              name: 'フェイバリット：1',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          '夏めきペイン': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: '夏めきペイン',
            kana: 'なつめきぺいん',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5400,
              pure: 4350,
              cool: 4150,
              mental: 530,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 7,
              detail: [
                [7, 8, 8, 9, 10, 11, 11, 12, 13, 14, 15, 16, '17?', 18]
              ]
            },
            skill: {
              ID: 'protectFeel_stageAttract',
              name: 'プロテクトフィール',
              AP: 10,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            characteristic: {
              name: 'APレデュース：メンタルリカバー & メンタルプロテクト',
              detail: '手札にあるメイン効果にメンタル回復効果、またはメンタルプロテクト効果を持つスキル1枚につき、手札のこのスキルの消費AP-3。',
              type: ['APReduce', 'mentalRecover', 'mentalProtect']
            }
          },
          'Dream Believers': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: 'Dream Believers',
            kana: 'どりーむびりーばーず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 5200,
              cool: 4400,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 8,
              detail: [
                [16.8, 18.48, 20.16, 21.84, 23.52, 25.2, 26.88, 28.56, 30.24, 33.6, 35.28, 36.96, 38.64, 42]
              ]
            },
            skill: {
              ID: 'supportedFeel_stage',
              name: 'サポーテッドフィール',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [1.6, 1.8, 1.9, 2.1, 2.2, 2.4, 2.6, 2.7, 2.9, 3.2, 3.4, 3.5, 3.7, 4]
              ]
            },
            characteristic: {
              name: 'APレデュース：ブレイブ',
              detail: 'メンタルが50%以下の時にドローすると、消費APを-3する。',
              type: ['APReduce', 'lowMental']
            }
          }
        },
        SR: {
          'H.S.C.T.☆': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'hsct',
            kana: 'hsct',
            gacha: {
              addSeason: 'ライブグランプリ「104期 1stTerm 第3回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 4200,
              cool: 3500,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'recoverGain_gain3',
              name: 'リカバーゲイン',
              AP: 3,
              detail: [
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, 10.08, 10.56, 11.04, 12]
              ]
            },
            skill: {
              ID: 'rebootAttract',
              name: 'リブートアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'ショット：ヒートアップ',
              detail: 'スキル使用時5回まで、このステージ中、AP回復速度を+3%する。',
              type: ['APFast_stage']
            }
          },
          '節分 -艶-': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: '節分',
            kana: 'せつぶん',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.7',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3650,
              pure: 4100,
              cool: 4550,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'switchAttraction_basis5_voltageGain_heartCaptcha_sectionAttract',
              name: 'スイッチアトラクション',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32],
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 7],
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.3, 8]
              ]
            },
            skill: {
              ID: 'calmAttract20_sectionExtensions2',
              name: 'カームアトラクト',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ボルテージゲイン',
              detail: '手札にある状態でセクションが変わるたび、ボルテージPt.を+12する。',
              type: ['overSection', 'voltageGain']
            }
          },
          'ミルク': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'ミルク',
            kana: 'みるく',
            gacha: {
              addSeason: 'サークル対抗戦 -Exhibition- (2024年1月度)',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4100,
              pure: 4600,
              cool: 3500,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'supportedFeel_stage',
              name: 'サポーテッドフィール',
              AP: 5,
              detail: [
                [6.4, 7.04, 7.68, 8.32, 8.96, 9.6, 10.24, 10.88, 11.52, 12.8, 13.44, 14.08, 14.72, 16],
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, 2.7, 2.9, 3, 3.2]
              ]
            },
            skill: {
              ID: 'chillFeel_mentalRecover_under2_stageAttract',
              name: 'チルフィール',
              AP: 3,
              detail: [
                [4.4, 4.84, 5.28, 5.72, 6.16, 6.6, 7.04, 7.48, 7.92, 8.8, 9.24, 9.68, 10.12, 11],
                [5.8, 6.4, 7, 7.5, 8.1, 8.7, 9.3, 9.9, 10.4, 11.6, 12.2, 12.8, 13.3, 14.5]
              ]
            },
            characteristic: {
              name: 'APレデュース：瑠璃乃 & メンタルリカバー：瑠璃乃',
              detail: '瑠璃乃のスキルを使用するたび、手札のこのスキルの消費AP-1し、メンタルを最大値の4%回復させる。',
              type: ['APReduce', 'mentalRecover', 'rurino']
            }
          },
          'Link to the FUTURE': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'Link to the FUTURE',
            kana: 'りんくとぅーざふゅーちゃー',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION Vol.3',
              period: 'winter'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5050,
              pure: 4300,
              cool: 4150,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'chillProtect_under5_stageProtect',
              name: 'チルプロテクト',
              AP: 5,
              detail: [
                [3.6, 3.96, 4.32, 4.68, 5.04, 5.4, 5.76, 6.12, 6.48, 7.2, 7.56, 7.92, 8.28, 9],
                [4.4, 4.84, 5.28, 5.72, 6.16, 6.6, 7.04, 7.48, 7.92, 8.8, 9.24, 9.68, 10.12, 11]
              ]
            },
            characteristic: {
              name: 'サーチ：瑠璃乃 & APゲイン',
              detail: 'スキル使用後、瑠璃乃のカードをドローする確率大幅アップ。さらにスキル使用時、3回までAPを3回復する。',
              type: ['search', 'rurino', 'APGain']
            }
          },
          'プチパティシエール': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'プチパティシエール',
            kana: 'ぷちぱてぃしえーる',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第6回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2130,
              pure: 1930,
              cool: 1030,
              mental: 223,
              BP: 100
            },
            specialAppeal: {
              ID: 'healingHeart_recover_heart',
              name: 'ヒーリングハート',
              AP: 6,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, '20?'],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, '5?']
              ]
            },
            skill: {
              ID: 'supportedFeel_stage',
              name: 'サポーテッドフィール',
              AP: 4,
              detail: [
                [5.2, 5.72, 6.24, 6.76, 7.28, 7.8, 8.32, 8.84, 9.36, 10.4, 10.92, 11.44, 11.96, 13],
                [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.5]
              ]
            },
            characteristic: {
              name: 'ドロー：メンタルリカバー',
              detail: 'ドローした時、メンタルの最大値の6%回復させる。',
              type: ['draw', 'mentalRecover']
            }
          },
          'コットン=ユートピア': {
            styleType: 'cheerLeader',
            mood: 'melow',
            series: 'コットン=ユートピア',
            kana: 'こっとんゆーとぴあ',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.7',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 4300,
              cool: 3400,
              mental: 460,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：APレデュース & マチュレーション',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費APを-3し、スキルの効果値が増加する。',
              type: ['overSection', 'APReduce', 'maturation']
            }
          },
          'Trick & Cute': {
            styleType: 'performer',
            mood: 'melow',
            series: 'Trick & Cute',
            kana: 'とりっくあんどきゅーと',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.5',
              period: 'autumn'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 3700,
              cool: 4500,
              mental: 430,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '10?', 11],
                [1.6, 1.8, 1.9, 2.1, 2.2, 2.4, 2.6, 2.7, 2.9, 3.2, 3.4, 3.5, 3.7, 4]
              ]
            },
            skill: {
              ID: 'calmHeart',
              name: 'カームハート',
              AP: 3,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '9?', 10]
              ]
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
            series: 'うさぴょん',
            kana: 'うちゅうえんぶうさぴょん',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.4',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
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
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'extensions2_stageAttract_section',
              name: 'エクステアトラクト',
              AP: 3,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, 2.7, 2.8, 3, 3.2]
              ]
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
            series: 'ゆのくにガールズ！',
            kana: 'ゆのくにがーるず',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 4400,
              cool: 3900,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'cheerfulRecover_upper100_stageProtect',
              name: 'チアフルリカバー',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            characteristic: {
              name: 'APレデュース：瑠璃乃',
              detail: '瑠璃乃のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APReduce', 'rurino']
            }
          },
          'yours ever': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'yours ever',
            kana: 'ゆあーずえばー',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第3回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 4300,
              cool: 3700,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'healingHeart_recover_heart',
              name: 'ヒーリングハート',
              AP: 6,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4]
              ]
            },
            characteristic: {
              name: 'インタープリテーション & ドロー：ハッピー/アトラクトブースト',
              detail: 'このスキルのムードによる効果増加量を上昇させる。さらにムードがハッピーでドローした時、次に使用するラブアトラクト効果を+20%する。',
              type: ['interPretation', 'drew', 'boost_loveAttract']
            }
          },
          '世界中を夢中に': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '世界中を夢中に',
            kana: 'せかいじゅうをむちゅうに',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4200,
              pure: 4500,
              cool: 3600,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, '30?']
              ]
            },
            skill: {
              ID: 'cheerfulInitiate',
              name: 'チアフルイニシエイト',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, 32],
                [1.6, 1.76, 1.92, 2.08, 2.24, 2.4, 2.56, 2.72, 2.88, 3.2, 3.36, 3.48, 3.64, 4]
              ]
            },
            characteristic: {
              name: 'チェイン：瑠璃乃 & ドロー：ボルテージブースト：瑠璃乃',
              detail: '瑠璃乃のスキルを使用した後、ドローされる確率が増加する。さらにドローしたとき、次に瑠璃乃が使用するボルテージゲイン効果を+75%する。',
              type: ['chain', 'rurino', 'drew', 'boost_voltageGain']
            }
          },
          '@いっつぁどりーみんわーるど！': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: '@いっつぁどりーみんわーるど！',
            kana: 'いっつぁどりーみんわーるど',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 4300,
              cool: 3400,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 7,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, '30?']
              ]
            },
            skill: {
              ID: 'mentalProtect_recover_sectionProtect',
              name: 'メンタルプロテクト',
              AP: 4,
              detail: [
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, 10.08, 10.56, 11.04, 12],
                [2, 2.2, 2.4, 2.6, 2.8, 3, 3.2, 3.4, 3.6, 4, 4.2, 4.4, 4.6, 5]
              ]
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
            series: 'One Day',
            kana: 'えむずわんでい',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4200,
              pure: 4400,
              cool: 4000,
              mental: 380,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'フェイバリット：3',
              detail: 'フィーバーセクションを除いた3セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          }
        },
        R: {
          '室咲格子': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '室咲格子',
            kana: 'むろざきこうし',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2350,
              pure: 2600,
              cool: 2950,
              mental: 290,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 7,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, 4, 4.2, 4.4, 4.8]
              ]
            }
          },
          'レインボーシフォン': {
            styleType: 'performer',
            mood: 'happy',
            series: 'レインボーシフォン',
            kana: 'れいんぼーしふぉん',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3200,
              pure: 2400,
              cool: 2200,
              mental: 300,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalProtect_stageProtect',
              name: 'メンタルプロテクト',
              AP: 5,
              detail: [
                [3.2, 3.52, 3.84, 4.16, 4.48, 4.8, 5.12, 5.44, 5.76, 6.4, 6.72, 7.04, 7.36, 8]
              ]
            },
            skill: {
              ID: 'mentalProtect_stageProtect',
              name: 'メンタルプロテクト',
              AP: 3,
              detail: [
                [1.6, 1.76, 1.92, 2.08, 2.24, 2.4, 2.56, 2.72, 2.88, 3.2, 3.36, 3.52, 3.68, 4]
              ]
            }
          },
          '華紺青': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: '華紺青',
            kana: 'はなこんじょう',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2700,
              pure: 2800,
              cool: 2600,
              mental: 270,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 8,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            }
          },
          'オーロラスカイ': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: 'オーロラスカイ',
            kana: 'おーろらすかい',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2600,
              pure: 3000,
              cool: 2400,
              mental: 280,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 6,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 4,
              detail: [
                [4.8, 5.28, 5.76, 6.24, 6.72, 7.2, 7.68, 8.16, 8.64, 9.6, 10.08, 10.56, 11.04, 12]
              ]
            }
          }
        }
      },
      ginko: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            kana: '',
            gacha: {
              addSeason: '',
              period: ''
            },
            favorite: [],
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 30,
              pure: 30,
              cool: 30,
              mental: 3,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {}
            },
            skill: {
              name: '',
              AP: 1,
              detail: {}
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        DR: {
          'Ether Aria': {
            styleType: 'performer',
            mood: 'happy',
            series: 'Ether Aria',
            kana: 'えーてるありあ',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 6500,
              cool: 6200,
              mental: 590,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshBoost',
              name: 'リフレッシュブースト',
              AP: 5,
              detail: [
                ['32?', '35.2?', '38.4?', '41.6?', '44.8?', '48?', '51.2?', '54.4?', '57.6?', '64?', '67.2?', '70.4?', '73.6?', 80]
              ]
            },
            skill: {
              ID: 'dress_etherAria',
              name: 'ドレス《Ether Aria》',
              AP: 9,
              detail: [],
              addSkill: [
                {
                  ID: 'heartGain_1',
                  name: 'ハートゲイン',
                  AP: 1,
                  detail: [
                    ['8?', '9?', '10?', '11?', '12?', '13?', '13?', '14?', '15?', '17?', '18?', '18?', '19?', 21]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            },
            characteristic: {
              name: 'ドロー：ドレス《Ether Aria》',
              detail: 'ドローした時、ドレスカード《Ether Aria》を1種類（合計3枚）山札に追加する。',
              type: ['drew', 'addCard'],
              addSkill: [
                {
                  ID: 'heartGain_1',
                  name: 'ハートゲイン',
                  AP: 1,
                  detail: [
                    ['8?', '9?', '10?', '11?', '12?', '13?', '13?', '14?', '15?', '17?', '18?', '18?', '19?', 21]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            }
          }
        },
        BR: {
          '16th Birthday': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: 'Birthday',
            kana: 'しっくすてぃーんすばーすでー',
            gacha: {
              addSeason: '2024 BIRTHDAY LIMITED COLLECTION -Ginko-',
              period: 'birthday'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 4800,
              cool: 4800,
              mental: 480,
              BP: 100,
              supportSkill: {
                supportSkillTitle: '16th Birthday',
                supportSkillList: {
                  'ボルテージアップ': {
                    initLevel: 1,
                    levelUp: 5,
                    upLevel: 1
                  },
                  'メンタルリカバー': {
                    initLevel: 1,
                    levelUp: 4,
                    upLevel: 1
                  },
                  'ビートハートアップ': {
                    initLevel: 1,
                    levelUp: 2,
                    upLevel: 1
                  },
                  'LOVEボーナス': {
                    initLevel: 1,
                    levelUp: 3,
                    upLevel: 1
                  }
                }
              }
            },
            specialAppeal: {
              ID: 'dress_birthday',
              name: 'ドレス《16th Birthday》',
              AP: 6,
              detail: [],
              addSkill: [
                {
                  ID: 'fascination_stageAttract_stageProtect',
                  name: 'ファッシネイション',
                  AP: 5,
                  detail: [
                    [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30],
                    [48, 53, 58, 62, 67, 72, 77, 82, 86, 96, 101, 106, 110, 120],
                    [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
                  ],
                  characteristic: {
                    name: 'インスタンス & ドロー：マルチブースト：ドレス',
                    detail: 'このスキルを使用すると、デッキから除外される。さらにドローしたとき、次にドレスカードの使用によるラブアトラクト効果を+40%、ボルテージゲイン効果を+40%、メンタルプロテクト効果を+125%する。',
                    type: ['exclusion', 'boost_loveAttract', 'boost_voltageGain', 'boost_MentalProtect']
                  }
                }
              ]
            },
            skill: {
              ID: 'celebration_attract_voltage_protect',
              name: 'セレブレイション',
              AP: 3,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [24, 26.4, 28.8, 31.2, 33.6, 36, 38.4, 40.8, 43.2, 45.6, 48, 50.4, 52.8, 60]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ブレッシング',
              detail: '手札にある状態でセクションが変わるたび、手札のすべてのスキルの消費AP-1。',
              type: ['overSection', 'APReduce_all']
            }
          }
        },
        UR: {
          '月夜見海月': {
            styleType: 'trickStar',
            mood: 'melow',
            series: '月夜見海月',
            kana: 'つくよみくらげ',
            gacha: {
              addSeason: '2024 AUTUMN LIMITED COLLECTION Vol.2',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4400,
              pure: 4900,
              cool: 5500,
              mental: 440,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshGain',
              name: 'リフレッシュゲイン',
              AP: 5,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'dress_tsukuyomi',
              name: 'ドレス：月夜見海月',
              AP: 3,
              detail: [],
              addSkill: [
                {
                  ID: 'abunDanceAttraction_over30_stage',
                  name: 'アバンダンスアトラクション',
                  AP: 3,
                  detail: [
                    [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30],
                    [120, 132, 144, 156, 168, 180, 192, 204, 216, 240, 252, 264, 276, 300]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            },
            characteristic: {
              name: 'ドロー：アバンダンス/エクステンドハンド',
              detail: 'ドローした時、このセクション中、手札の上限枚数を1枚増加する。さらにデッキ枚数が25枚以上のとき、このセクション中、手札の上限枚数を3枚増加する。',
              type: ['drew', 'abunDance', 'extendHand']
            }
          },
          'PASSION!!!!!!': {
            styleType: 'trickStar',
            mood: 'melow',
            series: 'PASSION!!!!!!',
            kana: 'ぱっしょん',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.8',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 5300,
              cool: 4950,
              mental: 495,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions_stage-boost_heartCaptcha-heatUp_section',
              name: 'エクステブーステッドヒート',
              AP: 6,
              detail: [
                [50, 55, 60, 65, 70, 75, 80, 85, 90, 100, 105, 110, 115, 125]
              ]
            },
            skill: {
              ID: 'dress_passion',
              name: 'ドレス《PASSION!!!!!!》',
              AP: 3,
              detail: [],
              addSkill: [
                {
                  ID: 'heatUp_section',
                  name: 'ヒートアップ',
                  AP: 2,
                  detail: [
                    [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            },
            characteristic: {
              name: 'ヒートアップ：ハートキャプチャ',
              detail: '手札にある状態でメイン効果がハートキャプチャのスキルを使用するたび、このセクション中、AP回復速度を+10%する。',
              type: ['APFast']
            }
          },
          'アオクハルカ/華': {
            styleType: 'trickStar',
            mood: 'melow',
            series: 'アオクハルカ',
            kana: 'あおくはるか',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.6',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 4000,
              cool: 6000,
              mental: 530,
              BP: 100
            },
            specialAppeal: {
              ID: 'wideGain_section',
              name: 'ワイドゲイン',
              AP: 4,
              detail: [
                [29, 32, 35, 38, 41, 44, 46, 49, 52, 58, 61, 64, 67, 72],
              ]
            },
            skill: {
              ID: 'remakeDress_hrm',
              name: 'リメイクドレス《華・麗・雅》',
              AP: 4,
              detail: [],
              addSkill: [
                {
                  ID: 'wideExtend_section4',
                  name: 'ワイドエクステンド',
                  AP: 2,
                  detail: [
                    [14, 15, 17, 18, 20, 21, 22, 24, 25, 28, 29, 31, 32, 36]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                },
                {
                  ID: 'aggressiveProtectBoost',
                  name: 'アグレッシブプロテクトブースト',
                  AP: 2,
                  detail: [
                    [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30],
                    [2.4, 2.64, 2.88, 3.12, 3.36, 3.6, 3.84, 4.08, 4.32, 4.8, 5.04, 5.28, 5.52, 6]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                },
                {
                  ID: 'attractBoost_MiraCraPark',
                  name: 'アトラクトブースト：みらくらぱーく！',
                  AP: 2,
                  detail: [
                    [70, 77, 84, 91, 98, 105, 112, 119, 126, 140, 147, 154, 161, 175]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            },
            characteristic: {
              name: 'APレデュース：スリーズブーケ & ショット：APゲイン',
              detail: '手札にある状態でスリーズブーケのスキルを使用するたび、手札のこのスキルの消費AP-1。さらにこのスキル使用時、5回までAPを3回復する。',
              type: ['APReduce', 'shot', 'APGain']
            }
          },
          'Bloom the smile, Bloom the dream!': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: 'Bloom the smile, Bloom the dream!',
            kana: 'ぶるーむざすまいるぶるーむざどりーむ',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.2',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 6200,
              cool: 4300,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'wideExtend_stage1',
              name: 'ワイドエクステンド',
              AP: 5,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
              ]
            },
            skill: {
              ID: 'dress_BsBd',
              name: 'ドレス《Bloom the smile, Bloom the dream!》',
              AP: 4,
              detail: [],
              addSkill: [
                {
                  ID: 'wideHeart_stage',
                  name: 'ワイドハート',
                  AP: 1,
                  detail: [
                    [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                },
                {
                  ID: 'heartCaptcha',
                  name: 'ハートキャプチャ',
                  AP: 3,
                  detail: [
                    [12, 13, 14, 16, 17, 18, 19, 20, 22, 24, 25, 26, 28, 30]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            },
            characteristic: {
              name: 'ドロー：ワイドハート',
              detail: 'ドローした時、このステージ中、ハート上限を+12する。',
              type: ['draw', 'HeartLimitUp']
            }
          },
          '青嵐の鯉流し': {
            styleType: 'trickStar',
            mood: 'happy',
            series: '青嵐の鯉流し',
            kana: 'あおあらしのこいながし',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION Vol.4',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4900,
              pure: 5600,
              cool: 4000,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartGain_3',
              name: 'ハートゲイン',
              AP: 2,
              detail: [
                [2, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'dress_seiranNoKoinagashi',
              name: 'ドレス《青嵐の鯉流し》',
              AP: 5,
              detail: [],
              addSkill: [
                {
                  ID: 'heartAttraction_stage',
                  name: 'ハートアトラクション',
                  AP: 1,
                  detail: [
                    [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                    [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3, 3.2, 3.4, 3.8, 4, 4.2, 4.4, 4.8]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-4する。',
              type: ['draw', 'APReduce']
            }
          },
          'Reflection in the mirror': {
            styleType: 'trickStar',
            mood: 'happy',
            series: 'Reflection in the mirror',
            kana: 'りふれくしょんいんざみらー',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION Vol.3',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5400,
              pure: 4850,
              cool: 4200,
              mental: 475,
              BP: 100
            },
            specialAppeal: {
              ID: 'regainAttract_stage',
              name: 'リゲインアトラクト',
              AP: 6,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'dress_ReflectionInTheMirror',
              name: 'ドレス《Reflection in the mirror》',
              AP: 5,
              detail: [],
              addSkill: [
                {
                  ID: 'heartCaptcha',
                  name: 'ハートキャプチャ',
                  AP: 1,
                  detail: [
                    [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                },
                {
                  ID: 'voltageGain',
                  name: 'ボルテージゲイン',
                  AP: 1,
                  detail: [
                    [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                },
                {
                  ID: 'extendHand_stage1',
                  name: 'エクステンドハンド',
                  AP: 1,
                  detail: [],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            },
            characteristic: {
              name: 'ドロー：メンタルプロテクト & APレデュース：ブレイブ',
              detail: 'ドローした時、このステージ中、メンタルの最大値の10%分のメンタルダメージを無効にする。さらにメンタルが50%以下の時にドローすると、消費APを-3する。',
              type: ['draw', 'protect', 'APReduce', 'brave']
            }
          },
          'Dream Believers': {
            styleType: 'trickStar',
            mood: 'melow',
            series: 'Dream Believers',
            kana: 'どりーむびりーばーず',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION Vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4200,
              pure: 4700,
              cool: 5300,
              mental: 500,
              BP: 100
            },
            specialAppeal: {
              ID: 'attractGain',
              name: 'アトラクトゲイン',
              AP: 2,
              detail: [
                [1.9, 2.1, 2.3, 2.5, 2.7, 2.9, 3.0, 3.2, 3.4, 3.8, 4, 4.2, 4.4, 4.8]
              ]
            },
            skill: {
              ID: 'dress_DreamBelievers',
              name: 'ドレス《Dream Believers》',
              AP: 2,
              detail: [],
              addSkill: [
                {
                  ID: 'heartCaptcha',
                  name: 'ハートキャプチャ',
                  AP: 2,
                  detail: [
                    [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                },
                {
                  ID: 'loveAttract_section',
                  name: 'ラブアトラクト',
                  AP: 2,
                  detail: [
                    [15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 30, 31.5, 33, 34.5, 37.5]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            },
            characteristic: {
              name: 'アーリードロー：APレデュース',
              detail: '3セクション目までにドローした場合、消費APを-3する。',
              type: ['earlyDraw', 'APReduce']
            }
          }
        },
        SR: {
          'アオクハルカ': {
            styleType: 'trickStar',
            mood: 'melow',
            series: 'アオクハルカ',
            kana: 'あおくはるか',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.5',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3800,
              pure: 4600,
              cool: 3900,
              mental: 450,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensionsHeart_section3',
              name: 'エクステハート',
              AP: 6,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10]
              ]
            },
            skill: {
              ID: 'dress_aokuharuka_ginko',
              name: 'ドレス《アオクハルカ》',
              AP: 3,
              detail: [],
              addSkill: [
                {
                  ID: 'refreshHeart',
                  name: 'リフレッシュハート',
                  AP: 2,
                  detail: [
                    [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            },
            characteristic: {
              name: 'ボルテージゲイン：スリーズブーケ',
              detail: '手札にある状態でスリーズブーケのスキルを使用するたび、ボルテージPt.を+3する。',
              type: ['voltageGain']
            }
          }
        },
        R: {
          '室咲格子': {
            styleType: 'trickStar',
            mood: 'melow',
            series: '室咲格子',
            kana: 'むろざきこうし',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2300,
              pure: 2700,
              cool: 3000,
              mental: 280,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
            },
            skill: {
              ID: 'dress_murozaki',
              name: 'ドレス《室咲格子》',
              AP: 4,
              detail: [],
              addSkill: [
                {
                  ID: 'voltageGain',
                  name: 'ボルテージゲイン',
                  AP: 1,
                  detail: [
                    [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
                  ],
                  characteristic: {
                    name: 'インスタンス',
                    detail: 'このスキルを使用すると、デッキから除外される。',
                    type: ['exclusion']
                  }
                }
              ]
            }
          },
          'レインボーシフォン': {
            styleType: 'trickStar',
            mood: 'happy',
            series: 'レインボーシフォン',
            kana: 'れいんぼーしふぉん',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2900,
              pure: 2400,
              cool: 2500,
              mental: 300,
              BP: 100
            },
            specialAppeal: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 5,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, 7]
              ]
            },
            skill: {
              ID: 'dress_rainbow',
              name: 'ドレス《レインボーシフォン》',
              AP: 2,
              detail: [],
              addSkill: [
                {
                  ID: 'loveAttract_stage',
                  name: 'ラブアトラクト',
                  AP: 1,
                  detail: [
                    [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4]
                  ]
                }
              ]
            }
          }
        }
      },
      kosuzu: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            kana: '',
            gacha: {
              addSeason: '',
              period: ''
            },
            favorite: [],
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 30,
              pure: 30,
              cool: 30,
              mental: 3,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {}
            },
            skill: {
              name: '',
              AP: 1,
              detail: {}
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        DR: {
          'Ether Aria': {
            styleType: 'performer',
            mood: 'happy',
            series: 'Ether Aria',
            kana: 'えーてるありあ',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 6500,
              pure: 6200,
              cool: 4800,
              mental: 570,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalProtect_stageProtect',
              name: 'メンタルプロテクト',
              AP: 11,
              detail: [
                [32, 35.2, 38.4, 41.6, 44.8, 48, 51.2, 54.4, 57.6, 64, 67.2, 70.4, 73.6, 80]
              ]
            },
            skill: {
              ID: 'futureBlessing',
              name: 'フューチャーブレッシング',
              AP: 4,
              detail: [
                [5.2, '5.7?', '6.2?', '6.8?', '7.3?', 7.8, '8.3?', '8.8?', '9.4?', 10.4, '10.9?', '11.4?', '12?', 13]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：エクステンドハンド',
              detail: '手札にある状態でセクションが変わるたび、このステージ中、手札の上限枚数を1枚増加する。',
              type: ['overSection', 'extendHand']
            }
          }
        },
        UR: {
          'Proof': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'Proof',
            kana: 'ぷるーふ',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.9',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5100,
              pure: 5900,
              cool: 3400,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'beliefBoost_dollchestra',
              name: 'ビリーフブースト：DOLLCHESTRA',
              AP: 5,
              detail: [
                [17, 18.7, 20.4, 22.1, 23.8, 25.5, 27.2, 28.9, 30.6, 34, 35.7, 37.4, 39.1, '42.5?']
              ]
            },
            skill: {
              ID: 'braveAttraction_under1_heartCaptcha_sectionAttract',
              name: 'ブレイブアトラクション',
              AP: 10,
              detail: [
                [11, 12, 13, 14, 15, 17, 18, 19, 20, 22, 23, 24, 25, 28],
                [150, 165, 180, 195, 210, 225, 240, 255, 270, 300, 315, 330, 345, 375]
              ]
            },
            characteristic: {
              name: 'ショット：ビリーフ & APレデュース：ブレイブ',
              detail: 'スキル使用時、このセクション中、メンタルが0になってもメンタルダウンしなくなる。(ステージ中、1回まで発動)さらにメンタルが25%以下のとき、手札のこのスキルの消費APを-7する。',
              type: ['mentalDown_section', 'APReduce']
            }
          },
          'レディバグ/麗': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'レディバグ',
            kana: 'れでぃばぐ',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.6',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3400,
              pure: 6000,
              cool: 4700,
              mental: 510,
              BP: 100
            },
            specialAppeal: {
              ID: 'aggressiveBeliefBoost',
              name: 'アグレッシブビリーフブースト',
              AP: 4,
              detail: [
                [14.4, 15.84, 17.28, 18.72, 20.16, 21.6, 23.04, 24.48, 25.92, 28.8, 30.24, 31.68, 33.12, 36]
              ]
            },
            skill: {
              ID: 'braveAttraction_under25_sectionAttract_heartCaptcha',
              name: 'ブレイブアトラクション',
              AP: 4,
              detail: [
                ['10.8?', '11.9?', '13?', '14?', '15.1?', '16.2?', '17.3?', '18.4?', '19.4?', '21.6?', '22.7?', '23.8?', '24.8?', 27],
                [8, 9, 10, 10, 11, 12, 13, 14, 14, 16, 17, 18, 18, 20]
              ]
            },
            characteristic: {
              name: 'APゲイン：ブレイブ',
              detail: 'スキル使用時メンタルが25%以下のとき、APを+3する。',
              type: ['APGain', 'brave']
            }
          },
          'Bloom the smile, Bloom the dream!': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'Bloom the smile, Bloom the dream!',
            kana: 'ぶるーむざすまいるぶるーむざどりーむ',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.2',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 6100,
              cool: 4500,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'wideExtend_section3',
              name: 'ワイドエクステンド',
              AP: 5,
              detail: [
                [29, 32, 35, 38, 41, 44, 46, 49, 52, 58, 61, 64, 67, 72]
              ]
            },
            skill: {
              ID: 'braveWideBoost_under10_section',
              name: 'ブレイブワイドブースト',
              AP: 4,
              detail: [
                [26, 29, 31, 34, 36, 39, 42, 44, 47, 52, 55, 57, 60, 65],
                [80, 88, 96, 104, 112, 120, 128, 136, 144, 160, 168, 176, 184, 200]
              ]
            },
            characteristic: {
              name: 'ドロー：ハートブースト',
              detail: 'ドローした時、次に使用するスキルハート獲得効果による獲得数を+50%する。',
              type: ['draw', 'heartBoost']
            }
          },
          'レディバグ': {
            styleType: 'performer',
            mood: 'melow',
            series: 'レディバグ',
            kana: 'れでぃばぐ',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION vol.6',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3700,
              pure: 4600,
              cool: 5700,
              mental: 520,
              BP: 100
            },
            specialAppeal: {
              ID: 'beliefBoost',
              name: 'ビリーフブースト',
              AP: 5,
              detail: [
                [40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 100],
                [13.6, 15, 16.4, 17.8, 19.2, 20.6, 22, 23.4, 24.8, 26.2, 27.6, '29.92?', '31.28?', 34]
              ]
            },
            skill: {
              ID: 'braveAttraction_under5_heartCaptcha_sectionAttract',
              name: 'ブレイブアトラクション',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [30, 33, 36, 39, 42, 45, 48, 51, 54, 60, 63, 66, 69, 75]
              ]
            },
            characteristic: {
              name: 'APゲイン：ブレイブ',
              detail: 'スキル使用時メンタルが5%以下のとき、APを+4する。',
              type: ['APGain']
            }
          },
          'Sparkly Spot': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Sparkly Spot',
            kana: 'すぱーくりーすぽっと',
            gacha: {
              addSeason: 'ライブグランプリ「104期OPENING！第1回サークル対抗戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 4300,
              cool: 5450,
              mental: 465,
              BP: 100
            },
            specialAppeal: {
              ID: 'braveFascinate_under50_voltageGain_sectionAttract',
              name: 'ブレイブファッシネイト',
              AP: 7,
              detail: [
                [26, 29, 31, 34, 36, 39, 42, 44, 47, 52, 55, 57, 60, 65],
                [19.8, 21.8, 23.8, 25.7, 27.7, 29.7, 31.7, 33.7, 35.6, 39.6, 41.6, 43.6, 45.5, 49.5]
              ]
            },
            skill: {
              ID: 'aggressiveVoltage_mentalReduce15',
              name: 'アグレッシブボルテージ',
              AP: 5,
              detail: [
                [24, 26, 29, 31, 34, 36, 38, 41, 43, 48, 50, 53, 55, 60]
              ]
            },
            characteristic: {
              name: 'チェイン：さやか & APレデュース：グルーヴィ',
              detail: 'さやかのスキルを使用した後、ドローされる確率が増加する。さらにドローした時ボルテージLv.が7以上の時、手札のこのスキルの消費AP-3。',
              type: ['chain', 'sayaka', 'APReduce', 'groovy']
            }
          },
          'Dream Believers': {
            styleType: 'performer',
            mood: 'happy',
            series: 'Dream Believers',
            kana: 'どりーむびりーばーず',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION Vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5300,
              pure: 4550,
              cool: 4350,
              mental: 500,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalProtect_stageProtect',
              name: 'メンタルプロテクト',
              AP: 5,
              detail: [
                [5.2, 5.72, 6.24, 6.76, 7.28, 7.8, 8.32, 8.84, 9.36, 10.4, 10.92, 11.44, 11.96, 13]
              ]
            },
            skill: {
              ID: 'braveAttraction_under50_heartCaptcha_sectionAttract',
              name: 'ブレイブアトラクション',
              AP: 5,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12],
                [15.6, 17.2, 18.7, 20.3, 21.8, 23.4, 25, 26.5, 28.1, 31.2, 32.8, 34.3, 35.89, 39]
              ]
            },
            characteristic: {
              name: 'アキューミュレイト',
              detail: '使用する度に消費APが低下する。',
              type: ['exclusion']
            }
          }
        },
        SR: {
          'PASSION!!!!!!': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'PASSION!!!!!!',
            kana: 'ぱっしょん',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.8',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3300,
              pure: 4800,
              cool: 4500,
              mental: 420,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions1_voltage_stage',
              name: 'エクステボルテージ',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40]
              ]
            },
            skill: {
              ID: 'braveVoltageHeart_under25',
              name: 'ブレイブボルテージハート',
              AP: 3,
              detail: [
                [9, 10, 11, 12, 13, 14, 14, 15, 16, 18, 19, 20, 21, 22],
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 9, 9]
              ]
            },
            characteristic: {
              name: 'ヒートアップ：ブレイブ',
              detail: 'メンタルが25%以下の時にドローすると、このセクション中、AP回復速度を+8%する。',
              type: ['heatUp']
            }
          },
          '青嵐の鯉流し': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '青嵐の鯉流し',
            kana: 'あおあらしのこいながし',
            gacha: {
              addSeason: 'ライブグランプリ「104期 1stTerm 第2回個人戦」報酬',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4300,
              pure: 4600,
              cool: 3800,
              mental: 410,
              BP: 100
            },
            specialAppeal: {
              ID: 'protectFeel_sectionAttract',
              name: 'プロテクトフィール',
              AP: 4,
              detail: [
                [2.8, 3.08, 3.36, 3.64, 3.92, 4.2, 4.48, 4.76, 5.04, 5.6, 5.88, 6.16, 6.44, 7],
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.3, 8]
              ]
            },
            skill: {
              ID: 'braveExtensionsVoltage1_under50_section',
              name: 'ブレイブエクステボルテージ',
              AP: 6,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, '40?']
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-4する。',
              type: ['draw', 'APReduce']
            }
          }
        },
        R: {
          '室咲格子': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: '室咲格子',
            kana: 'むろざきこうし',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2700,
              pure: 3100,
              cool: 2200,
              mental: 280,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30]
              ]
            },
            skill: {
              ID: 'mentalProtect_stageProtect',
              name: 'メンタルプロテクト',
              AP: 4,
              detail: [
                [2.4, 2.64, 2.88, 3.12, 3.36, 3.6, 3.84, 4.08, 4.32, 4.8, 5.04, 5.28, 5.52, 6]
              ]
            }
          },
          'レインボーシフォン': {
            styleType: 'cheerLeader',
            mood: 'melow',
            series: 'レインボーシフォン',
            kana: 'れいんぼーしふぉん',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2200,
              pure: 2600,
              cool: 3000,
              mental: 300,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4]
              ]
            },
            skill: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 3,
              detail: [
                [3.2, 3.52, 3.84, 4.16, 4.48, 4.8, 5.12, 5.44, 5.76, 6.4, 6.72, 7.04, 7.36, 8]
              ]
            }
          }
        }
      },
      hime: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            kana: '',
            gacha: {
              addSeason: '',
              period: ''
            },
            favorite: [],
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 30,
              pure: 30,
              cool: 30,
              mental: 3,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {}
            },
            skill: {
              name: '',
              AP: 1,
              detail: {}
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        DR: {
          'Ether Aria': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Ether Aria',
            kana: 'えーてるありあ',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5500,
              pure: 5800,
              cool: 6200,
              mental: 570,
              BP: 100
            },
            specialAppeal: {
              ID: 'apex',
              name: 'エイペックス',
              AP: 8,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'fascination',
              name: 'ファッシネイション',
              AP: 5,
              detail: [
                ['19?', '21?', '23?', '25?', '27?', '29?', '30?', '32?', '34?', '38?', '40?', '42?', '44?', 48],
                ['5.28?', '5.81?', '6.34?', '6.86?', '7.39?', '7.92?', '8.45?', '8.98?', '9.50?', '10.56?', '11.09?', '11.67?', '12.14?', 13.2],
                ['1.68?', '1.85?', '2.02?', '2.18?', '2.35?', '2.52?', '2.69?', '2.86?', '3.02?', '3.36?', '3.53?', '3.7?', '3.86?', 4.2],
              ]
            },
            characteristic: {
              name: 'ドロー & オーバーセクション：ファッシネイション',
              detail: 'ドローした時と、手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+15%し、ボルテージPt.を+18する。',
              type: ['draw', 'overSection', 'loveAttract_section', 'voltageGain']
            }
          }
        },
        BR: {
          '16th Birthday': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: 'Birthday',
            kana: 'しっくすてぃーんすばーすでー',
            gacha: {
              addSeason: '2024 BIRTHDAY LIMITED COLLECTION -Hime-',
              period: 'birthday'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4800,
              pure: 4800,
              cool: 4800,
              mental: 480,
              BP: 100,
              supportSkill: {
                supportSkillTitle: '16th Birthday',
                supportSkillList: {
                  'ボルテージアップ': {
                    initLevel: 1,
                    levelUp: 2,
                    upLevel: 1
                  },
                  'メンタルリカバー': {
                    initLevel: 1,
                    levelUp: 5,
                    upLevel: 1
                  },
                  'ビートハートアップ': {
                    initLevel: 1,
                    levelUp: 3,
                    upLevel: 1
                  },
                  'LOVEボーナス': {
                    initLevel: 1,
                    levelUp: 4,
                    upLevel: 1
                  }
                }
              }
            },
            specialAppeal: {
              ID: 'heartBoost_MiraCraPark_stage',
              name: 'ハートブースト：みらくらぱーく！',
              AP: 5,
              detail: [
                [44, 48.4, 52.8, 57.2, 61.6, 66, 70.4, 74.8, 79.2, 88, 92.4, 96.8, 101.2, 110]
              ]
            },
            skill: {
              ID: 'celebration_heart_attract_mental',
              name: 'セレブレイション',
              AP: 3,
              detail: [
                [24, 26.4, 28.8, 31.2, 33.6, 36, 38.4, 40.8, 43.2, 45.6, 48, 50.4, 52.8, 60],
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ブレッシング',
              detail: '手札にある状態でセクションが変わるたび、手札のすべてのスキルの消費AP-1。',
              type: ['overSection', 'APReduce_all']
            }
          }
        },
        UR: {
          'ファンファーレ！！！': {
            styleType: 'performer',
            mood: 'happy',
            series: 'ファンファーレ！！！',
            kana: 'ふぁんふぁーれ',
            gacha: {
              addSeason: '2024 AUTUMN LIMITED COLLECTION vol.3',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 5800,
              pure: 4900,
              cool: 3700,
              mental: 480,
              BP: 100
            },
            specialAppeal: {
              ID: 'modeChange_mentalRecover_voltageGain',
              name: 'モードチェンジ',
              AP: 7,
              detail: [
                [11.6, '12.8?', '13.9?', '15.1?', '16.2?', 17.4, '18.6?', '19.7?', '20.9?', 23.2, '24.4?', '25.5?', '26.7?', 29],
                [12, 13, 14, 16, 17, 18, 19, 20, 22, 24, 25, 26, 28, 29]
              ]
            },
            skill: {
              ID: 'alternate_ignition_hime',
              name: 'オルタネイト：イグニッション',
              AP: 5,
              detail: [],
              addSkill: {
                off: {
                  modeName: '通常',
                  ID: 'ignitionStandby_hime_mentalOver100OrVoltageOver10',
                  name: 'イグニッションスタンバイ',
                  AP: 5,
                  detail: [
                    [13.2, '14.5?', '15.8?', '17.2?', '18.5?', 19.8, '21.1?', '22.4?', '23.8?', 26.4, '27.7?', '29?', '30.4?', 33],
                    [26, 29, 31, 34, 36, 39, 42, 44, 47, 52, 55, 57, 60, 65]
                  ]
                },
                on: {
                  modeName: 'イグニッションモード',
                  ID: 'fullPowerAttraction',
                  name: 'フルパワーアトラクション',
                  AP: 25,
                  detail: [
                    [133, 146, 160, 173, 186, 200, 213, 226, 239, 266, 279, 293, 306, 333],
                    [1333.2, '1466.5?', '1599.8?', '1733.2?', '1866.5?', 1999.8, '2133.1?', '2266.4?', '2399.8?', 2666.4, '2799.7?', '2933?', '3066.4?', 3333]
                  ]
                }
              }
            },
            characteristic: {
              name: 'オルタネイト：イグニッション',
              detail: '姫芽の《イグニッションモード》の状態に応じて効果が変化する。',
              type: ['alternate'],
              changeCharacteristic: [
                {
                  modeName: '通常',
                  name: 'ドロー：リカバーブースト & ボルテージブースト：姫芽',
                  detail: 'ドローした時、次に姫芽が使用するメンタルリカバー効果を+300%、ボルテージゲイン効果を+48%する。'
                },
                {
                  modeName: 'イグニッションモード',
                  name: 'APレデュース：みらくらぱーく！',
                  detail: 'みらくらぱーく！のスキルを使用するたび、手札のこのスキルの消費AP-5。'
                }
              ]
            }
          },
          'PASSION!!!!!!': {
            styleType: 'trickStar',
            mood: 'melow',
            series: 'PASSION!!!!!!',
            kana: 'ぱっしょん',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.8',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4000,
              pure: 5300,
              cool: 5000,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions_stage-boost_loveAttract-heatUp_section',
              name: 'エクステブーステッドヒート',
              AP: 6,
              detail: [
                [16.8, 18.48, 20.16, 21.84, 23.52, 25.2, 26.88, 28.56, 30.24, 33.6, 35.28, 36.96, 38.64, 42]
              ]
            },
            skill: {
              ID: 'refreshProtect_stage',
              name: 'リフレッシュプロテクト',
              AP: 3,
              detail: [
                [3.2, 3.52, 3.84, 4.16, 4.48, 4.8, 5.12, 5.44, 5.76, 6.4, 6.72, 7.04, 7.36, 8]
              ]
            },
            characteristic: {
              name: 'ヒートアップ',
              detail: '手札にある間、AP回復速度を+30%する。',
              type: ['heatUp']
            }
          },
          'みらくりえーしょん/雅': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'みらくりえーしょん',
            kana: 'みらくりえーしょん',
            gacha: {
              addSeason: 'ライブグランプリ「104期 1stTerm 第4回サークル対抗戦」',
              period: 'prize'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 6000,
              pure: 4800,
              cool: 3330,
              mental: 510,
              BP: 100
            },
            specialAppeal: {
              ID: 'ignitionProtect',
              name: 'イグニッションプロテクト',
              AP: 5,
              detail: [
                [5.2, 5.72, 6.24, 6.76, 7.28, 7.8, 8.32, 8.84, 9.36, 10.4, 10.92, 11.44, 11.96, 13]
              ]
            },
            skill: {
              ID: 'alternate_ignition_hime',
              name: 'オルタネイト：イグニッション',
              AP: 5,
              detail: [],
              addSkill: {
                off: {
                  modeName: '通常',
                  ID: 'attractBoost1',
                  name: 'アトラクトブースト',
                  AP: 5,
                  detail: [
                    [16.8, 18.5, 20.2, 21.8, 23.5, 25.2, 26.9, 28.6, 30.2, 33.6, 35.3, 37, 38.6, 42]
                  ]
                },
                on: {
                  modeName: 'イグニッションモード',
                  ID: 'heartAttraction_section',
                  name: 'ハートアトラクション',
                  AP: 15,
                  detail: [
                    [18, 20, 22, 23, 25, 27, 29, 31, 32, 36, 38, 40, 41, 45],
                    [22.8, 25.1, 27.4, 29.6, 32, 34.2, 36.5, 38.8, 41, 45.6, 47.9, 50.2, 52.4, 57]
                  ]
                }
              }
            },
            characteristic: {
              name: 'オルタネイト：イグニッション',
              detail: '姫芽の《イグニッションモード》の状態に応じて効果が変化する。',
              type: ['alternate'],
              changeCharacteristic: [
                {
                  modeName: '通常',
                  name: 'ドロー：アトラクトブースト',
                  detail: 'ドローした時、2回の間ラブアトラクト効果を+9.6%する。'
                },
                {
                  modeName: 'イグニッションモード',
                  name: 'ドロー：APレデュース',
                  detail: 'ドローしたセクションの間、消費APを-10する。'
                }
              ]
            }
          },
          'みらくりえーしょん': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'みらくりえーしょん',
            kana: 'みらくりえーしょん',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION vol.3',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4500,
              pure: 6000,
              cool: 3500,
              mental: 520,
              BP: 100
            },
            specialAppeal: {
              ID: 'ignitionVoltage',
              name: 'イグニッションボルテージ',
              AP: 7,
              detail: [
                [29, 32, 35, 38, 41, 44, 46, 49, 52, 58, 61, 64, 67, 72]
              ]
            },
            skill: {
              ID: 'alternate_ignition_hime',
              name: 'オルタネイト：イグニッション',
              AP: 5,
              detail: [],
              addSkill: {
                off: {
                  modeName: '通常',
                  ID: 'voltageGain',
                  name: 'ボルテージゲイン',
                  AP: 5,
                  detail: [
                    [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
                  ]
                },
                on: {
                  modeName: 'イグニッションモード',
                  ID: 'aggressiveAttraction25_sectionAttract',
                  name: 'アグレッシブアトラクション',
                  AP: 15,
                  detail: [
                    [23, 25, 28, 30, 32, 35, 37, 39, 41, 46, 48, 51, 53, 57],
                    [57, 62.7, 68.4, 74.1, 79.8, 85.5, 91.2, 96.9, 102.6, 114, 119.7, 125.4, 131.1, 142.5]
                  ]
                }
              }
            },
            characteristic: {
              name: 'オルタネイト：イグニッション',
              detail: '姫芽の《イグニッションモード》の状態に応じて効果が変化する。',
              type: ['alternate'],
              changeCharacteristic: [
                {
                  modeName: '通常',
                  name: 'ドロー：ボルテージブースト & アトラクトブースト：みらくらぱーく！',
                  detail: 'ドローした時、次にみらくらぱーく！のメンバーが使用するボルテージゲイン効果を+40%、ラブアトラクト効果を+40%する。'
                },
                {
                  modeName: 'イグニッションモード',
                  name: 'アクセラレーション',
                  detail: 'ボルテージLv.10のとき、消費AP-10。'
                }
              ]
            }
          },
          '青嵐の鯉流し': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '青嵐の鯉流し',
            kana: 'あおあらしのこいながし',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION Vol.4',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4850,
              pure: 5550,
              cool: 4100,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 6,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            skill: {
              ID: 'attractBoost_MiraCraPark',
              name: 'アトラクトブースト：みらくらぱーく！',
              AP: 6,
              detail: [
                [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 125]
              ]
            },
            characteristic: {
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-4する。',
              type: ['draw', 'APReduce']
            }
          },
          'アイデンティティ': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'アイデンティティ',
            kana: 'あいでんてぃてぃ',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION Vol.3',
              period: 'spring'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4600,
              pure: 5400,
              cool: 4500,
              mental: 470,
              BP: 100
            },
            specialAppeal: {
              ID: 'supportedFeel_stage',
              name: 'サポーテッドフィール',
              AP: 7,
              detail: [
                [11.6, 12.76, 13.92, 15.08, 16.24, 17.4, 18.56, 19.72, 20.88, 23.2, 24.36, 25.52, 26.68, 29],
                [2.4, 2.6, 2.9, 3.1, 3.4, 3.6, 3.8, 4.1, 4.3, 4.8, 5, 5.3, 5.5, 6]
              ]
            },
            skill: {
              ID: 'braveAttract_under50_sectionAttract_APGain',
              name: 'ブレイブアトラクト',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            characteristic: {
              name: 'APレデュース：みらくらぱーく！ & アキューミュレイト',
              detail: 'みらくらぱーく！のスキルを使用するたび、手札のこのスキルの消費AP-1。さらにこのスキルを使用するたび、5回まで効果が増加する。',
              type: ['APReduce', 'MiraCraPark', 'exclusion']
            }
          },
          'Dream Believers': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Dream Believers',
            kana: 'どりーむびりーばーず',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION Vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4850,
              pure: 5450,
              cool: 4000,
              mental: 490,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions2_voltage_stage',
              name: 'エクステボルテージ',
              AP: 6,
              detail: [
                [20, 22, 24, 26, 28, 30, 32, 34, 36, 40, 42, 44, 46, 50]
              ]
            },
            skill: {
              ID: 'heartBoost_MiraCraPark_limit3',
              name: 'ハートブースト：みらくらぱーく！',
              AP: 6,
              detail: [
                [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 125]
              ]
            },
            characteristic: {
              name: 'APレデュース：みらくらぱーく！',
              detail: '手札にあるみらくらぱーく！のメンバーのスキル1枚につき、手札のこのスキルの消費AP-1。',
              type: ['APReduce', 'MiraCraPark']
            }
          }
        },
        SR: {
          'Bloom the smile, Bloom the dream!': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: 'Bloom the smile, Bloom the dream!',
            kana: 'ぶるーむざすまいるぶるーむざどりーむ',
            gacha: {
              addSeason: '2024 SUMMER LIMITED COLLECTION Vol.2',
              period: 'summer'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3900,
              pure: 5100,
              cool: 3700,
              mental: 410,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshWide',
              name: 'リフレッシュワイド',
              AP: 5,
              detail: [
                [24, 26, 29, 31, 34, 36, 38, 41, 43, 48, 50, 53, 55, 60]
              ]
            },
            skill: {
              ID: 'rebootHeart',
              name: 'リブートハート',
              AP: 4,
              detail: [
                [24, 26.4, 28.8, 31.2, 33.6, 36, 38.4, 40.8, 43.2, 48, 50.4, 52.8, 55.2, 60]
              ]
            },
            characteristic: {
              name: 'ドロー：ワイドハート',
              detail: 'ドローしたセクションの間、ハートの上限を+30する。',
              type: ['draw', 'wideHeart']
            }
          }
        },
        R: {
          '室咲格子': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '室咲格子',
            kana: 'むろざきこうし',
            gacha: {
              addSeason: '2024 SPRING LIMITED COLLECTION vol.1',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 2300,
              pure: 3200,
              cool: 2400,
              mental: 290,
              BP: 100
            },
            specialAppeal: {
              ID: 'mentalRecover',
              name: 'メンタルリカバー',
              AP: 7,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [6, 6.6, 7.2, 7.8, 8.4, 9, 9.6, 10.2, 10.8, 12, 12.6, 13.2, 13.8, 15]
              ]
            }
          },
          'レインボーシフォン': {
            styleType: 'performer',
            mood: 'happy',
            series: 'レインボーシフォン',
            kana: 'れいんぼーしふぉん',
            gacha: {
              addSeason: '初期所持',
              period: 'normal'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 3400,
              pure: 2300,
              cool: 2100,
              mental: 300,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 3,
              detail: [
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6]
              ]
            }
          }
        }
      },
      sachi: {
        'default': {
          'default': {
            styleType: '',
            mood: '',
            kana: '',
            gacha: {
              addSeason: '',
              period: ''
            },
            favorite: [],
            fluctuationStatus: {
              possession: false,
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 30,
              pure: 30,
              cool: 30,
              mental: 3,
              BP: 100
            },
            specialAppeal: {
              name: '',
              AP: 1,
              detail: {}
            },
            skill: {
              name: '',
              AP: 1,
              detail: {}
            },
            characteristic: {
              name: '',
              detail: '',
              type: []
            }
          }
        },
        UR: {
          '蓮ノ空女学院スクールアイドルクラブ101期生': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: '蓮ノ空女学院スクールアイドルクラブ101期生',
            kana: 'はすのそらじょがくいんすくーるあいどるくらぶ101きせい',
            gacha: {
              addSeason: '2023 GRADUATION LIMITED COLLECTION Vol.2',
              period: 'graduation'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1,
              releasePoint: 0
            },
            uniqueStatus: {
              smile: 4900,
              pure: 4750,
              cool: 4750,
              mental: 480,
              BP: 100
            },
            skill: {
              ID: 'dreamingSupport',
              name: 'ドリーミングサポート',
              AP: 1,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, 2.7, 2.8, 3, 3.2],
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 16],
                [1.6, 1.8, 1.9, 2.1, 2.2, 2.4, 2.6, 2.7, 2.9, 3.2, 3.4, 3.5, 3.7, 4]
              ]
            },
            characteristic: {
              name: 'グラデュエーション',
              detail: 'このスキルを3回使用すると、デッキから除外される。',
              type: ['exclusion']
            }
          }
        }
      }
    }
  }),
  getters: {},
  actions: {}
});