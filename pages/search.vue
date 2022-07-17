<template>
  <div class="py-3">
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
              <v-form>
                <CommonTextBox
                  icon="mdi-magnify"
                  class="mt-3"
                  placeholder="新宿 居酒屋"
                  v-model="searchForm.keyword"
                  rules="required"
                  label="キーワード"
                  @search="search"
                ></CommonTextBox>
                <v-row class="pt-2">
                  <v-col cols="4">
                    <CommonSelectBox
                      label="ランチorディナー"
                      icon="mdi-sun-clock"
                      v-model="searchForm.isLanch"
                      :options="lanchInfo"
                    ></CommonSelectBox>
                  </v-col>
                  <v-col cols="4">
                    <BudgetSelectBox
                      label="予算1"
                      icon="mdi-cash-multiple"
                      v-model="searchForm.budget1"
                      :options="budgetInfo"
                    ></BudgetSelectBox>
                  </v-col>
                  <v-col cols="4">
                    <BudgetSelectBox
                      label="予算2"
                      v-model="searchForm.budget2"
                      :options="budgetInfo"
                    ></BudgetSelectBox>
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
              </v-form>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <div class="mt-5"></div>
    <p v-if="noResult" class="text-center">検索結果はありません</p>
    <SearchResult :shops="restaurantInfo" v-else></SearchResult>
  </div>
</template>

<script lang="ts">
export interface Form {
  keyword: string;
  isLanch: string;
  budget1: string;
  budget2: string;
}
import { Component, Vue, Watch } from "nuxt-property-decorator";
import { hotpepperStore } from "~/store";
@Component
export default class Search extends Vue {
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

  /**
   * 店舗情報
   */
  restaurantInfo: any = [];

  /**
   * 検索結果フラグ
   */
  noResult = true;

  /**
   * 検索のセレクトボックスで選択するランチの有無
   */
  lanchInfo = [
    { text: "ランチなし", value: "0" },
    { text: "ランチあり", value: "1" },
  ];

  /**
   * 検索のセレクトボックスで選択する予算一覧
   */
  budgetInfo: any = [];

  /**
   * 検索用パラメーター
   */
  searchParam: {} = {
    key: process.env.API_KEY,
    format: "json",
    count: "20",
  };

  /**
   * 検索ボタンクリック処理
   */
  async search() {
    if (!this.searchForm.keyword) {
      return;
    }
    const searchCondition = Object.assign(this.searchForm, this.searchParam);

    const param: {} = {
      params: searchCondition,
    };
    // 店舗情報をAPIから取得
    const res = await this.$axios
      .$get("/api" + "/gourmet/v1/", param)
      .catch((e: any) => {
        return e.response;
      });

    const restaurantInfo: any = res.results.shop;

    if (restaurantInfo.length > 0) {
      this.restaurantInfo = restaurantInfo;
      this.noResult = false;
    } else {
      console.log("Null");
    }
  }

  /**
   * 予算情報をAPIから取得する処理
   */
  async created() {
    const param: {} = {
      params: this.searchParam,
    };
    // 予算情報をAPIから取得
    const res = await this.$axios
      .$get("/api" + "/budget/v1/", param)
      .catch((e: any) => {
        return e.response;
      });
    const budgetInfo: any = res.results.budget;
    budgetInfo.unshift({ code: "", name: "" });
    this.budgetInfo = budgetInfo;
  }

  /**
   * 検索結果をStoreから取得する
   */
  // get restaurantItems(): any {
  //   return hotpepperStore.getRestaurants;
  // }
}
</script>

<style scoped></style>
