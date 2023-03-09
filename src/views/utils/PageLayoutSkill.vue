<template>
  <div>
    <div class="container-fluid overflow-hidden">
      <div class="max-width p-3 mx-auto">
        <div class="row mb-3">
          <div class="col">
            <h1 class="my-2 fs-3">職務経歴書</h1>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col text-end">
            <div class="mb-1 fs-7">2023年3月9日</div>
            <div class="mb-1 fs-7">渡辺貴義</div>
          </div>
        </div>
        <div class="row px-3">
          <div class="col text-end">
            <slot name="col-main" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'PageLayoutSkill',
  props: [
    'isSingleCol'
  ]
}
</script>

<style scoped lang="scss">
  .max-width {
    max-width: 960px;
  }
</style>
