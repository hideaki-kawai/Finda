<template>
  <footer>
    <ul class="footer-menu pt-2">
      <li>利用規約 /</li>
      <li>プライバシーポリシー</li>
    </ul>
    <p>© Hideaki Kawai, All rights reserved.</p>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
@Component
export default class Default extends Vue {}
</script>

<style scoped>
footer {
  width: 100%;
  height: 60px;
  background-color: #fffffb;
  color: #666666;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  position: absolute;
  bottom: 0;
  font-size: 14px;
}
ul.footer-menu li {
  display: inline;
}
p {
  color: #ccc;
  font-size: 12px;
}
</style>
