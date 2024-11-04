import { defineStore } from 'pinia';
import { useCardStore } from './cardList';
import { useSkillStore } from './skillList';
import { useMusicStore } from './musicList';

export const useStoreCounter = defineStore('store', {
  state: () => ({
    version: 'ε.76(アーリーアクセス)',
    dialog: false,
    showModalName: false,
    updateData: false,
    selectCharacter: '',
    selectMusicTitle: undefined,
    checkMasteryMember: 'kaho',
    selectPeriod: 104,
    rare: ['DR', 'BR', 'UR', 'SR', 'R'],
    favorite: ['heart', 'circle', 'triangle', 'square', 'rhombus', 'star'],
    releaseStatus: ['none', 'trainingLevel', 'cardLevel', 'releaseLevel'],
    bonusSkill: ['ボルテージアップ', 'メンタルリカバー', 'ビートハートアップ', 'LOVEボーナス'],
    withStar: {
      kaho: 1,
      sayaka: 1,
      rurino: 1,
      kozue: 1,
      tsuzuri: 1,
      megumi: 1,
    },
    siteSettings: {
      all: {
        headerTracking: '',
        darkMode: 'light',
      },
      cardList: {
        isShowDetail: 'false',
        hover: 'true',
        dot_cardLevel: 'true',
        dot_releasePoint: 'true',
        dot_releaseLevel: 'true',
      },
      musicList: {
        hover: 'true',
      },
    },
    sortSettings: {
      cardList: {
        sortType: 'rare',
        order: 'descending',
      },
      musicList: {
        sortType: '',
        order: 'descending',
      },
    },
    defaultSearch: {
      cardList: {
        rare: ['DR', 'BR', 'UR', 'SR', 'R'],
        styleType: ['performer', 'moodMaker', 'cheerLeader', 'trickStar'],
        mood: ['happy', 'neutral', 'melow'],
        limited: ['spring', 'summer', 'autumn', 'winter', 'graduation', 'party', 'birthday', 'collaboration', 'prize', 'normal'],
        cardLevel: [0, 140],
        SALevel: [1, 14],
        SLevel: [1, 14],
        SAAP: [0, 20],
        SAP: [0, 20],
        releaseLevel: [1, 5],
        trainingLevel: [0, 4],
        memberName: ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi', 'ginko', 'kosuzu', 'hime', 'sachi'],
        favorite: [],
        releaseStatus: 'cardLevel',
      },
      skillList: {
        skillFilterType: null,
        skillType: {
          specialAppeal: [],
          skill: [],
          characteristic: [],
        },
        skillName: {
          specialAppeal: [],
          skill: [],
          characteristic: [],
        },
      },
      cardSeries: [],
    },
    styleHeadline: {
      103: {
        main: 'MAIN STYLE',
        side1: 'SIDE STYLE 1',
        side2: 'SIDE STYLE 2',
      },
      104: {
        main: 'MAIN STYLE',
        side1: 'SIDE STYLE 1',
      },
    },
    statusName: {
      none: 'なし',
      cardLevel: 'カード Lv.',
      SALevel: 'SA Lv.',
      SLevel: 'スキル Lv.',
      SAAP: 'スペシャルアピールAP',
      SAP: 'スキルAP',
      trainingLevel: '特訓',
      releaseLevel: '解放 Lv.',
    },
    styleType: {
      performer: 'パフォーマー',
      moodMaker: 'ムードメーカー',
      cheerLeader: 'チアリーダー',
      trickStar: 'トリックスター',
    },
    mood: {
      happy: 'ハッピー',
      neutral: 'ニュートラル',
      melow: 'メロウ',
    },
    attribute: {
      smile: 'スマイル',
      pure: 'ピュア',
      cool: 'クール',
    },
    limited: {
      spring: {
        filterLabel: 'SPRING LIMITED',
        cardLabel: '春限定',
      },
      summer: {
        filterLabel: 'SUMMER LIMITED',
        cardLabel: '夏限定',
      },
      autumn: {
        filterLabel: 'AUTUMN LIMITED',
        cardLabel: '秋限定',
      },
      winter: {
        filterLabel: 'WINTER LIMITED',
        cardLabel: '冬限定',
      },
      graduation: {
        filterLabel: 'GRADUATION LIMITED',
        cardLabel: '卒業限定',
      },
      party: {
        filterLabel: 'PARTY! LIMITED',
        cardLabel: '宴限定',
      },
      birthday: {
        filterLabel: 'BIRTHDAY LIMITED',
        cardLabel: '誕生日限定',
      },
      collaboration: {
        filterLabel: 'コラボ',
        cardLabel: 'コラボ限定',
      },
      prize: {
        filterLabel: 'GP PRIZE',
        cardLabel: 'ライブGP報酬',
      },
      normal: {
        filterLabel: '通常',
        cardLabel: '通常',
      },
    },
    maxCardLevel: {
      DR: [100, 120, 130, 140],
      BR: [80, 100, 110, 120],
      UR: [60, 80, 100, 110, 120],
      SR: [40, 60, 80, 90, 100],
      R: [30, 40, 60, 70, 80],
    },
    releasePoint: {
      DR: {
        point: 100,
        max: 400,
      },
      BR: {
        point: 75,
        max: 300,
      },
      UR: {
        point: 100,
        max: 400,
      },
      SR: {
        point: 50,
        max: 200,
      },
      R: {
        point: 25,
        max: 100,
      },
    },
    memberName: {
      kaho: {
        first: '日野下',
        last: '花帆',
      },
      sayaka: {
        first: '村野',
        last: 'さやか',
      },
      rurino: {
        first: '大沢',
        last: '瑠璃乃',
      },
      kozue: {
        first: '乙宗',
        last: '梢',
      },
      tsuzuri: {
        first: '夕霧',
        last: '綴理',
      },
      megumi: {
        first: '藤島',
        last: '慈',
      },
      ginko: {
        first: '百生',
        last: '吟子',
      },
      kosuzu: {
        first: '徒町',
        last: '小鈴',
      },
      hime: {
        first: '安養寺',
        last: '姫芽',
      },
      sachi: {
        first: '大賀美',
        last: '沙知',
      },
    },
    exclusionMember: ['sachi'],
    formationMember: {
      103: ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi'],
      104: ['ginko', 'kosuzu', 'hime', 'kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi'],
    },
    memberColor: {
      kaho: '#F8B500',
      sayaka: '#5383C3',
      rurino: '#E7609E',
      kozue: '#68BE8D',
      tsuzuri: '#BA2636',
      megumi: '#C8C2C6',
      ginko: '#A2D7DD',
      kosuzu: '#FAD764',
      hime: '#9D8DE2',
    },
    groupName: {
      hasunosora: '蓮ノ空女学院スクールアイドルクラブ',
      CeriseBouquet: 'スリーズブーケ',
      DOLLCHESTRA: 'DOLLCHESTRA',
      miraCraPark: 'みらくらぱーく！',
      kahomeguGelato: 'かほめぐ♡じぇらーと',
      hasunokyujitsu: '蓮ノ休日',
      rurinoTsuzuri: 'るりのとゆかいなつづりたち',
    },
    bonusSkillList: {
      ボルテージアップ: {
        text: ['ボルテージPt.を', 'pt.獲得するごとに、1pt.追加獲得'],
        skillLevel: 0,
        init: 11,
        ary: [5, 10, 15, 20, 25],
      },
      メンタルリカバー: {
        text: ['メンタルが', '減少するごとに、メンタルを1回復'],
        skillLevel: 0,
        init: 12,
        ary: [1, 4, 9, 13],
      },
      ビートハートアップ: {
        text: ['ビートハートの出現量+', '%'],
        skillLevel: 0,
      },
      LOVEボーナス: {
        text: ['ハート回収時のLOVE獲得量+', '%'],
        skillLevel: 0,
      },
    },
    memberData: {
      centerList: {},
    },
    selectCard: {
      kaho: {
        main: 'default',
        side1: 'default',
        side2: 'default',
      },
      sayaka: {
        main: 'default',
        side1: 'default',
        side2: 'default',
      },
      rurino: {
        main: 'default',
        side1: 'default',
        side2: 'default',
      },
      kozue: {
        main: 'default',
        side1: 'default',
        side2: 'default',
      },
      tsuzuri: {
        main: 'default',
        side1: 'default',
        side2: 'default',
      },
      megumi: {
        main: 'default',
        side1: 'default',
        side2: 'default',
      },
      ginko: {
        main: 'default',
        side1: 'default',
        side2: 'default',
      },
      kosuzu: {
        main: 'default',
        side1: 'default',
        side2: 'default',
      },
      hime: {
        main: 'default',
        side1: 'default',
        side2: 'default',
      },
    },
    settingCard: {
      // 何故か分からないがここを設定しないとエラーが出るため設定
      rare: 'DR',
      name: 'kaho',
      card: 'Prism Echo',
    },
    openCard: {
      name: 'kaho',
      style: 'main',
    },
    localStorageData: {
      musicData: {
        musicLevel: {},
      },
      cardList: {
        card: {},
        cardListFilter: {},
      },
      selectItemList: {
        item1: [],
        item2: [],
        item3: [],
      },
      siteSettings: {
        all: {},
        cardList: {},
        musicList: {},
      },
      sortSettings: {
        cardList: {},
        musicList: {},
      },
    },
    grandprixBonus: {
      clearRank: [1, 1.1, 1.2, 1.3],
      seasonFanLv: [0, 0.2, 0.275, 0.35, 0.425, 0.5, 0.55, 0.6, 0.65, 0.7],
      releaseLv: {
        BR: [0, 0.2, 0.3, 0.35, 0.4],
        UR: [0, 0.2, 0.3, 0.35, 0.4],
        SR: [0, 0.15, 0.25, 0.3, 0.35],
        R: [0, 0.1, 0.15, 0.2, 0.25],
      },
    },
    supportSkill: {},
    sortTypeList: {
      rare: 'レア度(標準)',
      //timeline: '時系列',
      //all: '総合',
      cardLevel: 'カードLv.',
      SALevel: 'SA Lv.',
      SLevel: 'スキルLv.',
      releaseLevel: '解放Lv.',
      releaseBonus: '解放Lv.ボーナス',
      trainingLevel: '特訓度',
      //smile: 'スマイル',
      //pure: 'ピュア',
      //cool: 'クール',
      //mental: 'メンタル',
      //kana: '五十音'
    },
    defaultCardList: [],
  }),
  getters: {
    defaultCard() {
      const cardStore = useCardStore();
      return cardStore.card;
    },
    skillList() {
      const skillStore = useSkillStore();
      return skillStore.skillList;
    },
    skillColor() {
      const skillStore = useSkillStore();
      return skillStore.skillColor;
    },
    musicList() {
      const musicStore = useMusicStore();
      return musicStore.musicList;
    },
    cardList() {
      let result = {
        DR: [],
        BR: [],
        UR: [],
        SR: [],
        R: [],
      };
      let result2 = [];

      for (const memberName in this.card) {
        if (memberName === 'default') {
          continue;
        }

        for (const rare in this.card[memberName]) {
          for (const cardName in this.card[memberName][rare]) {
            if (cardName === 'default') {
              continue;
            }

            this.card[memberName][rare][cardName].cardName = cardName;
            this.card[memberName][rare][cardName].rare = rare;
            this.card[memberName][rare][cardName].memberName = memberName;
            this.card[memberName][rare][cardName].limited = this.card[memberName][rare][cardName].gacha.period;
            this.card[memberName][rare][cardName].sortPoint = 0;
            result[rare].push(this.card[memberName][rare][cardName]);
          }
        }
      }

      for (const rare in result) {
        result2 = result2.concat(result[rare]);
      }

      return result2;
    },
    outputCardList() {
      let result = this.cardList.slice();
      let filterList;

      if (result.length > 0) {
        for (const searchKey in this.search.cardList) {
          filterList = this.search.cardList[searchKey];
          result = result.filter((cardData) => {
            if (/^(card|SA|S|release|training)Level$/.test(searchKey)) {
              return filterList[0] <= cardData.fluctuationStatus[searchKey] && cardData.fluctuationStatus[searchKey] <= filterList[1];
            } else if (searchKey === 'SAAP') {
              if (cardData.specialAppeal === undefined) {
                return true;
              } else {
                const AP = cardData.specialAppeal.AP - (this.maxCardLevel[cardData.rare].length - 2 > cardData.fluctuationStatus.trainingLevel ? cardData.fluctuationStatus.trainingLevel : this.maxCardLevel[cardData.rare].length - 3);
                return filterList[0] <= AP && AP <= filterList[1];
              }
            } else if (searchKey === 'SAP') {
              if (cardData.skill === undefined) {
                return true;
              } else {
                return filterList[0] <= cardData.skill.AP && cardData.skill.AP <= filterList[1];
              }
            } else if (searchKey === 'favorite') {
              if (this.search.cardList.favorite.length === 0) {
                return true;
              } else {
                return this.search.cardList.favorite.some((v) => {
                  return cardData.favorite.length === 0 ? false : cardData.favorite.indexOf(v) > -1;
                });
              }
            } else if (searchKey === 'releaseStatus') {
              if (this.search.cardList.releaseStatus === 'none') {
                return true;
              }

              if (cardData.fluctuationStatus.cardLevel === 0) {
                return false;
              }

              if (this.search.cardList.releaseStatus === 'cardLevel') {
                if (this.maxCardLevel[cardData.rare][this.maxCardLevel[cardData.rare].length - 1] === cardData.fluctuationStatus.cardLevel) {
                  return false;
                } else {
                  return this.maxCardLevel[cardData.rare][cardData.fluctuationStatus.trainingLevel] > cardData.fluctuationStatus.cardLevel;
                }
              }

              if (this.search.cardList.releaseStatus === 'trainingLevel') {
                if (this.maxCardLevel[cardData.rare][this.maxCardLevel[cardData.rare].length - 1] === cardData.fluctuationStatus.cardLevel) {
                  return false;
                } else {
                  return this.maxCardLevel[cardData.rare][cardData.fluctuationStatus.trainingLevel] === cardData.fluctuationStatus.cardLevel;
                }
              }

              if (this.search.cardList.releaseStatus === 'releaseLevel') {
                if (cardData.fluctuationStatus.releasePoint === 0 || cardData.fluctuationStatus.releaseLevel === 5) {
                  return false;
                } else {
                  return this.releasePoint[cardData.rare].point <= cardData.fluctuationStatus.releasePoint;
                }
              }

              return true;
            } else {
              return filterList.some((val) => {
                return cardData[searchKey] === val;
              });
            }
          });
        }
      }

      if (result.length > 0) {
        for (const searchKey in this.search.skillList[this.search.skillList.skillFilterType]) {
          filterList = this.search.skillList[this.search.skillList.skillFilterType][searchKey];

          if (filterList.length === 0) {
            continue;
          }

          result = result.filter((cardData) => {
            if (cardData[searchKey] !== undefined) {
              return filterList.some((val) => {
                if (this.search.skillList.skillFilterType === 'skillType') {
                  let skillID = null;

                  for (skillID in this.skillColor) {
                    if (this.skillColor[skillID].name === val) {
                      break;
                    }
                  }

                  return this.skillList[cardData[searchKey].name][cardData[searchKey].ID].detail.type.some((key) => key === skillID);
                } else {
                  return cardData[searchKey].name === val;
                }
              });
            } else {
              return false;
            }
          });
        }
      }

      if (result.length > 0) {
        filterList = this.search.cardSeries;

        if (filterList.length > 0) {
          result = result.filter((cardData) => {
            return filterList.some((val) => {
              return cardData.series === val;
            });
          });
        }
      }

      if (result.length > 0) {
        if (this.sortSettings.cardList.sortType === 'rare') {
          if (this.sortType === 'ascending') {
            result.reverse();
          }
        } else {
          let aa;
          let bb;
          const mergeList = [];

          if (this.sortSettings.cardList.sortType === 'releaseBonus') {
            result = result.filter((cardData) => {
              if (cardData.rare === 'DR' || cardData.specialAppeal === undefined) {
                mergeList.push(cardData);
                return false;
              } else {
                return true;
              }
            });
          }

          result.sort((a, b) => {
            if (this.sortSettings.cardList.sortType === 'releaseBonus') {
              aa = a.fluctuationStatus.releaseLevel - 1;
              bb = b.fluctuationStatus.releaseLevel - 1;

              if (this.sortSettings.cardList.order === 'ascending') {
                return this.grandprixBonus.releaseLv[a.rare][aa] < this.grandprixBonus.releaseLv[b.rare][bb] ? -1 : this.grandprixBonus.releaseLv[a.rare][aa] > this.grandprixBonus.releaseLv[b.rare][bb] ? 1 : 0;
              } else {
                return this.grandprixBonus.releaseLv[a.rare][aa] > this.grandprixBonus.releaseLv[b.rare][bb] ? -1 : this.grandprixBonus.releaseLv[a.rare][aa] < this.grandprixBonus.releaseLv[b.rare][bb] ? 1 : 0;
              }
            } else if (/(card|SA|skill|release|training)Level/.test(this.sortSettings.cardList.sortType)) {
              aa = a.fluctuationStatus[this.sortSettings.cardList.sortType];
              bb = b.fluctuationStatus[this.sortSettings.cardList.sortType];

              if (this.sortSettings.cardList.order === 'ascending') {
                return aa < bb ? -1 : aa > bb ? 1 : 0;
              } else {
                return aa > bb ? -1 : aa < bb ? 1 : 0;
              }
            } else {
              aa = a[this.sortSettings.cardList.sortType];
              bb = b[this.sortSettings.cardList.sortType];

              if (this.sortSettings.cardList.order === 'ascending') {
                return aa < bb ? -1 : aa > bb ? 1 : 0;
              } else {
                return aa > bb ? -1 : aa < bb ? 1 : 0;
              }
            }
          });

          if (mergeList.length > 0) {
            result = result.concat(mergeList);
          }
        }
      }

      this.localStorageData.cardList.cardListFilter = {
        cardList: this.search.cardList,
        skillList: this.search.skillList,
        cardSeries: this.search.cardSeries,
      };

      this.setLocalStorage('llllMgr_cardListFilter', this.localStorageData.cardList.cardListFilter);

      return result;
    },
    specialAppealNameList() {
      return this.makeSkillFilterList('specialAppeal');
    },
    skillNameList() {
      return this.makeSkillFilterList('skill');
    },
    characteristicList() {
      return this.makeSkillFilterList('characteristic');
    },
    cardSeriesList() {
      return this.makeSkillFilterList('series');
    },
    setSelectCard() {
      //console.log(this.card[this.openCard.name][this.openCard.style])
    },
    makeFullName() {
      return (name) => {
        return `${this.memberName[name].first} ${this.memberName[name].last}`;
      };
    },
    makeSkillText() {
      return (target, option) => {
        let result = '';
        const skillData = option !== undefined && option.addSkillNum !== undefined ? this.settingCardData[target].addSkill[option.addSkillNum] : this.settingCardData[target];
        const skillTextList = this.skillList[skillData.name][skillData.ID].text;

        for (let i = 0; i < skillTextList.length; i++) {
          result += skillTextList[i];

          if (i < skillTextList.length - 1) {
            result += skillData.detail[i][option !== undefined && option.targetSkillLv !== undefined ? option.targetSkillLv : this.settingCardData.fluctuationStatus[target === 'specialAppeal' ? 'SALevel' : 'SLevel'] - 1];
          }
        }

        return result;
      };
    },
    settingCardData() {
      return this.card[this.settingCard.name][this.settingCard.rare][this.settingCard.card];
    },
    setMaxTrainingLevel() {
      return this.maxCardLevel[this.settingCard.rare].length - 1;
    },
    changeMaxCardLevel() {
      return this.maxCardLevel[this.settingCard.rare][this.settingCardData.fluctuationStatus.trainingLevel];
    },
    changeMinCardLevel() {
      if (this.settingCardData.fluctuationStatus.trainingLevel - 1 < 0) {
        return this.maxCardLevel[this.settingCard.rare][0];
      } else {
        return this.maxCardLevel[this.settingCard.rare][this.settingCardData.fluctuationStatus.trainingLevel - 1];
      }
    },
    changeSkillLevel() {
      return this.settingCardData.fluctuationStatus.releaseLevel + 9;
    },
    cardParam() {
      return (style, target) => {
        if (target === undefined) {
          target = {
            memberName: this.settingCard.name,
            rare: this.settingCard.rare,
            cardName: this.settingCard.card,
          };
        }

        const selectCard = this.card[target.memberName][target.rare][target.cardName];
        target.trainingLevel = selectCard.fluctuationStatus.trainingLevel;
        target.cardLevel = selectCard.fluctuationStatus.cardLevel;
        const maxStatus = selectCard.uniqueStatus[style];
        const magnification = {
          DR: [0.7, 1],
          BR: [0.7, 1],
          UR: [0.5, 0.7, 1],
          SR: [0.5, 0.7, 1],
          R: [0.5, 0.7, 1],
        };

        if (target.cardLevel === 0) {
          return 0;
        } else if (target.trainingLevel >= this.maxCardLevel[target.rare].length - 2) {
          return style === 'mental' ? maxStatus : Math.ceil(maxStatus * (1 + (target.cardLevel - this.maxCardLevel[target.rare][this.maxCardLevel[target.rare].length - 3]) / 100));
        } else if (target.trainingLevel === magnification[target.rare].length - 1) {
          return Math.ceil(maxStatus * magnification[target.rare][target.trainingLevel] - (maxStatus / 100) * 1.5 * (this.maxCardLevel[target.rare][target.trainingLevel] - target.cardLevel));
        } else if (target.trainingLevel === 0) {
          if (/^(D|B)R$/.test(target.rare)) {
            return Math.ceil(maxStatus * magnification[target.rare][target.trainingLevel] - ((maxStatus * magnification[target.rare][target.trainingLevel] - Math.ceil(maxStatus / (style === 'mental' ? 5 : 100))) / (this.maxCardLevel[target.rare][target.trainingLevel] - 1)) * (this.maxCardLevel[target.rare][target.trainingLevel] - target.cardLevel));
          } else {
            return Math.ceil(maxStatus * magnification[target.rare][target.trainingLevel] - ((maxStatus / 2 - Math.ceil(maxStatus / (style === 'mental' ? 5 : 100))) / (this.maxCardLevel[target.rare][target.trainingLevel] - 1)) * (this.maxCardLevel[target.rare][target.trainingLevel] - target.cardLevel));
          }
        } else {
          return Math.ceil(maxStatus * magnification[target.rare][target.trainingLevel] - (maxStatus / (target.rare === 'R' ? 200 : 100)) * (this.maxCardLevel[target.rare][target.trainingLevel] - target.cardLevel));
        }
      };
    },
    makeTotalMasteryLv() {
      return (memberName) => {
        let result = 0;
        const bonusSkill = {
          ビートハートアップ: 0,
          ボルテージアップ: 0,
          メンタルリカバー: 0,
          LOVEボーナス: 0,
        };

        for (const musicTitle of this.memberData.centerList[memberName].centerMusic) {
          result += this.musicList[musicTitle].level;
          bonusSkill[this.musicList[musicTitle].bonusSkill] += Math.floor(this.musicList[musicTitle].level / 10);
        }

        for (const bonusSkillName in bonusSkill) {
          this.memberData.centerList[memberName].bonusSkill[bonusSkillName] = bonusSkill[bonusSkillName];
        }

        /*for (const musicTitle of this.memberData.centerList[memberName].centerMusic) {
          result += this.musicList[musicTitle].level;
          this.supportSkill[memberName][this.musicList[musicTitle].bonusSkill] += Math.floor(this.musicList[musicTitle].level / 10);
        }

        for (const bonusSkillName in this.supportSkill[memberName]) {
          this.memberData.centerList[memberName].bonusSkill[bonusSkillName] = this.supportSkill[memberName][bonusSkillName];
        }*/

        return result;
      };
    },
    makeReleaseDate() {
      const date = {
        year: this.musicList[this.selectMusicTitle].musicData.releaseDate.year,
        month: this.musicList[this.selectMusicTitle].musicData.releaseDate.month,
        date: this.musicList[this.selectMusicTitle].musicData.releaseDate.date,
      };

      return `${date.year}年${date.month}月${date.date}日(${['日', '月', '火', '水', '木', '金', '土'][new Date(date.year, date.month - 1, date.date).getDay()]})`;
    },
    setCardIllust() {
      return `${this.conversion(this.settingCard.card)}_${this.memberName[this.settingCard.name].last}_覚醒後`;
    },
    outputBonusSkillList() {
      const result = {};

      for (const targetBonusSkill in this.bonusSkillList) {
        if (this.memberData.centerList[this.checkMasteryMember].bonusSkill[targetBonusSkill] + this.supportSkill[this.checkMasteryMember][targetBonusSkill] > 0) {
          result[targetBonusSkill] = this.bonusSkillList[targetBonusSkill];
          result[targetBonusSkill].skillLevel = this.memberData.centerList[this.checkMasteryMember].bonusSkill[targetBonusSkill] + this.supportSkill[this.checkMasteryMember][targetBonusSkill];
        }
      }

      return result;
    },
    isDarkMode() {
      return this.siteSettings.all.darkMode === 'dark';
    },
    /*makeMusicList() {
      return (selectSkillList) => {
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
      }
    },*/
  },
  actions: {
    init() {
      const bonusSkillList = {};

      for (const key in this.bonusSkillList) {
        bonusSkillList[key] = 0;
      }

      for (const name in this.memberName) {
        this.supportSkill[name] = structuredClone(bonusSkillList);
        this.memberData.centerList[name] = {
          centerMusic: [],
          bonusSkill: structuredClone(bonusSkillList),
        };
      }

      this.search = structuredClone(this.defaultSearch);
      this.card = structuredClone(this.defaultCard);
      this.getLocalStorage();
      this.setSupportSkillLevel();
    },
    setLocalStorage(setLocalStorageName, value) {
      localStorage[setLocalStorageName] = JSON.stringify(value);
    },
    getLocalStorage(importData) {
      const isImportData = importData !== undefined;

      if (localStorage.llllMgr_musicData !== undefined || (isImportData && importData.musicData !== undefined)) {
        if (!isImportData) {
          this.localStorageData.musicData = JSON.parse(localStorage.llllMgr_musicData);

          for (const musicTitle in this.musicList) {
            this.musicList[musicTitle].level = this.localStorageData.musicData.musicLevel[musicTitle];
            this.memberData.centerList[this.musicList[musicTitle].center].centerMusic.push(musicTitle);
          }
        } else if (importData.musicData !== undefined) {
          this.localStorageData.musicData = importData.musicData;

          for (const musicTitle in this.musicList) {
            this.musicList[musicTitle].level = this.localStorageData.musicData.musicLevel[musicTitle];
          }

          this.setLocalStorage('llllMgr_musicData', this.localStorageData.musicData);
        }
      } else {
        for (const musicTitle in this.musicList) {
          this.memberData.centerList[this.musicList[musicTitle].center].centerMusic.push(musicTitle);
        }
      }

      if (localStorage.llllMgr_card !== undefined || (isImportData && importData.cardList !== undefined && importData.cardList.card !== undefined)) {
        let isRemakeCardData = false;

        if (!isImportData) {
          this.localStorageData.cardList.card = this.makeExportCardData(JSON.parse(localStorage.llllMgr_card));
          isRemakeCardData = true;
        } else if (importData.cardList !== undefined && importData.cardList.card !== undefined) {
          this.localStorageData.cardList.card = this.makeExportCardData(importData.cardList.card);
          this.setLocalStorage('llllMgr_card', this.localStorageData.cardList.card);
          isRemakeCardData = true;
        }

        if (isRemakeCardData) {
          for (const memberName in this.card) {
            for (const rare in this.card[memberName]) {
              if (this.localStorageData.cardList.card[memberName] !== undefined) {
                for (const cardName in this.localStorageData.cardList.card[memberName][rare]) {
                  this.card[memberName][rare][cardName].fluctuationStatus = this.localStorageData.cardList.card[memberName][rare][cardName].fluctuationStatus;

                  if (this.localStorageData.cardList.card[memberName][rare][cardName].fluctuationStatus.releasePoint === undefined) {
                    this.card[memberName][rare][cardName].fluctuationStatus.releasePoint = 0;
                  }

                  if (this.localStorageData.cardList.card[memberName][rare][cardName].favorite !== undefined) {
                    this.card[memberName][rare][cardName].favorite = this.localStorageData.cardList.card[memberName][rare][cardName].favorite;
                  }
                }
              }
            }
          }
        }
      }

      if (localStorage.llllMgr_cardListFilter !== undefined || (isImportData && importData.cardList !== undefined && importData.cardList.cardListFilter !== undefined)) {
        let isRemakeCardListFilter = false;

        if (!isImportData) {
          const localStorageData = JSON.parse(localStorage.llllMgr_cardListFilter);

          if (localStorageData.skillList.skillFilterType !== undefined) {
            this.localStorageData.cardList.cardListFilter = localStorageData;
          } else {
            this.localStorageData.cardList.cardListFilter = {
              cardList: localStorageData.cardList,
              cardSeries: localStorageData.cardSeries,
              skillList: {
                skillFilterType: 'skillName',
                skillType: {
                  specialAppeal: [],
                  skill: [],
                  characteristic: [],
                },
                skillName: localStorageData.skillList,
              },
            };
          }

          isRemakeCardListFilter = true;
        } else if (importData.cardList !== undefined && importData.cardList.cardListFilter !== undefined) {
          if (importData.cardList.cardListFilter.skillFilterType !== undefined) {
            this.localStorageData.cardList.cardListFilter = importData.cardList.cardListFilter;
          } else {
            this.localStorageData.cardList.cardListFilter.cardList = importData.cardList.cardListFilter.cardList;
            this.localStorageData.cardList.cardListFilter.cardSeries = importData.cardList.cardListFilter.cardSeries;
            this.localStorageData.cardList.cardListFilter.skillList.skillFilterType = importData.cardList.cardListFilter.skillList.skillFilterType;
            this.localStorageData.cardList.cardListFilter.skillList.skillName = importData.cardList.cardListFilter.skillList.skillName;
            this.localStorageData.cardList.cardListFilter.skillList.skillType = importData.cardList.cardListFilter.skillList.skillType;
          }

          this.setLocalStorage('llllMgr_cardListFilter', this.localStorageData.cardList.cardListFilter);
          isRemakeCardListFilter = true;
        }

        if (isRemakeCardListFilter) {
          if (this.localStorageData.cardList.cardListFilter.cardList === undefined) {
            for (const filterName in this.search.cardList) {
              this.search.cardList[filterName] = this.localStorageData.cardList.cardListFilter[filterName];
            }
          } else {
            for (const filterName in this.search.cardList) {
              if (this.localStorageData.cardList.cardListFilter.cardList[filterName] !== undefined) {
                this.search.cardList[filterName] = this.localStorageData.cardList.cardListFilter.cardList[filterName];
              }
            }

            for (const filterName in this.search.skillList) {
              if (this.localStorageData.cardList.cardListFilter.skillList[filterName]) {
                this.search.skillList[filterName] = this.localStorageData.cardList.cardListFilter.skillList[filterName];
              } else {
                this.search.skillList[filterName] = [];
              }
            }

            this.search.cardSeries = this.localStorageData.cardList.cardListFilter.cardSeries;
          }
        }
      }

      if (localStorage.llllMgr_selectItemList !== undefined || (isImportData && importData.selectItemList !== undefined)) {
        let getSelectItemList = null;

        if (!isImportData) {
          getSelectItemList = JSON.parse(localStorage.llllMgr_selectItemList);
        } else if (importData.selectItemList !== undefined) {
          getSelectItemList = importData.selectItemList;
          this.setLocalStorage('llllMgr_selectItemList', getSelectItemList);
        }

        if (getSelectItemList !== null) {
          for (let i = 1; i <= 3; i++) {
            this.localStorageData.selectItemList[`item${i}`] = getSelectItemList[`item${i}`];
          }
        }
      }

      if (localStorage.llllMgr_siteSettings !== undefined || (isImportData && importData.siteSettings !== undefined)) {
        let getSiteSettings = null;

        if (!isImportData) {
          getSiteSettings = JSON.parse(localStorage.llllMgr_siteSettings);
        } else if (importData.siteSettings !== undefined) {
          getSiteSettings = importData.siteSettings;

          for (const key in this.siteSettings) {
            if (getSiteSettings[key] === undefined) {
              getSiteSettings[key] = this.siteSettings[key];
            }
          }

          this.setLocalStorage('llllMgr_siteSettings', getSiteSettings);
        }

        if (getSiteSettings !== null) {
          for (const siteSettingCategoryName in this.siteSettings) {
            for (const settingName in this.siteSettings[siteSettingCategoryName]) {
              this.localStorageData.siteSettings[siteSettingCategoryName][settingName] = getSiteSettings[siteSettingCategoryName][settingName];
            }
          }

          this.siteSettings = this.localStorageData.siteSettings;
        }
      }

      if (localStorage.llllMgr_sortSettings !== undefined || (isImportData && importData.sortSettings !== undefined)) {
        let getSortSettings = null;

        if (!isImportData) {
          getSortSettings = JSON.parse(localStorage.llllMgr_sortSettings);
        } else if (importData.sortSettings !== undefined) {
          getSortSettings = importData.sortSettings;

          for (const iterator of ['card', 'music']) {
            if (getSortSettings[`${iterator}List`] === undefined) {
              getSortSettings[`${iterator}List`] = this.sortSettings[`${iterator}List`];
            }
          }

          this.setLocalStorage('llllMgr_sortSettings', getSortSettings);
        }

        if (getSortSettings !== null) {
          for (const sortSettingCategoryName in this.sortSettings) {
            for (const settingName in this.sortSettings[sortSettingCategoryName]) {
              this.localStorageData.sortSettings[sortSettingCategoryName][settingName] = getSortSettings[sortSettingCategoryName][settingName];
            }
          }

          this.sortSettings = this.localStorageData.sortSettings;
        }
      }
    },
    deleteLocalStorage(deleteDataName) {
      if (deleteDataName === 'music') {
        this.localStorageData.musicData.musicLevel = {};
        localStorage.removeItem('llllMgr_musicData');
      } else if (deleteDataName === 'card') {
        this.localStorageData.cardList.card = {};
        this.localStorageData.cardList.cardListFilter = {};
        localStorage.removeItem('llllMgr_card');
        localStorage.removeItem('llllMgr_cardListFilter');
      } else {
        localStorage.removeItem('llllMgr_selectItemList');
      }
    },
    showModalEvent(showModalName) {
      this.switchDialog(showModalName);
      this.showModalName = showModalName;
    },
    setLevel(a, e) {
      this.settingCardData.fluctuationStatus[a] = e.target.value;
    },
    cardSelect(memberName, rare, selectedCard) {
      this.settingCard.rare = rare;
      this.settingCard.name = memberName;
      this.settingCard.card = selectedCard;
    },
    toBool(value) {
      return value === 'true';
    },
    conversion(name) {
      return /!/.test(name) ? name.replace(/!/g, '！') : /\//.test(name) ? name.replace(/\//g, '／') : name;
    },
    setOpenCard(name, style) {
      this.openCard.name = name;
      this.openCard.style = style;
    },
    aaa() {
      for (const rare of this.rare) {
        if (this.selectCard[this.openCard.name][this.openCard.style] in this.card[this.openCard.name][rare]) {
          this.selectCard[this.openCard.name][this.openCard.style] = this.card[this.openCard.name][rare][this.selectCard[this.openCard.name][this.openCard.style]];
          break;
        }
      }
    },
    searchRarity(memberName, cardName) {
      let result = 'default';

      if (cardName === result) {
        return result;
      }

      for (const rare of this.rare) {
        if (cardName in this.card[memberName][rare]) {
          result = rare;
          break;
        }
      }

      return result;
    },
    searchSelectCard(name, style) {
      return this.selectCard[name][style];
    },
    makeExportCardData(data) {
      let result = {};
      const card = data !== undefined ? data : this.card;

      for (const memberName in card) {
        result[memberName] = {};

        for (const rare in card[memberName]) {
          result[memberName][rare] = {};

          for (const cardName in card[memberName][rare]) {
            result[memberName][rare][cardName] = {
              fluctuationStatus: card[memberName][rare][cardName].fluctuationStatus,
              favorite: card[memberName][rare][cardName].favorite,
            };
          }
        }
      }

      return result;
    },
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
    },
    valueChange(target, val) {
      if (target === 'musicLevel') {
        this.musicList[this.selectMusicTitle].level = val;

        for (const musicTitle in this.musicList) {
          this.localStorageData.musicData.musicLevel[musicTitle] = this.musicList[musicTitle].level;
        }

        this.setLocalStorage('llllMgr_musicData', this.localStorageData.musicData);
      } else {
        this.settingCardData.fluctuationStatus[target] = val;

        if (target === 'trainingLevel') {
          if (this.settingCardData.fluctuationStatus.cardLevel < this.changeMinCardLevel || this.settingCardData.fluctuationStatus.cardLevel > this.changeMaxCardLevel) {
            this.settingCardData.fluctuationStatus.cardLevel = this.changeMinCardLevel;
          }
        } else if (target === 'releaseLevel') {
          if (this.settingCardData.fluctuationStatus.SALevel > this.changeSkillLevel) {
            this.settingCardData.fluctuationStatus.SALevel = this.changeSkillLevel;
          }

          if (this.settingCardData.fluctuationStatus.SLevel > this.changeSkillLevel) {
            this.settingCardData.fluctuationStatus.SLevel = this.changeSkillLevel;
          }
        }

        this.setLocalStorage('llllMgr_card', this.makeExportCardData());
      }
    },
    changeFav(target) {
      if (this.settingCardData.favorite.some((v) => v === target)) {
        this.settingCardData.favorite = this.settingCardData.favorite.filter((v) => {
          return v !== target;
        });
      } else {
        this.settingCardData.favorite.push(target);
      }

      this.setLocalStorage('llllMgr_card', this.makeExportCardData());
    },
    setSupportSkillLevel() {
      const cardDataList = this.cardList.filter((targetCardData) => {
        return targetCardData.uniqueStatus.supportSkill !== undefined;
      });

      for (const cardData of cardDataList) {
        for (const targetBonusSkill in this.supportSkill[cardData.memberName]) {
          this.supportSkill[cardData.memberName][targetBonusSkill] = 0;

          if (cardData.fluctuationStatus.cardLevel > 0) {
            this.supportSkill[cardData.memberName][targetBonusSkill] = cardData.uniqueStatus.supportSkill.supportSkillList[targetBonusSkill].initLevel;

            if (cardData.fluctuationStatus.releaseLevel >= cardData.uniqueStatus.supportSkill.supportSkillList[targetBonusSkill].levelUp) {
              this.supportSkill[cardData.memberName][targetBonusSkill] += cardData.uniqueStatus.supportSkill.supportSkillList[targetBonusSkill].upLevel;
            }
          }
        }
      }
    },
    setBonusSkillLevel(memberName, skillName) {
      return this.memberData.centerList[memberName].bonusSkill[skillName] + this.supportSkill[memberName][skillName];
    },
    /*cardParam(style, target) {
      if (target === undefined) {
        target = {
          memberName: this.settingCard.name,
          rare: this.settingCard.rare,
          card: this.settingCard.card
        }
      }

      const selectCard = this.card[target.memberName][target.rare][target.card];
      return selectCard.uniqueStatus[style] + (selectCard.fluctuationStatus.cardLevel - 1) * (target.rare === 'R' ? 25 : 30);
    },*/
    makeSkillFilterList(target) {
      const result = [];

      for (const key of this.cardList) {
        if (key[target] !== undefined && result.indexOf(target === 'series' ? key[target] : key[target].name) === -1) {
          result.push(target === 'series' ? key[target] : key[target].name);
        }
      }

      return result.sort();
    },
    isExclusionMember(targetMember) {
      return this.exclusionMember.some((val) => val === targetMember);
    },
    resetMusicFilter(resetName) {
      if (/^(SA|S)(AP|Level)|(release|card|training)Level$/.test(resetName)) {
        this.search.cardList[resetName] = [this.defaultSearch.cardList[resetName][0], this.defaultSearch.cardList[resetName][1]];
      } else if (this.search.cardList[resetName].length === 0) {
        if (/^rare|favorite|releaseStatus$/.test(resetName)) {
          this.search.cardList[resetName] = this[resetName];
        } else {
          for (const key in this[resetName]) {
            this.search.cardList[resetName].push(key);
          }
        }
      } else {
        this.search.cardList[resetName] = [];
      }
    },
    dataReset(resetList) {
      for (const iterator of resetList) {
        if (iterator === 'card') {
          console.log(this.card);
        } else if (iterator === 'cardListFilter') {
          this.search = structuredClone(this.defaultSearch);
        }
      }
    },
    changeSettings(setLocalStorageName) {
      this.setLocalStorage(`llllMgr_${setLocalStorageName}`, this[setLocalStorageName]);
    },
  },
});
