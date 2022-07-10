<template>
  <header>
    <v-app-bar color="#FFFFFB" class="d-block" flat>
      <nuxt-link to="/">
        <h1>
          <v-img src="/FindaLogo.svg" class="mt-2 ml-n3"></v-img>
        </h1>
      </nuxt-link>
    </v-app-bar>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class Default extends Vue {}
</script>

<style scoped>
.menu-button {
  color: #fffffb;
}
</style>
