<template>
  <div>
    <template>
      <div class="text-center">
        <v-bottom-sheet v-model="sheet" scrollable>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              v-bind="attrs"
              v-on="on"
              large
              height="80"
              color="pink darken-3"
            >
              <v-icon dark size="40"> mdi-instagram </v-icon>
            </v-btn>
          </template>
          <v-card>
            <div class="v-card-title px-3 mt-3">
              <v-text-field
                label="Instagram検索"
                prepend-icon="mdi-magnify"
                v-model="shopNameValue"
                @keydown.enter="getInstagramItems(keyword)"
              >
                <template v-slot:append-outer>
                  <v-btn
                    color="primary"
                    height="27"
                    @click="getInstagramItems(keyword)"
                    ><span>検索</span></v-btn
                  >
                </template>
              </v-text-field>
              <p>
                ※ハッシュタグ検索の精度の都合上、一単語に絞って検索してください。
              </p>
            </div>
            <v-divider></v-divider>
            <v-card-text class="pt-3 px-1" style="height: 500px">
              <!-- ローディング -->
              <div v-if="isBusy">
                <v-row>
                  <v-col class="text-center">
                    <v-progress-circular
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                  </v-col>
                </v-row>
              </div>
              <!-- 画像とパーマリンク -->
              <div v-else>
                <v-row dense v-if="!errorMessage">
                  <v-col cols="4" v-for="instagramItem in instagramItems">
                    <a
                      :href="instagramItem.permalink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <v-img
                        lazy-src="https://picsum.photos/id/11/10/6"
                        min-height="140"
                        aspect-ratio="2"
                        :src="instagramItem.media_url"
                      ></v-img>
                    </a>
                  </v-col>
                  <!-- <v-col v-else>
                    <p class="text-center">{{ errorMessage }}</p>
                  </v-col> -->
                </v-row>
                <v-row v-else>
                  <v-col>
                    <p class="text-center">{{ errorMessage }}</p>
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
          </v-card>
        </v-bottom-sheet>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
@Component
export default class IgButtonAndSearchBottomSheet extends Vue {
  /**
   * ボトムシート開閉用変数
   */
  sheet: boolean = false;

  /**
   * 非同期操作を実行中か否か判定するための変数
   * @type {boolean}
   */
  isBusy: boolean = false;

  /**
   * エラーメッセージ格納
   */
  errorMessage: string = "";

  /**
   * クリックしたボタンの店名
   */
  @Prop({ type: String, required: true })
  shopName!: string;

  /**
   * Instagram検索用キーワード
   */
  keyword = "";

  get shopNameValue() {
    return this.shopName;
  }

  set shopNameValue(val: string) {
    this.keyword = val;
  }

  /**
   * InstagramハッシュタグIDを格納する用の変数
   */
  hashTagId = "";

  async getInstagramItems(keyword: string) {
    console.log("InstagramSearchButton is pushed!");
    console.log(keyword);

    this.isBusy = true;

    // ハッシュタグIDを取得
    await this.getInstagramHashTag(keyword);
    // ハッシュタグを元にInstagramで検索し、結果を取得
    this.getInstagramHashTagItem();
    // this.isBusy = false;
    console.log(
      "インスタ検索処理が終わったあとのエラーメッセージ：" + this.errorMessage
    );
  }

  /**
   * Instagram検索用パラメーター
   */
  searchParam: any = {
    user_id: process.env.USER_ID,
    access_token: process.env.IG_API_KEY,
  };

  /**
   * InstagramのハッシュタグIDを取得
   */
  async getInstagramHashTag(query: string) {
    // 検索qを画面から取得
    this.searchParam.q = query;
    // this.searchParam.q = "上智大学";

    console.log("検索用パラメーター");
    console.log(this.searchParam);

    const param: {} = {
      params: this.searchParam,
    };
    // ハッシュタグIDをAPIから取得
    const res = await this.$axios
      .$get(process.env.IG_BASE_URL + "ig_hashtag_search", param)
      .catch((e: any) => {
        return e.response;
      });

    console.log("ハッシュタグAPIレスポンス");
    console.log(res);

    // res.data.errorにエラーがあるか条件分岐
    if (!res.data.error) {
      this.hashTagId = res.data[0].id;
    } else {
      this.isBusy = false;
      console.log("インスタハッシュタグの結果がなかったときの処理");
      // ハッシュタグIDの初期化
      this.hashTagId = "";
      console.log(this.hashTagId);
      console.log(this.instagramItems);
      this.errorMessage = "Instagramに検索IDがありません。";
    }

    console.log("ハッシュタグID" + this.hashTagId);
  }

  /**
   * ハッシュタグ検索APIから取得したInstagramの投稿を格納する配列
   */
  instagramItems = [];

  /**
   * Instagramのハッシュタグ検索結果を取得
   */
  async getInstagramHashTagItem() {
    this.searchParam.fields =
      "id,media_type,media_url,children{media_url},permalink";

    const param: {} = {
      params: this.searchParam,
    };

    // ハッシュタグ検索結果ををAPIから取得
    const res = await this.$axios
      .$get(process.env.IG_BASE_URL + this.hashTagId + "/recent_media", param)
      .catch((e: any) => {
        return e.response;
      });

    console.log(res);

    let viewInstagramItems: any;

    // resのdataに中身があるかどうか条件分岐
    if (res.data.length > 0) {
      viewInstagramItems = res.data;
      this.errorMessage = "";
    } else {
      this.isBusy = false;
      console.log("インスタの結果がなかったときの処理");
      // instagramItemの初期化
      this.instagramItems.length = 0;
      console.log(this.instagramItems);
      this.errorMessage = "Instagramに検索結果がありません。";
    }

    console.log("インスタアイテム");
    console.log(viewInstagramItems);

    // media_typeがアルバムなら最初の一枚だけmedia_urlに格納
    viewInstagramItems.forEach((instagramItem: any) => {
      switch (instagramItem.media_type) {
        case "IMAGE":
          break;
        case "CAROUSEL_ALBUM":
          instagramItem.media_url = instagramItem.children.data[0].media_url;
          break;
        case "VIDEO":
          instagramItem.media_url = "/movie_icon.png";
          break;
      }
    });
    this.isBusy = false;
    this.instagramItems = viewInstagramItems;
  }
}
</script>

<style scoped></style>
