import { defineStore } from 'pinia';
import Dexie from 'dexie';
import { StoreState } from '@/types/stateStore';
import { CardDefaultData, CardDataType, SkillDetail } from '@/types/cardList';
import {
  MEMBER_KEYS,
  MEMBER_IDS,
  MEMBER_NAMES,
  EXCLUSION_MEMBER,
  MemberKeys,
  getMemberKeyFromValue,
  conversionIdToKey,
  conversionKeyToId,
  getMemberData,
  makeMemberFullName,
  getMemberKeys,
  getMemberKeyValue,
} from '@/constants/memberNames';
import { MEMBER_COLOR } from '@/constants/colorConst';
import { BONUS_SKILL_NAMES } from '@/constants/bonusSkills';
import { getReleasePoint } from '@/constants/releasePoint';
import {
  RARE,
  LIMITED,
  FAVORITE,
  MAX_CARD_LEVEL,
  getStyleTypeListEn,
  getMoodListEn,
  MaxCardLevel,
} from '@/constants/cards';
import { BONUS_SKILL_NAMES, BonusSkillNames } from '@/constants/bonusSkills';
import { SKILL_LIST } from '@/constants/skillList';
import { SKILL_DETAIL } from '@/constants/skillDetail';
import { MUSIC_LIST, AttributeEn } from '@/constants/musicList';
import { GRANDPRIX_BONUS } from '@/constants/grandprixBonus';
import { useCardStore } from './cardList';
// import { Dropbox } from 'dropbox';

