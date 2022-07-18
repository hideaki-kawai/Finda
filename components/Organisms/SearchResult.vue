<template>
  <v-row class="px-2 mb-10">
    <v-col
      cols="12"
      xs="12"
      sm="4"
      md="3"
      v-for="shop in shops"
      class="d-flex justify-space-around"
    >
      <v-responsive :aspect-ratio="16 / 9">
        <v-card
          elevation="2"
          target="_blank"
          color="#f0f0f0"
          max-width="400"
          min-height="450"
          class="pb-3"
        >
          <v-row class="ml-1 pt-3">
            <v-col cols="9" class="pr-0">
              <h3>{{ shop.name }}</h3>
              <span class="genre"
                >{{ shop.genre.name }} | {{ shop.small_area.name }}</span
              >
            </v-col>
            <v-spacer></v-spacer>
            <!-- Instagram検索ボタン -->
            <v-col cols="3" class="pl-0">
              <IgButtonAndSearchBottomSheet
                :shopName="shop.name"
              ></IgButtonAndSearchBottomSheet>
            </v-col>
          </v-row>
          <!-- イメージ -->
          <v-row class="mx-0 mt-n3">
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
          <div>
            <h4 class="ml-2 my-2 catch">{{ shop.catch }}</h4>
          </div>

          <section class="px-2">
            <ul>
              <li>{{ shop.non_smoking }}</li>
              <li>予算:【{{ shop.budget.average }}】</li>
              <li>貸切情報:【 {{ shop.charter }}】</li>
              <li>アクセス:【{{ shop.access }}】</li>
            </ul>
          </section>
        </v-card>
      </v-responsive>
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
  shops!: any[];
}
</script>

<style scoped>
h3 {
  font-size: 16px;
}
.genre {
  font-size: 14px;
}
.catch {
  font-size: 15px;
}
ul {
  list-style: none;
  padding-left: 0;
  font-size: 12px;
}
ul li {
  margin: 5px 0;
}
</style>
