<template>
  <v-row justify="center">
    <v-expansion-panels accordion>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <span style="color: #6cb4c2; font-size: 16px; font-weight: 600">
            <v-icon dense color="#6CB4C2">mdi-silverware-fork-knife</v-icon>
            お店を探す</span
          ></v-expansion-panel-header
        >
        <v-expansion-panel-content color="blue lighten-5">
          <div class="p-1">
            <CommonTextBox
              icon="mdi-magnify"
              class="mt-3"
              placeholder="新宿 居酒屋"
              v-model="searchForm.keyword"
            ></CommonTextBox>
            <!-- <CommonSelectBox
              label="ランチorディナー"
              icon="mdi-moon-first-quarter"
            ></CommonSelectBox> -->
            <v-row class="pt-2">
              <v-col cols="4">
                <CommonSelectBox
                  label="ランチorディナー"
                  icon="mdi-sun-clock"
                  v-model="searchForm.isLanch"
                ></CommonSelectBox>
              </v-col>
              <v-col cols="4">
                <CommonSelectBox
                  label="予算1"
                  icon="mdi-cash-multiple"
                  v-model="searchForm.budget1"
                ></CommonSelectBox>
              </v-col>
              <v-col cols="4">
                <CommonSelectBox
                  label="予算2"
                  v-model="searchForm.budget2"
                ></CommonSelectBox>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-btn
                class="mx-5 mb-5 small-button"
                color="#6CB4C2"
                width="280"
                @click="search()"
                ><v-icon dark size="18" color="#fff"> mdi-magnify</v-icon
                >検索する</v-btn
              >
            </v-row>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script lang="ts">
export interface Form {
  keyword: string;
  isLanch: string;
  budget1: string;
  budget2: string;
}
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class Default extends Vue {
  /**
   * 検索用フォーム
   * @type {Form}
   */
  searchForm: Form = {
    keyword: "",
    isLanch: "",
    budget1: "",
    budget2: "",
  };

  search() {
    console.log(this.searchForm);
  }
}
</script>

<style scoped></style>