export const useStateStore = defineStore('store', {
  state: (): StoreState => ({
    loading: false,
    dialog: false,
    dialogError: false,
    showModalName: false,
    updateData: false,
    selectCharacter: '',
    selectMusicTitle: undefined,
    checkMasteryMember: MEMBER_KEYS.KAHO,
    thisPeriod: 104,
    selectDeckName: '',
    isParamReflect: true,
    isPossessionFlg: true,
    withStar: {
      kaho: 1,
      sayaka: 1,
      rurino: 1,
      kozue: 1,
      tsuzuri: 1,
      megumi: 1,
      ginko: 1,
      kosuzu: 1,
      hime: 1,
      seras: 1,
      izumi: 1,
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
        sortType: 'default',
        order: 'ascending',
      },
    },
    defaultSearch: {
      cardList: {
        rare: [...RARE],
        styleType: getStyleTypeListEn(),
        mood: getMoodListEn(),
        limited: Object.keys(LIMITED),
        cardLevel: [0, 140],
        SALevel: [1, 14],
        SLevel: [1, 14],
        SAAP: [0, 99],
        SAP: [0, 99],
        releaseLevel: [1, 5],
        trainingLevel: [0, 4],
        memberName: [
          MEMBER_KEYS.KAHO,
          MEMBER_KEYS.SAYAKA,
          MEMBER_KEYS.RURINO,
          MEMBER_KEYS.KOZUE,
          MEMBER_KEYS.TSUZURI,
          MEMBER_KEYS.MEGUMI,
          MEMBER_KEYS.GINKO,
          MEMBER_KEYS.KOSUZU,
          MEMBER_KEYS.HIME,
          MEMBER_KEYS.SERAS,
          MEMBER_KEYS.IZUMI,
          'special',
        ],
        favorite: [],
        releaseStatus: 'none',
      },
      skillList: {
        skillFilterType: 'skillType',
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
      // 105: {
      //   main: 'MAIN STYLE',
      //   side1: 'SIDE STYLE 1'
      // }
    },
    specialCardIdList: ['sc_001', 'is_001', 'ktm_001'],
    formationMember: {
      103: [
        MEMBER_KEYS.KAHO,
        MEMBER_KEYS.SAYAKA,
        MEMBER_KEYS.RURINO,
        MEMBER_KEYS.KOZUE,
        MEMBER_KEYS.TSUZURI,
        MEMBER_KEYS.MEGUMI,
      ],
      104: [
        MEMBER_KEYS.GINKO,
        MEMBER_KEYS.KOSUZU,
        MEMBER_KEYS.HIME,
        MEMBER_KEYS.KAHO,
        MEMBER_KEYS.SAYAKA,
        MEMBER_KEYS.RURINO,
        MEMBER_KEYS.KOZUE,
        MEMBER_KEYS.TSUZURI,
        MEMBER_KEYS.MEGUMI,
      ],
      // 105: [
      //   MEMBER_KEYS.SERAS,
      //   MEMBER_KEYS.IZUMI,
      //   'free',
      //   MEMBER_KEYS.GINKO,
      //   MEMBER_KEYS.KOSUZU,
      //   MEMBER_KEYS.HIME,
      //   MEMBER_KEYS.KAHO,
      //   MEMBER_KEYS.SAYAKA,
      //   MEMBER_KEYS.RURINO
      // ],
      // '105_kozue': [
      //   MEMBER_KEYS.KOZUE,
      //   MEMBER_KEYS.SERAS,
      //   MEMBER_KEYS.IZUMI,
      //   MEMBER_KEYS.GINKO,
      //   MEMBER_KEYS.KOSUZU,
      //   MEMBER_KEYS.HIME,
      //   MEMBER_KEYS.KAHO,
      //   MEMBER_KEYS.SAYAKA,
      //   MEMBER_KEYS.RURINO
      // ],
      // '105_tsuzuri': [
      //   MEMBER_KEYS.TSUZURI,
      //   MEMBER_KEYS.SERAS,
      //   MEMBER_KEYS.IZUMI,
      //   MEMBER_KEYS.GINKO,
      //   MEMBER_KEYS.KOSUZU,
      //   MEMBER_KEYS.HIME,
      //   MEMBER_KEYS.KAHO,
      //   MEMBER_KEYS.SAYAKA,
      //   MEMBER_KEYS.RURINO
      // ],
      // '105_megumi': [
      //   MEMBER_KEYS.MEGUMI,
      //   MEMBER_KEYS.SERAS,
      //   MEMBER_KEYS.IZUMI,
      //   MEMBER_KEYS.GINKO,
      //   MEMBER_KEYS.KOSUZU,
      //   MEMBER_KEYS.HIME,
      //   MEMBER_KEYS.KAHO,
      //   MEMBER_KEYS.SAYAKA,
      //   MEMBER_KEYS.RURINO
      // ],
    },
    card: {},
    bonusSkillLevels: {
      [BONUS_SKILL_NAMES.VOLTAGE_UP]: 0,
      [BONUS_SKILL_NAMES.MENTAL_RECOVER]: 0,
      [BONUS_SKILL_NAMES.BEAT_HEART_UP]: 0,
      [BONUS_SKILL_NAMES.LOVE_BONUS]: 0,
    },
    memberData: {
      centerList: {},
    },
    deck: [],
    settingCard: {
      // 何故か分からないがここを設定しないとエラーが出るため設定
      ID: 'kh_023',
      rare: RARE[0],
      name: MEMBER_KEYS.KAHO,
      card: 'Prism Echo',
    },
    openCard: {
      ID: 'kh_000',
      name: MEMBER_KEYS.KAHO,
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
        cardList: {
          sortType: 'rare',
          order: 'descending',
        },
        musicList: {
          sortType: 'default',
          order: 'ascending',
        },
      },
    },
    supportSkill: {},
    defaultCardList: [],
    windowSize: {
      w: 0,
      h: 0,
    },
    musicLevel: {},
  }),
  getters: {
    defaultCard() {
      const cardStore = useCardStore();
      return cardStore.card;
    },
    cardList(): CardDataType[] {
      const result = {
        DR: [],
        LR: [],
        BR: [],
        UR: [],
        SR: [],
        R: [],
      };

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
            this.card[memberName][rare][cardName].favorite = [];
            result[rare].push(this.card[memberName][rare][cardName]);
          }
        }
      }

      return Object.values(result).flat();
    },
    outputCardList() {
      let result: CardDataType[] = this.cardList.slice();
      let filterList;

      if (result.length > 0) {
        for (const searchKey in this.search.cardList) {
          filterList = this.search.cardList[searchKey];
          result = result.filter((cardData) => {
            switch (searchKey) {
              case 'cardLevel':
              case 'SALevel':
              case 'SLevel':
              case 'releaseLevel':
              case 'trainingLevel':
                return (
                  filterList[0] <= cardData.fluctuationStatus[searchKey] &&
                  cardData.fluctuationStatus[searchKey] <= filterList[1]
                );
              case 'SAAP':
                if (cardData.specialAppeal === undefined) {
                  return true;
                } else {
                  const AP =
                    cardData.specialAppeal.AP -
                    (MAX_CARD_LEVEL[cardData.rare].length - 2 > cardData.fluctuationStatus.trainingLevel
                      ? cardData.fluctuationStatus.trainingLevel
                      : MAX_CARD_LEVEL[cardData.rare].length - 3);
                  return filterList[0] <= AP && AP <= filterList[1];
                }
              case 'SAP':
                if (cardData.skill === undefined) {
                  return true;
                } else {
                  return filterList[0] <= cardData.skill.AP && cardData.skill.AP <= filterList[1];
                }
              case 'favorite':
                if (this.search.cardList.favorite.length === 0) {
                  return true;
                } else {
                  return this.search.cardList.favorite.some((v) => {
                    return cardData.favorite.length === 0 ? false : cardData.favorite.indexOf(v) > -1;
                  });
                }
              case 'releaseStatus':
                if (this.search.cardList.releaseStatus === 'none') {
                  return true;
                }

                if (cardData.fluctuationStatus.cardLevel === 0) {
                  return false;
                }

                if (this.search.cardList.releaseStatus === 'cardLevel') {
                  if (
                    MAX_CARD_LEVEL[cardData.rare][MAX_CARD_LEVEL[cardData.rare].length - 1] ===
                    cardData.fluctuationStatus.cardLevel
                  ) {
                    return false;
                  } else {
                    return (
                      MAX_CARD_LEVEL[cardData.rare][cardData.fluctuationStatus.trainingLevel] >
                      cardData.fluctuationStatus.cardLevel
                    );
                  }
                }

                if (this.search.cardList.releaseStatus === 'trainingLevel') {
                  if (
                    MAX_CARD_LEVEL[cardData.rare][MAX_CARD_LEVEL[cardData.rare].length - 1] ===
                    cardData.fluctuationStatus.cardLevel
                  ) {
                    return false;
                  } else {
                    return (
                      MAX_CARD_LEVEL[cardData.rare][cardData.fluctuationStatus.trainingLevel] ===
                      cardData.fluctuationStatus.cardLevel
                    );
                  }
                }

                if (this.search.cardList.releaseStatus === 'releaseLevel') {
                  if (cardData.fluctuationStatus.releasePoint === 0 || cardData.fluctuationStatus.releaseLevel === 5) {
                    return false;
                  } else {
                    return getReleasePoint(cardData.rare, 'point') <= cardData.fluctuationStatus.releasePoint;
                  }
                }

                return true;
              case 'memberName':
                if (filterList.includes('special') && this.specialCardIdList.includes(cardData.ID)) {
                  return true;
                }

                return filterList.some((val: string) => {
                  return cardData[searchKey] === val;
                });
              default:
                return filterList.some((val: string) => {
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
                  const skillID = Object.values(SKILL_DETAIL).find((key) => {
                    return key.name_ja === val;
                  });

                  if (!skillID) {
                    return false;
                  }

                  return SKILL_LIST[cardData[searchKey].name][cardData[searchKey].ID].detail.type.some((key) => {
                    return key.name_ja === skillID.name_ja;
                  });
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
        if (this.localStorageData.sortSettings.cardList.sortType === 'rare') {
          if (this.localStorageData.sortSettings.cardList.order === 'ascending') {
            result.reverse();
          }
        } else {
          let aa: number;
          let bb: number;
          const mergeList = [];

          if (this.localStorageData.sortSettings.cardList.sortType === 'releaseBonus') {
            result = result.filter((cardData) => {
              if (cardData.rare === 'DR' || cardData.specialAppeal === undefined) {
                mergeList.push(cardData);
                return false;
              } else {
                return true;
              }
            });
          }

          result.sort((a: CardDefaultData, b: CardDefaultData) => {
            if (this.localStorageData.sortSettings.cardList.sortType === 'releaseBonus') {
              aa = a.fluctuationStatus.releaseLevel - 1;
              bb = b.fluctuationStatus.releaseLevel - 1;

              if (this.localStorageData.sortSettings.cardList.order === 'ascending') {
                return GRANDPRIX_BONUS.releaseLv[a.rare][aa] < GRANDPRIX_BONUS.releaseLv[b.rare][bb]
                  ? -1
                  : GRANDPRIX_BONUS.releaseLv[a.rare][aa] > GRANDPRIX_BONUS.releaseLv[b.rare][bb]
                  ? 1
                  : 0;
              } else {
                return GRANDPRIX_BONUS.releaseLv[a.rare][aa] > GRANDPRIX_BONUS.releaseLv[b.rare][bb]
                  ? -1
                  : GRANDPRIX_BONUS.releaseLv[a.rare][aa] < GRANDPRIX_BONUS.releaseLv[b.rare][bb]
                  ? 1
                  : 0;
              }
            } else if (/(card|SA|S|release|training)Level/.test(this.localStorageData.sortSettings.cardList.sortType)) {
              aa = a.fluctuationStatus[this.localStorageData.sortSettings.cardList.sortType];
              bb = b.fluctuationStatus[this.localStorageData.sortSettings.cardList.sortType];

              if (this.localStorageData.sortSettings.cardList.order === 'ascending') {
                return aa < bb ? -1 : aa > bb ? 1 : 0;
              } else {
                return aa > bb ? -1 : aa < bb ? 1 : 0;
              }
            } else {
              aa = a[this.localStorageData.sortSettings.cardList.sortType];
              bb = b[this.localStorageData.sortSettings.cardList.sortType];

              if (this.localStorageData.sortSettings.cardList.order === 'ascending') {
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
    /**
     * メンバーのリストを作成
     *
     * @returns メンバーのリスト
     */
    memberNameList() {
      const memberNames = Object.keys(MEMBER_COLOR);
      memberNames.push('special');
      return memberNames;
    },
    /**
     * スキルテキスト作成
     *
     * @param target specialAppeal | skill | characteristic
     * @returns スキルテキスト
     */
    skillText() {
      return (
        target: string,
        skillData?: SkillDetail,
        option?: {
          addSkillNum?: number[];
          targetSkillLv?: number;
        }
      ): string[] => {
        let result = '';
        const targetLevel: number =
          option?.targetSkillLv ??
          this.settingCardData.fluctuationStatus[`S${target === 'specialAppeal' ? 'A' : ''}Level`] - 1;

        const skillTextList = (() => {
          let returnText: string[] = SKILL_LIST[skillData.name][skillData.ID].text;

          if (SKILL_LIST[skillData.name][skillData.ID]?.exText !== undefined) {
            for (const exTextData of SKILL_LIST[skillData.name][skillData.ID].exText) {
              if (exTextData.level <= targetLevel + (option?.targetSkillLv === undefined ? 0 : 1)) {
                returnText = exTextData.text;
              }
            }
          }

          return returnText;
        })();

        for (let i = 0; i < skillTextList.length; i++) {
          result += skillTextList[i];

          if (i < skillTextList.length - 1) {
            result += skillData.detail[i][targetLevel];
          }
        }

        return result;
      };
    },
    settingCardData(): CardDefaultData {
      return this.card[this.settingCard.name][this.settingCard.rare][this.settingCard.card];
    },
    maxTrainingLevel(): number {
      return MAX_CARD_LEVEL[this.isAikatsu ? 'BR' : this.settingCard.rare].length - 1;
    },
    maxCardLevel(): number {
      return MAX_CARD_LEVEL[this.isAikatsu ? 'BR' : this.settingCard.rare][
        this.settingCardData.fluctuationStatus.trainingLevel
      ];
    },
    minCardLevel(): number {
      const rare: string = this.isAikatsu ? 'BR' : this.settingCard.rare;

      if (this.settingCardData.fluctuationStatus.trainingLevel - 1 < 0) {
        return MAX_CARD_LEVEL[rare][0];
      } else {
        return MAX_CARD_LEVEL[rare][this.settingCardData.fluctuationStatus.trainingLevel - 1];
      }
    },
    changeSkillLevel(): number {
      return this.settingCardData.fluctuationStatus.releaseLevel + 9;
    },
    /**
     * カードパラメータ作成
     *
     * @param style スタイル名
     * @param cardId カードID
     * @returns カードパラメータ
     */
    cardParam() {
      return (style: string, cardId?: string): number => {
        const target = ((): {
          memberName: string;
          rare: string;
          cardName: string;
          trainingLevel?: number;
          cardLevel?: number;
        } => {
          if ((cardId?.split('_')[1] ?? '000') === '000') {
            return {
              memberName: this.settingCard.name,
              rare: this.settingCard.rare,
              cardName: this.settingCard.card,
            };
          } else {
            const cardData = this.findCardData(cardId);
            return {
              memberName: cardData.memberName,
              rare: cardData.rare,
              cardName: cardData.cardName,
            };
          }
        })();

        const selectCard: CardDefaultData = this.card[target.memberName][target.rare][target.cardName];
        target.trainingLevel = selectCard.fluctuationStatus.trainingLevel;
        target.cardLevel = selectCard.fluctuationStatus.cardLevel;
        const maxStatus: number = selectCard.uniqueStatus[style];
        const magnification = {
          DR: [0.7, 1],
          LR: [0.7, 1],
          BR: [0.7, 1],
          UR: [0.5, 0.7, 1],
          SR: [0.5, 0.7, 1],
          R: [0.5, 0.7, 1],
        };
        const targetMaxCardLevel: MaxCardLevel = MAX_CARD_LEVEL[target.rare];
        const maxCardLevel = targetMaxCardLevel[target.trainingLevel];
        const targetMagnification = magnification[target.rare][target.trainingLevel];
        const targetMaxStatus = maxStatus * targetMagnification;

        if (target.cardLevel === 0) {
          return 0;
        } else if (target.trainingLevel >= targetMaxCardLevel.length - 2) {
          return style === 'mental'
            ? maxStatus
            : Math.ceil(maxStatus * (1 + (target.cardLevel - targetMaxCardLevel[targetMaxCardLevel.length - 3]) / 100));
        } else if (target.trainingLevel === magnification[target.rare].length - 1) {
          return Math.ceil(targetMaxStatus - (maxStatus / 100) * 1.5 * (maxCardLevel - target.cardLevel));
        } else if (target.trainingLevel === 0) {
          // if (cardId === 'gn_029') {
          //   return Math.ceil(
          //     targetMaxStatus - (maxStatus / 2 / (maxCardLevel - 1)) * (maxCardLevel - target.cardLevel)
          //   );
          // } else if (/^(D|L|B)R$/.test(target.rare)) {
          if (/^(D|L|B)R$/.test(target.rare)) {
            return Math.ceil(
              targetMaxStatus -
                ((targetMaxStatus - Math.ceil(maxStatus / (style === 'mental' ? 5 : 100))) / (maxCardLevel - 1)) *
                  (maxCardLevel - target.cardLevel)
            );
          } else {
            return Math.ceil(
              targetMaxStatus -
                ((maxStatus / 2 - Math.ceil(maxStatus / (style === 'mental' ? 5 : 100))) / (maxCardLevel - 1)) *
                  (maxCardLevel - target.cardLevel)
            );
          }
        } else {
          return Math.ceil(
            targetMaxStatus -
              (maxStatus / (target.rare === 'R' ? 200 : 100)) *
                (targetMaxCardLevel[target.trainingLevel] - target.cardLevel)
          );
        }
      };
    },
    makeTotalMasteryLv() {
      return (memberName: MemberKeys): number => {
        let result = 0;
        const bonusSkill = {
          [BONUS_SKILL_NAMES.BEAT_HEART_UP]: 0,
          [BONUS_SKILL_NAMES.VOLTAGE_UP]: 0,
          [BONUS_SKILL_NAMES.MENTAL_RECOVER]: 0,
          [BONUS_SKILL_NAMES.LOVE_BONUS]: 0,
        };

        for (const musicTitle of this.memberData.centerList[memberName].centerMusic) {
          result += this.musicLevel[musicTitle];
          bonusSkill[MUSIC_LIST[musicTitle].bonusSkill] += Math.floor(this.musicLevel[musicTitle] / 10);
        }

        for (const bonusSkillName in bonusSkill) {
          this.memberData.centerList[memberName].bonusSkill[bonusSkillName] = bonusSkill[bonusSkillName];
        }

        /*for (const musicTitle of this.memberData.centerList[memberName].centerMusic) {
         result += this.musicLevel[musicTitle];
         this.supportSkill[memberName][MUSIC_LIST[musicTitle].bonusSkill] += Math.floor(this.musicLevel[musicTitle]this.musicLevel / 10);
         }

         for (const bonusSkillName in this.supportSkill[memberName]) {
         this.memberData.centerList[memberName].bonusSkill[bonusSkillName] = this.supportSkill[memberName][bonusSkillName];
         }*/

        return result;
      };
    },
    setCardIllust(): string {
      return `${this.conversion(this.getSettingCard.card)}_${getMemberData(this.getSettingCard.name).last}_覚醒後`;
    },
    skillLevels() {
      const result = {};

      for (const bonusSkillKey in BONUS_SKILL_NAMES) {
        const bonusSkillName: BonusSkillNames = BONUS_SKILL_NAMES[bonusSkillKey];

        if (
          this.memberData.centerList[this.checkMasteryMember].bonusSkill[bonusSkillName] +
            this.supportSkill[this.checkMasteryMember][bonusSkillName] >
          0
        ) {
          result[bonusSkillName] =
            this.memberData.centerList[this.checkMasteryMember].bonusSkill[bonusSkillName] +
            this.supportSkill[this.checkMasteryMember][bonusSkillName];
        }
      }

      return result;
    },
    isDarkMode() {
      return this.localStorageData.siteSettings.all.darkMode === 'dark';
    },
    selectDeck() {
      return this.deck.find((v) => v.name === this.selectDeckName);
    },
    getSettingCard() {
      return this.findCardData(this.settingCard.ID);
    },
    isAikatsu() {
      return /(kz_036|kh_037)/.test(this.settingCard.ID);
    },
    /*makeMusicList() {
     return (selectSkillList) => {
     const list = {};
     let targetMusicList;

     for (const musicTitle in MUSIC_LIST) {
     targetMusicList = MUSIC_LIST[musicTitle];

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
    /**
     * ページを読み込んだときに最初に行われる処理郡
     *
     * @returns void
     */
    init(): void {
      // this.makeDb();
      for (const musicTitle in MUSIC_LIST) {
        this.musicLevel[musicTitle] = MUSIC_LIST[musicTitle].level;
      }

      const bonusSkillList = {};

      for (const key in BONUS_SKILL_NAMES) {
        bonusSkillList[BONUS_SKILL_NAMES[key]] = 0;
      }

      for (const memberKey of getMemberKeys()) {
        this.supportSkill[memberKey] = JSON.parse(JSON.stringify(bonusSkillList));
        this.memberData.centerList[memberKey] = {
          centerMusic: [],
          bonusSkill: JSON.parse(JSON.stringify(bonusSkillList)),
        };
      }

      this.search = JSON.parse(JSON.stringify(this.defaultSearch));
      this.card = JSON.parse(JSON.stringify(this.defaultCard));
      this.getLocalStorage();
      this.setSupportSkillLevel();
      // this.fetchFiles();
      // this.makeNewDeck();
      // console.log(window.location.search.replace('?', ''));
      // if (window.location.search.replace('?', '') !== '') {
      //   window.location.replace('/llllMgr/musicList');
      // }
    },
    makeNewDeck(): void {
      const a = {
        name: `新規デッキ${this.deck.length + 1}`,
        period: this.thisPeriod,
        cardData: {},
      };

      for (const name of this.formationMember[a.period]) {
        a.cardData[name] = {
          main: {
            cardName: 'default',
            param: {
              level: 0,
              SA: 0,
              skill: 0,
              release: 0,
            },
          },
          side1: {
            cardName: 'default',
            param: {
              level: 0,
              SA: 0,
              skill: 0,
              release: 0,
            },
          },
          side2: {
            cardName: 'default',
            param: {
              level: 0,
              SA: 0,
              skill: 0,
              release: 0,
            },
          },
        };
      }

      this.selectDeckName = a.name;
      this.deck = [a];
    },
    /**
     * DB作成
     *
     * @returns void
     */
    makeDb(): void {
      // DBのオープン
      const db = new Dexie('llllMgrDB_test');
      // バージョン1
      db.version(1).stores({
        notes: '++id, title, body, *tags, updated_at',
      });

      // バージョン2 usersストアを追加
      db.version(2).stores({
        notes: '++id, title, body, *tags, updated_at',
        users: '++id, name',
      });

      // バージョン3 notesストアにgoodを追加
      // 更新時にtagsにgoodがあったら、新しく追加したキー「good」にtrueを入れるようにします。
      db.version(3)
        .stores({
          notes: '++id, title, body, *tags, good, updated_at',
          users: '++id, name',
        })
        .upgrade(function () {
          return db.notes.modify(function (note) {
            if (note.tags.indexOf('good')) {
              note.good = true;
            }
          });
        });

      db.notes.add({
        title: 'タイトル',
        body: '本文',
        tags: ['IndexedDB', 'Dexie.js'],
        updated_at: new Date(),
      });
    },
    /**
     * ローカルストレージ設定
     *
     * @param setLocalStorageName ローカルストレージ名
     * @param value 値
     * @returns void
     */
    setLocalStorage(setLocalStorageName: string, value: any): void {
      localStorage[setLocalStorageName] = JSON.stringify(value);
    },
    getLocalStorage(importData?: any): void {
      const isImportData = importData !== undefined;

      if (localStorage.llllMgr_musicData !== undefined || (isImportData && importData.musicData !== undefined)) {
        if (!isImportData) {
          this.localStorageData.musicData.musicLevel = {
            ...this.musicLevel,
            ...JSON.parse(localStorage.llllMgr_musicData).musicLevel,
          };

          if (this.localStorageData.musicData.musicLevel['バアドゲージ']) {
            this.localStorageData.musicData.musicLevel['バアドケージ'] =
              this.localStorageData.musicData.musicLevel['バアドゲージ'];
            delete this.localStorageData.musicData.musicLevel['バアドゲージ'];
          }

          for (const musicTitle in MUSIC_LIST) {
            if (this.localStorageData.musicData.musicLevel[musicTitle]) {
              this.musicLevel[musicTitle] = this.localStorageData.musicData.musicLevel[musicTitle];
            }

            this.memberData.centerList[MUSIC_LIST[musicTitle].center].centerMusic.push(musicTitle);
          }
        } else if (importData.musicData !== undefined) {
          this.localStorageData.musicData.musicLevel = {
            ...this.localStorageData.musicData.musicLevel,
            ...importData.musicData.musicLevel,
          };

          if (this.localStorageData.musicData.musicLevel['バアドゲージ']) {
            this.localStorageData.musicData.musicLevel['バアドケージ'] =
              this.localStorageData.musicData.musicLevel['バアドゲージ'];
            delete this.localStorageData.musicData.musicLevel['バアドゲージ'];
          }

          for (const musicTitle in MUSIC_LIST) {
            this.musicLevel[musicTitle] = this.localStorageData.musicData.musicLevel[musicTitle];
          }

          this.setLocalStorage('llllMgr_musicData', this.localStorageData.musicData);
        }
      } else {
        for (const musicTitle in MUSIC_LIST) {
          this.memberData.centerList[MUSIC_LIST[musicTitle].center].centerMusic.push(musicTitle);
        }
      }

      if (
        localStorage.llllMgr_card !== undefined ||
        (isImportData && importData.cardList !== undefined && importData.cardList.card !== undefined)
      ) {
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
                  this.card[memberName][cardName === 'バアドゲージ' && memberName === MEMBER_KEYS.SAYAKA ? 'UR' : rare][
                    cardName === 'バアドゲージ' ? 'バアドケージ' : cardName
                  ].fluctuationStatus =
                    this.localStorageData.cardList.card[memberName][rare][cardName].fluctuationStatus;

                  if (
                    this.localStorageData.cardList.card[memberName][rare][cardName].fluctuationStatus.releasePoint ===
                    undefined
                  ) {
                    this.card[memberName][
                      cardName === 'バアドゲージ' && memberName === MEMBER_KEYS.SAYAKA ? 'UR' : rare
                    ][cardName === 'バアドゲージ' ? 'バアドケージ' : cardName].fluctuationStatus.releasePoint = 0;
                  }

                  if (this.localStorageData.cardList.card[memberName][rare][cardName].favorite !== undefined) {
                    this.card[memberName][
                      cardName === 'バアドゲージ' && memberName === MEMBER_KEYS.SAYAKA ? 'UR' : rare
                    ][cardName === 'バアドゲージ' ? 'バアドケージ' : cardName].favorite =
                      this.localStorageData.cardList.card[memberName][rare][cardName].favorite;
                  }
                }
              }
            }
          }
        }
      }

      if (
        localStorage.llllMgr_cardListFilter !== undefined ||
        (isImportData && importData.cardList !== undefined && importData.cardList.cardListFilter !== undefined)
      ) {
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
            this.localStorageData.cardList.cardListFilter.skillList.skillFilterType =
              importData.cardList.cardListFilter.skillList.skillFilterType;
            this.localStorageData.cardList.cardListFilter.skillList.skillName =
              importData.cardList.cardListFilter.skillList.skillName;
            this.localStorageData.cardList.cardListFilter.skillList.skillType =
              importData.cardList.cardListFilter.skillList.skillType;
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

      if (
        localStorage.llllMgr_selectItemList !== undefined ||
        (isImportData && importData.selectItemList !== undefined)
      ) {
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
              this.localStorageData.siteSettings[siteSettingCategoryName][settingName] =
                getSiteSettings[siteSettingCategoryName][settingName];
            }
          }
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
              this.localStorageData.sortSettings[sortSettingCategoryName][settingName] =
                getSortSettings[sortSettingCategoryName][settingName];
            }
          }
        }
      }
    },
    deleteLocalStorage(deleteDataName: string): void {
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
    /**
     * ダイアログを表示
     * @param showModalName 表示するダイアログの名前
     * @returns void
     */
    showModalEvent(showModalName: string): void {
      this.switchDialog(showModalName);
      this.showModalName = showModalName;
    },
    setLevel(a: string, e: any): void {
      this.settingCardData.fluctuationStatus[a] = e.target.value;
    },
    /**
     * SettingCardのID、レアリティ、メンバー名、カード名を設定する
     * @param cardId 設定するカードのID
     * @returns void
     */
    setSettingCard(cardId: string): void {
      const cardData = this.findCardData(cardId);
      this.settingCard.ID = cardId;
      this.settingCard.rare = cardData.rare;
      this.settingCard.name = cardData.memberName;
      this.settingCard.card = cardData.cardName;
    },
    toBool(value: string): boolean {
      return value === 'true';
    },
    conversion(name: string): string {
      return /!/.test(name) ? name.replace(/!/g, '！') : /\//.test(name) ? name.replace(/\//g, '／') : name;
    },
    setOpenCard(id: string, name: string, style: string): void {
      this.openCard.ID = id;
      this.openCard.name = name;
      this.openCard.style = style;
    },
    /**
     * カードIDからメンバー名を作成する関数
     *
     * @param id カードID
     * @returns メンバー名
     */
    makeCardMemberName(id: string): string {
      switch (id) {
        case 'ktm_001':
          return '乙宗梢＆夕霧綴理＆藤島慈';
        case 'is_001':
          return makeMemberFullName(MEMBER_KEYS.SELAIZU);
        default:
          const memberKey = conversionIdToKey(id.split('_')[0]);
          return `${MEMBER_NAMES[memberKey][memberKey === MEMBER_KEYS.SERAS ? 'first' : 'last']}`;
      }
    },
    isOtherMember(name: string): boolean {
      return name === 'special';
    },
    /**
     * メンバー名とカード名からカードIDを検索
     *
     * @param memberName メンバー名
     * @param cardName カード名
     * @return カードID
     */
    findCardId(memberName: string, cardName: string): string {
      if (cardName === 'default') {
        return this.makeDefaultCardId(memberName);
      } else {
        const list = this.cardList.filter((v) => {
          return v.cardName === cardName;
        });

        return list.length === 1
          ? list[0].ID
          : list.find((v) => {
              return v.memberName === memberName;
            })?.ID ?? this.makeDefaultCardId(memberName);
      }
    },
    /**
     * カードIDからカードデータを検索
     *
     * @param cardId カードID
     * @return カードデータ
     */
    findCardData(cardId: string) {
      if (cardId.split('_')[1] === '000') {
        return {
          ...this.card.default,
          ...{
            cardName: 'default',
          },
        };
      } else {
        return this.cardList.find((v) => v.ID === cardId);
      }
    },
    /**
     * 各メンバーのデフォルトのカードIDを作成
     *
     * @param memberName メンバー名
     * @return デフォルトのカードID
     */
    makeDefaultCardId(memberName: string): string {
      return `${Object.keys(MEMBER_IDS).find((key) => {
        MEMBER_IDS[key] === memberName;
      })}_000`;
    },
    /**
     * カードIDからカードのレアリティを検索
     *
     * @param cardId カードID
     * @return カードのレアリティ
     */
    searchRarity(cardId: string): string {
      if (Number(cardId.split('_')[1]) === 0) {
        return 'default';
      } else {
        return this.cardList.find((v) => v.ID === cardId)?.rare ?? '';
      }
    },
    searchSelectDeckCard(name: string, style: string) {
      return this.selectDeck.cardData[name][style].id;
    },
    makeExportCardData(data?: any) {
      const result = {};
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
    submitCardData(submitData: any): void {
      for (const i in submitData) {
        this.submitData[i] = submitData[i];
      }
    },
    switchDialog(switchFlg: boolean): void {
      this.dialog = !!switchFlg;
    },
    selectMusic(a: string): void {
      this.selectMusicTitle = a;
    },
    closeModal() {
      this.showModalName = false;
    },
    valueChange(target, val) {
      if (target === 'musicLevel') {
        this.musicLevel[this.selectMusicTitle] = val;
        this.localStorageData.musicData.musicLevel = {
          ...this.localStorageData.musicData.musicLevel,
          ...this.musicLevel,
        };

        this.setLocalStorage('llllMgr_musicData', this.localStorageData.musicData);
      } else {
        this.settingCardData.fluctuationStatus[target] = val;

        if (target === 'trainingLevel') {
          if (
            this.settingCardData.fluctuationStatus.cardLevel < this.minCardLevel ||
            this.settingCardData.fluctuationStatus.cardLevel > this.maxCardLevel
          ) {
            this.settingCardData.fluctuationStatus.cardLevel = this.minCardLevel;
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
            this.supportSkill[cardData.memberName][targetBonusSkill] =
              cardData.uniqueStatus.supportSkill.supportSkillList[targetBonusSkill].initLevel;

            if (
              cardData.fluctuationStatus.releaseLevel >=
              cardData.uniqueStatus.supportSkill.supportSkillList[targetBonusSkill].levelUp
            ) {
              this.supportSkill[cardData.memberName][targetBonusSkill] +=
                cardData.uniqueStatus.supportSkill.supportSkillList[targetBonusSkill].upLevel;
            }
          }
        }
      }
    },
    setBonusSkillLevel(memberName: string, skillName: string): number {
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
    makeSkillFilterList(target?: string) {
      const result = [];

      for (const key of this.cardList) {
        if (key[target] !== undefined && result.indexOf(target === 'series' ? key[target] : key[target].name) === -1) {
          result.push(target === 'series' ? key[target] : key[target].name);
        }
      }

      return result.sort();
    },
    isExclusionMember(targetMember) {
      return EXCLUSION_MEMBER.some((val) => val === targetMember);
    },
    findOpenCardMemberName(cardId) {
      return this.cardList.find((v) => v.ID === cardId)?.memberName ?? '';
    },
    resetMusicFilter(resetName: string) {
      if (/^(SA|S)(AP|Level)|(release|card|training)Level$/.test(resetName)) {
        this.search.cardList[resetName] = [
          this.defaultSearch.cardList[resetName][0],
          this.defaultSearch.cardList[resetName][1],
        ];
      } else if (this.search.cardList[resetName].length === 0) {
        switch (resetName) {
          case 'rare':
            this.search.cardList.rare = RARE;
            break;
          case 'mood':
            this.search.cardList.mood = getMoodListEn();
            break;
          case 'styleType':
            this.search.cardList.styleType = getStyleTypeListEn();
            break;
          case 'memberName':
            this.search.cardList.memberName = JSON.parse(JSON.stringify(this.memberNameList));
            break;
          case 'limited':
            this.search.cardList.limited = Object.keys(LIMITED).map((v) => v.toLowerCase());
            break;
          case 'favorite':
            this.search.cardList.favorite = FAVORITE;
            break;
          default:
            for (const key in this[resetName]) {
              this.search.cardList[resetName].push(key);
            }
            break;
        }
      } else {
        this.search.cardList[resetName] = [];
      }
    },
    dataReset(resetList) {
      for (const iterator of resetList) {
        if (iterator === 'card') {
          this.card = JSON.parse(JSON.stringify(this.defaultCard));
          this.localStorageData.cardList.card = this.makeExportCardData(this.card);
          this.setLocalStorage('llllMgr_card', this.localStorageData.cardList.card);
        } else if (iterator === 'cardListFilter') {
          this.search = JSON.parse(JSON.stringify(this.defaultSearch));
        } else if (iterator === 'musicData') {
          const bonusSkillList = {};

          for (const key in BONUS_SKILL_NAMES) {
            bonusSkillList[BONUS_SKILL_NAMES[key]] = 0;
          }

          for (const name of getMemberKeys()) {
            this.supportSkill[name] = JSON.parse(JSON.stringify(bonusSkillList));
            this.memberData.centerList[name].bonusSkill = JSON.parse(JSON.stringify(bonusSkillList));

            for (const musicTitle in MUSIC_LIST) {
              this.musicLevel[musicTitle] = MUSIC_LIST[musicTitle].level;
              this.localStorageData.musicData.musicLevel[musicTitle] = this.musicLevel[musicTitle];
            }

            this.setLocalStorage('llllMgr_musicData', this.localStorageData.musicData);
          }
        } else if (iterator === 'selectItemList') {
          this.localStorageData.selectItemList = {
            item1: [],
            item2: [],
            item3: [],
          };
          this.setLocalStorage('llllMgr_selectItemList', this.localStorageData.selectItemList);
        } else if (iterator === 'sortSettings_card') {
          this.localStorageData.sortSettings.cardList = JSON.parse(JSON.stringify(this.sortSettings.cardList));
          this.setLocalStorage('llllMgr_sortSettings', this.localStorageData.sortSettings);
        } else if (iterator === 'siteSettings') {
          this.localStorageData.siteSettings = JSON.parse(JSON.stringify(this.siteSettings));
          this.setLocalStorage('llllMgr_siteSettings', this.localStorageData.siteSettings);
        }
      }
    },
    /**
     * 設定をlocalStorageに保存
     *
     * @param setLocalStorageName 保存する設定の名前
     * @returns void
     */
    changeSettings(setLocalStorageName: string): void {
      this.setLocalStorage(`llllMgr_${setLocalStorageName}`, this.localStorageData[setLocalStorageName]);
    },
    setSelectCard(
      id: string,
      param: {
        cardLevel: number;
        SALevel: number;
        SLevel: number;
        releaseLevel: number;
      }
    ): void {
      this.selectDeck.cardData[this.openCard.name][this.openCard.style].id = id;
      this.selectDeck.cardData[this.openCard.name][this.openCard.style].param.cardLevel = param.cardLevel;
      this.selectDeck.cardData[this.openCard.name][this.openCard.style].param.SALevel = param.SALevel;
      this.selectDeck.cardData[this.openCard.name][this.openCard.style].param.SLevel = param.SLevel;
      this.selectDeck.cardData[this.openCard.name][this.openCard.style].param.releaseLevel = param.releaseLevel;
    },
    /**
     * 画像パスを返す処理
     *
     * @param path その画像が入っているフォルダ名
     * @param imageName 画像の名前
     * @param extension 画像の拡張子
     * @returns 画像のパス
     */
    getImagePath(path: string, imageName: string, extension?: string): string {
      const images = import.meta.glob('../assets/**/*', { eager: true });
      const filePath = `../assets${path ? `/${path}` : ''}/${imageName}.${extension ?? 'webp'}`;
      return images[filePath]?.default || '';
    },
    async fetchFiles() {
      const APP_KEY = import.meta.env.VITE_DROPBOX_APP_KEY;
      const ACCESS_APP_SECRET = import.meta.env.VITE_DROPBOX_APP_SECRET;
      const OATH2_REFRESH_TOKEN = import.meta.env.VITE_DROPBOX_OATH2_REFRESH_TOKEN;

      try {
        const dbx = new Dropbox({
          clientId: APP_KEY,
          clientSecret: ACCESS_APP_SECRET,
          refreshToken: OATH2_REFRESH_TOKEN,
        });
        const response = await this.fetchWithBackoff(async () => {
          return await dbx.filesListFolder({ path: '/CD_jacket' });
        });
        const files = response.result.entries;
        const imageMimeType = ['image/webp'];

        const imageFiles = files.filter(
          (file) =>
            file['.tag'] === 'file' &&
            imageMimeType.some((type) => this.conversion(file.name).endsWith(type.split('/')[1]))
        );

        const imageUrls = await Promise.all(
          imageFiles.map(async (file) => {
            return this.fetchWithBackoff(async () => {
              const linkResponse = await dbx.filesGetTemporaryLink({
                path: file.path_lower,
              });
              return {
                id: file.id,
                name: this.conversion(file.name.split('.webp')[0]),
                url: linkResponse.result.link,
              };
            });
          })
        );

        this.images = imageUrls;

        imageUrls.forEach((image) => {
          this.imageLoaded[this.conversion(image.name)] = false;
        });

        this.loading = false;
      } catch (error) {
        this.dialogError = true;
      }
    },
    /**
     * バックオフ処理を実装
     *
     * @param fetchFunction リトライ対象の関数
     * @returns リトライ後の結果
     */
    async fetchWithBackoff(fetchFunction) {
      const retries = 5;
      const delay = 5000;

      for (let i = 0; i < retries; i++) {
        try {
          return await fetchFunction();
        } catch (error) {
          if (error.status === 429 && i < retries - 1) {
            const waitTime = delay * Math.pow(2, i);
            console.warn(`Rate limit hit. Retrying in ${waitTime / 1000} seconds...`);
            await new Promise((resolve) => setTimeout(resolve, waitTime));
          } else {
            throw error;
          }
        }
      }
      throw new Error('Failed to fetch after multiple retries.');
    },
    markImageLoaded(imageKey) {
      this.imageLoaded[imageKey] = true;
    },
    markImageError(imageKey) {
      console.error(`Failed to load image: ${imageKey}`);
      this.imageLoaded[imageKey] = false;
    },
    /**
     * 画面サイズ更新処理
     *
     * @description
     * 現在のウィンドウサイズを更新します。\
     * このメソッドは、initializeWindowResizeメソッドで初期化時に呼び出されます。
     *
     * @return void
     */
    updateWindowSize() {
      this.windowSize = {
        w: window.innerWidth,
        h: window.innerHeight,
      };
    },
    /**
     * 画面サイズ初期化処理
     *
     * @description
     * 画面サイズの初期値を設定し、リサイズイベントリスナーを登録します。\
     * リサイズイベントが発生するたびに画面サイズを更新します。\
     * cleanupWindowResizeメソッドでイベントリスナーを削除できます。
     *
     * @return void
     */
    initializeWindowResize() {
      // 初期値設定
      this.updateWindowSize();

      // リサイズイベントリスナーの登録
      const handleResize = () => this.updateWindowSize();
      window.addEventListener('resize', handleResize);

      // イベントリスナーの参照を保持（cleanup用）
      this._resizeHandler = handleResize;
    },
    /**
     * 画面リサイズのイベントリスナー削除処理
     *
     * @description
     * initializeWindowResizeメソッドで登録されたリサイズイベントリスナーを削除します。\
     * これにより、メモリリークを防ぎ、不要なイベントリスナーの登録を避けることができます。
     *
     * @return void
     */
    cleanupWindowResize() {
      if (this._resizeHandler) {
        window.removeEventListener('resize', this._resizeHandler);
        this._resizeHandler = null;
      }
    },
  },
});
