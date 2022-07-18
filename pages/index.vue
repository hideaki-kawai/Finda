<template>
  <div>
    <v-container>
      <CommonButton
        color="#6CB4C2"
        buttonIcon="mdi-star"
        buttonText="お店を探す"
        href="search"
        height="170"
        width="290"
        class="my-10"
      />
      <CommonButton
        color="#FFBF00"
        buttonIcon="mdi-silverware-fork-knife"
        buttonText="お気に入り"
        href="favorite"
        height="170"
        width="290"
        disabled="disabled"
      />
      <p class="text-center mt-3">Coming soon...</p>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import CommonButton from "../components/Molecules/CommonButton.vue";
@Component({
  components: { CommonButton },
})
export default class index extends Vue {}
</script>

<style scoped></style>
