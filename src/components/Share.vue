<template>
<ul class="text-center">
  <li class="mb-3">
    <p class="mb-1">Xでシェア</p>
    <v-btn
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      data-url="x.gd/VR5u2"
      data-hashtags="リンマネ"
      data-show-count="false"
      prepend-icon="mdi-alpha-x-box-outline"
      color="black"
    >Share</v-btn>
  </li>
  <li class="mb-3">
    <v-divider></v-divider>
  </li>
  <li>
    <p>QRコードでシェア</p>
    <img
      :lazy-src="require(`@/assets/QRcode.webp`)"
      :src="require(`@/assets/QRcode.webp`)"
      style="width: 310px;"
    >
  </li>
</ul>
</template>