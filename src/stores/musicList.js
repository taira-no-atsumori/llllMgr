import { defineStore } from 'pinia';

export const useMusicStore = defineStore('musicList', {
  state: () => ({
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
        bonusSkill: 'LOVEボーナス',
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
      'Yup! Yup! Yup!': {
        musicData: {
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: 170,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'ビートハートアップ',
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
      'ツバサ・ラ・リベルテ': {
        musicData: {
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2024,
            month: 1,
            date: 17
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stシングル',
          BPM: 177,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      'Link to the FUTURE': {
        musicData: {
          singer: 'スリーズブーケ & DOLLCHESTRA & みらくらぱーく！',
          releaseDate: {
            year: 2024,
            month: 1,
            date: 17
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stシングル',
          BPM: 184,
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
      'Mix shake!!': {
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
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
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
      'Dear my future': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 9,
            date: 20
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 1stアルバム',
          BPM: 90,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue']
      },
      'シュガーメルト': {
        musicData: {
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 15
          },
          numbering: 'スリーズブーケ 3rdシングル',
          BPM: 136,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'ビートハートアップ',
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
      '飴色': {
        musicData: {
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 22
          },
          numbering: 'DOLLCHESTRA 3rdシングル',
          BPM: 126,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'tsuzuri',
        bonusSkill: 'ビートハートアップ',
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
      '天才なのかもしれない': {
        musicData: {
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2023,
            month: 11,
            date: 29
          },
          numbering: 'みらくらぱーく！ 1stシングル',
          BPM: 128,
          cover: false
        },
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'メンタルリカバー',
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
          numbering: '',
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
      },
      'CHANGE!!!!': {
        musicData: {
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2011,
            month: 11,
            date: 9
          },
          numbering: '',
          BPM: 170,
          cover: true
        },
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi']
      }
    }
  }),
  getters: {},
  actions: {}
});