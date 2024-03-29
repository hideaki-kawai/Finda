<template>
  <validation-provider v-slot="{ errors }" :name="label" :rules="rules">
    <div>
      <v-text-field
        :id="id"
        v-model="inputValue"
        :prepend-icon="icon"
        :name="id"
        background-color="white"
        dense
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxLength"
        required
        :error-messages="errors"
        @keydown.enter="$emit('search')"
        :keyup="convertHalfSpace()"
      ></v-text-field>
      <span>{{ errors.id }}</span>
    </div>
  </validation-provider>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "nuxt-property-decorator";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

// デフォルトのエラーメッセージを上書き
extend("required", {
  ...required,
  message: "{_field_}は必須項目です。",
});

@Component({
  components: { ValidationProvider, ValidationObserver },
})
export default class CommonTextBox extends Vue {
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
   * マテリアルデザインアイコン
   * @type {string}
   */
  @Prop({ type: String })
  icon!: string;

  /**
   * 説明
   * @type {string}
   */
  @Prop({ type: String })
  description!: string;

  /**
   * バリデーションルール
   * @type {string}
   */
  @Prop({ type: String })
  rules!: string;

  /**
   * 最大サイズ
   * @type {number}
   */
  @Prop({ type: Number })
  maxLength!: number;

  /**
   * 非活性か
   * @type {boolean}
   */
  @Prop({ type: Boolean })
  disabled!: boolean;

  /**
   * テキストボックスに入力する値の型
   * @type {string}
   */
  @Prop({ type: String })
  type!: string;

  /**
   * プレースホルダ
   * @type {string}
   */
  @Prop({ type: String })
  placeholder!: string;

  errorMessages: string = "";

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
    // return this.value.replace(/ /g, " ");
    return this.value;
  }

  /**
   * 入力時の処理
   * @param {string} val 入力値
   */
  set inputValue(val: string) {
    this.$emit("input", val);
  }

  /**
   * 入力された全角スペースを半角スペースに変換
   */
  @Watch("value")
  convertHalfSpace() {
    this.inputValue = this.inputValue.replace(/　/g, " ");
  }
}
</script>
<style>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus textarea:-webkit-autofill,
textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  -webkit-background-clip: text;
}
</style>
