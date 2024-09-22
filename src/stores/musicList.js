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
          cover: false,
          link: 'https://youtu.be/QUa6HMcRSnc?si=0OipC7BbXPRZoDAR'
        },
        attribute: 'smile',
        BHcount: 92,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/rT3v54pmNXA?si=-6eg8PuAsUkwINYU&t=67'
        },
        attribute: 'smile',
        BHcount: 72,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/x8QrjuoxJ-s?si=Xn91wzDfHxrhaRjI'
        },
        attribute: 'cool',
        BHcount: 60,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/rFu_T2qZA-M?si=xa8doPhG2O2hCg8R'
        },
        attribute: 'cool',
        BHcount: 57,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/sPORZ8XxsDA?si=sREECA9n1ZRdmB6o'
        },
        attribute: 'smile',
        BHcount: 68,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/nF3s1RC_HDA?si=IDw5KgeLVLS6SeKw'
        },
        attribute: 'pure',
        BHcount: 66,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/AGtF3sfx10o?si=zW00SJ_dZx1fjxBa'
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
          cover: false,
          link: 'https://youtu.be/Xlgsd61isEk?si=6f2QdaWj5lYgTWP_&t=790'
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
          cover: false,
          link: 'https://youtu.be/Jzg41mZGJRw?si=edZhXQbA2yBbp9AZ'
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
          cover: false,
          link: 'https://youtu.be/Xlgsd61isEk?si=1ugEBdpa2bBX7CZ5&t=103'
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
          cover: false,
          link: 'https://youtu.be/Xlgsd61isEk?si=MVogreQamGLHPwXx&t=707'
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
          cover: false,
          link: 'https://youtu.be/okQJ8QQRhaM?si=kcpavJGfMr4SlqUz'
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
          cover: false,
          link: 'https://youtu.be/y7CiaEUtqeI?si=yx8YEoAqbJ5IFF_C'
        },
        attribute: 'smile',
        BHcount: 105,
        level: 0,
        term: 103,
        center: 'kaho',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      '抱きしめる花びら': {
        musicData: {
          kana: 'だきしめるはなびら',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2024,
            month: 4,
            date: 3
          },
          numbering: '',
          BPM: {
            original: 79,
            inGame: 79
          },
          time: 136.5,
          cover: false,
          link: 'https://youtu.be/rjInEoKntb0?si=_Cn1KNnx-ckQqsIG'
        },
        attribute: 'pure',
        BHcount: 43,
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi']
      },
      'STEP UP！': {
        musicData: {
          kana: 'すてっぷあっぷ',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2024,
            month: 4,
            date: 3
          },
          numbering: '',
          BPM: {
            original: 187,
            inGame: 187
          },
          time: 104.5,
          cover: false,
          link: 'https://youtu.be/x73AT9OU_FQ?si=g9A2NymAyFc1y6Ky&t=627'
        },
        attribute: 'pure',
        BHcount: 83,
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
          cover: false,
          link: 'https://youtu.be/yu3-GPN5fVE?si=bhjSkSyQjS2kmHse'
        },
        attribute: 'cool',
        BHcount: 63,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/a5PMdCUekvw?si=B8mXWg0nD02X_88X&t=12'
        },
        attribute: 'smile',
        BHcount: 70,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/dFrbBRm_Ghw?si=UoxuVFfCu3aVugsN'
        },
        attribute: 'smile',
        BHcount: 70,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/a5PMdCUekvw?si=4F_--5_bD_UAwHnM&t=170'
        },
        attribute: 'pure',
        BHcount: 83,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/ScchwCmMN7k?si=81JRbsqUjcEKrZwp&t=13'
        },
        attribute: 'smile',
        BHcount: 47,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/IHSUgM4rVQg?si=bGMQLsZZ4YtPA8DE'
        },
        attribute: 'pure',
        BHcount: 51,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/XYKceXnAFpQ?si=yrwwcSdw09lsrWTz'
        },
        attribute: 'smile',
        BHcount: 62,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/fv-oIfVdlIE?si=_OCSQWPJaTEHotf2&t=105'
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
          cover: false,
          link: 'https://youtu.be/Xlgsd61isEk?si=7t7jhjitP-1o3O2A&t=268'
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
          cover: false,
          link: 'https://youtu.be/qSA1Qwgy5iw?si=CfByaDK2YhAyhcwz&t=13'
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
          cover: false,
          link: 'https://youtu.be/qSA1Qwgy5iw?si=CpiTZUTelhvpzthd&t=190'
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
          cover: false,
          link: 'https://youtu.be/Xlgsd61isEk?si=8tJTK44nSCYYilQK&t=541'
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
          cover: false,
          link: 'https://youtu.be/qSA1Qwgy5iw?si=JntFsn5GFracnRnu&t=104'
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
          time: 94,
          cover: false,
          link: 'https://youtu.be/WU461Dk10EY?si=C_8005letoaSNPas'
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
          cover: false,
          link: 'https://youtu.be/KnnSr-kI5sk?si=XOmnKcPqfz0HUfZo'
        },
        attribute: 'cool',
        BHcount: 80,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/QyQOyVTLPT0?si=dM9Glg5C3HGuK6vX&t=13'
        },
        attribute: 'cool',
        BHcount: 67,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/02SNWF91ISA?si=RpFPD8G0ru-iilI4'
        },
        attribute: 'pure',
        BHcount: 93,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/QyQOyVTLPT0?si=GYUfgXMVNGx6Ho7d&t=177'
        },
        attribute: 'cool',
        BHcount: 57,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/69n4Ts5uDww?si=Af_0ISZMHyxzUJG2&t=14'
        },
        attribute: 'cool',
        BHcount: 48,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/n8paMjvkKqw?si=wcdpzqQwSgBExJa0'
        },
        attribute: 'cool',
        BHcount: 38,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/E1sncPMb8kw?si=nQuBLQtQZ41_Eu5z'
        },
        attribute: 'pure',
        BHcount: 62,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/DQUOMsWk7NI?si=7ICFu27WOw5Nw7Qb&t=107'
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
          cover: false,
          link: 'https://youtu.be/Xlgsd61isEk?si=wUNDXjbbjO7lLkeG&t=632'
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
          cover: false,
          link: 'https://youtu.be/1md2v9lToNE?si=tCEFP98iRkI4oYuY&t=11'
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
          cover: false,
          link: 'https://youtu.be/1md2v9lToNE?si=c9GihuYIGmzckTyY&t=169'
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
          cover: false,
          link: 'https://youtu.be/Xlgsd61isEk?si=bzSdi3WqI_oMBQSx&t=345'
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
          cover: false,
          link: 'https://youtu.be/1md2v9lToNE?si=agVO3PFMPkOdz5QP&t=100'
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
          time: 94,
          cover: false,
          link: 'https://youtu.be/z_H1vYkJQAs?si=9yL3dXDhw3U-skba&t=89'
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
          cover: false,
          link: 'https://youtu.be/sLQEunI7p5s?si=qUp7UaRBLOMe4YKd'
        },
        attribute: 'pure',
        BHcount: 70,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/vh_aOcsfBSE?si=aEMg-2KwfrwLxOoy'
        },
        attribute: 'smile',
        BHcount: 42,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/4TloWORhdjg?si=UFtI--W04k-VevXL'
        },
        attribute: 'cool',
        BHcount: 55,
        level: 1,
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
          cover: false,
          link: 'https://youtu.be/RD2C_UVLjQM?si=lPXSg7xKuPePxXHL'
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
          cover: false,
          link: 'https://youtu.be/BxYdciecJWA?si=TOcAbzLU58i5pyu8&t=179'
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
          cover: false,
          link: 'https://youtu.be/BxYdciecJWA?si=bbJ1Q63ihuezoOPD&t=95'
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
          cover: false,
          link: 'https://youtu.be/z_H1vYkJQAs?si=8X9jlbFa--ll80Sl&t=179'
        },
        attribute: 'pure',
        BHcount: 42,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['rurino', 'megumi']
      },
      'BANG YOU グラビティ': {
        musicData: {
          kana: 'ばんゆうぐらびてぃ',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2024,
            month: 3,
            date: 27
          },
          numbering: 'みらくらぱーく！ 2ndシングル',
          BPM: {
            original: 180,
            inGame: 180
          },
          time: 134.5,
          cover: false,
          link: ''
        },
        attribute: 'pure',
        BHcount: 99,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['rurino', 'megumi']
      },
      '以心☆電信': {
        musicData: {
          kana: 'いしんでんしん',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2024,
            month: 3,
            date: 27
          },
          numbering: 'みらくらぱーく！ 2ndシングル',
          BPM: {
            original: 152,
            inGame: 152
          },
          time: 103.25,
          cover: false,
          link: ''
        },
        attribute: 'cool',
        BHcount: 63,
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['rurino', 'megumi']
      },
      'マハラジャンボリー': {
        musicData: {
          kana: 'まはらじゃんぼりー',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2024,
            month: 3,
            date: 27
          },
          numbering: 'みらくらぱーく！ 2ndシングル',
          BPM: {
            original: 152,
            inGame: 152
          },
          time: 104.3,
          cover: false,
          link: ''
        },
        attribute: 'smile',
        BHcount: 64,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['rurino', 'megumi']
      },
      'ハッピー至上主義！': {
        musicData: {
          kana: 'はっぴーしじょうしゅぎ',
          singer: 'かほめぐ♡じぇらーと',
          releaseDate: {
            year: 2024,
            month: 3,
            date: 20
          },
          numbering: 'るりのとゆかいなつづりたち＆かほめぐ♡じぇらーと＆蓮ノ休日 シャッフルユニットスプリットシングル',
          BPM: {
            original: 173,
            inGame: 173
          },
          time: 113,
          cover: false,
          link: 'https://youtu.be/4WxZVeFi0ZQ?si=agdd4M0wM2dKX3de'
        },
        attribute: 'smile',
        BHcount: 79,
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'megumi']
      },
      'Pleasure Feather': {
        musicData: {
          kana: 'ぷれじゃーふぇざー',
          singer: '蓮ノ休日',
          releaseDate: {
            year: 2024,
            month: 3,
            date: 20
          },
          numbering: 'るりのとゆかいなつづりたち＆かほめぐ♡じぇらーと＆蓮ノ休日 シャッフルユニットスプリットシングル',
          BPM: {
            original: 130,
            inGame: 130
          },
          time: 108.5,
          cover: false,
          link: 'https://youtu.be/rqlkUrQ6YPo?si=Cy3iemgnZq-plE0t'
        },
        attribute: 'cool',
        BHcount: 57,
        level: 0,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'kozue']
      },
      'Colorfulness': {
        musicData: {
          kana: 'からふるねす',
          singer: 'るりのとゆかいなつづりたち',
          releaseDate: {
            year: 2024,
            month: 3,
            date: 20
          },
          numbering: 'るりのとゆかいなつづりたち＆かほめぐ♡じぇらーと＆蓮ノ休日 シャッフルユニットスプリットシングル',
          BPM: {
            original: 76,
            inGame: 76
          },
          time: 130.18,
          cover: false,
          link: 'https://youtu.be/S-YvHYLPZ4k?si=4kdDben0embw6ZRI'
        },
        attribute: 'pure',
        BHcount: 40,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['rurino', 'tsuzuri']
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
          cover: false,
          link: 'https://youtu.be/11Of9XcxMO4?si=zNdf3QNDdn7izmdD&t=4160'
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
          cover: true,
          link: 'https://youtu.be/58h9A4mtUWs?si=iJ3ZoO6RoOqt68KE'
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
          cover: true,
          link: 'https://youtu.be/Hzc80Bk6SyU?si=NGtk2un_I7h5IbLm'
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
          cover: true,
          link: 'https://youtu.be/V2tCGX7m5KE?si=k87Q4qhwsSj8s4h3'
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
          cover: true,
          link: 'https://youtu.be/zVBCveF77as?si=14Oj8PPU8K1mmjNB'
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
          cover: true,
          link: ''
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
          cover: true,
          link: ''
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
          cover: true,
          link: ''
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
          cover: true,
          link: ''
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
          cover: true,
          link: ''
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
          cover: true,
          link: ''
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
          cover: true,
          link: ''
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
          cover: true,
          link: ''
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
          cover: true,
          link: 'https://youtu.be/oaCnoiDmNzU?si=fLWLXI6-ClvteCl1'
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
          cover: true,
          link: 'https://youtu.be/x33KpPtOAjI?si=80SPUMebEUsbM0TY'
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
          cover: true,
          link: 'https://youtu.be/bOat3p4nUs8?si=O4zyE5-UFt62Fc1Q'
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
          cover: true,
          link: ''
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
          cover: true,
          link: ''
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
          cover: true,
          link: ''
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
          cover: true,
          link: ''
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
          cover: true,
          link: 'https://youtu.be/xHlRTA0-f2g?si=P5lzsOBrgE1sJSr5'
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
          cover: true,
          link: ''
        },
        attribute: 'cool',
        BHcount: 63,
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
          time: 106,
          cover: true,
          link: ''
        },
        attribute: 'smile',
        BHcount: 63,
        level: 0,
        term: 103,
        center: 'kozue',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'kozue']
      },
      'ダイヤモンドハッピー': {
        musicData: {
          kana: 'だいやもんどはっぴー',
          singer: '乙宗梢・夕霧綴理・藤島慈',
          releaseDate: {
            year: 2013,
            month: 6,
            date: 26
          },
          numbering: 'TVアニメ「アイカツ! -アイドルカツドウ!-」 1年目後期OPテーマ',
          BPM: {
            original: 233,
            inGame: 233
          },
          time: 94.21,
          cover: true,
          link: 'https://youtu.be/Gls1MQLv5o0?si=De24u5gdA_Cjmsqd'
        },
        attribute: 'smile',
        BHcount: 89,
        level: 1,
        term: 103,
        center: 'kozue',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kozue', 'tsuzuri', 'megumi']
      },
      'lucky train!': {
        musicData: {
          kana: 'らっきーとれいん',
          singer: '日野下花帆・村野さやか・大沢瑠璃乃',
          releaseDate: {
            year: 2015,
            month: 10,
            date: 28
          },
          numbering: 'TVアニメ「アイカツ! -アイドルカツドウ!-」 4thシーズンEDテーマ',
          BPM: {
            original: 147,
            inGame: 147
          },
          time: 93.45,
          cover: true,
          link: ''
        },
        attribute: 'cool',
        BHcount: 48,
        level: 1,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'rurino']
      },
      'Dream Believers(104期Ver.)': {
        musicData: {
          kana: 'どりーむびりーばーず',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2024,
            month: 4,
            date: 17
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 2ndミニアルバム',
          BPM: {
            original: 162,
            inGame: 162
          },
          time: 139.26,
          cover: false,
          link: 'https://youtu.be/Gi4-nA4o0o4?si=pBrhLx0_XvKzly4X&t=14'
        },
        attribute: 'smile',
        BHcount: 92,
        level: 1,
        term: 104,
        center: 'kozue',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi', 'ginko', 'kosuzu', 'hime']
      },
      'On your mark(104期Ver.)': {
        musicData: {
          kana: 'おんゆあまーく',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2024,
            month: 4,
            date: 17
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 2ndミニアルバム',
          BPM: {
            original: 154,
            inGame: 154
          },
          time: 96.62,
          cover: false,
          link: 'https://youtu.be/Gi4-nA4o0o4?si=SS99c11SKo1yzW3d&t=121'
        },
        attribute: 'cool',
        BHcount: 60,
        level: 0,
        term: 104,
        center: 'tsuzuri',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi', 'ginko', 'kosuzu', 'hime']
      },
      '365 Days': {
        musicData: {
          kana: 'えぶりでい',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2024,
            month: 7,
            date: 17
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 3rdシングル',
          BPM: {
            original: 159,
            inGame: 159
          },
          time: 132.5,
          cover: false,
          link: 'https://youtu.be/Pw8ogWXm9s8?si=49PpxMvPK3vuct2x'
        },
        attribute: 'smile',
        BHcount: 59,
        level: 0,
        term: 103,
        center: 'megumi',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi', 'ginko', 'kosuzu', 'hime']
      },
      'Bloom the smile, Bloom the dream!': {
        musicData: {
          kana: 'ぶるーむざすまいるぶるーむざどりーむ',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2024,
            month: 7,
            date: 17
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 3rdシングル',
          BPM: {
            original: 172,
            inGame: 172
          },
          time: 100,
          cover: false,
          link: 'https://youtu.be/huZSM7Mu0a0?si=lXEBQdVEkyJxhjIh'
        },
        attribute: 'smile',
        BHcount: 70,
        level: 0,
        term: 104,
        center: 'kaho',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi', 'ginko', 'kosuzu', 'hime']
      },
      '永遠のEuphoria（104期Ver.）': {
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
          cover: false,
          link: ''
        },
        attribute: 'smile',
        BHcount: 68,
        level: 0,
        term: 104,
        center: 'megumi',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi', 'ginko', 'kosuzu', 'hime']
      },
      '夏めきペイン（104期Ver.）': {
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
          cover: false,
          link: 'https://youtu.be/nF3s1RC_HDA?si=IDw5KgeLVLS6SeKw'
        },
        attribute: 'pure',
        BHcount: 66,
        level: 1,
        term: 103,
        center: 'kozue',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'kozue', 'tsuzuri', 'rurino', 'megumi', 'ginko' ,'kosuzu', 'hime']
      },
      'DEEPNESS（ReC Ver.）': {
        musicData: {
          kana: 'でぃーぷねす',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2024,
            month: 9,
            date: 12
          },
          numbering: '',
          BPM: {
            original: 136,
            inGame: 136
          },
          time: 104.12,
          cover: false,
          link: 'https://youtu.be/Cpi7W8Ycv1Y?si=0jeKapz7_DWv5qd-'
        },
        attribute: 'cool',
        BHcount: 57,
        level: 0,
        term: 104,
        center: 'tsuzuri',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi']
      },
      'Reflection in the mirror（104期NEW Ver.）': {
        musicData: {
          kana: 'りふれくしょんいんざみらー',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2024,
            month: 9,
            date: 4
          },
          numbering: 'スリーズブーケ 4thシングル',
          BPM: {
            original: 137,
            inGame: 137
          },
          time: 124,
          cover: false,
          link: ''
        },
        attribute: 'cool',
        BHcount: 69,
        level: 0,
        term: 104,
        center: 'ginko',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'kozue', 'ginko']
      },
      'Mix shake!!（104期Ver.）': {
        musicData: {
          kana: 'みっくすしぇいく',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2024,
            month: 5,
            date: 10
          },
          numbering: '',
          BPM: {
            original: 174,
            inGame: 174
          },
          time: 117.58,
          cover: false,
          link: ''
        },
        attribute: 'pure',
        BHcount: 83,
        level: 0,
        term: 104,
        center: 'ginko',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['kaho', 'kozue', 'ginko']
      },
      '千変万華（104期Ver.）': {
        musicData: {
          kana: 'せんぺんばんか',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2024,
            month: 6,
            date: 10
          },
          numbering: '',
          BPM: {
            original: 140,
            inGame: 140
          },
          time: 108,
          cover: false,
          link: ''
        },
        attribute: 'smile',
        BHcount: 61,
        level: 0,
        term: 104,
        center: 'ginko',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'kozue', 'ginko']
      },
      'アオクハルカ': {
        musicData: {
          kana: 'あおくはるか',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2024,
            month: 4,
            date: 17
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 2ndミニアルバム',
          BPM: {
            original: 145,
            inGame: 145
          },
          time: 142,
          cover: false,
          link: 'https://youtu.be/dlXhfnJxc6w?si=wPWZZ5wlBbyLstQF'
        },
        attribute: 'pure',
        BHcount: 84,
        level: 0,
        term: 104,
        center: 'kaho',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue', 'ginko']
      },
      '月夜見海月': {
        musicData: {
          kana: 'つくよみくらげ',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2024,
            month: 9,
            date: 4
          },
          numbering: 'スリーズブーケ 4thシングル',
          BPM: {
            original: 140,
            inGame: 140
          },
          time: 115,
          cover: false,
          link: 'https://youtu.be/TW05S9ZE434?si=WcXwaAVoR6lbqN7i&t=12'
        },
        attribute: 'cool',
        BHcount: 65,
        level: 0,
        term: 104,
        center: 'ginko',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'kozue', 'ginko']
      },
      '眩耀夜行（104期Ver.）': {
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
          cover: false,
          link: ''
        },
        attribute: 'smile',
        BHcount: 62,
        level: 1,
        term: 103,
        center: 'kaho',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'kozue', 'ginko']
      },
      'Holiday∞Holiday（104期Ver.）': {
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
          cover: false,
          link: 'https://youtu.be/IHSUgM4rVQg?si=bGMQLsZZ4YtPA8DE'
        },
        attribute: 'pure',
        BHcount: 51,
        level: 0,
        term: 104,
        center: 'kozue',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'kozue', 'ginko']
      },
      'Sparkly Spot（104期NEW Ver.）': {
        musicData: {
          kana: 'すぱーくりーすぽっと',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2024,
            month: 9,
            date: 11
          },
          numbering: 'DOLLCHESTRA 4thシングル',
          BPM: {
            original: 147,
            inGame: 147
          },
          time: 114,
          cover: false,
          link: ''
        },
        attribute: 'smile',
        BHcount: 68,
        level: 0,
        term: 104,
        center: 'kosuzu',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['sayaka', 'tsuzuri', 'kosuzu']
      },
      'Tragic Drops（104期Ver.）': {
        musicData: {
          kana: 'とらじっくどろっぷす',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2024,
            month: 5,
            date: 10
          },
          numbering: '',
          BPM: {
            original: 110,
            inGame: 110
          },
          time: 87.28,
          cover: false,
          link: ''
        },
        attribute: 'cool',
        BHcount: 38,
        level: 0,
        term: 104,
        center: 'kosuzu',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['sayaka', 'tsuzuri', 'kosuzu']
      },
      'レディバグ': {
        musicData: {
          kana: 'れでぃばぐ',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2024,
            month: 4,
            date: 17
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 2ndミニアルバム',
          BPM: {
            original: 130,
            inGame: 130
          },
          time: 94.35,
          cover: false,
          link: 'https://youtu.be/gSPYSHOANaI?si=O4pMfybieFarFLcq'
        },
        attribute: 'cool',
        BHcount: 49,
        level: 0,
        term: 104,
        center: 'sayaka',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri', 'kosuzu']
      },
      'KNOT（104期Ver.）': {
        musicData: {
          kana: 'のっと',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2024,
            month: 6,
            date: 10
          },
          numbering: '',
          BPM: {
            original: 174,
            inGame: 174
          },
          time: 99.31,
          cover: false,
          link: ''
        },
        attribute: 'cool',
        BHcount: 70,
        level: 0,
        term: 104,
        center: 'kosuzu',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['sayaka', 'tsuzuri', 'kosuzu']
      },
      'Mirage Voyage（104期Ver.）': {
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
          cover: false,
          link: ''
        },
        attribute: 'pure',
        BHcount: 62,
        level: 1,
        term: 103,
        center: 'sayaka',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['sayaka', 'tsuzuri', 'kosuzu']
      },
      'Proof': {
        musicData: {
          kana: 'ぷるーふ',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2024,
            month: 9,
            date: 11
          },
          numbering: 'DOLLCHESTRA 4thシングル',
          BPM: {
            original: 170,
            inGame: 170
          },
          time: 108,
          cover: false,
          link: ''
        },
        attribute: 'pure',
        BHcount: 75,
        level: 0,
        term: 104,
        center: 'kosuzu',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['sayaka', 'tsuzuri', 'kosuzu']
      },
      '希望的プリズム（104期Ver.）': {
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
          cover: false,
          link: 'https://youtu.be/QyQOyVTLPT0?si=GYUfgXMVNGx6Ho7d&t=177'
        },
        attribute: 'cool',
        BHcount: 57,
        level: 0,
        term: 104,
        center: 'tsuzuri',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['sayaka', 'tsuzuri', 'kosuzu']
      },
      'アイデンティティ（104期NEW Ver.）': {
        musicData: {
          kana: 'あいでんてぃてぃ',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2024,
            month: 4,
            date: 29
          },
          numbering: '',
          BPM: {
            original: 202,
            inGame: 202
          },
          time: 138,
          cover: false,
          link: ''
        },
        attribute: 'pure',
        BHcount: 115,
        level: 0,
        term: 104,
        center: 'hime',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['rurino', 'megumi', 'hime']
      },
      'ココン東西（104期Ver.）': {
        musicData: {
          kana: 'ここんとうざい',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2024,
            month: 5,
            date: 10
          },
          numbering: '',
          BPM: {
            original: 160,
            inGame: 160
          },
          time: 91.5,
          cover: false,
          link: ''
        },
        attribute: 'cool',
        BHcount: 55,
        level: 0,
        term: 104,
        center: 'hime',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['rurino', 'megumi', 'hime']
      },
      'ノンフィクションヒーローショー（104期Ver.）': {
        musicData: {
          kana: 'のんふぃくしょんひーろーしょー',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2024,
            month: 6,
            date: 10
          },
          numbering: '',
          BPM: {
            original: 180,
            inGame: 180
          },
          time: 142.67,
          cover: false,
          link: ''
        },
        attribute: 'pure',
        BHcount: 104,
        level: 0,
        term: 104,
        center: 'hime',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['rurino', 'megumi', 'hime']
      },
      'みらくりえーしょん': {
        musicData: {
          kana: 'みらくりえーしょん',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2024,
            month: 4,
            date: 17
          },
          numbering: '蓮ノ空女学院スクールアイドルクラブ 2ndミニアルバム',
          BPM: {
            original: 190,
            inGame: 190
          },
          time: 153,
          cover: false,
          link: 'https://youtu.be/mWkfG12vL_0?si=PN3UeZplgHyBJQ7F'
        },
        attribute: 'pure',
        BHcount: 1,
        level: 0,
        term: 104,
        center: 'rurino',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['rurino', 'megumi', 'hime']
      },
      '以心☆電信（104期Ver.）': {
        musicData: {
          kana: 'いしんでんしん',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2024,
            month: 8,
            date: 23
          },
          numbering: '',
          BPM: {
            original: 152,
            inGame: 152
          },
          time: 103.25,
          cover: false,
          link: ''
        },
        attribute: 'cool',
        BHcount: 63,
        level: 0,
        term: 103,
        center: 'rurino',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['rurino', 'megumi', 'hime']
      },
      'ハクチューアラモード（104期Ver.）': {
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
          cover: false,
          link: 'https://youtu.be/vh_aOcsfBSE?si=aEMg-2KwfrwLxOoy'
        },
        attribute: 'smile',
        BHcount: 42,
        level: 0,
        term: 104,
        center: 'rurino',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['rurino', 'megumi', 'hime']
      },
      'Snow halation': {
        musicData: {
          kana: 'すのーはれーしょん',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2010,
            month: 12,
            date: 22
          },
          numbering: 'μ\'s 2ndシングル',
          BPM: {
            original: 173,
            inGame: 173
          },
          time: 120,
          cover: true,
          link: 'https://youtu.be/EBol1Ywt1ws?si=lvPFrr_NC7NFSGE8'
        },
        attribute: 'pure',
        BHcount: 84,
        level: 1,
        term: 103,
        center: 'kozue',
        bonusSkill: 'LOVEボーナス',
        singingMembers: ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi', 'ginko', 'kosuzu', 'hime']
      },
      'NEO SKY, NEO MAP!': {
        musicData: {
          kana: 'ねおすかいねおまっぷ',
          singer: 'スリーズブーケ',
          releaseDate: {
            year: 2020,
            month: 11,
            date: 4
          },
          numbering: 'TVアニメ「虹ヶ咲学園スクールアイドル同好会」第1期EDテーマ',
          BPM: {
            original: 142,
            inGame: 142
          },
          time: 90,
          cover: true,
          link: 'https://youtu.be/azHpFol9zOQ?si=JpS3W2EK6FtRhv-N'
        },
        attribute: 'pure',
        BHcount: 54,
        level: 0,
        term: 104,
        center: 'kaho',
        bonusSkill: 'ボルテージアップ',
        singingMembers: ['kaho', 'kozue', 'ginko']
      },
      'Daydream Warrior': {
        musicData: {
          kana: 'でいどりーむうぉーりあー',
          singer: 'DOLLCHESTRA',
          releaseDate: {
            year: 2016,
            month: 12,
            date: 22
          },
          numbering: 'ラブライブ！サンシャイン!! アニメ1期Blu-ray第4巻 特典曲',
          BPM: {
            original: 135,
            inGame: 135
          },
          time: 109,
          cover: true,
          link: 'https://youtu.be/iVorAx5enqY?si=aCQUhLGl5JsjNVdD'
        },
        attribute: 'cool',
        BHcount: 59,
        level: 0,
        term: 104,
        center: 'sayaka',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['sayaka', 'tsuzuri', 'kosuzu']
      },
      '夏色えがおで1, 2, Jump!': {
        musicData: {
          kana: 'なついろえがおでわんつーじゃんぷ',
          singer: '蓮ノ空女学院スクールアイドルクラブ',
          releaseDate: {
            year: 2011,
            month: 8,
            date: 24
          },
          numbering: 'μ\'s 3rdシングル',
          BPM: {
            original: 170,
            inGame: 170
          },
          time: 118,
          cover: true,
          link: 'https://youtu.be/u9g6OAbswqo?si=ndqZm-bhuSGa7jL3'
        },
        attribute: 'smile',
        BHcount: 84,
        level: 0,
        term: 104,
        center: 'megumi',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi', 'ginko', 'kosuzu', 'hime']
      },
      '常夏☆サンシャイン': {
        musicData: {
          kana: 'とこなつさんしゃいん',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2021,
            month: 9,
            date: 29
          },
          numbering: 'ラブライブ!スーパースター!! 第1期第6話 劇中歌',
          BPM: {
            original: 109,
            inGame: 109
          },
          time: 97,
          cover: true,
          link: 'https://youtu.be/XR3h_agJgXQ?si=Tfw4V5DMFjfszU6D'
        },
        attribute: 'smile',
        BHcount: 60,
        level: 0,
        term: 155,
        center: 'rurino',
        bonusSkill: 'ビートハートアップ',
        singingMembers: ['rurino', 'megumi', 'hime']
      },
      'ミラクルショッピング ～ドン・キホーテのテーマ～': {
        musicData: {
          kana: 'みらくるしょっぴんぐ',
          singer: 'みらくらぱーく！',
          releaseDate: {
            year: 2024,
            month: 7,
            date: 27
          },
          numbering: 'ドン・キホーテのテーマ',
          BPM: {
            original: 167,
            inGame: 167
          },
          time: 90,
          cover: true,
          link: 'https://youtu.be/r4QZzPCKbJM?si=1416AcrUKlg0FR4l'
        },
        attribute: 'smile',
        BHcount: 61,
        level: 0,
        term: 104,
        center: 'rurino',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['rurino', 'megumi', 'hime']
      },
      'ルージュの伝言': {
        musicData: {
          kana: 'るーじゅのでんごん',
          singer: '百生 吟子',
          releaseDate: {
            year: 1975,
            month: 2,
            date: 20
          },
          numbering: '荒井由実 5thシングル',
          BPM: {
            original: 153,
            inGame: 153
          },
          time: 116.43,
          cover: true,
          link: ''
        },
        attribute: 'smile',
        BHcount: 72,
        level: 0,
        term: 104,
        center: 'ginko',
        bonusSkill: 'メンタルリカバー',
        singingMembers: ['ginko']
      },
    }
  }),
  getters: {},
  actions: {}
});