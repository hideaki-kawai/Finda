<template>
  <v-row>
    <v-col cols="12" xs="12" sm="4" md="4" v-for="shop in shops">
      <v-card
        elevation="2"
        target="_blank"
        color="#f0f0f0"
        max-width="400"
        class="pb-3"
      >
        <v-row class="ml-1">
          <v-col cols="8">
            <h3 ref="shopName">{{ shop.name }}</h3>
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
            <a :href="shop.urls.pc" target="_blank" rel="noopener noreferrer">
              <v-img
                max-height="200"
                max-width="360"
                :src="shop.photo.pc.l"
              ></v-img>
            </a>
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
            <v-btn
              dark
              large
              height="80"
              color="pink darken-3"
              :data-shop="shop.name"
              @click="getInstagramInfo($event)"
            >
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
export default class SearchResult extends Vue {
  /**
   * 表示用データ
   */
  @Prop({ type: Array, required: true })
  shops!: [];

  igBaseURL = "https://graph.facebook.com/";

  /**
   * 検索用パラメーター
   */
  searchParam: any = {
    user_id: process.env.USER_ID,
    access_token: process.env.IG_API_KEY,
  };

  async getInstagramInfo(event: any) {
    console.log("this is a InstagramButton");
    console.log(event);
    // console.log(event.target.dataset.shop);
    // console.log(event.target.dataset);

    // クリックしたカードの店名を取得
    const query = event.currentTarget.getAttribute("data-shop");

    console.log(query);

    // ハッシュタグIDを取得
    await this.getInstagramHashTag(query);
    // ハッシュタグを元にInstagramで検索し、結果を取得
    await this.getInstagramHashTagItem();
  }

  /**
   * ハッシュタグID
   */
  hashTagId = "";

  /**
   * InstagramのハッシュタグIDを取得
   */
  async getInstagramHashTag(query: string) {
    const hashTagSearch = "ig_hashtag_search";

    // 検索qを画面から取得
    this.searchParam.q = query.replace(/ /g, "");
    // this.searchParam.q = "上智大学";
    console.log(this.searchParam);

    const param: {} = {
      params: this.searchParam,
    };
    // ハッシュタグIDをAPIから取得
    const res = await this.$axios
      .$get(this.igBaseURL + hashTagSearch, param)
      .catch((e: any) => {
        return e.response;
      });

    this.hashTagId = res.data[0].id;

    console.log("ハッシュタグID");
    console.log(res);
    console.log(this.hashTagId);
  }

  instagramItems = [];

  /**
   * Instagramのハッシュタグ検索結果を取得
   */
  async getInstagramHashTagItem() {
    this.searchParam.fields =
      "id,media_type,caption,media_url,children{media_url}";

    const param: {} = {
      params: this.searchParam,
    };

    // ハッシュタグ検索結果ををAPIから取得
    const res = await this.$axios
      .$get(this.igBaseURL + this.hashTagId + "/recent_media", param)
      .catch((e: any) => {
        return e.response;
      });
    this.instagramItems = res.data;

    console.log("インスタアイテム");
    console.log(res);
    console.log(this.instagramItems);
  }
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
