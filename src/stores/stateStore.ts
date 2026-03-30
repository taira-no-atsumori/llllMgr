import { defineStore } from 'pinia';
import { watch } from 'vue';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { rtdb } from '@/firebase';

import { useCardStore } from '@/stores/cardStore';
import { useSkillStore } from '@/stores/skillStore';
import { useMusicStore } from '@/stores/musicStore';
import { useSettingsStore } from '@/stores/settingsStore';

import {
  MEMBER_KEYS,
  FORMATION_MEMBER,
  type MemberKeyValues,
  conversionIdToKey,
  getMemberKeys,
} from '@/constants/memberNames';
import {
  RARE,
  MAX_CARD_LEVEL,
  FAVORITE,
  SPECIAL_CARD_LEVEL_IDS,
  type Rare,
  type MaxCardLevel,
  type FavoriteIcon,
} from '@/constants/cards';
import type { MemberColorKeys } from '@/constants/colorConst';
import {
  BONUS_SKILL_NAMES,
  DEFAULT_BONUS_SKILL_LIST,
} from '@/constants/bonusSkills';
import { DEFAULT_SEARCH } from '@/constants/defaultSettings';
import {
  LOCAL_DB_KEY_NAMES as LDB_KEY_NAMES,
  type LocalDBKeyNames,
} from '@/constants/localDBKeyNames';

import type {
  StoreState,
  SearchSettings,
  SortSettings,
  SelectItemList,
  LocalStorageCardListType,
  SiteSettings,
} from '@/types/stateStore';
import type {
  CardDataType,
  SkillDetail,
  CardStatus,
  CardListState,
  TrainingStatus,
} from '@/types/cardList';
import type { MusicListState } from '@/types/musicList';

