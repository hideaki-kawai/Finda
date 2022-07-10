<template>
  <div>
    <CommonTextBox label="キーワード" icon="mdi-magnify"></CommonTextBox>
    <CommonSelectBox
      label="ランチorディナー"
      icon="mdi-moon-first-quarter"
    ></CommonSelectBox>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class Default extends Vue {}
</script>

<style scoped></style>
