<template>
  <div>
    <div class="row mb-3">
      <div class="col text-start">
        <h3 class="mb-2 fs-6">■職務要約</h3>
        <p>私は素晴らしい経歴の持ち主です。</p>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col text-start">
        <h3 class="mb-2 fs-6">■知識・技術</h3>
        <p>
          JavaやJavaScriptを得意としています。SpringBoot, ThemeLeaf, Servletに精通しています。Vue.jsやNuxt.jsも使えます。
        </p>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col text-start">
        <h3 class="mb-2 fs-6">■保有資格</h3>
        <p>TOEIC750点です。</p>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col text-start">
        <h3 class="mb-2 fs-6">■職務経歴</h3>
        <p>初動を大切にしています。</p>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col text-start">
        <h3 class="mb-2 fs-6">■自己PR</h3>
        <p>初動を大切にしています。</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SlillSheet',
  props: {
    msg: String,
  },
});
</script>
