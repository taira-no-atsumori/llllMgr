<template>
  <h2 class="text-center mb-2">解放Lv.ボーナスとは？</h2>

  <p>
    楽曲の歌唱メンバーのMAIN
    STYLEに設定しているカードの解放Lv.を上げると、ライブグランプリのグランプリPt.を増加させることができます。<br />
    この増加できる値のことを「解放Lv.ボーナス」と呼びます。<br />
    解放Lv.ボーナスは、レアリティと解放状況によって以下のように変わります。
  </p>

  <v-table>
    <thead>
      <tr>
        <th rowspan="2" class="text-center">レアリティ</th>
        <th colspan="5" class="text-center">解放状況</th>
      </tr>
      <tr>
        <th v-for="i of 5" :key="i" class="text-center">♪×{{ i }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(list, rarity) of GRANDPRIX_BONUS.releaseLv" :key="rarity">
        <th>{{ rarity }}</th>
        <td v-for="bonus of list" :key="bonus" class="text-center">
          +{{ bonus * 100 }}%
        </td>
      </tr>
    </tbody>
  </v-table>
  ※DRカードはライブグランプリに参加できないため、解放Lv.ボーナス対象外
</template>

<script setup lang="ts">
import { GRANDPRIX_BONUS } from '@/constants/grandprixBonus';
</script>
