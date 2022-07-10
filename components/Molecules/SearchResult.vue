<template>
  <v-row>
    <v-col cols="12" xs="12" sm="4" md="4" v-for="shop in shops">
      <v-card
        elevation="2"
        :href="shop.urls.pc"
        target="_blank"
        color="#f0f0f0"
        max-width="400"
        class="pb-3"
      >
        <v-row class="ml-1">
          <v-col cols="8">
            <h3>{{ shop.name }}</h3>
            <span>{{ shop.genre.name }} | {{ shop.small_area.name }}</span>
          </v-col>
          <v-spacer></v-spacer>
          <!-- お気に入りボタン -->
          <v-col cols="4">
            <v-btn class="ml-7" fab dark small color="amber" disabled>
              <v-icon dark> mdi-star </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <!-- イメージ -->
        <v-row class="mx-0 mt-n2">
          <v-col>
            <v-img
              max-height="200"
              max-width="360"
              :src="shop.photo.pc.l"
            ></v-img>
          </v-col>
        </v-row>
        <!-- キャッチコピー -->
        <h4 class="ml-2 mt-2 catch">{{ shop.catch }}</h4>
        <v-row class="ml-0">
          <v-col cols="8">
            <!-- 喫煙可否 -->
            <div class="is-smoke">{{ shop.non_smoking }}</div>
            <!-- 予算 -->
            <div>
              <span
                ><v-icon> mdi-cash-multiple </v-icon
                >{{ shop.budget.average }}</span
              >
            </div>
            <!-- キャパ -->
            <div class="ml-1 people">{{ shop.charter }}</div>
            <!-- アクセス -->
            <div class="access">{{ shop.access }}</div>
          </v-col>
          <!-- インスタアクセスボタン -->
          <v-col cols="4" class="m-3 mt-n3">
            <v-btn dark large height="80" color="pink darken-3">
              <v-icon dark size="40"> mdi-instagram </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "nuxt-property-decorator";
@Component
export default class Default extends Vue {
  /**
   * 表示用データ
   */
  @Prop({ type: Array, required: true })
  shops!: [];
  @Watch("shops")
  showshops() {
    console.log("this is SearchResult");
    console.log(this.shops);
  }

  /**
   * ダミーデータ
   */
  // shops = [
  //   {
  //     name: "ととしぐれ 都立大学",
  //     urls: {
  //       pc: "https://into-the-program.com/vuetify-button-align/",
  //     },
  //     genre: {
  //       name: "居酒屋",
  //     },
  //     small_area: {
  //       name: "都立大学",
  //     },
  //     catch: "全国の魚を堪能できる都立大学の居酒屋" ,
  //     non_smoking: "全面禁煙",
  //     budget: {
  //       name: "1000~5000円",
  //     },
  //     charter:
  //       "貸切可 ：貸切可能人数：30名様～40名様。人数などお気軽にご相談ください。",
  //     access: "都立大学駅から3分",
  //   },
  //   {
  //     name: "ととしぐれ2 都立大学",
  //     urls: {
  //       pc: "https://into-the-program.com/vuetify-button-align/",
  //     },
  //     genre: {
  //       name: "居酒屋",
  //     },
  //     small_area: {
  //       name: "都立大学",
  //     },
  //     catch: "全国の魚を堪能できる都立大学の居酒屋",
  //     non_smoking: "全面禁煙",
  //     budget: {
  //       name: "1000~5000円",
  //     },
  //     charter:
  //       "貸切可 ：貸切可能人数：30名様～40名様。人数などお気軽にご相談ください。",
  //     access: "都立大学駅から3分",
  //   },
  // ];
}
</script>

<style scoped>
h3 {
  font-size: 16px;
}
span,
.is-smoke,
.people,
.access {
  font-size: 12px;
}
.catch {
  font-size: 14px;
}
</style>
