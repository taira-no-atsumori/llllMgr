import { defineStore } from 'pinia';
import { useCardStore } from './cardList';
import { useSkillStore } from './skillList';
import { useMusicStore } from './musicList';

export const useStoreCounter = defineStore('store', {
  state: () => ({
    dialog: false,
    showModalName: false,
    updateData: false,
    selectCharactor: '',
    selectMusicTitle: undefined,
    rarity: ['DR', 'UR', 'SR', 'R'],
    favorite: ['heart', 'circle', 'triangle', 'square', 'rhombus', 'star'],
    search: {
      cardList: {
        rare: ['DR', 'UR', 'SR', 'R'],
        styleType: ['performer', 'moodMaker', 'cheerLeader', 'trickStar'],
        mood: ['happy', 'neutral', 'melow'],
        cardLevel: [0, 120],
        SALevel: [1, 14],
        SLevel: [1, 14],
        SAAP: [0, 10],
        SAP: [0, 10],
        releaseLevel: [1, 5],
        memberName: ['kaho', 'sayaka', 'rurino', 'kozue', 'tsuzuri', 'megumi'],
        favorite: []
      },
      skillList: {
        specialAppeal: [],
        skill: [],
        //characteristic: []
      },
      cardSeries: []
    },
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
      cardList: {
        card: {},
        cardListFilter: {}
      }
    },
    defaultCardList: []
  }),
  getters: {
    card() {
      const cardStore = useCardStore();
      return cardStore.card;
    },
    skillList() {
      const skillStore = useSkillStore();
      return skillStore.skillList;
    },
    musicList() {
      const musicStore = useMusicStore();
      return musicStore.musicList;
    },
    cardList() {
      let result = {
        DR: [],
        UR: [],
        SR: [],
        R: []
      };
      let result2 = [];

      for (const memberName in this.card) {
        if (memberName !== 'default') {
          for (const rare in this.card[memberName]) {
            for (const cardName in this.card[memberName][rare]) {
              if (cardName !== 'default') {
                this.card[memberName][rare][cardName].cardName = cardName;
                this.card[memberName][rare][cardName].rare = rare;
                this.card[memberName][rare][cardName].memberName = memberName;
                result[rare].push(this.card[memberName][rare][cardName]);
              }
            }
          }
        }
      }

      for (const rare in result) {
        result2 = result2.concat(result[rare]);
      }

      return result2;
    },
    outputCardList() {
      let result = this.cardList;
      let filterList;

      if (result.length > 0) {
        for (const searchKey in this.search.cardList) {
          filterList = this.search.cardList[searchKey];
          result = result.filter((cardData) => {
            if (/^cardLevel|SALevel|SLevel|releaseLevel$/.test(searchKey)) {
              return filterList[0] <= cardData.fluctuationStatus[searchKey] && cardData.fluctuationStatus[searchKey] <= filterList[1];
            } else if (searchKey === 'SAAP') {
              const AP = cardData.specialAppeal.AP - cardData.fluctuationStatus.trainingLevel;
              return filterList[0] <= AP && AP <= filterList[1];
            } else if (searchKey === 'SAP') {
              const AP = cardData.skill.AP - cardData.fluctuationStatus.trainingLevel;
              return filterList[0] <= AP && AP <= filterList[1];
            } else if (searchKey === 'favorite') {
              if (this.search.cardList.favorite.length === 0) {
                return true;
              } else {
                return this.search.cardList.favorite.some((v) => {
                  return cardData.favorite.length === 0 ? false : cardData.favorite.indexOf(v) > -1;
                });
              }
            } else {
              return filterList.some((val) => {
                return cardData[searchKey] === val;
              });
            }
          });
        }
      }

      if (result.length > 0) {
        for (const searchKey in this.search.skillList) {
          filterList = this.search.skillList[searchKey];

          if (filterList.length > 0) {
            result = result.filter((cardData) => {
              return filterList.some((val) => {
                return cardData[searchKey].name === val;
              });
            });
          }
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

      this.setLocalStorage('llllMgr_cardListFilter', {
        cardList: this.search.cardList,
        skillList: this.search.skillList,
        cardSeries: this.search.cardSeries
      });

      return result;
    },
    specialAppealNameList() {
      return this.makeSkillFilterList('specialAppeal');
    },
    skillNameList() {
      return this.makeSkillFilterList('skill');
    },
    cardSeriesList() {
      return this.makeSkillFilterList('series');
    },
    setSelectCard() {
      console.log(this.card[this.abc.name][this.abc.style])
    },
    makeFullName() {
      return (name) => {
        return `${this.charactorName[name].first} ${this.charactorName[name].last}`;
      }
    },
    makeSkillText() {
      return (target) => {
        let result = '';
        const skillData = this.settingCardData[target];
        const skillTextList = this.skillList[skillData.name][skillData.ID];

        for (let i = 0; i < skillTextList.length; i++) {
          result += skillTextList[i];
          
          if (i < skillTextList.length - 1) {
            result += skillData.detail[i][this.settingCardData.fluctuationStatus[target === 'specialAppeal' ? 'SALevel' : 'SLevel'] - 1];
          }
        }

        return result;
      }
    },
    settingCardData() {
      return this.card[this.settingCard.name][this.settingCard.rare][this.settingCard.card];
    },
    setMaxTrainingLevel() {
      return this.settingCard.rare === 'DR' ? 1 : 2;
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
            cardName: this.settingCard.card
          }
        }

        const selectCard = this.card[target.memberName][target.rare][target.cardName];
        return selectCard.uniqueStatus[style] + (selectCard.fluctuationStatus.cardLevel - 1) * (target.rare === 'R' ? 25 : 30);
      }
    },
    mentalCul() {
      return (target) => {
        if (target === undefined) {
          target = {
            memberName: this.settingCard.name,
            rare: this.settingCard.rare,
            cardName: this.settingCard.card
          }
        }

        const selectCard = this.card[target.memberName][target.rare][target.cardName];

        if (this.settingCard.rare !== 'R') {
          return selectCard.uniqueStatus.mental + (selectCard.fluctuationStatus.cardLevel - 1) * 3;
        } else {
          return selectCard.uniqueStatus.mental + Math.ceil((selectCard.fluctuationStatus.cardLevel - 1) / 2) * 2  + Math.floor((selectCard.fluctuationStatus.cardLevel - 1) / 2) * 3;
        }
      }
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
    makeReleaseDate() {
      const date = {
        year: this.musicList[this.selectMusicTitle].musicData.releaseDate.year,
        month: this.musicList[this.selectMusicTitle].musicData.releaseDate.month,
        date: this.musicList[this.selectMusicTitle].musicData.releaseDate.date
      };

      return `${date.year}年${date.month}月${date.date}日(${(['日', '月', '火', '水', '木', '金', '土'][new Date(date.year, date.month - 1, date.date).getDay()])})`;
    },
    setCardIllust() {
      return `${this.settingCard.card}${this.charactorName[this.settingCard.name].last}_覚醒`;
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
    makeTotalSkillLv(memberName) {
      let result = 0;
      
      for (const musicTitle of this.memberData.centerList[memberName].centerMusic) {
        result += this.musicList[musicTitle].level;
      }

      return result;
    },
    init() {
      /*for (const name in this.charactorName) {
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
      }*/

      this.getLocalStorage();
    },
    setLocalStorage(setLocalStorageName, value) {
      localStorage[setLocalStorageName] = JSON.stringify(value);
    },
    getLocalStorage() {
      if (localStorage.llllMgr_musicData === undefined) {
        for (const musicTitle in this.musicList) {
          this.memberData.centerList[this.musicList[musicTitle].center].centerMusic.push(musicTitle);
        }
      } else {
        this.localStorageData.musicData = JSON.parse(localStorage.llllMgr_musicData);

        for (const musicTitle in this.musicList) {
          this.musicList[musicTitle].level = this.localStorageData.musicData.musicLevel[musicTitle];
          this.memberData.centerList[this.musicList[musicTitle].center].centerMusic.push(musicTitle);
        }
      }

      if (localStorage.llllMgr_card !== undefined) {
        this.localStorageData.cardList.card = JSON.parse(localStorage.llllMgr_card);

        for (const memberName in this.card) {
          for (const rare in this.card[memberName]) {
            for (const cardName in this.localStorageData.cardList.card[memberName][rare]) {
              this.card[memberName][rare][cardName].fluctuationStatus = this.localStorageData.cardList.card[memberName][rare][cardName].fluctuationStatus;

              if (this.localStorageData.cardList.card[memberName][rare][cardName].favorite !== undefined) {
                this.card[memberName][rare][cardName].favorite = this.localStorageData.cardList.card[memberName][rare][cardName].favorite;
              }
            }
          }
        }
      }

      if (localStorage.llllMgr_cardListFilter !== undefined) {
        this.localStorageData.cardList.cardListFilter = JSON.parse(localStorage.llllMgr_cardListFilter);

        if (this.localStorageData.cardList.cardListFilter.cardList === undefined) {
          for (const filterName in this.search.cardList) {
            this.search.cardList[filterName] = this.localStorageData.cardList.cardListFilter[filterName];
          }
        } else {
          for (const filterName in this.search.cardList) {
            this.search.cardList[filterName] = this.localStorageData.cardList.cardListFilter.cardList[filterName];
          }

          for (const filterName in this.search.skillList) {
            this.search.skillList[filterName] = this.localStorageData.cardList.cardListFilter.skillList[filterName];
          }

          this.search.cardSeries = this.localStorageData.cardList.cardListFilter.cardSeries;
        }
      }
    },
    deleteLocalStorage() {},
    showModalEvent(showModalName) {
      this.switchDialog(showModalName);
      this.showModalName = showModalName;
    },
    setLevel(a, e) {
      this.settingCardData.fluctuationStatus[a] = e.target.value;
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

        this.setLocalStorage('llllMgr_card', this.card);
      }
    },
    changeFav(target) {
      if (this.settingCardData.favorite.some(v => v === target)) {
        this.settingCardData.favorite = this.settingCardData.favorite.filter((v) => {
          return v !== target;
        });
      } else {
        this.settingCardData.favorite.push(target);
      }

      this.setLocalStorage('llllMgr_card', this.card);
    },
    setTotalSkillLv(memberName) {
      return this.makeTotalSkillLv(memberName);
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
    },
    mentalCul(target) {
      if (target === undefined) {
        target = {
          memberName: this.settingCard.name,
          rare: this.settingCard.rare,
          card: this.settingCard.card
        }
      }

      const selectCard = this.card[target.name][target.rare][target.card];

      if (this.settingCard.rare !== 'R') {
        return selectCard.uniqueStatus.mental + (selectCard.fluctuationStatus.cardLevel - 1) * 3;
      } else {
        return selectCard.uniqueStatus.mental + Math.ceil((selectCard.fluctuationStatus.cardLevel - 1) / 2) * 2  + Math.floor((selectCard.fluctuationStatus.cardLevel - 1) / 2) * 3;
      }
    },*/
    makeSkillFilterList(target) {
      const result = [];

      for (const key of this.cardList) {
        if (result.indexOf(target === 'series' ? key[target] : key[target].name) === -1) {
          result.push(target === 'series' ? key[target] : key[target].name);
        }
      }

      return result;
    },
    fitst() {
      console.log('OK');
    }
  }
});