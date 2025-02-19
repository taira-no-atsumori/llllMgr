<template>
<v-container class="pa-0">
  <h2>獲得ボーナススキル詳細</h2>

  <div>
    <template
      v-for=" memberName in store.memberNameList"
      :key="memberName"
    >
      <img
        v-if="!store.isOtherMember(memberName)"
        :src="require(`@/assets/member_icon/icon_SD_${memberName}.webp`)"
        class="cursor-pointer"
        :style="`width: 10%; max-width: 45px; margin: 0 0.5%; filter: grayscale(${memberName === store.checkMasteryMember ? 0 : 1});`"
        @click="store.checkMasteryMember = memberName;"
      >
    </template>
  </div>

  <div class="font-weight-bold mb-1">
    <span class="subtitle px-2 py-1">合計楽曲マスタリーレベル</span> {{ store.makeTotalMasteryLv(store.checkMasteryMember) }}
  </div>
  <div class="mb-3">
    {{ store.makeFullName(store.checkMasteryMember) }}のセンター楽曲をプレイする時、ハート回収時のLOVEの値<span class="text-pink">+{{ (Math.floor((store.makeTotalMasteryLv(store.checkMasteryMember) * 0.05) * 100) / 100).toFixed(2) }}</span>%
  </div>

  <div class="font-weight-bold mb-2">
    <span class="subtitle px-2 py-1">獲得済みボーナススキル</span>
  </div>

  <ul>
    <template
      v-for="(ary, bonusSkill, i) in store.outputBonusSkillList"
      :key="bonusSkill"
    >
      <li class="mb-1">
        <div class="d-flex flex-row align-center mb-1">
          <div class="mr-1 mt-1">
            <v-img
              :src="require(`@/assets/bonusSkill_icon/${bonusSkill}.webp`)"
              style="width: 32px; height:32px; border-radius: 3px;"
            ></v-img>
            <p class="text-center" style="font-size: 14px;">Lv.{{ store.outputBonusSkillList[bonusSkill].skillLevel }}</p>
          </div>
          <dl class="d-flex flex-column ml-1">
            <dt class="font-weight-bold">{{ bonusSkill }}</dt>
            <dd class="text-body-2">{{ ary.text[0] }}<span class="text-pink">{{ makeBonusSkillDescriptionText(bonusSkill) }}</span>{{ ary.text[1] }}</dd>
          </dl>
        </div>

        <v-divider v-if="(i + 1) < Object.keys(store.outputBonusSkillList).length"></v-divider>
      </li>
    </template>
    <li v-if="Object.keys(store.outputBonusSkillList).length === 0">習得済みのボーナススキルはありません。</li>
  </ul>
</v-container>
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
  
  const makeBonusSkillDescriptionText = (bonusSkill) => {
    if (/ボルテージアップ|メンタルリカバー/.test(bonusSkill)) {
      let num = store.bonusSkillList[bonusSkill].init;

      for (const i of store.bonusSkillList[bonusSkill].ary) {
        if (store.memberData.centerList[store.checkMasteryMember].bonusSkill[bonusSkill] <= i) {
          break;
        } else {
          num = num - 1;
        }
      }

      return num;
    } else {
      return store.memberData.centerList[store.checkMasteryMember].bonusSkill[bonusSkill] * 0.5;
    }
  }
</script>

<script>
export default {
  name: 'MasteryLevel',
  data() {
    return {}
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {}
}
</script>