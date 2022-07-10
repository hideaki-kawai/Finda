<template>
  <v-select
    :id="id"
    v-model="inputValue"
    :label="label"
    :prepend-icon="icon"
    :items="options"
    :disabled="disabled"
    dense
    hide-details="auto"
    item-text="name"
    item-value="code"
    single-line
  ></v-select>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
export interface BudgetSelectBoxOption {
  code: string;
  name: string;
}

@Component
export default class BudgetSelectBox extends Vue {
  /**
   * 入力値
   * @type {string}
   */
  @Prop({ type: String, required: true })
  value!: string;

  /**
   * DOMのID
   * @type {string}
   */
  @Prop({ type: String })
  id!: string;

  /**
   * ラベル
   * @type {string}
   */
  @Prop({ type: String })
  label!: string;

  /**
   * 説明
   * @type {string}
   */
  @Prop({ type: String })
  description!: string;

  /**
   * マテリアルデザインアイコン
   * @type {string}
   */
  @Prop({ type: String })
  icon!: string;

  /**
   * セレクトボックスの項目
   * @type {BudgetSelectBoxOption[]}
   */
  @Prop({ type: Array, required: true })
  options!: BudgetSelectBoxOption[];

  /**
   * バリデーションルール
   * @type {string}
   */
  @Prop({ type: String })
  rules!: string;

  /**
   * 非活性か
   * @type {boolean}
   */
  @Prop({ type: Boolean })
  disabled!: boolean;

  /**
   * 必須項目か
   * @return {boolean}
   */
  get required(): boolean {
    if (this.rules && this.rules.includes("required")) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 入力を取得
   * @return {string} 入力値
   */
  get inputValue(): string {
    return this.value;
  }

  /**
   * 入力時の処理
   * @param {string} val 入力値
   */
  set inputValue(val: string) {
    this.$emit("input", val);
  }
}
</script>
