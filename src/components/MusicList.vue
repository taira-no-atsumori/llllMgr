<template>
  <h1>MUSIC LIST ～ 楽曲一覧 / 楽曲マスタリーレベル設定 ～</h1>
  <v-expansion-panels class="mb10">
    <v-expansion-panel>
      <v-expansion-panel-title>ページ詳細</v-expansion-panel-title>
      <v-expansion-panel-text>
        リンクラに実装されている楽曲一覧です。<br>
        各ジャケットをクリックすると、楽曲の詳細が見られます。<br>
        詳細画面に設定した楽曲マスタリーLv.は、絞り込みの下に表示されます。
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
  <v-container fluid class="px-1">
    <v-row no-gutters>
      <v-col cols="12">
        <h3>絞り込み</h3>
      </v-col>
      <v-col
        v-for="skillName in bonusSkillList"
        :key="skillName"
        :for="skillName"
        cols="3"
        sm="2"
        md="1"
        lg="1"
        xl="1"
      >
        <v-checkbox
          v-model="selectBonusSkillList"
          :value="skillName"
          color="pink"
          hide-details
          :click="store.makeMusicList(selectBonusSkillList)"
        >
          <template v-slot:label>
            <v-img
              :src="require(`@/assets/${skillName}.png`)"
              :alt="skillName"
              style="width: 50px"
            ></v-img>
          </template>
        </v-checkbox>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(arr, memberName) in store.charactorName"
        :key="memberName"
        cols="12"
        sm="6"
        md="4"
        lg="2"
        xl="2"
        style="pa-0"
      >
        <v-sheet>
          <img
            :src="require(`@/assets/member_icon/icon_SD_${memberName}.png`)"
            class="mr-1"
            style="width: 35px;"
          >合計マスタリーLv. {{ store.makeTotalMastaryLv(memberName) }}
          <p>
            <span
              v-for="skillName in bonusSkillList"
              :key="skillName"
              class="mr-1"
            >
              <img
                :src="require(`@/assets/${skillName}.png`)"
                style="width: 30px;"
              >×{{ store.memberData.centerList[memberName].bonusSkill[skillName] }}
            </span>
          </p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <v-divider class="mb-2"></v-divider>
  <dl>
    <div
      v-for="(ary, songTitle) in store.makeMusicList(selectBonusSkillList)"
      :key="ary"
      @click="store.showModalEvent('setLeaningLevel'); store.selectMusic(songTitle)"
    >
      <p><img :src="require(`@/assets/CD_jacket/${songTitle}.jpg`)" :alt="songTitle" class="songJacket"></p>
      <dt class="mb-2">{{ songTitle }}</dt>
      <dd>獲得ボーナススキル:<img :src="require(`@/assets/${ary.bonusSkill}.png`)" :alt="ary.bonusSkill"></dd>
    </div>
    <div v-if="selectBonusSkillList.length === 0">見つかりませんでした…</div>
  </dl>
</template>

<script>
export default {
  name: 'MusicList',
  components: {},
  data() {
    return {
      bonusSkillList: ['ビートハートアップ', 'ボルテージアップ', 'メンタルリカバー', 'LOVEボーナス'],
      selectBonusSkillList: ['ビートハートアップ', 'ボルテージアップ', 'メンタルリカバー', 'LOVEボーナス']
    }
  },
  created() {

  },
  methods: {}
}
</script>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<style lang="scss" scoped>
dl {
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;

  div {
    width: 150px;
    height: 100%;
    margin: 0 5px 10px 5px;
    cursor: pointer;

    dt {
      border: 2px solid #000;
      border-radius: 5px;
      padding: 3px;
      margin-bottom: 5px;
      text-align: center;
    }

    dd {
      img {
        width: 35px;
      }
    }
  }
}

.songJacket {
  width: 150px;
}

@media screen and (max-width: 600px) {
  dl {
    div {
      width: 47%;
      height: 100%;
      margin: 0 1.5% 10px 1.5%;

      dt {
        border: 2px solid #000;
        border-radius: 5px;
        padding: 3px;
        margin-bottom: 5px;
        text-align: center;
      }

      dd {
        img {
          width: 35px;
        }
      }
    }
  }

  .songJacket {
    width: 100%;
  }
}

#musicTitle {
  text-align: center;
}

.member {
  display: inline-block;
  margin-right: 10px;
}

.left {
  width: 300px;
}

.right {
  width: 300px;
  margin: 0 0 0 10px;
}

img {
  width: 100%;
}

.subtitle {
  display: inline-block;
  color: #fff;
  background: #e5762c;
  padding: 2px 10px 2px 5px;
  border-radius: 0 15px 15px 0;
  margin: 0 0 3px 0;
}

@media screen and (max-width: 600px) {
  .right {
    margin: 0 0 5px 0;
  }

  .left {
    margin-bottom: 10px;
  }

  .right, 
  .left {
    width: 100%;
  }
}
</style>