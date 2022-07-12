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
            <div class="v-card-title px-3">
              <v-text-field
                label="Instagram検索"
                prepend-icon="mdi-magnify"
                value="都立大学 居酒屋"
              >
                <template v-slot:append-outer>
                  <v-btn color="primary" height="27"><span>検索</span></v-btn>
                </template>
              </v-text-field>
              <p>
                ※ハッシュタグ検索の精度の都合上、一単語に絞って検索してください。
              </p>
            </div>
            <v-divider></v-divider>
            <v-card-text class="pt-3 px-1" style="height: 500px">
              <!-- 画像とパーマリンク -->
              <v-row dense>
                <v-col cols="4" v-for="n in 15" :key="n">
                  <a
                    href="https://www.instagram.com/p/Cf3orFQJjr0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <v-img
                      lazy-src="https://picsum.photos/id/11/10/6"
                      min-height="140"
                      aspect-ratio="2"
                      src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/292535298_570319274643680_8888283717217545667_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=wil7XuFTBF4AX9aOG_s&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=AEoDcc0EAAAA&oh=00_AT9097ggZGYoNDPEGFCPUFuI2VdCGWKPEdwZBSDXPd5cLg&oe=62D1B8F4"
                    ></v-img>
                  </a>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-bottom-sheet>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class IgButtonAndSearchBottomSheet extends Vue {
  /**
   * ボトムシート開閉用変数
   */
  sheet: boolean = false;
}
</script>

<style scoped></style>
