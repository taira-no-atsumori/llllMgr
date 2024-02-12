import { defineStore } from 'pinia';

export const useMusicStore = defineStore('musicList', {
  state: () => ({
    musicList: {
      'Dream Believers(4人Ver.)': {
        musicData: {
          kana: 'どりーむびりーばーず',
          singer: '日野下 花帆、村野 さやか、乙宗 梢、夕霧 綴理',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ デビューミニアルバム',
          BPM: {
            original: 162,
            inGame: 162
          },
          time: 139.26,
          cover: false
        },
        attribute: 'smile',
        BHcount: 92,
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri']
      },
      '永遠のEuphoria(4人Ver.)': {
        musicData: {
          kana: 'えいえんのゆーふぉりあ',
          singer: '日野下 花帆、村野 さやか、乙宗 梢、夕霧 綴理',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ デビューミニアルバム',
          BPM: {
            original: 162,
            inGame: 162
          },
          time: 109.63,
          cover: false
        },
        attribute: 'smile',
        BHcount: 72,
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri']
      },
      'On your mark': {
        musicData: {
          kana: 'おんゆあまーく',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ デビューミニアルバム',
          BPM: {
            original: 154,
            inGame: 154
          },
          time: 96.62,
          cover: false
        },
        attribute: 'cool',
        BHcount: 60,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      'DEEPNESS': {
        musicData: {
          kana: 'でぃーぷねす',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 8,
            date: 9
          },
          numbering: 'スリーズブーケ/DOLLCHESTRA 2ndシングル',
          BPM: {
            original: 136,
            inGame: 136
          },
          time: 104.12,
          cover: false
        },
        attribute: 'cool',
        BHcount: 57,
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri']
      },
      '永遠のEuphoria': {
        musicData: {
          kana: 'えいえんのゆーふぉりあ',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ デビューミニアルバム',
          BPM: {
            original: 162,
            inGame: 162
          },
          time: 109.63,
          cover: false
        },
        attribute: 'smile',
        BHcount: 68,
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      '夏めきペイン': {
        musicData: {
          kana: 'なつめきぺいん',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: {
            original: 188,
            inGame: 188
          },
          time: 91.92,
          cover: false
        },
        attribute: 'pure',
        BHcount: 66,
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      'Dream Believers': {
        musicData: {
          kana: 'どりーむびりーばーず',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ デビューミニアルバム',
          BPM: {
            original: 162,
            inGame: 162
          },
          time: 139.26,
          cover: false
        },
        attribute: 'smile',
        BHcount: 88,
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      'Legato': {
        musicData: {
          kana: 'れがーと',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: {
            original: 160,
            inGame: 160
          },
          time: 148.51,
          cover: false
        },
        attribute: 'smile',
        BHcount: 93,
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      'Trick & Cute': {
        musicData: {
          kana: 'とりっくあんどきゅーと',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2024,
            month: 1,
            date: 17
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stシングル',
          BPM: {
            original: 244,
            inGame: 122
          },
          time: 86.56,
          cover: false
        },
        attribute: 'cool',
        BHcount: 42,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      'Yup! Yup! Yup!': {
        musicData: {
          kana: 'やっぷやっぷやっぷ',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: {
            original: 170,
            inGame: 170
          },
          time: 148.23,
          cover: false
        },
        attribute: 'smile',
        BHcount: 103,
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      '明日の空の僕たちへ': {
        musicData: {
          kana: 'あすのそらのぼくたちへ',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: {
            original: 164,
            inGame: 164
          },
          time: 122.93,
          cover: false
        },
        attribute: 'cool',
        BHcount: 82,
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      'ツバサ・ラ・リベルテ': {
        musicData: {
          kana: 'つばさらりべるて',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2024,
            month: 1,
            date: 17
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stシングル',
          BPM: {
            original: 177,
            inGame: 177
          },
          time: 109.83,
          cover: false
        },
        attribute: 'pure',
        BHcount: 79,
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      'Link to the FUTURE': {
        musicData: {
          kana: 'りんくとぅーざふゅーちゃー',
          singer: 'スリーズブーケ & DOLLCHESTRA & みらくらぱーく！',
          releaseDate: {
            year: 2024,
            month: 1,
            date: 17
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stシングル',
          BPM: {
            original: 183,
            inGame: 183
          },
          time: 140.33,
          cover: false
        },
        attribute: 'smile',
        BHcount: 105,
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      '水彩世界': {
        musicData: {
          kana: 'すいさいせかい',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: 'デビューミニアルバム',
          BPM: {
            original: '80～160',
            inGame: 160
          },
          time: 97.50,
          cover: false
        },
        attribute: 'cool',
        BHcount: 63,
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue']
      },
      'Reflection in the mirror': {
        musicData: {
          kana: 'りふれくしょんいんざみらー',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 4,
            date: 26
          },
          numbering: 'スリーズブーケ 1stシングル',
          BPM: {
            original: 175,
            inGame: 175
          },
          time: 98.74,
          cover: false
        },
        attribute: 'smile',
        BHcount: 70,
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue']
      },
      'フォーチュンムービー': {
        musicData: {
          kana: 'ふぉーちゅんむーびー',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 4,
            date: 26
          },
          numbering: 'スリーズブーケ 1stシングル',
          BPM: {
            original: 220,
            inGame: 220
          },
          time: 78.55,
          cover: false
        },
        attribute: 'smile',
        BHcount: 70,
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'kozue']
      },
      'Mix shake!!': {
        musicData: {
          kana: 'みっくすしぇいく',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 4,
            date: 26
          },
          numbering: 'スリーズブーケ 1stシングル',
          BPM: {
            original: 174,
            inGame: 174
          },
          time: 117.58,
          cover: false
        },
        attribute: 'pure',
        BHcount: 83,
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'kozue']
      },
      '謳歌爛漫': {
        musicData: {
          kana: 'おうからんまん',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 6,
            date: 14
          },
          numbering: 'スリーズブーケ&DOLLCHESTRA ユニットスプリットシングル',
          BPM: {
            original: 104,
            inGame: 104
          },
          time: 113.08,
          cover: false
        },
        attribute: 'smile',
        BHcount: 47,
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'kozue']
      },
      'Holiday∞Holiday': {
        musicData: {
          kana: 'ほりでーほりでー',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 6,
            date: 14
          },
          numbering: 'スリーズブーケ&DOLLCHESTRA ユニットスプリットシングル',
          BPM: {
            original: 135,
            inGame: 135
          },
          time: 94.22,
          cover: false
        },
        attribute: 'pure',
        BHcount: 51,
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'kozue']
      },
      '眩耀夜行': {
        musicData: {
          kana: 'げんようやこう',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 8,
            date: 9
          },
          numbering: 'スリーズブーケ 2ndシングル',
          BPM: {
            original: 158,
            inGame: 158
          },
          time: 97.21,
          cover: false
        },
        attribute: 'smile',
        BHcount: 62,
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'kozue']
      },
      'Kawaii no susume': {
        musicData: {
          kana: 'かわいいのすすめ',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 8,
            date: 9
          },
          numbering: 'スリーズブーケ 2ndシングル',
          BPM: {
            original: 132,
            inGame: 132
          },
          time: 100,
          cover: false
        },
        attribute: 'smile',
        BHcount: 53,
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'kozue']
      },
      '残陽': {
        musicData: {
          kana: 'ざんよう',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: {
            original: 118,
            inGame: 118
          },
          time: 91.53,
          cover: false
        },
        attribute: 'cool',
        BHcount: 39,
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'kozue']
      },
      '素顔のピクセル': {
        musicData: {
          kana: 'すがおのぴくせる',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 15
          },
          numbering: 'スリーズブーケ 3rdシングル',
          BPM: {
            original: 138,
            inGame: 112
          },
          time: 107.83,
          cover: false
        },
        attribute: 'pure',
        BHcount: 56,
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue']
      },
      '千変万華': {
        musicData: {
          kana: 'せんぺんばんか',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 15
          },
          numbering: 'スリーズブーケ 3rdシングル',
          BPM: {
            original: 140,
            inGame: 140
          },
          time: 108,
          cover: false
        },
        attribute: 'smile',
        BHcount: 61,
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'kozue']
      },
      'Dear my future': {
        musicData: {
          kana: 'でぃあまいふゅーちゃー',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: {
            original: 90,
            inGame: 180
          },
          time: 101.34,
          cover: false
        },
        attribute: 'cool',
        BHcount: 36,
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue']
      },
      'シュガーメルト': {
        musicData: {
          kana: 'しゅがーめると',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 15
          },
          numbering: 'スリーズブーケ 3rdシングル',
          BPM: {
            original: 136,
            inGame: 136
          },
          time: 104.56,
          cover: false
        },
        attribute: 'smile',
        BHcount: 58,
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'kozue']
      },
      'Special Thanks': {
        musicData: {
          kana: 'すぺしゃるさんくす',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2024,
            month: 2,
            date: 14
          },
          numbering: 'スリーズブーケ＆DOLLCHESTRA＆みらくらぱーく！ ユニットスプリットシングル',
          BPM: {
            original: 170,
            inGame: 170
          },
          time: 0,
          cover: false
        },
        attribute: 'pure',
        BHcount: 64,
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue']
      },
      'AWOKE': {
        musicData: {
          kana: 'あうぉーく',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: 'デビューミニアルバム',
          BPM: {
            original: 150,
            inGame: 150
          },
          time: 126.40,
          cover: false
        },
        attribute: 'cool',
        BHcount: 80,
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'Sparkly Spot': {
        musicData: {
          kana: 'すぱーくりーすぽっと',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 4,
            date: 26
          },
          numbering: 'DOLLCHESTRA 1stシングル',
          BPM: {
            original: 176,
            inGame: 176
          },
          time: 94.09,
          cover: false
        },
        attribute: 'cool',
        BHcount: 67,
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'ツキマカセ': {
        musicData: {
          kana: 'つきまかせ',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 4,
            date: 26
          },
          numbering: 'DOLLCHESTRA 1stシングル',
          BPM: {
            original: 220,
            inGame: 220
          },
          time: 103.64,
          cover: false
        },
        attribute: 'pure',
        BHcount: 93,
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      '希望的プリズム': {
        musicData: {
          kana: 'きぼうてきぷりずむ',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 4,
            date: 26
          },
          numbering: 'DOLLCHESTRA 1stシングル',
          BPM: {
            original: 131,
            inGame: 131
          },
          time: 112.38,
          cover: false
        },
        attribute: 'cool',
        BHcount: 57,
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'スケイプゴート': {
        musicData: {
          kana: 'すけいぷごーと',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 6,
            date: 14
          },
          numbering: 'スリーズブーケ&DOLLCHESTRA ユニットスプリットシングル',
          BPM: {
            original: 97,
            inGame: 97
          },
          time: 123.71,
          cover: false
        },
        attribute: 'cool',
        BHcount: 48,
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'Tragic Drops': {
        musicData: {
          kana: 'とらじっくどろっぷす',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 6,
            date: 14
          },
          numbering: 'スリーズブーケ&DOLLCHESTRA ユニットスプリットシングル',
          BPM: {
            original: 110,
            inGame: 110
          },
          time: 87.28,
          cover: false
        },
        attribute: 'cool',
        BHcount: 38,
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'Mirage Voyage': {
        musicData: {
          kana: 'みらーじゅぼやーじゅ',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 8,
            date: 9
          },
          numbering: 'DOLLCHESTRA 2ndシングル',
          BPM: {
            original: 130,
            inGame: 130
          },
          time: 118.15,
          cover: false
        },
        attribute: 'pure',
        BHcount: 62,
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'ジブンダイアリー': {
        musicData: {
          kana: 'しぶんだいありー',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 8,
            date: 9
          },
          numbering: 'DOLLCHESTRA 2ndシングル',
          BPM: {
            original: 102,
            inGame: 102
          },
          time: 108.24,
          cover: false
        },
        attribute: 'smile',
        BHcount: 44,
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'パラレルダンサー': {
        musicData: {
          kana: 'ぱられるだんさー',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: {
            original: 185,
            inGame: 92
          },
          time: 117.39,
          cover: false
        },
        attribute: 'smile',
        BHcount: 39,
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'Take It Over': {
        musicData: {
          kana: 'ていくいっとおーばー',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 22
          },
          numbering: 'DOLLCHESTRA 3rdシングル',
          BPM: {
            original: 150,
            inGame: 150
          },
          time: 89.6,
          cover: false
        },
        attribute: 'cool',
        BHcount: 50,
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'KNOT': {
        musicData: {
          kana: 'のっと',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 22
          },
          numbering: 'DOLLCHESTRA 3rdシングル',
          BPM: {
            original: 174,
            inGame: 174
          },
          time: 99.31,
          cover: false
        },
        attribute: 'cool',
        BHcount: 70,
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      '青春の輪郭': {
        musicData: {
          kana: 'せいしゅんのりんかく',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: {
            original: 176,
            inGame: 176
          },
          time: 120,
          cover: false
        },
        attribute: 'pure',
        BHcount: 86,
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      '飴色': {
        musicData: {
          kana: 'あめいろ',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 22
          },
          numbering: 'DOLLCHESTRA 3rdシングル',
          BPM: {
            original: 126,
            inGame: 126
          },
          time: 133.33,
          cover: false
        },
        attribute: 'cool',
        BHcount: 68,
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      '青とシャボン': {
        musicData: {
          kana: 'あおとしゃぼん',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2024,
            month: 2,
            date: 14
          },
          numbering: 'スリーズブーケ＆DOLLCHESTRA＆みらくらぱーく！ ユニットスプリットシングル',
          BPM: {
            original: 127,
            inGame: 127
          },
          time: 0,
          cover: false
        },
        attribute: 'cool',
        BHcount: 48,
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'ド！ド！ド！': {
        musicData: {
          kana: 'どどど',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 29
          },
          numbering: 'デビューミニアルバム',
          BPM: {
            original: 197,
            inGame: 197
          },
          time: 92.59,
          cover: false
        },
        attribute: 'pure',
        BHcount: 70,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['rurino', 'megumi']
      },
      'ハクチューアラモード': {
        musicData: {
          kana: 'はくちゅーあらもーど',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: {
            original: 258,
            inGame: 129
          },
          time: 89.3,
          cover: false
        },
        attribute: 'smile',
        BHcount: 42,
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['rurino', 'megumi']
      },
      'ココン東西': {
        musicData: {
          kana: 'ここんとうざい',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: {
            original: 160,
            inGame: 160
          },
          time: 91.5,
          cover: false
        },
        attribute: 'cool',
        BHcount: 55,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['rurino', 'megumi']
      },
      'アイデンティティ': {
        musicData: {
          kana: 'あいでんてぃてぃ',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 29
          },
          numbering: 'みらくらぱーく！ 1stシングル',
          BPM: {
            original: 157,
            inGame: 157
          },
          time: 87.69,
          cover: false
        },
        attribute: 'smile',
        BHcount: 50,
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['rurino', 'megumi']
      },
      'ノンフィクションヒーローショー': {
        musicData: {
          kana: 'のんふぃくしょんひーろーしょー',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 29
          },
          numbering: 'みらくらぱーく！ 1stシングル',
          BPM: {
            original: 180,
            inGame: 180
          },
          time: 142.67,
          cover: false
        },
        attribute: 'pure',
        BHcount: 104,
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['rurino', 'megumi']
      },
      '天才なのかもしれない': {
        musicData: {
          kana: 'てんさいなのかもしれない',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 29
          },
          numbering: 'みらくらぱーく！ 1stシングル',
          BPM: {
            original: 128,
            inGame: 128
          },
          time: 99.38,
          cover: false
        },
        attribute: 'pure',
        BHcount: 51,
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['rurino', 'megumi']
      },
      'ミルク': {
        musicData: {
          kana: 'みるく',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2024,
            month: 2,
            date: 14
          },
          numbering: 'スリーズブーケ＆DOLLCHESTRA＆みらくらぱーく！ ユニットスプリットシングル',
          BPM: {
            original: 79,
            inGame: 79
          },
          time: 137.84,
          cover: false
        },
        attribute: 'pure',
        BHcount: 42,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['rurino', 'megumi']
      },
      'Runway': {
        musicData: {
          kana: 'らんうぇい',
          singer: '村野さやか',
          releaseDate: {
            year: 2023,
            month: 10,
            date: 30
          },
          numbering: '',
          BPM: {
            original: 74,
            inGame: 74
          },
          time: 137.84,
          cover: false
        },
        attribute: 'pure',
        BHcount: 41,
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['sayaka']
      },
      '僕らのLIVE 君とのLIFE': {
        musicData: {
          kana: 'ぼくらのらいふきみとのらいふ',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2010,
            month: 8,
            date: 13
          },
          numbering: 'μ\'s 1stシングル',
          BPM: {
            original: 210,
            inGame: 210
          },
          time: 145.14,
          cover: true
        },
        attribute: 'pure',
        BHcount: 125,
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi']
      },
      '君のこころは輝いてるかい？': {
        musicData: {
          kana: 'きみのこころはかがやいてるかい',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2015,
            month: 10,
            date: 7
          },
          numbering: 'Aqours 1stシングル',
          BPM: {
            original: 182,
            inGame: 182
          },
          time: 117.36,
          cover: true
        },
        attribute: 'smile',
        BHcount: 87,
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'kozue']
      },
      'TOKIMEKI Runners': {
        musicData: {
          kana: 'ときめきらんなーず',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2018,
            month: 11,
            date: 21
          },
          numbering: '虹ヶ咲学園スクールアイドル同好会 1stアルバム',
          BPM: {
            original: 180,
            inGame: 180
          },
          time: 94.67,
          cover: true
        },
        attribute: 'smile',
        BHcount: 69,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['rurino', 'megumi']
      },
      '始まりは君の空': {
        musicData: {
          kana: 'はじまりはきみのそら',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2021,
            month: 4,
            date: 7
          },
          numbering: 'Liella! 1stシングル',
          BPM: {
            original: 164,
            inGame: 164
          },
          time: 117.08,
          cover: true
        },
        attribute: 'pure',
        BHcount: 78,
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      'ビバハピ': {
        musicData: {
          kana: 'びばはぴ',
          singer: '日野下 花帆',
          releaseDate: {
            year: 2013,
            month: 7,
            date: 26
          },
          numbering: '',
          BPM: {
            original: 148,
            inGame: 148
          },
          time: 94.05,
          cover: true
        },
        attribute: 'pure',
        BHcount: 56,
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho']
      },
      '深愛': {
        musicData: {
          kana: 'しんあい',
          singer: '乙宗 梢',
          releaseDate: {
            year: 2009,
            month: 1,
            date: 21
          },
          numbering: '水樹奈々 19thシングル',
          BPM: {
            original: 133,
            inGame: 133
          },
          time: 115.49,
          cover: true
        },
        attribute: 'cool',
        BHcount: 63,
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kozue']
      },
      'Preserved Roses': {
        musicData: {
          kana: 'ぷりざーぶどろーぜず',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2013,
            month: 5,
            date: 15
          },
          numbering: 'T.M Revolution×水樹奈々 コラボシングル',
          BPM: {
            original: 167,
            inGame: 167
          },
          time: 93.41,
          cover: true
        },
        attribute: 'smile',
        BHcount: 63,
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'kozue']
      },
      'そばかす': {
        musicData: {
          kana: 'そばかす',
          singer: '村野 さやか',
          releaseDate: {
            year: 1996,
            month: 2,
            date: 19
          },
          numbering: 'JUDY AND MARY 9thシングル',
          BPM: {
            original: 170,
            inGame: 170
          },
          time: 94.59,
          cover: true
        },
        attribute: 'pure',
        BHcount: 65,
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka']
      },
      'ロストワンの号哭': {
        musicData: {
          kana: 'ろすとわんのごうこく',
          singer: '夕霧 綴理',
          releaseDate: {
            year: 2013,
            month: 3,
            date: 4
          },
          numbering: '',
          BPM: {
            original: 162,
            inGame: 162
          },
          time: 120,
          cover: true
        },
        attribute: 'cool',
        BHcount: 79,
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['tsuzuri']
      },
      '名前のない怪物': {
        musicData: {
          kana: 'なまえのないかいぶつ',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2012,
            month: 12,
            date: 5
          },
          numbering: 'EGOIST 3rdシングル',
          BPM: {
            original: 180,
            inGame: 180
          },
          time: 100,
          cover: true
        },
        attribute: 'cool',
        BHcount: 73,
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      '狙いうち': {
        musicData: {
          kana: 'ねらいうち',
          singer: '大沢 瑠璃乃',
          releaseDate: {
            year: 1973,
            month: 2,
            date: 25
          },
          numbering: '山本リンダ 23rdシングル',
          BPM: {
            original: 142,
            inGame: 142
          },
          time: 81.6,
          cover: true
        },
        attribute: 'pure',
        BHcount: 49,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['rurino']
      },
      '♡桃色片想い♡': {
        musicData: {
          kana: 'ももいろかたおもい',
          singer: '藤島 慈',
          releaseDate: {
            year: 2002,
            month: 2,
            date: 6
          },
          numbering: '松浦亜弥 5thシングル',
          BPM: {
            original: 154,
            inGame: 154
          },
          time: 123.12,
          cover: true
        },
        attribute: 'pure',
        BHcount: 77,
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['megumi']
      },
      'いーあるふぁんくらぶ': {
        musicData: {
          kana: 'いーあるふぁんくらぶ',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2012,
            month: 8,
            date: 15
          },
          numbering: '',
          BPM: {
            original: 145,
            inGame: 145
          },
          time: 100.97,
          cover: true
        },
        attribute: 'pure',
        BHcount: 59,
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['rurino', 'megumi']
      },
      'ハッピーシンセサイザ': {
        musicData: {
          kana: 'はっぴーしんせさいざ',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2010,
            month: 11,
            date: 22
          },
          numbering: '',
          BPM: {
            original: 127,
            inGame: 127
          },
          time: 92.6,
          cover: true
        },
        attribute: 'pure',
        BHcount: 47,
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue']
      },
      'ヴィラン': {
        musicData: {
          kana: 'ゔぃらん',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2020,
            month: 2,
            date: 7
          },
          numbering: '',
          BPM: {
            original: 102,
            inGame: 102
          },
          time: 80,
          cover: true
        },
        attribute: 'cool',
        BHcount: 32,
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      '心予報': {
        musicData: {
          kana: 'しんよほう',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2020,
            month: 2,
            date: 12
          },
          numbering: 'Eve 2ndアルバム',
          BPM: {
            original: 143,
            inGame: 143
          },
          time: 112.45,
          cover: true
        },
        attribute: 'smile',
        BHcount: 95,
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue']
      },
      '威風堂々': {
        musicData: {
          kana: 'いふうどうどう',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2012,
            month: 10,
            date: 29
          },
          numbering: '',
          BPM: {
            original: 130,
            inGame: 130
          },
          time: 94.15,
          cover: true
        },
        attribute: 'cool',
        BHcount: 45,
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      '強風オールバック': {
        musicData: {
          kana: 'きょうふうおーるばっく',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 3,
            date: 15
          },
          numbering: 'ゆこぴ 1stアルバム',
          BPM: {
            original: 135,
            inGame: 135
          },
          time: 9.22,
          cover: true
        },
        attribute: 'pure',
        BHcount: 47,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['rurino', 'megumi']
      },
      'ダンスロボットダンス': {
        musicData: {
          kana: 'だんすろぼっとだんす',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2016,
            month: 12,
            date: 6
          },
          numbering: '',
          BPM: {
            original: 190,
            inGame: 190
          },
          time: 101.05,
          cover: true
        },
        attribute: 'smile',
        BHcount: 78,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['rurino', 'megumi']
      },
      'CHANGE!!!!': {
        musicData: {
          kana: 'ちぇんじ',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2011,
            month: 11,
            date: 9
          },
          numbering: 'THE IDOLM@STER ANIM@TION MASTER 04',
          BPM: {
            original: 170,
            inGame: 170
          },
          time: 96,
          cover: true
        },
        attribute: 'pure',
        BHcount: 66,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi']
      },
      '祝福': {
        musicData: {
          kana: 'しゅくふく',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2022,
            month: 10,
            date: 1
          },
          numbering: 'YOASOBI 2ndシングル',
          BPM: {
            original: 170,
            inGame: 170
          },
          time: 91.77,
          cover: true
        },
        attribute: 'cool',
        BHcount: 0,
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri']
      },
      '御旗のもとに': {
        musicData: {
          kana: 'みはたのもとに',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2001,
            month: 3,
            date: 22
          },
          numbering: 'ゲーム「サクラ大戦3～巴里は燃えているか～」 OPテーマ',
          BPM: {
            original: 147,
            inGame: 147
          },
          time: 0,
          cover: true
        },
        attribute: 'smile',
        BHcount: 0,
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'kozue']
      }
    }
  }),
  getters: {},
  actions: {}
});