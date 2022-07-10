<template>
  <v-app>
    <v-main>
      <CommonHeader></CommonHeader>
      <v-row class="main-content-inner" no-gutters>
        <v-col>
          <Nuxt />
        </v-col>
      </v-row>
      <CommonFooter class="footer"></CommonFooter>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class Default extends Vue {}
</script>

<style scoped>
* {
  box-sizing: border-box;
  overflow: hidden;
}
</style>
