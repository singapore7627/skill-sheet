<template>
  <div>
    <div class="container-fluid overflow-hidden">
      <div class="max-width p-4 mx-auto">
        <div class="row mb-3">
          <div class="col">
            <h1 class="mt-5 mb-3">職務経歴書</h1>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col text-end">
            <div class="mb-1 fs-7">2023年3月9日</div>
            <div class="mb-1 fs-7">渡辺貴義</div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col text-start">
            <h3 class="mb-2 fs-5">■職務要約</h3>
            <p>私は素晴らしい経歴の持ち主です。</p>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col text-start">
            <h3 class="mb-2 fs-5">■言語経験等</h3>
            <p>
              JavaやJavaScriptを得意としています。SpringBoot, ThemeLeaf, Servletに精通しています。Vue.jsやNuxt.jsも使えます。
            </p>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col text-start">
            <h3 class="mb-2 fs-5">■保有資格</h3>
            <p>TOEIC750点です。</p>
          </div>
        </div>
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

<style scoped lang="scss">
  .max-width {
    max-width: 960px;
  }
</style>
