<template>
  <div>
    <v-container>
      <v-row class="text-center">
        <div class="home-content">
          <h2 class="my-6">
            お店を選ぶときにアプリを <br />
            行ったり来たりするの <br />
            大変じゃないですか？
          </h2>
          <span>
            Findaは、インスタを見ながらHotPepperで <br />
            お店選びをするあなたのためのツールです。
          </span>
          <div>
            <v-btn class="mt-7 small-button" color="#EF9088" rounded href="/top"
              >使ってみる</v-btn
            >
          </div>
        </div>
      </v-row>
      <v-row justify="center" class="py-3">
        <v-icon size="50" color="#57B7D2" dark class="circle-icon">
          mdi-check-circle-outline
        </v-icon>
      </v-row>
      <section>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4"
              ><h3>HotPepper API×Instagram API</h3>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p></v-col
            >
            <v-col cols="12" sm="6" md="4"
              ><h3>HotPepper API×Instagram API</h3>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p></v-col
            >
            <v-col cols="12" sm="6" md="4"
              ><h3>HotPepper API×Instagram API</h3>
              <p>
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p></v-col
            >
          </v-row>
        </v-container>
      </section>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class Default extends Vue {}
</script>

<style scoped>
.home-content {
  background-color: #6cb4c2;
  height: 350px;
  width: 100%;
  color: #fafcfd;
}

.small-button {
  font-size: 14px;
  color: #fafcfd;
  width: 205px;
}

.circle-icon {
  font-weight: 300;
}

h3 {
  color: #ffaacc;
  font-size: 22px;
}

p {
  font-size: 14px;
  padding-top: 10px;
  color: #444;
}
</style>
