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
              releaseLevel: 1
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
              releaseLevel: 1
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
          'Prism Echo': {
            styleType: 'performer',
            mood: 'happy',
            series: 'Prism Echo',
            kana: 'ぷりずむえこー',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: '恒常'
            },
            favorite: [],
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
        UR: {
          '軌跡の舞踏会': {
            styleType: 'performer',
            mood: 'happy',
            series: '舞踏会',
            kana: 'きせきのぶとうかい',
            gacha: {
              addSeason: '2023 PARTY! LIMITED COLLECTION',
              period: '宴限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 3430,
              pure: 1830,
              cool: 330,
              mental: 173,
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
              name: 'オーバーセクション : APゲイン & リシャッフル',
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
              period: 'アイカツ!コラボ限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 1,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 1530,
              cool: 2430,
              mental: 173,
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
              type: ['APreduce', 'kaho', 'sayaka', 'rurino']
            }
          },
          '蓮ノ空歌留多': {
            styleType: 'performer',
            mood: 'neutral',
            series: '蓮ノ空歌留多',
            kana: 'はすのそらかるた',
            gacha: {
              addSeason: 'ライブグランプリ「第8回 個人戦」報酬',
              period: '配布'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 730,
              pure: 2030,
              cool: 2530,
              mental: 203,
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
              type: ['overSection', 'voltageGain', 'APreduce' ,'kaho']
            }
          },
          'Special Thanks': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Special Thanks',
            kana: 'すぺしゃるさんくす',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION Vol.6',
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1830,
              pure: 2530,
              cool: 1030,
              mental: 193,
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
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 3230,
              pure: 2530,
              cool: 1130,
              mental: 243,
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
              type: ['search', 'tsuzuri', 'APgain']
            }
          },
          'コットン=ユートピア': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'コットン=ユートピア',
            kana: 'こっとんゆーとぴあ',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION Vol.7',
              period: '恒常'
            },
            favorite: [],
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
              type: ['overSection', 'APreduce', 'maturation']
            }
          },
          '喫茶ハスノソラ': {
            styleType: 'performer',
            mood: 'happy',
            series: '喫茶ハスノソラ',
            kana: 'きっさはすのそら',
            gacha: {
              addSeason: 'ライブグランプリ「第5回個人戦」報酬',
              period: '配布'
            },
            favorite: [],
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
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, '13?']
              ]
            },
            skill: {
              ID: 'cheerfulHeart_heartCaptcha',
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
              period: '秋限定'
            },
            favorite: [],
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
              type: ['overSection', 'APreduce', 'aggressive']
            }
          },
          'ゆのくにガールズ！': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'ゆのくにガールズ！',
            kana: 'ゆのくにがーるず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.2',
              period: '恒常'
            },
            favorite: [],
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
                [16.8, 18.48, 20.16, 21.84, 23.52, 25.2, 26.88, 28.56, 30.24, 33.6, 35.28, 36.96, 38.64, 42]
              ]
            },
            skill: {
              ID: 'heartBoost',
              name: 'ハートブースト',
              AP: 5,
              detail: [
                [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 125]
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
              period: '配布'
            },
            favorite: [],
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
              name: 'オーバーセクション : ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+15%する。',
              type: ['overSection', 'loveAttract']
            }
          },
          'SPLASH!!!!': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'SPLASH!!!!',
            kana: 'すぷらっしゅ',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.8',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'APレデュース : 梢',
              detail: '梢のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APReduce', 'kozue']
            }
          },
          '眩耀夜行': {
            styleType: 'performer',
            mood: 'happy',
            series: '眩耀夜行',
            kana: 'げんようやこう',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.6',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'インタープリテーション',
              detail: 'このスキルのムードによる効果増加量を上昇させる。',
              type: ['interPretation']
            }
          },
          'ペンギンアイス': {
            styleType: 'performer',
            mood: 'happy',
            series: 'ペンギンアイス',
            kana: 'ぺんぎんあいす',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.4',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'オーバーセクション：ハートキャプチャ',
              detail: '手札にある状態でセクションが変わるたび、ビートハート6回分のスキルハートを獲得する。',
              type: ['overSection', 'heartCaptcha']
            }
          },
          'フォーチュンムービー': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'フォーチュンムービー',
            kana: 'ふぉーちゅんむーびー',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.2',
              period: '恒常'
            },
            favorite: [],
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
              name: 'オーバーセクション：APゲイン',
              detail: '手札にある状態でセクションが変わるたび、APを5回復する。',
              type: ['overSection', 'APGain']
            }
          },
          'Holiday∞Holiday': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'Holiday∞Holiday',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.3',
              period: '春限定'
            },
            kana: 'ほりでーほりでー',
            favorite: [],
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
              name: 'チェイン：花帆',
              detail: '花帆のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'kaho']
            }
          },
          'Rose Garden': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'Rose Garden',
            kana: 'ろーずがーでん',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.2',
              period: '春限定'
            },
            favorite: [],
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
              name: 'チェイン：梢',
              detail: '梢のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'kozue']
            }
          },
          '薫風の調べ': {
            styleType: 'performer',
            mood: 'happy',
            series: '薫風の調べ',
            kana: 'くんぷうのしらべ',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '恒常'
            },
            favorite: [],
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
              type: ['draw', 'APreduce']
            }
          },
          '春色ニューデイズ': {
            styleType: 'performer',
            mood: 'happy',
            series: '春色ニューデイズ',
            kana: 'はるいろにゅーでいず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION Vol.2',
              period: '春限定'
            },
            favorite: [],
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
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-1する。',
              type: ['draw', 'APreduce']
            }
          },
          'Dream Believers': {
            styleType: 'performer',
            mood: 'happy',
            series: 'Dream Believers',
            kana: 'どりーむびりーばーず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 3,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            characteristic: {
              name: 'フェイバリット：フィーバー',
              detail: 'フィーバーセクションでドローされる確率が増加する。',
              type: ['favorite']
            }
          }
        },
        SR: {
          '桃節銘記': {
            styleType: 'performer',
            mood: 'happy',
            series: '桃節銘記',
            kana: 'とうせつめいき',
            gacha: {
              addSeason: '2023 GRADUATION LIMITED COLLECTION Vol.1',
              period: '卒業限定'
            },
            favorite: [],
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
              cool: 1730,
              mental: 153,
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
              type: ['heartCollect', 'APreduce', 'loveAttract_stage']
            }
          },
          'ハッピー至上主義！': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'ハッピー至上主義！',
            kana: 'はっぴーしじょうしゅぎ',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.8',
              period: '冬限定'
            },
            favorite: [],
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
              cool: 1330,
              mental: 183,
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
              period: '恒常'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1630,
              pure: 1730,
              cool: 2230,
              mental: 173,
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
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2230,
              pure: 1730,
              cool: 1430,
              mental: 193,
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
              period: '秋限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 2430,
              cool: 930,
              mental: 203,
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
              type: ['APreduce', 'mental']
            }
          },
          '宇宙演舞☆うさぴょん': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: 'うさぴょん',
            kana: 'うちゅうえんぶうさぴょん',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.4',
              period: '恒常'
            },
            favorite: [],
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
              type: ['draw', 'APreduce']
            }
          },
          '素顔のピクセル': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: '素顔のピクセル',
            kana: 'すがおのぴくせる',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.3',
              period: '秋限定'
            },
            favorite: [],
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
              name: 'オーバーセクション : APレデュース',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-3。',
              type: ['overSection', 'APreduce']
            }
          },
          'ドルフィン〰ビーチ': {
            styleType: 'performer',
            mood: 'happy',
            series: 'ドルフィン〰ビーチ',
            kana: 'どるふぃんびーち',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第2回個人戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              name: 'APレデュース：梢',
              detail: '梢のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'kozue']
            }
          },
          'はじける☆オレンジソーダ': {
            styleType: 'performer',
            mood: 'happy',
            series: 'はじける☆ソーダ',
            kana: 'はじけるそーだ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.7',
              period: '恒常'
            },
            favorite: [],
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
              name: 'オーバーセクション：APゲイン',
              detail: '手札にある状態でセクションが変わるたび、APを2回復する。',
              type: ['overSection', 'APGain']
            }
          },
          '朝顔令嬢': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '朝顔令嬢',
            kana: 'あさがおれいじょう',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.5',
              period: '恒常'
            },
            favorite: [],
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
              name: 'ドロー : APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APreduce']
            }
          },
          '金魚◎花火': {
            styleType: 'performer',
            mood: 'melow',
            series: '金魚◎花火',
            kana: 'きんぎょはなび',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第1回個人戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              name: 'フェイバリット：フィーバー',
              detail: 'フィーバーセクションでドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'DEEPNESS': {
            styleType: 'performer',
            mood: 'melow',
            series: 'DEEPNESS',
            kana: 'でぃーぷねす',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.3',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'チェイン : さやか',
              detail: 'さやかのスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'sayaka']
            }
          },
          '雨と紫陽花に唄へば': {
            styleType: 'performer',
            mood: 'happy',
            series: '雨と紫陽花に唄へば',
            kana: 'あめとあじさいにうたへば',
            gacha: {
              addSeason: 'ライブグランプリ「103期6月度 サークル対抗戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              name: 'フェイバリット：フィーバー',
              detail: 'フィーバーセクションでドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'アメアガリストリート': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'アメアガリストリート',
            kana: 'あめあがりすとりーと',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.1',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'ドロー：メンタルリカバー',
              detail: 'ドローした時、メンタルを最大値の6%回復させる。',
              type: ['draw', 'mentalRecover']
            }
          },
          'チェリー♫ピクニック': {
            styleType: 'performer',
            mood: 'melow',
            series: 'チェリー♫ピクニック',
            kana: 'ちぇりーぴくにっく',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '春限定'
            },
            favorite: [],
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
              name: 'APレデュース：さやか',
              detail: 'さやかのスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'sayaka']
            }
          },
          '謳歌爛漫': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: '謳歌爛漫',
            kana: 'おうからんまん',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '春限定'
            },
            favorite: [],
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
              name: 'ドロー：ボルテージゲイン',
              detail: 'ドローした時、ボルテージ値を+12する。',
              type: ['draw', 'voltageGain']
            }
          },
          'Reflection in the mirror': {
            styleType: 'performer',
            mood: 'happy',
            series: 'Reflection in the mirror',
            kana: 'りふれくしょんいんざみらー',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
              name: 'メンタルリカバー',
              detail: 'ドローした時、メンタルを最大値の6%回復させる。',
              type: ['mentalRecover']
            }
          },
          '水彩世界': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '水彩世界',
            kana: 'すいさいせかい',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
          'オーロラスカイ': {
            styleType: 'performer',
            mood: 'happy',
            series: 'オーロラスカイ',
            kana: 'オーロラスカイ',
            gacha: {
              addSeason: '初期所持',
              period: '恒常'
            },
            favorite: [],
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
          '華紺青': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '華紺青',
            kana: 'はなこんじょう',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
              releaseLevel: 1
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
          'Prism Echo': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Prism Echo',
            kana: 'ぷりずむえこー',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: '恒常'
            },
            favorite: [],
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
              type: ['APreduce', 'voltageGain']
            }
          }
        },
        UR: {
          '真実の舞踏会': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '舞踏会',
            kana: 'しんじつのぶとうかい',
            gacha: {
              addSeason: '2023 PARTY! LIMITED COLLECTION',
              period: '宴限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1330,
              pure: 430,
              cool: 3630,
              mental: 193,
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
              name: 'APレデュース : ラブアトラクト',
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
              period: '恒常'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 930,
              pure: 1830,
              cool: 2630,
              mental: 193,
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
              type: ['overSection', 'voltageGain', 'APreduce' ,'sayaka']
            }
          },
          '青とシャボン': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '青とシャボン',
            kana: 'あおとしゃぼん',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION Vol.6',
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1030,
              pure: 1630,
              cool: 2730,
              mental: 193,
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
              type: ['APreduce', 'voltageGain', 'tsuzuri']
            }
          },
          'Link to the FUTURE': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Link to the FUTURE',
            kana: 'りんくとぅーざふゅーちゃー',
            gacha: {
              addSeason: 'ライブグランプリ「103期12月度 サークル対抗戦」報酬',
              period: '配布'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 3030,
              pure: 2330,
              cool: 1330,
              mental: 263,
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
              type: ['search', 'megumi', 'APgain']
            }
          },
          'Secret Christmas': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Secret Christmas',
            kana: 'しーくれっとくりすます',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.2',
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 930,
              cool: 2530,
              mental: 193,
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
              period: '秋限定'
            },
            favorite: [],
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
              period: '恒常'
            },
            favorite: [],
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
              name: 'チェイン : 瑠璃乃',
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
              period: '恒常'
            },
            favorite: [],
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
                [16.8, 18.48, 20.16, 21.84, 23.52, 25.2, 26.88, 28.56, 30.24, 33.6, 35.28, 36.96, 38.64, 42]
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
              name: 'APレデュース：ボルテージゲイン',
              detail: '手札にあるメイン効果にボルテージ増加効果を持つスキル1枚につき、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'voltageGain']
            }
          },
          'SPLASH!!!!': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'SPLASH!!!!',
            kana: 'すぷらっしゅ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.8',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'APレデュース：綴理',
              detail: '綴理のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'tsuzuri']
            }
          },
          'ドルフィン〰ビーチ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'ドルフィン〰ビーチ',
            kana: 'どるふぃんびーち',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第2回個人戦」報酬',
              period: '配布'
            },
            favorite: [],
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
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30],
                [12, 13, 14, 16, 17, 18, 19, 20, 22, 24, 25, 26, 28, 29]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 7,
              detail: [
                [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, 39.6, 41.4, '45?']
              ]
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
            series: 'Mirage Voyage',
            kana: 'みらーじゅぼやーじゅ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.6',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'インタープリテーション',
              detail: 'このスキルのムードによる効果増加量を上昇させる。',
              type: ['interPretation']
            }
          },
          '朝顔令嬢': {
            styleType: 'performer',
            mood: 'neutral',
            series: '朝顔令嬢',
            kana: 'あさがおれいじょう',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.5',
              period: '恒常'
            },
            favorite: [],
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
              name: 'ドロー : APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APreduce']
            }
          },
          '雨と紫陽花に唄へば': {
            styleType: 'performer',
            mood: 'happy',
            series: '雨と紫陽花に唄へば',
            kana: 'あめとあじさいにうたへば',
            gacha: {
              addSeason: 'ライブグランプリ「103期6月度 サークル対抗戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              name: 'フェイバリット：フィーバー',
              detail: 'フィーバーセクションでドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'ツキマカセ': {
            styleType: 'performer',
            mood: 'melow',
            series: 'ツキマカセ',
            kana: 'つきまかせ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
              name: 'インタープリテーション',
              detail: 'このスキルのムードによる効果増加量を上昇させる。',
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
              period: '配布'
            },
            favorite: [],
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
              name: 'チェイン：綴理',
              detail: '綴理のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'tsuzuri']
            }
          },
          '薫風の調べ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '薫風の調べ',
            kana: 'くんぷうのしらべ',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '恒常'
            },
            favorite: [],
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
              type: ['draw', 'APreduce']
            }
          },
          'スケイプゴート': {
            styleType: 'performer',
            mood: 'neutral',
            series: 'スケイプゴート',
            kana: 'すけいぷごーと',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '春限定'
            },
            favorite: [],
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
              name: 'フェイバリット : 4',
              detail: 'フィーバーセクションを除いた4セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'Dream Believers': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Dream Believers',
            kana: 'どりーむびりーばーず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
              name: 'アキューミュレイト',
              detail: '手札にある時、ボルテージLvが上がるたびに消費APが低下する。',
              type: ['accumulate']
            }
          }
        },
        SR: {
          '桃節銘記': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '桃節銘記',
            kana: 'とうせつめいき',
            gacha: {
              addSeason: '2023 GRADUATION LIMITED COLLECTION Vol.1',
              period: '卒業限定'
            },
            favorite: [],
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
              cool: 1830,
              mental: 153,
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
              /*AP: {
                max: 9,
                min: 1
              },*/
              detail: [
                [6.4, 7, 7.7, 8.3, 9, 9.6, 10.2, 10.8, 11.5, 12.8, 13.4, 14.1, 14.7, 16],
                [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13]
              ]
            },
            characteristic: {
              name: 'ハートコレクト：APレデュース & ボルテージゲイン',
              detail: '手札にある状態でハートを100個回収したとき、このスキルの消費APを-3し、ボルテージPt.を+12する。',
              type: ['heartCollect', 'APreduce', 'voltageGain']
            }
          },
          'Pleasure Feather': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Pleasure Feather',
            kana: 'ぷれじゃーふぇざー',
            gacha: {
              addSeason: 'ライブグランプリ「103期2月度 サークル対抗戦」報酬',
              period: '配布'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1530,
              pure: 2230,
              cool: 1730,
              mental: 183,
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
            kana: '',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.5',
              period: '恒常'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1330,
              pure: 1430,
              cool: 2530,
              mental: 203,
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
              period: '恒常'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1530,
              pure: 1630,
              cool: 2230,
              mental: 193,
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
              period: '秋限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1930,
              pure: 2430,
              cool: 930,
              mental: 203,
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
              type: ['APreduce', 'mental']
            }
          },
          'Trick & Cute': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Trick & Cute',
            kana: 'とりっくあんどきゅーと',
            gacha: {
              addSeason: 'ライブグランプリ「103期10月度 サークル対抗戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              period: '配布'
            },
            favorite: [],
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
              name: 'オーバーセクション：ハートキャプチャ',
              detail: '手札にある状態でセクションが変わるたび、ビートハート4個分のスキルハートを獲得する。',
              type: ['overSection', 'heartCaptcha']
            }
          },
          '夏めきペイン': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: '夏めきペイン',
            kana: 'なつめきぺいん',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.9',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'オーバーセクション：APレデュース',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-3',
              type: ['overSection', 'APreduce']
            }
          },
          'はじける☆ブルーソーダ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'はじける☆ソーダ',
            kana: 'はじけるぶるーそーだ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.7',
              period: '恒常'
            },
            favorite: [],
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
              name: 'オーバーセクション：ボルテージゲイン',
              detail: '手札にある状態でセクションが変わるたび、ボルテージPt.を+12する。',
              type: ['overSection', 'voltageGain']
            }
          },
          '金魚◎花火': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '金魚◎花火',
            kana: 'きんぎょはなび',
            gacha: {
              addSeason: 'ライブグランプリ「103期7月度 サークル対抗戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              name: 'ドロー：ラブアトラクト',
              detail: 'ドローした時、このセクション中、獲得するLOVEを7.5%する。',
              type: ['draw', 'loveAttract']
            }
          },
          'ペンギンアイス': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'ペンギンアイス',
            kana: 'ぺんぎんあいす',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.4',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'オーバーセクション：ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+10%する。',
              type: ['overSection', 'heartCaptcha']
            }
          },
          'DEEPNESS': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'DEEPNESS',
            kana: 'でぃーぷねす',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.3',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'チェイン : 梢',
              detail: '梢のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'kozue']
            }
          },
          'アメアガリストリート': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'アメアガリストリート',
            kana: 'あめあがりすとりーと',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.2',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'ドロー：ボルテージゲイン',
              detail: 'ドローした時、ボルテージPt.を+12する。',
              type: ['draw', 'voltageGain']
            }
          },
          'Tragic Drops': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Tragic Drops',
            kana: 'とらじっくどろっぷす',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.3',
              period: '春限定'
            },
            favorite: [],
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
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, 11, 12, 13, '14?']
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
              name: 'チェイン : さやか',
              detail: 'さやかのスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'sayaka']
            }
          },
          'チェリー♫ピクニック': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'チェリー♫ピクニック',
            kana: 'ちぇりーぴくにっく',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '春限定'
            },
            favorite: [],
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
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, 11, 12, 13, '14?']
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, '32?']
              ]
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
            series: '春色ニューデイズ',
            kana: 'はるいろにゅーでいず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '春限定'
            },
            favorite: [],
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
              name: 'フェイバリット : 2',
              detail: 'フィーバーセクションを除いた2セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'AWOKE': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'AWOKE',
            kana: 'あうぉーく',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, '30?']
              ]
            },
            skill: {
              ID: 'voltageGain',
              name: 'ボルテージゲイン',
              AP: 4,
              detail: [
                [13, 14, 16, 17, 18, 20, 21, 22, 23, 26, 27, 29, 30, '32?']
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
              period: '恒常'
            },
            favorite: [],
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
                [12, 13, 14, 16, 17, 18, 19, 20, 22, 24, 25, 26, 28, '30?']
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, '20?'],
              ]
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
            series: 'オーロラスカイ',
            kana: 'オーロラスカイ',
            gacha: {
              addSeason: '初期所持',
              period: '恒常'
            },
            favorite: [],
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
          },
          '華紺青': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '華紺青',
            kana: 'はなこんじょう',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
              releaseLevel: 1
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
          'Prism Echo': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: 'Prism Echo',
            kana: 'ぷりずむえこー',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: '恒常'
            },
            favorite: [],
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
              type: ['draw', 'loveAttract', 'APreduce', 'mental']
            }
          }
        },
        UR: {
          '悠久の舞踏会': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: '舞踏会',
            kana: 'ゆうきゅうのぶとうかい',
            gacha: {
              addSeason: '2023 PARTY! LIMITED COLLECTION',
              period: '宴限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1330,
              pure: 430,
              cool: 3630,
              mental: 193,
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
                  ]
                },
                {
                  ID: 'chowchowMoodMake',
                  name: 'チャウチャウムードメイク',
                  AP: 1,
                  detail: [
                    [18, 19.8, 21.6, 23.4, 25.2, 27, 28.8, 30.6, 32.4, 36, 37.8, 39.6, 41.4, 45]
                  ]
                },
                {
                  ID: 'chowchowCheerLeading',
                  name: 'チャウチャウチアリーディング',
                  AP: 1,
                  detail: [
                    [14.4, 15.84, 17.28, 18.72, 20.16, 21.6, 23.04, 24.48, 25.92, 28.8, 30.24, 31.68, 33.12, 36]
                  ]
                },
                {
                  ID: 'chowchowTrick',
                  name: 'チャウチャウトリック',
                  AP: 1,
                  detail: [
                    []
                  ]
                },
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
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1330,
              pure: 1830,
              cool: 2680,
              mental: 153,
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
              period: '恒常'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 880,
              pure: 1730,
              cool: 2580,
              mental: 213,
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
              type: ['overSection', 'voltageGain', 'APreduce' ,'rurino']
            }
          },
          'ミルク': {
            styleType: 'trickStar',
            mood: 'happy',
            series: 'ミルク',
            kana: 'みるく',
            gacha: {
              addSeason: 'サークル対抗戦 -Exhibition- (2024年1月度)',
              period: '配布'
            },
            favorite: [],
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
              cool: 1030,
              mental: 213,
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
              type: ['APreduce', 'mentalRecover', 'megumi']
            }
          },
          'ハクチューアラモード': {
            styleType: 'trickStar',
            mood: 'happy',
            series: 'ハクチューアラモード',
            kana: 'はくちゅーあらもーど',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.5',
              period: '恒常'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2630,
              pure: 1530,
              cool: 930,
              mental: 223,
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
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 3030,
              pure: 2530,
              cool: 1230,
              mental: 253,
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
              ID: 'extensions4_attract_section',
              name: 'エクステアトラクト',
              AP: 5,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            characteristic: {
              name: 'サーチ：梢 & APゲイン',
              detail: 'スキル使用後、梢のカードをドローする確率大幅アップ。さらにスキル使用時、3回までAPを5回復する。',
              type: ['search', 'kozue', 'APgain']
            }
          },
          'プチパティシエール': {
            styleType: 'trickStar',
            mood: 'happy',
            series: 'プチパティシエール',
            kana: 'ぷちぱてぃしえーる',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第6回個人戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              cool: 1330,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'refreshMind',
              name: 'リフレッシュマインド',
              AP: 6,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, '25?']
              ]
            },
            skill: {
              ID: 'refreshHeart',
              name: 'リフレッシュハート',
              AP: 4,
              detail: [
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7, '8?']
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
              period: '恒常'
            },
            favorite: [],
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
              type: ['overSection', 'APreduce', 'maturation']
            }
          },
          'Trick & Cute': {
            styleType: 'performer',
            mood: 'melow',
            series: 'Trick & Cute',
            kana: 'とりっくあんどきゅーと',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.5',
              period: '秋限定'
            },
            favorite: [],
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
              ID: 'extensions2_attract_section',
              name: 'エクステアトラクト',
              AP: 7,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
            },
            skill: {
              ID: 'regainAttract_section',
              name: 'リゲインアトラクト',
              AP: 10,
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
              period: '恒常'
            },
            favorite: [],
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
              type: ['APreduce', 'hiMental']
            }
          },
          'アイデンティティ': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'アイデンティティ',
            kana: 'あいでんてぃてぃ',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.3',
              period: '秋限定'
            },
            favorite: [],
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
              name: 'オーバーセクション：マチュレーション',
              detail: '手札にある状態でセクションが変わるたび、スキルの効果量が増加する。',
              type: ['overSection', 'maturation']
            }
          },
          'yours ever': {
            styleType: 'performer',
            mood: 'happy',
            series: 'yours ever',
            kana: 'ゆあーずえばー',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第3回個人戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              ]
            },
            skill: {
              ID: 'heartAttraction_section',
              name: 'ハートアトラクション',
              AP: 5,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '9?', 10],
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12]
              ]
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
            series: '夏めきペイン',
            kana: 'なつめきぺいん',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.9',
              period: '夏限定'
            },
            favorite: [],
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
              period: '恒常'
            },
            favorite: [],
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
              name: 'ドロー：ボルテージゲイン',
              detail: 'ドローした時、ボルテージPt.を+18する。',
              type: ['draw', 'voltageGain']
            }
          }
        },
        SR: {
          '迎春 -楽-': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '迎春',
            kana: 'げいしゅん',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第7回個人戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              cool: 2130,
              mental: 183,
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
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2130,
              pure: 930,
              cool: 2230,
              mental: 203,
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
              period: '冬限定'
            },
            favorite: [],
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
              cool: 1330,
              mental: 193,
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
              type: ['favorite', 'APreduce', 'chill']
            }
          },
          'ツバサ・ラ・リベルテ': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'ツバサ・ラ・リベルテ',
            kana: 'つばさらりべるて',
            gacha: {
              addSeason: 'ライブグランプリ「103期11月度 サークル対抗戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              cool: 1930,
              mental: 193,
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
              type: ['APreduce', 'mental']
            }
          },
          '喫茶ハスノソラ': {
            styleType: 'trickStar',
            mood: 'happy',
            series: '喫茶ハスノソラ',
            kana: 'きっさはすのそら',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.6',
              period: '秋限定'
            },
            favorite: [],
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
              period: '配布'
            },
            favorite: [],
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
              period: '恒常'
            },
            favorite: [],
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
                [2.6, 2.9, 3.1, 3.4, 3.6, 3.9, 4.2, 4.4, 4.7, 5.2, 5.5, 5.7, 6, 6.4]
              ]
            },
            skill: {
              ID: 'heartCaptcha',
              name: 'ハートキャプチャ',
              AP: 4,
              detail: [
                [5, 6, 6, 7, 7, 8, 8, 8, 9, 10, 10, 11, '12?', 13]
              ]
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
            series: '世界中を夢中に',
            kana: 'せかいじゅうをむちゅうに',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
              name: 'チェイン：慈',
              detail: '慈のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'megumi']
            }
          },
          'にゅーかまー！': {
            styleType: 'trickStar',
            mood: 'happy',
            series: 'にゅーかまー！',
            kana: 'にゅーかまー',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.6',
              period: '夏限定'
            },
            favorite: [],
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
              period: '恒常'
            },
            favorite: [],
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
              period: '恒常'
            },
            favorite: [],
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
          'オーロラスカイ': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: 'オーロラスカイ',
            kana: 'オーロラスカイ',
            gacha: {
              addSeason: '初期所持',
              period: '恒常'
            },
            favorite: [],
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
          '華紺青': {
            styleType: 'performer',
            mood: 'happy',
            series: '華紺青',
            kana: 'はなこんじょう',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
              releaseLevel: 1
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
          'Prism Echo': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Prism Echo',
            kana: 'ぷりずむえこー',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: '恒常'
            },
            favorite: [],
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
        UR: {
          '桃節銘記': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '桃節銘記',
            kana: 'とうせつめいき',
            gacha: {
              addSeason: '2023 GRADUATION LIMITED COLLECTION Vol.1',
              period: '卒業限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1430,
              pure: 2530,
              cool: 1830,
              mental: 153,
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
              type: ['heartCollect', 'APreduce', 'heartCaptcha']
            }
          },
          'ダイヤモンドハッピー': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'アイカツ!コラボ',
            kana: 'だいやもんどはっぴー',
            gacha: {
              addSeason: 'AIKATSU! LIMITED COLLECTION',
              period: 'アイカツ!コラボ限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 1,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2430,
              pure: 1630,
              cool: 1430,
              mental: 183,
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
              type: ['APreduce', 'kozue', 'tsuzuri', 'megumi']
            }
          },
          '蓮ノ空歌留多': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '蓮ノ空歌留多',
            kana: 'はすのそらかるた',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.4',
              period: '恒常'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1330,
              pure: 1730,
              cool: 2230,
              mental: 203,
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
              type: ['overSection', 'voltageGain', 'APreduce' ,'kozue']
            }
          },
          '冬のおくりもの': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '冬のおくりもの',
            kana: 'ふゆのおくりもの',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.1',
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1730,
              pure: 2130,
              cool: 1630,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions3_attract_section',
              name: 'エクステアトラクト',
              AP: 5,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            skill: {
              ID: 'chillAttract_stage',
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
              period: '秋限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1530,
              pure: 2530,
              cool: 1530,
              mental: 173,
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
              ID: 'protectFeel_loveAttract',
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
              type: ['APreduce', 'mental']
            }
          },
          '奇跡の舞踏会': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '舞踏会',
            kana: 'きせきのぶとうかい',
            gacha: {
              addSeason: '2023 PARTY! LIMITED COLLECTION',
              period: '宴限定'
            },
            favorite: [],
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
              name: 'オーバーセクション : リシャッフル',
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
              period: '秋限定'
            },
            favorite: [],
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
              ID: 'cheerfulSupport_over75_stage',
              name: 'チアフルサポート',
              AP: 6,
              detail: [
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30],
                [2.4, 2.6, 2.9, 3.1, 3.4, 3.6, 3.8, 4.1, 4.3, 4.8, 5, 5.3, 5.5, 6]
              ]
            },
            skill: {
              ID: 'cheerfulAttract_APGain_over75',
              name: 'チアフルアトラクト',
              AP: 6,
              detail: [
                [4.8, 5.3, 5.8, 6.2, 6.7, 7.2, 7.7, 8.2, 8.6, 9.6, 10.1, 10.6, 11.1, 12],
                [2.4, 2.6, 2.9, 3.1, 3.4, 3.6, 3.8, 4.1, 4.3, 4.8, 5, 5.3, 5.5, 6]
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
              period: '恒常'
            },
            favorite: [],
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
              name: 'オーバーセクション：ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+15%する。',
              type: ['overSection', 'loveAttract']
            }
          },
          'DEEPNESS': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'DEEPNESS',
            kana: 'でぃーぷねす',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.3',
              period: '夏限定'
            },
            favorite: [],
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
                [23, 25, 28, 30, 32, 35, 37, 39, 41, 46, 48, 51, 53, 58],
                [2.4, 2.6, 2.9, 3.1, 3.4, 3.6, 3.8, 4.1, 4.3, 4.8, 5, 5.3, 5.5, 6]
              ]
            },
            skill: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 1,
              detail: [
                [1.3, 1.4, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.6, 2.7, 2.9, 3, 3.2]
              ]
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
            series: '金魚◎花火',
            kana: 'きんぎょはなび',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第1回個人戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              name: 'フェイバリット：3',
              detail: 'フィーバーセクションを除いた3セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'フォーチュンムービー': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'フォーチュンムービー',
            kana: 'ふぉーちゅんむーびー',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.2',
              period: '恒常'
            },
            favorite: [],
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
              name: 'オーバーセクション：メンタルリカバー',
              detail: '手札にある状態でセクションが変わるたび、メンタルを最大値の12%回復させる。',
              type: ['overSection', 'mentalRecover']
            }
          },
          '雨と紫陽花に唄へば': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '雨と紫陽花に唄へば',
            kana: 'あめとあじさいにうたへば',
            gacha: {
              addSeason: 'ログインボーナス',
              period: '配布'
            },
            favorite: [],
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
              name: 'フェイバリット：スタート',
              detail: '初期手札に加わる確率が増加する。',
              type: ['favorite']
            }
          },
          'Holiday∞Holiday': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Holiday∞Holiday',
            kana: 'ほりでーほりでー',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.3',
              period: '春限定'
            },
            favorite: [],
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
              name: 'チェイン：梢',
              detail: '梢のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'kozue']
            }
          },
          'チェリー♫ピクニック': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'チェリー♫ピクニック',
            kana: 'ちぇりーぴくにっく',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '春限定'
            },
            favorite: [],
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
              name: 'フェイバリット：1',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'Reflection in the mirror': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Reflection in the mirror',
            kana: 'りふれくしょんいんざみらー',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '恒常'
            },
            favorite: [],
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
              name: 'ドロー：メンタルリカバー',
              detail: 'ドローした際、メンタルを最大値の6%回復させる。',
              type: ['draw', 'mentalRecover']
            }
          },
          '春色ニューデイズ': {
            styleType: 'performer',
            mood: 'happy',
            series: '春色ニューデイズ',
            kana: 'はるいろにゅーでいず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '春限定'
            },
            favorite: [],
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
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-1する。',
              type: ['draw', 'APreduce']
            }
          },
          'Dream Believers': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Dream Believers',
            kana: 'どりーむびりーばーず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
              name: 'フェイバリット：スタート',
              detail: '初期手札に加わる確率が増加する。',
              type: ['favorite']
            }
          }
        },
        SR: {
          'おしえて♡ティーチャー': {
            styleType: 'performer',
            mood: 'melow',
            series: 'おしえて♡ティーチャー',
            kana: 'おしえててぃーちゃー',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第9回個人戦」報酬',
              period: '配布'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1430,
              pure: 1530,
              cool: 2230,
              mental: 213,
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
              /*AP: {
                max: 9,
                min: 1
              },*/
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
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1430,
              pure: 2330,
              cool: 1830,
              mental: 173,
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
              period: '配布'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1130,
              pure: 1930,
              cool: 2130,
              mental: 213,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyAttract_stage_section_over8',
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
              period: '冬限定'
            },
            favorite: [],
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
              cool: 1330,
              mental: 203,
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
              type: ['APreduce', 'heartCaptcha', 'kaho']
            }
          },
          'Link to the FUTURE': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Link to the FUTURE',
            kana: 'りんくとぅーざふゅーちゃー',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION Vol.3',
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2730,
              pure: 2130,
              cool: 1630,
              mental: 203,
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
              type: ['search', 'kaho', 'APgain']
            }
          },
          '喫茶ハスノソラ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '喫茶ハスノソラ',
            kana: 'きっさはすのそら',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第5回個人戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              period: '秋限定'
            },
            favorite: [],
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
              period: '秋限定'
            },
            favorite: [],
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
              name: 'オーバーセクション：APレデュース',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-3。',
              type: ['overSection', 'APreduce']
            }
          },
          '夏めきペイン': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: '夏めきペイン',
            kana: 'なつめきぺいん',
            gacha: {
              addSeason: 'ライブグランプリ「103期8月度 サークル対抗戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              name: 'オーバーセクション：ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+15%する。',
              type: ['overSection', 'loveAttract']
            }
          },
          'SPLASH!!!!': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: 'SPLASH!!!!',
            kana: 'すぷらっしゅ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.8',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'APレデュース : 花帆',
              detail: '花帆のスキルを使用するたび、手札のこのスキルの消費AP-2 。',
              type: ['APreduce', 'kaho']
            }
          },
          '眩耀夜行': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '眩耀夜行',
            kana: 'げんようやこう',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.6',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'インタープリテーション',
              detail: 'このスキルのムードによる効果上昇量を上昇させる。',
              type: ['interPretation']
            }
          },
          '朝顔令嬢': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: '朝顔令嬢',
            kana: 'あさがおれいじょう',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.5',
              period: '恒常'
            },
            favorite: [],
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
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APreduce']
            }
          },
          'ペンギンアイス': {
            styleType: 'performer',
            mood: 'happy',
            series: 'ペンギンアイス',
            kana: 'ぺんぎんあいす',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.4',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'オーバーセクション：ボルテージゲイン',
              detail: '手札にある状態でセクションが変わるたび、ボルテージPt.を+12する。',
              type: ['overSection', 'voltageGain']
            }
          },
          'アメアガリストリート': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'アメアガリストリート',
            kana: 'あめあがりすとりーと',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.1',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'ドロー：ラブアトラクト',
              detail: 'ドローした時、このセクション中、獲得するLOVEを2.4%する。',
              type: ['draw', 'loveAttract']
            }
          },
          'Rose Garden': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: 'Rose Garden',
            kana: 'ろーずがーでん',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '春限定'
            },
            favorite: [],
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
              name: 'チェイン：花帆',
              detail: '花帆のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'kaho']
            }
          },
          '薫風の調べ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '薫風の調べ',
            kana: 'くんぷうのしらべ',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '恒常'
            },
            favorite: [],
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
              type: ['draw', 'APreduce']
            }
          },
          '謳歌爛漫': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '謳歌爛漫',
            kana: 'おうからんまん',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '春限定'
            },
            favorite: [],
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
              name: 'アクセラレーション',
              detail: 'ボルテージLv.が8以上の間、消費AP-2',
              type: ['acceleration']
            }
          },
          '水彩世界': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '水彩世界',
            kana: 'すいさいせかい',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.3',
              period: '恒常'
            },
            favorite: [],
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
              period: '恒常'
            },
            favorite: [],
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
              type: ['draw', 'APreduce']
            }
          }
        },
        R: {
          'オーロラスカイ': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'オーロラスカイ',
            kana: 'オーロラスカイ',
            gacha: {
              addSeason: '初期所持',
              period: '恒常'
            },
            favorite: [],
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
          },
          '華紺青': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '華紺青',
            kana: 'はなこんじょう',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
              releaseLevel: 1
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
          'Prism Echo': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Prism Echo',
            kana: 'ぷりずむえこー',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: '恒常'
            },
            favorite: [],
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
          '桃節銘記': {
            styleType: 'performer',
            mood: 'happy',
            series: '桃節銘記',
            kana: 'とうせつめいき',
            gacha: {
              addSeason: '2023 GRADUATION LIMITED COLLECTION Vol.1',
              period: '卒業限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1530,
              pure: 2430,
              cool: 1730,
              mental: 163,
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
              /*AP: {
                max: 9,
                min: 1
              },*/
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15],
                [7.2, 7.9, 8.6, 9.4, 10.1, 10.8, 11.5, 12.2, 13, 14.4, 15.1, 15.8, 16.6, 18]
              ]
            },
            characteristic: {
              name: 'ハートコレクト：APレデュース & ラブアトラクト',
              detail: '手札にある状態でハートを200個回収したとき、このスキルの消費APを-6し、このセクション中、獲得するLOVEを+15%する。',
              type: ['heartCollect', 'APreduce', 'loveAttract_section']
            }
          },
          'Colorfulness': {
            styleType: 'trickStar',
            mood: 'melow',
            series: 'Colorfulness',
            kana: 'からふるねす',
            gacha: {
              addSeason: 'ライブグランプリ「103期2月度 サークル対抗戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              cool: 2330,
              mental: 163,
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
              period: '恒常'
            },
            favorite: [],
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
              type: ['overSection', 'voltageGain', 'APreduce' ,'kozue']
            }
          },
          'ツバサ・ラ・リベルテ': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: 'ツバサ・ラ・リベルテ',
            kana: 'つばさらりべるて',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.8',
              period: '秋限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 530,
              pure: 2630,
              cool: 2330,
              mental: 183,
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
              type: ['APreduce', 'mental']
            }
          },
          'Trick & Cute': {
            styleType: 'performer',
            mood: 'melow',
            series: 'Trick & Cute',
            kana: 'とりっくあんどきゅーと',
            gacha: {
              addSeason: 'ライブグランプリ「103期10月度 サークル対抗戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              period: '宴限定'
            },
            favorite: [],
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
              type: ['APreduce', 'voltage']
            }
          },
          'Take It Over': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Take It Over',
            kana: 'ていくいっとおーばー',
            gacha: {
              addSeason: 'ライブグランプリ「103期9月度 サークル対抗戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              name: 'オーバーセクション：ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このセクション中、獲得するLOVEを+15%する。',
              type: ['overSection', 'loveAttract']
            }
          },
          '秋色カントリーロード': {
            styleType: 'performer',
            mood: 'neutral',
            series: '秋色カントリーロード',
            kana: 'あきいろかんとりーろーど',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.1',
              period: '秋限定'
            },
            favorite: [],
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
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15],
                [7.5, 8.3, 9, 9.8, 10.5, 11.3, 12, 12.8, 13.5, 15, 15.8, 16.5, 17.3, 18.8]
              ]
            },
            skill: {
              ID: 'cheerfulHeart_heartCaptcha',
              name: 'チアフルハート',
              AP: 4,
              detail: [
                [6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 13, 13, 14, 15],
                [3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 7, '7?', 8]
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
              period: '恒常'
            },
            favorite: [],
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
              name: 'オーバーセクション：ハートキャプチャ',
              detail: '手札にある状態でセクションが変わるたび、ビートハート6回分のスキルハートを獲得する。',
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
              period: '配布'
            },
            favorite: [],
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
              name: 'ドロー：ボルテージゲイン',
              detail: 'ドローした時、ボルテージPt.を+18する。',
              type: ['draw', 'voltageGain']
            }
          },
          '朝顔令嬢': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '朝顔令嬢',
            kana: 'あさがおれいじょう',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.5',
              period: '恒常'
            },
            favorite: [],
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
              name: 'ドロー：APレデュース',
              detail: 'ドローしたセクションの間、消費APを-3する。',
              type: ['draw', 'APreduce']
            }
          },
          'ペンギンアイス': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'ペンギンアイス',
            kana: 'ぺんぎんあいす',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.4',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'オーバーセクション：ラブアトラクト',
              detail: '手札にある状態でセクションが変わるたび、このステージ中、獲得するLOVEを+4.8%する。',
              type: ['overSection', 'loveAttract']
            }
          },
          'DEEPNESS': {
            styleType: 'performer',
            mood: 'melow',
            series: 'DEEPNESS',
            kana: 'でぃーぷねす',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.3',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'APレデュース：梢',
              detail: '梢のスキルを使用するたび、手札のこのスキルの消費AP-3。',
              type: ['APreduce', 'kozue']
            }
          },
          'ツキマカセ': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'ツキマカセ',
            kana: 'つきまかせ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, 30],
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
              ]
            },
            skill: {
              ID: 'loveAttract_section',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24]
              ]
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
            series: 'チェリー♫ピクニック',
            kana: 'ちぇりーぴくにっく',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '春限定'
            },
            favorite: [],
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
              name: 'フェイバリット：1',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'スケイプゴート': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'スケイプゴート',
            kana: 'すけいぷごーと',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '春限定'
            },
            favorite: [],
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
              name: 'フェイバリット：1',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'Dream Believers': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Dream Believers',
            kana: 'どりーむびりーばーず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
          '節分 -妖-': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '節分',
            kana: 'せつぶん',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.7',
              period: '恒常'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1230,
              pure: 1830,
              cool: 2230,
              mental: 203,
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
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1230,
              pure: 1730,
              cool: 2330,
              mental: 203,
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
              type: ['APreduce', 'voltageGain', 'sayaka']
            }
          },
          'Eisritter': {
            styleType: 'performer',
            mood: 'melow',
            series: 'Eisprinzessin / Eisritter',
            kana: '',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.5',
              period: '恒常'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1430,
              pure: 1530,
              cool: 2530,
              mental: 183,
              BP: 100
            },
            specialAppeal: {
              ID: 'chillAttract_stage',
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
              period: '配布'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2630,
              pure: 2330,
              cool: 1530,
              mental: 203,
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
              type: ['search', 'sayaka', 'APgain']
            }
          },
          'Secret Christmas': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Secret Christmas',
            kana: 'しーくれっとくりすます',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.2',
              period: '冬限定'
            },
            favorite: [],
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
              cool: 2330,
              mental: 183,
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
              period: '恒常'
            },
            favorite: [],
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
              type: ['overSection', 'APreduce', 'maturation']
            }
          },
          '喫茶ハスノソラ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '喫茶ハスノソラ',
            kana: 'きっさはすのそら',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.6',
              period: '秋限定'
            },
            favorite: [],
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
              period: '夏限定'
            },
            favorite: [],
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
              name: 'オーバーセクション：APレデュース',
              detail: '手札にある状態でセクションが変わるたび、手札のこのスキルの消費AP-3',
              type: ['overSection', 'APreduce']
            }
          },
          'SPLASH!!!!': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'SPLASH!!!!',
            kana: 'すぷらっしゅ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.8',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'APレデュース：さやか',
              detail: 'さやかのスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'sayaka']
            }
          },
          'Mirage Voyage': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'Mirage Voyage',
            kana: 'みらーじゅぼやーじゅ',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.6',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'インタープリテーション',
              detail: 'このスキルのムードによる効果増加量を上昇させる。',
              type: ['interPretation']
            }
          },
          'アメアガリストリート': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'アメアガリストリート',
            kana: 'あめあがりすとりーと',
            gacha: {
              addSeason: '2023 SUMMER LIMITED COLLECTION vol.2',
              period: '夏限定'
            },
            favorite: [],
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
              name: 'ドロー：ラブアトラクト',
              detail: 'ドローした時、このステージ中、獲得するLOVEを+2.4%する。',
              type: ['draw', 'loveAttract']
            }
          },
          '雨と紫陽花に唄へば': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: '雨と紫陽花に唄へば',
            kana: 'あめとあじさいにうたへば',
            gacha: {
              addSeason: 'ログインボーナス',
              period: '配布'
            },
            favorite: [],
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
              name: 'フェイバリット：スタート',
              detail: '初期手札に加わる確率が増加する。',
              type: ['favorite']
            }
          },
          'Tragic Drops': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Tragic Drops',
            kana: 'とらじっくどろっぷす',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.3',
              period: '春限定'
            },
            favorite: [],
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
              name: 'チェイン：綴理',
              detail: '綴理のスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'tsuzuri']
            }
          },
          'Rose Garden': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'Rose Garden',
            kana: 'ろーずがーでん',
            gacha: {
              addSeason: 'ログインボーナス',
              period: '配布'
            },
            favorite: [],
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
              name: 'チェイン：さやか',
              detail: 'さやかのスキルを使用した後、ドローされる確率が増加する。',
              type: ['chain', 'sayaka']
            }
          },
          '薫風の調べ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '薫風の調べ',
            kana: 'くんぷうのしらべ',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '恒常'
            },
            favorite: [],
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
              type: ['draw', 'APreduce']
            }
          },
          'Sparkly Spot': {
            styleType: 'performer',
            mood: 'melow',
            series: 'Sparkly Spot',
            kana: 'すぱーくりーすぽっと',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '恒常'
            },
            favorite: [],
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
              name: 'ドロー：ボルテージゲイン',
              detail: 'ドローした時、ボルテージ値を+12する。',
              type: ['draw', 'voltageGain']
            }
          },
          '春色ニューデイズ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '春色ニューデイズ',
            kana: 'はるいろにゅーでいず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.2',
              period: '春限定'
            },
            favorite: [],
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
              name: 'フェイバリット：1',
              detail: 'フィーバーセクションを除いた1セクション目でドローされる確率が増加する。',
              type: ['favorite']
            }
          },
          'AWOKE': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'AWOKE',
            kana: 'あうぉーく',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.3',
              period: '恒常'
            },
            favorite: [],
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
              period: '恒常'
            },
            favorite: [],
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
              type: ['draw', 'APreduce']
            }
          }
        },
        R: {
          'オーロラスカイ': {
            styleType: 'moodMaker',
            mood: 'melow',
            series: 'オーロラスカイ',
            kana: 'オーロラスカイ',
            gacha: {
              addSeason: '初期所持',
              period: '恒常'
            },
            favorite: [],
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
          '華紺青': {
            styleType: 'performer',
            mood: 'melow',
            series: '華紺青',
            kana: 'はなこんじょう',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
              releaseLevel: 1
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
          'Prism Echo': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: 'Prism Echo',
            kana: 'ぷりずむえこー',
            gacha: {
              addSeason: '「ドリームスタイルクエスト」クリア報酬',
              period: '恒常'
            },
            favorite: [],
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
                [3.2, '3.5?', '3.8?', '4.2?', '4.5?', 4.8, '5.1?', '5.4?', '5.8?', 6.4, '6.7?', '7?', '7.4?', 8],
                [1.3, '1.4?', '1.6?', '1.7?', '1.8?', 2, '2.1?', '2.2?', '2.3?', 2.6, '2.7?', '2.9?', '3?', 3.2]
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
              name: 'ドロー：プロテクト & APゲイン',
              detail: 'ドローした時、メンタルの最大値の4%分のメンタルダメージを無効にする。さらにAPを2回復する。',
              type: ['draw', 'protect', 'APgain']
            }
          }
        },
        UR: {
          'おしえて♡ティーチャー': {
            styleType: 'cheerLeader',
            mood: 'melow',
            series: 'おしえて♡ティーチャー',
            kana: 'おしえててぃーちゃー',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第9回個人戦」報酬',
              period: '配布'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1130,
              pure: 1430,
              cool: 2530,
              mental: 223,
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
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2930,
              pure: 1830,
              cool: 930,
              mental: 163,
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
              type: ['APreduce' ,'loveAttract']
            }
          },
          'ハクチューアラモード': {
            styleType: 'performer',
            mood: 'happy',
            series: 'ハクチューアラモード',
            kana: 'はくちゅーあらもーど',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.5',
              period: '恒常'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2430,
              pure: 1330,
              cool: 1130,
              mental: 243,
              BP: 100
            },
            specialAppeal: {
              ID: 'extensions1_attract_section',
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
              period: '配布'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1480,
              pure: 1780,
              cool: 2130,
              mental: 193,
              BP: 100
            },
            specialAppeal: {
              ID: 'groovyHeart_over8_mentalRecover_heartCaptcha',
              name: 'グルーヴィハート',
              AP: 4,
              detail: [
                [7.2, 7.92, 8.64, 9.36, 10.08, 10.8, 11.52, 12.24, 12.96, 14.4, 15.12, 15.84, 16.56, '18?'],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, '6?']
              ]
            },
            skill: {
              ID: 'voltageHeart',
              name: 'ボルテージハート',
              AP: 5,
              detail: [
                [16, 18, 19, 21, 22, 24, 26, 27, 29, 32, 34, 35, 37, 40],
                [2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, '6?']
              ]
            },
            characteristic: {
              name: 'オーバーセクション：ボルテージゲイン & APレデュース：慈',
              detail: '手札にある状態でセクションが変わるたび、ボルテージPt.を+20する。さらに慈のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['overSection', 'voltageGain', 'APreduce' ,'megumi']
            }
          },
          'Secret Christmas': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'Secret Christmas',
            kana: 'しーくれっとくりすます',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.2',
              period: '冬限定'
            },
            favorite: [],
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
              cool: 2630,
              mental: 183,
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
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2530,
              pure: 1830,
              cool: 730,
              mental: 223,
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
              period: '配布'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1030,
              pure: 2630,
              cool: 2030,
              mental: 163,
              BP: 100
            },
            specialAppeal: {
              ID: 'loveAttract_stage',
              name: 'ラブアトラクト',
              AP: 4,
              detail: [
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, '8?']
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
              type: ['APreduce', 'mental']
            }
          },
          '喫茶ハスノソラ': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: '喫茶ハスノソラ',
            kana: 'きっさはすのそら',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.6',
              period: '秋限定'
            },
            favorite: [],
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
              period: '宴限定'
            },
            favorite: [],
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
              period: '秋限定'
            },
            favorite: [],
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
                [3.2, 3.5, 3.8, 4.2, 4.5, 4.8, 5.1, 5.4, 5.8, 6.4, 6.7, 7, 7.4, 8]
              ]
            },
            skill: {
              ID: 'cheerfulHeart_APGain',
              name: 'チアフルハート',
              AP: 4,
              detail: [
                [4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, '9?', 10]
              ]
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
            series: 'Au Bord du Lac',
            kana: 'あうぼーどどぅらっく',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第4回個人戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              name: 'フェイバリット : 1',
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
              period: '夏限定'
            },
            favorite: [],
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
                [7, 8, 8, 9, 10, 11, 11, 12, 13, 14, 15, 16, '17?', 18]
              ]
            },
            skill: {
              ID: 'protectFeel_loveAttract',
              name: 'プロテクトフィール',
              AP: 10,
              detail: [
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20],
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
              ]
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
            series: 'Dream Believers',
            kana: 'どりーむびりーばーず',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
              name: 'APレデュース：ローメンタル',
              detail: 'メンタルが30％以下の時にドローすると、消費APを-2する。',
              type: ['APreduce', 'lowMental']
            }
          }
        },
        SR: {
          '節分 -艶-': {
            styleType: 'trickStar',
            mood: 'neutral',
            series: '節分',
            kana: 'せつぶん',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION vol.7',
              period: '恒常'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 1280,
              pure: 1730,
              cool: 2180,
              mental: 213,
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
              period: '配布'
            },
            favorite: [],
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
              cool: 1130,
              mental: 223,
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
              type: ['APreduce', 'mentalRecover', 'rurino']
            }
          },
          'Link to the FUTURE': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'Link to the FUTURE',
            kana: 'りんくとぅーざふゅーちゃー',
            gacha: {
              addSeason: '2023 WINTER LIMITED COLLECTION Vol.3',
              period: '冬限定'
            },
            favorite: [],
            fluctuationStatus: {
              cardLevel: 0,
              trainingLevel: 0,
              SALevel: 1,
              SLevel: 1,
              releaseLevel: 1
            },
            uniqueStatus: {
              smile: 2680,
              pure: 1930,
              cool: 1780,
              mental: 213,
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
              type: ['search', 'rurino', 'APgain']
            }
          },
          'プチパティシエール': {
            styleType: 'cheerLeader',
            mood: 'happy',
            series: 'プチパティシエール',
            kana: 'ぷちぱてぃしえーる',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第6回個人戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              period: '恒常'
            },
            favorite: [],
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
              type: ['overSection', 'APreduce', 'maturation']
            }
          },
          'Trick & Cute': {
            styleType: 'performer',
            mood: 'melow',
            series: 'Trick & Cute',
            kana: 'とりっくあんどきゅーと',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.5',
              period: '秋限定'
            },
            favorite: [],
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
              period: '恒常'
            },
            favorite: [],
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
                [8, 8.8, 9.6, 10.4, 11.2, 12, 12.8, 13.6, 14.4, 16, 16.8, 17.6, 18.4, 20]
              ]
            },
            skill: {
              ID: 'extensions2_attract_section',
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
              period: '恒常'
            },
            favorite: [],
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
                [4, 4.4, 4.8, 5.2, 5.6, 6, 6.4, 6.8, 7.2, 8, 8.4, 8.8, 9.2, 10]
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
              name: 'APレデュース：瑠璃乃',
              detail: '瑠璃乃のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'rurino']
            }
          },
          'yours ever': {
            styleType: 'moodMaker',
            mood: 'happy',
            series: 'yours ever',
            kana: 'ゆあーずえばー',
            gacha: {
              addSeason: 'ライブグランプリ「103期 第3回個人戦」報酬',
              period: '配布'
            },
            favorite: [],
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
              name: 'APレデュース：瑠璃乃',
              detail: '瑠璃乃のスキルを使用するたび、手札のこのスキルの消費AP-2。',
              type: ['APreduce', 'rurino']
            }
          },
          '世界中を夢中に': {
            styleType: 'moodMaker',
            mood: 'neutral',
            series: '世界中を夢中に',
            kana: 'せかいじゅうをむちゅうに',
            gacha: {
              addSeason: '2023 AUTUMN LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
              name: 'チェイン：瑠璃乃',
              detail: '瑠璃乃のスキルを使用した後、ドローさせる確率が増加する。',
              type: ['chain', 'rurino']
            }
          },
          '@いっつぁどりーみんわーるど！': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: '@いっつぁどりーみんわーるど！',
            kana: 'いっつぁどりーみんわーるど',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.',
              period: '恒常'
            },
            favorite: [],
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
                [12, 13.2, 14.4, 15.6, 16.8, 18, 19.2, 20.4, 21.6, 24, 25.2, 26.4, 27.6, '30?']
              ]
            },
            skill: {
              ID: 'mentalProtect',
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
              period: '恒常'
            },
            favorite: [],
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
          'オーロラスカイ': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: 'オーロラスカイ',
            kana: 'オーロラスカイ',
            gacha: {
              addSeason: '初期所持',
              period: '恒常'
            },
            favorite: [],
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
          },
          '華紺青': {
            styleType: 'cheerLeader',
            mood: 'neutral',
            series: '華紺青',
            kana: 'はなこんじょう',
            gacha: {
              addSeason: '2023 SPRING LIMITED COLLECTION vol.1',
              period: '恒常'
            },
            favorite: [],
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
          }
        }
      }
    }
  }),
  getters: {},
  actions: {}
});