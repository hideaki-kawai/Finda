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
            <!-- <v-btn
              dark
              large
              height="80"
              color="pink darken-3"
              :data-shop="shop.name"
              @click="getInstagramInfo($event)"
            >
              <v-icon dark size="40"> mdi-instagram </v-icon>
            </v-btn> -->
            <IgButtonAndSearchBottomSheet
              :shopName="shop.name"
            ></IgButtonAndSearchBottomSheet>
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