export const useStateStore = defineStore('store', {
  state: (): StoreState => ({
    isDev: false,
    loading: false,
    dialog: false,
    dialogError: false,
    showModalName: false,
    updateData: false,
    selectCharacter: '',
    selectMusicTitle: undefined,
    thisPeriod: 104,
    selectDeckName: '',
    isParamReflect: true,
    isPossessionFlg: true,
    withStar: {
      [MEMBER_KEYS.KAHO]: 1,
      [MEMBER_KEYS.SAYAKA]: 1,
      [MEMBER_KEYS.RURINO]: 1,
      [MEMBER_KEYS.KOZUE]: 1,
      [MEMBER_KEYS.TSUZURI]: 1,
      [MEMBER_KEYS.MEGUMI]: 1,
      [MEMBER_KEYS.GINKO]: 1,
      [MEMBER_KEYS.KOSUZU]: 1,
      [MEMBER_KEYS.HIME]: 1,
      [MEMBER_KEYS.SERAS]: 1,
      [MEMBER_KEYS.IZUMI]: 1,
    },
    musicList: {},
    musicLevel: {},
    selectItemList: {
      item1: [],
      item2: [],
      item3: [],
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
    search: {},
    memberData: {
      centerList: {},
      bonusSkill: {},
    },
    deck: [],
    settingCardId: 'kh_023',
    openCard: {
      ID: 'kh_000',
      name: MEMBER_KEYS.KAHO,
      style: 'main',
    },
    localStorageData: [],
    supportSkill: {},
    user: null,
    isAuthLoaded: false,
  }),
  getters: {
    /**
     * スキルテキスト作成
     *
     * @param target 'specialAppeal' | 'skill' | 'characteristic'
     * @param skillData スキル情報
     * @param option 追加スキル数
     * @returns スキルテキスト
     */
    skillText() {
      return (
        target: 'specialAppeal' | 'skill' | 'characteristic',
        skillData?: SkillDetail,
        option?: {
          addSkillNum?: number[];
          targetSkillLv?: number;
        },
      ) => {
        const skillStore = useSkillStore();
        let result = '';
        const targetLevel: number =
          option?.targetSkillLv ??
          this.settingCardData.fluctuationStatus[
            `S${target === 'specialAppeal' ? 'A' : ''}Level`
          ] - 1;

        const skill = skillStore.skills[skillData.ID];

        if (!skill) {
          return '';
        }

        const skillTextList = (() => {
          let returnText: string[] = skill.text || [];

          if (skill.exText) {
            for (const exTextData of skill.exText) {
              if (
                exTextData.level <=
                targetLevel + (option?.targetSkillLv === undefined ? 0 : 1)
              ) {
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
    settingCardData(): CardDataType {
      return this.findCardData(this.settingCardId);
    },
    maxTrainingLevel() {
      return (
        MAX_CARD_LEVEL[
          this.isIrregularLvCard ? RARE[2] : this.settingCardData.rare
        ].length - 1
      );
    },
    maxCardLevel(): number {
      return MAX_CARD_LEVEL[
        this.isIrregularLvCard ? RARE[2] : this.settingCardData.rare
      ][this.settingCardData.fluctuationStatus.trainingLevel];
    },
    minCardLevel(): number {
      const rare: string = this.isIrregularLvCard
        ? RARE[2]
        : this.settingCardData.rare;

      if (this.settingCardData.fluctuationStatus.trainingLevel - 1 < 0) {
        return MAX_CARD_LEVEL[rare][0];
      } else {
        return MAX_CARD_LEVEL[rare][
          this.settingCardData.fluctuationStatus.trainingLevel - 1
        ];
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
              memberName: this.settingCardData.memberName,
              rare: this.settingCardData.rare,
              cardName: this.settingCardData.card,
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

        const selectCard = this.findCardData(cardId);
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
        const maxCardLevel: number = targetMaxCardLevel[target.trainingLevel];
        const targetMagnification: number[] =
          magnification[target.rare][target.trainingLevel];
        const targetMaxStatus = maxStatus * targetMagnification;

        if (target.cardLevel === 0) {
          return 0;
        } else if (target.trainingLevel >= targetMaxCardLevel.length - 2) {
          return style === 'mental'
            ? maxStatus
            : Math.ceil(
                maxStatus *
                  (1 +
                    (target.cardLevel -
                      targetMaxCardLevel[targetMaxCardLevel.length - 3]) /
                      100),
              );
        } else if (
          target.trainingLevel ===
          magnification[target.rare].length - 1
        ) {
          return Math.ceil(
            targetMaxStatus -
              (maxStatus / 100) * 1.5 * (maxCardLevel - target.cardLevel),
          );
        } else if (target.trainingLevel === 0) {
          if (selectCard.cardName === 'Oracle Étude') {
            return Math.ceil(
              targetMaxStatus -
                ((targetMaxStatus - maxStatus / 2) / (maxCardLevel - 1)) *
                  (maxCardLevel - target.cardLevel),
            );
          } else if (/^(D|L|B)R$/.test(target.rare)) {
            return Math.ceil(
              targetMaxStatus -
                ((targetMaxStatus -
                  Math.ceil(maxStatus / (style === 'mental' ? 5 : 100))) /
                  (maxCardLevel - 1)) *
                  (maxCardLevel - target.cardLevel),
            );
          } else {
            return Math.ceil(
              targetMaxStatus -
                ((maxStatus / 2 -
                  Math.ceil(maxStatus / (style === 'mental' ? 5 : 100))) /
                  (maxCardLevel - 1)) *
                  (maxCardLevel - target.cardLevel),
            );
          }
        } else {
          return Math.ceil(
            targetMaxStatus -
              (maxStatus / (target.rare === 'R' ? 200 : 100)) *
                (targetMaxCardLevel[target.trainingLevel] - target.cardLevel),
          );
        }
      };
    },
    /**
     * ボーナススキル計算処理
     *
     * @description
     * 各メンバーのボーナススキルLv.を計算して返す。
     *
     * @returns ボーナススキル
     */
    makeTotalMasteryLv() {
      return (memberName: MemberColorKeys): number => {
        let result = 0;

        if (this.memberData.centerList[memberName]) {
          const bonusSkill = {
            ...DEFAULT_BONUS_SKILL_LIST,
          };

          for (const musicTitle of this.memberData.centerList[memberName]
            .centerMusic) {
            result += this.musicLevel[musicTitle];
            bonusSkill[this.musicList[musicTitle].bonusSkill] += Math.floor(
              this.musicLevel[musicTitle] / 10,
            );
          }

          for (const bonusSkillName in bonusSkill) {
            this.memberData.centerList[memberName].bonusSkill[bonusSkillName] =
              bonusSkill[bonusSkillName];
          }

          /*for (const musicTitle of this.memberData.centerList[memberName].centerMusic) {
         result += this.musicLevel[musicTitle];
         this.supportSkill[memberName][this.musicList[musicTitle].bonusSkill] += Math.floor(this.musicLevel[musicTitle]this.musicLevel / 10);
         }

         for (const bonusSkillName in this.supportSkill[memberName]) {
         this.memberData.centerList[memberName].bonusSkill[bonusSkillName] = this.supportSkill[memberName][bonusSkillName];
         }*/
        }

        return result;
      };
    },
    selectDeck() {
      return this.deck.find((v) => v.name === this.selectDeckName);
    },
    getSettingCard(): CardDataType {
      return this.findCardData(this.settingCardId);
    },
    /**
     * 特殊レベルカード判定処理
     *
     * @returns boolean
     */
    isIrregularLvCard() {
      return SPECIAL_CARD_LEVEL_IDS.includes(this.settingCardId);
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
    /**
     * ページを読み込んだときに最初に行われる処理郡
     *
     * @returns void
     */
    // async init(): Promise<void> {
    //   this.loading = true;
    //   this.search = JSON.parse(JSON.stringify(DEFAULT_SEARCH));
    //   this.loadSiteSettings();

    //   const auth = getAuth(rtdb.app);
    //   onAuthStateChanged(auth, (user) => {
    //     this.user = user;
    //     this.isAuthLoaded = true;
    //   });

    //   watch(musicListFromDB, (newVal) => {
    //     this.musicList = newVal;
    //   });

    //   watch(
    //     () => this.isDev,
    //     async (newVal) => {
    //       this.loading = true;
    //       await initMusicData(newVal);
    //       this.loading = false;
    //     },
    //   );
    //   initMusicData(this.isDev);

    //   if (!isMusicLoaded.value) {
    //     await new Promise<void>((resolve) => {
    //       const unwatch = watch(isMusicLoaded, (val) => {
    //         if (val) {
    //           unwatch();
    //           resolve();
    //         }
    //       });
    //     });
    //   }

    //   await this.initializeData();
    //   await this.getLocalStorage();
    //   await this.setSupportSkillLevel();
    //   // this.makeNewDeck();
    //   // console.log(window.location.search.replace('?', ''));
    //   // if (window.location.search.replace('?', '') !== '') {
    //   //   window.location.replace('/llllMgr/musicList');
    //   // }
    //   this.loading = false;
    // },
    async init() {
      this.loading = true;
      this.search = JSON.parse(JSON.stringify(DEFAULT_SEARCH));
      const settingsStore = useSettingsStore();
      settingsStore.loadSiteSettings();

      const auth = getAuth(rtdb.app);
      onAuthStateChanged(auth, (user) => {
        this.user = user;
        this.isAuthLoaded = true;
      });

      const musicStore = useMusicStore();
      const cardStore = useCardStore();

      watch(
        () => musicStore.musicListFromDB,
        (newVal) => {
          this.musicList = newVal;
        },
      );

      watch(
        () => this.isDev,
        async (newVal) => {
          this.loading = true;
          await cardStore.initCardData(newVal);
          await musicStore.initMusicData(newVal);
          this.loading = false;
        },
      );
      musicStore.initMusicData(this.isDev);
      cardStore.initCardData(this.isDev);

      if (!musicStore.isMusicLoaded || !cardStore.isLoaded) {
        await new Promise<void>((resolve) => {
          const unwatch = watch(
            [() => musicStore.isMusicLoaded, () => cardStore.isLoaded],
            ([musicLoaded, cardsLoaded]: [boolean, boolean]) => {
              if (musicLoaded && cardsLoaded) {
                unwatch();
                resolve();
              }
            },
          );
        });
      }

      await this.initializeData();
      await this.getLocalStorage();
      await this.setSupportSkillLevel();
      // this.makeNewDeck();
      // console.log(window.location.search.replace('?', ''));
      // if (window.location.search.replace('?', '') !== '') {
      //   window.location.replace('/llllMgr/musicList');
      // }
      this.loading = false;
    },
    /**
     * 補助関数: 指定した処理を非同期として実行するPromiseを返す。
     *
     * この関数は、同期的なコードを非同期コンテキストで実行可能にするためのもの。\
     * 必要に応じて、`setTimeout(resolve, 0)`を使って次のイベントループに処理を移譲し、\
     * ブラウザのUIを更新する機会を与えることができる。
     */
    wrapInPromise<T>(callback: () => T): Promise<T> {
      return new Promise((resolve) => {
        // 実際には大量の計算がメインスレッドで行われますが、
        // resolveを非同期にすることで、少なくとも呼び出し元はawaitで待機できます。
        // 重い処理の場合、setTimeout(() => { resolve(callback()); }, 0);
        // とすることで、ブラウザの再描画に時間を渡せます。（ただし処理速度は低下します）
        resolve(callback());
      });
    },
    /**
     * 処理をまとめるメインの非同期メソッド。\
     * 楽曲とカードのリストを作っている。
     *
     * @returns void
     */
    async initializeData() {
      const makeInitMusicData = this.wrapInPromise(() => {
        const musicStore = useMusicStore();
        this.musicList = musicStore.musicListFromDB;

        for (const musicID in this.musicList) {
          this.musicLevel[musicID] = this.musicList[musicID].level;
        }

        const bonusSkillList = {};

        for (const bonusSkillNameKey in BONUS_SKILL_NAMES) {
          bonusSkillList[BONUS_SKILL_NAMES[bonusSkillNameKey]] = 0;
        }

        for (const memberKey of getMemberKeys()) {
          this.supportSkill[memberKey] = JSON.parse(
            JSON.stringify(bonusSkillList),
          );
          this.memberData.centerList[memberKey] = {
            centerMusic: [],
            bonusSkill: JSON.parse(JSON.stringify(bonusSkillList)),
          };
        }

        return true;
      });

      const makeInitCardList = this.wrapInPromise(() => {
        // カードデータの初期化・拡張は useCardStore 側で行われるため、
        // ここでの処理は不要になりました。
        return true;
      });

      try {
        await Promise.all([makeInitMusicData, makeInitCardList]);
      } catch (error) {
        console.error('非同期処理中にエラーが発生しました:', error);
      }
    },
    /**
     * カード画像名作成
     *
     * @description
     * カード画像名を作成
     *
     * @param cardId カードID
     * @param isAwaking 覚醒フラグ
     * @returns カード画像名
     */
    makeCardIllustName(cardId: string, isAwaking = true) {
      return `${cardId}_${isAwaking ? 'after' : 'before'}`;
    },
    makeNewDeck() {
      const a = {
        name: `新規デッキ${this.deck.length + 1}`,
        period: this.thisPeriod,
        cardData: {},
      };

      for (const name of FORMATION_MEMBER[a.period]) {
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
     * ローカルストレージ設定
     *
     * @description
     * ローカルストレージにデータを保存する。
     *
     * @param setLocalStorageName ローカルストレージ名
     * @param value 値
     * @returns void
     */
    setLocalStorage(setLocalStorageName: LocalDBKeyNames, value: string) {
      localStorage[setLocalStorageName] = JSON.stringify(value);
    },
    /**
     * ローカルストレージデータ取得
     *
     * @description
     * ローカルストレージのデータを取得する。\
     * また、引数にデータを持たせて、バックアップファイルをインポートしたときの処理も行える。
     *
     * @param importData バックアップデータ
     * @returns void
     */
    getLocalStorage(importData?: {
      cardList?: CardListState;
      musicData?: MusicListState;
      sortSettings?: SortSettings;
      selectItemList?: SelectItemList;
      siteSettings?: SiteSettings;
    }) {
      const musicStore = useMusicStore();
      const cardStore = useCardStore();
      const settingsStore = useSettingsStore();
      const isImportData = importData !== undefined;

      if (
        (!isImportData && localStorage?.[LDB_KEY_NAMES.MUSIC_DATA]) ||
        (isImportData && importData?.musicData)
      ) {
        const loadedMusicLevel: Record<string, number> =
          isImportData && !!importData?.musicData
            ? importData.musicData.musicLevel
            : JSON.parse(localStorage[LDB_KEY_NAMES.MUSIC_DATA]).musicLevel;

        const sampleTitle: string | null = this.musicList.m_001?.title;
        let isConverted = false;

        if (sampleTitle && loadedMusicLevel[sampleTitle] !== undefined) {
          for (const musicTitle in loadedMusicLevel) {
            const id = musicStore.getMusicIdByTitle(musicTitle);

            if (id) {
              loadedMusicLevel[id] = loadedMusicLevel[musicTitle];
            }

            delete loadedMusicLevel[musicTitle];
          }

          isConverted = true;
        }

        this.musicLevel = {
          ...this.musicLevel,
          ...loadedMusicLevel,
        };

        if (isImportData || isConverted) {
          this.setLocalStorage(LDB_KEY_NAMES.MUSIC_DATA, {
            musicLevel: this.musicLevel,
          });
        }
      }

      if (!isImportData) {
        for (const musicID in this.musicList) {
          this.memberData.centerList[
            this.musicList[musicID].center
          ].centerMusic.push(musicID);
        }
      }

      if (
        (!isImportData && localStorage?.[LDB_KEY_NAMES.CARD]) ||
        (isImportData && importData?.cardList?.card)
      ) {
        const rawData: LocalStorageCardListType | undefined = isImportData
          ? importData?.cardList?.card
          : localStorage[LDB_KEY_NAMES.CARD]
            ? JSON.parse(localStorage[LDB_KEY_NAMES.CARD])
            : undefined;
        let lsCardList: Record<string, CardDataByMember> | null = null;

        if (rawData) {
          /**
           * カードリスト旧式判定処理
           *
           * @description
           * カードリストのデータのつくりが旧式であるか判定。\
           *「xx_000」形式であればそのまま返す。
           *
           * @param data カードリスト
           * @returns LocalStorageCardListType
           */
          const remakeCardList = (data: LocalStorageCardListType) => {
            if (
              data.kaho?.DR &&
              Object.keys(data.kaho.DR).length > 0 &&
              /^[a-z]+_\d{3}$/.test(Object.keys(data.kaho.DR)[0])
            ) {
              return data;
            }

            const _data = { ...data };

            for (const memberName in _data) {
              for (const rare in _data[memberName]) {
                const a = {};

                for (const cardName in _data[memberName][rare]) {
                  a[this.findCardId(memberName, cardName)] =
                    _data[memberName][rare][cardName];
                }

                _data[memberName][rare] = a;
              }
            }

            return _data;
          };

          lsCardList = this.makeExportCardData(remakeCardList(rawData));
        }

        if (lsCardList) {
          for (const memberName in cardStore.card) {
            if (lsCardList[memberName]) {
              for (const rare in cardStore.card[memberName]) {
                if (lsCardList[memberName][rare]) {
                  for (const id in cardStore.card[memberName][rare]) {
                    const lsCardData = lsCardList[memberName][rare][id];

                    if (lsCardData) {
                      cardStore.card[memberName][rare][id].fluctuationStatus = {
                        ...lsCardData.fluctuationStatus,
                      };

                      if (
                        lsCardData.fluctuationStatus.releasePoint === undefined
                      ) {
                        cardStore.card[memberName][rare][
                          id
                        ].fluctuationStatus.releasePoint = 0;
                      }

                      if (lsCardData.favorite) {
                        cardStore.card[memberName][rare][id].favorite = [
                          ...lsCardData.favorite,
                        ];
                      }
                    }
                  }
                }
              }
            }
          }
        }
        // ローカルストレージのデータを更新
        this.setLocalStorage(LDB_KEY_NAMES.CARD, this.makeExportCardData());
      }

      if (
        localStorage?.[LDB_KEY_NAMES.CARD_LIST_FILTER] ||
        (isImportData && importData?.cardList?.cardListFilter)
      ) {
        if (!isImportData) {
          // インポートデータがないとき
          const lsData: SearchSettings = JSON.parse(
            localStorage[LDB_KEY_NAMES.CARD_LIST_FILTER],
          );

          this.search = {
            cardList: {
              ...this.search.cardList,
              ...lsData.cardList,
            },
            skillList: {
              skillFilterType:
                lsData.skillList?.skillFilterType ??
                DEFAULT_SEARCH.skillList.skillFilterType,
              skillType: lsData.skillList.skillType,
              skillName: lsData.skillList.skillName,
            },
            cardSeries: lsData.cardSeries,
          };
        } else if (importData?.cardList?.cardListFilter) {
          // インポートデータがある＆カード絞り込み条件を反映させるとき
          if (importData?.cardList?.cardListFilter?.skillFilterType) {
            this.search.cardList = importData.cardList.cardListFilter;
          } else {
            this.search.cardList = {
              ...this.search.cardList,
              ...importData.cardList.cardListFilter.cardList,
            };
            this.search.cardSeries =
              importData.cardList.cardListFilter.cardSeries;
            this.search.skillList.skillFilterType =
              importData.cardList.cardListFilter.skillList.skillFilterType;
            this.search.skillList.skillName = {
              ...this.search.skillList.skillName,
              ...importData.cardList.cardListFilter.skillList.skillName,
            };
            this.search.skillList.skillType = {
              ...this.search.skillList.skillType,
              ...importData.cardList.cardListFilter.skillList.skillType,
            };
          }

          this.setLocalStorage(LDB_KEY_NAMES.CARD_LIST_FILTER, this.search);
        }
      }

      if (
        localStorage?.[LDB_KEY_NAMES.SELECT_ITEM_LIST] ||
        (isImportData && importData?.selectItemList)
      ) {
        if (!isImportData) {
          const getSelectItemList: SelectItemList = JSON.parse(
            localStorage[LDB_KEY_NAMES.SELECT_ITEM_LIST],
          );

          for (let i = 1; i <= 3; i++) {
            this.selectItemList[`item${i}`] = getSelectItemList[`item${i}`];
          }
        } else if (importData?.selectItemList) {
          for (let i = 1; i <= 3; i++) {
            this.selectItemList[`item${i}`] =
              importData.selectItemList[`item${i}`];
          }

          this.setLocalStorage(
            LDB_KEY_NAMES.SELECT_ITEM_LIST,
            this.selectItemList,
          );
        }
      }

      settingsStore.loadSiteSettings(importData);

      if (
        localStorage?.[LDB_KEY_NAMES.SORT_SETTINGS] ||
        (isImportData && importData?.sortSettings)
      ) {
        if (!isImportData) {
          const getSortSettings: SortSettings = JSON.parse(
            localStorage[LDB_KEY_NAMES.SORT_SETTINGS],
          );

          for (const word of ['card', 'music']) {
            if (getSortSettings[`${word}List`]) {
              this.sortSettings[`${word}List`] = {
                ...this.sortSettings[`${word}List`],
                ...getSortSettings[`${word}List`],
              };
            }
          }
        } else if (importData?.sortSettings) {
          for (const word of ['card', 'music']) {
            if (importData.sortSettings[`${word}List`]) {
              this.sortSettings[`${word}List`] = {
                ...this.sortSettings[`${word}List`],
                ...importData.sortSettings[`${word}List`],
              };
            }
          }

          this.setLocalStorage(LDB_KEY_NAMES.SORT_SETTINGS, this.sortSettings);
        }
      }
    },
    /**
     * ローカルストレージデータ削除
     *
     * @description
     * ローカルストレージのデータを削除する。
     *
     * @param deleteDataName 削除したいデータ名
     * @returns void
     */
    deleteLocalStorage(deleteDataName: string) {
      switch (deleteDataName) {
        case 'music':
          localStorage.removeItem(LDB_KEY_NAMES.MUSIC_DATA);
          break;
        case 'card':
          localStorage.removeItem(LDB_KEY_NAMES.CARD);
          localStorage.removeItem(LDB_KEY_NAMES.CARD_LIST_FILTER);
          break;
        default:
          localStorage.removeItem(LDB_KEY_NAMES.SELECT_ITEM_LIST);
      }
    },
    /**
     * モーダル表示
     *
     * @param showModalName 表示するダイアログの名前
     * @returns void
     */
    showModalEvent(showModalName: string) {
      this.switchDialog(showModalName);
      this.showModalName = showModalName;
    },
    setLevel(a: keyof TrainingStatus, e: Event) {
      this.settingCardData.fluctuationStatus[a] = Number(
        (e.target as HTMLInputElement).value,
      );
    },
    setOpenCard(id: string, name: string, style: string) {
      this.openCard.ID = id;
      this.openCard.name = name;
      this.openCard.style = style;
    },
    /**
     * カードID検索
     *
     * @description
     * メンバー名とカード名からカードIDを検索
     *
     * @param memberName メンバー名
     * @param cardName カード名
     * @return カードID
     */
    findCardId(memberName: MemberKeyValues | 'default', cardName: string) {
      const cardStore = useCardStore();
      if (cardName === 'default') {
        return cardStore.makeDefaultCardId(memberName);
      } else {
        const list = cardStore.cardList.filter((v) => {
          return v.cardName === cardName;
        });

        return list.length === 1
          ? list[0].ID
          : (list.find((v) => {
              return v.memberName === memberName;
            })?.ID ?? cardStore.makeDefaultCardId(memberName));
      }
    },
    /**
     * カードデータ検索処理
     *
     * @description
     * カードIDからカードデータを検索する。
     *
     * @param cardId カードID
     * @return カードデータ
     */
    findCardData(cardId: string): CardDataType {
      const cardStore = useCardStore();
      const id_split = cardId.split('_');

      if (id_split[1] === '000') {
        return {
          ...cardStore.card.default,
          ...{
            cardName: 'default',
          },
        };
      } else {
        const memberCardList = cardStore.card[conversionIdToKey(id_split[0])];

        for (const rare in memberCardList) {
          if (memberCardList[rare][cardId]) {
            return memberCardList[rare][cardId];
          }
        }
      }
    },
    /**
     * カードIDからカードのレアリティを検索
     *
     * @param cardId カードID
     * @return カードのレアリティ
     */
    searchRarity(cardId: string): Rare | 'default' {
      if (Number(cardId.split('_')[1]) === 0) {
        return 'default';
      } else {
        return this.findCardData(cardId)?.rare ?? '';
      }
    },
    searchSelectDeckCard(name: MemberColorKeys, style: string) {
      return this.selectDeck.cardData[name][style].id;
    },
    /**
     * 出力データ作成
     *
     * バックアップデータを作成する。
     *
     * @param data カードデータ
     * @returns カードデータ
     */
    makeExportCardData(
      data?: Record<string, CardDataByMember>,
    ): Record<string, CardDataByMember> {
      const cardStore = useCardStore();
      const result = {};
      const card = data ?? cardStore.card;

      for (const memberName of Object.keys(card)) {
        result[memberName] = {};

        for (const rare in card[memberName]) {
          result[memberName][rare] = {};

          for (const id in card[memberName][rare]) {
            result[memberName][rare][id] = {
              fluctuationStatus: {
                ...card[memberName][rare][id].fluctuationStatus,
              },
              favorite: [...card[memberName][rare][id].favorite],
            };
          }
        }
      }

      return result;
    },
    switchDialog(switchFlg: boolean) {
      this.dialog = !!switchFlg;
    },
    valueChange(target: string, val: number) {
      const musicStore = useMusicStore();
      if (target === 'musicLevel') {
        this.musicLevel[
          musicStore.getMusicIdByTitle(this.selectMusicTitle as string)
        ] = val;

        this.setLocalStorage(LDB_KEY_NAMES.MUSIC_DATA, {
          musicLevel: this.musicLevel,
        });
      } else {
        this.settingCardData.fluctuationStatus[target] = val;

        if (target === 'trainingLevel') {
          if (
            this.settingCardData.fluctuationStatus.cardLevel <
              this.minCardLevel ||
            this.settingCardData.fluctuationStatus.cardLevel > this.maxCardLevel
          ) {
            this.settingCardData.fluctuationStatus.cardLevel =
              this.minCardLevel;
          }
        } else if (target === 'releaseLevel') {
          if (
            this.settingCardData.fluctuationStatus.SALevel >
            this.changeSkillLevel
          ) {
            this.settingCardData.fluctuationStatus.SALevel =
              this.changeSkillLevel;
          }

          if (
            this.settingCardData.fluctuationStatus.SLevel >
            this.changeSkillLevel
          ) {
            this.settingCardData.fluctuationStatus.SLevel =
              this.changeSkillLevel;
          }
        }

        this.setLocalStorage(LDB_KEY_NAMES.CARD, this.makeExportCardData());
      }
    },
    /**
     * お気に入り変更
     *
     * @param target クリックしたお気に入りの形
     */
    changeFav(target: FavoriteIcon) {
      if (this.settingCardData.favorite.some((v) => v === target)) {
        this.settingCardData.favorite = this.settingCardData.favorite.filter(
          (v) => v !== target,
        );
      } else {
        this.settingCardData.favorite.push(target);
      }

      this.setLocalStorage(LDB_KEY_NAMES.CARD, this.makeExportCardData());
    },
    setSupportSkillLevel() {
      const cardStore = useCardStore();
      const cardDataList = cardStore.cardList.filter((targetCardData) => {
        return targetCardData.uniqueStatus.supportSkill !== undefined;
      });

      for (const cardData of cardDataList) {
        for (const targetBonusSkill in this.supportSkill[cardData.memberName]) {
          this.supportSkill[cardData.memberName][targetBonusSkill] = 0;

          if (cardData.fluctuationStatus.cardLevel > 0) {
            this.supportSkill[cardData.memberName][targetBonusSkill] =
              cardData.uniqueStatus.supportSkill.supportSkillList[
                targetBonusSkill
              ].initLevel;

            if (
              cardData.fluctuationStatus.releaseLevel >=
              cardData.uniqueStatus.supportSkill.supportSkillList[
                targetBonusSkill
              ].levelUp
            ) {
              this.supportSkill[cardData.memberName][targetBonusSkill] +=
                cardData.uniqueStatus.supportSkill.supportSkillList[
                  targetBonusSkill
                ].upLevel;
            }
          }
        }
      }
    },
    /**
     * ボーナススキルレベル計算処理
     *
     * @description
     * 各メンバーのボーナススキル+サポートスキルを計算して返す。
     *
     * @param memberName メンバーキー
     * @param skillName ボーナススキル名
     * @returns ボーナススキルLv.
     */
    setBonusSkillLevel(memberName: MemberColorKeys, skillName: string): number {
      if (!this.memberData.centerList[memberName]) {
        return 0;
      } else {
        return (
          this.memberData.centerList[memberName].bonusSkill[skillName] +
          this.supportSkill[memberName][skillName]
        );
      }
    },
    /*cardParam(style, target) {
     if (target === undefined) {
     target = {
     memberName: this.settingCardData.memberName,
     rare: this.settingCardData.rare,
     card: this.settingCardData.card,
     }
     }

     const selectCard = this.card[target.memberName][target.rare][target.card];
     return selectCard.uniqueStatus[style] + (selectCard.fluctuationStatus.cardLevel - 1) * (target.rare === 'R' ? 25 : 30);
     },*/
    resetMusicFilter(resetName: string) {
      if (/^(SA|S)(AP|Level)|(release|card|training)Level$/.test(resetName)) {
        this.search.cardList[resetName] = [
          DEFAULT_SEARCH.cardList[resetName][0],
          DEFAULT_SEARCH.cardList[resetName][1],
        ];
      } else if (this.search.cardList[resetName].length === 0) {
        switch (resetName) {
          case 'rare':
          case 'mood':
          case 'styleType':
          case 'memberName':
          case 'limited':
            this.search.cardList[resetName] = [
              ...DEFAULT_SEARCH.cardList[resetName],
            ];
            break;
          case 'favorite':
            this.search.cardList[resetName] = [...FAVORITE];
            break;
          default:
            for (const key in this[resetName]) {
              this.search.cardList[resetName].push(key);
            }
        }
      } else {
        this.search.cardList[resetName] = [];
      }
    },
    /**
     * データリセット
     *
     * @description
     * 引数で指定されたデータをリセットする。\
     * 内部的にだけではなく、ローカルストレージのデータもリセットする。
     *
     * @param resetDataNames リセットするデータ名
     * @returns void
     */
    dataReset(resetDataNames: string[]) {
      const cardStore = useCardStore();
      for (const removeDataName of resetDataNames) {
        switch (removeDataName) {
          case 'card': {
            for (const memberName in cardStore.card) {
              for (const rare in cardStore.card[memberName]) {
                for (const cardId in cardStore.card[memberName][rare]) {
                  const addStatus: CardStatus = {
                    fluctuationStatus: {
                      cardLevel: 0,
                      trainingLevel: 0,
                      SALevel: 1,
                      SLevel: 1,
                      releaseLevel: 1,
                      releasePoint: 0,
                    },
                    sortPoint: 0,
                    favorite: [],
                  };

                  cardStore.card[memberName][rare][cardId] = {
                    ...cardStore.card[memberName][rare][cardId],
                    ...addStatus,
                  };
                }
              }
            }

            this.setLocalStorage(LDB_KEY_NAMES.CARD, this.makeExportCardData());
            break;
          }
          case 'cardListFilter': {
            this.search = JSON.parse(JSON.stringify(DEFAULT_SEARCH));
            break;
          }
          case 'musicData': {
            const bonusSkillList = {};

            for (const key in BONUS_SKILL_NAMES) {
              bonusSkillList[BONUS_SKILL_NAMES[key]] = 0;
            }

            for (const name of getMemberKeys()) {
              this.supportSkill[name] = JSON.parse(
                JSON.stringify(bonusSkillList),
              );
              this.memberData.centerList[name].bonusSkill = JSON.parse(
                JSON.stringify(bonusSkillList),
              );

              for (const musicTitle in this.musicList) {
                this.musicLevel[musicTitle] = this.musicList[musicTitle].level;
              }

              this.setLocalStorage(LDB_KEY_NAMES.MUSIC_DATA, {
                musicLevel: this.musicLevel,
              });
            }
            break;
          }
          case 'selectItemList': {
            this.selectItemList = {
              item1: [],
              item2: [],
              item3: [],
            };
            this.setLocalStorage(
              LDB_KEY_NAMES.SELECT_ITEM_LIST,
              this.selectItemList,
            );
            break;
          }
          case 'sortSettings_card': {
            this.sortSettings.cardList = JSON.parse(
              JSON.stringify(this.sortSettings.cardList),
            );
            this.setLocalStorage(
              LDB_KEY_NAMES.SORT_SETTINGS,
              this.sortSettings,
            );
            break;
          }
          case 'siteSettings': {
            const settingsStore = useSettingsStore();
            settingsStore.resetSettings();
            break;
          }
          default:
            break;
        }
      }
    },
    /**
     * 設定をlocalStorageに保存
     *
     * @param setLocalDBName 保存する設定の名前
     * @returns void
     */
    changeSettings(setLocalDBName: LocalDBKeyNames) {
      if (setLocalDBName === LDB_KEY_NAMES.SITE_SETTINGS) {
        const settingsStore = useSettingsStore();
        settingsStore.saveSettings();
      } else {
        this.setLocalStorage(
          setLocalDBName,
          this[setLocalDBName.split('_')[1]],
        );
      }
    },
    setSelectCard(
      id: string,
      param: {
        cardLevel: number;
        SALevel: number;
        SLevel: number;
        releaseLevel: number;
      },
    ): void {
      this.selectDeck.cardData[this.openCard.name][this.openCard.style].id = id;
      this.selectDeck.cardData[this.openCard.name][
        this.openCard.style
      ].param.cardLevel = param.cardLevel;
      this.selectDeck.cardData[this.openCard.name][
        this.openCard.style
      ].param.SALevel = param.SALevel;
      this.selectDeck.cardData[this.openCard.name][
        this.openCard.style
      ].param.SLevel = param.SLevel;
      this.selectDeck.cardData[this.openCard.name][
        this.openCard.style
      ].param.releaseLevel = param.releaseLevel;
    },
    /**
     * 日付整形処理
     *
     * @param date 整形したい日付
     * @param lang 曜日の言語
     * @param zeroPad 0埋めするか
     * @returns 整形された日付
     */
    formatDate(date: Date, lang: 'ja' | 'en', zeroPad: boolean = false) {
      const week = {
        ja: ['日', '月', '火', '水', '木', '金', '土'],
        en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      };
      const dayOfWeek = week[lang][date.getDay()];
      const month = date.getMonth() + 1;
      const day = date.getDate();

      return `${date.getFullYear()}/${zeroPad ? String(month).padStart(2, '0') : month}/${zeroPad ? String(day).padStart(2, '0') : day}(${dayOfWeek}) ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
    },
  },
});
