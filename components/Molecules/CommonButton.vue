<template>
  <v-row justify="center"
    ><v-btn
      elevation="2"
      :height="height"
      :width="width"
      :color="color"
      class="button"
      :href="href"
      :disabled="disabled"
      ><v-icon dark size="36" color="#FAFCFD"> {{ buttonIcon }} </v-icon>
      {{ buttonText }}</v-btn
    >
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
@Component
export default class Default extends Vue {
  /**
   * ボタンのカラーコード
   * @type String
   */
  @Prop({ type: String, required: true })
  color!: string;

  /**
   * ボタンのマテリアルアイコンコード
   * @type String
   */
  @Prop({ type: String })
  buttonIcon!: string;

  /**
   * ボタンテキスト
   * @type String
   */
  @Prop({ type: String, required: true })
  buttonText!: string;

  /**
   * 高さ
   * @type String
   */
  @Prop({ type: String, required: true })
  height!: string;

  /**
   * 幅
   * @type String
   */
  @Prop({ type: String, required: true })
  width!: string;

  /**
   * ボタンの遷移先(SPA)
   * @type String
   */
  @Prop({ type: String })
  to!: string;

  /**
   * ボタンの遷移先
   * @type String
   */
  @Prop({ type: String })
  href!: string;

  @Prop({ type: Boolean })
  disabled!: boolean;
}
</script>

<style scoped>
.button {
  font-size: 36px;
  color: #fafcfd;
}
</style>
